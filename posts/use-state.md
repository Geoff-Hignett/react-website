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

React hooks can be credited with the general shift from class-based components to functional components. Hooks allow us to use state and other React functions without writing traditional classes and making use of the lifecycles methods such as **componentDidMount()**. The built-in hooks that come with React include useState, useEffect and useRef. These are simple JavaScript functions that "hook-in" to state and lifecycle methods. **useState** is the simplest and most common way to establish and manipulate state in small React applications, **useRef** allows us to store mutable values between renders, and **useEffect** gives us the option of invoking side-effects.

### Side Effects

Side effects are are not-so-easy to grasp principle in computer science but it is essential that you understand what they are and therefore start using useEffect in the right situations. According to Wikipedia, a function is said to have a side effect if it "modifies some state variable value outside its local environment, which is to say if it has any observable effect other than its primary effect of returning a value to the invoker of the operation". A slightly nicer attempt at a definition might be "Anything that results in changes that can be observed when the calculation is completed, beside the return value of the calculation itself".

In the context of React, you could say that most things that aren't returning JSX are side effects.
![tailwind css for blog page](/blog/lets-talk-tailwind/first.jpg)
