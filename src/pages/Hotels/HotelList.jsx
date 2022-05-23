import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import HotelListItem from '../../components/HotelListItem';

const HotelList = () => {
	const [openDate, setOpenDate] = useState(false);

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	return (
		<div className='container'>
			<div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
				{/* ASide */}
				<div className='md:col-span-2 h-max rounded-lg bg-yellow-400 p-3 md:sticky top-3'>
					<h4 className='text-xl font-bold my-2'>Search</h4>

					<div className='space-y-2 my-2'>
						<label htmlFor='destination'>Destination</label>
						<input
							type='text'
							id='destination'
							placeholder='Madrid'
							className='py-2 px-4 border-none outline-none w-full'
						/>
					</div>

					<div className='space-y-2 my-2'>
						<label htmlFor='date'>Check-in date</label>

						<div className='bg-white w-full relative cursor-pointer'>
							<span
								className='text-warmGray-400 w-full block p-2'
								onClick={() => setOpenDate(true)}
							>
								{`${format(
									date[0].startDate,
									'dd-MM-yyy'
								)} - ${format(date[0].endDate, 'dd-MM-yyy')}`}
							</span>
							{openDate && (
								<div className='w-full bg-white flex flex-col justify-center absolute top-10 left-0'>
									<DateRange
										editableDateInputs={true}
										onChange={(item) =>
											setDate([item.selection])
										}
										moveRangeOnFirstSelection={false}
										ranges={date}
									/>
									<button
										className='btn--primary btn--block'
										onClick={() => setOpenDate(false)}
									>
										Done
									</button>
								</div>
							)}
						</div>
					</div>

					<div className='space-y-2 my-2'>
						<span className='font-semibold'>Options</span>

						<div className='p-2'>
							<div className='flex items-center justify-between my-2'>
								<span>
									Min price <small>(Per night)</small>
								</span>

								<input
									type='number'
									placeholder='0'
									className='border-none outline-none w-16 p-1 rounded-md'
								/>
							</div>

							<div className='flex items-center justify-between my-2'>
								<span>
									Mas price <small>(Per night)</small>
								</span>

								<input
									type='number'
									placeholder='0'
									className='border-none outline-none w-16 p-1 rounded-md'
								/>
							</div>

							<div className='flex items-center justify-between my-2'>
								<span>Adult</span>

								<input
									type='number'
									placeholder='0'
									className='border-none outline-none w-16 p-1 rounded-md'
								/>
							</div>

							<div className='flex items-center justify-between my-2'>
								<span>children</span>

								<input
									type='number'
									placeholder='0'
									className='border-none outline-none w-16 p-1 rounded-md'
								/>
							</div>

							<div className='flex items-center justify-between my-2'>
								<span>Room</span>

								<input
									type='number'
									placeholder='0'
									className='border-none outline-none w-16 p-1 rounded-md'
								/>
							</div>
						</div>
					</div>

					<button className='btn--primary btn--block'>Search</button>
				</div>

				<div className='md:col-span-4 space-y-4'>
					<HotelListItem />
					<HotelListItem />
					<HotelListItem />
					<HotelListItem />
				</div>
			</div>
		</div>
	);
};

export default HotelList;
