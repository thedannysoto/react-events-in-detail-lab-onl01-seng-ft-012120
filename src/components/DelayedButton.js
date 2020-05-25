import React, {Component} from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        const fn = this.props.onDelayedClick;
        event.persist(event);
        const ev = event;
        setTimeout(function() {fn(ev)}, this.props.delay);
    }
    
    render() {
        
    
        return(
            <button onClick={this.handleClick} />
        )
    }
}