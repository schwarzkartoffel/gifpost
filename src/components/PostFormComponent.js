import { GifSelect } from "./GifSelectComponent";

export const PostForm = (props) => {
    return (
        <form>
            <div className="row">
                <div className="col-12">
                    <textarea onChange={(e) => {props.setPostText(e.target.value)}}
                    value={props.postText} placeholder="What's on your mind?"
                    className="form-control mb-3 mt-3"
                    />
                </div>
                <div className="col-12">
                    {props.postGif?
                        <img src={props.postGif.images.original.url}
                        alt={props.postGif.title}
                        />
                    :
                        <div></div>}
                </div>
            </div>
            <div className="row">
                <div className="col align-self-start">
                    <button className="btn btn-primary" type="submit"
                    onClick={() => {
                        props.setPostPosted(true);
                    }}>
                        Submit
                    </button>
                </div>
                <div className="col align-self-end">
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
                            setPostGif={props.setPostGif}
                            posted={props.posted}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}