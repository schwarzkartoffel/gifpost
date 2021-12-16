import { GifSelect } from "./GifSelectComponent"

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
                                onChange={(e) => { props.setCommentBoxText(e.target.value) }}
                            />
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-warning"
                                onClick={() => {
                                    const comment = {
                                        text: props.commentBoxText,
                                        commentGifUrl: props.commentBoxGifUrl
                                    }
                                    props.addComment(comment);
                                }}>
                                Comment
                            </button>
                        </div>
                        <div className="col-1">
                            <div className="col align-self-end">
                                <div className="dropdown">
                                    <button type="button"
                                        className="btn btn-success dropdown-toggle align-self-end"
                                        id="gif-dropdown" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        GIF
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="gif-dropdown">
                                        <GifSelect
                                            gifSearchText={props.gifSearchText}
                                            onChangeGifSelectText={props.onChangeGifSelectText}
                                            gifResponse={props.gifResponse}
                                            posted={props.postPosted}
                                            setCommentBoxGifUrl={props.setCommentBoxGifUrl}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {props.commentBoxGifUrl ?
                                    <img src={props.commentBoxGifUrl} alt="commentGif"
                                        onClick={() => { props.setCommentBoxGifUrl(props.commentBoxGifUrl) }} />
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}