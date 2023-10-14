---
title: クライアント側フレームワークの概要 
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 7c7473588e7fb487df574c64307b11a3ecd55cd1
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

JavaScript とフレームワークの簡単な歴史を見て、フレームワークがなぜ存在するのか、そしてそれが私たちに何をもたらすのか、学習するフレームワークの選択をどのように考え始めるか、そしてクライアント側フレームワークの代替手段は何があるのかをこの分野の一般的な概要からフレームワークの考察を始めます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、
        <a href="/ja/docs/Learn/CSS">CSS</a>、
        <a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること、
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        クライアントサイド JavaScript フレームワークがどのようにして存在するようになったのかを理解するには、 それによって解決される問題、どのような代替案があるのか​​、どのように対処すべきか 一つを選ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## 簡単な歴史

1996 年に JavaScript が登場すると、それまで静的なドキュメントで構成されていた Web に、偶発的な話題と興奮が加わりました。 ウェブは単に _ものを読む_ だけではなく、 _何かをする_ ための場所になりました。 JavaScript の人気は着実に高まりました。 JavaScript を扱う開発者は、直面した問題を解決するためのツールを作成し、**ライブラリー**と呼ばれる再利用可能なパッケージにパッケージ化して、他のユーザーとソリューションを共有できるようにしました。 このライブラリーの共有エコシステムは、ウェブの成長を形作るのに役立ちました。

