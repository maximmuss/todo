//import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import CommentList from './components/comment-list.jsx';
import TodoList from './components/TodoList.jsx';

import DataBootstrapGrid from './components/test';



var TaskStyle = {
    color: 'red'
};

//ReactDOM.render(<h1 style={divStyle}>It's my test of react</h1>, document.getElementById('ap'));





//ReactDOM.render(<h1>It's my test of react</h1>, document.getElementById('ap'));
//-----------------------------------------------------------------------------

var TodoApp = React.createClass({
    getInitialState: function () {
        return {items: [], text: '', textSelect: 'Normal'};
    },
    onChange: function (e) {
        this.setState({text: e.target.value});
    },
    change: function (e) {
        this.setState({textSelect: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{
            text: this.state.text,
            textSelect: this.state.textSelect,
            id: Date.now()
        }]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function () {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} placeholder="Title"/>

                    <select name="select" size="1" onChange={this.change}>
                        <option selected value="normal" onChange={this.change}>Normal</option>
                        <option value="critical" onChange={this.change}>Critical</option>
                    </select>

                    <button>Add</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('todo'));


//---------------------------------------------------------------

var data = [
    {
        title: 'First task',
        priority: 'normal' // bg-color: green
    }, {
        title: 'Second task',
        priority: 'critical' // bg-color: red
    }
];

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Tasks</h1>
                <CommentList data={this.props.data}/>

                <div>
                    <h4>Add a new task</h4>
                    <input type="text" placeholder="Title"/>
                    <select>
                        <option value="normal">Normal</option>
                        <option value="critical">Critical</option>
                    </select>

                    <button>Add</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<CommentBox data={data} />, document.getElementById('list'));



//--------------------------------------------------------------

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});
//ReactDOM.render(<CommentBox />, document.getElementById('content'));
//--------------------------------------------------------------

var CommentBox2 = React.createClass({displayName: 'CommentBox2',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox2"},
                "Hello, world! I am a CommentBox2."
            )
        );
    }
});
//ReactDOM.render(React.createElement(CommentBox2, null), document.getElementById('content2'));



ReactDOM.render(<DataBootstrapGrid />, document.getElementById('table'));

