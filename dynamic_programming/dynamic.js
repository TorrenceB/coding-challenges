
/*  Instructions: Dynamic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *  Problem: Lattice Paths (Dynamic Programming Approach)
 *
 *  Prompt:    Count the number of unique paths to travel from the top left
 *             to the bottom right of a lattice of squares.
 *
 *             NOTE: You are traveling along the **EDGES** of the lattice
 *
 *  Input:     An integer N (which is the width of the lattice)
 *             An integer M (which is the height of the lattice)
 *
 *  Output:    An interger (which represents the number of unique paths)
 *
 *  Example:   input: 2
 *
 *             (2 x 3 lattice of squares)
 *              __ __ __
 *             |__|__|__|
 *             |__|__|__|
 *
 *             output: 10 (number of unique paths from top left corner to bottom
 *                     right)
 *
 *             Diagram:
 *
 *             1__1__1__1
 *             |  |  |  |
 *             1__2__3__4
 *             |  |  |  |
 *             1__3__6__10
 *
 *  Notes:     What is the time and auxilliary space complexity of your solution?
 *
 *             When moving through the lattice, you can only move either down or
 *             to the right.
 *
 *             You did this problem before with recursion. Try implementing it
 *             now with dynamic programming!
 *
 *  Resources:
 *    1: https://projecteuler.net/problem=15
 *    2: https://en.wikipedia.org/wiki/Lattice_path
 *
 */

// Time Complexity:
// Auxiliary Space Complexity:
function latticePaths(m, n) {
  //YOUR WORK HERE
}
