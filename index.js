'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var classNames = require('classnames');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var PropTypes = require('prop-types');
var deepEqual = require('deep-equal');
var nanoid = require('nanoid');
var _objectDestructuringEmpty = require('@babel/runtime/helpers/objectDestructuringEmpty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var deepEqual__default = /*#__PURE__*/_interopDefaultLegacy(deepEqual);
var nanoid__default = /*#__PURE__*/_interopDefaultLegacy(nanoid);
var _objectDestructuringEmpty__default = /*#__PURE__*/_interopDefaultLegacy(_objectDestructuringEmpty);

var _excluded = ["name", "checked", "defaultChecked", "styles", "inputType", "disabled", "customClasses", "value", "onChange", "onClick", "getIcon", "indeterminate", "children", "className", "style", "extra"];
/**
 * Поле выбора
 */
var SwitchBase = function SwitchBase(props) {
  var name = props.name,
    checked = props.checked,
    defaultChecked = props.defaultChecked,
    styles = props.styles,
    inputType = props.inputType,
    disabled = props.disabled,
    customClasses = props.customClasses,
    value = props.value,
    onChange = props.onChange,
    onClick = props.onClick,
    getIcon = props.getIcon,
    indeterminate = props.indeterminate,
    children = props.children,
    className = props.className,
    style = props.style,
    extra = props.extra,
    other = _objectWithoutProperties__default["default"](props, _excluded);
  var controlled = checked !== undefined;
  var ref = React__default["default"].useRef(null);
  var _React$useState = React__default["default"].useState(),
    _React$useState2 = _slicedToArray__default["default"](_React$useState, 2),
    internalChecked = _React$useState2[0],
    setChecked = _React$useState2[1];
  React__default["default"].useEffect(function () {
    if (!controlled) {
      setChecked(defaultChecked);
    }
  }, [controlled]);
  var onKeyPress = function onKeyPress(event) {
    var _ref$current;
    event.stopPropagation();
    event.preventDefault();
    ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
  };
  var handleChange = function handleChange(event) {
    if (!controlled) {
      setChecked(event.target.checked);
    }
    onChange === null || onChange === void 0 || onChange(event);
  };
  var calcChecked = controlled ? checked : internalChecked;
  var labelClassName = classNames__default["default"](customClasses, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, styles.disabled, disabled), styles.checked, calcChecked || indeterminate), String(className), className));
  var icon = getIcon && getIcon(calcChecked, indeterminate);

  /* eslint-disable */
  return /*#__PURE__*/React__default["default"].createElement("label", _extends__default["default"]({
    className: labelClassName,
    style: style,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    onKeyPress: onKeyPress,
    onClick: onClick
  }, extra), /*#__PURE__*/React__default["default"].createElement("input", _extends__default["default"]({
    disabled: disabled,
    value: value,
    checked: calcChecked,
    name: name ? String(name) : undefined,
    type: inputType,
    className: styles.input,
    onChange: handleChange,
    tabIndex: disabled ? -1 : 0,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    ref: ref
  }, other)), icon, children);
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".internal-base-tabs_baseTabsTitles {\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n}";
var styles = {"baseTabsTitles":"internal-base-tabs_baseTabsTitles"};
styleInject(css_248z);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var defaultTabComponentWrapper = function defaultTabComponentWrapper(_ref) {
  var titlesClassName = _ref.titlesClassName,
    children = _ref.children;
  var titleClasses = classNames__default["default"](styles.baseTabsTitles, _defineProperty__default["default"]({}, Array.isArray(titlesClassName) ? titlesClassName.join(' ') : titlesClassName, titlesClassName && titlesClassName.length));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: titleClasses
  }, children);
};
defaultTabComponentWrapper.propTypes = {
  /**
   * Классы для контейнера тайлов
   */
  titlesClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
};
var BaseTabs = /*#__PURE__*/function (_React$Component) {
  _inherits__default["default"](BaseTabs, _React$Component);
  var _super = _createSuper$1(BaseTabs);
  function BaseTabs() {
    var _this;
    _classCallCheck__default["default"](this, BaseTabs);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "state", {
      activeTabIndex: _this.props.activeTabIndex,
      data: _this.props.data,
      uuidMemo: []
    });
    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "onTabTitleClick", function (idx) {
      return function () {
        var onTabClick = _this.props.onTabClick;
        _this.setState({
          activeTabIndex: idx
        });
        onTabClick(idx);
      };
    });
    return _this;
  }
  _createClass__default["default"](BaseTabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        TabComponent = _this$props.tabComponent,
        _this$props$tabCompon = _this$props.tabComponentWrapper,
        TabComponentWrapper = _this$props$tabCompon === void 0 ? defaultTabComponentWrapper : _this$props$tabCompon,
        tabProps = _this$props.tabProps,
        activeProp = _this$props.activeProp,
        data = _this$props.data,
        contentField = _this$props.contentField,
        titleField = _this$props.titleField,
        titlesClassName = _this$props.titlesClassName,
        contentClassName = _this$props.contentClassName,
        isWrapContent = _this$props.isWrapContent,
        extra = _this$props.extra;
      var _this$state = this.state,
        activeTabIndex = _this$state.activeTabIndex,
        uuidMemo = _this$state.uuidMemo;
      var tabTitles = data.map(function (item, idx) {
        return /*#__PURE__*/React__default["default"].createElement(TabComponent, _extends__default["default"]({
          key: uuidMemo[idx],
          onClick: _this2.onTabTitleClick(idx)
        }, _defineProperty__default["default"]({}, activeProp, idx === activeTabIndex), tabProps), item[titleField]);
      });
      var isActiveTab = data[activeTabIndex] && data[activeTabIndex][contentField];
      var wrapContent = function wrapContent(content) {
        return isActiveTab && isWrapContent ? /*#__PURE__*/React__default["default"].createElement("div", {
          className: contentClassName
        }, content) : content;
      };
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(TabComponentWrapper, {
        titlesClassName: titlesClassName,
        extra: extra
      }, tabTitles), wrapContent(data[activeTabIndex][contentField]));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!deepEqual__default["default"](nextProps.data, prevState.data) || prevState.uuidMemo.length === 0) {
        var data = nextProps.data;
        return {
          data: data,
          uuidMemo: Array(data.length).fill(0).map(function () {
            return nanoid__default["default"]();
          })
        };
      }
      return null;
    }
  }]);
  return BaseTabs;
}(React__default["default"].Component);
BaseTabs.defaultProps = {
  activeProp: 'isActive',
  activeTabIndex: 0,
  contentField: 'content',
  titleField: 'title',
  onTabClick: function onTabClick() {},
  isWrapContent: true,
  data: []
};
BaseTabs.propTypes = {
  /**
   * Имя пропса, в которое передаётся активность таба
   */
  activeProp: PropTypes__default["default"].string,
  /**
   * Индекс активного таба
   */
  activeTabIndex: PropTypes__default["default"].number,
  /**
   * Классы для контейнера тайлов
   */
  titlesClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  /**
   * Класс для контейнера контента
   */
  contentClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  /**
   * Массив с данными
   */
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].any),
  /**
   * Компонент для отображения таба
   */
  tabComponent: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  /**
   * Компонент, в который будут обёрнуты все табы
   */
  tabComponentWrapper: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  /**
   * Пропсы, которые прокидываются в компонент таба
   */
  tabProps: PropTypes__default["default"].object,
  // eslint-disable-line react/forbid-prop-types
  /**
   * Имя поля в объекте, из которого берутся данные для тайтла табов
   */
  titleField: PropTypes__default["default"].string,
  /**
   * Имя поля в объекте, из которого берутся данные для контента
   */
  contentField: PropTypes__default["default"].string,
  /**
   * Коллбек по клику на таб. Принимает индекс таба, по которому был произведён клик
   */
  onTabClick: PropTypes__default["default"].func,
  /**
   * Оборачивать или нет контент таба в дополнительный div
   */
  isWrapContent: PropTypes__default["default"].bool,
  /**
   * Произвольные атрибуты
   */
  extra: PropTypes__default["default"].object // eslint-disable-line react/forbid-prop-types
};

