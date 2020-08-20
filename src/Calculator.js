import React from 'react'

class Calculator extends React.Component{

    constructor (){
        super()
        this.state = {
            firstOperand: 0,
            operator: "+",
            secondOperand: 0,
            result: "0",
        }
    }

onFirstOperandChange = ( event ) => { 
    const firstOperand = event.target.value;
    this.setState({firstOperand})
}
onSecondOperandChange = (event) => {
    const secondOperand = event.target.value;
    this.setState({secondOperand})
}
onOperatorChange = ( event) =>{ 
    const operator = event.target.value;
    this.setState({operator})
}
calculate = () => {
    let result = 0;

    const {firstOperand, secondOperand, operator} = this.state;

    switch( operator){
        case'+':
        result = parseInt(firstOperand) + parseInt(secondOperand)
        break;
        case'-':
        result = parseInt(firstOperand) - parseInt(secondOperand)
        break;
        case'*':
        result = parseInt(firstOperand) * parseInt(secondOperand)
        break;
        case'/':
        result = parseInt(firstOperand) / parseInt(secondOperand)
        break;
        default:
            result = 0;

    };

this.setState({result})
}

render() {
    return(
        <div>

      <header>
        Calculator React
      </header>
      {/*first operand */}
      <input type="number" onChange={this.onFirstOperandChange}/>

      <select onChange={this.onOperatorChange}> 
        
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>

      </select>
        {/*second operand */}
      
       <input type="number" onChange={this.onSecondOperandChange} />

       <button onClick={this.calculate}>=</button>

         <input value ={this.state.result} type="text" disabled/>

    </div>
    );
}
}

export default Calculator;
    

    
