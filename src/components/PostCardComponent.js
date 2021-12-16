export const PostCard = (props) => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="card-text post-text">
                    {props.postText}
                </p>
            </div>
            <div className="card-img-bottom">
                <img src={props.postGif} alt="GIF goes here"/>
            </div>
        </div>
    )
}