import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Form, Button } from "react-bootstrap/";
import "./BestBooks.css";

import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      books: [],
    };
  }

  componentDidMount = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    await this.setState({
      email: user.email,
    });

    let url = `${process.env.REACT_APP_DATABASE}/books?email=${this.state.email}`; 

    console.log(url);
    let booksData = await axios.get(url); // http://localhost:4000/books

    this.setState({
      books: booksData.data,
    });

    console.dir(booksData.data[0].title);
  };

  sendBook = async (event) => {
    event.preventDefault();
    
console.log("sendBook is runnig");
    let title = event.target.title.value;

    let description = event.target.description.value;

    let bookDataObj = {
      email: this.state.email,
      title,
      description,
    };
    console.log("sendBook before resdata");
    console.log(process.env.REACT_APP_DATABASE, "this link");
    let resData = await axios.post(
      `${process.env.REACT_APP_DATABASE}/addbook`,
      bookDataObj
    );

    await this.setState({
      books: resData.data,
    });

    console.log("sendBook finished runnig");
  };




  deleteBook = async (id) => {
    
    let paramsObj = {
      email: this.state.email,
    };

    let resData = await axios.delete(`${process.env.REACT_APP_DATABASE}/deletebook/${id}`, { params: paramsObj });

    await this.setState({
      books: resData.data,
    });
  };






  render() {
    return (
      <>

<Form  onSubmit={this.sendBook}>
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
            <input type="submit" value="Add cat" />
          </Form.Group>
          {/* <Button type="submit"  variant="primary">
              Add book
            </Button> */}
        </Form>


        <div className="tab2">
          <ul>
          {this.state.books.length !== 0 ? (
            this.state.books.map((item, i) => {
              return (
                <li key={i}>
                  <h4> {item.title}</h4>
                  <p>{item.description}</p>
                  <Button variant="bottom" variant="danger" onClick={this.deleteBook(i)}>
                  Delete 
                        </Button>
                 
                </li>
                
              );
            })
          ) : (
            <p>No Books added yet</p>
          )}
          </ul>
        </div>

        
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
