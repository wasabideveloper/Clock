import React from 'react';


export default class WatchHand extends React.Component {
    get height () { 
        return this.props.longEnd + this.props.shortEnd;
    }

    get position() {
        return {
            x: this.props.center.x - this.props.width/2,
            y: this.props.center.y - this.props.longEnd,
        };
    }

    get dot() {
        return this.props.dot ? {
            size: this.props.width * this.props.dot,
            position: {
                x: this.props.center.x,
                y: this.props.center.y - this.props.longEnd + (this.props.width * this.props.dot) / 2
            }
        } : null;
    }

    render() {
        return (
            <g>
                <rect
                    className="watch-hand"
                    x={this.position.x} 
                    y={this.position.y} 
                    width={this.props.width} 
                    height={this.height} 
                    fill={this.props.fill}
                    transform={`rotate(${this.props.angle},${this.props.center.x},${this.props.center.y})`}
                />
                {this.props.dot && 
                    <circle 
                        cx={this.dot.position.x} 
                        cy={this.dot.position.y} 
                        r={this.dot.size}
                        fill={this.props.fill}
                        transform={`rotate(${this.props.angle},${this.props.center.x},${this.props.center.y})`}
                    />
                }
            </g>
        );
    }
}

WatchHand.defaultProps = { 
    width: 4, 
    longEnd: 40,
    shortEnd: 10,
    fill: 'black',
    center: {
        x: 50,
        y: 50
    },
    angle: 0
};


