import React, { Component } from 'react'
import { SERVICES } from '../apis/services'
import Button from './button'
import { PROVIDERS } from '../apis/providers'

function getServiceNames() {
  const service = SERVICES.data.map((item) => item.attributes.name)
  return service
}

class Control extends Component {
  state = {
    services: [],
  }
  componentDidMount() {
    this.setState(() => {
      const services = getServiceNames()
      console.log(services)
      return {
        services,
      }
    })
  }
  handleClick(service) {
    const providers = PROVIDERS.data.filter((item) => {
      if(item.attributes.service === service) {
        console.log('Hello')
        return item.id
      }
    })
  }
  render() {
    return (
      <div className='control'>
        <ol>
          {this.state.services.map((service) => (
            <li>
              <button >{service}</button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Control
