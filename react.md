HTML

1. HTML5 APIs

2. Doctype

3. HTML5 tags

4. Image Map

CSS

1. Box Model - In CSS,, the term Box Model is used when talking about design and layout. Its essentially a box that wraps around every HTML element, it consists of a margins, borders, padding, and the actual content.

2. Flexbox - Its a layout that allows responsive elements within a container to be automaticlly arranged depending on the screen size

3. CSS Grid - its a 2 dimensional grid based layout system that works either as an alternative or alongside flexbox

4. !important - the negation operation 2 === 2 is true but 2 !== 2 is false

5. CSS Preprocessors - a program that lets you generate css from the preprocessors own unique syntax

6. Media Queries - is a feature to allow content to be rendered differently based on a condition. The most commong condition being screen size. (finding breakpoints)

7. CSS selectors - it selects the html element you want to style

8. Pseudo Elements/Classes - a keyword added to a selector that lets you style a specific part of the selected element

9. CSS Layout (Positioning) the position property specifies the type of positioning method used for an element
   static - not positioned in any special way, but just according to the normal flow of the page
   relative - it positioned relative to its normal position
   fixed - is positioned relative to the viewport, which means it always stays in the same place even when the page scrolls
   absolute - is positioned relative to the nearest positioned ancestor
   sticky - is positioned based on the users scroll position

JAVASCRIPT

1. Hoisting - Javascripts behind the scenes moving of declarations to the top. Like variables stored to the global scope, even if its down the code, Javascript declares it kind of at the top, regardless of where it is.

2. Closures
   Making a global varibable into a local (block and function)

3. OOJS - Object oriented javascript is a libary for working with objects, such as inheritence, mixins, static inheritance, and other tools for objects and arrays.

4. Asynchronous JS (Promises, Callbacks, Async Await)

5. Javascript Design Patterns

6. ES6 (Import/Export, Arrow fxns, Spread Operator, map fxn, let/const, ==/===)

- Import/Export is being able to pass moduels around javascript. For example if you download an NPM package, you'd have to import the module to get the desired functionality. Export is then to move things around to different files. I understand it, but its hard to write in words.

- Arrow Functions - introduced in ES6 and they allow us to write shorter function syntax

  - regular function

    hello = function() {
    return "Hello World!";
    }

  - Arrow function

    hello = () => {
    return "Hello World!";
    }

  - spread operator - it takes in an iterable (an array) and expeands it into individual elements.
    - the most common use is making shallow copies of arrays/objects
  - ...
  - let array1 = ['h', 'e', 'y'];
    let array2 = [...array1];
    console.log(array2);

  - Let/Const are mean to replace the old var keyword for varibales. Lets can be reassinged, and consts can't.

    - there are other differences as well, like how they behave on the scope, Var was globaly scoped, but let/const have access to block/function scoping as well. Var and Let can be declared without being initialzied, const must be initiialized during declaration

  - Map fnx - I'm assuming this is the map() method. It creates a new Array populated with the results of calling a provided function on every element in the calling array.

7. Primitive and reference datatypes

   - a Primative datatype is data that is not an object and has no methods.
     - There are 7 primative data types in javascript; string, number, boolean, biginit, undefined, symbol, null
   - a reference data type is data that is passed by reference.
     - There are 3 reference data types; Arrays, Functions, and Objects.

8. Object, Array and String APIs

   - Objects are a stand alone entity with properties and type. It typically stores key-value pairs of data
   - Arrays are used to store multiple values in a single variable. Javascript treats them like objects, and although objects can techncially hold more data (key/value), Arrays has access to the index, meaning you don't have to know what the data is to access it, you can just pull up the data in an array by an index. On Object you can't do that.
   - String API's, ??? I know what strings are and I know what API's are, but even google is stumped by what this can be.

9. JS running on backend

10. JS famous libraries

NODE JS

11. Express js server

12. Restful API

13. CRUD operations

14. Npm - to download packages

15. Package.json postmortem

16. Callback hell

17. Event Loop

18. Introduction to GraphQL

REACT

19. Introduction to React and installation
    simple, npx create-react-app in the terminal

20. Introducing JSX

21. Class based components

22. Functional Components

23. Pure, Controlled and Uncontrolled Components

24. React Hooks (useState, useEffect, custom hook)

25. State and Props

State allows components to create and manage their own data. Unlike Props, components cannot pass data with state

Props is short for properties, and they are used to pass data between React components. It goes in the directon from Parent to Child

8. Handling events

9. Synthetic events

10. Conditional rendering

11. Refs and Forwarding refs

12. Code splitting

13. Higher order components

14. Context API

- The React Context API is a way for a React app to effecitvly produce global variables that can be passed around.

15. Portals

- is a way to render child components into a DOM node outside of the parent DOM heirarchy by the component tree hierarchy
- The most commong use case of a Portal is when a child component needs to visually break out of the parent container

16. Virtual DOM

17. React Lifecycle methods

18. Type Checking with Proptypes

19. Error handling

20. Server Side rendering .

21. axios data fetch,

22. CORS Policy error handling

REDUX

- Redux is a library that allows Javascript apps to manage application state

1. Actions - An object containing a type and a payload, used to tell the reducer how to update the store

2. Reducers - a function that takes in the initial state and an action, and which returns that specific part of the global store

3. Combined Reducer - a functon from redux that allows us to put together all our reducers into a single object (often called the root reducer)

4. Connect - a functon from react-redux that allows us to connect a component to the store by adding items from the store to our component props, as well as adding dispatch to out component props

5. Provider - a component from react-redux that wraps our app component and allows each child component to be connected to the store.

6. BindActionCreator (actionCreator anyway) a function that takes in a payload and creates an action object

7. MapstateToProps/ MapDispatchToProps

- MapStateToPros - a function we create that takes in a global state object and returns an object to be added to a component as part of its props object; it allows the component to access the data in the store.

- MapDispatchToProps - a function we create that takes in dispatch and returns an object to be added to a component as part of its props object; it allows the component to update the data in the store.

8. Store and CreateStore - an object; think of it as a mega state that it accessed and updated with its own functions(similar to how React state is updated with setState)

9. Dispatch - a function from Redux that sens and action object to its reducer (which updates the store)

10. Types

11. payload - is what is keyed (the key value pairs) in your actions and passed around between reducers in your redux applicaton.

THIRD PARTY USEFUL APPS AND PACKAGES

1. React Bootstrap

2. Material UI

3. Semantics UI React

4. Ant Design

5. social media login auth

DEPLOYMENT

1. Deployment of the App on Github pages/heroku

2. Intergration with other libraries

PROJECTS

1. Role Based User Auth Login APP

2. Portfolio
