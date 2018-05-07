import React from 'react';

import Card from 'grommet/components/Card';

import {quoteOfDay} from '../utils';

class Qod extends React.Component {
    constructor(){
        super();
        this.state={
            quote: '',
            author: ''
        }
    }
    componentDidMount(){
        quoteOfDay().then(data => {
            console.log(data["contents"]["quotes"]["0"]);
            return data["contents"]["quotes"]["0"]; 
        }).then(({quote, author})=>{
            this.setState({
                quote,
                author
            });
        });
    }
    render() {
        return (
            <Card label={ this.state.author }
            description={ this.state.quote } 
            contentPad='small' />
        );
    }
}







export default Qod;