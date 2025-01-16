export function check_win(tiles, index, playerturn)
{
    if (horizontal_win(tiles, index, playerturn) || vertical_win(tiles, index, playerturn)
        || diagonal_win_right(tiles, index, playerturn) || diagonal_win_left(tiles, index, playerturn))
    {
        console.log("win");
        return true
    }
}

function horizontal_win(tiles, index, playerturn)
{

    if (tiles[index] === playerturn && tiles[index + 1] === playerturn
        && tiles[index + 2] === playerturn && tiles[index + 3] === playerturn)
    {
        return true;
    }


    else if (tiles[index] === playerturn && tiles[index - 1] === playerturn
        && tiles[index - 2] === playerturn && tiles[index - 3] === playerturn)
    {

        return true;
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

        console.log("win");
        return true;
    }

    else if ((tiles[index] === playerturn) && (tiles[index - 6] === playerturn)
        && (tiles[index - 12] === playerturn) && (tiles[index - 18] === playerturn)) {


        return true;
    }

    return false;

}


