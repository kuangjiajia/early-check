import * as React from 'react'
import "./index.less"

interface confirmProps {
  type?: string
  successClick?: any
  cancelClick?: any
  timePeriod?: number
}

interface TimeChooseState {
  value: string
}


class TimeChoose extends React.Component<confirmProps, TimeChooseState> {
  constructor(props: confirmProps) {
    super(props)
    this.state = {
      value: "0",
    }
  }
  handleChange = (e: any) => {
    // console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  handleClickSuccess = () => {
    console.log(this.state.value)
    this.props.successClick(parseInt(this.state.value))
  }
  render() {
    const { cancelClick } = this.props
    // const { value } = this.state
    return (
      <div className="confirm">
        <div>
          <h2 className="confirm-text">选择你的目标打卡时间</h2>
          <select
            className="confirm-select"
            // value={value}
            onChange={this.handleChange}
          >
            <option value="0">6:30 - 7:00</option>
            <option value="1">7:00 - 7:30</option>
            <option value="2">7:30 - 8:00</option>
          </select>
        </div>
        <ul className="confirm-sure-cancel">
          <li className="confirm-cancel" onClick={cancelClick}>取消</li>
          <li className="confirm-sure" onClick={this.handleClickSuccess}>确定</li>
        </ul>
      </div>
    )
  }
}

const MakeSure = ({ successClick, cancelClick, timePeriod }: confirmProps) => {
  const time = timePeriod === 0 ? "6:30 - 7:00" : timePeriod === 1 ? "7:00 - 7:30" : "7:30 - 8:00"
  return (
    <div className="confirm makeSures">
      <div className="makeSure">
        <h2 className="makeSure-time">你选择的时间段为: {time}</h2>
        <h2 className="makeSure-time">确认后不可更改 !</h2>
      </div>
      <ul className="makeSure-sure-cancel">
        <li className="confirm-cancel" onClick={successClick}>是的</li>
        <li className="confirm-sure" onClick={cancelClick}>我再想想</li>
      </ul>
    </div>
  )
}

const Confirm = ({ type, successClick, cancelClick, timePeriod }: confirmProps) => {
  if (type === "timeChoose") {
    return <TimeChoose successClick={successClick} cancelClick={cancelClick} />
  } else {
    return <MakeSure successClick={successClick} cancelClick={cancelClick} timePeriod={timePeriod} />
  }
}





export default Confirm