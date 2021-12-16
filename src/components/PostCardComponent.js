export const PostCard = (props) => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="card-text post-text">
                    {props.postText}
                </p>
            </div>
            {props.postGif?
                <div className="card-img-bottom">
                    <img src={props.postGif.images.original.url} alt={props.postGif.title}/>
                </div>
            :
                <div></div>
            }
        </div>
    )
}