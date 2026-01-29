import { User } from "lucide-react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./styles/main.css";
import Slot from "./components/Slot";

function App() {
	return (
		<div className="p-8 h-full">
			<div className="flex flex-col gap-4 bg-neutral-800 px-20 py-10 rounded-lg w-full max-w-lg h-full">
				<h1 className="mb-1 text-neutral-100 title-lg">Make an appointment</h1>
				<h2 className="mb-6 font-thin text-neutral-300 title-md">
					Select a date and time, plus inform the client name for the
					appointment.
				</h2>
				<h3 className="text-md text-neutral-100">A.M.</h3>
				<div className="gap-3 grid grid-cols-3 mb-4">
					<Slot label="08:00" value="08:00" />
					<Slot disabled label="09:00" value="09:00" />
					<Slot label="09:30" value="09:30" />
					<Slot label="10:00" value="10:00" />
					<Slot label="11:00" value="11:00" />
				</div>
				<h3 className="text-md text-neutral-100">P.M.</h3>
				<div className="gap-3 grid grid-cols-3 mb-4">
					<Slot label="08:00" value="08:00" />
					<Slot disabled label="09:00" value="09:00" />
					<Slot active label="10:00" value="10:00" />
				</div>
				<Input className="mb-4" icon={User} label="Client" name="client" />
				<Button>SUBMIT</Button>
			</div>
		</div>
	);
}

export default App;
