---
title: Angular をはじめる
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
tags:
  - Beginner
  - Frameworks
  - Installation
  - JavaScript
  - Learn
  - client-side
  - Angular
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

今度は、Google の Angular フレームワークを見てみましょう。これは、よく目にするもう 1 つの人気のあるオプションです。 この記事では、Angular が提供するものを確認し、前提条件をインストールしてサンプルアプリをセットアップし、Angular の基本的なアーキテクチャを確認します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          <a href="/ja/docs/Learn/HTML">HTML</a>、
          <a href="/ja/docs/Learn/CSS">CSS</a>、
          <a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること、
          <a
            href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ターミナル/コマンドライン</a
          >に関する知識があること。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        <p>
          ローカルの Angular 開発環境をセットアップするには、スターターアプリを作成し、 そしてそれがどのように機能するかの基本を理解します。 
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Angular とはなんですか ?

Angular は、[TypeScript](https://www.typescriptlang.org/) でビルドする開発プラットフォームです。 Angular には次のものが含まれます。

- スケーラブルな Web アプリケーションを構築するためのコンポーネントベースのフレームワーク
- ルーティング、フォーム管理、クライアント/サーバー通信など、さまざまな機能をカバーする、十分に統合されたライブラリのコレクション
- コードの開発、ビルド、テスト、更新を支援する一連の開発者ツール

<p>
Angular を使用してアプリケーションを構築する場合、単一の開発者プロジェクトからエンタープライズレベルのアプリケーションまで拡張できるプラットフォームを利用しています。 Angularは、更新を可能な限り簡単にするように設計されているため、最小限の労力で最新の開発を利用できます。 何よりも、Angularエコシステムは、170万人を超える開発者、ライブラリ作成者、コンテンツ作成者からなる多様なグループで構成されています。 
</p>

<p>
Angular プラットフォームの探索を開始する前に、AngularCLIについて知っておく必要があります。 Angular CLI は、Angular アプリケーションを開発するための最も速く、最も簡単で、推奨される方法です。 Angular CLI を使用すると、多くのタスクを簡単に実行できます。 ここではいくつかの例を示します。 
</p>

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/build">ng build</a></code>
      </td>
      <td>Angular アプリを出力ディレクトリにコンパイルします。 </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/serve">ng serve</a></code>
      </td>
      <td>アプリケーションのビルド・起動をして、ファイルの変更時に再構築します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/generate">ng generate</a></code>
      </td>
      <td>schematic に基づいてファイルを生成または変更します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/test">ng test</a></code>
      </td>
      <td>対象のプロジェクトで単体テストを実行します。 </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/e2e">ng e2e</a></code>
      </td>
      <td>
        Angular アプリケーションをビルドして提供し、end to end のテストを実行します。 
      </td>
    </tr>
  </tbody>
</table>

Angular CLI は、アプリケーションを構築するための大事なツールであることがわかります。

## 構築に必要なもの

このチュートリアルシリーズでは、 to-do list アプリケーションの作成について説明します。 このアプリケーションを介して、Angular を使用してアイテムを管理、編集、追加、削除、およびフィルタリングする方法を学習します。

## 前提条件

ローカルシステムに Angular をインストールするには、次のものが必要です。

- **Node.js**

  Angular には、Node.js の[現在のアクティブな LTS、またはメンテナンス LTS](https://nodejs.org/about/releases) バージョンが必要です。特定のバージョン要件については、[package.json](https://unpkg.com/@angular/cli/package.json) ファイルの`engines`キーを参照してください。
  Node.js のインストールの詳細については、[nodejs.org](https://nodejs.org) を参照してください。
  システムで実行されている Node.js のバージョンがわからない場合は、ターミナルウィンドウで、 `node-v` を実行してください。

- **npm package manager**

  Angular、Angular CLI、および Angular アプリケーションは、多くの機能を[npm パッケージ](https://docs.npmjs.com/getting-started/what-is-npm)に依存しています。
  npm パッケージをダウンロードしてインストールするには、npm パッケージマネージャーが必要です。
  このガイドでは、[npm client](https://docs.npmjs.com/cli/install) コマンドラインインターフェイスを使用します。このコマンドラインインターフェイスは、デフォルトで `Node.js` とともにインストールされます。
  npm クライアントがインストールされていることを確認するには、ターミナルウィンドウで `npm-v` を実行します。

## Set up your application

You can use the Angular CLI to run commands in your terminal for generating, building, testing, and deploying Angular applications.
To install the Angular CLI, run the following command in your terminal:

```js
npm install -g @angular/cli
```

Angular CLI commands all start with `ng`, followed by what you'd like the CLI to do.
In the Desktop directory, use the following `ng new` command to create a new application called `todo`:

```js
ng new todo --routing=false --style=css
```

The `ng new` command creates a minimal starter Angular application on your Desktop.
The additional flags, `--routing` and `--style`, define how to handle navigation and styles in the application.
This tutorial describes these features later in more detail.

If you are prompted to enforce stricter type checking, you can respond with yes.

Navigate into your new project with the following `cd` command:

```js
cd todo
```

To run your `todo` application, use `ng serve`:

```js
ng serve
```

When the CLI prompts you about analytics, answer `no`.

In the browser, navigate to `http://localhost:4200/` to see your new starter application.
If you change any of the source files, the application automatically reloads.

While `ng serve` is running, you might want to open a second terminal tab or window in order to run commands.
If at any point you would like to stop serving your application, press `Ctrl+c` while in the terminal.

## Get familiar with your Angular application

The application source files that this tutorial focuses on are in `src/app`.
Key files that the CLI generates automatically include the following:

1. `app.module.ts`: Specifies the files that the application uses.
   This file acts as a central hub for the other files in your application.
2. `app.component.ts`: Also known as the class, contains the logic for the application's main page.
3. `app.component.html`: Contains the HTML for `AppComponent`. The contents of this file are also known as the template.
   The template determines the view or what you see in the browser.
4. `app.component.css`: Contains the styles for `AppComponent`. You use this file when you want to define styles that only apply to a specific component, as opposed to your application overall.

A component in Angular is made up of three main parts—the template, styles, and the class.
For example, `app.component.ts`, `app.component.html`, and `app.component.css` together constitute the `AppComponent`.
This structure separates the logic, view, and styles so that the application is more maintainable and scalable.

In this way, you are using the best practices from the very beginning.

The Angular CLI also generates a file for component testing called `app.component.spec.ts`, but this tutorial doesn't go into testing, so you can ignore that file.

Whenever you generate a component, the CLI creates these four files in a directory with the name you specify.

## The structure of an Angular application

Angular is built with TypeScript.
TypeScript is a superset of JavaScript meaning that any valid JavaScript is valid TypeScript.
TypeScript offers typing and a more concise syntax than plain JavaScript, which gives you a tool for creating more maintainable code and minimizing bugs.

Components are the building blocks of an Angular application.
A component includes a TypeScript class that has a `@Component()` decorator, an HTML template, and styles.

### The class

The class is where you put any logic your component needs.
This code can include functions, event listeners, properties, and references to services to name a few.
The class is in a file with a name such as `feature.component.ts`, where `feature` is the name of your component.
So, you could have files with names such as `header.component.ts`, `signup.component.ts`, or `feed.component.ts`.
You create a component with a `@Component()` decorator that has metadata that tells Angular where to find the HTML and CSS.
A typical component is as follows:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // your code goes here
}
```

This component is called `ItemComponent`, and its selector is `app-item`.
You use a selector just like regular HTML tags by placing it within other templates.
When a selector is in a template, the browser renders the template of that component.
This tutorial guides you through creating two components and using one within the other.

Angular's component model offers strong encapsulation and an intuitive application structure.
Components also make your application easier to unit test and can improve the overall readability of your code.

### The HTML template

Every component has an HTML template that declares how that component renders.
You can define this template either inline or by file path.

To refer to an external HTML file, use the `templateUrl` property:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

To write inline HTML, use the `template` property and write your HTML within backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>Hi!</h1>`,
})
export class AppComponent {}
```

Angular extends HTML with additional syntax that lets you insert dynamic values from your component.
Angular automatically updates the rendered DOM when your component's state changes.
One use of this feature is inserting dynamic text, as shown in the following example.

```html
<h1>\{{ title }}</h1>
```

The double curly braces instruct Angular to interpolate the contents within them.
The value for `title` comes from the component class:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}
```

When the application loads the component and its template, the browser sees the following:

```html
<h1>To do application</h1>
```

### Styles

A component can inherit global styles from the application's `styles.css` file and augment or override them with its own styles.
You can write component-specific styles directly in the `@Component()` decorator or specify the path to a CSS file.

To include the styles directly in the component decorator, use the `styles` property:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typically, a component uses styles in a separate file using the `styleUrls` property:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

With component-specific styles, you can organize your CSS so that it is easily maintainable and portable.

## Summary

That's it for your first introduction to Angular. At this point you should be set up and ready to build an Angular app, and have a basic understanding of how Angular works. In the next article we'll deepen that knowledge and start to build up the structure of our to-do list application.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Getting started with Angular](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
