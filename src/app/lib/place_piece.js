function place_piece(column, tiles)
{
    for (let i = column.length - 1; i >= 0; i--)
    {
        if (tiles[column[i]] == null)
        {
            return column[i];
        }
    }
}

function column_is_full(column, tiles)
{
    for (let i = column.length - 1; i >= 0; i--)
    {
        if (tiles[column[i]] === null)
        {
            return false;
        }
    }
    return true;
}


export function check_column(column, tiles)
{
    if (column_is_full(column, tiles))
    {
       return;
    }

    return place_piece(column, tiles);
}


