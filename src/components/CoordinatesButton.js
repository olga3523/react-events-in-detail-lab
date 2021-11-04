import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    getCoords(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <button onClick={this.getCoords.bind(this)}>One</button>
        )
    }
}