import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };

  componentDidUpdate() {
    this.parseQueryParams();
  }

  componentDidMount() {
    this.parseQueryParams();
  }

  parseQueryParams = () => {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[1] !== this.state.courseTitle) {
        this.setState({ courseTitle: param[1] });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
