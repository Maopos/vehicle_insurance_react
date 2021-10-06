import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  margin: 0 auto;
`;

const FormContainer = styled.div`
  width: 60%;
  background: whitesmoke;
  margin: auto;
  color: black;
  padding: 0 0;
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

  const [reload, saveReload] = useState(false);

  const { quote, data } = resume;

  return (
    <Container className="App">
      <FormContainer>
        <Header title="Vehicular Insurance Quote"></Header>
        <Form saveResume={saveResume} saveReload={saveReload}></Form>
        {reload ? <Spinner /> : null}
        <Resume data={data}></Resume>
        {!reload ? <Result quote={quote}></Result> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
