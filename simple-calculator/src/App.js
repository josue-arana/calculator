import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {
    
    constructor(props){
        super(props)

        this.handler = this.handler.bind(this)
        this.state = { output: "", reset: false}
    }
    
    handler(value){

        var result = String(this.state.output);
        var clear = this.state.reset;
        var last = result.charAt(result.length-1)
        var oper = "+-*/."

        /**********   Input validation  ***************/
        try{
            if (value === "=" ){  
                if(oper.includes(last) || (!result.includes("(") && last === ")"))
                    result = result.slice(0,-1);

                result = eval(result); 
                clear = true;
            }
            else if(value === "C" || result === "Error" || result === "Infinity" || result === "NaN"){
                result = "";
                clear = false;
            }else if(value === "CE"){
                result = result.slice(0,-1);
            
            //to clear screen after showing result
            }else if((value === "." || value === "(" || value >= 0 || value <= 9) && this.state.reset === true){
                result = value;
                clear = false;
            //to prevent the user entering a sequence of operands
            }else if(oper.includes(value) && oper.includes(last)) {
                result = result.slice(0,-1);
                result += value;
                
            }else{  //simple parenthesis validadtion, to prevent user from stating the calculation with ")"
                if (!result.includes("(") && value === ")"){
                    clear = false;  //mantain same result, no change.

                }else{  //concatinate the string to evaluate
                    result += value;
                    clear = false; 
                }
            }
        }catch(err){
            result = "Error";
            clear = true;
        } 
        /* Update the state */
        this.setState({ output: result, reset: clear })
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result showResult={this.state.output}/>
                    <KeyPad action={this.handler}/> 
                </div>
            </div>
        );
    }
}

export default App;