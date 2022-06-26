import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <h1 className="title">Final Score:  {score}</h1>
      <Button
        variant="contained"
        color="gray"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        GO to home page
      </Button>
    </div>
  );
};

export default Result;
