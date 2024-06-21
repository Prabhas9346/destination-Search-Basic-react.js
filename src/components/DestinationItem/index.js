import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {Destination} = this.props
    const {name, imgUrl} = Destination
    return (
      <li>
        <div>
          <img src={imgUrl} alt={name} />
          <p>{name}</p>
        </div>
      </li>
    )
  }
}
export default DestinationItem
