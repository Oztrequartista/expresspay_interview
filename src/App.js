import react, { useEffect, useState } from "react";
import "./App.css";
import Logo from "../src/assets/logo.jpg";

import Image1 from "../src/assets/bank-card.jpeg";
import Image2 from "../src/assets/mobile-money.jpeg";
import Image3 from "../src/assets/qr-code.svg";
import Image4 from "../src/assets/finger-pointing.svg";
import Image5 from "../src/assets/bank.svg";
import {Container, Col, Row, Form} from "react-bootstrap"
import "./card.css";

const database = [
  {
    id: 1,
    img: Image1,
    value: "Bank Card",
  },
  {
    id: 2,
    img: Image2,
    value: "Mobile Money",
  },
  {
    id: 3,
    img: Image3,
    value: "Scan && Pay",
  },
  {
    id: 4,
    img: Image4,
    value: "Pay with #222",
  },
  {
    id: 5,
    img: Image5,
    value: "Pay at Bank",
  },
];

function App() {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  const handleSelected = () => {
    setData([selected]);
    console.log(data);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setSelected(value);
  };

  return (
    <Container id="container" fluid>
   <Row> <Col id="title">Hi, ENOCH NYARKO</Col></Row>
      <Row>
      <Col id="banner">
        <img src={Logo} alt="logo" />
        <Col id="amount">
          <p>GOV.GH</p>
          <h4>GHS 1,800.00</h4>
        </Col>
      </Col>
      </Row>
<Row>
  <Col as="hr"></Col>
</Row>
     <Row>
       <Col>
        <p id="text">Choose a payment method</p></Col>
     </Row>
      <Form  id="card-container">
        {database.map((item) => {
          const { img, value, id } = item;

          return (

            <div  key={id} id="label" >
            <Form.Check type="radio"  id={id}
                name="momo"
                value={value}
                onChange={handleChange}
                label={value}
                /> 
       
            <div className="image">
                <img src={img} alt="payments" />
              </div>
            </div>
          );
        })}
      </Form>
      <Row> <Col as="button" id="button" onClick={handleSelected}> Continue</Col></Row>
    </Container>
  );
}

export default App;
