import * as React from 'react'
import api from '../../api'
import './index.less'
import {
  Time,
  Confirm,
  Button,
  Rule,
  Loading,
  ClockSuccess,
  ShareImg
} from 'Components'

interface indexState {
  isShow: boolean //控制规则的
  status: boolean
  type: string
  timePeriod: number
  luckyVal: string
  btnType: string
  timeStampToday: number
  isLoading: boolean
  poster: boolean
  isShare: boolean
  conTime: number
  totalTime: number
}

interface indexProps {

}
// 398 249

class Index extends React.PureComponent<indexProps, indexState> {
  constructor(props: indexProps) {
    super(props)
    this.state = {
      status: false,
      isShow: false,
      type: "join",
      timePeriod: 0,
      luckyVal: "0",
      btnType: "cannotClockIn",
      timeStampToday: new Date(new Date().toLocaleDateString()).getTime(),
      isLoading: true,
      poster: false,
      isShare: false,
      conTime: 4,
      totalTime: 3
    }
  }

  componentDidMount() {
    api.login().then(res => {
      localStorage.setItem("Authtoken", res.jwt)
      if (!res.isNewUser) {
        this.setState({
          type: "ok",
          btnType: "clockIn",
          timePeriod: res.info.punch_time
        })
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 1000)
      }
    })
  }

  successClock = () => {
    api.punch().then(res => {
      this.setState({
        conTime: res.info.conTime,
        totalTime: res.info.totalTime
      })
      setTimeout(() => {
        this.changePoster()
      }, 100)
    })
  }
  changePoster = () => {
    this.setState({
      poster: !this.state.poster
    })
  }

  //当时间段内就改变状态
  changeState = (btnType: string) => {
    this.setState({
      btnType: btnType
    })
  }
  //规则
  changeShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  successClickTimeChoose = (v: any) => {
    console.log(123)
    this.setState({
      timePeriod: v,
      type: "makeSure"
    })
  }

  share = () => {
    this.setState({
      isShare: true,
      isLoading: true
    })
  }

  successClickMakeSure = () => {
    api.setInfo(this.state.timePeriod).then(res => {
      console.log(res)
      this.setState({
        type: "ok",
        btnType: "clockIn",
        isLoading: true
      })
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1000)
    })
  }

  cancelClickTimeChoose = () => {
    this.setState({
      type: "join",
      btnType: "join"
    })
  }

  cancelClickMakeSure = () => {
    this.setState({
      type: "timeChoose"
    })
  }

  clickJoinPlan = () => {
    this.setState({
      type: "timeChoose",
      btnType: "mdzz"
    })
  }

  changeLoading = () => {
    this.setState({
      isLoading: false
    })
  }


  public render() {
    const { isShow, type, timePeriod, luckyVal, btnType, isLoading, poster, isShare, conTime, totalTime } = this.state
    return (
      <div className="Index bg1">
        {isShare ? <ShareImg changeLoading={this.changeLoading} /> : null}
        {poster ? <ClockSuccess clickClose={this.changePoster} continuousDay={conTime} totalDay={totalTime} share={this.share} /> : null}
        {isLoading ? <Loading /> : null}
        <header className="Index-header">
          {type === "join" ? <div className="logo" /> : <Time timePeriod={timePeriod} changeState={this.changeState} status={false} luckyVal={luckyVal} btnType={btnType} />}
          {isShow ? <Rule cancelClick={this.changeShow} /> : null}
          <span className="rule" onClick={this.changeShow}></span>
        </header>
        <main className="Index-content">
          {
            (type === "join" || type === "ok") ? null : type === "timeChoose" ? <Confirm type={type} successClick={this.successClickTimeChoose} cancelClick={this.cancelClickTimeChoose} />
              : <Confirm type={type} timePeriod={timePeriod} cancelClick={this.cancelClickMakeSure} successClick={this.successClickMakeSure} />
          }
        </main>
        <footer className="Index-footer">
          {
            (btnType === "join" || type === "join") ? <Button ban={false} text="加入计划" type="disable" successClick={this.clickJoinPlan} /> :
              btnType === "clockIn" ? <Button ban={false} text="打卡" type={btnType} timePeriod={timePeriod} /> :
                (btnType === "cannotClockIn" && type === "ok") ? <Button ban={true} text="打卡" type={btnType} timePeriod={timePeriod} successClick={this.successClock} /> :
                  btnType === "miss" ? <Button ban={false} text="打卡还未开启" timePeriod={timePeriod} /> : null
          }
        </footer>
      </div>
    );
  }
}

export default Index
