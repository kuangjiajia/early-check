import * as React from 'react'
import "./index.less"

interface ClockSuccessProps {
  clickClose: any
  continuousDay: number
  totalDay: number
  share: any
}

class ClockSuccess extends React.Component<ClockSuccessProps, {}>{
  render() {
    const { clickClose, continuousDay, totalDay, share } = this.props
    return (
      <div className="clock-success">
        <div className="posters">
          <span className="close-poster" onClick={clickClose}></span>
          <h3 className="day-all">{totalDay}/14</h3>
          <h3 className="contact-day">已连续打卡{continuousDay}天</h3>
          <h4 className="generate-poster" onClick={share}>生成海报，分享今日打卡</h4>
        </div>
      </div>
    )
  }
}

export default ClockSuccess