var LMS = PropTypes__default["default"].oneOf(['large', 'medium', 'small', 'xsmall']);

var ANCHORS = {
  // common
  CENTER: 'center',
  // vertical
  TOP: 'top',
  BOTTOM: 'bottom',
  // horizontal
  LEFT: 'left',
  RIGHT: 'right'
};
var checkVertical = function checkVertical(originValue, height, vertical, isModal) {
  var sign = isModal ? -1 : 1;
  switch (vertical) {
    case ANCHORS.TOP:
      return originValue;
    case ANCHORS.CENTER:
      return originValue + Math.round(height / 2) * sign;
    case ANCHORS.BOTTOM:
      return originValue + Math.round(height) * sign;
    default:
      return originValue;
  }
};
var checkHorizontal = function checkHorizontal(originValue, width, horizontal, isModal) {
  var sign = isModal ? -1 : 1;
  switch (horizontal) {
    case ANCHORS.LEFT:
      return originValue;
    case ANCHORS.CENTER:
      return originValue + Math.round(width / 2) * sign;
    case ANCHORS.RIGHT:
      return originValue + Math.round(width) * sign;
    default:
      return originValue;
  }
};
/**
 * Метод проверяет, помещается ли всплывающее окно в window. Если не помещается, то координаты сдвигаются так, чтобы был
 * отступ между краем экрана и всплываюшим контентом.
 */
