(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{438:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(24),__webpack_require__(83);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),getUsernameUrl=function(username){return"https://unsplash.com/@".concat(username,"?").concat("utm_source=test-driven-carousel&utm_medium=referral")},_ref2=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",{href:"https://unsplash.com/?".concat("utm_source=test-driven-carousel&utm_medium=referral")},"Unsplash"),getAttribution=function(_ref){var name=_ref.name,username=_ref.username;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,"Photo by ",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",{href:getUsernameUrl(username)},name)," on "," ",_ref2)};__webpack_exports__.a=[{description:"Seattle",attribution:getAttribution({name:"Ganapathy Kumar",username:"gkumar2175"}),imgUrl:"https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e"},{description:"Chicago",attribution:getAttribution({name:"Austin Neill",username:"arstyy"}),imgUrl:"https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=f56c763ccf86e87644b049c9abbcf455"},{description:"Barcelona",attribution:getAttribution({name:"Enes",username:"royalfound"}),imgUrl:"https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=e836c604036680eeba5c77ebdb171c73"},{description:"New York",attribution:getAttribution({name:"Anthony DELANOIX",username:"anthonydelanoix"}),imgUrl:"https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=54a272d03f5c06c416e8899f113dff06"},{description:"Rio de Janeiro",attribution:getAttribution({name:"Agustín Diaz",username:"agussdiaz28"}),imgUrl:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=966003791f746c210b73863cf6170e6c"}]},440:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(21),__webpack_require__(28),__webpack_require__(35),__webpack_require__(24),__webpack_require__(87),__webpack_require__(25),__webpack_require__(50),__webpack_require__(62),__webpack_require__(126),__webpack_require__(63),__webpack_require__(98),__webpack_require__(44),__webpack_require__(127),__webpack_require__(20),__webpack_require__(239),__webpack_require__(51),__webpack_require__(36),__webpack_require__(30);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(4),prop_types_default=__webpack_require__.n(prop_types),CarouselButton=function(props){return react_default.a.createElement("button",props)};CarouselButton.displayName="CarouselButton",CarouselButton.propTypes={children:prop_types_default.a.node.isRequired},CarouselButton.__docgenInfo={description:"",methods:[],displayName:"CarouselButton",props:{children:{type:{name:"node"},required:!0,description:""}}};var src_CarouselButton=CarouselButton;function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CarouselButton.js"]={name:"CarouselButton",docgenInfo:CarouselButton.__docgenInfo,path:"src/CarouselButton.js"});var DefaultImg=__webpack_require__(435).a.img.withConfig({displayName:"CarouselSlide__DefaultImg",componentId:"ds4ujd-0"})(["object-fit:cover;width:100%;height:",";"],(function(props){return"number"==typeof props.imgHeight?"".concat(props.imgHeight,"px"):props.imgHeight})),CarouselSlide=function(_ref){var Img=_ref.Img,imgUrl=_ref.imgUrl,imgHeight=_ref.imgHeight,description=_ref.description,attribution=_ref.attribution,rest=_objectWithoutProperties(_ref,["Img","imgUrl","imgHeight","description","attribution"]);return react_default.a.createElement("figure",rest,react_default.a.createElement(Img,{src:imgUrl,imgHeight:imgHeight}),react_default.a.createElement("figcaption",null,react_default.a.createElement("strong",null,description)," ",attribution))};CarouselSlide.displayName="CarouselSlide",CarouselSlide.propTypes={Img:prop_types_default.a.elementType,imgHeight:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),imgUrl:prop_types_default.a.string.isRequired,description:prop_types_default.a.string.isRequired,attribution:prop_types_default.a.string},CarouselSlide.defaultProps={Img:DefaultImg,imgHeight:500},CarouselSlide.__docgenInfo={description:"",methods:[],displayName:"CarouselSlide",props:{Img:{defaultValue:{value:"styled.img`\n  object-fit: cover;\n  width: 100%;\n  height: ${props => \n    typeof props.imgHeight === 'number' ? `${props.imgHeight}px` : props.imgHeight};\n`",computed:!1},type:{name:"elementType"},required:!1,description:""},imgHeight:{defaultValue:{value:"500",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},imgUrl:{type:{name:"string"},required:!0,description:""},description:{type:{name:"string"},required:!0,description:""},attribution:{type:{name:"string"},required:!1,description:""}}};var src_CarouselSlide=CarouselSlide;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CarouselSlide.js"]={name:"CarouselSlide",docgenInfo:CarouselSlide.__docgenInfo,path:"src/CarouselSlide.js"});__webpack_require__(305),__webpack_require__(119),__webpack_require__(153),__webpack_require__(837),__webpack_require__(83),__webpack_require__(389);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function HasIndex_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function HasIndex_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:key+""}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__(839);function AutoAdvances_typeof(obj){return(AutoAdvances_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function AutoAdvances_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function AutoAdvances_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AutoAdvances_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function AutoAdvances_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function AutoAdvances_possibleConstructorReturn(self,call){return!call||"object"!==AutoAdvances_typeof(call)&&"function"!=typeof call?function AutoAdvances_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function AutoAdvances_getPrototypeOf(o){return(AutoAdvances_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function AutoAdvances_setPrototypeOf(o,p){return(AutoAdvances_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function AutoAdvances_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Carousel_typeof(obj){return(Carousel_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function Carousel_extends(){return(Carousel_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Carousel_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Carousel_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Carousel_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function Carousel_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function Carousel_possibleConstructorReturn(self,call){return!call||"object"!==Carousel_typeof(call)&&"function"!=typeof call?Carousel_assertThisInitialized(self):call}function Carousel_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function Carousel_getPrototypeOf(o){return(Carousel_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Carousel_setPrototypeOf(o,p){return(Carousel_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function Carousel_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Carousel_Carousel=function(_React$PureComponent){!function Carousel_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&Carousel_setPrototypeOf(subClass,superClass)}(Carousel,_React$PureComponent);var _super=function Carousel_createSuper2(Derived){function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var result,Super=Carousel_getPrototypeOf(Derived);if(isNativeReflectConstruct()){var NewTarget=Carousel_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return Carousel_possibleConstructorReturn(this,result)}}(Carousel);function Carousel(){var _this;Carousel_classCallCheck(this,Carousel);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return Carousel_defineProperty(Carousel_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"state",{slideIndex:0}),Carousel_defineProperty(Carousel_assertThisInitialized(_this),"handlePrevClick",(function(){var _this$props=_this.props;(0,_this$props.slideIndexDecrement)(_this$props.slides.length)})),Carousel_defineProperty(Carousel_assertThisInitialized(_this),"handleNextClick",(function(){var _this$props2=_this.props;(0,_this$props2.slideIndexIncrement)(_this$props2.slides.length)})),_this}return function Carousel_createClass(Constructor,protoProps,staticProps){return protoProps&&Carousel_defineProperties(Constructor.prototype,protoProps),staticProps&&Carousel_defineProperties(Constructor,staticProps),Constructor}(Carousel,[{key:"render",value:function render(){var _this$props3=this.props,defaultImg=_this$props3.defaultImg,defaultImgHeight=_this$props3.defaultImgHeight,slideIndex=_this$props3.slideIndex,slides=(_this$props3.slideIndexDecrement,_this$props3.slideIndexIncrement,_this$props3.slides),rest=Carousel_objectWithoutProperties(_this$props3,["defaultImg","defaultImgHeight","slideIndex","slideIndexDecrement","slideIndexIncrement","slides"]);return react_default.a.createElement("div",rest,react_default.a.createElement(src_CarouselSlide,Carousel_extends({Img:defaultImg,imgHeight:defaultImgHeight},slides[slideIndex])),react_default.a.createElement(src_CarouselButton,{"data-action":"prev",onClick:this.handlePrevClick},"Prev"),react_default.a.createElement(src_CarouselButton,{"data-action":"next",onClick:this.handleNextClick},"Next"))}}]),Carousel}(react_default.a.PureComponent);Carousel_Carousel.displayName="Carousel",Carousel_defineProperty(Carousel_Carousel,"propTypes",{defaultImg:src_CarouselSlide.propTypes.Img,defaultImgHeight:src_CarouselSlide.propTypes.imgHeight,slideIndex:prop_types_default.a.number.isRequired,slideIndexDecrement:prop_types_default.a.func.isRequired,slideIndexIncrement:prop_types_default.a.func.isRequired,slides:prop_types_default.a.arrayOf(prop_types_default.a.shape(src_CarouselSlide.propTypes)).isRequired}),Carousel_defineProperty(Carousel_Carousel,"defaultProps",{defaultImg:src_CarouselSlide.defaultProps.Img,defaultImgHeight:src_CarouselSlide.defaultProps.imgHeight}),Carousel_Carousel.__docgenInfo={description:"",methods:[{name:"handlePrevClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleNextClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Carousel",props:{defaultImg:{defaultValue:{value:"CarouselSlide.defaultProps.Img",computed:!0},type:{name:"custom",raw:"CarouselSlide.propTypes.Img"},required:!1,description:""},defaultImgHeight:{defaultValue:{value:"CarouselSlide.defaultProps.imgHeight",computed:!0},type:{name:"custom",raw:"CarouselSlide.propTypes.imgHeight"},required:!1,description:""},slideIndex:{type:{name:"number"},required:!0,description:""},slideIndexDecrement:{type:{name:"func"},required:!0,description:""},slideIndexIncrement:{type:{name:"func"},required:!0,description:""},slides:{type:{name:"arrayOf",value:{name:"shape",value:"CarouselSlide.propTypes",computed:!0}},required:!0,description:""}}};var Component,propName,upperBoundPropName,_class,_temp,_defineProperty2;__webpack_exports__.a=function(Component,indexPropName){var _class,_temp,_defineProperty2,word,defaultIndexPropName="default".concat("".concat((word=indexPropName)[0].toUpperCase()).concat(word.slice(1)));return _temp=_class=function(_React$PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(ComponentWithIndex,_React$PureComponent);var _super=function _createSuper2(Derived){function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var result,Super=_getPrototypeOf(Derived);if(isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}(ComponentWithIndex);function ComponentWithIndex(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ComponentWithIndex),_defineProperty(_assertThisInitialized(_this=_super.call(this,props)),"handleDecrement",(function(max){var onIndexChange=_this.props.onIndexChange;_this.setState((function(_ref){var index=_ref.index,newIndex=max?(index+max-1)%max:index-1;return onIndexChange&&onIndexChange({target:{value:newIndex}}),{index:newIndex}}))})),_defineProperty(_assertThisInitialized(_this),"handleIncrement",(function(max){var onIndexChange=_this.props.onIndexChange;_this.setState((function(_ref2){var index=_ref2.index,newIndex=max?(index+1)%max:index+1;return onIndexChange&&onIndexChange({target:{value:newIndex}}),{index:newIndex}}))})),_this.state={index:props[defaultIndexPropName]},_this}return _createClass(ComponentWithIndex,null,[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,state){return null!=props[indexPropName]&&props[indexPropName]!==state.index?{index:props[indexPropName]}:null}}]),_createClass(ComponentWithIndex,[{key:"render",value:function render(){var _indexProps,_this$props=this.props,rest=(_this$props[defaultIndexPropName],HasIndex_objectWithoutProperties(_this$props,[defaultIndexPropName].map(_toPropertyKey))),indexProps=(_defineProperty(_indexProps={},indexPropName,this.state.index),_defineProperty(_indexProps,"".concat(indexPropName,"Decrement"),this.handleDecrement),_defineProperty(_indexProps,"".concat(indexPropName,"Increment"),this.handleIncrement),_indexProps);return react_default.a.createElement(Component,_extends({},rest,indexProps))}}]),ComponentWithIndex}(react_default.a.PureComponent),_defineProperty(_class,"displayName","HasIndex(".concat(Component.displayName||Component.name,")")),_defineProperty(_class,"propTypes",(_defineProperty(_defineProperty2={},indexPropName,prop_types_default.a.number),_defineProperty(_defineProperty2,defaultIndexPropName,prop_types_default.a.number),_defineProperty(_defineProperty2,"onIndexChange",prop_types_default.a.func),_defineProperty2)),_defineProperty(_class,"defaultProps",_defineProperty({},defaultIndexPropName,0)),_temp}((Component=Carousel_Carousel,propName="slideIndex",upperBoundPropName="slides",_temp=_class=function(_React$PureComponent){!function AutoAdvances_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&AutoAdvances_setPrototypeOf(subClass,superClass)}(ComponentWithAutoAdvance,_React$PureComponent);var _super=function AutoAdvances_createSuper2(Derived){function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var result,Super=AutoAdvances_getPrototypeOf(Derived);if(isNativeReflectConstruct()){var NewTarget=AutoAdvances_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return AutoAdvances_possibleConstructorReturn(this,result)}}(ComponentWithAutoAdvance);function ComponentWithAutoAdvance(){return AutoAdvances_classCallCheck(this,ComponentWithAutoAdvance),_super.apply(this,arguments)}return function AutoAdvances_createClass(Constructor,protoProps,staticProps){return protoProps&&AutoAdvances_defineProperties(Constructor.prototype,protoProps),staticProps&&AutoAdvances_defineProperties(Constructor,staticProps),Constructor}(ComponentWithAutoAdvance,[{key:"componentDidMount",value:function componentDidMount(){this.startTimer()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){prevProps[propName]===this.props[propName]&&prevProps[upperBoundPropName]===this.props[upperBoundPropName]||this.startTimer()}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearTimeout(this._timer)}},{key:"startTimer",value:function startTimer(){var upperBound,_this=this;clearTimeout(this._timer),this.props.autoAdvanceDelay&&("number"==typeof this.props[upperBoundPropName]?upperBound=this.props[upperBoundPropName]:null!=this.props[upperBoundPropName]&&(upperBound=this.props[upperBoundPropName].length),this._timer=setTimeout((function(){_this.props["".concat(propName,"Increment")](upperBound)}),this.props.autoAdvanceDelay))}},{key:"render",value:function render(){var _this$props=this.props,rest=(_this$props.autoAdvanceDelay,AutoAdvances_objectWithoutProperties(_this$props,["autoAdvanceDelay"]));return react_default.a.createElement(Component,rest)}}]),ComponentWithAutoAdvance}(react_default.a.PureComponent),AutoAdvances_defineProperty(_class,"displayName","AutoAdvances(".concat(Component.displayName||Component.name,")")),AutoAdvances_defineProperty(_class,"propTypes",(AutoAdvances_defineProperty(_defineProperty2={},propName,prop_types_default.a.number.isRequired),AutoAdvances_defineProperty(_defineProperty2,"".concat(propName,"Increment"),prop_types_default.a.func.isRequired),AutoAdvances_defineProperty(_defineProperty2,upperBoundPropName,prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.array]).isRequired),AutoAdvances_defineProperty(_defineProperty2,"autoAdvanceDelay",prop_types_default.a.number.isRequired),_defineProperty2)),AutoAdvances_defineProperty(_class,"defaultProps",{autoAdvanceDelay:1e4}),_temp),"slideIndex");"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Carousel.js"]={name:"Carousel",docgenInfo:Carousel_Carousel.__docgenInfo,path:"src/Carousel.js"})},442:function(module,exports,__webpack_require__){__webpack_require__(443),__webpack_require__(588),module.exports=__webpack_require__(589)},507:function(module,exports){},589:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(60),__webpack_require__(25),__webpack_require__(20),__webpack_require__(61),__webpack_require__(30);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(105),req=__webpack_require__(832);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(306)(module))},832:function(module,exports,__webpack_require__){var map={"./index.stories.js":833};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=832},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Carousel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(440),_example_slides__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(438),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(105),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(183),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(259),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(439),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(184);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Welcome",module).add("to Storybook",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_7__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_6__.linkTo)("Button")})}));var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Button",module).add("with text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_7__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("clicked")},"Hello Button")})).add("with some emoji",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_7__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("clicked")},_ref)}));var stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Carousel",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs),stories.add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Carousel__WEBPACK_IMPORTED_MODULE_1__.a,{autoAdvanceDelay:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("autoAdvanceDelay",1e4),slides:_example_slides__WEBPACK_IMPORTED_MODULE_2__.a,onIndexChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("onIndexChange")})}))}.call(this,__webpack_require__(306)(module))}},[[442,1,2]]]);
//# sourceMappingURL=main.36a6b10db8a99694efba.bundle.js.map