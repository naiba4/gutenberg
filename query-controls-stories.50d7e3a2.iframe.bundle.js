"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1167],{"./packages/components/src/select-control/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return SelectControl}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/base-control/index.tsx"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function UnforwardedSelectControl(_ref,ref){let{className:className,disabled:disabled=!1,help:help,hideLabelFromVision:hideLabelFromVision,id:idProp,label:label,multiple:multiple=!1,onBlur:onBlur=noop,onChange:onChange=noop,onFocus:onFocus=noop,options:options=[],size:size="default",value:valueProp,labelPosition:labelPosition="top",children:children,prefix:prefix,suffix:suffix,__next36pxDefaultSize:__next36pxDefaultSize=!1,__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,...props}=_ref;const[isFocused,setIsFocused]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!(null!=options&&options.length||children))return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-select-control",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{help:help,id:id,__nextHasNoMarginBottom:__nextHasNoMarginBottom,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__.Z,{className:classes,disabled:disabled,hideLabelFromVision:hideLabelFromVision,id:id,isFocused:isFocused,label:label,size:size,suffix:suffix||!multiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,{}),prefix:prefix,labelPosition:labelPosition,__next36pxDefaultSize:__next36pxDefaultSize,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__.Ph,{...props,__next36pxDefaultSize:__next36pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled:disabled,id:id,multiple:multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{if(multiple){const newValues=Array.from(event.target.options).filter((_ref2=>{let{selected:selected}=_ref2;return selected})).map((_ref3=>{let{value:value}=_ref3;return value}));onChange(newValues)}else onChange(event.target.value,{event:event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref:ref,selectSize:size,value:valueProp,children:children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:option.value,disabled:option.disabled,children:option.label},key)}))})})})}UnforwardedSelectControl.displayName="UnforwardedSelectControl";const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(UnforwardedSelectControl);__webpack_exports__.Z=SelectControl;try{SelectControl.displayName="SelectControl",SelectControl.__docgenInfo={description:"`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.",displayName:"SelectControl",props:{multiple:{defaultValue:{value:"false"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"(value: string | string[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; id?: string; disabled?: boolean; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/select-control/index.tsx#SelectControl"]={docgenInfo:SelectControl.__docgenInfo,name:"SelectControl",path:"packages/components/src/select-control/index.tsx#SelectControl"})}catch(__react_docgen_typescript_loader_error){}try{selectcontrol.displayName="selectcontrol",selectcontrol.__docgenInfo={description:"`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.",displayName:"selectcontrol",props:{multiple:{defaultValue:{value:"false"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"(value: string | string[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; id?: string; disabled?: boolean; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/select-control/index.tsx#selectcontrol"]={docgenInfo:selectcontrol.__docgenInfo,name:"selectcontrol",path:"packages/components/src/select-control/index.tsx#selectcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/tree-select/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/html-entities/build-module/index.js"),_select_control__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/select-control/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function getSelectOptions(tree){let level=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return tree.flatMap((treeNode=>[{value:treeNode.id,label:" ".repeat(3*level)+(0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.S)(treeNode.name)},...getSelectOptions(treeNode.children||[],level+1)]))}function TreeSelect(_ref){let{label:label,noOptionLabel:noOptionLabel,onChange:onChange,selectedId:selectedId,tree:tree=[],...props}=_ref;const options=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>[noOptionLabel&&{value:"",label:noOptionLabel},...getSelectOptions(tree)].filter((option=>!!option))),[noOptionLabel,tree]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_select_control__WEBPACK_IMPORTED_MODULE_3__.Y,{label:label,options:options,onChange:onChange,value:selectedId,...props})}TreeSelect.displayName="TreeSelect",__webpack_exports__.Z=TreeSelect;try{TreeSelect.displayName="TreeSelect",TreeSelect.__docgenInfo={description:"TreeSelect component is used to generate select input fields.",displayName:"TreeSelect",props:{noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},tree:{defaultValue:{value:"[]"},description:"An array containing the tree objects with the possible nodes the user can select.",name:"tree",required:!1,type:{name:"Tree[]"}},selectedId:{defaultValue:null,description:"The id of the currently selected node.",name:"selectedId",required:!1,type:{name:"string | string[]"}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"(value: string | string[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},multiple:{defaultValue:{value:"false"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; id?: string; disabled?: boolean; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/tree-select/index.tsx#TreeSelect"]={docgenInfo:TreeSelect.__docgenInfo,name:"TreeSelect",path:"packages/components/src/tree-select/index.tsx#TreeSelect"})}catch(__react_docgen_typescript_loader_error){}},"./packages/html-entities/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){let _decodeTextArea;function decodeEntities(html){if("string"!=typeof html||-1===html.indexOf("&"))return html;void 0===_decodeTextArea&&(_decodeTextArea=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),_decodeTextArea.innerHTML=html;const decoded=_decodeTextArea.textContent;return _decodeTextArea.innerHTML="",decoded}__webpack_require__.d(__webpack_exports__,{S:function(){return decodeEntities}})},"./packages/components/src/query-controls/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},SelectSingleCategory:function(){return SelectSingleCategory},default:function(){return stories}});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js");function buildTermsTree(flatTerms){const flatTermsWithParentAndChildren=flatTerms.map((term=>({children:[],parent:null,...term,id:String(term.id)}))),termsByParent=(0,lodash.groupBy)(flatTermsWithParentAndChildren,"parent");if(termsByParent.null&&termsByParent.null.length)return flatTermsWithParentAndChildren;const fillWithChildren=terms=>terms.map((term=>{const children=termsByParent[term.id];return{...term,children:children&&children.length?fillWithChildren(children):[]}}));return fillWithChildren(termsByParent[0]||[])}var tree_select=__webpack_require__("./packages/components/src/tree-select/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AuthorSelect(_ref){let{label:label,noOptionLabel:noOptionLabel,authorList:authorList,selectedAuthorId:selectedAuthorId,onChange:onChangeProp}=_ref;if(!authorList)return null;const termsTree=buildTermsTree(authorList);return(0,jsx_runtime.jsx)(tree_select.Z,{label:label,noOptionLabel:noOptionLabel,onChange:onChangeProp,tree:termsTree,selectedId:void 0!==selectedAuthorId?String(selectedAuthorId):void 0})}AuthorSelect.displayName="AuthorSelect";try{authorselect.displayName="authorselect",authorselect.__docgenInfo={description:"",displayName:"authorselect",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},authorList:{defaultValue:null,description:"",name:"authorList",required:!1,type:{name:"Author[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newAuthor: string) => void"}},selectedAuthorId:{defaultValue:null,description:"",name:"selectedAuthorId",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/query-controls/author-select.tsx#authorselect"]={docgenInfo:authorselect.__docgenInfo,name:"authorselect",path:"packages/components/src/query-controls/author-select.tsx#authorselect"})}catch(__react_docgen_typescript_loader_error){}function CategorySelect(_ref){let{label:label,noOptionLabel:noOptionLabel,categoriesList:categoriesList,selectedCategoryId:selectedCategoryId,onChange:onChangeProp,...props}=_ref;const termsTree=(0,react.useMemo)((()=>buildTermsTree(categoriesList)),[categoriesList]);return(0,jsx_runtime.jsx)(tree_select.Z,{label:label,noOptionLabel:noOptionLabel,onChange:onChangeProp,tree:termsTree,selectedId:void 0!==selectedCategoryId?String(selectedCategoryId):void 0,...props})}CategorySelect.displayName="CategorySelect";try{categoryselect.displayName="categoryselect",categoryselect.__docgenInfo={description:"",displayName:"categoryselect",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},categoriesList:{defaultValue:null,description:"",name:"categoriesList",required:!0,type:{name:"Category[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newCategory: string) => void"}},selectedCategoryId:{defaultValue:null,description:"",name:"selectedCategoryId",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/query-controls/category-select.tsx#categoryselect"]={docgenInfo:categoryselect.__docgenInfo,name:"categoryselect",path:"packages/components/src/query-controls/category-select.tsx#categoryselect"})}catch(__react_docgen_typescript_loader_error){}var form_token_field=__webpack_require__("./packages/components/src/form-token-field/index.tsx"),range_control=__webpack_require__("./packages/components/src/range-control/index.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx");const DEFAULT_MIN_ITEMS=1,DEFAULT_MAX_ITEMS=100;function isSingleCategorySelection(props){return"categoriesList"in props}function isMultipleCategorySelection(props){return"categorySuggestions"in props}function QueryControls(_ref){let{authorList:authorList,selectedAuthorId:selectedAuthorId,numberOfItems:numberOfItems,order:order,orderBy:orderBy,maxItems:maxItems=DEFAULT_MAX_ITEMS,minItems:minItems=DEFAULT_MIN_ITEMS,onAuthorChange:onAuthorChange,onNumberOfItemsChange:onNumberOfItemsChange,onOrderChange:onOrderChange,onOrderByChange:onOrderByChange,...props}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[onOrderChange&&onOrderByChange&&(0,jsx_runtime.jsx)(select_control.Z,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Order by"),value:`${orderBy}/${order}`,options:[{label:(0,build_module.__)("Newest to oldest"),value:"date/desc"},{label:(0,build_module.__)("Oldest to newest"),value:"date/asc"},{label:(0,build_module.__)("A → Z"),value:"title/asc"},{label:(0,build_module.__)("Z → A"),value:"title/desc"}],onChange:value=>{if("string"!=typeof value)return;const[newOrderBy,newOrder]=value.split("/");newOrder!==order&&onOrderChange(newOrder),newOrderBy!==orderBy&&onOrderByChange(newOrderBy)}},"query-controls-order-select"),isSingleCategorySelection(props)&&props.categoriesList&&props.onCategoryChange&&(0,jsx_runtime.jsx)(CategorySelect,{categoriesList:props.categoriesList,label:(0,build_module.__)("Category"),noOptionLabel:(0,build_module.__)("All"),selectedCategoryId:props.selectedCategoryId,onChange:props.onCategoryChange},"query-controls-category-select"),isMultipleCategorySelection(props)&&props.categorySuggestions&&props.onCategoryChange&&(0,jsx_runtime.jsx)(form_token_field.Z,{label:(0,build_module.__)("Categories"),value:props.selectedCategories&&props.selectedCategories.map((item=>({id:item.id,value:item.name||item.value}))),suggestions:Object.keys(props.categorySuggestions),onChange:props.onCategoryChange,maxSuggestions:20},"query-controls-categories-select"),onAuthorChange&&(0,jsx_runtime.jsx)(AuthorSelect,{authorList:authorList,label:(0,build_module.__)("Author"),noOptionLabel:(0,build_module.__)("All"),selectedAuthorId:selectedAuthorId,onChange:onAuthorChange},"query-controls-author-select"),onNumberOfItemsChange&&(0,jsx_runtime.jsx)(range_control.Z,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Number of items"),value:numberOfItems,onChange:onNumberOfItemsChange,min:minItems,max:maxItems,required:!0},"query-controls-range-control")]})}var query_controls=QueryControls;try{QueryControls.displayName="QueryControls",QueryControls.__docgenInfo={description:"Controls to query for posts.\n\n```jsx\nconst MyQueryControls = () => (\n  <QueryControls\n    { ...{ maxItems, minItems, numberOfItems, order, orderBy } }\n    onOrderByChange={ ( newOrderBy ) => {\n      updateQuery( { orderBy: newOrderBy } )\n    }\n    onOrderChange={ ( newOrder ) => {\n      updateQuery( { order: newOrder } )\n    }\n    categoriesList={ categories }\n    selectedCategoryId={ category }\n    onCategoryChange={ ( newCategory ) => {\n      updateQuery( { category: newCategory } )\n    }\n    onNumberOfItemsChange={ ( newNumberOfItems ) => {\n      updateQuery( { numberOfItems: newNumberOfItems } )\n    } }\n  />\n);\n```",displayName:"QueryControls",props:{authorList:{defaultValue:null,description:"An array of the authors to select from.",name:"authorList",required:!1,type:{name:"Author[]"}},maxItems:{defaultValue:{value:"100"},description:"The maximum number of items.",name:"maxItems",required:!1,type:{name:"number"}},minItems:{defaultValue:{value:"1"},description:"The minimum number of items.",name:"minItems",required:!1,type:{name:"number"}},numberOfItems:{defaultValue:null,description:"The selected number of items to retrieve via the query.",name:"numberOfItems",required:!1,type:{name:"number"}},onAuthorChange:{defaultValue:null,description:"A function that receives the new author value.\nIf not specified, the author controls are not rendered.",name:"onAuthorChange",required:!1,type:{name:"(newAuthor: string) => void"}},onNumberOfItemsChange:{defaultValue:null,description:"A function that receives the new number of items.\nIf not specified, then the number of items\nrange control is not rendered.",name:"onNumberOfItemsChange",required:!1,type:{name:"(newNumber?: number) => void"}},onOrderChange:{defaultValue:null,description:"A function that receives the new order value.\nIf this prop or the `onOrderByChange` prop are not specified,\nthen the order controls are not rendered.",name:"onOrderChange",required:!1,type:{name:"(newOrder: Order) => void"}},onOrderByChange:{defaultValue:null,description:"A function that receives the new orderby value.\nIf this prop or the `onOrderChange` prop are not specified,\nthen the order controls are not rendered.",name:"onOrderByChange",required:!1,type:{name:"(newOrderBy: OrderBy) => void"}},order:{defaultValue:null,description:"The order in which to retrieve posts.",name:"order",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},orderBy:{defaultValue:null,description:"The meta key by which to order posts.",name:"orderBy",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"date"'}]}},selectedAuthorId:{defaultValue:null,description:"The selected author ID.",name:"selectedAuthorId",required:!1,type:{name:"number"}},categoriesList:{defaultValue:null,description:"An array of categories. When passed in conjunction with the\n`onCategoryChange` prop, it causes the component to render UI that allows\nselecting one category at a time.",name:"categoriesList",required:!1,type:{name:"Category[]"}},selectedCategoryId:{defaultValue:null,description:"The selected category for the `categoriesList` prop.",name:"selectedCategoryId",required:!1,type:{name:"number"}},onCategoryChange:{defaultValue:null,description:"A function that receives the new category value. If not specified, the\ncategory controls are not rendered.\nThe function's signature changes depending on whether multiple category\nselection is enabled or not.",name:"onCategoryChange",required:!1,type:{name:"((newCategory: string) => void) | ((tokens: (string | TokenItem)[]) => void)"}},categorySuggestions:{defaultValue:null,description:"An object of categories with the category name as the key. When passed in\nconjunction with the `onCategoryChange` prop, it causes the component to\nrender UI that enables multiple selection.",name:"categorySuggestions",required:!1,type:{name:"Record<string, Category>"}},selectedCategories:{defaultValue:null,description:"The selected categories for the `categorySuggestions` prop.",name:"selectedCategories",required:!1,type:{name:"Category[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/query-controls/index.tsx#QueryControls"]={docgenInfo:QueryControls.__docgenInfo,name:"QueryControls",path:"packages/components/src/query-controls/index.tsx#QueryControls"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Components/QueryControls",component:query_controls,argTypes:{numberOfItems:{control:{type:null}},order:{control:{type:null}},orderBy:{control:{type:null}},selectedAuthorId:{control:{type:null}},selectedCategories:{control:{type:null}},selectedCategoryId:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/query-controls",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{source:{state:"open"}}}};const Default=args=>{const{onAuthorChange:onAuthorChange,onCategoryChange:onCategoryChange,onNumberOfItemsChange:onNumberOfItemsChange,onOrderByChange:onOrderByChange,onOrderChange:onOrderChange,...props}=args,[ownNumberOfItems,setOwnNumberOfItems]=(0,react.useState)(props.numberOfItems),[ownOrder,setOwnOrder]=(0,react.useState)(props.order),[ownOrderBy,setOwnOrderBy]=(0,react.useState)(props.orderBy),[ownSelectedAuthorId,setOwnSelectedAuthorId]=(0,react.useState)(props.selectedAuthorId),[ownSelectedCategories,setOwnSelectedCategories]=(0,react.useState)(props.selectedCategories);return(0,jsx_runtime.jsx)(query_controls,{...props,numberOfItems:ownNumberOfItems,onCategoryChange:tokens=>{null==onCategoryChange||onCategoryChange(tokens);if(tokens.some((token=>{var _props$categorySugges;return"string"==typeof token&&!(null!==(_props$categorySugges=props.categorySuggestions)&&void 0!==_props$categorySugges&&_props$categorySugges[token])})))return;const allCategories=tokens.map((token=>{var _props$categorySugges2;return"string"==typeof token?null===(_props$categorySugges2=props.categorySuggestions)||void 0===_props$categorySugges2?void 0:_props$categorySugges2[token]:token})).filter(Boolean);setOwnSelectedCategories(allCategories)},onOrderByChange:newOrderBy=>{null==onOrderByChange||onOrderByChange(newOrderBy),setOwnOrderBy(newOrderBy)},onOrderChange:newOrder=>{null==onOrderChange||onOrderChange(newOrder),setOwnOrder(newOrder)},order:ownOrder,orderBy:ownOrderBy,onNumberOfItemsChange:newNumber=>{null==onNumberOfItemsChange||onNumberOfItemsChange(newNumber),setOwnNumberOfItems(newNumber)},onAuthorChange:newAuthor=>{null==onAuthorChange||onAuthorChange(newAuthor),setOwnSelectedAuthorId(Number(newAuthor))},selectedAuthorId:ownSelectedAuthorId,selectedCategories:ownSelectedCategories})};Default.displayName="Default",Default.args={authorList:[{id:1,name:"admin"},{id:2,name:"editor"}],categorySuggestions:{TypeScript:{id:11,name:"TypeScript",parent:0},JavaScript:{id:12,name:"JavaScript",parent:0}},selectedCategories:[{id:11,name:"JavaScript",parent:0}],numberOfItems:5,order:"desc",orderBy:"date",selectedAuthorId:1};const SingleCategoryTemplate=args=>{const{onAuthorChange:onAuthorChange,onCategoryChange:onCategoryChange,onNumberOfItemsChange:onNumberOfItemsChange,onOrderByChange:onOrderByChange,onOrderChange:onOrderChange,...props}=args,[ownOrder,setOwnOrder]=(0,react.useState)(props.order),[ownOrderBy,setOwnOrderBy]=(0,react.useState)(props.orderBy),[ownSelectedCategoryId,setSelectedCategoryId]=(0,react.useState)(props.selectedCategoryId);return(0,jsx_runtime.jsx)(query_controls,{...props,onCategoryChange:newCategory=>{null==onCategoryChange||onCategoryChange(newCategory),setSelectedCategoryId(Number(newCategory))},onOrderByChange:newOrderBy=>{setOwnOrderBy(newOrderBy)},onOrderChange:newOrder=>{null==onOrderChange||onOrderChange(newOrder),setOwnOrder(newOrder)},order:ownOrder,orderBy:ownOrderBy,selectedCategoryId:ownSelectedCategoryId})};SingleCategoryTemplate.displayName="SingleCategoryTemplate";const SelectSingleCategory=SingleCategoryTemplate.bind({});SelectSingleCategory.args={categoriesList:[{id:11,name:"TypeScript",parent:0},{id:12,name:"JavaScript",parent:0}],selectedCategoryId:11};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/query-controls/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/query-controls/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);