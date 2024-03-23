---
title: フレームワークの主な機能
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
page-type: learn-module-chapter
l10n:
  sourceCommit: 03f247507ae02105bcfe822b8e97ae8e0006bc19
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

主要な JavaScript フレームワークごとに、 DOM の更新、ブラウザイベントの処理、楽しい開発者エクスペリエンスの提供に関して、異なるアプローチが採用されています。この記事では、「ビッグ 4」フレームワークの主な特徴を探り、フレームワークがどのように機能する傾向があるかを高いレベルから見ていき、それらの違いを見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
          <a href="/ja/docs/Learn/HTML">HTML</a>、
          <a href="/ja/docs/Learn/CSS">CSS</a>、
          <a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>フレームワークの主なコード機能を理解します。</td>
    </tr>
  </tbody>
</table>

## ドメイン固有言語

このモジュールで説明するすべてのフレームワークは JavaScript を利用しており、アプリケーションを構築するためにドメイン固有言語 (DSL) を使用できます。特に、 React はコンポーネントの作成に **JSX** の使用を普及させ、一方、 Ember は **Handlebars** を利用します。 HTML とは異なり、これらの言語はデータ変数の読み取り方法を知っており、このデータを使用して UI を作成するプロセスを合理化できます。

Angular アプリでは、**TypeScript** が頻繁に使用されます。 TypeScript はユーザーインターフェイスの記述には関与しませんが、ドメイン固有の言語であり、通常の JavaScript とは大きな違いがあります。

DSL はブラウザで直接読み取ることはできません。最初に JavaScript または HTML に変換する必要があります。[変換は開発プロセスの追加のステップです](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#transformation)しかし、フレームワークツールには通常、このステップを処理するために必要なツールが含まれているか、または次のように調整できます。このステップを含めてください。これらのドメイン固有言語を使用せずにフレームワークアプリを構築することも可能ですが、これらの言語を採用すると、開発プロセスが合理化され、それらのフレームワークに関するコミュニティからのヘルプを見つけやすくなります。

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx) は、JavaScript と XML の略で、JavaScript 環境に HTML のような構文をもたらす JavaScript の拡張機能です。これは React アプリケーションで使用するために React チームによって発明されましたが、 Vue アプリなどの他のアプリケーションの開発にも使用できます。

以下に簡単な JSX の例を示します。

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

この式は、 [`<h1>`](/en-US/docs/Web/HTML/Element/Heading_Elements) 要素を持つ HTML [`<header>`](/en-US/docs/Web/HTML/Element/header) 要素の内部を表します。 `{subject}` を囲む中括弧は、アプリケーションに `subject` 定数の値を読み取り、それを `<h1>` に挿入するように指示します。

React で使用すると、前のスニペットの JSX は次のようにコンパイルされます。

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

最終的にブラウザーによってレンダリングされると、上記のスニペットは次のような HTML を生成します。

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

The [Handlebars](https://handlebarsjs.com/) templating language is not specific to Ember applications, but it is heavily utilized in Ember apps. Handlebars code resembles HTML, but it has the option of pulling data in from elsewhere. This data can be used to influence the HTML that an application ultimately builds.

Like JSX, Handlebars uses curly braces to inject the value of a variable. Handlebars uses a double-pair of curly braces, instead of a single pair.

Given this Handlebars template:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

And this data:

```js
{
  subject: "World";
}
```

Handlebars will build HTML like this:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) is a _superset_ of JavaScript, meaning it extends JavaScript — all JavaScript code is valid TypeScript, but not the other way around. TypeScript is useful for the strictness it allows developers to enforce on their code. For instance, consider a function `add()`, which takes integers `a` and `b` and returns their sum.

In JavaScript, that function could be written like this:

```js
function add(a, b) {
  return a + b;
}
```

This code might be trivial for someone accustomed to JavaScript, but it could still be clearer. JavaScript lets us use the `+` operator to concatenate strings together, so this function would technically still work if `a` and `b` were strings — it just might not give you the result you'd expect. What if we wanted to only allow numbers to be passed into this function? TypeScript makes that possible:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

The `: number` written after each parameter here tells TypeScript that both `a` and `b` must be numbers. If we were to use this function and pass `'2'` into it as an argument, TypeScript would raise an error during compilation, and we would be forced to fix our mistake. We could write our own JavaScript that raises these errors for us, but it would make our source code significantly more verbose. It probably makes more sense to let TypeScript handle such checks for us.

