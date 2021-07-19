import styled from "styled-components";

export const SectionOne = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SectionTwo = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const Description = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	font-family: sans-serif;
	font-size: 32px;
`;

export const ContainerProducts = styled.div`
	margin-top: 80px;
	padding: 16px;
	width: 70%;
	display: flex;
	color: white;
	justify-content: space-around;
`;

export const Products = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		margin-top: 24px;
		font-size: 32px;
		font-weight: 600;
		font-family: sans-serif;
	}
`;

export const SectionThree = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Newsletter = styled.div`
	width: 70%;
	text-align: center;
	color: white;
	font-size: 32px;
	font-family: sans-serif;
`;

export const NewsletterInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	label {
		color: white;
		font-size: 24px;
		font-family: sans-serif;
		margin-bottom: 16px;
	}

	input {
		padding: 8px;
		font-size: 20px;
		border-radius: 8px;
		height: 32px;
		width: 320px;
		margin-bottom: 24px;
	}

	button {
		color: #1c1c1c;
		width: 336px;
		height: 48px;
		font-size: 24px;
		background-color: #f0e68c;
		border-radius: 4px;
	}
`;
