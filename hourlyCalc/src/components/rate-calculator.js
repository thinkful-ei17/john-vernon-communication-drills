import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayRate: 0,
            hours: 0
        };
    }
    setHours(e){
        this.setState({
            hours: e
        });
    }
    setDay(e){
        this.setState({
            dayRate: e
        });
    }

    render() {
        const rate = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    onChange={(val) => this.setDay(val)} />
                <NumberInput id="hours" label="Hours" min={1} max={12}
                     onChange={(val) => this.setHours(val)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

