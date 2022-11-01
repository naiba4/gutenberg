/**
 * WordPress dependencies
 */
import {
	store as coreStore,
	useResourcePermissions,
} from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import useNavigationEntityTypes from './use-navigation-entity-types';

export default function useNavigationMenu( recordKey ) {
	const permissions = useResourcePermissions( 'navigation', recordKey );

	const entityConfig = useNavigationEntityTypes( recordKey );

	return useSelect(
		( select ) => {
			const {
				canCreate,
				canUpdate,
				canDelete,
				isResolving,
				hasResolved,
			} = permissions;

			const {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,
			} = selectNavigationMenus( select, recordKey, entityConfig );

			const {
				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,
			} = selectExistingMenu( select, recordKey, entityConfig );

			return {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,

				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,

				canSwitchNavigationMenu: recordKey
					? navigationMenus?.length > 1
					: navigationMenus?.length > 0,

				canUserCreateNavigationMenu: canCreate,
				isResolvingCanUserCreateNavigationMenu: isResolving,
				hasResolvedCanUserCreateNavigationMenu: hasResolved,

				canUserUpdateNavigationMenu: canUpdate,
				hasResolvedCanUserUpdateNavigationMenu: recordKey
					? hasResolved
					: undefined,

				canUserDeleteNavigationMenu: canDelete,
				hasResolvedCanUserDeleteNavigationMenu: recordKey
					? hasResolved
					: undefined,
			};
		},
		[ recordKey, permissions ]
	);
}

function selectNavigationMenus( select, _recordKey, entityConfig ) {
	const { getEntityRecords, hasFinishedResolution, isResolving } =
		select( coreStore );

	const args = [ ...entityConfig, { per_page: -1, status: 'publish' } ];

	return {
		navigationMenus: getEntityRecords( ...args ),
		isResolvingNavigationMenus: isResolving( 'getEntityRecords', args ),
		hasResolvedNavigationMenus: hasFinishedResolution(
			'getEntityRecords',
			args
		),
	};
}

function selectExistingMenu( select, recordKey, entityConfig ) {
	if ( ! recordKey ) {
		return {
			isNavigationMenuResolved: false,
			isNavigationMenuMissing: true,
			navigationMenu: null,
		};
	}

	const { getEntityRecords, getEditedEntityRecord, hasFinishedResolution } =
		select( coreStore );

	// Find a **single** Navigation Menu using the slug attribute
	// as the identifier (i.e. recordKey).
	const navigationMenus = getEntityRecords( ...entityConfig, {
		per_page: 1, // only the 1 record is required.
		name: recordKey, // fetch by slug (post_name).
	} );

	const hasNavigationMenu = navigationMenus?.length;

	// `wp_navigation` entities are keyed by Post ID in state.
	// Perform subsequent lookups based on the ID of the record
	// returned by the slug-based query (if available).
	const idQueryArgs = hasNavigationMenu
		? [ ...entityConfig, navigationMenus[ 0 ]?.id ]
		: [];

	const editedNavigationMenu = hasNavigationMenu
		? getEditedEntityRecord( ...idQueryArgs )
		: null;

	const hasResolvedNavigationMenu = hasNavigationMenu
		? hasFinishedResolution( 'getEditedEntityRecord', idQueryArgs )
		: null;

	// Only published Navigation posts are considered valid.
	// Draft Navigation posts are valid only on the editor,
	// requiring a post update to publish to show in frontend.
	// To achieve that, index.php must recordKeylect this validation only for published.
	const isNavigationMenuPublishedOrDraft =
		editedNavigationMenu?.status === 'publish' ||
		editedNavigationMenu?.status === 'draft';

	const rtn = {
		isNavigationMenuResolved: hasResolvedNavigationMenu,
		isNavigationMenuMissing:
			hasResolvedNavigationMenu &&
			( ! hasNavigationMenu || ! isNavigationMenuPublishedOrDraft ),

		// getEditedEntityRecord will return the post regardless of status.
		// TherecordKeyore if the found post is not published then we should ignore it.
		navigationMenu: isNavigationMenuPublishedOrDraft
			? editedNavigationMenu
			: null,
	};

	return rtn;
}
