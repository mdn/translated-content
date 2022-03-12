---
title: クライアントサイドの JavaScript フレームワークを理解する
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - NeedsTranslation
  - TopicStub
  - client-side
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---
{{LearnSidebar}}

JavaScript フレームワークは、最新のフロントエンドウェブ開発に欠かせないものであり、開発者にスケーラブルでインタラクティブなウェブアプリケーションを構築するための試行錯誤されたツールを提供しています。現代の多くの企業では、フレームワークをツールの標準的な一部として使用しているため、多くのフロントエンド開発の仕事でフレームワークの経験が必要とされています。

フロントエンド開発者を目指していると、フレームワークを学ぶ際にどこから始めればいいのか悩むことがあります。フレームワークは常に新しいものが登場するため、非常に多くの種類の中から選ぶことができます。これらはほとんど同じように動作しますが、いくつかの点において異なっています。そしてフレームワークを利用する上では、具体的に注意しなければならないこともあります。

この記事では、あなたがフレームワークを学び始めるための快適な出発点を提供することを目的としています。私たちは、React/ReactDOM や Vue、その他の特定のフレームワークについて知っておく必要があるすべてのことを網羅的に教えることを目指しているわけではありません。その代わりに、以下のようなより基本的な質問に答えたいと思います。

- なぜフレームワークを使うべきなのか？どんな問題を解決してくれるのか？
- フレームワークを選ぼうとするとき、どのような質問をすればいいか？フレームワークを使う必要があるのか？
- フレームワークにはどのような機能があるのか？フレームワークは一般的にどのように機能するのか、そしてその機能の実装はどのように異なるのか？
- これらは素の JavaScript や HTML とどのように関係しているのか？

その後、異なるフレームワークの選択の要点をカバーするチュートリアルをいくつか提供し、あなたが自分自身でより深く学び始めるのに十分なコンテキストと親しみやすさを提供します。アクセシビリティなどのウェブプラットフォームの基本的なベストプラクティスを忘れずに、実用的な方法でフレームワークについて学んでいただきたいと思います。

