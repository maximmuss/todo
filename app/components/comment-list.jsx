import React from 'react';

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <div>Task - {comment.title}   Status - {comment.priority}
                </div>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

export default CommentList;