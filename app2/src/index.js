import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Buttons = ({ options, handleClick }) => options.map((option) => <Button option={option} handleClick={handleClick} key={option} />)

const Button = ({ option, handleClick}) => <button onClick={handleClick(option)} key={option}>{option}</button>

const Statistics = ({ options, state }) => {
    const precisionRound = (num, precision) => Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
    const totalCount = options.reduce((total, option) => total + state[option], 0)
    const wellness = state.hyvä - state.huono
    const avg = precisionRound(wellness / totalCount, 1)
    const positivity = precisionRound(state['hyvä'] / totalCount * 100, 1)
    if (totalCount !== 0) {
        return (
            <table>
                <tbody>
                    {options.map((option, index) => <Statistic key={index} header={option} statistic={state[option]} />)}
                    <Statistic header='keskiarvo' statistic={avg ? avg : 0} />
                    <Statistic header='positiivisia' statistic={(positivity ? positivity : 0) + ' %'}/>
                </tbody>
            </table>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic header='ei yhtään palautetta annettu' />
            </tbody>
        </table>
    )
}

const Statistic = ({ header, statistic }) => {
    return (
        <tr>
            <td>{header}</td>
            <td>{statistic}</td>
        </tr>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyvä: 0,
            neutraali: 0,
            huono: 0
        }
    }

    handleClick = (option) => () => this.setState({ [option]: this.state[option] + 1 })
    
    render() {
        const options = [
            'hyvä',
            'neutraali',
            'huono'
        ]        

        return(
            <div>
                <h2>Anna palautetta</h2>
                <Buttons options={options} handleClick={this.handleClick}/>
                <h2>Statistiikka</h2>
                <Statistics options={options} state={this.state}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
