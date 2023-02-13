module.exports = {
    async parseCommand(player, cmd){
        const commands = {
            "travel" : require('../commands/travel.js'),
            "look" : require('../commands/look.js') 
        }
        if(!typeof cmd == 'String'){
            return "ERROR: parseCommand must be provided a string"
        }
        let words = cmd.toLowerCase().split(' ')
        if(typeof commands[words[0]] == "function"){
            return commands[words[0]](player, words, cmd) 
        } else {
            return `Unknown command "${cmd}".`
        }
    },

    printMap(){
        // Function to draw a grid with points on it
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
    }
}