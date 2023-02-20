import './Buttons.css';

export default function Button1(props) {
	let cssClasses = 'button ';
	cssClasses += props.size ? props.size + ' ' : 'md ';
	cssClasses += props.theme ? props.theme + ' ' : 'default ';
	return (
		<button className={cssClasses} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
