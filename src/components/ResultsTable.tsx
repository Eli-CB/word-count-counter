import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import WordCount from '../interfaces/WordCount';

export default class ResultsTable extends React.Component<any, any> {

    render() {
        let wordCounts: WordCount[] = [];
        for(let i = 0; i < this.props.words.length; i++) {
            wordCounts.push({word: this.props.words[i], count: this.props.counts[i]});
        } 
        const products = wordCounts;
        const columns = [{
            dataField: 'word',
            text: 'Words',
            sort: true,
        }, {
            dataField: 'count',
            text: 'Occurrences',
            sort: true,
        }];

        return (
            <div className="mx-5 center-mobile text-center col-6">
                <BootstrapTable  keyField='word' data={ products } columns={ columns } />
            </div>
        );
    }
}