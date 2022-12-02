import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    background: linear-gradient(#464341, #010101);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 260px;

    @media screen and (max-width: 420px) {
        padding-left: 20px;
        height: 60px;
    }

    z-index: 9999;
`;

export const PhoneContainer = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: white;
    padding-right: 13.842vw;

    @media screen and (max-width: 420px) {
        padding-right: 20px;
    }
`;
