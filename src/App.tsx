import reactLogo from './assets/react.svg'
import './App.css'
// - Start a new project✅
// - Create components, similar to the Button component Nico built during the lecture. ✅
//   - Button: should return a button styled however you like. Make it use a few useful custom props similar to how Nico used them during the lecture - like size or variant.✅
//     - Input: returns a label and an input under it, both customizable.✅
//   - CheckboxGroup: a group of checkboxes. The component should take:
//     - an array of items and render a list of checkboxes based on them. (Think what should go into the array!)
//     - an onSelect: selecting a checkbox should run the function. Make sure you can check which checkbox you selected.
//     - RadioGroup: A group of radio buttons. Same idea as the checkbox group:
//         - takes a list of items and renders radio buttons for each of them
//     - onSelect which runs the function we pass to the component.
// - Test your components by using them in App and giving them some test data.
function App() {
  return (
    <div className="App">
      <button onClick={() => {
        alert("You can't go back on life so live it sa much as you can...")
      }}>Back</button>
      <input type="submit" onClick={() => {
        alert("You broked your oun hart no one else did so just focuse on your self")
      }} />
      <ul>
        <input type="checkbox" onSelect={() => {
         alert('do not get trolled')
        }} />
        <input type="checkbox" onSelect={() => { 
         alert('I SEAD do not get trolled')
        }} />
        <input type="checkbox" onSelect={() => { 
         alert('if you select the others you will get trolled')
        }} />
        <input type="checkbox" onSelect={() => { 
         alert('your LAST CHANSE')
        }} />
        <input type="checkbox" onSelect={() => { 
          alert('got to go sleep to late to change enything')
        }} />
      </ul>

    </div>
  )
}

export default App
