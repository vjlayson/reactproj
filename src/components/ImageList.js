// rafce, es7+ extension

// functional component
import React from 'react'
import ImageCard from './ImageCard'
import "../css/ImageList.css"

const ImageList = (props) => {
    console.log(props.images)
    const images = props.images.map(image=>{
        return <ImageCard key={image.id} image={image}/>
    })
  return (
    <div className='image-list'>
        {images}
    </div>
  )
}

export default ImageList