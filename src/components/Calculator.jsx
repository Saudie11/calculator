import React, { useState} from 'react'
import './Calculator.css'

const Calculator = () => {
    const [value, setValue] = useState('');

    const handel = (e) => {
        setValue(value.concat(e.target.value));
    }

    const clearDisplay = () => {
        setValue("");
    }

    const del = () => {
        setValue(value.slice(0,-1))
    }

    const equal = () => {
        setValue(eval(value).toString())
    }

    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className='display'>
                        <input type="text" value={value} />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={clearDisplay}/>
                        <input type="button" value="DE" onClick={del}/>
                        <input type="button" value="."onClick={handel}/>
                        <input type="button" value="/" onClick={handel}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={handel}/>
                        <input type="button" value="8" onClick={handel}/>
                        <input type="button" value="9" onClick={handel}/>
                        <input type="button" value="*" onClick={handel}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={handel}/>
                        <input type="button" value="5" onClick={handel}/>
                        <input type="button" value="6" onClick={handel}/>
                        <input type="button" value="+" onClick={handel}/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={handel}/>
                        <input type="button" value="2" onClick={handel}/>
                        <input type="button" value="3" onClick={handel}/>
                        <input type="button" value="-" onClick={handel}/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={handel}/>
                        <input type="button" value="0" onClick={handel}/>
                        <input type="button" value="=" className='equal' onClick={equal}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Calculator;