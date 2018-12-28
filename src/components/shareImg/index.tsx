import * as React from 'react'
// import * as html2Canvas from 'html2canvas'
import './index.less'

interface canvasProps {
  changeLoading: any
}

interface canvasState {
  imgSrc: string
}

class ShareImg extends React.Component<canvasProps, canvasState> {

  imageCanvas: any
  image: any
  imageCtx: any
  imageCanvasRef: any

  constructor(props: canvasProps) {
    super(props)
    this.state = {
      imgSrc: ""
    }
    this.imageCanvasRef = (ref: any) => {
      this.imageCanvas = ref
    }
  }
  componentDidMount() {
    // console.log(this.image)
    // this.renderImageCanvas()
    console.log(this.imageCanvas)
    this.image = new Image()
    this.image.src = require("../../static/img/share.png")
    this.image.onload = () => {
      console.log(123)
      this.renderImageCanvas()
    }
  }
  renderImageCanvas = () => {
    // const { width, height } = this.state
    console.log(this.image)
    const cWidth = window.screen.width
    const cHeight = window.screen.height
    var getPixelRatio = function (context: any) {
      var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / backingStore;
    };
    this.imageCtx = this.imageCanvas.getContext('2d')
    var ratio = getPixelRatio(this.imageCtx)
    this.imageCtx.drawImage(this.image, 0, 0, cWidth * ratio, cHeight * ratio)
    console.log(cWidth)
    this.imageCtx.font = "55px kuangjiajia"
    this.imageCtx.fillStyle = "#ffbe3d"
    var text = "1"
    if (text.length > 1) {
      this.imageCtx.fillText(text, cWidth * 0.24, cHeight * 0.615);
    } else {
      this.imageCtx.fillText(text, cWidth * 0.31, cHeight * 0.615);
    }

    this.imageCtx.font = "55px kuangjiajia"
    this.imageCtx.fillStyle = "#de6f61"
    this.imageCtx.fillText("/14天", cWidth * 0.37, cHeight * 0.615);

    this.imageCtx.font = "27px kuangjiajia"
    this.imageCtx.fillStyle = "#de6f61"
    this.imageCtx.fillText("早起打卡计划", cWidth * 0.31, cHeight * 0.68);
    this.setState({
      imgSrc: this.imageCanvas.toDataURL()
    })
    setTimeout(() => {
      this.props.changeLoading()
    }, 1000)
  }
  render() {
    const cWidth = window.screen.width
    const cHeight = window.screen.height
    const { imgSrc } = this.state
    return (
      <div className="shareImg">
        <canvas
          width={cWidth}
          height={cHeight}
          ref={this.imageCanvasRef}>
          >
        </canvas>
        <img src={imgSrc} className="mask" />
      </div>
    )
  }
}


export default ShareImg