import React from 'react'

export default class Projects extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.title = 'Projects | Eddie Chan'
  }
  render () {
    return (
      <div>
        Projects
      </div>
    )
  }
}
