import { GifSelect } from "./GifSelectComponent";

export const PostForm = (props) => {
    return (
        <form>
            <div className="row">
                <div className="col-12">
                    {!props.posted ?
                        <textarea onChange={(e) => {
                            props.changePost({
                                postText: e.target.value
                            });
                        }} value={props.postText} placeholder="What's on your mind?"
                            className="form-control mb-3 mt-3" />
                        :
                        <textarea value={props.postText} readOnly className="form-control" />}
                </div>
            </div>
            <div className="row">
                <div className="col align-self-start">
                    {!props.posted ?
                        <button className="btn btn-primary" type="submit" onClick={() => {
                            props.changePost({
                                posted: !props.posted
                            })
                        }}>
                            Submit
                        </button>
                        :
                        <div></div>
                    }
                </div>
                <div className="col align-self-end">
                    {!props.posted ?
                        <div className="dropdown">
                            <button type="button"
                                className="btn btn-success dropdown-toggle align-self-end"
                                id="gif-dropdown" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                GIF
                            </button>
                            <div className="dropdown-menu" aria-labelledby="gif-dropdown">
                                <GifSelect gifSearchText={props.gifSearchText}
                                onChangeGifSelectText={props.onChangeGifSelectText}
                                gifResponse={props.gifResponse}
                                 />
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </form>
    );
}