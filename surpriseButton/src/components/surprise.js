import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          page: 'button'
        };

    }

    changePage = () => {
      console.log('CLICKED!');
      this.setState({page: 'gif'});
    }
    
    render() {
        // Show the button to start with
        if (this.state.page === 'button'){
            return <SurpriseButton varName={this.changePage} />;
        }

        else {
          return(
            <div>
            <h2> lol </h2>
            <SurpriseImage />
            </div>
          );
        }

    }
}
//this.changePage() && varName - WORKS AS INTENDED.; & it doesnt start when app starts
//this.changePage && varName() - cannot read property of undefined aka this = undefined
//this.changePage() && varName() - runs at the beginning & a warning for setState
//this.changePage && varName - DOESNT WORK AT ALL
