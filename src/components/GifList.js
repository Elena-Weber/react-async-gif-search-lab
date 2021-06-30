import React from 'react'

const GifList = props => {
    console.log(props);
    return (
    <div>
        {props.imgs.map(img => <img key={img.url} src={img.url} alt="img"/>)}
    </div>
    )
}

export default GifList