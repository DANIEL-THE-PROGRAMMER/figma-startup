import FeaturesCard from "../../components/cards/FeaturesCard";
import { mediumText, smallText } from "../../components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>FEATURES</Feat>
          <Description>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Description>
        </TopSection>
        <BottomSection>
          <ImgDiv>
            <BackImg>
              <Image
                src="/assets/images/featuresImg.png"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </BackImg>
          </ImgDiv>
          <ContentDiv>
            <FeaturesCard />
          </ContentDiv>
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 160px 0;
  background-color: #181818;
`;
const HeroWrapper = styled.div``;
const TopSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Feat = styled(mediumText)`
  text-align: center;
  margin: 0 0 30px;
`;
const Description = styled(smallText)`
  text-align: center;
  margin: 0 0 30px;
`;

const BottomSection = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap:27px;
  margin: 0 auto;
  margin-top:80px;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
  display:grid;
    grid-template-columns: 1fr;
    place-items:center;
  }
`;
const ImgDiv = styled.div``;
const ContentDiv = styled.div`
  width:100%;
  max-width:309px;
  shrink:0;
`;
const BackImg = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
`;
export default HeroSection2;
