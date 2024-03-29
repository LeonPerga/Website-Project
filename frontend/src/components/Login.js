import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { createContext } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [response, SetResponse] = React.useState("");
  const [success, setSuccess] = useState(true);

  
  return (
    <div class="container h-100 d-flex justify-content-center text-right">
      <div class="jumbotron my-auto" dir="rtl">
        <Card>
          <Card.Body>
            <Form>
              <h2>התחברות</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>כתובת אימייל</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="כתובת אימייל"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="סיסמה"
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </Form.Group>
              {success ? (
                <></>
              ) : (
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  שם משתמש או סיסמה לא נכונים
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <Button
                variant="primary"
                // onClick={() => {
                //   SetResponse(AuthService.login(email, password));
                // }}
              >
                הכנס
              </Button>
              <p>
                אין לך משתמש? הרשם/י <a href="/signup">כאן</a>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;

