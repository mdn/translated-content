---
title: Понимание JavaScript-фреймворков для фронтенда
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---

{{LearnSidebar}}
JavaScript-фреймворки являются неотъемлемой частью современной веб-разработки,предоставляя разработчикам проверенные и протестированныеинструменты для создания масштабируемых и интерактивных веб-приложений. Многиесовременные компании используют фреймворки для своих решений, поэтому многие задачи связанные с разработкой клиентской части веб-приложений теперь требуют опыта работы с ними.

Начинающему разработчику веб-интерфейсов, может быть трудно понять, с чего начать изучение фреймворков - их выбор разнообразен, а новые появляются постоянно. В основном же они работают аналогичным образом, но делают некоторые вещи по-разному, также есть некоторые специфичные вещи, которые следует соблюдать при использовании фреймворков.

Этим набором статей мы постараемся дать вам удобную отправную точку, чтобы помочь вам начать изучать основы. Мы не стремимся научить вас всему, что вам нужно знать о React / ReactDOM, или Vue, или какой-то другой конкретной среде; Документация этих фреймворков отлично выполняют эту работу. Вместо этого мы хотим сделать шаг назад и сначала ответить на более фундаментальные вопросы, такие как:

- Почему я должен использовать фреймворк? Какие проблемы он решит?
- Какие вопросы я должен задать себе при выборе определённого фреймворка?
  Нужен ли мне какой-либо из них вовсе?
- Какими возможностями обладают фреймворки? Как они работают в целом и в чём отличия их имплементаций этих возможностей?
- Как они связаны с "ванильным" JavaScript, или HTML?

После этого мы предоставим некоторые учебные пособия, охватывающие основы некоторых фреймворков, чтобы предоставить вам достаточно контекста, чтобы вы могли начать углубляться в этой теме. Мы хотим, чтобы вы изучали фреймворки прагматично, не забывая о фундаментальных практиках веб-разработки, таких как, например, доступность.

**[Начните прямо сейчас с "Введение в фронтенд фреймворки"](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Prerequisites

You should really learn the basics of the core web languages first before attempting to move on to learning client-side frameworks — [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), and especially [JavaScript](/ru/docs/Learn/JavaScript).

Your code will be richer and more professional as a result, and you'll be able to troubleshoot problems with more confidence if you understand the fundamental web platform features that the frameworks are building on top of.

## Introductory guides

- [1. Introduction to client-side frameworks](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.
- [2. Framework main features](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of "the big 4" frameworks, looking at how frameworks tend to work from a high level, and the differences between them.

## React tutorials

> **Примечание:** React tutorials last tested in May 2020, with React/ReactDOM 16.13.1 and create-react-app 3.4.1.
>
> If you need to check your code against our version, you can find a finished version of the sample React app code in our [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see <https://mdn.github.io/todo-react-build/>.

- [1. Getting started with React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : In this article we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app, learning a bit about how React works in the process.
- [2. Beginning our React todo list](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic `App` component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.
- [3. Componentizing our React app](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component – that's up to you! In this article we will show you a sensible way to break our app up into components.
- [4. React interactivity: Events and state](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article we'll do this, digging into events and state along the way.
- [5. React interactivity: Editing, filtering, conditional rendering](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : As we near the end of our React journey (for now at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks, and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.
- [6. Accessibility in React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screenreader users.
- [7. React resources](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Our final article provides you with a list of React resources that you can use to go further in your learning.

## Ember tutorials

> **Примечание:** Ember tutorials last tested in May 2020, with Ember/Ember CLI version 3.18.0.
>
> If you need to check your code against our version, you can find a finished version of the sample Ember app code in the [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). For a running live version, see <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (this also includes a few additional features not covered in the tutorial).

- [1. Getting started with Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In our first Ember article we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a sample app, and then do some initial setup to get it ready for development.
- [2. Ember app structure and componentization](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In this article we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.
- [3. Ember interactivity: Events, classes and state](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : At this point we'll start adding some interactivity to our app, providing the ability to add and display new todo items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.
- [4. Ember Interactivity: Footer functionality, conditional rendering](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.
- [5. Routing in Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In this article we learn about routing, or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three todo views — "All", "Active", and "Completed".
- [6. Ember resources and troubleshooting](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

## Vue tutorials

> **Примечание:** Vue tutorials last tested in May 2020, with Vue 2.6.11.
>
> If you need to check your code against our version, you can find a finished version of the sample Vue app code in our [todo-vue repository](https://github.com/mdn/todo-vue). For a running live version, see <https://mdn.github.io/todo-vue/dist/>.

- [1. Getting started with Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Now let's introduce Vue, the third of our frameworks. In this article we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole project and an individual component, see how to run the project locally, and get it prepared to start building our example.
- [2. Creating our first Vue component](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Now it's time to dive deeper into Vue, and create our own custom component — we'll start by creating a component to represent each item in the todo list. Along the way, we'll learn about a few important concepts such as calling components inside other components, passing data to them via props, and saving data state.
- [3. Rendering a list of Vue components](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : At this point we've got a fully working component; we're now ready to add multiple `ToDoItem` components to our App. In this artcle we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.
- [4. Adding a new todo form: Vue events, methods, and models](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : We now have sample data in place, and a loop that takes each bit of data and renders it inside a `ToDoItem` in our app. What we really need next is the ability to allow our users to enter their own todo items into the app, and for that we'll need a text `<input>`, an event to fire when the data is submitted, a method to fire upon submission to add the data and rerender the list, and a model to control the data. This is what we'll cover in this article.
- [5. Styling Vue components with CSS](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : The time has finally come to make our app look a bit nicer. In this article we'll explore the different ways of styling Vue components with CSS.
- [6. Using Vue computed properties](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In this article we'll add a counter that displays the number of completed todo items, using a feature of Vue called computed properties. These work similarly to methods, but only re-run when one of their dependencies changes.
- [7. Vue conditional rendering: editing existing todos](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Now it is time to add one of the major parts of functionality that we're still missing — the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities — namely `v-if` and `v-else` — to allow us to toggle between the existing todo item view, and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.
- [8. Focus management with Vue refs](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using Vue refs to handle this — an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.
- [9. Vue resources](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

## Which frameworks did we choose?

We are publishing our initial set of articles with guides focusing on three of the major frameworks out there — React/ReactDOM, Ember, and Vue. There is a variety of reasons for this:

- They are popular choices that will be around for a while — like with any software tool, it is good to stick with actively-developed choices that are likely to not be discontinued next week, and which will be desirable additions to your skillset when looking for a job.
- They have strong communities and good documentation. It is very important to be able to get help with learning a complex subject, especially when you are just starting out.
- We don't have the resources to cover _all_ modern frameworks. That list would be very difficult to keep up-to-date anyway, as new ones appear all the time.
- As a beginner, trying to choose what to focus on out of the huge number of choices available is a very real problem. Keeping the list short is therefore helpful.

We want to say this up front — we've **not** chosen the frameworks we are focusing on because we think they are the best, or because we endorse them in any way. We just think they score highly on the above criteria.

Note that we were hoping to have more frameworks included upon intial publication, but we decided to release the content and then add more framework guides later, rather than delay it longer. If your favourite framework is not represented in this content and you'd like to help change that, feel free to discuss it with us! Get in touch with us via [Matrix](https://wiki.mozilla.org/Matrix), or [Discourse](https://discourse.mozilla.org/c/mdn), or drop us a mail on the [mdn-admins list](mailto:mdn-admins@mozilla.org).
