'use client'

import { useState } from 'react';
import Board from './Board';
import {
check_column
} from '../lib/connect4logic.js'

const PLAYER_1 = 0
const PLAYER_2 = 1

function place_piece(column: any, tiles: any, playerTurn: any)
{
    let filled_in_index = check_column(column, tiles)
    tiles[filled_in_index] = playerTurn;
    return tiles;
}

export default function Connect4()
{
    //creating the board state. Making an array of 6 and then within each subarray, there are 7 more values
    const [tiles, setTiles] = useState<number[]>(Array(42).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_1);

    const handleClick = (index: any) =>
    {


        let new_tiles = [...tiles]
        const column1 = [0, 7, 14, 21, 28, 35]
        const column2 = [1, 8, 15, 22, 29, 36]
        const column3 = [2, 9, 16, 23, 30, 37]
        const column4 = [3, 10, 17, 24, 31, 38]
        const column5 = [4, 11, 18, 25, 32, 39]
        const column6 = [5, 12, 19, 26, 33, 40]
        const column7 = [6, 13, 20, 27, 34, 41]

        //check if the column is full. if the player clicks on a full column, don't do anything
        if (column1.includes(index))
        {
            new_tiles = place_piece(column1, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column2.includes(index))
        {
            new_tiles = place_piece(column2, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column3.includes(index))
        {
            new_tiles = place_piece(column3, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column4.includes(index))
        {
            new_tiles = place_piece(column4, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column5.includes(index))
        {
            new_tiles = place_piece(column5, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column6.includes(index))
        {
            new_tiles = place_piece(column6, tiles, playerTurn);
            setTiles(new_tiles);
        }
        else if (column7.includes(index))
        {
            const new_tiles = place_piece(column7, tiles, playerTurn);
            setTiles(new_tiles);
        }

        if (playerTurn === 0)
        {
            setPlayerTurn(1);
        }
        else
        {
            setPlayerTurn(0);
        }
    }

    return(
        <div>
            <Board
                tiles={tiles}
                onTileClick={handleClick}
                playerTurn={playerTurn}
            />
        </div>
    )
}


