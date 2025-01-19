'use client'

import { useState } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from "../lib/gamestate";
import Reset from './Reset';

import {
   place_piece,
    column_is_full
} from '../lib/place_piece.js'

import {
    check_win,
    tie_game
} from '../lib/win_conditions.js'

const PLAYER_1 = 0
const PLAYER_2 = 1
const columns = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]
]



export default function Connect4()
{
    //creating the board state. Making an array of 6 and then within each subarray, there are 7 more values
    const [tiles, setTiles] = useState<number[]>(Array(42).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GameState.inProgress);
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(new Array(42).fill(null));
        setPlayerTurn(PLAYER_1)
    }

    const handleClick = (index: number) =>
    {

        if (index === null)
        {
            return;
        }

        const new_tiles = [...tiles]
        //need to get the correct column[i] of the index
        const column = columns.find(arr => arr.includes(index));

        if (column)
        {
           const placed_piece = place_piece(column, tiles) //return the most open space in the column
           new_tiles[placed_piece] = playerTurn
           setTiles(new_tiles)


            if(tie_game(tiles))
            {
                setGameState(GameState.draw)
            }

            else if (check_win(new_tiles, placed_piece, playerTurn))
            {

               if (playerTurn === PLAYER_1)
               {
                   setGameState(GameState.player1wins)
               }
               else if (playerTurn === PLAYER_2)
               {
                   setGameState(GameState.player2wins)
               }
           }
        }

       if(playerTurn === PLAYER_1) {

           if (column_is_full(column, tiles))
           {
           setPlayerTurn(PLAYER_1)
           }
           else setPlayerTurn(PLAYER_2)
       }
       else if (playerTurn === PLAYER_2)
       {
           if(column_is_full(column, tiles))
           {
               setPlayerTurn(PLAYER_2)
           }
           else
           {
               setPlayerTurn(PLAYER_1)
           }
       }
    }

    return(
        <div>
            <Board
                tiles={tiles}
                onTileClick={handleClick}
                playerTurn={playerTurn}
                hoveredColumn={hoveredColumn}
                setHoveredColumn={setHoveredColumn}
            />
            <GameOver
                 gameState={gameState}
                />
            <Reset
                gameState={gameState} onReset={handleReset}
                />
        </div>
    )
}

