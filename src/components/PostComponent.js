import { PostCard } from "./PostCardComponent";
import { PostForm } from "./PostFormComponent";

export const Post = (props) => {
    /* incoming props: posted - whether the post has been posted yet

    */
    /*
        post = {
            postText: "",
            postGif: <gif>,
            comments: [
                {commentText: "",
                commentGif: <gif>},
                ...
            ]
        }
    */

    return (
        <div>
            {!props.posted ?
                <PostForm posted={props.posted}
                setPostPosted={props.setPostPosted}
                postText={props.postText}
                postGif={props.postGif}
                setPostText={props.setPostText}
                gifSearchText={props.gifSearchText}
                onChangeGifSelectText={props.onChangeGifSelectText}
                gifResponse={props.gifResponse}
                />
                :
                <PostCard postText={props.postText} postGif={props.postGif}/>
            }
        </div>
    );
}