現在、 JavaScript はウェブに不可欠な部分であり、[すべてのウェブサイトの 98% で使用されており](https://w3techs.com/technologies/details/cp-javascript)、ウェブは現代生活に不可欠な部分です。 ユーザーは論文を書いたり、予算を管理したり、音楽をストリーミングしたり、映画を鑑賞したり、テキスト、音声、またはビデオチャットを使って遠距離の他のユーザーと瞬時にコミュニケーションしたりできます。ウェブを使用すると、これまでコンピューターにインストールされたネイティブアプリケーションでのみ可能であったことが実行できるようになります。これらの最新の複雑でインタラクティブなウェブサイトは、**ウェブアプリケーション**と呼ばれることがよくあります。

最新の JavaScript フレームワークの出現により、非常に動的でインタラクティブなアプリケーションの構築がはるかに簡単になりました。**フレームワーク** は、ソフトウェアの構築方法についての意見を提供するライブラリです。これらの意見により、アプリケーションの予測可能性と均一性が可能になります。予測可能性により、ソフトウェアを巨大なサイズに拡張しながらも保守可能になります。予測可能性と保守性は、ソフトウェアの健全性と寿命にとって不可欠です。

JavaScript フレームワークは、あなたが毎日使用するウェブサイトの多くを含む、現代のウェブ上の優れたソフトウェアの多くを強化しています。 現在この記事を読んでいる MDN Web Docs は、React/ReactDOM フレームワークを使用してフロントエンドを強化します。

## どのようなフレームワークがあるのでしょうか?

さまざまなフレームワークが存在しますが、現在「ビッグ 4 」は次のとおりであると考えられています。

### Ember

[Ember](https://emberjs.com/) は、 [SproutCore](https://en.wikipedia.org/wiki/SproutCore) プロジェクトで開始された作業の継続として、2011 年 12 月に最初にリリースされました。 これは古いフレームワークであり、React や Vue などの最新の代替フレームに比べてユーザー数は少ないですが、その安定性、コミュニティ サポート、いくつかの賢いコーディング原則により、依然としてかなりの人気を誇っています。

[Ember の学習を開始する](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.io) は、Google の Angular チームと個人および企業のコミュニティが主導するオープンソースのウェブアプリケーションフレームワークです。 これは、 [AngularJS](https://angularjs.org/) を構築したのと同じチームによる完全な書き直しです。 Angular は 2016 年 9 月 14 日に正式にリリースされました。

Angular は、宣言型 HTML テンプレートを使用するコンポーネントベースのフレームワークです。 ビルド時に、開発者に対して透過的に、フレームワークのコンパイラーがテンプレートを最適化された JavaScript 命令に変換します。 Angular は、JavaScript のスーパーセットである [TypeScript](https://www.typescriptlang.org/) を使用します。これについては、次の章でもう少し詳しく説明します。

[Angularr の学習を開始する](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

After working on and learning from the original [AngularJS](https://angularjs.org/) project, Evan You released [Vue](https://vuejs.org/) in 2014. Vue is the youngest of the big four, but has enjoyed a recent uptick in popularity.

Vue, like [AngularJS](https://angularjs.org/), extends HTML with some of its own code. Apart from that, it mainly relies on modern, standard JavaScript.

[Start learning Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook released [React](https://react.dev/) in 2013. By this point, it had already been using React to solve many of its problems internally. Technically, React itself is _not_ a framework; it's a library for rendering UI components. React is used in combination with _other_ libraries to make applications — React and [React Native](https://reactnative.dev/) enable developers to make mobile applications; React and [ReactDOM](https://react.dev/reference/react-dom) enable them to make web applications, etc.

Because React and ReactDOM are so often used together, React is colloquially understood as a JavaScript framework. As you read through this module, we will be working with that colloquial understanding.

React extends JavaScript with HTML-like syntax, known as [JSX](https://react.dev/learn/writing-markup-with-jsx).

[Start learning React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Why do frameworks exist?

We've discussed the environment that inspired the creation of frameworks, but not really _why_ developers felt the need to make them. Exploring the why requires first examining the challenges of software development.

Consider a common kind of application: A to-do list creator, which we'll look at implementing using a variety of frameworks in future chapters. This application should allow users to do things like render a list of tasks, add a new task, and delete a task; and it must do this while reliably tracking and updating the data underlying the application. In software development, this underlying data is known as state.

Each of our goals is theoretically simple in isolation. We can iterate over the data to render it; we can add to an object to make a new task; we can use an identifier to find, edit, or delete a task. When we remember that the application has to let the user do _all_ of these things through the browser, some cracks start to show. **The real problem is this: every time we change our application's state, we need to update the UI to match.**

We can examine the difficulty of this problem by looking at just _one_ feature of our to-do list app: rendering a list of tasks.

## The verbosity of DOM changes

Building HTML elements and rendering them in the browser at the appropriate time takes a surprising amount of code. Let's say that our state is an array of objects structured like this:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

How do we show one of those tasks to our users? We want to represent each task as a list item – an HTML [`<li>`](/en-US/docs/Web/HTML/Element/li) element inside of an unordered list element (a [`<ul>`](/en-US/docs/Web/HTML/Element/ul)). How do we make it? That could look something like this:

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

Here, we use the [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) method to make our `<li>`, and several more lines of code to create the properties and children it needs.

The tenth line of the previous snippet references another build function: `buildDeleteButtonEl()`. It follows a similar pattern to the one we used to build a list item element:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  const textContent = document.createTextNode("Delete");

  button.setAttribute("type", "button");
  button.appendChild(textContent);

  return button;
}
```

This button doesn't do anything yet, but it will later once we decide to implement our delete feature. The code that will render our items on the page might read something like this:

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

We've now got well over thirty lines of code dedicated _just_ to the UI – _just_ to render something in the DOM – and at no point do we add classes that we could use later to style our list-items!

Working directly with the DOM, as in this example, requires understanding many things about how the DOM works: how to make elements; how to change their properties; how to put elements inside of each other; how to get them on the page. None of this code actually handles user interactions, or addresses adding or deleting a task. If we add those features, we have to remember to update our UI at the right time and in the right way.

JavaScript frameworks were created to make this kind of work a lot easier — they exist to provide a better _developer experience_. They don't bring brand-new powers to JavaScript; they give you easier access to JavaScript's powers so you can build for today's web.

If you want to see code samples from this section in action, you can check out a [working version of the app on CodePen](https://codepen.io/mxmason/pen/XWbPNmw), which also allows users to add and delete new tasks.

Read more about the JavaScript used in this section:

- [`document.createElement()`](/en-US/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/en-US/docs/Web/API/Document/createTextNode)
- [`document.createDocumentFragment()`](/en-US/docs/Web/API/Document/createDocumentFragment)
- [`eventTarget.addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener)
- [`node.appendChild()`](/en-US/docs/Web/API/Node/appendChild)
- [`node.removeChild()`](/en-US/docs/Web/API/Node/removeChild)

## Another way to build UIs

Every JavaScript framework offers a way to write user interfaces more _declaratively_. That is, they allow you to write code that describes how your UI should look, and the framework makes it happen in the DOM behind the scenes.

The vanilla JavaScript approach to building out new DOM elements in repetition was difficult to understand at a glance. By contrast, the following block of code illustrates the way you might use Vue to describe our list of tasks:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

That's it. This snippet reduces approximately thirty-two lines of code down to six lines. If the curly braces and `v-` attributes here are unfamiliar to you, that's okay; you'll learn about Vue-specific syntax later on in the module. The thing to take away here is that this code looks like the UI it represents, whereas the vanilla JavaScript code does not.

Thanks to Vue, we didn't have to write our own functions for building the UI; the framework will handle that for us in an optimized, efficient way. Our only role here was to describe to Vue what each item should look like. Developers who are familiar with Vue can quickly work out what is going on when they join our project. Vue is not alone in this: using a framework improves team as well as individual efficiency.

It's possible to do things _similar_ to this in vanilla JavaScript. [Template literal strings](/en-US/docs/Web/JavaScript/Reference/Template_literals) make it easy to write strings of HTML that represent what the final element would look like. That might be a useful idea for something as simple as our to-do list application, but it's not maintainable for large applications that manage thousands of records of data, and could render just as many unique elements in a user interface.

## Other things frameworks give us

Let's look at some of the other advantages offered by frameworks. As we've alluded to before, the advantages of frameworks are achievable in vanilla JavaScript, but using a framework takes away all of the cognitive load of having to solve these problems yourself.

### Tooling

Because each of the frameworks in this module have a large, active community, each framework's ecosystem provides tooling that improves the developer experience. These tools make it easy to add things like testing (to ensure that your application behaves as it should) or linting (to ensure that your code is error-free and stylistically consistent).

> **Note:** If you want to find out more details about web tooling concepts, check out our [Client-side tooling overview](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview).

### Compartmentalization

Most major frameworks encourage developers to abstract the different parts of their user interfaces into _components_ — maintainable, reusable chunks of code that can communicate with one another. All the code related to a given component can live in one file (or a couple of specific files) so that you as a developer know exactly where to go to make changes to that component. In a vanilla JavaScript app, you'd have to create your own set of conventions to achieve this in an efficient, scalable way. Many JavaScript developers, if left to their own devices, could end up with all the code related to one part of the UI being spread out all over a file — or in another file altogether.

### Routing

The most essential feature of the web is that it allows users to navigate from one page to another – it is, after all, a network of interlinked documents. When you follow a link on this very website, your browser communicates with a server and fetches new content to display for you. As it does so, the URL in your address bar changes. You can save this new URL and come back to the page later on, or share it with others so they can easily find the same page. Your browser remembers your navigation history and allows you to navigate back and forth, too. This is called **server-side routing**.

Modern web applications typically do not fetch and render new HTML files — they load a single HTML shell, and continually update the DOM inside it (referred to as **single page apps**, or **SPAs**) without navigating users to new addresses on the web. Each new pseudo-webpage is usually called a _view_, and by default, no routing is done.

When an SPA is complex enough, and renders enough unique views, it's important to bring routing functionality into your application. People are used to being able to link to specific pages in an application, travel forward and backward in their navigation history, etc., and their experience suffers when these standard web features are broken. When routing is handled by a client application in this fashion, it is aptly called **client-side routing**.

It's _possible_ to make a router using the native capabilities of JavaScript and the browser, but popular, actively developed frameworks have companion libraries that make routing a more intuitive part of the development process.

## Things to consider when using frameworks

Being an effective web developer means using the most appropriate tools for the job. JavaScript frameworks make front-end application development easy, but they are not a silver bullet that will solve all problems. This section talks about some of the things you should consider when using frameworks. Bear in mind that you might not need a framework at all — beware that you don't end up using a framework just for the sake of it.

### Familiarity with the tool

Just like vanilla JavaScript, frameworks take time to learn and have their quirks. Before you decide to use a framework for a project, be sure you have time to learn enough of its features for it to be useful to you rather than it working against you, and be sure that your teammates are comfortable with it as well.

### Overengineering

If your web development project is a personal portfolio with a few pages, and those pages have little or no interactive capability, a framework (and all of its JavaScript) may not be necessary at all. That said, frameworks are not monolithic, and some of them are better suited to small projects than others. In an article for Smashing Magazine, Sarah Drasner writes about how [Vue can replace jQuery](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) as a tool for making small portions of a webpage interactive.

### Larger code base and abstraction

Frameworks allow you to write more declarative code – and sometimes _less_ code overall – by dealing with the DOM interactions for you, behind the scenes. This abstraction is great for your experience as a developer, but it isn't free. In order to translate what you write into DOM changes, frameworks have to run their own code, which in turn makes your final piece of software larger and more computationally expensive to operate.

Some extra code is inevitable, and a framework that supports tree-shaking (removal of any code that isn't actually used in the app during the build process) will allow you to keep your applications small, but this is still a factor you need to keep in mind when considering your app's performance, especially on more network/storage-constrained devices, like mobile phones.

The abstraction of frameworks affects not only your JavaScript, but also your relationship with the very nature of the web. No matter how you build for the web, the end result, the layer that your users ultimately interact with, is HTML. Writing your whole application in JavaScript can make you lose sight of HTML and the purpose of its various tags, and lead you to produce an HTML document that is un-semantic and inaccessible. In fact, it's possible to write a fragile application that depends entirely on JavaScript and will not function without it.

Frameworks are not the source of our problems. With the wrong priorities, any application can be fragile, bloated, and inaccessible. Frameworks do, however, amplify our priorities as developers. If your priority is to make a complex web app, it's easy to do that. However, if your priorities don't carefully guard performance and accessibility, frameworks will amplify your fragility, your bloat, and your inaccessibility. Modern developer priorities, amplified by frameworks, have inverted the structure of the web in many places. Instead of a robust, content-first network of documents, the web now often puts JavaScript first and user experience last.

## Accessibility on a framework-driven web

Let's build on what we said in the previous section, and talk a bit more about accessibility. Making user interfaces accessible always requires some thought and effort, and frameworks can complicate that process. You often have to employ advanced framework APIs to access native browser features like ARIA [live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) or focus management.

In some cases, framework applications create accessibility barriers that do not exist for traditional websites. The biggest example of this is in client-side routing, as mentioned earlier.

With traditional (server-side) routing, navigating the web has predictable results. The browser knows to set focus to the top of the page and assistive technologies will announce the title of the page. These things happen every time you navigate to a new page.

With client-side routing, your browser is not loading new web pages, so it doesn't know that it should automatically adjust focus or announce a new page title. Framework authors have devoted immense time and labor to writing JavaScript that recreates these features, and even then, no framework has done so perfectly.

The upshot is that you should consider accessibility from the very start of _every_ web project, but bear in mind that abstracted codebases that use frameworks are more likely to suffer from major accessibility issues if you don't.

## How to choose a framework

Each of the frameworks discussed in this module takes different approaches to web application development. Each is regularly improving or changing, and each has its pros and cons. Choosing the right framework is a team- and project-dependent process, and you should do your own research to uncover what suits your needs. That said, we've identified a few questions you can ask in order to research your options more effectively:

1. What browsers does the framework support?
2. What domain-specific languages does the framework utilize?
3. Does the framework have a strong community and good docs (and other support) available?

The table in this section provides a glanceable summary of the current _browser support_ offered by each framework, as well as the **domain-specific languages** with which it can be used.

Broadly, {{Glossary("DSL/Domain_specific_language", "domain-specific languages (DSLs)")}} are programming languages relevant in specific areas of software development. In the context of frameworks, DSLs are variations on JavaScript or HTML that make it easier to develop with that framework. Crucially, none of the frameworks _require_ a developer to use a specific DSL, but they have almost all been designed with a specific DSL in mind. Choosing not to employ a framework's preferred DSL will mean you miss out on features that would otherwise improve your developer experience.

You should seriously consider the support matrix and DSLs of a framework when making a choice for any new project. Mismatched browser support can be a barrier to your users; mismatched DSL support can be a barrier to you and your teammates.

| Framework | Browser support                     | Preferred DSL | Supported DSLs         | Citation                                                                        |
| --------- | ----------------------------------- | ------------- | ---------------------- | ------------------------------------------------------------------------------- |
| Angular   | Modern                              | TypeScript    | HTML-based; TypeScript | [official docs](https://angular.io/guide/browser-support)                       |
| React     | Modern                              | JSX           | JSX; TypeScript        | [official docs](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-based    | HTML-based, JSX, Pug   | [official docs](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember version 2.18) | Handlebars    | Handlebars, TypeScript | [official docs](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> **Note:** DSLs we've described as "HTML-based" do not have official names. They are not really true DSLs, but they are non-standard HTML, so we believe they are worth highlighting.

### Does the framework have a strong community?

This is perhaps the hardest metric to measure because community size does not correlate directly to easy-to-access numbers. You can check a project's number of GitHub stars or weekly npm downloads to get an idea of its popularity, but sometimes the best thing to do is search a few forums or talk to other developers. It is not just about the community's size, but also how welcoming and inclusive it is, and how good the available documentation is.

### Opinions on the web

Don't just take our word on this matter — there are discussions all over the web. The Wikimedia Foundation recently chose to use Vue for its front-end, and posted a [request for comments (RFC) on framework adoption](https://phabricator.wikimedia.org/T241180). Eric Gardner, the author of the RFC, took time to outline the needs of the Wikimedia project and why certain frameworks were good choices for the team. This RFC serves as a great example of the kind of research you should do for yourself when planning to use a front-end framework.

The [State of JavaScript survey](https://stateofjs.com/) is a helpful collection of feedback from JavaScript developers. It covers many topics related to JavaScript, including data about both the use of frameworks and developer sentiment toward them. Currently, there are several years of data available, allowing you to get a sense of a framework's popularity.

The Vue team has [exhaustively compared Vue to other popular frameworks](https://v2.vuejs.org/v2/guide/comparison.html). There may be some bias in this comparison (which they note), but it's a valuable resource nonetheless.

## Alternatives to client-side frameworks

If you're looking for tools to expedite the web development process, and you know your project isn't going to require intensive client-side JavaScript, you could reach for one of a handful of other solutions for building the web:

- A content management system
- Server-side rendering
- A static site generator

### Content management systems

**Content-management systems** (**CMSes**) are any tools that allow a user to create content for the web without directly writing code themselves. They're a good solution for large projects, especially projects that require input from content writers who have limited coding ability, or for programmers who want to save time. They do, however, require a significant amount of time to set up, and utilizing a CMS means that you surrender at least some measure of control over the final output of your website. For example: if your chosen CMS doesn't author accessible content by default, it's often difficult to improve this.

Popular examples include [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/), and [Drupal](https://www.drupal.org/).

### Server-side rendering

**Server-side rendering** (**SSR**) is an application architecture in which it is the _server_'s job to render a single-page application. This is the opposite of _client-side rendering_, which is the most common and most straightforward way to build a JavaScript application. Server-side rendering is easier on the client's device because you're only sending a rendered HTML file to them, but it can be difficult to set up compared to a client-side-rendered application.

All of the frameworks covered in this module support server-side rendering as well as client-side rendering. Check out [Next.js](https://nextjs.org/) for React, [Nuxt.js](https://nuxtjs.org/) for Vue (yes, it is confusing, and no, these projects are not related!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) for Ember, and [Angular Universal](https://angular.io/guide/universal) for Angular.

> **Note:** Some SSR solutions are written and maintained by the community, whereas some are "official" solutions provided by the framework's maintainer.

### Static site generators

Static site generators are programs that dynamically generate all the webpages of a multi-page website — including any relevant CSS or JavaScript — so that they can be published in any number of places. The publishing host could be a GitHub pages branch, a Netlify instance, or any private server of your choosing, for example. There are a number of advantages of this approach, mostly around performance (your user's device isn't building the page with JavaScript; it's already complete) and security (static pages have fewer attack vectors). These sites can still utilize JavaScript where they need to, but they are not _dependent_ upon it. Static site generators take time to learn, just like any other tool, which can be a barrier to your development process.

Static sites can have as few or as many unique pages as you want. Just as frameworks empower you to quickly write client-side JavaScript applications, static site generators allow you a way to quickly create HTML files you would otherwise have written individually. Like frameworks, static site generators allow developers to write components that define common pieces of your web pages, and to compose those components together to create a final page. In the context of static site generators, these components are called **templates**. Web pages built by static site generators can even be home to framework applications: if you want one specific page of your statically-generated website to boot up a React application when your user visits it for example, you can do that.

Static site generators have been around for quite a long time, and they have seen a bit of a revival in the recent history of the web. A handful of powerful options are now available, such as [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), [Eleventy](https://www.11ty.dev/), and [Gatsby](https://www.gatsbyjs.com/).

If you'd like to learn more about static site generators on the whole, check out Tatiana Mac's [Beginner's guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). In the first article of the series, she explains what a static site generator is, and how it relates to other means of publishing web content.

## Summary

And that brings us to the end of our introduction to frameworks — we've not taught you any code yet, but hopefully we've given you a useful background on why you'd use frameworks in the first place and how to go about choosing one, and made you excited to learn more and get stuck in!

Our next article goes down to a lower level, looking at the specific kinds of features frameworks tend to offer, and why they work as they do.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
