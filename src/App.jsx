import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <>
      <Alert variant="info">This is a new Alert</Alert>
      <h1>Hello from MovieList</h1>
      <Button variant="success">Click Me</Button>
    </>
  );
}

export default App;
