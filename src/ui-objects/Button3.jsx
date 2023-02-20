import './Buttons.css';

export default function Button3({ size, theme, ...props }) {
	let cssClasses = 'button ';
	cssClasses += size ? size + ' ' : 'md ';
	cssClasses += theme ? theme + ' ' : 'default ';
	return <button {...props} className={cssClasses}></button>;
}
