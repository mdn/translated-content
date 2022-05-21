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
      <th scope="row">目的:</th>
      <td>
        基本的なアプリ構造を作成するには、to-do items のリストを表示をすることで、コンポーネント構造、コンポーネント間でのデータ共有、コンテンツの作成、ループなどの基本的な Angular の概念を理解することです。
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

## AppComponent にロジックを追加

`item` が何であるかがわかったので、TypeScript ファイル `app.component.ts` に追加することで、アプリケーションにいくつかのアイテムを与えることができます。
`app.component.ts` で、内容を次のように置き換えます。

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

最初の行は、Angular をインポートする JavaScript インポートです。
`@Component()` デコレータは、 `AppComponent` に関するメタデータを指定します。
デフォルトのメタデータプロパティは次のとおりです。

- `selector`: このコンポーネントをインスタンス化するためにテンプレートで使用する CSS セレクターの名前を示します。 これが `'app-root'` です。
  `index.html` の `body` タグ内で、AngularCLI はアプリケーションの生成時に `<app-root></app-root>` を追加しました。
  すべてのコンポーネントセレクターを他のコンポーネント HTML テンプレートに追加することにより、同じように使用します。
- `templateUrl`: このコンポーネントに関連付ける HTML ファイルを指定します。
  これが、'./app.component.html' です。
- `styleUrls`: このコンポーネントに特に適用されるスタイルのファイルの場所と名前を提供します。 これが `'./app.component.css'` です。

`filter` プロパティは `union` 型です。つまり、 `filter` は `all`, `active` 又は、 `done` の値を持つことができます。
`union` タイプでは、 `filter` プロパティに割り当てる値にタイプミスをすると、TypeScript はバグを早期に発見できるように通知します。
このガイドでは、後の手順でフィルタリングを追加する方法を示しますが、フィルターを使用してすべての items のデフォルトリストを表示することもできます。

`allItems` 配列には、to-do items と `done` が含まれます。
最初のアイテムである `eat` は、 `done` の値が true です。

getter の `get items()` は、 `filter` が `all` と等しい場合、 `allItems` 配列からアイテムを取得します。
それ以外の場合、 `get items()` は、ユーザーがビューをフィルタリングする方法に応じて、 `done` items または未処理の items を返します。
ゲッターはまた、配列の名前を `items` として確立します。これは、次のセクションで使用します。

## AppComponent テンプレートに HTML を追加

ブラウザで items のリストを表示するには、 `app.component.html` の内容を次の HTML に置き換えます。

```html
<div class="main">
  <h1>My To Do List</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

`<li>` には、 `items` 配列内のアイテムを反復処理する組み込みの Angular ディレクティブである `*ngFor` が含まれています。
アイテムごとに、 `*ngFor` は新しい `<li>` を作成します。
`item.description` を含む二重中括弧は、各 `<li>` に各アイテムの説明のテキストを入力するように Angular に指示します。

ブラウザに、次のようなアイテムのリストが表示されます。

```
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## リストに items を追加

to-do リストには、 items を追加する方法が必要です。

`app.component.ts` で、次のメソッドをクラスに追加します。

```js
addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}
```

`addItem()` メソッドは、ユーザーが提供したアイテムを受け取り、ユーザーが[**Add**]ボタンをクリックすると、そのアイテムを配列に追加します。
`addItem()` メソッドは、配列メソッド `unshift()` を使用して、配列の先頭とリストの先頭に新しいアイテムを追加します。
または、 `push()` を使用して、配列の最後とリストの一番下に新しいアイテムを追加することもできます。

`addItem()` メソッドを使用するには、 `AppComponent` テンプレートの HTML を編集します。

`app.component.html` で、 `<h2>` を次のように置き換えます。

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

ユーザーが `<input>` に新しいアイテムを入力して**Enter**を押すと、 `addItem()` メソッドはその値を `items` 配列に追加します。
**Enter** キーを押すと、 `<input>` の値も空の文字列にリセットされます。
または、同じ `addItem()` メソッドを呼び出す**追加**ボタンをクリックすることもできます。

## まとめ

これで、ブラウザに to-do の基本的なリストが表示されるはずです。 それは大きな進歩です！ もちろん、やるべきことはまだたくさんあります。 次の記事では、アプリケーションにスタイルを追加する方法について説明します。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## このモジュール内

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

  - [Getting started with Angular](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
