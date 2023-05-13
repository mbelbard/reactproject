import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Untitled(props) {
  return (
    <>
      <Rect>
        <Start>Start</Start>
      </Rect>
      <ContactUs>Contact Us</ContactUs>
      <ImageStack>
        <Image src={require("../assets/images/Group_(1).png")}></Image>
        <Name>Name</Name>
      </ImageStack>
      <Rect2></Rect2>
      <Rect3></Rect3>
      <Email>Email</Email>
      <Message>Message</Message>
      <Rect4></Rect4>
      <Rect5Stack>
        <Rect5></Rect5>
        <Image2 src={require("../assets/images/Frame_31_(1).png")}></Image2>
        <MaterialButtonDark
          style={{
            height: 36,
            width: 316,
            position: "absolute",
            left: 35,
            top: 11,
            borderWidth: 1,
            borderColor: "#000000",
            borderRadius: 9,
            borderStyle: "solid"
          }}
        ></MaterialButtonDark>
      </Rect5Stack>
      <LoremIpsum2>
        Lorem ipsum , dolor sit amet {"\n"} consecteur .{"\n"} Adipisicing elit
        .
      </LoremIpsum2>
    </>
  );
}

const Rect = styled.div`
  width: 375px;
  height: 58px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
  margin-top: 48px;
  align-self: center;
`;

const Start = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 26px;
  margin-top: 9px;
  margin-left: 25px;
`;

const ContactUs = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 16px;
  margin-top: 14px;
  margin-left: 144px;
`;

const Image = styled.img`
  top: 0px;
  left: 23px;
  width: 256px;
  height: 207px;
  position: absolute;
  object-fit: contain;
`;

const Name = styled.span`
  font-family: Roboto;
  top: 198px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 16px;
`;

const ImageStack = styled.div`
  width: 279px;
  height: 217px;
  margin-top: 50px;
  margin-left: 32px;
  position: relative;
`;

const Rect2 = styled.div`
  width: 319px;
  height: 32px;
  background-color: #E6E6E6;
  border-width: 1px;
  border-color: #000000;
  border-radius: 11px;
  margin-top: 8px;
  margin-left: 30px;
  border-style: solid;
`;

const Rect3 = styled.div`
  width: 319px;
  height: 32px;
  background-color: #E6E6E6;
  border-width: 1px;
  border-color: #000000;
  border-radius: 11px;
  margin-top: 38px;
  margin-left: 32px;
  border-style: solid;
`;

const Email = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 16px;
  margin-top: -62px;
  margin-left: 33px;
`;

const Message = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 16px;
  margin-top: 55px;
  margin-left: 30px;
`;

const Rect4 = styled.div`
  width: 323px;
  height: 97px;
  background-color: #E6E6E6;
  border-width: 1px;
  border-color: #000000;
  border-radius: 15px;
  margin-left: 33px;
  border-style: solid;
`;

const Rect5 = styled.div`
  top: 63px;
  left: 0px;
  width: 375px;
  height: 83px;
  position: absolute;
  background-color: rgba(116,198,157,1);
`;

const Image2 = styled.img`
  top: 0px;
  left: 35px;
  width: 296px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const Rect5Stack = styled.div`
  width: 375px;
  height: 200px;
  margin-top: 1px;
  position: relative;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: -706px;
  margin-left: 97px;
`;

export default Untitled;
