import {
	CalendarMonthOutlined,
	LocationOnOutlined,
	PersonOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import '../styles/header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Header = () => {
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		rooms: 1,
	});

	const changeOptions = (option, type) => {
		if (type === '+') {
			setOptions({ ...options, [option]: options[option] + 1 });
		} else {
			if (options[option] > 0) {
				setOptions({ ...options, [option]: options[option] - 1 });
			}
		}
	};

	return (
		<div className='header bg-primary w-full relative'>
			<div className='container relative'>

				<div className='py-16 lg:pr-40 flex flex-col items-start justify-center space-y-5'>
					<h2 className='text-5xl my-3 text-white font-semibold'>
						A lifetime of discounts? It's Genius.
					</h2>

					<p className='text-white text-2xl'>
						Get rewarded for your travels – unlock instant savings
						of 10% or more with a free Booking.com account
					</p>

					<button className='btn--info'>Sign in / Register</button>
				</div>

				<div className='header__search-bar'>
					<div className='lg:col-span-4 flex border-4 border-orange-400 py-3 rounded-tl-md rounded-bl-md'>
						<LocationOnOutlined className='header__search-icons' />
						<input
							type='text'
							placeholder='Where are you going ?'
							className='border-none outline-none'
							style={{ width: '90%' }}
						/>
					</div>
					<div className='lg:col-span-2 flex border-4 border-orange-400 py-3 relative'>
						<CalendarMonthOutlined className='header__search-icons' />
						<span
							className='text-warmGray-400 cursor-pointer'
							onClick={() => setOpenDate(true)}
						>
							{`${format(
								date[0].startDate,
								'dd-MM-yyy'
							)} - ${format(date[0].endDate, 'dd-MM-yyy')}`}
						</span>
						{openDate && (
							<div className='absolute top-14'>
								<DateRange
									editableDateInputs={true}
									onChange={(item) =>
										setDate([item.selection])
									}
									moveRangeOnFirstSelection={false}
									ranges={date}
								/>
								<button
									className='btn--info w-full'
									onClick={() => setOpenDate(false)}
								>
									Done
								</button>
							</div>
						)}
					</div>
					<div className='lg:col-span-3 flex border-4 border-orange-400 py-3 relative'>
						<PersonOutlined className='header__search-icons' />
						<span
							className='text-warmGray-400 cursor-pointer'
							onClick={() => setOpenOptions(true)}
						>
							{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}
						</span>
						{openOptions && (
							<div className='absolute w-full top-14 p-4 bg-white shadow-lg rounded-md space-y-3'>
								<div className='flex justify-between items-center'>
									<span>Adult</span>
									<div className='flex items-center space-x-2'>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('adult', '-')
											}
										>
											-
										</button>
										<span>{options.adult}</span>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('adult', '+')
											}
										>
											+
										</button>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<span>Children</span>
									<div className='flex items-center space-x-2'>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('children', '-')
											}
										>
											-
										</button>
										<span>{options.children}</span>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('children', '+')
											}
										>
											+
										</button>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<span>Rooms</span>
									<div className='flex items-center space-x-2'>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('rooms', '-')
											}
										>
											-
										</button>
										<span>{options.rooms}</span>
										<button
											className='outline-none cursor-pointer py-2 px-4 bg-gray-200 border border-primary text-primary'
											onClick={() =>
												changeOptions('rooms', '+')
											}
										>
											+
										</button>
									</div>
								</div>
								<button
									className='btn--info w-full'
									onClick={() => setOpenOptions(false)}
								>
									Done
								</button>
							</div>
						)}
					</div>

					<Link
						to='/hotels'
						className='btn--info border-4 rounded-tr-md rounded-br-md flex justify-center items-center'
					>
						Search
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
