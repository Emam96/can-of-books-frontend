import React from 'react';
import { Form, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class BookForm extends React.Component {
    render() {
      return(
          <>
        <Form onSubmit={this.props.sendBook} >
        <Form.Group>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Book name"
            name="title"
          />

          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Book description"
            name="description"
          />
          
        </Form.Group>
        <Button type="submit" variant="primary">
          Add book
        </Button>
        
      </Form>
      </>
      );
    }
  }
  
  export default BookForm;