---
title: 框架的主要特性
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

每种 JavaScript 框架都有自己不同的方式更新 DOM，处理浏览器事件，为开发者提供愉快的使用体验，这篇文章将探索“四大”框架的主要特性，从高级角度探讨框架的工作方式以及它们之间的区别。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
        <a href="/zh-CN/docs/Learn/CSS">CSS</a> 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解框架主要代码的特性。</td>
    </tr>
  </tbody>
</table>

## 领域特定语言（DSL）

本模块中讨论的所有框架都基于 JavaScript，并且都允许你使用领域特定语言（DSL）来构建应用程序。特别地，React 已经普及了使用 **JSX** 来编写其组件，而 Ember 则使用 **Handlebars**。与 HTML 不同，这些语言知道如何读取数据变量，并且此数据可用于简化编写 UI 的过程。

基于 Angular 框架的应用程序会大量地使用 **TypeScript**。TypeScript 不关心用户界面的编写，但它仍然是一种领域特定语言（DSL），而且与原生 JavaScript 有着很大的不同。

DSL 不能直接由浏览器解析；它们首先要被转换成 JavaScript 或 HTML。虽然[转换在开发流程中是一个额外的步骤](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#转换)，但是框架通常会包含处理此步骤所需的工具，或者与该步骤相适应。虽然你可以不使用这些领域特定语言构建框架应用程序，但使用它们会简化你的开发过程，还能更容易地从这些框架的周边社区中找到帮助。

### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html), 意为 JavaScript 和 XML, 是 JavaScript 的扩展，为 JavaScript 带来了类似 HTML 的语法。它由 React 团队发明，用于 React 应用程序，但也可用于开发其他应用程序——例如 Vue 应用程序。

这是一个简单的 JSX 示例：

```js
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

小括号内的表达式表示一个 HTML [`<header>`](/zh-CN/docs/Web/HTML/Element/header) 元素，里面还有一个 [`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 元素。第 4 行被花括号围绕着的 `subject` 告诉应用程序要读取常量 subject 的值并将其插入到我们的 `<h1>` 元素当中。

当与 React 一起使用时，上一个片段中的 JSX 将被编译成这样：

```js
var subject = "World";
var header = React.createElement("header", null,
  React.createElement("h1", null, "Hello, ", subject, "!")
);
```

到了最后，在浏览器显示网页时，上面的代码片段将生成如下所示的 HTML：

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

[Handlebars](https://handlebarsjs.com/) 是一种简单的模板语言，虽然它并非仅可用于 Ember 应用程序，但它在 Ember 应用程序中被大量使用。Handlebars 代码很像 HTML，但它可以选择从其他地方提取数据并应用在最终生成的 HTML 上面。

与 JSX 相似的是，Handlebars 使用花括号来注入变量的值。不相似的是，Handlebars 使用双花括号，而不是单花括号。

下面是一个简单的 Handlebars 示例：

定义以下 Handlebars 模板：

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

还有这个数据：

```js
{
  subject: "World"
}
```

Handlebars 将像这样构建 HTML：

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) 是 JavaScript 的*超集*，这意味着它*扩展*了 JavaScript——所有 JavaScript 代码都是有效的 TypeScript 代码，但反之则不然。TypeScript 可以让开发者们“严格地”执行他们的代码。例如，要写一个函数 `add()`，它接受整数 `a` 和 `b` 并返回它们的总和。

在 JavaScript 中，可以这样编写：

```js
function add(a, b) {
  return a + b;
}
```

对于习惯 JavaScript 的人来说，这段代码非常简单明确，但它仍然可以更加清晰明确。JavaScript 允许我们使用 `+` 运算符将​​字符串连接在一起，所以，如果传入 `add()` 函数的 `a` 和 `b` 是字符串，这个函数在技术上仍然可以工作——但是它可能不会给你期望的结果。如果我们只想允许将数字传递给这个函数怎么办？可以使用 TypeScript：

```js
function add(a: number, b: number) {
  return a + b;
}
```

在 `a` 和 `b` 后面的 `: number` 代码告诉 TypeScript `a` 和 `b` 都必须是数字。这样的话，当我们再次将字符串（例如 `'2'`）传入这个函数的时候，TypeScript 就会在编译期间报告错误，而我们将被迫修复这个错误。虽然可以编写自己的 JavaScript 来做到与 TypeScript 一样的效果，但是这会使我们的写的代码更加繁杂。让 TypeScript 为我们处理此类检查或许更有意义。

## 编写组件

如前一章所述，大多数框架都有某种组件模型。React 组件可以使用 JSX 编写，Ember 组件可以使用 Handlebars 编写，Angular 和 Vue 组件可以使用模板语法轻松地扩展 HTML。

不管框架的作者们对于如何编写组件有多么多么不同的看法，每个框架的组件都提供了一种方法来描述组件可能需要的外部属性、组件的内部状态以及用户可以在组件上可以触发的事件。

本节其余部分的代码片段将使用 React 作为示例，并使用 JSX 编写其组件。

### Properties

Properties, or **props**, are external data that a component needs in order to render. Suppose you're building a website for an online magazine, and you need to be sure that each contributing writer gets credit for their work. You might create an `AuthorCredit` component to go with each article. This component needs to display a portrait of the author and a short byline about them. In order to know what image to render, and what byline to print, `AuthorCredit` needs to accept some props.

A React representation of this `AuthorCredit` component might look something like this:

```js
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`, `{props.alt}`, and `{props.byline}` represent where our props will be inserted into the component. To render this component, we would write code like this in the place where we want it rendered (which will probably be inside another component):

```js
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

This will ultimately render the following [`<figure>`](/zh-CN/docs/Web/HTML/Element/figure) element in the browser, with its structure as defined in the `AuthorCredit` component, and its content as defined in the props included on the `AuthorCredit` component call:

```html
<figure>
  <img
    src="assets/zelda.png"
    alt="Portrait of Zelda Schiff"
  >
  <figcaption>
    Zelda Schiff is editor-in-chief of the Library Times.
  </figcaption>
</figure>
```

### State

We talked about the concept of **state** in the previous chapter — a robust state-handling mechanism is key to an effective framework, and each component may have data that needs its state controlled. This state will persist in some way as long as the component is in use. Like props, state can be used to affect how a component is rendered.

As an example, consider a button that counts how many times it has been clicked. This component should be responsible for tracking its own _count_ state, and could be written like this:

```js
function CounterButton() {
  const [count] = useState(0);
  return (
    <button>Clicked {count} times</button>
  );
}
```

[`useState()`](https://reactjs.org/docs/hooks-reference.html#usestate) is a **[React hook](https://reactjs.org/docs/hooks-intro.html)** which, given an initial data value, will keep track of that value as it is updated. The code will be initially rendered like so in the browser:

```html
<button>Clicked 0 times</button>
```

The `useState()` call keeps track of the `count` value in a robust way across the app, without you needing to write code to do that yourself.

### Events

In order to be interactive, components need ways to respond to browser events, so our applications can respond to our users. Frameworks each provide their own syntax for listening to browser events, which reference the names of the equivalent native browser events.

In React, listening for the [`click`](/zh-CN/docs/Web/API/Element/click_event) event requires a special property, `onClick`. Let’s update our `CounterButton` code from above to allow it to count clicks:

```js
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In this version we are using additional `useState()` functionality to create a special `setCount()` function, which we can invoke to update the value of `count`. We call this function on line 4, and set `count` to whatever its current value is, plus one.

## Styling components

Each framework offers a way to define styles for your components — or for the application as a whole. Although each framework’s approach to defining the styles of a component is slightly different, all of them give you multiple ways to do so. With the addition of some helper modules, you can style your framework apps in [Sass](https://sass-lang.com/) or [Less](http://lesscss.org/), or transpile your CSS stylesheets with [PostCSS](https://postcss.org/).

## Handling dependencies

All major frameworks provide mechanisms for handling dependencies — using components inside other components, sometimes with multiple hierarchy levels. As with other features, the exact mechanism will differ between frameworks, but the end result is the same. Components tend to import components into other components using the standard [JavaScript module syntax](/zh-CN/docs/Web/JavaScript/Guide/Modules), or at least something similar.

### Components in components

One key benefit of component-based UI architecture is that components can be composed together. Just like you can write HTML tags inside each other to build a website, you can use components inside other components to build a web application. Each framework allows you to write components that utilize (and thus depend on) other components.

For example, our `AuthorCredit` React component might be utilized inside an `Article` component. That means that `Article` would need to import `AuthorCredit`.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Once that’s done, `AuthorCredit` could be used inside the `Article` component like this:

```js
  ...

<AuthorCredit />

  ...
```

### Dependency injection

Real-world applications can often involve component structures with multiple levels of nesting. An `AuthorCredit` component nested many levels deep might, for some reason, need data from the very root level of our application.

Let's say that the magazine site we're building is structured like this:

```js
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Our `App` component has data that our `AuthorCredit` component needs. We could rewrite `Home` and `Article` so that they know to pass props down, but this could get tedious if there are many, many levels between the origin and destination of our data. It's also excessive: `Home` and `Article` don’t actually make use of the author's portrait or byline, but if we want to get that information into the `AuthorCredit`, we will need to change `Home` and `Author` to accommodate it.

The problem of passing data through many layers of components is called prop drilling, and it’s not ideal for large applications.

To circumvent prop drilling, frameworks provide functionality known as dependency injection, which is a way to get certain data directly to the components that need it, without passing it through intervening levels. Each framework implements dependency injection under a different name, and in a different way, but the effect is ultimately the same.

Angular calls this process [dependency injection](https://angular.io/guide/dependency-injection); Vue has [`provide()` and `inject()` component methods](https://vuejs.org/v2/api/#provide-inject); React has a [Context API](https://reactjs.org/docs/context.html); Ember shares state through [services](https://guides.emberjs.com/release/services/).

### Lifecycle

In the context of a framework, a component’s **lifecycle** is a collection of phases a component goes through from the time it is rendered by the browser (often called _mounting_) to the time that it is removed from the DOM (often called _unmounting_). Each framework names these lifecycle phases differently, and not all give developers access to the same phases. All of the frameworks follow the same general model: they allow developers to perform certain actions when the component _mounts_, when it _renders_, when it _unmounts_, and at many phases in between these.

The _render_ phase is the most crucial to understand, because it is repeated the most times as your user interacts with your application. It's run every time the browser needs to render something new, whether that new information is an addition to what's in the browser, a deletion, or an edit of what’s there.

This [diagram of a React component's lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) offers a general overview of the concept.

## Rendering elements

Just as with lifecycles, frameworks take different-but-similar approaches to how they render your applications. All of them track the current rendered version of your browser's DOM, and each makes slightly different decisions about how the DOM should change as components in your application re-render. Because frameworks make these decisions for you, you typically don't interact with the DOM yourself. This abstraction away from the DOM is more complex and more memory-intensive than updating the DOM yourself, but without it, frameworks could not allow you to program in the declarative way they’re known for.

The **Virtual DOM** is an approach whereby information about your browser's DOM is stored in JavaScript memory. Your application updates this copy of the DOM, then compares it to the "real" DOM — the DOM that is actually rendered for your users — in order to decide what to render. The application builds a "diff" to compare the differences between the updated virtual DOM and the currently rendered DOM, and uses that diff to apply updates to the real DOM. Both React and Vue utilize a virtual DOM model, but they do not apply the exact same logic when diffing or rendering.

You can [read more about the Virtual DOM in the React docs](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

The **Incremental DOM** is similar to the virtual DOM in that it builds a DOM diff to decide what to render, but different in that it doesn't create a complete copy of the DOM in JavaScript memory. It ignores the parts of the DOM that do not need to be changed. Angular is the only framework discussed so far in this module that uses an incremental DOM.

You can [read more about the Incremental DOM on the Auth0 blog](https://auth0.com/blog/incremental-dom/).

The **Glimmer VM** is unique to Ember. It is not a virtual DOM nor an incremental DOM; it is a separate process through which Ember's templates are transpiled into a kind of "byte code" that is easier and faster to read than JavaScript.

## Routing

As [mentioned in the previous chapter, routing](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#Routing) is an important part of the web experience. To avoid a broken experience in sufficiently complex apps with lots of views, each of the frameworks covered in this module provides a library (or more than one library) that helps developers implement client-side routing in their applications.

## Testing

All applications benefit from test coverage that ensures your software continues to behave in the way that you'd expect, and web applications are no different. Each framework's ecosystem provides tooling that facilitates the writing of tests. Testing tools are not built into the frameworks themselves, but the command-line interface tools used to generate framework apps give you access to the appropriate testing tools.

Each framework has extensive tools in its ecosystem, with capabilities for unit and integration testing alike.

[Testing Library](https://testing-library.com/) is a suite of testing utilities that has tools for many JavaScript environments, including React, Vue, and Angular. The Ember docs cover the [testing of Ember apps](https://guides.emberjs.com/release/testing/).

Here’s a quick test for our `CounterButton` written with the help of React Testing Library — it tests a number of things, such as the button's existence, and whether the button is displaying the correct text after being clicked 0, 1, and 2 times:

```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CounterButton from "./CounterButton";

it("renders a semantic with an initial state of 0", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## Summary

At this point you should have more of an idea about the actual languages, features, and tools you'll be using as you create applications with frameworks. I'm sure you’re enthusiastic to get going and actually do some coding, and that's what you are going to do next! At this point you can choose which framework you'd like to start learning first:

- [React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

> **备注：** We only have three framework tutorial series available now, but we hope to have more available in the future.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
