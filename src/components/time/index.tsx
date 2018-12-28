import * as React from 'react'
import './index.less'
// import { number, any } from 'prop-types';
import { getTime, changeStatus } from '../../utils'

interface timeState {
  h?: number | string
  m?: number | string
  timer?: any
  timeStamp: number
  sixHalf: number
  seven: number
  sevenHalf: number
  eight: number
}

interface timeProps {
  timePeriod: number
  changeState: any
  status: false
  luckyVal: string
  btnType: string
}


class Time extends React.PureComponent<timeProps, timeState> {
  constructor(props: timeProps) {
    super(props)
    const timeStampToday = new Date(new Date().toLocaleDateString()).getTime()
    this.state = {
      timer: null,
      timeStamp: new Date().getTime(),
      h: new Date().getHours(),
      m: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
      sixHalf: timeStampToday + 60 * 60 * 1000 * 6.5,
      seven: timeStampToday + 60 * 60 * 1000 * 7,
      sevenHalf: timeStampToday + 60 * 60 * 1000 * 7.5,
      eight: timeStampToday + 60 * 60 * 1000 * 8,
    }
  }
  public componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        const { timePeriod, changeState, btnType } = this.props
        const { timeStamp, sixHalf, seven, sevenHalf, eight } = this.state
        switch (timePeriod) {
          case 0:
            changeStatus(sixHalf, seven, changeState, timeStamp, btnType)
            break
          case 1:
            changeStatus(seven, sevenHalf, changeState, timeStamp, btnType)
            break
          case 2:
            changeStatus(sevenHalf, eight, changeState, timeStamp, btnType)
            break
        }
        this.setState(getTime())
      }, 1000)
    })
  }
  public componentDidUpdate() {

  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  public render() {
    const { luckyVal } = this.props
    const { h, m } = this.state
    return (
      <div className="time">
        <p className="time-lucky">当前幸运值为: {luckyVal}</p>
        <p className="time-effort">越努力,越幸运</p>
        <h1 className="time-val">{h}<span>:</span>{m}</h1>
      </div>
    )
  }
}



export default Time