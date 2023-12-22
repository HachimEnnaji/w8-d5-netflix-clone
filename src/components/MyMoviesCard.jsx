import React, { Component } from "react";
import OnLoadError from "./OnLoadError";
import Loading from "./Loading";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardTitle from "./CardTitle";

class MyMoviesCard extends Component {
  state = {
    query: [],
    error: false,
    loading: true,
    Title: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=82b91606&s=${this.props.title}`);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        let Title = {};
        data.Search.forEach((movie) => {
          Title[movie.imdbID] = false;
          console.log("this one " + Title[movie.imdbID]);
        });
        this.setState({
          query: data.Search,
          loading: false,
          error: false,
          Title: Title,
        });
      } else {
        this.setState({ loading: false, error: true });
      }
    } catch (err) {
      alert("Something went wrong. Please check and try again!" + err);
      this.setState({ loading: false, error: true });
    }
  };

  handleCardOver = (imdbID) => {
    let Title = { ...this.state.Title };
    console.log(Title);
    Title[imdbID] = !Title[imdbID];
    this.setState({ Title: Title });
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between mb-5 mt-4">
          {this.state.loading && <Loading />}
          {this.state.error && <OnLoadError />}
          <Container fluid>
            <Row xs={1} sm={2} md={3} lg={6}>
              {this.state.query
                .filter((movie) => movie.Year > "2000")
                .slice(0, 6)
                .map((movie) => (
                  <Col key={movie.imdbID} className="mb-4">
                    <div
                      id="card"
                      className="p-3"
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <Card.Img
                        onMouseEnter={() => this.handleCardOver(movie.imdbID)}
                        onMouseLeave={() => this.handleCardOver(movie.imdbID)}
                        variant="top"
                        style={{ backgroundColor: "#221f1f", height: "20rem" }}
                        src={movie.Poster}
                      />
                      {this.state.Title[movie.imdbID] && <CardTitle Title={movie.Title} />}
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default MyMoviesCard;