**[Get started now, with "Introduction to client-side frameworks"](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## 前提となる知識

クライアントサイドのフレームワークを学習する前に、ウェブ開発で用いる主要な言語の基礎を学ぶ必要があります。それは [HTML](/ja/docs/Learn/HTML) と [CSS](/ja/docs/Learn/CSS)、そして特に [JavaScript](/ja/docs/Learn/JavaScript) です。

ウェブプラットフォームの基本的な機能を理解すれば、その上で構築されているフレームワークのトラブルも自信を持って解決できるでしょう。そうすれば、あなたの書くコードはより豪華でプロフェッショナルなものになるはずです。

## 入門ガイド

- [1. Introduction to client-side frameworks](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.

- [2. Framework main features](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of “the big 4” frameworks, looking at how frameworks tend to work from a high level and the differences between them.

## React チュートリアル

> **Note:** この React チュートリアルは React/ReactDOM 16.13.1 と create-react-app 3.4.1 で、2020年5月に動作確認を行いました。
> 
> もし、あなたのコードとサンプルのバージョンとを確認する必要があれば、[todo-react repository](https://github.com/mdn/todo-react) で最新版を見ることができます。実行中のライブバージョンについては、[https://mdn.github.io/todo-react-build/](https://mdn.github.io/todo-react-build/) から確認ができます。

- [1. React をはじめる](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : この記事では React のはじめかたを説明します。React の背景と使い方について説明し、ローカル環境で基本的な React ツールチェーンを設定します。また、シンプルな基本アプリを作成して、React がどのようなプロセスで機能するのかを学んでいきます。
- [2. React ToDo リストをはじめる](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : 例えば、React でアイディアを検証するためにアプリを試作してみることになったとします(いわゆる、Proof of Concept - 概念実証)。ユーザーが作業したいタスクを追加、編集、削除することができ、また、タスクを削除せずに完了とすることができるアプリです。この記事では、基本的な App コンポーネントの構造とスタイルを整え、後から追加する個々のコンポーネントの定義とインタラクティブな機能の準備を行っていきます。
- [3. React アプリのコンポーネント化](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。React には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。
- [4. React interactivity: Events and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article we'll do this, digging into events and state along the way.
- [5. React interactivity: Editing, filtering, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : As we near the end of our React journey (for now at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.
- [6. Accessibility in React](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.
- [7. React resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Our final article provides you with a list of React resources that you can use to go further in your learning.

## Ember チュートリアル

> **Note:** この Ember チュートリアルは Ember/Ember CLI version 3.18.0 で、2020年5月に動作確認を行いました。
> 
>もし、あなたのコードとサンプルのバージョンとを確認する必要があれば、[ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) で最新版を見ることができます。実行中のライブバージョンについては [https://nullvoxpopuli.github.io/ember-todomvc-tutorial/](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) から確認ができます(ただしチュートリアルで取り扱っていない機能も含まれています)。

- [1. Getting started with Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In our first Ember article we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a sample app, and then do some initial setup to get it ready for development.
- [2. Ember app structure and componentization](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In this article we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.
- [3. Ember interactivity: Events, classes and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : At this point we'll start adding some interactivity to our app, providing the ability to add and display new todo items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.
- [4. Ember Interactivity: Footer functionality, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.
- [5. Routing in Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In this article we learn about routing or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three todo views — "All", "Active", and "Completed".
- [6. Ember resources and troubleshooting](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

## Vue チュートリアル

> **Note:** この Vue チュートリアルは Vue 2.6.11 で、2020年5月に動作確認を行いました。
> 
> もし、あなたのコードとサンプルのバージョンとを確認する必要があれば、 [todo-vue repository](https://github.com/mdn/todo-vue) で最新版を見ることができます。実行中のライブバージョンについては [https://mdn.github.io/todo-vue/dist/](https://mdn.github.io/todo-vue/dist/) から確認ができます。

- [1. Getting started with Vue](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Now let's introduce Vue, the third of our frameworks. In this article, we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole project and an individual component, see how to run the project locally, and get it prepared to start building our example.
- [2. Creating our first Vue component](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Now it's time to dive deeper into Vue, and create our own custom component — we'll start by creating a component to represent each item in the todo list. Along the way, we'll learn about a few important concepts such as calling components inside other components, passing data to them via props and saving data state.
- [3. Rendering a list of Vue components](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : At this point we've got a fully working component; we're now ready to add multiple `ToDoItem` components to our App. In this article we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.
- [4. Adding a new todo form: Vue events, methods, and models](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : We now have sample data in place and a loop that takes each bit of data and renders it inside a `ToDoItem` in our app. What we really need next is the ability to allow our users to enter their own todo items into the app, and for that, we'll need a text `<input>`, an event to fire when the data is submitted, a method to fire upon submission to add the data and rerender the list, and a model to control the data. This is what we'll cover in this article.
- [5. Styling Vue components with CSS](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : The time has finally come to make our app look a bit nicer. In this article, we'll explore the different ways of styling Vue components with CSS.
- [6. Using Vue computed properties](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In this article we'll add a counter that displays the number of completed todo items, using a feature of Vue called computed properties. These work similarly to methods but only re-run when one of their dependencies changes.
- [7. Vue conditional rendering: editing existing todos](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Now it is time to add one of the major parts of functionality that we're still missing — the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities — namely `v-if` and `v-else` — to allow us to toggle between the existing todo item view and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.
- [8. Focus management with Vue refs](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using Vue refs to handle this — an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.
- [9. Vue resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

## どのフレームワークを選ぶべきか？

ここでは主要なフレームワークである３つに焦点を当てて、そのガイトを取り扱いました。React/ReactDOM、Ember、Vue です。これらを取り上げた理由は以下の通りです。

- どのようなツールでもそうですが、積極的に開発がなされ、廃止される可能性がないもの、また就職活動でも助けになるスキルを選ぶことが望ましい。
- 初心者が複雑なものを学ぶ際に手助けを得られることは非常に重要であるため、活発なコミュニティと優れたドキュメントがあること。
- モダンなフレームワークの**すべて**を網羅するリソースはありません。常に新たなフレームワークが登場するため、このリストをその度に更新することは非常に困難です。
- 初心者は数ある選択肢の中から、何を選べば良いのかを悩みます。そのため、リストを短くすると役に立ちます。

前もって言っておきますが、取り上げたフレームワークは私たちが**ベストだと思うから選んだわけではありません**。また推奨しているわけでもありません。ただ、上記の基準を満たしていると考えただけです。

初期の段階では、もっと多くのフレームワークを取り上げたいと考えていましたが、このコンテンツの公開を遅らせることよりも、後からフレームワークを追加する方が良いと考えました。もし、あなたのお気に入りのフレームワークがこのコンテンツに含まれておらず、それを変える手助けをしたいのであれば、私たちと気軽に意見を交わしましょう！[Matrix](https://wiki.mozilla.org/Matrix) や [Discourse](https://discourse.mozilla.org/c/mdn) を通じて私たちと連絡を取るか、[mdn-admins list](mailto:mdn-admins@mozilla.org) にメールを送ってください。
