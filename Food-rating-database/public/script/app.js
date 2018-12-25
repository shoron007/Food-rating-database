"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                { "class": "head" },
                this.props.title
            );
        }
    }]);

    return Header;
}(React.Component);

;

var Block = function (_React$Component2) {
    _inherits(Block, _React$Component2);

    function Block(props) {
        _classCallCheck(this, Block);

        var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

        _this2.handleLikeAction = _this2.handleLikeAction.bind(_this2);
        _this2.handleDisikeAction = _this2.handleDisikeAction.bind(_this2);
        return _this2;
    }

    _createClass(Block, [{
        key: "handleLikeAction",
        value: function handleLikeAction() {
            this.props.item.vote = this.props.item.vote + 1;
            render();
        }
    }, {
        key: "handleDisikeAction",
        value: function handleDisikeAction() {
            this.props.item.vote = this.props.item.vote - 1;
            render();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "childTree" },
                "Name Of the Item: ",
                this.props.item.name,
                React.createElement("br", null),
                
                "Sort Description of Item: ",
                this.props.item.type,
                
                React.createElement("br", null),
                "Location Of Resturent: ",
                this.props.item.restaurant,
                ",",
                this.props.item.location,
                React.createElement("br", null),
                "Price in BDT: ",
                this.props.item.price,
                
                React.createElement("br", null),
                "Likes: ", this.props.item.vote,
                
                React.createElement(
                    "button",
                    { onClick: this.handleLikeAction },
                    "Like+"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleDisikeAction },
                    "Like-"
                )
            );
        }
    }]);

    return Block;
}(React.Component);

;

var ItemList = function (_React$Component3) {
    _inherits(ItemList, _React$Component3);

    function ItemList(props) {
        _classCallCheck(this, ItemList);

        return _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));
    }

    _createClass(ItemList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "parentTree" },
                this.props.items.map(function (item) {
                    return React.createElement(Block, { key: item, item: item });
                })
            );
        }
    }]);

    return ItemList;
}(React.Component);

;

var FormElement = function (_React$Component4) {
    _inherits(FormElement, _React$Component4);

    function FormElement(props) {
        _classCallCheck(this, FormElement);

        return _possibleConstructorReturn(this, (FormElement.__proto__ || Object.getPrototypeOf(FormElement)).call(this, props));
    }

    _createClass(FormElement, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "input-field inline" },
                React.createElement(
                    "form",
                    { "class": "validate", onSubmit: this.props.clearForm },
                    "Item Name :",
                    React.createElement("input", { type: "text/string", id: "email_inline", "class": "validate", name: "name", placeHolder: "Write the Name of Item" }),
                    React.createElement("br", null),
                    "Item Type :",
                    React.createElement("input", { type: "text/string", "class": "col-xs-2", id: "ex2", name: "type", placeHolder: "Write the Type of Item" }),
                    React.createElement("br", null),
                    "Restaurant Name :",
                    React.createElement("input", { type: "text/string", "class": "col-xs-2", id: "ex2", name: "restaurant", placeHolder: "Write the Restaurant Name" }),
                    React.createElement("br", null),
                    "Location :",
                    React.createElement("input", { type: "text/string", "class": "col-xs-2", id: "ex2", name: "location", placeHolder: "Write the Restaurant Location" }),
                    React.createElement("br", null),
                    "Price :",
                    React.createElement("input", { type: "text/string", "class": "col-xs-2", id: "ex2", name: "price", placeHolder: "Write Item Price" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { "class": "btn waves-effect waves-light" },
                        "Add This item"
                    )
                )
            );
        }
    }]);

    return FormElement;
}(React.Component);

;

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App(props) {
        _classCallCheck(this, App);

        var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this5.clearForm = _this5.clearForm.bind(_this5);
        return _this5;
    }

    _createClass(App, [{
        key: "clearForm",
        value: function clearForm() {
            event.preventDefault();
            var name = event.target.elements.name.value;
            var type = event.target.elements.type.value;
            var restaurant = event.target.elements.restaurant.value;
            var location = event.target.elements.location.value;
            var price = event.target.elements.price.value;
            if (name && type && restaurant && location && price) {
                items.push({ name: name, type: type, restaurant: restaurant, location: location, price: price, vote: 0 });
            }

            event.target.elements.name.value = "";
            event.target.elements.type.value = "";
            event.target.elements.restaurant.value = "";
            event.target.elements.location.value = "";
            event.target.elements.price.value = "";

            render();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "Title" },
                React.createElement(Header, { title: "Food Rating Database App" }),
                React.createElement(FormElement, { clearForm: this.clearForm }),
                React.createElement(Header, { title: "List Of All The Recomanded Foods " }),
                React.createElement(ItemList, { items: items })
            );
        }
    }]);

    return App;
}(React.Component);

var render = function render() {
    ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
};

var items = [];
render();