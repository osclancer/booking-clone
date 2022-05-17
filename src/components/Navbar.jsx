import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-primary w-full'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<Link to='/'>
						<h1 className='font-bold text-white font-lobster text-2xl'>Booking.com</h1>
					</Link>
                    <div className='flex space-x-5'>
                        <a href='#' className='btn--light'>Register</a>
                        <a href='#' className='btn--light'>Login</a>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
