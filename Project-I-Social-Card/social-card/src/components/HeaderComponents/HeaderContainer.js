import React from 'react';
import './Header.css';
import ImageThumbnail from '../../components/HeaderComponents/ImageThumbnail.js';
import HeaderTitle from '../../components/HeaderComponents/HeaderTitle.js';
import HeaderContent from '../../components/HeaderComponents/HeaderContent.js';

const HeaderContainer = () => {
	return (
		<div className="header-container">
			<ImageThumbnail />
			<div className='title-content'>
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
};

export default HeaderContainer;