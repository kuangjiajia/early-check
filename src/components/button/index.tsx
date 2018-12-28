import * as React from 'react'
import './index.less'

interface buttonProps {
  type?: string
  buttonClick?: any
  text?: string
  successClick?: any
  timePeriod?: number
  ban: boolean
}

interface buttonState {

}


export default class Button extends React.PureComponent<buttonProps, buttonState> {
  constructor(props: buttonProps) {
    super(props)
  }
  public render() {
    const { text, successClick, type, timePeriod, ban } = this.props
    const time = timePeriod === 0 ? "6:30 - 7:00" : timePeriod === 1 ? "7:00 - 7:30" : "7:30 - 8:00"
    return (
      <React.Fragment>
        <button className="button2" id={ban ? "button3" : ""} onClick={successClick}>{text}</button>
        {
          type === "cannotClockIn" ? (<div>
            <h4 className="btn-add-text">每日打卡时间段为: 6:30 - 8:00</h4>
            <h4 className="btn-add-text">我的目标时间段为: {time}</h4>
          </div>) : type === "miss" ? (
            <div>
              <h4 className="btn-add-text">我的目标时间段为: {time}</h4>
              <h4 className="btn-add-text">很遗憾,你错过了今天的打卡</h4>
            </div>
          ) : type === "clockIn" ? (
            <div>
              <h4 className="btn-add-text">我的目标时间段为: {time}</h4>
            </div>
          ) : null
        }

      </React.Fragment>
    )
  }
}


