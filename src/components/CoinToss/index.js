// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: headImg,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (toss === 0) {
      tossImg = headImg
      latestHeadsCount += 1
    } else {
      tossImg = tailImg
      latestTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="response-content">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-img" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
