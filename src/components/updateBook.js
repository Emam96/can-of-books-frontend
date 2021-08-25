import React, { Component } from "react";
import { Form, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class UpdateBookForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.updateBook}>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Book name"
            name="title"
            defaultValue={this.props.bookInfo.title}
          />

          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Book description"
            name="description"
            defaultValue={this.props.bookInfo.description}
          />

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateBookForm;
