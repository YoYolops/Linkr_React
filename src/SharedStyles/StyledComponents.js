import styled from "styled-components";
import { FaRetweet } from "react-icons/fa";

const Title = styled.h1`
    color: #fff;
    font-size: 43px;
    font-family: 'Oswald', sans-serif;
`

const Retweet = styled(FaRetweet)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333333",
    width: "597px",
    height: "262px",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    zIndex: 1000,
  },
};

const ModalButtons = styled.div`
  margin-top: 30px;
  button {
    width: 134px;
    height: 37px;
    border-radius: 5px;
    border: none;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #1877f2;
    cursor: pointer;
  }

  .second {
    background-color: #1877f2;
    color: #fff;
    margin-left: 27px;
  }
`;

export {
    Title,
    Retweet,
    customStyles,
    ModalButtons
}