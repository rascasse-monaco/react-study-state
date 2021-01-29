//import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React from 'react';
//import { useState } from 'react';
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "World"
    };
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <h1>Hello {this.state.name}!</h1>
          <Form.Control
            value={this.state.name}
            onChange={(e) => {
              this.setState({
                name: e.target.value
              })
            }} />
        </Card.Body>
      </Card>
    );
  }
}

//const Hello = (props) => {
//  const [profile, setProfile] = useState({
//    name: "World"
//  });
//    return (
//        <Card>
//            <Card.Body>
//                <h1>Hello {profile.name}!</h1>
//                <Form.Control
//                  value={profile.name}
//                  onChange={(e) => {
//                    setProfile({ name: e.target.value })
//                  }} />
//            </Card.Body>
//        </Card>
//    )
//}

let dom = document.getElementById('root');
ReactDOM.render(
    <Hello />,
dom);