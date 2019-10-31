# Build Order

1. Take `App` component from index.js and put it in `components` directory as a separate App.js file.
2. From `App.js`, compose core components inside return()

- Navbar
- Responsive Container
  - TextInput
  - FilterSelecter
  - TodoList (display filtered results)

3. Create each component from above with mockups and placeholders so that we can visually see the overall shape of our app.
4. Decide storeState's shape (for now).  
   It should at least contain the following:
   - current filter type: SHOW_ALL | SHOW_COMPLETED | SHOW_ACTIVE
   - array of todos: `{ id: string, text: string, completed: bool}`
5. Think about which core component needs to connect to the storeState.
   For the components that do:
   -
   - We need to export that core component wrapped inside return function from Redux.connect

## Core Components

- **Navbar**
  - Presentational. No functionality. Just Logo (for now).
- **AddTodo**
  - Container (dispatching action against the store: addTodo)
  - Presentational (triggers cbs from event, we can actually "see" this component)
  - text input and a button wrapped inside of a form element
  - We can add a ref to input in order to temporarily store the `input.value`.
  - We are not passing any of mapProps functions into `connect` because we don't need any state from the store. (remember: we're using `ref` to store input values to a variable inside this component before `render()`)
- **SelectFilter**
  - Lists available filtering options (`FilterLink`)
  - Displaying options are nested as content node (e.g. All, Active, and Completed)
  - We pass 'filter' prop with hardcoded-value to each `FilterLink`. Users can click these FilterLink to trigger handlers that dispatch "SET_VISIBILITY_FILTER" action. Each of these actions also contains the specified filter type as a payload.
  - `FilterLink`
    - Container component wrapping 'Link' component.
    - Injects state (from the redux store), ownProp ('children' and 'filter'), and a event handler('onClick') into `Link` component. 'onClick' dispatches the action returned from "setVisibilityFilter" action creator. "setVisibilityFilter" takes 'filter' as an argument and include its value in the returning action object as payload.
    - mapStateToProps
      - passes 'active' prop which compares 'ownProps.filter' with 'state.visibilityFilter'
      - `active : true` if passed filter type matches state's current filter type (visibilityFilter).
        \*IMO, 'visibilityFilter's naming convention is not clear enough. It makes you think 'What is visibilityFilter?'. Names should ALWAYS BE SELF EXPLANATORY.
    - `Link({ active, onClick, children })`
      - Presentational component
      - Renders a button element
      - styles the button conditionally on 'active' prop
- **VisibleTodoList**
  - Container component wrapping 'TodoList' component.
  - mapStateToProps
    - provides a prop 'todos' whchi is set to the return of a function, 'getVisibleTodos'.
    - `getVisibleTodos(todos, filter)` takes `state.todos` and `state.visibilityFilter` and returns different array based on `filter` value.
  - mapDispatchToProps
    - provides a event handler `toggleTodo`.
    - 'toggleTodo' dispatches the action from `toggleTodo` action creator.
      - 'toggleTodo' action creator takes an id(string) and returns an action of type "TOGGLE_TODO" and the passed id.
      - the reducer `todos` returns new state based on the given action type. If it's "TOGGLE_TODO", todos will return a new array of todos where the todo with matching id is updated with toggled 'completed' field
      - It is the redux store that actually calls the corresponding reducers to update storeState with their return values when an action is dispatched against the store
  - `TodoList`
    - Renders a list of `Todo` components mapped from the passed `todos` prop.
    - passes along state of each todo as props to Todo using "spread attributes" `{...todo}`
    - Also passes `onClick` assigned to the callback executing `toggleTodo` which dispatches the toggle action with payload(id).
    - `Todo`
      - renders `children` prop passed from `TodoList` inside a styled `li` element
      - `li` element is styled conditionally on `completed` prop passed from `TodoList`
      - Event attribute `onClick` is set to the 'onClick' prop passed from `TodoList`
