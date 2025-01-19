export function check_win(tiles, index, playerturn)
{

    if (horizontal_win(tiles, index, playerturn) || vertical_win(tiles, index, playerturn)
        || diagonal_win_right(tiles, index, playerturn) || diagonal_win_left(tiles, index, playerturn))
    {
        console.log("win");
        return true
    }
    return false;
}

export function tie_game(tiles)
{
    const num_tiles = 42
    let count = 0
    for (let i = 0; i < num_tiles; i++)
    {
        if (tiles[i] !== null)
        {
            count += 1
        }
    }

    return count === num_tiles;

}


function horizontal_win(tiles, index, playerturn) {
    if (!wrap_around_left(tiles, index) && index + 3 < tiles.length)
    {
        if (tiles[index] === playerturn && tiles[index + 1] === playerturn
            && tiles[index + 2] === playerturn && tiles[index + 3] === playerturn)
        {
            return true;
        }
    }

    if (!wrap_around_right(tiles, index) && index - 3 >= 0)
    {
        if (tiles[index] === playerturn && tiles[index - 1] === playerturn
            && tiles[index - 2] === playerturn && tiles[index - 3] === playerturn)
        {
            return true;
        }
    }
    return false
}

function vertical_win(tiles, index, playerturn) {

    if (tiles[index] === playerturn && tiles[index - 7] === playerturn
        && tiles[index - 14] === playerturn && tiles[index - 21] === playerturn) {

        return true;
    }

    else if (tiles[index] === playerturn && tiles[index + 7] === playerturn
        && tiles[index + 14] === playerturn && tiles[index + 21] === playerturn) {

        return true;
    }

    return false;

}

function diagonal_win_right(tiles, index, playerturn) {
    if (tiles[index] === playerturn && tiles[index + 8] === playerturn
        && tiles[index + 16] === playerturn && tiles[index + 24] === playerturn) {

        return true;
    }

    else if (tiles[index] === playerturn && tiles[index - 8] === playerturn
        && tiles[index - 16] === playerturn && tiles[index - 24] === playerturn) {

        return true;
    }

    return false;

}


function diagonal_win_left(tiles, index, playerturn) {
    if ((tiles[index] === playerturn) && (tiles[index + 6] === playerturn)
        && (tiles[index + 12] === playerturn) && (tiles[index + 18] === playerturn)) {


        return true;
    }

    else if ((tiles[index] === playerturn) && (tiles[index - 6] === playerturn)
        && (tiles[index - 12] === playerturn) && (tiles[index - 18] === playerturn)) {


        return true;
    }

    return false;

}


function wrap_around_left(tiles, index)
{
    return Math.floor(index / 7) !== Math.floor((index + 3) / 7);

}

function wrap_around_right(tiles, index)
{
    return Math.floor(index / 7) !== Math.floor((index - 3) / 7);

}

function diagonal_wrap_right(tiles, index)
{
    //check if pieces are in the same column
    const first = Math.floor(index / 7) //column of first index. should be incramenting columns
    const second = Math.floor(index + 8 / 7);
    const third = Math.floor(index + 16 / 7);
    const fourth = Math.floor(index + 24 / 7);


}


