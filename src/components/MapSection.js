import { Container } from "@material-ui/core";
import React from "react";
import map from "../resources/img/Ubicacion/mapa.png";
import mapMobile from "../resources/img/Ubicacion/mapaMobile.png";
import ubic from "../resources/img/Ubicacion/pin.png";
import CardCountry from "./CardCountry";

const MapSection = ({ text }) => {
  const [width, setwidth] = React.useState(window.innerWidth);
  const [showedCard, setShowedCard] = React.useState(
    <CardCountry content={text[1]} mobile={width > 600 ? false : true} />
  );
  const hoverHandler = (country) => {
    setShowedCard(
      <CardCountry mobile={width > 600 ? false : true} content={country} />
    );
  };
  return (
    <div>
      <Container
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        <img
          className="img-map"
          style={{ width: "100%" }}
          src={width > 600 ? map : mapMobile}
        />
        {text.map((data) => {
          return width > 600 ? (
            <img
              className={"img-map-location " + data.country}
              onMouseOver={(e) => hoverHandler(data)}
              src={ubic}
            />
          ) : (
            <img
              className={"img-map-location-mb " + data.country}
              onMouseOver={(e) => hoverHandler(data)}
              src={ubic}
            />
          );
        })}
        {width > 600 ? showedCard : ""}
      </Container>

      {width < 600 ? showedCard : ""}
    </div>
  );
};

export default MapSection;
