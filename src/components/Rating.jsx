import { useState } from 'react';
import Star from './Star';
import Button from './Button';

const Rating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);
	const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
	return (
		<div className="rating-container">
			<h2>How Do You Rate React?</h2>
			<div className="stars">
				{stars.map((star) => (
					<Star
						key={star}
						star={star}
						rating={rating}
						hover={hover}
						ratingClick={setRating}
						ratingHover={setHover}
					/>
				))}
			</div>
			<div>
				<h3>{rating > 0 && feedbackMessages[rating - 1]}</h3>
				<Button className="submit-btn">Submit</Button>
			</div>
		</div>
	);
};

export default Rating;
