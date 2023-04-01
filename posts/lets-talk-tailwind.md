---
title: "Let's Talk Tailwind"
date: "2020-03-02"
imagePath: "/blog/lets-talk-tailwind/latest.jpg"
extract: "salamander a lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly"
category: "Other"
heroImage: "/blog/lets-talk-tailwind/hero.jpg"
lead: "Unless you've been living under a rock for the last couple of years, you've probably heard of Tailwind CSS. If not, you've come to the right place."
---

### What is Tailwind CSS?

On the official site Tailwind CSS is described as "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup." So what does that mean? Basically, instead of writing out custom CSS for each component you write pre-existing classes (Tailwind classes) for each style that your HTML requires as you write the markup. This saves us building out large CSS files that grow as we progress through the build.

Take a look below at Tailwind being used for the title and date etc... at the top of this blog page in the picture below. The parent element on **line 16** has the equivalent of **display: flex; flex-direction: column; align-items: center;** declared using Tailwind classes. The bullet-type elements on **lines 20/22** have the equivalent of **height: 0.25rem; width: 0.25rem; border-radius: 9999px; --tw-bg-opacity: 1; background-color: rgb(31 31 31 / var(--tw-bg-opacity)); margin-left: 0.75rem; margin-right: 0.75rem;**

![tailwind css for blog page](/blog/lets-talk-tailwind/first.jpg)

Tailwind works by scanning all of your HTML files and JavaScript components, generating the corresponding styles and then producing a static CSS file to use. All of the aforementioned classes above in bold are available out of the box after a simple setup. If you look at line 17 you will see the class **font-poppins**. This is a custom configuration which I will talk more about later on.

### How do you use Tailwind?

It is fairly simple to start using Tailwind. The following two commands will install Tailwind and create your 'tailwind.config.js' file.

**npm install -D tailwindcss**

**npx tailwindcss init**

The next thing to do is open the config file that was created and add any paths which need to be scanned for class names. The image below shows the default config file used when specifying Tailwind that it is to be used in a Next.js project, like this blog.

![tailwind css config intial setup](/blog/lets-talk-tailwind/second.jpg)

Following this, we need to add the Tailwind directives to the existing main CSS file. In our case it is globals.css.

![tailwind css config intial setup](/blog/lets-talk-tailwind/third.jpg)

Once this is done we can run the CLI tool to scan our template files for classes and build our CSS using this command.

**npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch**

Well done! You should now have Tailwind working in your project. Now all you have to do is start using Tailwind classes. You will start picking up common ones very quickly and needing to look up less and less the longer you use Tailwind. You will also notice that some of them share the same names as other CSS framework classes like Bootstrap.

### Can you customise Tailwind?

Yes, Tailwind can be customised. If you are building something very bespoke or something where uncommon styles need to be repeated a lot then this is very helpful. It is also needed when defining things like the breakpoints and theme fonts of a project. Extending the theme is very simple. All you need to do is input your chosen styles in the config file and use these in your class names.

![tailwind css config intial setup](/blog/lets-talk-tailwind/fourth.jpg)

Remember our **font-poppins** class name from earlier? This is using the custom font style defined in our config file. Have a look at **line 30** as well. Let's say our designer is insisting than certain elements need to be exactly 3px tall. We _could_ use **class="h-[3px]"** over and over again but if this is to be used a lot then it makes more sense to add the style to our config file.

### Should I use Tailwind?

I would recommend Tailwind to most developers. It is simple to learn and set up and it is a massive time saver, especially if you are building sites with "usual" styles. When it comes to building highly bespoke or interactive designs using conditional classes, I'm not sure it has saved me time in these situations. I think I could have written out the classes using CSS/SCSS in the same time or even quicker. But you can always write alternative CSS in a Tailwind project if you think Tailwind isn't the answer for every situation.

Furthermore, the traction that Tailwind has gained means that you are likely to find it if you collaborate on modern projects sooner or later. I've also seen it mentioned in job adverts. For the little time it takes to start working with Tailwind, there is every reason to learn it.
