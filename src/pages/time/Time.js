import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h2>Sono le {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;

