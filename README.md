# Exercise 2: Build a basic calculator 

## Due Date: Tuesday, January 21, 2020 11:59 PM
## Objectives: Practice keeping track of state and passing data around to child components as props, as well as lifting state up.

## Specifications/Requirements
1. In this exercise you need to complete the definitions of 3 componenets:
  * `KeyPad.js`  
  * `Result.js` 
  * `App.js`  

The `KeyPad` component should display the UI containing all the keys and inputs the user will need to interact with. 
The `Result` component should display the UI displaying the entered values, actions and result of a calculation.  
All the logic and state should be maintained inside of the `App` component.

__Hint: Since state is being maintained in the `App` component you will need to provide a function to the necessary child components so that they can communicate with the state of the parent component__  

__Note: All the necessary styles have been defined for you. You may not create any additional files other than the ones we provide you with.__ 