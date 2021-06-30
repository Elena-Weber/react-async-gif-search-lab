import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        imgs: []
    }

    render() {
        return (
            <div>
            <GifSearch fetchImgs={this.fetchImgs} />
            <GifList imgs={this.state.imgs} />
            </div>
        )
    }

    fetchImgs = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3')
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({imgs: data.map(img => ({url: img.images.original.url}) )})
        })
    }

    componentDidMount() {
        this.fetchImgs()
    }

}