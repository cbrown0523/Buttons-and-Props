import Button1 from './ui-objects/Button1';
import Button2 from './ui-objects/Button2';
import Button3 from './ui-objects/Button3';

import './App.css';

export default function App() {
	function clickFunction() {
		console.log('clicked was activated');
	}

	return (
		<div className="App">
			<h1>Buttons and Props</h1>
			<h2>Button 1</h2>
			<Button1 onClick={clickFunction} size="sm">
				Abc
			</Button1>
			<Button1 onClick={clickFunction} size="md" theme="alternate">
				Def
			</Button1>
			<Button1 onClick={clickFunction} size="lg" theme="alternate2">
				Ghi
			</Button1>
			<Button1 onClick={clickFunction} size="sm">
				Abc
			</Button1>
			<Button1 onClick={clickFunction} size="md" theme="warning">
				Def
			</Button1>
			<Button1 onClick={clickFunction} size="lg" theme="error">
				Ghi
			</Button1>
			<h2>Button 2</h2>
			<Button2 onClick={clickFunction} size="sm">
				Abc
			</Button2>
			<Button2 onClick={clickFunction} size="md" theme="alternate">
				Def
			</Button2>
			<Button2 onClick={clickFunction} size="lg" theme="alternate2">
				Ghi
			</Button2>
			<Button2 onClick={clickFunction} size="sm">
				Abc
			</Button2>
			<Button2 onClick={clickFunction} size="md" theme="warning">
				Def
			</Button2>
			<Button2 onClick={clickFunction} size="lg" theme="error">
				Ghi
			</Button2>
			<h2>Button 3</h2>
			<Button3 onClick={clickFunction} size="sm">
				Abc
			</Button3>
			<Button3 onClick={clickFunction} size="md" theme="alternate">
				Def
			</Button3>
			<Button3 onClick={clickFunction} size="lg" theme="alternate2">
				Ghi
			</Button3>
			<Button3 onClick={clickFunction} size="sm">
				Abc
			</Button3>
			<Button3 onClick={clickFunction} size="md" theme="warning">
				Def
			</Button3>
			<Button3 onClick={clickFunction} size="lg" theme="error">
				Ghi
			</Button3>
		</div>
	);
}
