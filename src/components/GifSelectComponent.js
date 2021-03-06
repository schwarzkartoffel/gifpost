export const GifSelect = (props) => {
    const listOfGifs =
        props.gifResponse? props.gifResponse.data ?
            (props.gifResponse.data.map((elem) => {
                return (
                    <div className="col-12" key={elem.id}>
                        {/* <video alt={elem.title} autoPlay loop>
                            <source src={elem.images.fixed_width_small.mp4}
                            type="video/mp4"
                            />
                        </video> */
                        <img src={elem.images.fixed_width_downsampled.url}
                        alt={elem.title}
                        onClick={() => {
                            if(!props.posted) {
                                props.setPostGif(elem)
                            }
                            else {
                                props.setCommentBoxGifUrl(elem.images.fixed_width_downsampled.url)
                            }
                        }}
                        />}
                    </div>
                )
            })) : [] : [];
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control mb-3" value={props.gifSearchText}
                        onChange={(e) => props.onChangeGifSelectText(e)} />
                </div>
            </div>
            <div className="row">
                {listOfGifs}
            </div>
        </>
    );
}