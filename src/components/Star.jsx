const Star = ({ star, rating, hover, ratingClick, ratingHover }) => {
	return (
		<span
			key={star}
			onClick={() => ratingClick(star)}
			onMouseEnter={() => ratingHover(star)}
			onMouseLeave={() => ratingHover(null)}
			className={`star ${star <= (rating || hover) ? 'active' : ''}`}
		>
			{'\u2605'}
		</span>
	);
};

export default Star;
