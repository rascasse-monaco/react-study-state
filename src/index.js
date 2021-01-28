import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
//import React from 'react';
//import { useState } from 'react';

const Hello = (props) => {
  const [profile, setProfile] = useState({
    name: "name"
  });
    return (
        <Card>
            <Card.Body>
                <h1>Name: {profile.name}!</h1>
                <Form.Control
                  value={profile.name}
                  onChange={(e) => {
                    setProfile({ name: e.target.value })
                  }} />
            </Card.Body>
        </Card>
    )
}

let dom = document.getElementById('root');
ReactDOM.render(
    <Hello />,
dom);