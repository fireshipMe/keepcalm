import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    // gap: 40px;
    overflow-x: scroll;
    width: 100%;
    margin: 100px 260px -33px 260px;
    @media screen and (max-width: 420px) {
        margin: 0;
    }
`;

export const Card = styled.div`
    flex-shrink: 0;
    width: 320px;
    height: 490px;
    // margin-left: 40px;
    background-repeat: no-repeat;
    background-position-y: -70px;
    overflow: hidden;
    @media screen and (max-width: 420px) {
        width: 225px;
        height: 344px;
    }
`;

export const Title = styled.div`
    width: 100%;
    font-family: Orchidea Pro;
    font-size: 48px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;


    width: 100%;
    height: 60px;

    margin: 172px 0 0 260px;

    color: #141414;

    @media screen and (max-width: 420px) {
        font-size: 24px;
        line-height: 31px;
        margin: 0;
        width: 90%;
        margin-left: 20px;
    }
`;

export const FakeCard = styled.div`
    width: 320px;
    height: 490px;
    @media screen and (max-width: 420px) {
        width: 640px;
        height: 344px;
    }
`;
