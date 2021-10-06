import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";

const Container = styled.div`
  margin: 0 auto;
`;

const FormContainer = styled.form`
  width: 60%;
  background: whitesmoke;
  margin: auto;
  color: black;
  padding: 0 0 ;
`;

function App() {
  const [resume, saveResume] = useState({
    quote: 0,
    data: {
      branch: "",
      plan: "",
      year: "",
    },
  });
 
  const { quote, data } = resume;

  return (
    <Container className="App">
      <FormContainer>
        <Header title="Vehicular Insurance Quote"></Header>
        <Form saveResume={saveResume}></Form>
        <Resume data={data}></Resume>
        <Result quote={quote}></Result>
      </FormContainer>
    </Container>
  );
}

export default App;
