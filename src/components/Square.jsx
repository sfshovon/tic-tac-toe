// eslint-disable-next-line react/prop-types
const Square = ({ value, onSquareClick, isWinnerSquare }) => {
	return (
		<button
			className={`text-2xl md:text-4xl bg-white hover:bg-gray-200 border border-gray-400 size-12 md:size-36 m-1 leading-9 focus:outline-none ${
				value === "X" ? "text-green-400" : "text-blue-400"
			} ${isWinnerSquare ? "animate-pulse text-red-600 bg-zinc-300" : ""}`}
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
};

export default Square;
