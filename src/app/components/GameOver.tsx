import GameState from '../lib/gamestate'

export function GameOver({gameState}) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>

        case GameState.player1wins:
            return (
                <h1 className="text-5xl font-black text-center my-8 text-red-300 animate-pulse tracking-widest relative">
                    Player 1 Wins!
                    <span className="absolute inset-0 text-red-500 blur-sm animate-pulse">
            Player 1 Wins!
                    </span>
                </h1>
            );

        case GameState.player2wins:
            return <h1 className="text-5xl font-black text-center my-8 text-yellow-300 animate-pulse tracking-widest relative">
                Player 2 Wins!
                <span className="absolute inset-0 text-yellow-500 blur-sm animate-pulse">
                    Player 2 Wins!
                </span>
            </h1>

        case GameState.draw:
            return <h1 className="text-5xl font-black text-center my-8 text-blue-300 animate-pulse tracking-widest relative">
                Draw!
                <span className="absolute inset-0 text-blue-500 blur-sm animate-pulse">
                    Draw!
                </span>
            </h1>

        default:
            return <></>
    }
}

export default GameOver