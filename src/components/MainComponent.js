import { Post } from './PostComponent';
import React, { useState, useEffect } from 'react';

export const Main = (props) => {
    const [post, setPost] = useState({
        posted: false,
        postText: "",
        postGif: undefined,
        gifSearchText: "",
        gifsLoading: true,
        response: {},
    });

    const onChangeGifSelectText = (e) => {
        setPost({
            ...post,
            gifSearchText: e.target.value
        })
    }

    useEffect(() => {
        const fetchGifs = () => {
            const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
            let url = "";
    
            if (post.gifSearchText === "") {
                url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&rating=g`;
            }
            else {
                url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${post.gifSearchText}&limit=25&offset=0&rating=g&lang=en`;
            }
    
            fetch(url)
                .then(response => response.json())
                .then(resp => {
                    setPost({
                        ...post,
                        response: resp
                    });
                    console.log(post.response);
                });
        }

        fetchGifs();
        //eslint-disable-next-line
    }, [post.gifSearchText]);

    return (
        <div className="container-fluid" id="main-container">
            <Post posted={post.posted} postText={post.postText} postGif={post.postGif}
                changePost={(p) => { setPost({ ...post, ...p }) }}
                onChangeGifSelectText={(e) => onChangeGifSelectText(e)}
                gifSearchText={post.gifSearchText}
                gifResponse={post.response}
            />
        </div>
    );
}