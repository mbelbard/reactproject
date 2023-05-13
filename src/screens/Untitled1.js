import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonDark1 from "../components/MaterialButtonDark1";

function Untitled1(props) {
  return (
    <>
      <Rect>
        <StartRow>
          <Start>Start</Start>
          <Home>Home</Home>
          <Portfolio>Portfolio</Portfolio>
          <Services>Services</Services>
          <Contact>Contact</Contact>
        </StartRow>
      </Rect>
      <PLans>P L A N S</PLans>
      <OurServices>Our Services</OurServices>
      <LoremIpsum>
        Lorem ipsum, dolor sit amet consectetur{"\n"} adipisicing elit.
      </LoremIpsum>
      <Rect2Row>
        <Rect2>
          <Basic>Basic</Basic>
          <LoremIpsum2Row>
            <LoremIpsum2>$100</LoremIpsum2>
            <Month>/month</Month>
          </LoremIpsum2Row>
          <LoremIpsum3>
            Lorem ipsum, dolor sit amet {"\n"}consectetur adipisicing elit.
            {"\n"} Suscipit nemo hic quos, ab,{"\n"} dolor aperiam
          </LoremIpsum3>
          <ImageRow>
            <Image src={require("../assets/images/check-lg_1.png")}></Image>
            <LoremIpsum4>Lorem ipsum, dolor sit</LoremIpsum4>
          </ImageRow>
          <Image2Row>
            <Image2 src={require("../assets/images/check-lg_1.png")}></Image2>
            <LoremIpsum5>Lorem ipsum, dolor sit</LoremIpsum5>
          </Image2Row>
          <Image3Row>
            <Image3 src={require("../assets/images/check-lg_1.png")}></Image3>
            <LoremIpsum6>Lorem ipsum, dolor sit</LoremIpsum6>
          </Image3Row>
          <Image4Row>
            <Image4 src={require("../assets/images/check-lg_1.png")}></Image4>
            <LoremIpsum7>Lorem ipsum, dolor sit</LoremIpsum7>
          </Image4Row>
          <MaterialButtonDark1
            style={{
              height: 36,
              width: 142,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 8,
              marginTop: 16,
              marginLeft: 62,
              borderStyle: "solid"
            }}
          ></MaterialButtonDark1>
        </Rect2>
        <Rect4>
          <LoremIpsum8Row>
            <LoremIpsum8></LoremIpsum8>
            <Plus>Plus</Plus>
          </LoremIpsum8Row>
          <LoremIpsum9Row>
            <LoremIpsum9>$250</LoremIpsum9>
            <Month2>/month</Month2>
          </LoremIpsum9Row>
          <Text>
            Lorem ipsum, dolor sit amet {"\n"}consectetur adipisicing elit.
            {"\n"} Suscipit nemo hic quos, ab,{"\n"} dolor aperiam
          </Text>
          <Image6Row>
            <Image6 src={require("../assets/images/check-lg_1.png")}></Image6>
            <Text2>Lorem ipsum, dolor sit</Text2>
          </Image6Row>
          <Image7Row>
            <Image7>
              <Image8 src={require("../assets/images/check-lg_1.png")}></Image8>
            </Image7>
            <Text3>Lorem ipsum, dolor sit</Text3>
          </Image7Row>
          <Image9Row>
            <Image9 src={require("../assets/images/check-lg_1.png")}></Image9>
            <Text4>Lorem ipsum, dolor sit</Text4>
          </Image9Row>
          <Image10Row>
            <Image10 src={require("../assets/images/check-lg_1.png")}></Image10>
            <Text5>Lorem ipsum, dolor sit</Text5>
          </Image10Row>
          <MaterialButtonDark1
            style={{
              height: 36,
              width: 142,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 8,
              marginTop: 14,
              marginLeft: 80,
              borderStyle: "solid"
            }}
          ></MaterialButtonDark1>
        </Rect4>
        <Rect3>
          <Pro>Pro</Pro>
          <LoremIpsum10Row>
            <LoremIpsum10>$400</LoremIpsum10>
            <Month3>/month</Month3>
          </LoremIpsum10Row>
          <Text6>
            Lorem ipsum, dolor sit amet {"\n"}consectetur adipisicing elit.
            {"\n"} Suscipit nemo hic quos, ab,{"\n"} dolor aperiam
          </Text6>
          <Image11StackRow>
            <Image11Stack>
              <Image11
                src={require("../assets/images/check-lg_1.png")}
              ></Image11>
              <Image12
                src={require("../assets/images/check-lg_1.png")}
              ></Image12>
              <Image13
                src={require("../assets/images/check-lg_1.png")}
              ></Image13>
              <Image14
                src={require("../assets/images/check-lg_1.png")}
              ></Image14>
            </Image11Stack>
            <Text8Column>
              <Text8>Lorem ipsum, dolor sit</Text8>
              <Text7>Lorem ipsum, dolor sit</Text7>
              <Text9>Lorem ipsum, dolor sit</Text9>
              <Text10>Lorem ipsum, dolor sit</Text10>
            </Text8Column>
          </Image11StackRow>
          <MaterialButtonDark1
            style={{
              height: 36,
              width: 142,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 8,
              marginTop: 24,
              marginLeft: 74,
              borderStyle: "solid"
            }}
          ></MaterialButtonDark1>
        </Rect3>
      </Rect2Row>
      <Rect5Stack>
        <Rect5></Rect5>
        <Image5 src={require("../assets/images/Frame_31_(2).png")}></Image5>
      </Rect5Stack>
    </>
  );
}

