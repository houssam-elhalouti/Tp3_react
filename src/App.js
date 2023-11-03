import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (index) => {
    const updatedList = [...list];
    const editedTodo = prompt('Modifiez la tache :');

    if (editedTodo !== null && editedTodo.trim() !== '') {
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
          marginTop:"20px",
          color:"#39A7FF"
        }}
      >
        To Do List
      </Row>

      <hr style={{
            color: "",

      }}/>
      <Row>
        <Col className="col-lg-12 col-md-8 col-sm-4">
          <InputGroup className="mb-3">
            <FormControl
              style={{
                border: "2px solid #39A7FF"
              }}
              placeholder="ajouter une tâche . . . "
              size="lg"
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
            />
            <InputGroup>
              <Button className="mt-3 btn btn-success" onClick={addItem}>
              Ajouter
              </Button>
            </InputGroup> 
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-12 col-md-8 col-sm-4">
          <ListGroup style={{fontSize:"20px"}}>
            {list.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  style={{
                    marginBottom:"10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {item.value}
                  <span>
                    <Button
                      style={{ marginRight: "10px" }}
                      className = "btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      supprimer 
                    </Button>
                    <Button className = "btn btn-primary" onClick={() => editItem(index)}>
                      modifier
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
