const NewsLetter = () => {
	return (
		<div className='w-full bg-primary flex flex-col space-y-3 px-5 py-9 items-center'>
			<h2 className='text-white text-xl md:text-4xl'>
				Save time, save money!
			</h2>
			<h4 className='text-white text-md'>
				Sign up and we'll send the best deals to you
			</h4>

			<div className='flex space-x-2'>
				<input
					type='text'
					placeholder='Your Email'
					className='px-3 py-4 border-none outline-none'
				/>
				<button className='btn--info rounded-lg'>Subscribe</button>
			</div>
		</div>
	);
};

export default NewsLetter;
