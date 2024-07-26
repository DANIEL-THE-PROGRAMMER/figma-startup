import React from "react";
import styled from "styled-components";
import {
  btn,
  largeText,
  smallText,
} from "@/app/components/styles/GlobalStyles";
import Image from "next/image";
const HeroSection1 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Head>Work at the speed of thought</Head>
          <Description>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Description>
          <ButtonHolder>
            <Btn1>Try for free</Btn1>
            <Btn2>Learn More</Btn2>
          </ButtonHolder>
        </TopSection>

        <BottomSection>
          <Back>
            <Image
              src="/assets/images/heroChart.png"
              alt=""
              layout="responsive"
              width={0}
              height={0}
              style={{
                width: "100%",
              }}
            />
          </Back>
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-bottom: 160px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0e0e0e 66.15%);
  @media only screen and (max-width: 540px) {
    padding-bottom:10px;
  }
`;
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 85px 0;
`;

const TopSection = styled.div`
  max-width: 729px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;
const Head = styled(largeText)`
  text-align: center;
  margin: 0 0 30px;
`;
const Description = styled(smallText)`
  text-align: center;
  margin: 0 0 85px;
`;
const ButtonHolder = styled.div`
  margin: 0 0 35px;
  text-align: center;
  display: flex;
  gap: 45px;
  flex-direction: row;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Btn1 = styled(btn)`
  background: #4452fe;
  margin-top: 20px;
  margin-left: 0px;
  margin-right: 0px;
`;
const Btn2 = styled(btn)`
  border: 1px solid #ffffff;
  margin-top: 20px;
  margin-left:0px;
  margin-right:0px;
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Back = styled.div`
  max-width: 1552.02px;
  max-height: 841px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;
export default HeroSection1;