## Writing components

As mentioned in the previous chapter, most frameworks have some kind of component model. React components can be written with JSX, Ember components with Handlebars, and Angular and Vue components with a templating syntax that lightly extends HTML.

Regardless of their opinions on how components should be written, each framework's components offer a way to describe the external properties they may need, the internal state that the component should manage, and the events a user can trigger on the component's markup.

The code snippets in the rest of this section will use React as an example, and are written with JSX.

### Properties

Properties, or **props**, are external data that a component needs in order to render. Suppose you're building a website for an online magazine, and you need to be sure that each contributing writer gets credit for their work. You might create an `AuthorCredit` component to go with each article. This component needs to display a portrait of the author and a short byline about them. In order to know what image to render, and what byline to print, `AuthorCredit` needs to accept some props.

A React representation of this `AuthorCredit` component might look something like this:

```jsx
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

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

This will ultimately render the following [`<figure>`](/en-US/docs/Web/HTML/Element/figure) element in the browser, with its structure as defined in the `AuthorCredit` component, and its content as defined in the props included on the `AuthorCredit` component call:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### State

We talked about the concept of **state** in the previous chapter — a robust state-handling mechanism is key to an effective framework, and each component may have data that needs its state controlled. This state will persist in some way as long as the component is in use. Like props, state can be used to affect how a component is rendered.

As an example, consider a button that counts how many times it has been clicked. This component should be responsible for tracking its own _count_ state, and could be written like this:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) is a **[React hook](https://react.dev/reference/react)** which, given an initial data value, will keep track of that value as it is updated. The code will be initially rendered like so in the browser:

```html
<button>Clicked 0 times</button>
```

The `useState()` call keeps track of the `count` value in a robust way across the app, without you needing to write code to do that yourself.

### Events

In order to be interactive, components need ways to respond to browser events, so our applications can respond to our users. Frameworks each provide their own syntax for listening to browser events, which reference the names of the equivalent native browser events.

In React, listening for the [`click`](/en-US/docs/Web/API/Element/click_event) event requires a special property, `onClick`. Let's update our `CounterButton` code from above to allow it to count clicks:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In this version we are using additional `useState()` functionality to create a special `setCount()` function, which we can invoke to update the value of `count`. We call this function inside the `onClick` event handler to set `count` to whatever its current value is, plus one.

## Styling components

Each framework offers a way to define styles for your components — or for the application as a whole. Although each framework's approach to defining the styles of a component is slightly different, all of them give you multiple ways to do so. With the addition of some helper modules, you can style your framework apps in [Sass](https://sass-lang.com/) or [Less](https://lesscss.org/), or transpile your CSS stylesheets with [PostCSS](https://postcss.org/).

## Handling dependencies

All major frameworks provide mechanisms for handling dependencies — using components inside other components, sometimes with multiple hierarchy levels. As with other features, the exact mechanism will differ between frameworks, but the end result is the same. Components tend to import components into other components using the standard [JavaScript module syntax](/en-US/docs/Web/JavaScript/Guide/Modules), or at least something similar.

### Components in components

One key benefit of component-based UI architecture is that components can be composed together. Just like you can write HTML tags inside each other to build a website, you can use components inside other components to build a web application. Each framework allows you to write components that utilize (and thus depend on) other components.

For example, our `AuthorCredit` React component might be utilized inside an `Article` component. That means that `Article` would need to import `AuthorCredit`.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Once that's done, `AuthorCredit` could be used inside the `Article` component like this:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Dependency injection

Real-world applications can often involve component structures with multiple levels of nesting. An `AuthorCredit` component nested many levels deep might, for some reason, need data from the very root level of our application.

Let's say that the magazine site we're building is structured like this:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Our `App` component has data that our `AuthorCredit` component needs. We could rewrite `Home` and `Article` so that they know to pass props down, but this could get tedious if there are many, many levels between the origin and destination of our data. It's also excessive: `Home` and `Article` don't actually make use of the author's portrait or byline, but if we want to get that information into the `AuthorCredit`, we will need to change `Home` and `Article` to accommodate it.

The problem of passing data through many layers of components is called prop drilling, and it's not ideal for large applications.

To circumvent prop drilling, frameworks provide functionality known as dependency injection, which is a way to get certain data directly to the components that need it, without passing it through intervening levels. Each framework implements dependency injection under a different name, and in a different way, but the effect is ultimately the same.

Angular calls this process [dependency injection](https://angular.io/guide/dependency-injection); Vue has [`provide()` and `inject()` component methods](https://v2.vuejs.org/v2/api/#provide-inject); React has a [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember shares state through [services](https://guides.emberjs.com/release/services/).

### Lifecycle

In the context of a framework, a component's **lifecycle** is a collection of phases a component goes through from the time it is appended to the DOM and then rendered by the browser (often called _mounting_) to the time that it is removed from the DOM (often called _unmounting_). Each framework names these lifecycle phases differently, and not all give developers access to the same phases. All of the frameworks follow the same general model: they allow developers to perform certain actions when the component _mounts_, when it _renders_, when it _unmounts_, and at many phases in between these.

The _render_ phase is the most crucial to understand, because it is repeated the most times as your user interacts with your application. It's run every time the browser needs to render something new, whether that new information is an addition to what's in the browser, a deletion, or an edit of what's there.

This [diagram of a React component's lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) offers a general overview of the concept.

## Rendering elements

Just as with lifecycles, frameworks take different-but-similar approaches to how they render your applications. All of them track the current rendered version of your browser's DOM, and each makes slightly different decisions about how the DOM should change as components in your application re-render. Because frameworks make these decisions for you, you typically don't interact with the DOM yourself. This abstraction away from the DOM is more complex and more memory-intensive than updating the DOM yourself, but without it, frameworks could not allow you to program in the declarative way they're known for.

The **Virtual DOM** is an approach whereby information about your browser's DOM is stored in JavaScript memory. Your application updates this copy of the DOM, then compares it to the "real" DOM — the DOM that is actually rendered for your users — in order to decide what to render. The application builds a "diff" to compare the differences between the updated virtual DOM and the currently rendered DOM, and uses that diff to apply updates to the real DOM. Both React and Vue utilize a virtual DOM model, but they do not apply the exact same logic when diffing or rendering.

You can [read more about the Virtual DOM in the React docs](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

The **Incremental DOM** is similar to the virtual DOM in that it builds a DOM diff to decide what to render, but different in that it doesn't create a complete copy of the DOM in JavaScript memory. It ignores the parts of the DOM that do not need to be changed. Angular is the only framework discussed so far in this module that uses an incremental DOM.

You can [read more about the Incremental DOM on the Auth0 blog](https://auth0.com/blog/incremental-dom/).

The **Glimmer VM** is unique to Ember. It is not a virtual DOM nor an incremental DOM; it is a separate process through which Ember's templates are transpiled into a kind of "byte code" that is easier and faster to read than JavaScript.

## Routing

As [mentioned in the previous chapter, routing](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#routing) is an important part of the web experience. To avoid a broken experience in sufficiently complex apps with lots of views, each of the frameworks covered in this module provides a library (or more than one library) that helps developers implement client-side routing in their applications.

## Testing

All applications benefit from test coverage that ensures your software continues to behave in the way that you'd expect, and web applications are no different. Each framework's ecosystem provides tooling that facilitates the writing of tests. Testing tools are not built into the frameworks themselves, but the command-line interface tools used to generate framework apps give you access to the appropriate testing tools.

Each framework has extensive tools in its ecosystem, with capabilities for unit and integration testing alike.

[Testing Library](https://testing-library.com/) is a suite of testing utilities that has tools for many JavaScript environments, including React, Vue, and Angular. The Ember docs cover the [testing of Ember apps](https://guides.emberjs.com/release/testing/).

Here's a quick test for our `CounterButton` written with the help of React Testing Library — it tests a number of things, such as the button's existence, and whether the button is displaying the correct text after being clicked 0, 1, and 2 times:

```jsx
import { fireEvent, render, screen } from "@testing-library/react";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## Summary

At this point you should have more of an idea about the actual languages, features, and tools you'll be using as you create applications with frameworks. I'm sure you're enthusiastic to get going and actually do some coding, and that's what you are going to do next! At this point you can choose which framework you'd like to start learning first:

- [React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
