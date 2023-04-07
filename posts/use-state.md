---
title: "Understanding useEffect"
date: "2023-01-02"
imagePath: "/blog/use-state/latest.jpg"
extract: "After useState, the useEffect hook is the most commonly used and necessary to understand. Once you get your head around when to use it, you will realise how important..."
category: "React"
heroImage: "/blog/use-state/hero.jpg"
lead: "After useState, the useEffect hook is the most commonly used and necessary to understand. Once you get your head around when to use it, you will realise how important it is."
mins: ""
---

### A Refresher on Hooks

React Hooks were a big part in the general shift from class-based components to functional components. Hooks allow us to utilise state and other React functions without writing traditional classes and making use of the lifecycles methods such as **componentDidMount()**. The built-in Hooks that come with React include useState, useEffect and useRef. These are simple JavaScript functions that "hook-in" to state and lifecycle methods. **useState** is the simplest and most common way to establish and manipulate state in small React applications, **useRef** allows us to persist mutable values between renders, and **useEffect** gives us the option of invoking side-effects.

### Side Effects

Side effects are are not-so-easy to grasp principle in computer science but it is essential that you understand what they are and therefore start using useEffect in the right situations. **Side effects can be defined as anything that results in changes that can be observed when the calculation is completed, beside the return value of the calculation itself.**

In the context of React, a side effect is something that falls outside the scope of React. **Handling localStorage, logging messages to the console, and fetching data are all React side effects**.

### useEffect Syntax

You should only call Hooks from React functions and not regular JavaScript ones. You should also place them at the top level of your function, before early returns. This ensures that everything is called in the same order each render, and React doesn't start confusing pieces of state. Do not place them inside loops, conditions, or nested functions either. If your useEffect Hook is to involve conditional logic, put the logic inside useEffect.

![tailwind css for blog page](/blog/use-state/first.jpg)

Take a look at **rows 3 and 7** to see how to implement useEffect. Since setting a localStorage value falls outside the scope of React this should be done inside useEffect. useEffect takes **two arguments**. The **first is a function** and the **second is an optional dependency array**. Notice that our dependency array on **line 9** is empty. This tells the Hook to **run only on first render**. If we removed the array, useEffect would **run on every render**.

Now let's look at a slightly more complex situation involving state. This time we cannot choose our dependencies. Since our Hook uses the reactive value _name_ we must declare it as a dependency. If _name_ changes, localStorage will be reset.

![tailwind css for blog page](/blog/use-state/second.jpg)
