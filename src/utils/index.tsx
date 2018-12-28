const getTime = () => {
  let today = new Date()
  let h = today.getHours()
  let m = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
  let timeStamp = today.getTime()
  return {
    h,
    m,
    timeStamp
  }
}

const changeStatus = (start: any, end: any, fn: any, time: any, btnType: string): any => {
  if (time < start && btnType !== "miss") {
    fn("miss")
  } else if (time > start && time < end && btnType !== "clockIn") {
    fn("clockIn")
  } else if (time > end && btnType !== "annotClockIn") {
    fn("cannotClockIn")
  }
}


export {
  getTime,
  changeStatus
}