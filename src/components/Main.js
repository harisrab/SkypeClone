import React from "react";
import styled from "styled-components";
import User from "./User";

function Main() {
	return <MainWrapper></MainWrapper>;
}

export default Main;

const MainWrapper = styled.div`
	background-color: #1b1b1b;
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 0px 10px 10px 0px;
`;
