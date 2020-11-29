import React from 'react';
import './App.css';
import TextInputBox from './components/TextInputBox';
import ResultsTable from './components/ResultsTable';
import WordCount from './interfaces/WordCount'

export default class App extends React.Component {

	state = {
		words: [],
		counts: []
	};

	calculateWordCount = (words: string) => {
		let wordCounts: WordCount[] = [];
		const wordsArray = words.split(/\s+/);
		wordsArray.forEach((word: string) => {
			let foundWordIndex = wordCounts.findIndex(value => value.word === word);
			if(foundWordIndex !== -1) {
				wordCounts[foundWordIndex].count++;
			} else {
				wordCounts.push({word: word, count: 1});
			}
		});

        this.setState({
			words: wordCounts.map(wordCount => {
				return wordCount.word;
			}),
			counts: wordCounts.map(wordCount => {
				return wordCount.count;
			})
		});
    }

	render() {
		return (
			<div className="App">
				<TextInputBox	
					calculateWordCount={this.calculateWordCount}
				/>
				<ResultsTable 
					words={this.state.words}
					counts={this.state.counts}
				/>
			</div>
		);
	}
}
