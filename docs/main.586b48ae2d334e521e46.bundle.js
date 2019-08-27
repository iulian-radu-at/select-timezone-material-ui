(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutProperties=__webpack_require__(419),react=__webpack_require__(0),moment_timezone=__webpack_require__(173),lib=__webpack_require__(414);__webpack_exports__.a=function SelectTimezoneMaterialUi(_ref){var defaultTimezoneName=_ref.defaultTimezoneName,onChange=_ref.onChange,showTimezoneOffset=_ref.showTimezoneOffset,timezoneName=_ref.timezoneName,rest=Object(objectWithoutProperties.a)(_ref,["defaultTimezoneName","onChange","showTimezoneOffset","timezoneName"]),handleChange=react.useCallback(function(timezoneOffset,timezoneOption){onChange&&onChange(timezoneOption?timezoneOption.label:"",timezoneOffset)},[onChange]),options=react.useMemo(function(){return function getTimeZoneOptions(showTimezoneOffset){var timeZones=moment_timezone.tz.names(),offsetTmz=[];for(var i in timeZones){var tz=timeZones[i],tzOffset=moment_timezone.tz(tz).format("Z"),value=parseInt(tzOffset.replace(":00",".00").replace(":15",".25").replace(":30",".50").replace(":45",".75")).toFixed(2),timeZoneOption={label:showTimezoneOffset?"".concat(tz," (GMT").concat(tzOffset,")"):tz,value:value};offsetTmz.push(timeZoneOption)}return offsetTmz}(showTimezoneOffset)},[showTimezoneOffset]),defaultValue=react.useMemo(function(){if(void 0!==defaultTimezoneName){var matchingOption=options.find(function(option){return option.label===defaultTimezoneName});return matchingOption?matchingOption.value:void 0}},[options,defaultTimezoneName]),value=react.useMemo(function(){if(void 0!==timezoneName){var matchingOption=options.find(function(option){return option.label===timezoneName});return matchingOption?matchingOption.value:void 0}},[options,timezoneName]);return console.log({value:value,defaultValue:defaultValue,options:options}),react.createElement(lib.SingleSelect,Object.assign({key:timezoneName},rest,{options:options,defaultValue:defaultValue,value:value,placeholder:"Timezone ...",onChange:handleChange,SelectProps:{msgNoOptionsAvailable:"No timezone was defined",msgNoOptionsMatchFilter:"No timezone matches the filter"}}))}},416:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_rai_Workspace_components_select_timezone_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(174),_home_rai_Workspace_components_select_timezone_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(418),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),index=0,pickRandomOption=function pickRandomOption(selectOptions){return selectOptions[index=(index+1)%selectOptions.length]};__webpack_exports__.a=function ATDynamicUpdateValuesControlledComponent(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({timezoneName:"Africa/Asmara"}),_useState2=Object(_home_rai_Workspace_components_select_timezone_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),form=_useState2[0],setForm=_useState2[1],options=["Africa/Asmara","America/Antigua","Asia/Chita","Europe/Vienna","Australia/Brisbane"];setTimeout(function(){var timezoneName=pickRandomOption(options);setForm(Object(_home_rai_Workspace_components_select_timezone_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},form,{timezoneName:timezoneName}))},500);return console.log({newTimezoneName:form.timezoneName}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_3__.a,{timezoneName:form.timezoneName,onChange:function handleChange(timezoneName,timezoneOffset){setForm(Object(_home_rai_Workspace_components_select_timezone_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},form,{timezoneName:timezoneName}))}})}},424:function(module,exports,__webpack_require__){__webpack_require__(425),__webpack_require__(528),module.exports=__webpack_require__(529)},529:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(88);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(690)},module)}.call(this,__webpack_require__(207)(module))},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _ATDynamicUpdateValuesControlledComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(416),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(30),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(88),style={height:20},showSelectedValue=function showSelectedValue(id){return function(timezoneName,timezoneOffset){return document.getElementById(id).textContent="".concat(timezoneName," (").concat(timezoneOffset,")")}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("SelectTimezoneMaterialUi",module).addParameters({options:{showPanel:!1}}).add("options does not contain timezone offset",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{onChange:showSelectedValue("stzmui1")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmui1"}))}).add("options contain timezone offset",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{showTimezoneOffset:!0,onChange:showSelectedValue("stzmui2")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmui2"}))}).add("controlled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{timezoneName:"America/New_York",onChange:showSelectedValue("stzmuic")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuic"}))}).add("uncontrolled with default timezone name",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{defaultTimezoneName:"America/New_York",onChange:showSelectedValue("stzmuiuc")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuiuc"}))}).add("with label",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Timezone",onChange:showSelectedValue("stzmuil")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuil"}))}).add("with helper text",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{helperText:"Please select a timezone from the list",onChange:showSelectedValue("stzmuiht")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuiht"}))}).add("with preselected timezone (without GMT in option)",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{timezoneName:"Etc/UTC",onChange:showSelectedValue("stzmuipt1")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuipt1"}))}).add("with preselected timezone (with GMT in option)",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_SelectTimezoneMaterialUi__WEBPACK_IMPORTED_MODULE_2__.a,{timezoneName:"Etc/UTC (GMT+00:00)",showTimezoneOffset:!0,onChange:showSelectedValue("stzmuipt2")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected timezone: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"stzmuipt2"}))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Advanced tests",module).addParameters({options:{showPanel:!1}}).add("Dynamic update of timezone for a controlled component",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ATDynamicUpdateValuesControlledComponent__WEBPACK_IMPORTED_MODULE_0__.a,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"The selected timezone should change every 0.5 seconds."))})}.call(this,__webpack_require__(207)(module))},692:function(module,exports,__webpack_require__){var map={"./af":265,"./af.js":265,"./ar":266,"./ar-dz":267,"./ar-dz.js":267,"./ar-kw":268,"./ar-kw.js":268,"./ar-ly":269,"./ar-ly.js":269,"./ar-ma":270,"./ar-ma.js":270,"./ar-sa":271,"./ar-sa.js":271,"./ar-tn":272,"./ar-tn.js":272,"./ar.js":266,"./az":273,"./az.js":273,"./be":274,"./be.js":274,"./bg":275,"./bg.js":275,"./bm":276,"./bm.js":276,"./bn":277,"./bn.js":277,"./bo":278,"./bo.js":278,"./br":279,"./br.js":279,"./bs":280,"./bs.js":280,"./ca":281,"./ca.js":281,"./cs":282,"./cs.js":282,"./cv":283,"./cv.js":283,"./cy":284,"./cy.js":284,"./da":285,"./da.js":285,"./de":286,"./de-at":287,"./de-at.js":287,"./de-ch":288,"./de-ch.js":288,"./de.js":286,"./dv":289,"./dv.js":289,"./el":290,"./el.js":290,"./en-SG":291,"./en-SG.js":291,"./en-au":292,"./en-au.js":292,"./en-ca":293,"./en-ca.js":293,"./en-gb":294,"./en-gb.js":294,"./en-ie":295,"./en-ie.js":295,"./en-il":296,"./en-il.js":296,"./en-nz":297,"./en-nz.js":297,"./eo":298,"./eo.js":298,"./es":299,"./es-do":300,"./es-do.js":300,"./es-us":301,"./es-us.js":301,"./es.js":299,"./et":302,"./et.js":302,"./eu":303,"./eu.js":303,"./fa":304,"./fa.js":304,"./fi":305,"./fi.js":305,"./fo":306,"./fo.js":306,"./fr":307,"./fr-ca":308,"./fr-ca.js":308,"./fr-ch":309,"./fr-ch.js":309,"./fr.js":307,"./fy":310,"./fy.js":310,"./ga":311,"./ga.js":311,"./gd":312,"./gd.js":312,"./gl":313,"./gl.js":313,"./gom-latn":314,"./gom-latn.js":314,"./gu":315,"./gu.js":315,"./he":316,"./he.js":316,"./hi":317,"./hi.js":317,"./hr":318,"./hr.js":318,"./hu":319,"./hu.js":319,"./hy-am":320,"./hy-am.js":320,"./id":321,"./id.js":321,"./is":322,"./is.js":322,"./it":323,"./it-ch":324,"./it-ch.js":324,"./it.js":323,"./ja":325,"./ja.js":325,"./jv":326,"./jv.js":326,"./ka":327,"./ka.js":327,"./kk":328,"./kk.js":328,"./km":329,"./km.js":329,"./kn":330,"./kn.js":330,"./ko":331,"./ko.js":331,"./ku":332,"./ku.js":332,"./ky":333,"./ky.js":333,"./lb":334,"./lb.js":334,"./lo":335,"./lo.js":335,"./lt":336,"./lt.js":336,"./lv":337,"./lv.js":337,"./me":338,"./me.js":338,"./mi":339,"./mi.js":339,"./mk":340,"./mk.js":340,"./ml":341,"./ml.js":341,"./mn":342,"./mn.js":342,"./mr":343,"./mr.js":343,"./ms":344,"./ms-my":345,"./ms-my.js":345,"./ms.js":344,"./mt":346,"./mt.js":346,"./my":347,"./my.js":347,"./nb":348,"./nb.js":348,"./ne":349,"./ne.js":349,"./nl":350,"./nl-be":351,"./nl-be.js":351,"./nl.js":350,"./nn":352,"./nn.js":352,"./pa-in":353,"./pa-in.js":353,"./pl":354,"./pl.js":354,"./pt":355,"./pt-br":356,"./pt-br.js":356,"./pt.js":355,"./ro":357,"./ro.js":357,"./ru":358,"./ru.js":358,"./sd":359,"./sd.js":359,"./se":360,"./se.js":360,"./si":361,"./si.js":361,"./sk":362,"./sk.js":362,"./sl":363,"./sl.js":363,"./sq":364,"./sq.js":364,"./sr":365,"./sr-cyrl":366,"./sr-cyrl.js":366,"./sr.js":365,"./ss":367,"./ss.js":367,"./sv":368,"./sv.js":368,"./sw":369,"./sw.js":369,"./ta":370,"./ta.js":370,"./te":371,"./te.js":371,"./tet":372,"./tet.js":372,"./tg":373,"./tg.js":373,"./th":374,"./th.js":374,"./tl-ph":375,"./tl-ph.js":375,"./tlh":376,"./tlh.js":376,"./tr":377,"./tr.js":377,"./tzl":378,"./tzl.js":378,"./tzm":379,"./tzm-latn":380,"./tzm-latn.js":380,"./tzm.js":379,"./ug-cn":381,"./ug-cn.js":381,"./uk":382,"./uk.js":382,"./ur":383,"./ur.js":383,"./uz":384,"./uz-latn":385,"./uz-latn.js":385,"./uz.js":384,"./vi":386,"./vi.js":386,"./x-pseudo":387,"./x-pseudo.js":387,"./yo":388,"./yo.js":388,"./zh-cn":389,"./zh-cn.js":389,"./zh-hk":390,"./zh-hk.js":390,"./zh-tw":391,"./zh-tw.js":391};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=692}},[[424,1,2]]]);
//# sourceMappingURL=main.586b48ae2d334e521e46.bundle.js.map