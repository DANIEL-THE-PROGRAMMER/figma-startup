import React from "react";
import styled from "styled-components";
import restaurantmenu from "../../../public/assets/icons/restaurantmenu.svg";
import inclusive from "../../../public/assets/icons/inclusive.svg";
import Vector from "../../../public/assets/icons/Vector.svg";
import Image from "next/image";

const FeaturesCard = () => {
  return (
    <Wrapper>
      <FeaturesWrapper>
        <Features>
          <TopText>
            <Image
              src="/assets/icons/restaurantmenu.svg"
              width={45}
              height={33}
              objectFit="cover"
              alt=""
            />{" "}
            A single source of truth
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
        <Features>
          <TopText>
            <Image
              src="/assets/icons/Vector.svg"
              width={25}
              height={23}
              alt=""
            />{" "}
            Intuitive interface
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
        <Features>
          <TopText>
            <Image
              src="/assets/icons/inclusive.svg"
              width={41}
              height={19}
              alt=""
            />{" "}
            Or with rules
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
      </FeaturesWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const FeaturesWrapper = styled.div``;
const Features = styled.div`
  width: 100%;
  max-width: 269px;
  height: 196px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 25px 0px;
`;
const TopText = styled.div`
  max-width: 204.49px;
  height: 80px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  margin-right: 15px;
`;
const Description = styled.div``;
export default FeaturesCard;
