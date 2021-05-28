import React from "react";
import styled from "styled-components";

function User({ imgSrc, name, status }) {
	return (
		<UserWrapper>
			<img src={imgSrc} alt="profile" />

			<UserInfo>
				<h2>{name}</h2>
				<UserStatus>
					<p>{status}</p>
				</UserStatus>
			</UserInfo>
		</UserWrapper>
	);
}

export default User;

const UserWrapper = styled.div`
	display: flex;
	background-color: #20202081;
	border: solid #4e4e4e5a 1px;
	width: 100%;
	border-radius: 5px;
	margin-top: 10px;
	height: 90px;
	transition: 0.5s;
	overflow-x: hidden;

	&:hover {
		border: solid #747474a4 1px;
		transition: cubic-bezier(0.075, 0.82, 0.165, 0.1);
		cursor: pointer;
	}

	img {
		border-radius: 50%;
		height: 60px;
		margin-left: 20px;
		margin-right: 20px;
	}

	align-items: center;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 60px;

	h2 {
		font-family: "Archivo", sans-serif;
		font-weight: 300;
		font-size: 18px;
	}

	margin-right: 20px;
`;

const UserStatus = styled.div`
	margin-top: 4px;
	color: #ffffff8d;
	font-family: "Archivo", sans-serif;
	font-size: 14px;
	margin-top: 8px;
	overflow-x: hidden;
	overflow-y: hidden;
`;
