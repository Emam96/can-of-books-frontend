import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount = async () => {
    
    
    let url =`${process.env.REACT_APP_DATABASE}`;

    console.log(url);
    let booksData = await axios.get(url);   // http://localhost:4000/books
    
    this.setState({
      books: booksData.data,
    });

    console.dir(booksData.data[0].title);
  };

  render() {
    return (
      <div className="tab2">
        {this.state.books.length !== 0 ? (
          this.state.books.map((item, i) => {
            return (
              <Jumbotron key={i}>
                <h1>title= {item.title}</h1>
                <p>{item.description}</p>
              </Jumbotron>

              // <Card style={{ width: "18rem" }}>
              //   <Movie
              //     key={i}
              //     title={item.title}
              //     poster={item.poster}
              //     state={this.state}
              //   />
              // </Card>
            );
          })
        ) : (
          <p>No Books added yet</p>
        )}
      </div>
    );
  }
}

export default MyFavoriteBooks;
