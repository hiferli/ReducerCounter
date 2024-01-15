import logo from './logo.svg';
import './App.css';
import { useAppSelector , useAppDispatch } from './Store/Hooks/Index'
import { increment , decrement , reset } from './Store/Slices/Counter/Index'
import Print from './Print'

function App() {
	const count = useAppSelector(state => state.counter);
	const dispath = useAppDispatch()

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Counter: {count} </h1>
				
				<button onClick={() => dispath(increment())}>Increment</button>
				<button onClick={() => dispath(decrement())}>Decrement</button>
				<button onClick={() => dispath(reset())}>Reset</button>
			</header>

			{/* <Print /> */}
		</div>
	);
}

export default App;