var checkBorders = function checkBorders(params) {
  var position = params.position,
    offset = params.offset,
    padding = params.padding,
    sizes = params.sizes;
  var newPosition = Object.assign({}, position);
  var _window = window,
    innerWidth = _window.innerWidth,
    innerHeight = _window.innerHeight;
  if (newPosition.top < padding) {
    newPosition.top = padding;
  }
  if (newPosition.top + sizes.height > innerHeight) {
    newPosition.top = innerHeight - (sizes.height + padding);
  }
  if (newPosition.left < padding) {
    newPosition.left = padding;
  }
  if (newPosition.left + sizes.width > innerWidth) {
    newPosition.left = innerWidth - (sizes.width + padding);
  }
  if (offset) {
    newPosition.top += offset.y;
    newPosition.left += offset.x;
  }
  return newPosition;
};
var checkPositionPriority = function checkPositionPriority(params) {
  var position = params.position,
    sizes = params.sizes,
    padding = params.padding;
  var _window2 = window,
    innerWidth = _window2.innerWidth,
    innerHeight = _window2.innerHeight;
  return {
    right: position.left + sizes.width < innerWidth,
    top: position.top > padding,
    left: position.left > padding,
    bottom: position.top + sizes.height < innerHeight
  };
};
var checkBordersUtils = {
  ANCHORS: ANCHORS,
  checkVertical: checkVertical,
  checkHorizontal: checkHorizontal,
  checkBorders: checkBorders,
  checkPositionPriority: checkPositionPriority
};

var ClickDetector = /*#__PURE__*/_createClass__default["default"](function ClickDetector() {
  var _this = this;
  _classCallCheck__default["default"](this, ClickDetector);
  _defineProperty__default["default"](this, "clickedElement", null);
  _defineProperty__default["default"](this, "composedPath", []);
  _defineProperty__default["default"](this, "clickCallbackCollection", new Set());
  _defineProperty__default["default"](this, "removeClickListener", function () {
    document.removeEventListener('click', _this.clickListener);
  });
  _defineProperty__default["default"](this, "clickListener", function (event) {
    _this.composedPath = event.composedPath();
    _this.clickedElement = event.target;
    /**
     * изначально в интерфейсах DropDown шла завязка React.MouseEvent,
     * а в addEventListener и removeEventListener нам нужен DOM MouseEvent
     * тут происходит конвертация типа MouseEvent в React.MouseEvent
     * @todo:
     * подумать как сделать более человечно
     */
    _this.clickCallbackCollection.forEach(function (cb) {
      return cb(event);
    });
  });
  _defineProperty__default["default"](this, "getLastClickedElement", function () {
    return _this.clickedElement;
  });
  _defineProperty__default["default"](this, "isElemContainClick", function (domElement) {
    if (!domElement) {
      return false;
    }
    return domElement.contains(_this.clickedElement) || _this.composedPath.some(function (item) {
      if (item.nodeType === Node.ELEMENT_NODE) {
        return domElement.contains(item);
      }
      return false;
    });
  });
  _defineProperty__default["default"](this, "isClickContainElem", function (domElement) {
    return domElement && _this.clickedElement.contains(domElement);
  });
  _defineProperty__default["default"](this, "addClickCallback", function (callback) {
    _this.clickCallbackCollection.add(callback);
  });
  _defineProperty__default["default"](this, "removeClickCallback", function (callback) {
    _this.clickCallbackCollection["delete"](callback);
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', _this.clickListener);
  });
});
var clickDetectorInstance = new ClickDetector();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var escapeModalClose = (function (Component) {
  var _class;
  return _class = /*#__PURE__*/function (_React$Component) {
    _inherits__default["default"](_class, _React$Component);
    var _super = _createSuper(_class);
    function _class() {
      var _this;
      _classCallCheck__default["default"](this, _class);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "createRef", function (ref) {
        if (ref) {
          _this.ref = ref;
        }
      });
      _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "onKeyPressListener", function (event) {
        var _this$props$isCloseBy = _this.props.isCloseByEsc,
          isCloseByEsc = _this$props$isCloseBy === void 0 ? true : _this$props$isCloseBy;
        if (!isCloseByEsc) {
          return;
        }
        if (event.which === 27) {
          if (_this.ref && _this.ref.onCloseModalComponent) {
            _this.ref.onCloseModalComponent();
          }
        }
      });
      return _this;
    }
    _createClass__default["default"](_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('keydown', this.onKeyPressListener, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyPressListener, false);
      }
    }, {
      key: "render",
      value: function render() {
        var props = Object.assign({}, (_objectDestructuringEmpty__default["default"](this.props), this.props));
        return /*#__PURE__*/React__default["default"].createElement(Component, _extends__default["default"]({
          ref: this.createRef
        }, props));
      }
    }]);
    return _class;
  }(React__default["default"].Component), _defineProperty__default["default"](_class, "propTypes", {
    /**
     * Опциональное закрытие модальных компонентов по Esc
     */
    isCloseByEsc: PropTypes__default["default"].bool
  }), _class;
});

