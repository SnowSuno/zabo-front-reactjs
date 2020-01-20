import styled from 'styled-components';

export const ZaboPageWrapper = styled.div`
  padding: 80px 0;
  min-width: 1072px;
  @media (max-width: 640px) {
    min-width: 100%;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

ZaboPageWrapper.TwoCol = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 712.22px;
  width: 1032px;
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;

ZaboPageWrapper.TitleImage = styled.section`
  flex: 1;
  height: 100%;
  margin-right: 48px;
  @media (max-width: 640px) {
    margin-right: 0;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    vertical-align: top;
    @media (max-width: 640px) {
      border-radius: 0;
    }
  }
`;

ZaboPageWrapper.Info = styled.section`
  flex: 1.05;
  height: 100%;
  @media (max-width: 640px) {
    padding: 24px 16px;
  }
`;

ZaboPageWrapper.Info.Header = styled.section`
  .keyword-result {
    padding: 0px;
    width: 100%;
    margin: 0;
    li {
      display: inline-block;
      border-radius: 2px;
      padding: 4px 6px;
      margin-right: 8px;
      background: #EEEEEE;
      color: #5C5C5C;
      font-size: 14px;
      line-height: 16px;
    }
  }
  
  h1 {
    display: inline-block;
    font-size: 28px;
    font-weight: bold;
    margin: 12px 20px 12px 0;
    vertical-align: middle;
    @media (max-width: 640px) {
      font-size: 24px;
    } 
  }
  .due-date {
    display: inline-block;
    width: 58px;
    height: 26px;
    padding: 4px 10px;
    border-radius: 4px;
    background: #143441;
    color: white;
    font-size: 16px;
    vertical-align: middle;
  }

  .after-create {
    font-size: 14px;
    line-height: 14px;
    color: #666666;
    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
`;

ZaboPageWrapper.Info.Box = styled.div`
  display: inline-block;
  margin: 28px 8px 72px 0;
  min-width: 86px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #143441;
  padding: 8px 14px;
  @media (max-width: 640px) {
    width: 72px;
    height: 38px;
    font-size: 14px;
  }

  img {
    width: 24px;
    height: 24px;
    @media (max-width: 640px) {
      width: 22px;
      height: 22px;
    }
  }
  div {
    display: inline-block;
    position: relative;
    top: -8px;
    left: 4px;
  }
`;

ZaboPageWrapper.Info.Body = styled.section`
  color: #202020;
  .borderLine {
    border: .5px solid #D7D7D7;
  }

  .owner {
    color: #202020;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 2px;
      vertical-align: middle;
    }
    p { 
      display: inline-block;
      vertical-align: middle;
      padding: 0 8px;
      &.follow { font-size: 14px; }
    }
    .specialChar {
      display: inline-block;
      color: #8F8F8F;
      vertical-align: middle;
    }
  }

  .contents {
    padding-top: 28px;
    font-size: 14px;
  }
`;

ZaboPageWrapper.Recommend = styled.section`
  width: 1032px;
  margin-top: 102.78px;
  @media (max-width: 640px) {
    margin-top: 64px;
    padding: 0 16px;
    width: 100%;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
`;
