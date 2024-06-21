import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {input: ''}

  SearchInput = event => {
    this.setState({input: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {input} = this.state
    const filteredList = destinationsList.filter(element =>
      element.name.toLowerCase().includes(input),
    )
    return (
      <div className="Box1">
        <h1>Destination Search</h1>
        <div className="SearchBox">
          <input
            onChange={this.SearchInput}
            type="search"
            placeholder="Search"
          />
          <img
            className="searchIcon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul>
          {filteredList.map(eachItem => (
            <DestinationItem key={eachItem.id} Destination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
