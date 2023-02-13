/**
 * WordPress dependencies
 */
import { Inserter } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { plus } from '@wordpress/icons';

export default function Appender( { clientId } ) {
	return (
		<div className="edit-site-navigation-inspector__appender">
			<Inserter
				rootClientId={ clientId }
				position="bottom right"
				isAppender={ true }
				selectBlockOnInsert={ false }
				shouldDirectInsert={ false }
				__experimentalIsQuick
				renderToggle={ ( {
					onToggle,
					disabled,
					isOpen,
					hasSingleBlockType,
					toggleProps = {},
				} ) => {
					const { onClick, ...rest } = toggleProps;
					// Handle both onClick functions from the toggle and the parent component.
					function handleClick( event ) {
						if ( onToggle ) {
							onToggle( event );
						}
						if ( onClick ) {
							onClick( event );
						}
					}
					return (
						<Button
							icon={ plus }
							onClick={ handleClick }
							className="block-editor-inserter__toggle"
							aria-haspopup={
								! hasSingleBlockType ? 'true' : false
							}
							aria-expanded={
								! hasSingleBlockType ? isOpen : false
							}
							disabled={ disabled }
							{ ...rest }
						>
							{ __( 'Add menu item' ) }
						</Button>
					);
				} }
			/>
		</div>
	);
}
