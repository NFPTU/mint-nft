import React, { useState, useEffect } from 'react';
import {
	Container,
	PlayBtn,
	Title,
	Wrapper,
	ImgBtn,
	ConnectBtnSt,
} from './login-game.elements';
import SoundBtn from '../../components/sound-button';
import {
	ConnectButton,
	ConnectDialog,
	Connect2ICProvider,
	useConnect,
} from '@connect2ic/react';
import { withContext } from '../../hooks';
import './style.css'

function LoginGame(props) {
	const { principal, isConnected, disconnect } = useConnect();

	const { prinpId, setPrinpId, logout } = props;

	const onConnectWallet = async () => {
		try {
      console.log(principal);
			setPrinpId(principal);
		} catch (e) {
			console.log(e);
		}
	};

	const onDisconnect = () => {
		disconnect();
		logout();
		console.log('disconnect');
	};

	return (
		<Container style={{ backgroundImage: `url(/images/background.png)` }}>
			<ConnectDialog dark={false} />
      <Wrapper>
				<Title>Ants Kingdoms</Title>
				<PlayBtn>
					<SoundBtn>
						<ImgBtn src={'/images/playBtn.png'} alt='' />
					</SoundBtn>
					<ConnectButton
						onConnect={onConnectWallet}
						onDisconnect={onDisconnect}
						className={ConnectBtnSt}
					/>
				</PlayBtn>
			</Wrapper>
		</Container>
	);
}

export default withContext(LoginGame);
