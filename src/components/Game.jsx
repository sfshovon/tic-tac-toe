import { useState } from "react";
import Board from "./Board";

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [xIsNext, setXIsNext] = useState(true);
	const [currentMove, setCurrentMove] = useState(0);

	const currentSquare = history[currentMove];

	const handlePlay = (nextSquares) => {
		setXIsNext(!xIsNext);
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (move) => {
		setCurrentMove(move);
		setXIsNext(move % 2 === 0);
	};

	const moves = history.map((singleHistory, index) => (
		<li key={index}>
			<button
				className={`text-sm md:text-xl text-zinc-500 hover:underline ${
					index === currentMove ? "font-bold" : ""
				}`}
				onClick={() => jumpTo(index)}
			>
				{index > 0 ? `Go to move ${index}` : "Start the game"}
			</button>
		</li>
	));

	return (
		<div className="flex justify-center items-center gap-2 md:gap-10">
			<div className="my-4">
				<Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
			</div>
			<div className="flex justify-center items-center mt-4">
				<ol className="bg-sky-100 text-2xl rounded-2xl border border-zinc-900 p-4">
					{moves}
				</ol>
			</div>
		</div>
	);
};

export default Game;
