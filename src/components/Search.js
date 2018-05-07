import React from 'react';

import Card from 'grommet/components/Card';
// import style from './Search.css';

class Search extends React.Component {
    constructor(props){
        super(props);
    }
    quoteList(){
        let cardList = [];
        for(let i=0;i<10;i++){
            cardList.push(
                <Card
                label={'Sample Author'+ i}
                key={`SampleAuthor${i}`}
                description='Sample description providing the full quote '
                contentpad='small' />
            );
        }
        return cardList;
    }
    
    render() {
        return(
            <div /* className={style.listWrapper} */>{this.quoteList()}</div>
        );
    }
}

export default Search