# Question and Answer
1. What is JSX, and why is it used?
   
Ans: JSX stands for JavaScript XML.It lets us write HTML-like code inside JavaScript. Look like HTML but  more powerful.
##

2. What is the difference between State and Props?
   
Ans: 
## State:

- A component’s own data (private).

- Can change over time (mutable).

- Example: A counter value that updates when a button is clicked.

## Props:

- Data passed from parent to child component.

- Read-only (cannot be changed by the child).

- Example: A title sent from parent to child component.
##

3. What is the useState hook, and how does it work?

useState is a React Hook to add state to functional components.

const [count, setCount] = useState(0);
here,
count -> current state value.

setCount -> function to update the state.

useState(0) -> initial value is 0.

Every time state changes, React re-renders the component.
##
4. How can you share state between components in React?

- Lift state up: Keep the state in a parent component and pass it to child via props.
##
5. How is event handling done in React?

we pass a function to handle the event.
The function can be written inside the component and then attached to the element.
- Example:
```jsx
function App() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
