import '../styles/featured.css'

const Featured = () => {
	return (
        <div className="container">
		<div class='featured grid grid-cols-1 md:grid-cols-3 gap-4'>
			<div className='featured__item'>
				<img
					src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
					alt=''
					className='featured__img'
				/>

				<div className='absolute bottom-3 left-5 text-white'>
					<h3 className='font-semibold text-3xl'>Dublin</h3>
					<span className='font-semibold'>123 properties</span>
				</div>
			</div>
			<div className='featured__item rounded-xl h-80 relative cursor-pointer'>
				<img
					src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
					alt=''
					className='featured__img'
				/>

				<div className='absolute bottom-3 left-5 text-white'>
					<h3 className='font-semibold text-3xl'>Austin</h3>
					<span className='font-semibold'>532 properties</span>
				</div>
			</div>
			<div className='featured__item rounded-xl h-80 relative cursor-pointer'>
				<img
					src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
					alt=''
					className='featured__img'
				/>

				<div className='absolute bottom-3 left-5 text-white'>
					<h3 className='font-semibold text-3xl'>Reno</h3>
					<span className='font-semibold'>433 properties</span>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Featured;
