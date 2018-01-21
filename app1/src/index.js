import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    const osat = props.osat.map((osa) => <Osa osa={osa} />)
    return (
        <div>
            {osat}
        </div>
    )
}

const Yhteensa = (props) => {
    let yhteensa = 0;
    props.osat.forEach(osa => {
        yhteensa += osa.tehtavia
    })
    return (
        <p>yhteensä {yhteensa} tehtävää</p>
    )
}

const Osa = (props) => {
    const {nimi, tehtavia} = props.osa
    return (
        <p>{nimi} {tehtavia}</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet', 
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys prosesseilla', 
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila', 
                tehtavia: 14
            }
        ]
    }
    
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
      </div>
    )
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
