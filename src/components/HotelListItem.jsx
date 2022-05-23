import React from 'react';

const HotelListItem = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-6 gap-5 p-3 border-2 border-gray-300 rounded-lg'>
			<img
				src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
				alt=''
				className='w-full object-cover md:col-span-2 cols'
			/>

			<div className='w-full grid md:flex items-center justify-between gap-3 md:col-span-4'>
				<div className='space-y-2 flex flex-col' style={{ flex: '2' }}>
					<h2 className='text-xl font-semibold'>
						Tower street apartment
					</h2>
					<h5 className='my-2'>500m from center</h5>
					<span
						className='text-white bg-green-500 rounded-md'
						style={{ width: 'max-content' }}
					>
						Free airport taxi
					</span>

					<span className='font-semibold block'>
						Studio apartment with air conditioning
					</span>
					<span>Entire studio • 1 bathroom • 21m² 1 full bed</span>

					<span className='font-semibold text-green-500'>
						Free cancellation
					</span>

					<small className='text-green-500'>
						You can cancel later, so lock in this great price today!
					</small>
				</div>

				<div className='flex flex-1 flex-col justify-between items-stretch w-full h-full'>
					<div className='flex justify-between items-center'>
						<span>Excellent</span>
						<span className='p-1 bg-primary text-white'>8.9</span>
					</div>

					<div className='flex flex-col items-center md:items-end'>
						<span className='text-2xl block font-bold'>$112</span>
						<small className='text-gray-600'>
							includes taxes and fees
						</small>
						<button className='btn--info btn--block rounded'>
							See availability
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelListItem;
