import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { handleClick, children } = this.props
    return <div>{children}</div>
  }
}

export default Button
