import React from 'react';

var TodoList = React.createClass({
    render: function () {
        var createItem = function (item) {
            var styleText = 'black';

            item.textSelect == "Critical" ?
                styleText = 'red' : styleText = 'black';

            return <li style={{color:styleText}} key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

export default TodoList;