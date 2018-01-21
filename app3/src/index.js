import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, label }) => <button onClick={handleClick}>{label}</button>

const Anecdote = ({ anecdotes, index }) => <p>{anecdotes[index].content}</p>

const Votes = ({ anecdotes, index }) => <span>{anecdotes[index].votes}</span>

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        mostVoted: 0
      }
    }

    nextAnecdote = () => {
      const nextIndex = Math.floor(Math.random() * (this.props.anecdotes.length))
      this.setState({ selected: nextIndex })
    }

    vote = (anecdotes) => () => {
      anecdotes[this.state.selected].votes += 1

      this.setState({ mostVoted: anecdotes[this.state.selected].votes > anecdotes[this.state.mostVoted].votes ? this.state.selected : this.state.mostVoted })
    }

    render() {
      return (
        <div>
          <Anecdote anecdotes={this.props.anecdotes} index={this.state.selected} />
          <p>votes: <Votes anecdotes={this.props.anecdotes} index={this.state.selected} /></p>
          <Button handleClick={this.nextAnecdote} label='Anna uusi anekdootti' />
          <Button handleClick={this.vote(this.props.anecdotes)} label='Vote' />
          <h1>Anecdote with most votes:</h1>
          <Anecdote anecdotes={this.props.anecdotes} index={this.state.mostVoted} />
          <p>Has <Votes anecdotes={this.props.anecdotes} index={this.state.mostVoted} /> votes</p>
        </div>
      )
    }
  }
  
  const anecdotes = [
    {
      content: 'If it hurts, do it more often',
      votes: 0
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      content: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    }
  ]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
