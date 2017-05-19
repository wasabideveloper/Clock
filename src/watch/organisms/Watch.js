import React from 'react';

import WatchHand from '../atoms/WatchHand';
import ClockFace from '../molecules/ClockFace';

import './Watch.css';


export default class Watch extends React.Component {
    constructor() {
        super();
        this.tick = this.tick.bind(this);

        this.state = {
            time: new Date()
        }
    }


    tick() {
        this.setState({ time: new Date() });
    }


    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    get hourHandAngle() {
        return 360 / 12 * (this.state.time.getHours() % 12);
    }

    get minuteHandAngle() {
        return 360 / 60 * this.state.time.getMinutes();
    }

    get secondHandAngle() {
        return 360 / 60 * this.state.time.getSeconds();
    }


    render() {
        return (
            <svg class="watch"  
                viewBox={`0 0 ${this.props.size} ${this.props.size}`}
            >
                <ClockFace faceFill="white">
                    <WatchHand 
                        angle={this.hourHandAngle} 
                        width={4} 
                        shortEnd={10} 
                        longEnd={30} 
                    />
                    <WatchHand 
                        angle={this.minuteHandAngle} 
                        width={3} 
                        shortEnd={10} 
                        longEnd={45} 
                    />
                    <WatchHand 
                        angle={this.secondHandAngle} 
                        width={1} 
                        shortEnd={15} 
                        longEnd={35} 
                        fill="red" 
                        dot={3}
                    />
                </ClockFace>
            </svg>
        );
    }
}

Watch.defaultProps = { 
    size: 100
};
