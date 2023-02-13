const schemas = require('../schemas')
module.exports = function(grid){
    console.log('looking')
    return schemas.RoomDB.findById(player.room).then(function(room){
        // Get the maximum x and y coordinates of the points
        const maxX = Math.max(...points.map(p => p.x));
        const maxY = Math.max(...points.map(p => p.y));

        // Create a grid of empty cells
        const grid = new Array(maxY + 1).fill(null).map(() => new Array(maxX + 1).fill("."));

        // Add the points to the grid
        for (let i = 0; i < points.length; i++) {
            const x = points[i].x;
            const y = points[i].y;
            grid[y][x] = "X";
        }

        // Print the grid
        for (let i = 0; i < grid.length; i++) {
            console.log(grid[i].join(" "));
        }
    })

}