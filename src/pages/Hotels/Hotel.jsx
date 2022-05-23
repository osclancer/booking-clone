import { LocationOnOutlined } from '@mui/icons-material';
import React from 'react';
import LightRoomComponent from 'react-lightbox-gallery';
import { useParams } from 'react-router-dom';
import NewsLetter from '../../components/NewsLetter';
import { hotelPhotos } from '../../dummydata';

const Hotel = () => {
	const { hotelId } = useParams();

	const settings = {
		columnCount: {
			default: 3,
			mobile: 1,
			tab: 2,
		},
		mode: 'dark',
	};

	return (
		<>
			<div className='container py-5 mb-5'>
				<div className='grid space-y-3 md:flex items-start justify-between'>
					<div className='gap-4'>
						<h1 className='font-bold text-xl md:text-4xl'>
							Tower Street Apartment
						</h1>
						<span>
							<LocationOnOutlined /> 5 cairo city, cairo road,
							Egypt
						</span>
						<span className='text-primaryHover text-xl block'>
							Excellent location - 500m from center
						</span>
						<span className='text-green-500 text-xl block'>
							Book a stay over $114 at this property and get a
							free airport taxi
						</span>
					</div>
					<button className='btn--primary rounded-md'>
						Reserve or Book Now!
					</button>
				</div>

				<LightRoomComponent images={hotelPhotos} settings={settings} />

				<div className='grid grid-cols-1 md:grid-cols-4 my-6 space-y-5'>
					<div className='col-span-3'>
						<h2 className='font-bold text-2xl mb-5'>
							Stay in the heart of City
						</h2>
						<p>
							Located a 5-minute walk from St. Florian's Gate in
							Krakow, Tower Street Apartments has accommodations
							with air conditioning and free WiFi. The units come
							with hardwood floors and feature a fully equipped
							kitchenette with a microwave, a flat-screen TV, and
							a private bathroom with shower and a hairdryer. A
							fridge is also offered, as well as an electric tea
							pot and a coffee machine. Popular points of interest
							near the apartment include Cloth Hall, Main Market
							Square and Town Hall Tower. The nearest airport is
							John Paul II International Kraków–Balice, 16.1 km
							from Tower Street Apartments, and the property
							offers a paid airport shuttle service.
						</p>
					</div>
					<div className='cols-span-1 h-max bg-blue-900 bg-opacity-25 p-4'>
						<h1 className='text-lg font-bold mb-4'>
							Perfect for a 9-night stay!
						</h1>
						<span>
							Located in the real heart of Krakow, this property
							has an excellent location score of 9.8!
						</span>
						<h2 className='text-3xl'>
							<b>$945</b> <small>(9 nights)</small>
						</h2>
						<button className='btn--primary btn--block mt-4'>
							Reserve or Book Now!
						</button>
					</div>
				</div>
			</div>
			<NewsLetter />
		</>
	);
};

export default Hotel;
