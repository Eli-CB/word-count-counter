import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import WordCount from '../interfaces/WordCount';

export default class ResultsTable extends React.Component<any, any> {

    render() {
        let wordCounts: WordCount[] = [];
        for(let i = 0; i < this.props.words.length; i++) {
            console.log(this.props.words[i]);
            wordCounts.push({word: this.props.words[i], count: this.props.counts[i]});
        } 
        const products = wordCounts;
        const columns = [{
            dataField: 'word',
            text: 'Word'
        }, {
            dataField: 'count',
            text: 'Frequency'
        }];

        return (
            <div>
                <BootstrapTable keyField='word' data={ products } columns={ columns } />
            </div>
        );
    }
}