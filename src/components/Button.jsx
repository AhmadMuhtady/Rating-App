const Button = ({ children, className, onClick, disabled }) => {
	return (
		<button disabled={disabled} onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default Button;
