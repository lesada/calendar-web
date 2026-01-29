import clsx from "clsx";

type SlotProps = {
	value: string;
	label: string;
	active?: boolean;
	disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Slot({
	value,
	label,
	active = false,
	disabled = false,
	...rest
}: SlotProps) {
	return (
		<button
			className={clsx(
				"bg-neutral-700 py-2 border-2 border-neutral-500 rounded-lg text-md text-neutral-200 text-center cursor-pointer",
				{
					"border-primary bg-primary/10 text-primary": active,
					"cursor-not-allowed opacity-50": disabled,
				},
			)}
			type="button"
			{...rest}
		>
			{label}
		</button>
	);
}

export default Slot;
