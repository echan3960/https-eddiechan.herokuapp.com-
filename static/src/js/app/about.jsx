import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.title = 'About | Eddie Chan'
  }
  render () {
    return (
      <div>
        About
      </div>
    )
  }
}
