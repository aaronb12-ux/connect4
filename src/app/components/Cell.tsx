

import {
    place_piece,
} from '../lib/place_piece.js'

const columns = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]
]

interface CellProps {
    value: number | null;
    onClick: () => void;
    playerTurn: number;
    tiles: (number | null)[];
    index: number;
    hoveredColumn: number | null;
    setHoveredColumn: (index: any) => void;
}

function Cell({value, onClick, playerTurn, tiles, index, hoveredColumn, setHoveredColumn}: CellProps) {

    //need to get the most available piece from the bottom
    //depending on the player turn, set the hover to that color
    //pass it into the return div
    let hover_class = null
    const columnNumber = columns.findIndex(arr => arr.includes(index));
    if (value === null && hoveredColumn !== null) {
        const column = columns[hoveredColumn];
        const hovered_piece = place_piece(column, tiles);
        if (columnNumber === hoveredColumn && index === hovered_piece) {
            if (playerTurn == 0)
            {
                hover_class = "bg-red-300"
            }
            else if (playerTurn == 1)
            {
                hover_class = "bg-yellow-200"
            }
        }
    }

    let filled_color= "bg-slate-800"
    if (value == 0) {filled_color = "bg-red-500"}
    else if (value == 1) {filled_color = "bg-yellow-500"}

        return (
            <div
                onClick={onClick}
                onMouseEnter={() => setHoveredColumn(columnNumber)}
                onMouseLeave={() => setHoveredColumn(null)}
                className={`w-10 h-10 rounded-full ${filled_color} cursor-pointer ${hover_class}`}>
            </div>
        )

}
export default Cell



