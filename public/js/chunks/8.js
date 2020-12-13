(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/coreui/src/reusable/DocsLink.js":
/*!***************************************************!*\
  !*** ./resources/coreui/src/reusable/DocsLink.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var DocsLink = function DocsLink(props) {
  var name = props.name,
      text = props.text,
      rest = _objectWithoutProperties(props, ["name", "text"]);

  var href = name ? "https://coreui.io/react/docs/components/".concat(name) : props.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLink"], _extends({}, rest, {
    href: href,
    rel: "noreferrer noopener",
    target: "_blank",
    className: "card-header-action"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, text || 'docs')));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DocsLink));

/***/ }),

/***/ "./resources/coreui/src/reusable/index.js":
/*!************************************************!*\
  !*** ./resources/coreui/src/reusable/index.js ***!
  \************************************************/
/*! exports provided: DocsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocsLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocsLink */ "./resources/coreui/src/reusable/DocsLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocsLink", function() { return _DocsLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/coreui/src/views/base/tables/Tables.js":
/*!**********************************************************!*\
  !*** ./resources/coreui/src/views/base/tables/Tables.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reusable */ "./resources/coreui/src/reusable/index.js");
/* harmony import */ var _users_UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/UsersData */ "./resources/coreui/src/views/users/UsersData.js");





var getBadge = function getBadge(status) {
  switch (status) {
    case 'Active':
      return 'success';

    case 'Inactive':
      return 'secondary';

    case 'Pending':
      return 'warning';

    case 'Banned':
      return 'danger';

    default:
      return 'primary';
  }
};

var fields = ['name', 'registered', 'role', 'status'];

var Tables = function Tables() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Simple Table", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable__WEBPACK_IMPORTED_MODULE_2__["DocsLink"], {
    name: "CModal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Striped Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    striped: true,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Condensed Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    size: "sm",
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Bordered Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    bordered: true,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Combined All Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    hover: true,
    striped: true,
    bordered: true,
    size: "sm",
    itemsPerPage: 10,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Combined All dark Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDataTable"], {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__["default"],
    fields: fields,
    dark: true,
    hover: true,
    striped: true,
    bordered: true,
    size: "sm",
    itemsPerPage: 10,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ }),

/***/ "./resources/coreui/src/views/users/UsersData.js":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/views/users/UsersData.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  name: 'Chetan Mohamed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  name: 'Derick Maximinus',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  name: 'Friderik Dávid',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  name: 'Yiorgos Avraamu',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  name: 'Avram Tarasios',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  name: 'Quintin Ed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  name: 'Enéas Kwadwo',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  name: 'Agapetus Tadeáš',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  name: 'Carwyn Fachtna',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 12,
  name: 'Nehemiah Tatius',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  name: 'Ebbe Gemariah',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  name: 'Eustorgios Amulius',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 15,
  name: 'Leopold Gáspár',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 16,
  name: 'Pompeius René',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 17,
  name: 'Paĉjo Jadon',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  name: 'Micheal Mercurius',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  name: 'Ganesha Dubhghall',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 20,
  name: 'Hiroto Šimun',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 21,
  name: 'Vishnu Serghei',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 22,
  name: 'Zbyněk Phoibos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  name: 'Aulus Agmundr',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 42,
  name: 'Ford Prefect',
  registered: '2001/05/25',
  role: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ })

}]);