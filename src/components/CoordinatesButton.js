import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const mouseArray = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(mouseArray);
    }

    render() {

        return(
            <button onClick={this.handleClick} />
        )
    }
}