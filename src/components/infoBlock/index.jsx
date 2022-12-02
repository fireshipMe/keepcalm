import React from 'react';

import {useWindowSize} from '../../hooks';

import {
  TextBlock,
  Header,
  Description,
  Container,
  LeftContainer,
  RightContainer,
  TopImage,
  TopImageContainer,
  BottomImage,
  BottomImageContainer,
  Title,
} from './styles';

const Desktop = (
    {
      topImageSource,
      bottomImageSource,
      topHeaderText,
      topDescriptionText,
      bottomHeaderText,
      bottomDescriptionText,
    }) => {
  return (
    <Container>
      <Title>ut aliquip ex ea commodo consequat</Title>
      <LeftContainer>
        <TopImageContainer>
          <TopImage src={topImageSource}/>
        </TopImageContainer>
        <TextBlock>
          <Header>
            {topHeaderText}
          </Header>
          <Description>
            {topDescriptionText}
          </Description>
        </TextBlock>
      </LeftContainer>
      <RightContainer>
        <TextBlock>
          <Header>
            {bottomHeaderText}
          </Header>
          <Description>
            {bottomDescriptionText}
          </Description>
        </TextBlock>
        <BottomImageContainer>
          <BottomImage src={bottomImageSource}/>
        </BottomImageContainer>

      </RightContainer>
    </Container>
  );
};

const Mobile = ( {
  topImageSource,
  bottomImageSource,
  topHeaderText,
  topDescriptionText,
  bottomHeaderText,
  bottomDescriptionText,
}) => {
  return (
    <Container>
      <Title>ut aliquip<br />ex ea commodo<br />consequat</Title>
      <LeftContainer>
        <TopImageContainer>
          <TopImage src={topImageSource}/>
        </TopImageContainer>
        <TextBlock>
          <Header>
            {topHeaderText}
          </Header>
          <Description>
            {topDescriptionText}
          </Description>
        </TextBlock>
      </LeftContainer>
      <LeftContainer>
        <BottomImageContainer>
          <BottomImage src={bottomImageSource}/>
        </BottomImageContainer>
        <TextBlock>
          <Header>
            {bottomHeaderText}
          </Header>
          <Description>
            {bottomDescriptionText}
          </Description>
        </TextBlock>
      </LeftContainer>
    </Container>);
};

const InfoBlock = (
    {
      topImageSource,
      bottomImageSource,
      topHeaderText,
      topDescriptionText,
      bottomHeaderText,
      bottomDescriptionText,
    },
) => {
  const {width} = useWindowSize();
  const isMobile = width < 420 ? true : false;

  return (
    isMobile ?
    <Mobile
      topImageSource={topImageSource}
      bottomImageSource={bottomImageSource}
      topHeaderText={topHeaderText}
      topDescriptionText={topDescriptionText}
      bottomHeaderText={bottomHeaderText}
      bottomDescriptionText={bottomDescriptionText}
    /> :
    <Desktop
      topImageSource={topImageSource}
      bottomImageSource={bottomImageSource}
      topHeaderText={topHeaderText}
      topDescriptionText={topDescriptionText}
      bottomHeaderText={bottomHeaderText}
      bottomDescriptionText={bottomDescriptionText}
    />

  );
};

export default InfoBlock;
