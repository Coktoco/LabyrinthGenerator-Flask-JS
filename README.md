# LabyrinthGenerator-Flask-JS

Maze Generation Program

This project is a web-based application for generating mazes using the Depth-First Search (DFS) algorithm. The user can interactively specify the size of the maze and generate new random mazes without refreshing the page.

*Project is only available in polish*

Features

	•	Users can define the width and height of the maze, which translates to the number of cells along each dimension.
	•	The maze entrance is always at the top-left corner, and the exit is at the bottom-right corner.
	•	Mazes are generated using a DFS-based algorithm, ensuring random and unique mazes on every generation.
	•	The page does not refresh between maze generations, allowing for continuous interaction.

Maze Generation Algorithm

	•	The maze is represented as a two-dimensional array where each cell has four walls and a visited flag.
	•	The DFS algorithm explores the maze by removing walls between cells to create a path. It uses a stack to backtrack when no further unvisited neighbors are available.
	•	The shuffle function ensures random direction choices during maze generation, providing diverse maze layouts.

Tech Stack

	•	Flask: Server-side logic and routing.
	•	JavaScript: Core logic for maze generation and DOM manipulation.
	•	CSS: Grid-based styling and layout for the maze.
	•	Bootstrap: Used for UI responsiveness and additional styling.

Screenshots:

<img width="611" alt="image" src="https://github.com/user-attachments/assets/518e5751-f000-4191-918d-43b4bd13de09">

<img width="645" alt="image" src="https://github.com/user-attachments/assets/0788d760-7026-4248-91b6-94a3bd8b6f3e">

<img width="659" alt="image" src="https://github.com/user-attachments/assets/d70c7421-f907-4e61-a4a2-8625686869d8">