/**
 * Компонент-сервис для рассчета максимального zIndex модальных компонентов в определённый момент времени.
 * Необходим для решения задачи по корректному отображению модальных компонентов, монтированных через порталы.
 * Синглтон.
 *
 * Принцип работы.
 * Компонент работает по принципу хранилища. Момент рассчета корректного zIndex в разных компонентах может быть
 * вызван разными триггерами. Поэтому как только необходимо вычислить положение, компонент, использующий сервис
 * должен вызвать метод addToComponentStore, который добавит dom-элемент в стор и вернёт корректный максимальный zIndex.
 *
 * Обязательно!
 * Для корректной работы сервиса в момент скрытия модального элемента необходимо удалять dom-элемент из стора.
 *
 * Слава ссылочной целостности!
 */
var ZIndexService = /*#__PURE__*/_createClass__default["default"](function ZIndexService() {
  var _this = this;
  _classCallCheck__default["default"](this, ZIndexService);
  _defineProperty__default["default"](this, "componentStore", new Map());
  /**
   * Добавление компонента в стор
   * @param component
   * @returns {*}
   */
  _defineProperty__default["default"](this, "addToComponentStore", function (component) {
    if (_this.componentStore.get(component)) {
      return undefined;
    }
    var newMaxIndex = _this.getMaxIndex() + 10;
    _this.componentStore.set(component, newMaxIndex);
    return newMaxIndex;
  });
  /**
   * Удаление компонента из стора
   * @param component
   */
  _defineProperty__default["default"](this, "removeToComponentStore", function (component) {
    if (_this.componentStore.has(component)) {
      _this.componentStore["delete"](component);
    }
  });
  /**
   * Метод возвращается максимальное значение zIndex в хранилище
   * @returns {number|T}
   */
  _defineProperty__default["default"](this, "getMaxIndex", function () {
    if (_this.componentStore.size) {
      return Array.from(_this.componentStore.values()).sort().reverse()[0];
    }
    return 99;
  });
});
var zIndexService = new ZIndexService();

/**
 * https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
 */

var useEvent = function useEvent(callback) {
  var callbackRef = React__default["default"].useRef(callback);
  callbackRef.current = callback;
  var fn = function fn() {
    return callbackRef.current.apply(callbackRef, arguments);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React__default["default"].useCallback(fn, []);
};

exports.BaseTabs = BaseTabs;
exports.LMS = LMS;
exports.SwitchBase = SwitchBase;
exports.checkBordersUtils = checkBordersUtils;
exports.clickDetector = clickDetectorInstance;
exports.escapeModalClose = escapeModalClose;
exports.useEvent = useEvent;
exports.zIndexService = zIndexService;
//# sourceMappingURL=index.js.map
