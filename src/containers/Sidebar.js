import React from "react";
import styled from "styled-components";
import User from "../components/User";
import { store } from "../store";
import _ from "lodash";

function Sidebar() {
	const contacts = store.getState().contacts;

	return (
		<SidebarWrapper>
			<Header>
				<h1>Contact List</h1>
			</Header>
			<UsersContainer>
				{_.values(contacts).map(({ profile_pic, name, status }) => {
					return (
						<User
							imgSrc={profile_pic}
							name={name}
							status={status}
						/>
					);
				})}
			</UsersContainer>
		</SidebarWrapper>
	);
}

export default Sidebar;

const SidebarWrapper = styled.div`
	background-color: #1b1b1b;
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-radius: 10px 0px 0px 10px;
	border-right: solid #3d3d3d 1px;
	padding: 10px;
	padding-top: 0px;
`;

const UsersContainer = styled.div`
	overflow-y: scroll;
	width: 100%;

	::-webkit-scrollbar {
		display: none;
	}
`;

const Header = styled.div`
	padding: 10px;
	padding-top: 50px;
	padding-bottom: 50px;

	h1 {
		font-family: "Archivo", sans-serif;
		font-weight: 800;
		font-size: 40px;
	}
`;
