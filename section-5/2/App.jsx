import Die from "./Die.jsx"
/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop. Should
 *   render a button with that value displayed.
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

export default function App() {
    return <main>
    <Die number ={1}/>
    <Die number ={2}/>
    <Die number ={3}/>
    <Die number ={4}/>
    <Die number ={5}/>
    <Die number ={6}/>
    <Die number ={1}/>
    <Die number ={2}/>
    <Die number ={3}/>
    <Die number ={4}/>
    
    </main>
}