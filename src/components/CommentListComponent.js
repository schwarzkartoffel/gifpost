export const CommentList = (props) => {
    if (props.commentList.length === 0) {
        return <div></div>
    }

    const comments = props.commentList.map((comment, index) => {
        return (
            <div className="row" key={index}>
                <div className="col-12">
                    <div className="card mt-3 mb-3 comment-card">
                        <div className="card-body">
                            <p className="card-text">
                                {comment.text}
                            </p>
                        </div>
                        <div className="card-img-bottom">
                        {comment.commentGifUrl?
                            <img src={comment.commentGifUrl} alt={comment.text} />
                            :
                            <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return <div>{comments}</div>
}