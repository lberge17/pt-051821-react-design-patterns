# Client Side Routing

## Objectives: 
- Understand Client Side Routing OUTSIDE the context of React
- Understand the mechanics of using it within react with react-router-dom
- Understand the advanced abilities of react-router-dom such as switch, passing props to components, exact path vs path, etc


### What is client side routing?

- First of all, whats server side routing?

- So, what do you think client side routing is?

- Benefits to Client side routing?

- Benefits to Server side routing?


### Client side is not something specific to react.

Let's look at how this acheived with JS: 

There are 2 things I can call:
```js
    window.location.href = '/path'
    //or window.location = '/path
    
```
The above DOES fire off an HTTP request to that route UNLESS the only change is to the hash (e.g. `www.site.com/todos#some-anchor`)

<br/> 

OR 
<br/> 

I can do the following: 

```js
    window.history.pushState(
        {state: 'info'},
        'page title (mostly unused)',
        '/new/path'
    )
```

This does NOT fire off a new HTTP request no matter what, and allows me to save state to the session

<br/>

## Ok, so how does this work in React??

- Most of this is made for us already, so we just need to know the API of the components that do all the above dirty work for us!

1. [V6 Docs (new)](https://reactrouter.com/docs/en/v6/getting-started/overview)
2. [V5 Docs (in curriculum)](https://v5.reactrouter.com/)

## Key Concepts

- Router Props: match (access params), history, and location
- Switch Component (or with v6 Routes component)
- Route Component
- Link and NavLink Components