class FancyMazeBuilder extends MazeBuilder {
    // Original JavaScript code by Chirp Internet: www.chirpinternet.eu
    // Please acknowledge use of this code by including this header.
    // taken from https://www.the-art-of-web.com/javascript/playable-maze-generator/ and adapted to the needs of this game
    constructor(width, height) {
        super(width, height);
        this.removeTreats();
        this.addTreats();
    }

    isA(value, ...cells) {
        return cells.every((array) => {
            let row, col;
            [row, col] = array;
            if ((this.maze[row][col].length == 0) || !this.maze[row][col].includes(value)) {
                return false;
            }
            return true;
        });
    }

    removeTreats() {
        this.maze.slice(2, -2).forEach((row, idx) => {
            let r = idx + 2;
            row.slice(2, -2).forEach((cell, idx) => {
                let c = idx + 2;
                if (!this.isA("wall", [r, c])) {
                    return;
                }
                if (this.isA("wall", [r - 1, c - 1], [r - 1, c], [r - 1, c + 1], [r + 1, c]) && this.isGap([r + 1, c - 1], [r + 1, c + 1], [r + 2, c])) {
                    this.maze[r][c] = [];
                    this.maze[r + 1][c] = ["treat"];
                }
                if (this.isA("wall", [r - 1, c + 1], [r, c - 1], [r, c + 1], [r + 1, c + 1]) && this.isGap([r - 1, c - 1], [r, c - 2], [r + 1, c - 1])) {
                    this.maze[r][c] = [];
                    this.maze[r][c - 1] = ["treat"];
                }
                if (this.isA("wall", [r - 1, c - 1], [r, c - 1], [r + 1, c - 1], [r, c + 1]) && this.isGap([r - 1, c + 1], [r, c + 2], [r + 1, c + 1])) {
                    this.maze[r][c] = [];
                    this.maze[r][c + 1] = ["treat"];
                }
                if (this.isA("wall", [r - 1, c], [r + 1, c - 1], [r + 1, c], [r + 1, c + 1]) && this.isGap([r - 1, c - 1], [r - 2, c], [r - 1, c + 1])) {
                    this.maze[r][c] = [];
                    this.maze[r - 1][c] = ["treat"];
                }
            });
        });
    }

    addTreats() {
        this.maze.slice(2, -2).forEach((row, idx) => {
            let r = idx + 2;
            row.slice(2, -2).forEach((cell, idx) => {
                let c = idx + 2;
                if (!this.isA("treat", [r, c])) {
                    return;
                }
                if (this.isA("treat", [r - 2, c])) {
                    this.maze[r - 2][c].push("wall");
                    this.maze[r - 1][c] = ["treat", "wall"];
                    this.maze[r][c].push("wall");
                }
                if (this.isA("treat", [r, c - 2])) {
                    this.maze[r][c - 2].push("wall");
                    this.maze[r][c - 1] = ["treat", "wall"];
                    this.maze[r][c].push("wall");
                }
            });
        });
    }
}