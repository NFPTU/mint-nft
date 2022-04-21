import { Container } from '@mui/material';
import React from 'react';

import Avatar from '@mui/material/Avatar';
// import Stack from "@mui/material/Stack";

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import {
	CaptionImage,
	Container,
	WrapperImage,
	Box,
	Button,
	ButtonWatchlist,
	CheckBox,
	CollectionID,
	FeedBack,
	FillterItems,
	Fillters,
	IconImage,
	IconSelect,
	Image,
	IntroTitle,
	LeftBox,
	ListButton,
	Price,
	Right,
	RightBox,
	ScrollCheckBox,
	ScrollSelect,
	Select,
	Sreachbox,
	Title,
	TotalInfor,
	TotalItems,
	ImageTitle,
	Avatar,
	ListButtonItem,
	ListButtonView,
	NumerReport,
	TittleReport,
	CurrencyBitcoinIcon,
} from './list-elements';
import { Block } from '@mui/icons-material';

function ListCollections() {
	return (
		<Container>
			<WrapperImage>
				<CaptionImage src='https://images.hdqwalls.com/wallpapers/bthumb/2020-goku-4k-artwork-9i.jpg' />

				<IconImage>
					<Avatar
						alt='Remy Sharp'
						src='https://c4.wallpaperflare.com/wallpaper/517/550/386/dragon-ball-dragon-ball-super-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg'
						sx={{ width: 100, height: 100 }}
					/>
				</IconImage>
			</WrapperImage>

			<Right>
				<ButtonWatchlist>
					<Button variant='outlined' startIcon={<AddIcon />}>
						Watchlist
					</Button>
				</ButtonWatchlist>

				<ListButton>
					<ListButtonItem>
						<LanguageIcon sx={{ fontSize: 20 }} />
					</ListButtonItem>
					<ListButtonItem>
						<FacebookIcon sx={{ fontSize: 20 }} />
					</ListButtonItem>
					<ListButtonItem>
						<InstagramIcon sx={{ fontSize: 20 }} />
					</ListButtonItem>
					<ListButtonItem>
						<TwitterIcon sx={{ fontSize: 20 }} />
					</ListButtonItem>
				</ListButton>
			</Right>

			<Title>
				Đạt Đẹp Trai Không Nhạt Phai
				<CheckCircleIcon />
			</Title>

			<TotalInfor>
				<ListButtonView>
					<NumerReport>1.5K</NumerReport>
					<TittleReport>items</TittleReport>
				</ListButtonView>
				<ListButtonView>
					<NumerReport>1.8K</NumerReport>
					<TittleReport>Owners</TittleReport>
				</ListButtonView>
				<ListButtonView>
					<NumerReport>
						<CurrencyBitcoinIcon sx={{ fontSize: 18 }} />
						1.2K{' '}
					</NumerReport>
					<TittleReport>floor price</TittleReport>
				</ListButtonView>
				<ListButtonView>
					<NumerReport>
						<CurrencyBitcoinIcon sx={{ fontSize: 18 }} />
						1.1K
					</NumerReport>
					<TittleReport>volume trade</TittleReport>
				</ListButtonView>
			</TotalInfor>

			<IntroTitle>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English. Many desktop publishing packages and web
				page editors now use Lorem Ipsum as their default model text, and a
				search for 'lorem ipsum' will uncover many web sites still in their
				infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</IntroTitle>

			<IconSelect></IconSelect>
		</Container>
	);
}

export default ListCollections;
