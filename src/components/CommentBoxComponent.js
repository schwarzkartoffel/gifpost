export const CommentBox = (props) => {
    if (!props.postPosted) {
        return <div></div>
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-12">
                <form>
                    <div className="row">
                        <div className="col-10">
                            <input className="form-control"
                            type="text"
                            placeholder="Write Comment..."
                            value={props.commentBoxText}
                            onChange={(e) => {props.setCommentBoxText(e.target.value)}}
                            /> 
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-warning"
                                onClick={() => {
                                    const comment = {
                                        text: props.commentBoxText
                                    }
                                    props.addComment(comment)
                                }}>
                                Comment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}