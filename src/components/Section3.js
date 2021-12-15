import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import People from "./People";
import pampaBg from "../resources/img/Interior/pampa-bi-grande.png";
const Section3 = ({ text }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${pampaBg})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        style={{ textAlign: "left", display: "flex", flexDirection: "column" }}
      >
        <h2 className="tittle-s2">{text.title}</h2>

        <Grid
          style={{ paddingBottom: "50px", alignItems: "start" }}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {text.people.map((content) => (
            <People content={content} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Section3;
