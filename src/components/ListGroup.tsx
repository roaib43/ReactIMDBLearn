import { MouseEvent, useState } from "react";

/*
Props == Properties, these are inputs to components, we can provide the data dynamically
         to our components using props interface
         we will create an interface to take name of list and list of items 

*/

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup(props: ListGroupProps) {
  //let items = ["Bangalore", "Lisbon", "Braga"];
  //items = [];

  //creating a function to return something

  // now to access items, we can use props.items
  // or we can destructre props like below
  // function ListGroup({items, heading}: ListGroupProps) - I am not going to destructure
  function getMessage() {
    return props.items.length === 0 ? <p>No items found</p> : null;
  }

  //Moving the onClick code here
  //when create own function we need to speicfy the type of the parameter
  const handleClick = (event: MouseEvent) => console.log(event);

  /*
  Now... 
  
  Its called a hook, with useState we can tell react that this component will have data or state that can change overtime
  so then react know it has to redenr the DOM
  useState(0)

  Generally the useState hook is gonna return an array which has 2 elements
  1st element is the varaible that can be modified
  2nd element is going to be the updater function - using this function we can update the varaible and react will be 
  noticed that DOM needs to rendered
  */

  const [selectedIndex, updatedSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage()}
      {/* 
      The below code (Ln 16) is learning curve, In JS if the express is true
      && 'something', then the expression always returns 'something', if not
      true then it returns false 
      Eg: console.log(true && 'roaib') -> returns 'roaib' 
          console.log(false && 'roaib) -> returns false
      */}
      {props.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* index is optional parameter */}
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //onClick={() => console.log("Its Clicked on", item, index)}
            /*
            the above onClick function can also be written this way. 
            onClick={function () {
              console.log("Clicked");
            }} 
            */

            //To see what event just happened use below code
            //onClick={(event) => console.log(event)}

            //we are not calling the function we are just passing reference
            onClick={() => updatedSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
