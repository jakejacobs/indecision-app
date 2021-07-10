"use strict";

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), app.options.length > 0 ? 'Here are you options' : 'No options', /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two"))); //////////////////////////////////////////////////////////////////////////

var user = {
  name: 'Jake Jacobs',
  age: 28,
  location: 'Guntur'
};

var getLocation = function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
};

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
