import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={() => this.props.action('(')}>(</button>
                <button name="CE" onClick={() => this.props.action('CE')}>CE</button>
                <button name=")" onClick={() => this.props.action(')')}>)</button>
                <button name="C" onClick={() => this.props.action('C')}>C</button><br/>

                <button name="1" onClick={() => this.props.action('1')}>1</button>
                <button name="2" onClick={() => this.props.action('2')}>2</button>
                <button name="3" onClick={() => this.props.action('3')}>3</button>
                <button name="+" onClick={() => this.props.action('+')}>+</button><br/>
                
                <button name="4" onClick={() => this.props.action('4')}>4</button>
                <button name="5" onClick={() => this.props.action('5')}>5</button>
                <button name="6" onClick={() => this.props.action('6')}>6</button>
                <button name="-" onClick={() => this.props.action('-')}>-</button><br/>

                <button name="7" onClick={() => this.props.action('7')}>7</button>
                <button name="8" onClick={() => this.props.action('8')}>8</button>
                <button name="9" onClick={() => this.props.action('9')}>9</button>
                <button name="*" onClick={() => this.props.action('*')}>*</button><br/>

                <button name="." onClick={() => this.props.action('.')}>.</button>
                <button name="0" onClick={() => this.props.action('0')}>0</button>
                <button name="=" onClick={() => this.props.action('=')}>=</button>
                <button name="/" onClick={() => this.props.action('/')}>/</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;