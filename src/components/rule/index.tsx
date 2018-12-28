import * as React from 'react'
import "./index.less"
import { textConfig } from '../../config/index'

interface ruleProps {
  cancelClick: any
}

const Rule = ({ cancelClick }: ruleProps) => (
  <div className="rules">
    <h3 className="rule-cancel">
      <span className="rule-cancel-icon" onClick={cancelClick}></span>
    </h3>
    <h3 className="rule-describe">规则说明</h3>
    <section>
      <article>关于奖品</article>
      <ul>
        {
          textConfig[0].map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </section>
    <section className="about-prop">
      <article>关于获奖概率</article>
      <div>{textConfig[1][0]}</div>
    </section>
  </div>
)

export default Rule