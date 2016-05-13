//import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('ap'));

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
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
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
ReactDOM.render(
    React.createElement(CommentBox2, null),
    document.getElementById('content2')
);