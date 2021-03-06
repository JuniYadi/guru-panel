import React, { Component } from 'react'

export default class ContentHeader extends Component {

  render() {
    return (
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-8">
              <h1 className="m-0 text-dark">{this.props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}