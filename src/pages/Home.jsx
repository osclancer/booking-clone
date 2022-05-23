import React from 'react';
import Featured from '../components/Featured';
import FeaturedProperties from '../components/FeaturedProperties';
import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import PropertyList from '../components/PropertyList';
import '../styles/home-module.css';

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<div className='mt-10'>
				<Featured />
				<div className='container'>
					<h2 className='home__title'>Browse by property type</h2>
				</div>
				<PropertyList />
				<div className='container'>
					<h2 className='home__title'>Homes guest loves</h2>
				</div>
				<FeaturedProperties />
				<NewsLetter />
			</div>
		</div>
	);
};

export default Home;
