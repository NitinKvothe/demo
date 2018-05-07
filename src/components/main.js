
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab'

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';

import Value from 'grommet/components/Value';

import Qod from './Qod'
import Search from './Search'

class Main extends Component {
  render() {
    return (
      <App centered={true}>
        <Heading strong={true}
            uppercase={true}
            truncate={false}
            align='center'
            margin='small'>
            Sample Heading
        </Heading>
        <Tabs>
            <Tab title='QOD'>
                <Qod />
                Single card containig a Quote
            </Tab>
            <Tab title='SEARCH'>
                <Search />
                List of Cards of Quotes
            </Tab>
            <Tab title='FAV'>
                Favaourite quotes will be displayed here
            </Tab>
        </Tabs>

      </App>
    );
  }
};

export default Main