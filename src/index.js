/*
Create a button using React syntax: 
When the button is clicked on, an alert winder should appear

Notes:
Button text: "Click me!"
Alert window text: "Congrats! The button worked!"

What needs to be done: 
1. Create a folder to hold project files
2. Install Create React App in project folder
  Instructions: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
3. Find out which events can handle the click of a button
  -onClick
  -handleClick
4. Find out how to make the alert window to appear when the button is clicked on

Don't forget: 
import React from 'react';
import ReactDOM from 'react-dom/client';
(I initally forgot do import these :)

Optional: 
CSS for the button?

*/

import React from 'react';
import ReactDOM from 'react-dom/client';


//<div id="root"></div>

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
//   );

//   const element = <h1>Hello, world!</h1>;
//   root.render(element)
  

//create button


class MyButton extends React.Component {
   
  render() {
      const shoot = () => {
      alert("You did it!");
    }
    //return <h1>Button will go here??</h1>
    return (
      <button onClick={shoot}>Click me!</button>
      );
  }
}

//display the button on the screen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyButton />);

//When button is clicked, show an alert window with text


