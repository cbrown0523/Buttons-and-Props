import './Buttons.css';

export default function Button2({ children, onClick, size, theme }) {
	let cssClasses = 'button ';
	cssClasses += size ? size + ' ' : 'md ';
	cssClasses += theme ? theme + ' ' : 'default ';
	return (
		<button className={cssClasses} onClick={onClick}>
			{children}
		</button>
	);
}
