import Button from "./components/Button";
import "./styles/main.css";

function App() {
	return (
		<div className="flex flex-col gap-4 bg-neutral-800 m-8 p-8 rounded-lg w-full max-w-md h-full">
			<h1 className="text-neutral-100 title-lg">Make an appointment</h1>
			<h2 className="text-neutral-300 title-md">
				Select a date and time, plus inform the client name for the appointment.
			</h2>
			<Button>SUBMIT</Button>
		</div>
	);
}

export default App;
