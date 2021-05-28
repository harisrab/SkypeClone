import React from "react";
import styled from "styled-components";

// Import Components
import Main from "./components/Main";
import Sidebar from "./containers/Sidebar";

function App() {
	return (
		<AppWrapper>
			<Sidebar />
			<Main />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	display: flex;
	flex-direction: row;
	color: white;
	height: 100%;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 1) 0px 2px 8px 0px;
`;
