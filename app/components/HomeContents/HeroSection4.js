import {
  btn,
  mediumText,
  smallText,
} from "../../components/styles/GlobalStyles";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const HeroSection4 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>Gallery</Feat>
          <Description>
            We focus on ergonomics and meeting you where you work. It{"'"}s only
            a keystroke away.
          </Description>
        </TopSection>
        <BottomSection>
          <ImgDiv>
            <BackImg>
              <Image
                src="/assets/images/itemCard.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </BackImg>
            <BackImg>
              <Image
                src="/assets/images/tablet.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </BackImg>
            <BackImg>
              <Image
                src="/assets/images/meeting.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </BackImg>
            <BackImg>
              <Image
                src="/assets/images/shelve.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </BackImg>
          </ImgDiv>
          <ContentDiv>
            <ImagesDiv>
              <Image
                src="/assets/images/pcCard.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </ImagesDiv>
            <ImagesDix>
              <Image
                src="/assets/images/typeset.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </ImagesDix>
            <ImagesDiv>
              <Image
                src="/assets/images/camera.png"
                alt=""
                layout="responsive"
                width={0}
                height={0}
                style={{
                  width: "100%",
                }}
              />
            </ImagesDiv>
          </ContentDiv>
        </BottomSection>
        <See>See More</See>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
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

  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const ImgDiv = styled.div`
  max-width: 999px;
  display: flex;
  gap:23px:
  place-items: center;
  padding: 0 20px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  display:grid;
    grid-template-columns: 1fr;
  }
`;
const ImagesDiv = styled.div`
  width: 100%;
`;
const ImagesDix = styled.div`
  max-width: 210px;
  width: 100%;
`;
const ContentDiv = styled.div`
  max-width: 1100px;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  gap:33px;
  padding: 0 20px;
  margin: 0 auto;
  @media only screen and (max-width: 650px) {
    display: none;
  }
    margin-top:20px;
`;
const BackImg = styled.div`
  max-width: 724px;
  position: relative;
  width: 100%;
`;
const See = styled(btn)`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  padding: 10px 30px;
  width: 159px;
  height: 52px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15));
  margin: 45px auto;
`;
export default HeroSection4;
