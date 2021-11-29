import styled from 'styled-components';

export const Container = styled.div`
    width: 700px;
    max-width: 95%;

    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;

    background-color: ${props => props.theme.colors.text};
    filter: invert(1) hue-rotate(180deg);
    box-shadow: 0 0 20px ${props => props.theme.colors.text};

    h1, h2, h3, p, a
    {
        color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);
    }

`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    img
    {
        filter: invert(1) hue-rotate(180deg);
    }

    h1, h2, h3, p, a
    {
        color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);
    }
`;

export const IssuesList = styled.section`
    width: 100%;
    height: auto;

    li
    {
        display: flex;
        flex-direction: row;

        padding: 1rem 0;

        > div
        {
            display: flex;
            align-items: center;
        }
    }

    img
    {
        color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);

        width: 50px;
        height: 50px;

        border-radius: 50%;
        border: 2px solid #00abfa;

        margin: 0 1rem;
    }

    > li div, strong
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
    }

    a
    {
        color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);

        &:hover
        {
            color: #00abfa;
        }
    }

    span
    {
        background-color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);
        color: ${props => props.theme.colors.background};

        margin: 0.2rem 0;
        padding: 0 0.2rem;

        border-radius: 4px;
    }

    p
    {
        color: #00abfa;
        padding-top: 0.4rem;
    }
`;

export const ButtonsContainer = styled.div`
    margin: 1rem auto;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    button
    {
        border: none;
        background-color: transparent;
        border: 2px solid #00abfa;
        padding: 0.2rem 1rem;
        border-radius: 9px;

        font: 500 16px 'Sora', sans-serif;
        transition: all 0.2s;

        color: ${props => props.theme.colors.text};
        filter: invert(1) hue-rotate(180deg);
    }

    &.all
    {  
        button:nth-child(1)
        {
            background-color: #00abfa;
        }
    }

    &.open
    {  
        button:nth-child(2)
        {
            background-color: #00abfa;
        }
    }

    &.closed
    {  
        button:nth-child(3)
        {
            background-color: #00abfa;
        }
    }
`;

export const FooterActions = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button
    {
        border: 0;
        outline: 0;

        margin: 5rem 0 0;
        color: #00abfa;

        background-color: transparent;
    }
`;