// @ts-expect-error
function Cell({value, onClick, playerTurn}) {
    if (value == 0)
    {
        return (
            <div onClick={onClick} className={"w-10 h-10 rounded-full bg-red-500 cursor-pointer"}></div>
        );
    }
    else if (value == 1)
    {
        return (
            <div onClick={onClick} className={"w-10 h-10 rounded-full bg-yellow-500 cursor-pointer"}></div>
        );
    }
    else
    {
        return (
            <div onClick={onClick} className={"w-10 h-10 rounded-full bg-slate-800 cursor-pointer"}></div>
        );
    }
}

export default Cell