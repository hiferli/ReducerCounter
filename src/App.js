import logo from './logo.svg';
import './App.css';
import { useAppSelector } from './Store/Hooks/Index'

function App() {
	const count = useAppSelector(state => state.counter);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Counter: {count} </h1>
			</header>
		</div>
	);
}

export default App;
