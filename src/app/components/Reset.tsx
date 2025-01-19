import GameState from "@/app/lib/gamestate";


//to reset > once game state == 1 or 2 or 3. We put up a button that asks the user to play again.
//we then reset the tiles, and set player1

function Reset({gameState, onReset}) {

    if (gameState === GameState.inProgress) {
        return;
    }

    return (
<div className="flex justify-center">
        <button onClick={onReset} className="flex justify-center
         bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
         border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >Reset</button>
</div>
)
}

export default Reset;