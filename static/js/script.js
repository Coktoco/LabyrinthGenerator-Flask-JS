document.addEventListener("DOMContentLoaded", function() {
    generateMaze();
});

function generateMaze() {
    let size = parseInt(document.getElementById('size').value);
    let mazeContainer = document.getElementById('maze');
    mazeContainer.innerHTML = '';
    mazeContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;

    let maze = createMaze(size, size);

    // Wyświetl labirynt
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';

            if (maze[i][j].top) {
                let wallTop = document.createElement('div');
                wallTop.className = 'wall wall-top';
                cell.appendChild(wallTop);
            }
            if (maze[i][j].right) {
                let wallRight = document.createElement('div');
                wallRight.className = 'wall wall-right';
                cell.appendChild(wallRight);
            }
            if (maze[i][j].bottom) {
                let wallBottom = document.createElement('div');
                wallBottom.className = 'wall wall-bottom';
                cell.appendChild(wallBottom);
            }
            if (maze[i][j].left) {
                let wallLeft = document.createElement('div');
                wallLeft.className = 'wall wall-left';
                cell.appendChild(wallLeft);
            }

            mazeContainer.appendChild(cell);
        }
    }
}

function createMaze(width, height) {
    let maze = [];
    for (let i = 0; i < height; i++) {
        maze[i] = [];
        for (let j = 0; j < width; j++) {
            maze[i][j] = { top: true, right: true, bottom: true, left: true, visited: false };
        }
    }

    let stack = [];
    let startX = Math.floor(Math.random() * width);
    let startY = Math.floor(Math.random() * height);
    maze[startY][startX].visited = true;
    stack.push([startY, startX]);

    while (stack.length > 0) {
        let [x, y] = stack.pop();
        let directions = shuffle([[1, 0], [-1, 0], [0, 1], [0, -1]]);

        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx >= 0 && nx < height && ny >= 0 && ny < width && !maze[nx][ny].visited) {
                maze[nx][ny].visited = true;
                if (dx === 1) {
                    maze[x][y].bottom = false;
                    maze[nx][ny].top = false;
                } else if (dx === -1) {
                    maze[x][y].top = false;
                    maze[nx][ny].bottom = false;
                } else if (dy === 1) {
                    maze[x][y].right = false;
                    maze[nx][ny].left = false;
                } else if (dy === -1) {
                    maze[x][y].left = false;
                    maze[nx][ny].right = false;
                }
                stack.push([nx, ny]);
            }
        }
    }

    // Tworzymy punkt wejścia i wyjścia
    maze[0][0].left = false; // Entrance
    maze[height - 1][width - 1].right = false; // Exit

    return maze;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
