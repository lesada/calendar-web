import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, disabled, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				"flex justify-center items-center bg-primary hover:bg-primary-light px-4 py-2 border-2 hover:border-primary-light rounded-lg h-14 text-gray-950 transition-colors cursor-pointer title-sm shrink-0",
				{
					disabled: "bg-primary-dark cursor-not-allowed",
				},
			)}
		>
			{children}
		</button>
	);
}

export default Button;
