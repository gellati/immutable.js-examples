import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import * as actionCreator from './store/actions/actions'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <div className="age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
        <br />
        <div>History (click element to delete it)</div>
        <div>
          <ul>
            {this.props.history.map(element => (
              <li
                className="history-item"
                key={element.id}
                onClick={() => this.props.onDeleteItem(element.id)}
              >
                {element.age}
              </li>
            )
            )}

          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onDeleteItem: (id) => dispatch(actionCreator.deleteItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
