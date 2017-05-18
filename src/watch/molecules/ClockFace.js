import React from 'react';


export default class ClockFace extends React.Component {
    render() {
        return (
            <g>
                <circle 
                    cx={this.props.center.x} 
                    cy={this.props.center.y} 
                    r={this.props.radius} 
                    fill={this.props.faceFill}
                />
                <g>
                    {[...Array(60).keys()].map((i) => {
                        const ticks = {
                            width: (i % 5 === 0) ? 2.5 : 1,
                            height: (i % 5 === 0) ? 10 : 3
                        };
                        return <rect
                            key={i}
                            x={this.props.center.x - ticks.width / 2} 
                            y={this.props.center.y - (this.props.radius - 5)} 
                            width={ticks.width}
                            height={ticks.height} 
                            fill={this.props.tickFill}
                            transform={`rotate(${360/60*i},${this.props.center.x},${this.props.center.y})`}
                        />;
                    })}
                </g>             
                <g>
                    {this.props.children}
                </g>
                <circle cx={50} cy={50} r={2} fill="red" />
            </g>
        );
    }
}

ClockFace.defaultProps = { 
    radius: 50,
    center: {
        x: 50,
        y: 50
    },
    faceFill: 'rgb(240,240,240)',
    tickFill: 'black'
};
