import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.css'


class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: 0,
      temporal: 0,
      display: 0
		};
    this.handleClick = this.handleClick.bind(this);
	};
  
  handleClick(val) {
    switch(val) {
      case 1:
      if (this.state.input == 0) {
        this.setState({
          input: '1',
          temporal: '1',
          display: '1'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '1',
          temporal: '1',
          display: '1'
        })
      } else {
        this.setState({
          input: this.state.input + '1',
        temporal: this.state.temporal + '1',
        display: this.state.temporal + '1'})};
        break;
        case 2:
        if (this.state.input == 0) {
        this.setState({
          input: '2',
          temporal: '2',
          display: '2'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '2',
          temporal: '2',
          display: '2'
        })
      } else {this.setState({
          input: this.state.input + '2',
        temporal: this.state.temporal + '2',
        display: this.state.temporal + '2'})};
        break;
        case 3:
        if (this.state.input == 0) {
        this.setState({
          input: '3',
          temporal: '3',
          display: '3'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '3',
          temporal: '3',
          display: '3'
        })
      } else {this.setState({
          input: this.state.input + '3',
        temporal: this.state.temporal + '3',
        display: this.state.temporal + '3'})};
        break;
        case 4:
        if (this.state.input == 0) {
        this.setState({
          input: '4',
          temporal: '4',
          display: '4'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '4',
          temporal: '4',
          display: '4'
        })
      } else {this.setState({
          input: this.state.input + '4',
        temporal: this.state.temporal + '4',
        display: this.state.temporal + '4'})};
        break;
        case 5:
        if (this.state.input == 0) {
        this.setState({
          input: '5',
          temporal: '5',
          display: '5'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '5',
          temporal: '5',
          display: '5'
        })
      } else {this.setState({
          input: this.state.input + '5',
        temporal: this.state.temporal + '5',
        display: this.state.temporal + '5'})};
        break;
        case 6:
        if (this.state.input == 0) {
        this.setState({
          input: '6',
          temporal: '6',
          display: '6'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '6',
          temporal: '6',
          display: '6'
        })
      } else {this.setState({
          input: this.state.input + '6',
        temporal: this.state.temporal + '6',
        display: this.state.temporal + '6'})};
        break;
        case 7:
        if (this.state.input == 0) {
        this.setState({
          input: '7',
          temporal: '7',
          display: '7'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '7',
          temporal: '7',
          display: '7'
        })
      } else {this.setState({
          input: this.state.input + '7',
        temporal: this.state.temporal + '7',
        display: this.state.temporal + '7'})};
        break;
        case 8:
        if (this.state.input == 0) {
        this.setState({
          input: '8',
          temporal: '8',
          display: '8'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '8',
          temporal: '8',
          display: '8'
        })
      } else {this.setState({
          input: this.state.input + '8',
        temporal: this.state.temporal + '8',
        display: this.state.temporal + '8'})};
        break;
        case 9:
        if (this.state.input == 0) {
        this.setState({
          input: '9',
          temporal: '9',
          display: '9'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '9',
          temporal: '9',
          display: '9'
        })
      } else {this.setState({
          input: this.state.input + '9',
        temporal: this.state.temporal + '9',
        display: this.state.temporal + '9'})};
        break;
        case 0:
        if (this.state.input === 0) {
        this.setState({
          input: 0,
          temporal: 0,
          display: 0
        })
      } else if (this.state.temporal === 0) {
        this.setState({
          input: this.state.input,
          temporal: 0,
          display: 0
        })
      } else {this.setState({
          input: this.state.input + '0',
        temporal: this.state.temporal + '0',
        display: this.state.temporal + '0'})};
        break;
      case '.':
        var testRegex = /\./;
        if (this.state.input == 0) {
        this.setState({
          input: '.',
          temporal: '.',
          display: '.'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '.',
          temporal: '.',
          display:  '.'
        })
      } else if(testRegex.test(this.state.temporal)){
        this.setState({
          input: this.state.input,
        temporal: this.state.temporal,
        display: this.state.temporal})
      } else {this.setState({
          input: this.state.input + '.',
        temporal: this.state.temporal + '.',
        display: this.state.temporal + '.'})};
        break;
        case 'AC':
        this.setState({
          input: 0,
        temporal: 0,
        display: 0});
        break;
      case '+':
        var testRegex = /[^0-9.]$/;
        if (testRegex.test(this.state.input)) {
          let temp = this.state.input.slice();
          
          let newtemp = temp.replace(/[^0-9.]+$/, '+');
        this.setState({
          input: newtemp,
          temporal: 0,
          display:  0})
      } else if (this.state.temporal != 0 && this.state.input ==0) {
        this.setState({
          input: this.state.temporal + '+',
          temporal: 0,
          display: 0
        })
      } else {
        this.setState({
          input: this.state.input + '+',
          temporal: 0,
          display: 0
        })};
        break;
        case '-':
        var testRegex = /-$/;
        if (this.state.input == 0) {
        this.setState({
          input: '-',
          temporal: '-',
          display: '-'
        })
      } else if (this.state.temporal == 0) {
        this.setState({
          input: this.state.input + '-',
          temporal: '-',
          display: '-'
        })
      } else if (testRegex.test(this.state.input)) {
          
        this.setState({
          input: this.state.input,
          temporal: '-',
          display:  '-'})
      } else {this.setState({
          input: this.state.input + '-',
          temporal: 0,
          display: 0,
        })};
        break;
        case '*':
        var testRegex = /[^0-9.]$/;
        if (testRegex.test(this.state.input)) {
          let temp = this.state.input.slice();
          
          let newtemp = temp.replace(/[^0-9.]+$/, '*');
        this.setState({
          input: newtemp,
          temporal: 0,
          display:  0})
      } else if (this.state.temporal != 0 && this.state.input ==0) {
        this.setState({
          input: this.state.temporal + '*',
          temporal: 0,
          display: 0
        })
      } else {this.setState({
          input: this.state.input + '*',
          temporal: 0,
          display: 0,
        })};
        break;
        case '/':
        var testRegex = /[^0-9.\-]$/;
        if (testRegex.test(this.state.input)) {
          let temp = this.state.input.slice();
          
          let newtemp = temp.replace(/[^0-9.]+$/, '/');
        this.setState({
          input: newtemp,
          temporal: 0,
          display:  0})
      } else if (this.state.temporal != 0 && this.state.input ==0) {
        this.setState({
          input: this.state.temporal + '/',
          temporal: 0,
          display: 0
        })
      } else {this.setState({
          input: this.state.input + '/',
          temporal: 0,
          display: 0,
        })};
        break;
        case '=':
        let mathed = eval(this.state.input);
        this.setState({
          display: Math.round(mathed*1000000000)/1000000000,
          input: 0,
          temporal: Math.round(mathed*1000000000)/1000000000
        });
        break;
    }
  };
   
  
	render() {
		return (
		<div id='calculator'>
				<div id='display-box'>
          <p id='input'>{this.state.input}</p>
          <p id='display'>{this.state.display}</p>
				</div>
        <div id='button-holder'>
        <button id="clear" onClick = {() => this.handleClick('AC')}>AC</button>
        <button class='nbutton' id="divide" onClick = {() => this.handleClick('/')}>/</button>
        <button class='nbutton' id="multiply" onClick = {() => this.handleClick('*')}>*</button>
        <button class='nbutton' id="seven" onClick = {() => this.handleClick(7)}>7</button>
        <button class='nbutton' id="eight" onClick = {() => this.handleClick(8)}>8</button>
        <button class='nbutton' id="nine" onClick = {() => this.handleClick(9)}>9</button>
        <button class='nbutton' id="subtract" onClick = {() => this.handleClick('-')}>-</button>
        <button class='nbutton' id="four" onClick = {() => this.handleClick(4)}>4</button>
        <button class='nbutton' id="five" onClick = {() => this.handleClick(5)}>5</button>
        <button class='nbutton' id="six" onClick = {() => this.handleClick(6)}>6</button>
        <button class='nbutton' id="add" onClick = {() => this.handleClick('+')}>+</button>
        <button class='nbutton' id="one" onClick = {() => this.handleClick(1)}>1</button>
        <button class='nbutton' id="two" onClick = {() => this.handleClick(2)}>2</button>
        <button class='nbutton' id="three" onClick = {() => this.handleClick(3)}>3</button>
        <button class='nbutton' id="zero" onClick = {() => this.handleClick(0)}>0</button>
        <button class='nbutton' id="decimal" onClick = {() => this.handleClick('.')}>.</button>
        <button id="equals" onClick = {() => this.handleClick('=')}>=</button> 
        </div>
		</div>
		)
	}
};

ReactDOM.render(<Calculator />, document.getElementById('root'))