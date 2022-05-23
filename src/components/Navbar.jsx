import { Attractions, Bed, DirectionsCarFilled, FlightTakeoff, Hail } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-primary w-full'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<Link to='/'>
						<h1 className='font-bold text-white font-lobster text-2xl'>
							Booking.com
						</h1>
					</Link>
					<div className='flex space-x-5'>
						<a href='#' className='btn--light'>
							Register
						</a>
						<a href='#' className='btn--light'>
							Login
						</a>
					</div>
				</div>

				<div className='flex space-x-2 flex-wrap mt-5'>
					<button className='header__btn header__btn--active'>
						<Bed /> Stays
					</button>
					<button className='header__btn'>
						<FlightTakeoff /> Flights
					</button>
					<button className='header__btn'>
						<DirectionsCarFilled /> Car rental
					</button>
					<button className='header__btn'>
						<Attractions /> Attractions
					</button>
					<button className='header__btn'>
						<Hail /> Airport taxi
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
