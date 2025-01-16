import Cell from './Cell';


function Board({tiles, onTileClick, playerTurn}) {
    //Helper function to determine if a cell should have rounded corners
    const getCellRounding = (index: number) => {
        if (index === 0) return "rounded-tl-md"
        if (index === 6) return "rounded-tr-md"
        if (index === 35) return "rounded-bl-md"
        if (index === 41) return "rounded-br-md"
        return ""
    }

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-7 grid-rows-6 gap-0">
                {[...Array(42)].map((_, index) => (
                    <div key={index} className={`bg-blue-500 shadow-xl size-16 flex items-center justify-center ${getCellRounding(index)}`}>
                        <Cell playerTurn={playerTurn} onClick={()=>onTileClick(index)} value={tiles[index]} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Board;




