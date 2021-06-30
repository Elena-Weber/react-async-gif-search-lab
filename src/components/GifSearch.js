import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchImgs(this.state.query)
    }

    render() {
        return (
            <div><h3>Enter a search term:</h3>
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
            <button>Find GIFs</button>
            </form>
            </div>
        )
    }

}