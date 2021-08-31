import React, { useState } from "react";
import * as turf from "@turf/turf";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete } from "@react-google-maps/api";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import FooterScreen from "../screens/FooterScreen";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import mapIcon from "../img/map-icon.svg";
import mapPin from "../img/map-pin.svg";

import circleToPolygon from "circle-to-polygon";
import HowItWorksScreen from "./HowItWorksScreen";
import { ButtonAddToCart2 } from "./CartScreen";

const Map = styled.section`
  margin: 0 auto;
  margin-top: 15rem;
  width: 1170px;
  height: 400px;
`;

const InputContainer = styled.div`
  /* margin: 0 auto; */
  margin-top: 4rem;
  /* width: 1170px; */

  & h2 {
    font-family: "Lilita One", cursive;
    font-size: 1.6rem;
    margin-left: 2rem;
    color: #1e1d23;
    margin-bottom: 1rem;
  }

  & input {
    padding: 2rem;
    width: 100%;
    outline: none;
    border: 1px solid #1e1d23;

    &:focus {
      border: 1px solid #f59400;
    }
  }
`;

const ShippingScreen = ({ history }) => {
  let places;

  const [coordinates, setCoordinates] = useState({});
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const onLoad = (autoC) => setAddress(autoC);

  const onPlaceChanged = () => {
    const lat = address.getPlace().geometry.location.lat();
    const lng = address.getPlace().geometry.location.lng();

    let latitude = 50.10064848900932,
      longitude = 20.021011111934083;

    places = address.getPlace();

    const point = turf.point([lng, lat]);

    const polygon = circleToPolygon([longitude, latitude], 275);

    const inPolygon = turf.inside(point, polygon);

    console.log(places);

    setCoordinates({ lat, lng });

    if (inPolygon) {
      console.log("Jestes w kole");
    } else {
      console.log("Nie ma Cie w kole");
    }
  };

  const defaultProps = {
    center: {
      lat: 50.100650209496614,
      lng: 20.02104061624839,
    },
    zoom: 14,
  };

  const handleApiLoaded = (map, maps) => {
    new maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.3,
      map,
      center: defaultProps.center,
      radius: 275,
    });

    new maps.Marker({
      position: defaultProps.center,
      icon: mapIcon,
      map: map,
    });
  };

  const AnyReactComponent = ({ text }) => (
    <img
      src={mapPin}
      alt="map-pin"
      style={{
        width: "25px",
        height: "25px",
      }}
    />
  );

  return (
    <>
      <Navbar />
      <PageHero name={"SHIPPING"} title={"/ Shipping"} />
      <Map>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZqlnwhZFwJtrdSNYhLGRB1SObg5T_fkc" }}
          defaultCenter={defaultProps.center}
          yesIWantToUseGoogleMapApiInternals
          center={
            Object.keys(coordinates).length === 0
              ? defaultProps.center
              : coordinates
          }
          defaultZoom={defaultProps.zoom}
          // yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {Object.keys(coordinates).length > 0 && (
            <AnyReactComponent lat={coordinates.lat} lng={coordinates.lng} />
          )}
        </GoogleMapReact>
      </Map>
      <div className="inputs-map">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <InputContainer>
            <h2>Address</h2>
            <input type="text" />
          </InputContainer>
        </Autocomplete>

        <InputContainer>
          <h2>City</h2>
          <input type="text" />
        </InputContainer>

        <InputContainer>
          <h2>Postal Code</h2>
          <input type="text" />
        </InputContainer>

        <InputContainer>
          <h2>Country</h2>
          <input type="text" />
        </InputContainer>
      </div>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <ButtonAddToCart2>Next</ButtonAddToCart2>
      </div>

      <HowItWorksScreen />
      <FooterScreen />
    </>
  );
};

export default ShippingScreen;
