import React from 'react';

const COLOR_STYLE = {
    critical: 'red',
    normal: 'green'
};

var TodoList = React.createClass({
    render: function () {
        var createItem = function (item) {
            var styleText = COLOR_STYLE[item.textSelect];

            return <li className={`priority-${item.textSelect}`} style={{color:styleText}} key={item.id}>{item.text}</li>;
        };


        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

export default TodoList;