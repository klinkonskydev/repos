import styled, { keyframes, css } from "styled-components";

interface ISubButton {
  type: "submit" | "reset" | "button";
  loading: number;
}

export const Container = styled.section`
  width: 700px;
  max-width: 95%;

  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;

  background-color: ${(props) => props.theme.colors.text};
  filter: invert(1) hue-rotate(180deg);
  box-shadow: 0 0 20px ${(props) => props.theme.colors.text};

  h1 {
    font-size: 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${(props) => props.theme.colors.text};
    filter: invert(1) hue-rotate(180deg);

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.9rem;

  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 0;

    color: ${(props) => props.theme.colors.text};
    filter: invert(1) hue-rotate(180deg);
    border-bottom: 1px solid ${(props) => props.theme.colors.text};

    padding: 10px 1rem;

    font-size: 17px;

    background-color: transparent;
  }
`;

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs<ISubButton>((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;

  border: 0;
  border-radius: 4px;

  margin-left: 10px;
  padding: 0 1rem;

  display: grid;
  place-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 1.3rem;

  li {
    padding: 1rem 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 0 2px 0.2px ${(props) => props.theme.colors.background};
    border-radius: 4px;

    & + li {
      margin-top: 1rem;
    }
  }

  span {
    color: ${(props) => props.theme.colors.text};
    filter: invert(1) hue-rotate(180deg);
  }
`;

export const ButtonRemove = styled.button`
  background: none;
  border: none;

  svg {
    color: ${(props) => props.theme.colors.text};
    margin-right: 1rem;
  }
`;
