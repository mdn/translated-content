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

[Handlebars](https://handlebarsjs.com/)  テンプレート言語は Ember アプリケーションに固有のものではありませんが、 Ember アプリケーションで頻繁に利用されています。 Handlebars コードは HTML に似ていますが、他の場所からデータを取り込むオプションがあります。このデータは、アプリケーションが最終的に構築する HTML に影響を与えるために使用できます。

JSX と同様に、 Handlebars は中括弧を使用して変数の値を挿入します。ハンドルバーは、単一ペアではなく、二重ペアの中括弧を使用します。

このハンドルバー テンプレートを考慮すると、次のようになります。

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

そしてこのデータは次のようになります。

```js
{
  subject: "World";
}
```

Handlebars は次のような HTML を構築します。

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) は JavaScript の「スーパーセット」です。つまり、 JavaScript を拡張したものです。すべての JavaScript コードは有効な TypeScript ですが、その逆はありません。 TypeScript は、開発者がコードに厳密性を適用できるという点で役立ちます。たとえば、整数 `a` と `b` を受け取り、その合計を返す関数 `add()` について考えてみましょう。

JavaScript では、この関数は次のように記述できます。

```js
function add(a, b) {
  return a + b;
}
```

このコードは JavaScript に慣れている人にとっては簡単かもしれませんが、さらに明確になる可能性があります。 JavaScript では `+` 演算子を使用して文字列を連結できるため、 `a` と `b` が文字列の場合でもこの関数は技術的には機能しますが、期待する結果が得られない可能性があります。この関数に数値のみを渡すことを許可したい場合はどうすればよいでしょうか? TypeScript を使用すると、次のことが可能になります。

```ts
function add(a: number, b: number) {
  return a + b;
}
```

ここで各パラメータの後に書かれた `: number` は、TypeScript に `a` と `b` の両方が数字でなければならないことを伝えます。この関数を使用して引数として `'2'` を渡すと、 TypeScript はコンパイル中にエラーを発生させ、間違いを修正する必要があります。これらのエラーを発生させる独自の JavaScript を作成することもできますが、ソースコードが大幅に冗長になります。 TypeScript にそのようなチェックを処理させる方がおそらく合理的です。

## コンポーネントの作成

前の章で述べたように、ほとんどのフレームワークには何らかのコンポーネントモデルがあります。 React コンポーネントは JSX で、 Ember コンポーネントは Handlebars で、 Angular コンポーネントと Vue コンポーネントは HTML を軽く拡張したテンプレート構文で作成できます。

コンポーネントをどのように記述するべきかについての意見に関係なく、各フレームワークのコンポーネントは、必要となる可能性のある外部プロパティ、コンポーネントが管理する必要がある内部状態、およびユーザーがコンポーネントのマークアップでトリガーできるイベントを記述する方法を提供します。

このセクションの残りのコードスニペットは例として React を使用し、 JSX で書かれています。

### Properties

Properties 、または **props** は、コンポーネントがレンダリングするために必要な外部データです。オンラインマガジンの Web サイトを構築していて、各寄稿者が自分の作品に対してクレジットを取得できるようにする必要があるとします。各記事に付随する `AuthorCredit` コンポーネントを作成することもできます。このコンポーネントは、著者の肖像と著者に関する短い署名文を表示する必要があります。どの画像をレンダリングするか、どの署名欄を印刷するかを知るために、 `AuthorCredit` はいくつかの props を受け入れる必要があります。

この `AuthorCredit` コンポーネントの React 表現は次のようになります。

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

`{props.src}`, `{props.alt}`, および `{props.byline}` は、 props がコンポーネントに挿入される場所を表します。このコンポーネントをレンダリングするには、レンダリングしたい場所(おそらく別のコンポーネント内にあるでしょう）)に次のようなコードを記述します。

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

これにより、最終的に次の [`<figure>`](/en-US/docs/Web/HTML/Element/figure) 要素がブラウザにレンダリングされます。その構造は `AuthorCredit` コンポーネントで定義されているとおりであり、そのコンテンツは次のようになります。 `AuthorCredit` コンポーネント呼び出しに含まれる props で定義されます。

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
