import React, { createElement } from 'react'
import ReactDOM from 'react-dom/server'
import ReactDOMM from 'react-dom'
import { Button } from '@dfds-ui/react-components'
import WebComponent from '@dfds-devex/minions-core/lib/components/WebComponent'
import { html, property, customElement, TemplateResult } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import createCache from '@emotion/cache'
// @customElement('x-search')
class XSearch extends HTMLElement {
  // @property({ type: String }) message = 'Click me!'
  mountPoint: HTMLElement
  constructor() {
    super()
    this.mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint)
  }

  async connectedCallback() {
    //     const styles = document.createElement('style')
    //     styles.textContent = `
    // .css-1ors82h {
    //   background-color: #900;

    // }`

    ReactDOMM.render(
      createElement(Button, { children: 'asd', variation: 'primary' }),
      this.mountPoint
    )

    const styles = document.querySelectorAll('style')
    console.log(styles)
    for (let index = 0; index < styles.length; index++) {
      console.log(styles[index])
      this.appendChild(styles[index] as any)
    }
  }

  disconnectedCallback() {
    ReactDOMM.unmountComponentAtNode(Button as any)
  }
  // render() {
  //   return html`${unsafeHTML(
  //     ReactDOM.renderToString(
  //       createElement(Button, { children: this.message, variation: 'primary' })
  //     )
  //   )}`
  // }

  // connectedCallback() {
  //   const mountPoint = document.createElement('span')
  //   this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
  //   console.log(this.getAttribute('onClick'))
  //   const name = this.getAttribute('name')
  //   const onClick = this.getAttribute('onClick')
  //   const count = this.getAttribute('count')
  //   const handleOnClick = () => {
  //     if (onClick) return onClick()
  //   }
  //   console.log(Button)

  //   ReactDOM.render(
  //     React.createElement(Button, {
  //       onClick: handleOnClick,
  //       variation: 'primary',
  //       children: name,
  //     }),
  //     mountPoint
  //   )
  // }
}
customElements.define('x-search', XSearch)

// Define React Component
const HelloMessage: React.FC<{ name: string }> = (props) => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      Hello <x-search name={props.name} />!{count}
    </div>
  )
}

var container = document.getElementById('root')
ReactDOMM.render(<HelloMessage name="Jim Sproch" />, container)
