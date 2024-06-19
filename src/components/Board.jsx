import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";
// eslint-disable-next-line react/prop-types
const Board = ({ xIsNext, squares, onPlay }) => {
	const winner = calculateWinner(squares);
	let status = winner
		? `Winner is ${winner}`
		: squares.every((square) => square)
		? "It's a draw!"
		: `Next Move: Player ${xIsNext ? "X" : "O"}`;

	const winningSquares = winner ? calculateWinner(squares, true) : [];

	const handleClick = (i) => {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nextSquares = [...squares];

		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	};

	return (
		<>
			<h1 className="text-center m-2 text-white bg-red-900 rounded-2xl p-2 shadow-2xl font-bold text-3xl">
				{status}
			</h1>
			<div className="grid grid-cols-3">
				{squares.map((square, index) => (
					<Square
						key={index}
						value={square}
						onSquareClick={() => handleClick(index)}
						isWinnerSquare={winningSquares.includes(index)}
					/>
				))}
			</div>
		</>
	);
};

export default Board;
