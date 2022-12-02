import styled from 'styled-components';

export const Container = styled.div`
    padding-right: 335px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 100px;
    padding-top: 4px;
    @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;
        padding-right: 0;
        margin-top: 60px;
    }
`;

export const LeftContainer = styled.div`
    height: 480px;
    width: 100%;
    display: flex;
    align-items: center;

    gap: 123px;

    color: #141414;

    margin-bottom: 90px;
    @media screen and (max-width: 420px) {
        gap: 0;
        height: fit-content;
        width: 100%;
        flex-direction: column;
    }
`;

export const RightContainer = styled.div`
    height: 411px;
    width: 100%;
    padding-left: 262px;
    display: flex;
    align-items: center;

    gap: 123px;

    color: #141414;

    @media screen and (max-width: 420px) {
        gap: 0;
        height: fit-content;
        width: 100%;
        flex-direction: column;
    }
`;

export const TopImageContainer = styled.div`
    // min-width: fit-content;
    height: 480px;
    width: 860px;
    overflow: hidden;
    @media screen and (max-width: 420px) {
        // width: 100%;
        height: fit-content;
        margin-bottom: 40px;
        height: 370px;
    }
`;

export const TopImage = styled.img`
    // max-height: 480px;
    width: 100%;
    @media screen and (max-width: 420px) {
        width: 148%;
    }
`;

export const BottomImageContainer = styled.div`
    min-width: fit-content;
    height: 411px;
    overflow: hidden;
    @media screen and (max-width: 420px) {
        // width: 100%;
        height: fit-content;
        margin-bottom: 40px;
        height: 370px;
    }
`;

export const BottomImage = styled.img`
    // max-height: 411px;
    margin-top: -20%;    
`;

export const TextBlock = styled.div`
`;

export const Header = styled.div`
    margin-bottom: 25px;
    height: 160px;
    width: 600px;


    font-family: 'Orchidea Pro', sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: left;

    @media screen and (max-width: 420px) {
        font-size: 24px;
        line-height: 120%;
        width: 335px;
        height: 61px;
        margin: 0 20px;
    }
`;

export const Description = styled.div`
    width: 600px;
    height: 150px;

    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    white-space: pre-wrap;

    @media screen and (max-width: 420px) {
        font-size: 14px;
        line-height: 130%;
        padding: 0 20px;
        width: 100%;
        box-sizing: border-box;
    }

`;

export const Title = styled.div`
    width: 100%;
    font-family: Orchidea Pro;
    font-size: 48px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: -0.1px;
    text-align: left;
    text-transform: uppercase;


    width: 100%;
    height: 60px;

    margin-bottom: 123px;
    margin-top: 197px;
    margin: 197px 0 123px 258px;

    display: flex;
    // align-items: center;
    // justify-content: center;

    color: #141414;

    @media screen and (max-width: 420px) {
        font-size: 24px;
        margin: 72px 20px 64px 20px;
        width: 335px;
        height: 90px;
        white-space: pre-wrap;
        line-height: 31px;
        
    }
`;
