import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.title = 'Eddie Chan'
  }
  render () {
    return (
      <div>
        Little Shao
      </div>
    )
  }
}
