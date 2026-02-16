import type { LucideIcon } from "lucide-react";
import { InputMask } from "@react-input/mask";
import { masks } from "../constants/masks";


type InputProps = {
	icon?: LucideIcon;
	label?: string;
	className?: string;
	mask?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ icon: Icon, label, className, mask, ...rest }: InputProps) {
	const knownMask = masks[mask as keyof typeof masks];


	return (
		<div className={className}>
			<span className="block mb-1 text-neutral-300 title-md">{label}</span>
			<div className="flex items-center gap-2 bg-transparent px-3 py-2 border border-neutral-600 focus-within:border-primary-light rounded-md transition-colors">
				<div>{Icon && <Icon className="text-primary" />}</div>
				{
					mask ? (
						<InputMask replacement={{ _: /\d/ }} mask={knownMask ?? mask} className="flex-1 bg-transparent outline-none text-neutral-300 placeholder:text-neutral-500" />
					) : (
						<input
							type="text"
							{...rest}
							className="flex-1 bg-transparent outline-none text-neutral-300 placeholder:text-neutral-500"
						/>
					)}
			</div>
		</div>
	);
}

export default Input;
