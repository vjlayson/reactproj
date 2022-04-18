// rfce
// rafce

// rce
import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import ImageList from './ImageList'

export class Gallery extends Component {
  state = {images:[]}
  onSearchSubmit = async (term) => {
      // console.log(term)
      const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
          Authorization: "Client-ID LvwqKeQ5vqaA_iLjBN9ObAphI5F378HU-BxjYYFVwg0"
        },
        params:{
          query:term
        }
      })
      this.setState({images:response.data.results})
      console.log(this.state.images)
  }
  render() {
    return (
      <div className='ui container' style={{marginTop:"15px"}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
      </div>
    )
  }
}


export default Gallery

