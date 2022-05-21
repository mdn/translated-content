---
title: Angular todo リストアプリの事始め
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - Angular
  - Components
  - Structure
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

この時点で、Angular を使用して todo リストアプリケーションの作成を開始する準備が整いました。 完成したアプリケーションには、やることのリストが表示され、機能の編集、削除、追加が含まれます。 この記事では、アプリケーションの構造を理解し、やることの基本的なリストを表示するようになります。

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
      <th scope="row">Objective:</th>
      <td>
        基本的なアプリ構造を作成するには、やることのリストを表示するようにします アイテム、およびコンポーネントなどの基本的な Angular の概念を理解し、構造、コンポーネント間でのデータの共有、コンテンツのループ 作成する。
      </td>
    </tr>
  </tbody>
</table>

## to-do アプリケーションの構造

フレームワークを使用しない基本的なアプリケーションと同様に、Angular アプリケーションには `index.html` があります。
`index.html` の `<body>` タグ内で、Angular は特別な要素 `<app-root>` を使用してメインコンポーネントを挿入します。メインコンポーネントには、作成した他のコンポーネントが含まれます。
通常、 `index.html`に触れる必要はありません。代わりに、コンポーネントと呼ばれるアプリケーションの特殊な領域に作業を集中させます。

### コンポーネントを使用して、アプリケーションの構成

コンポーネントは、Angular アプリケーションの中心的な構成要素です。
この to-do アプリケーションには、アプリケーションの基盤としてのコンポーネントと、to-do アイテムを処理するためのコンポーネントの 2 つのコンポーネントがあります。

各コンポーネントは、TypeScript クラス、HTML、および CSS で構成されています。
TypeScript は JavaScript にトランスパイルまたは変換されます。つまり、アプリケーションは最終的にプレーンな JavaScript になりますが、Typescript の拡張機能と合理化された構文を使用できるという便利さがあります。

### \*ngIf and \*ngFor を使用して UI を動的変更

このチュートリアルでは、DOM の構造を動的に変更するための 2 つの重要な Angular ディレクティブについても説明します。
ディレクティブは、アプリケーションの変更に影響を与えるために HTML で使用できるコマンドのようなものです。

このチュートリアルで取り上げる最初のディレクティブは、Angular のイテレーター `*ngFor` です。
`*ngFor` は、配列内のアイテムに基づいて DOM 要素を動的に作成できます。

このチュートリアルで学習する 2 番目のディレクティブは `*ngIf` です。
`*ngIf` を使用して、条件に基づいて DOM に要素を追加または DOM から削除できます。
たとえば、ユーザーが to-do リストの項目を編集したい場合は、その項目を編集する手段をユーザーに提供できます。
アイテムを編集したくない場合は、編集用のインターフェイスを削除できます。

### コンポーネント間でのデータの共有

この to-do アプリケーションでは、データを共有するようにコンポーネントを構成します。
to do リストに新しいアイテムを追加するには、メインコンポーネントが新しいアイテムを 2 番目のコンポーネントに送信する必要があります。
この 2 番目のコンポーネントは、アイテムを管理し、編集、完了のマーク、および個々のアイテムの削除を処理します。

`@Input()` および `@Output()` と呼ばれる特別なデコレータを使用して、Angular コンポーネント間でデータを共有します。
これらのデコレータを使用して、特定のプロパティでデータがコンポーネントに出入りできるように指定します。
`@Output()` を使用するには、一方のコンポーネントでイベントを発生させて、もう一方のコンポーネントが利用可能なデータがあることを認識できるようにします。

## Item の定義

`app` ディレクトリに、次の内容の `item.ts` という名前の新しいファイルを作成します。

```js
export interface Item {
  description: string;
  done: boolean;
}
```

このファイルは[後で](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component#add_logic_to_itemcomponent)使用するまで使用しませんが、 `item` が何であるかを知って記録する良い機会です。 `Item` `interface` は、アプリケーションが `item` が何であるかを理解できるように、 `item` オブジェクトモデルを作成します。この to-do リストの場合、 `item` は説明があり、実行できるオブジェクトです。

## Add logic to AppComponent

Now that you know what an `item` is, you can give your application some items by adding them to the TypeScript file, `app.component.ts`.
In `app.component.ts`, replace the contents with the following:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}
```

The first line is a JavaScript import that imports Angular.
The `@Component()` decorator specifies metadata about the `AppComponent`.
The default metadata properties are as follows:

- `selector`: Tells you the name of the CSS selector that you use in a template to instantiate this component. Here it is `'app-root'`.
  In the `index.html`, within the `body` tag, the Angular CLI added `<app-root></app-root>` when generating your application.
  You use all component selectors in the same way by adding them to other component HTML templates.
- `templateUrl`: Specifies the HTML file to associate with this component.
  Here it is, './app.component.html',
- `styleUrls`: Provides the location and name of the file for your styles that apply specifically to this component. Here it is `'./app.component.css'`.

The `filter` property is of type `union`, which means `filter` could have the value of `all`, `active`, or `done`.
With the `union` type, if you make a typo in the value you assign to the `filter` property, TypeScript lets you know so that you can catch the bug early.
This guide shows you how to add filtering in a later step, but you can also use a filter to show the default list of all the items.

The `allItems` array contains the to-do items and whether they are `done`.
The first item, `eat`, has a `done` value of true.

The getter, `get items()`, retrieves the items from the `allItems` array if the `filter` is equal to `all`.
Otherwise, `get items()` returns the `done` items or the outstanding items depending on how the user filters the view.
The getter also establishes the name of the array as `items`, which you'll use in the next section.

## Add HTML to the AppComponent template

To see the list of items in the browser, replace the contents of `app.component.html` with the following HTML:

```html
<div class="main">
  <h1>My To Do List</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

The `<li>` contains an `*ngFor`, a built-in Angular directive that iterates over the items in the `items` array.
For each item, `*ngFor` creates a new `<li>`.
The double curly braces that contain `item.description` instructs Angular to populate each `<li>` with the text of each item's description.

In the browser, you should see the list of items as follows:

```
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Add items to the list

A to-do list needs a way to add items.

In `app.component.ts`, add the following method to the class:

```js
addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}
```

The `addItem()` method takes an item that the user provides and adds it to the array when the user clicks the **Add** button.
The `addItem()` method uses the array method `unshift()` to add a new item to the beginning of the array and the top of the list.
You could alternatively use `push()`, which would add the new item to the end of the array and the bottom of the list.

To use the `addItem()` method, edit the HTML in the `AppComponent` template.

In `app.component.html`, replace the `<h2>` with the following:

```js
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput"
/>

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

When the user types a new item in the `<input>` and presses **Enter**, the `addItem()` method adds the value to the `items` array.
Pressing the **Enter** key also resets the value of `<input>` to an empty string.
Alternatively, the user can click the **Add** button which calls the same`addItem()` method.

## Summary

By now you should have your basic list of to-dos displaying in your browser. That's great progress! Of course, we have a lot more to do. In the next article we will look at adding some styling to our application.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
