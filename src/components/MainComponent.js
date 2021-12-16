import { Post } from './PostComponent';
import React, { useState, useEffect } from 'react';
import { CommentList } from './CommentListComponent';
import { CommentBox } from './CommentBoxComponent';

export const Main = (props) => {
    
        const [postPosted, setPostPosted] = useState(false);
        const [postText, setPostText] =  useState("");
        const [postGif, setPostGif] = useState(undefined);
        const [gifSearchText, setGifSearchText] = useState("");
        const [gifsLoading, setGifsLoading] = useState(true);
        const [gifResponse, setGifResponse] = useState({});
        const [commentList, setCommentList] = useState([]);
        const [commentBoxText, setCommentBoxText] = useState("");
        const [commentBoxGifUrl, setCommentBoxGifUrl] = useState("");

    const onChangeGifSelectText = (e) => {
        setGifSearchText(e.target.value);
    }

    const addComment = (comment) => {
        setCommentList([
            ...commentList,
            comment
        ])
        setCommentBoxText("")
        setCommentBoxGifUrl("")
    }

    useEffect(() => {
        const fetchGifs = () => {
            const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
            let url = "";
    
            if (gifSearchText === "") {
                url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&rating=g`;
            }
            else {
                url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${gifSearchText}&limit=25&offset=0&rating=g&lang=en`;
            }
    
            fetch(url)
                .then(response => response.json())
                .then(resp => {
                    setGifResponse(resp);
                    console.log(resp);
                });
        }

        fetchGifs();
    }, [gifSearchText]);

    return (
        <div className="container-fluid" id="main-container">
            <Post posted={postPosted}
                setPostPosted={(b) => {setPostPosted(b)}}
                postText={postText} 
                postGif={postGif}
                setPostGif={(gifObj) => {setPostGif(gifObj)}}
                setPostText={(text) => setPostText(text)}
                onChangeGifSelectText={(e) => onChangeGifSelectText(e)}
                gifSearchText={gifSearchText}
                gifResponse={gifResponse}
            />
            <CommentList
                commentList={commentList}
            />
            <CommentBox
                postPosted={postPosted}
                commentBoxText={commentBoxText}
                setCommentBoxText={(text) => {setCommentBoxText(text)}}
                addComment={(comment) => {addComment(comment)}}
                commentBoxGifUrl={commentBoxGifUrl}
                setCommentBoxGifUrl={(url) => {setCommentBoxGifUrl(url)}}
                onChangeGifSelectText={(e) => onChangeGifSelectText(e)}
                gifResponse={gifResponse}
            />
        </div>
    );
}