const Rect = styled.div`
  width: 1366px;
  height: 96px;
  background-color: rgba(116,198,157,1);
  flex-direction: row;
  display: flex;
  margin-top: -16px;
`;

const Start = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 28px;
`;

const Home = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 785px;
  margin-top: 1px;
`;

const Portfolio = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-left: 61px;
  margin-top: 1px;
`;

const Services = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-left: 65px;
  margin-top: 1px;
`;

const Contact = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-left: 74px;
  margin-top: 1px;
`;

const StartRow = styled.div`
  height: 34px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 49px;
  margin-left: 69px;
  margin-top: 45px;
`;

const PLans = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(149,195,98,1);
  font-size: 16px;
  margin-top: 14px;
  margin-left: 650px;
`;

const OurServices = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 26px;
  margin-top: 8px;
  margin-left: 609px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 12px;
  margin-left: 558px;
`;

const Rect2 = styled.div`
  width: 283px;
  height: 436px;
  background-color: rgba(255,255,255,1);
  border-width: 2px;
  border-color: #000000;
  border-radius: 15px;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.39px rgba(255,255,255,1) ;
`;

const Basic = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 12px;
  margin-left: 124px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
`;

const Month = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 17px;
  margin-left: 7px;
  margin-top: 5px;
`;

const LoremIpsum2Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 69px;
  margin-right: 96px;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,74,74,1);
  font-size: 14px;
  margin-top: 13px;
  margin-left: 62px;
`;

const Image = styled.img`
  width: 100%;
  height: 42px;
  object-fit: contain;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 11px;
  margin-top: 16px;
`;

const ImageRow = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-left: 29px;
  margin-right: 62px;
`;

const Image2 = styled.img`
  width: 100%;
  height: 42px;
  object-fit: contain;
`;

const LoremIpsum5 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 11px;
  margin-top: 13px;
`;

const Image2Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 29px;
  margin-right: 62px;
`;

const Image3 = styled.img`
  width: 100%;
  height: 42px;
  object-fit: contain;
`;

const LoremIpsum6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 11px;
  margin-top: 13px;
`;

const Image3Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 29px;
  margin-right: 62px;
`;

const Image4 = styled.img`
  width: 100%;
  height: 42px;
  object-fit: contain;
`;

const LoremIpsum7 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 11px;
  margin-top: 13px;
`;

const Image4Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-left: 29px;
  margin-right: 62px;
`;

const Rect4 = styled.div`
  width: 283px;
  height: 436px;
  background-color: rgba(255,255,255,1);
  border-width: 2px;
  border-color: #000000;
  border-radius: 15px;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-left: 189px;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.39px rgba(255,255,255,1) ;
`;

const LoremIpsum8 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 9px;
`;

const Plus = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 14px;
`;

const LoremIpsum8Row = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 114px;
  margin-right: 127px;
`;

const LoremIpsum9 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 25px;
`;

const Month2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-left: 5px;
  margin-top: 6px;
`;

const LoremIpsum9Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 80px;
  margin-right: 92px;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,74,74,1);
  font-size: 14px;
  margin-top: 14px;
  margin-left: 49px;
`;

const Image6 = styled.img`
  width: 100%;
  height: 42px;
  object-fit: contain;
`;

const Text2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 13px;
  margin-top: 12px;
`;

const Image6Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 27px;
  margin-right: 62px;
`;

const Image7 = styled.div`
  width: 100%;
  height: 42px;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/check-lg_1.png")});
  background-size: cover;
`;

const Image8 = styled.img`
  width: 40px;
  height: 100%;
  object-fit: contain;
`;

const Text3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 12px;
  margin-top: 13px;
`;

const Image7Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-left: 28px;
  margin-right: 62px;
`;

const Image9 = styled.img`
  width: 100%;
  height: 42px;
  transform: rotate(-3.00deg);
  object-fit: contain;
`;

const Text4 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 12px;
  margin-top: 10px;
`;

const Image9Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 28px;
  margin-right: 62px;
`;

const Image10 = styled.img`
  width: 100%;
  height: 42px;
  transform: rotate(-1.00deg);
  object-fit: contain;
`;

const Text5 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 16px;
  margin-top: 11px;
`;

const Image10Row = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 2px;
  margin-left: 30px;
  margin-right: 56px;
`;

const Rect3 = styled.div`
  width: 283px;
  height: 436px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  shadow-radius: 0px;
  border-width: 3px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  margin-left: 113px;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.36px rgba(255,255,255,1) ;
`;

const Pro = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 12px;
  margin-left: 131px;
`;

const LoremIpsum10 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 25px;
`;

const Month3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 11px;
  margin-top: 8px;
`;

const LoremIpsum10Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 74px;
  margin-right: 95px;
`;

const Text6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,74,74,1);
  font-size: 14px;
  margin-top: 13px;
  margin-left: 64px;
`;

const Image11 = styled.img`
  top: 0px;
  left: 0px;
  width: 40px;
  height: 42px;
  position: absolute;
  object-fit: contain;
`;

const Image12 = styled.img`
  top: 38px;
  left: 0px;
  width: 40px;
  height: 42px;
  position: absolute;
  object-fit: contain;
`;

const Image13 = styled.img`
  top: 76px;
  left: 0px;
  width: 40px;
  height: 42px;
  position: absolute;
  object-fit: contain;
`;

const Image14 = styled.img`
  top: 115px;
  left: 0px;
  width: 40px;
  height: 42px;
  position: absolute;
  object-fit: contain;
`;

const Image11Stack = styled.div`
  width: 40px;
  height: 157px;
  position: relative;
`;

const Text8 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 3px;
`;

const Text7 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 17px;
`;

const Text9 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 21px;
  margin-left: 3px;
`;

const Text10 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 27px;
  margin-left: 3px;
`;

const Text8Column = styled.div`
  width: 144px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
  margin-top: 13px;
  margin-bottom: 11px;
`;

const Image11StackRow = styled.div`
  height: 157px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 13px;
  margin-right: 68px;
`;

const Rect2Row = styled.div`
  height: 436px;
  flex-direction: row;
  display: flex;
  margin-top: 35px;
  margin-left: 69px;
  margin-right: 146px;
`;

const Rect5 = styled.div`
  top: 15px;
  left: 0px;
  width: 1387px;
  height: 101px;
  position: absolute;
  background-color: rgba(116,198,157,1);
`;

const Image5 = styled.img`
  top: 0px;
  left: 61px;
  width: 1256px;
  height: 99px;
  position: absolute;
  object-fit: contain;
`;

const Rect5Stack = styled.div`
  width: 1387px;
  height: 116px;
  position: relative;
`;

export default Untitled1;
