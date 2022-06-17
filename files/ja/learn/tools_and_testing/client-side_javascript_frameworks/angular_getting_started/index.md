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

- スケーラブルなウェブアプリケーションを構築するためのコンポーネントベースのフレームワーク
- ルーティング、フォーム管理、クライアント/サーバー通信など、さまざまな機能をカバーする、十分に統合されたライブラリのコレクション
- コードの開発、ビルド、テスト、更新を支援する一連の開発者ツール

<p>
Angular を使用してアプリケーションを構築する場合、単一の開発者プロジェクトからエンタープライズレベルのアプリケーションまで拡張できるプラットフォームを利用しています。 Angular は、更新を可能な限り簡単にするように設計されているため、最小限の労力で最新の開発を利用できます。 何よりも、 Angular エコシステムは、170万人を超える開発者、ライブラリ作成者、コンテンツ作成者からなる多様なグループで構成されています。 
</p>

<p>
Angular プラットフォームの探索を開始する前に、 Angular CLI について知っておく必要があります。 Angular CLI は、Angular アプリケーションを開発するための最も速く、最も簡単で、推奨される方法です。 Angular CLI を使用すると、多くのタスクを簡単に実行できます。 ここではいくつかの例を示します。 
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
      <td>セマンティックに基づいてファイルを生成または変更します。</td>
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

- **npm パッケージマネージャー**

  Angular、Angular CLI、および Angular アプリケーションは、多くの機能を[npm パッケージ](https://docs.npmjs.com/getting-started/what-is-npm)に依存しています。
  npm パッケージをダウンロードしてインストールするには、npm パッケージマネージャーが必要です。
  このガイドでは、[npm client](https://docs.npmjs.com/cli/install) コマンドラインインターフェイスを使用します。このコマンドラインインターフェイスは、デフォルトで `Node.js` とともにインストールされます。
  npm クライアントがインストールされていることを確認するには、ターミナルウィンドウで `npm-v` を実行します。

## アプリケーションをセットアップする

Angular CLI を使用して、Angular アプリケーションを生成、構築、テスト、およびデプロイするためのコマンドをターミナルで実行できます。
Angular CLI をインストールするには、ターミナルで次のコマンドを実行します。

```js
npm install -g @angular/cli
```

Angular CLI コマンドはすべて `ng` で始まり、その後に CLI で実行する操作が続きます。
デスクトップディレクトリで、次の `ng new` コマンドを使用して、`todo`と いう名前の新しいアプリケーションを作成します。

```js
ng new todo --routing=false --style=css
```

`ng new` コマンドは、デスクトップ上に最小限のスターター Angular アプリケーションを作成します。
追加のフラグ `--routing` と `--style` は、アプリケーションでナビゲーションとスタイルを処理する方法を定義します。
このチュートリアルでは、これらの機能について後で詳しく説明します。

より厳密なタイプチェックを実施するように求められた場合は、yes で応答できます。

次の `cd` コマンドを使用して新しいプロジェクトに移動します。

```js
cd todo
```

`todo` アプリケーションを実行するには、`ng serve` を使用します。

```js
ng serve
```

CLI が analytics についてプロンプトを表示したら、`no` と答えます。

ブラウザで、 ``http://localhost:4200/` に移動して、新しいスターターアプリケーションを表示します。
ソースファイルのいずれかを変更すると、アプリケーションは自動的にリロードされます。

`ng serve` の実行中に、コマンドを実行するために 2 番目のターミナルタブまたはウィンドウを開くことができます。
アプリケーションの実行を停止したい場合は、ターミナルで `Ctrl+c` を押してください。

## Angular アプリケーションに慣れてください

このチュートリアルで焦点を当てているアプリケーションソースファイルは、 `src/app` にあります。
CLI が自動的に生成するキーファイルには、次のものが含まれます。

1. `app.module.ts`: アプリケーションが使用するファイルを指定します。
   このファイルは、アプリケーション内の他のファイルの中央ハブとして機能します。
2. `app.component.ts`: クラスとも呼ばれ、アプリケーションのメインページのロジックが含まれています。
3. `app.component.html`: `AppComponent` の HTML が含まれています。 このファイルの内容は、テンプレートとも呼ばれます。
   テンプレートは、ブラウザに表示されるビューまたは内容を決定します。
4. `app.component.css`: `AppComponent` のスタイルが含まれています。 このファイルは、アプリケーション全体ではなく、特定のコンポーネントにのみ適用されるスタイルを定義する場合に使用します。

Angular のコンポーネントは、テンプレート、スタイル、クラスの 3 つの主要部分で構成されています。
たとえば、 `app.component.ts` 、 ` app.component.html` 、および `app.component.css` は一緒に `AppComponent` を構成します。
この構造により、ロジック、ビュー、およびスタイルが分離され、アプリケーションの保守性と拡張性が向上します。

このようにして、最初からベストプラクティスを使用しています。

Angular CLI は `app.component.spec.ts` と呼ばれるコンポーネントテスト用のファイルも生成しますが、このチュートリアルではテストに入らないため、そのファイルは無視してかまいません。

コンポーネントを生成するたびに、CLI は指定した名前のディレクトリにこれらの 4 つのファイルを作成します。

## Angular アプリケーションの構造

Angular は TypeScript で構築されています。
TypeScript は JavaScript のスーパーセットであり、有効な JavaScript が有効な TypeScript であることを意味します。
TypeScript は、単純な JavaScript よりもタイピングとより簡潔な構文を提供します。これにより、より保守しやすいコードを作成し、バグを最小限に抑えるためのツールが提供されます。

コンポーネントは、Angular アプリケーションの構成要素です。
コンポーネントには、 `@Component()` デコレータ、HTML テンプレート、およびスタイルを持つ TypeScript クラスが含まれます。

### クラス

このクラスは、コンポーネントに必要なロジックを配置する場所です。
このコードには、関数、イベントリスナー、プロパティ、サービスへの参照などを含めることができます。
クラスは、 `feature.component.ts` などの名前のファイルにあります。ここで、`feature` はコンポーネントの名前です。
したがって、 `header.component.ts` 、` signup.component.ts` 、または `feed.component.ts` などの名前のファイルを作成できます。
HTML と CSS の場所を Angular に指示するメタデータを持つ `@Component()` デコレータを使用してコンポーネントを作成します。
一般的なコンポーネントは次のとおりです。

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

このコンポーネントは `ItemComponent` と呼ばれ、そのセレクターは `app-item` です。
セレクターは、他のテンプレート内に配置することで、通常の HTML タグと同じように使用できます。
セレクターがテンプレート内にある場合、ブラウザーはそのコンポーネントのテンプレートをレンダリングします。
このチュートリアルでは、2 つのコンポーネントを作成し、一方を他方のコンポーネント内で使用する方法について説明します。

Angular のコンポーネントモデルは、強力なカプセル化と直感的なアプリケーション構造を提供します。
コンポーネントを使用すると、アプリケーションの単体テストが容易になり、コードの全体的な可読性が向上します。

### HTML テンプレート

すべてのコンポーネントには、そのコンポーネントのレンダリング方法を宣言する HTML テンプレートがあります。
このテンプレートは、インラインまたはファイルパスで定義できます。

外部 HTML ファイルを参照するには、`templateUrl` プロパティを使用します。

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

インライン HTML を作成するには、 `template` プロパティを使用して、バッククォート内に HTML を作成します。

```js
@Component({
  selector: "app-root",
  template: `<h1>Hi!</h1>`,
})
export class AppComponent {}
```

Angular は、コンポーネントから動的な値を挿入できる追加の構文で HTML を拡張します。
Angular は、コンポーネントの状態が変化すると、レンダリングされた DOM を自動的に更新します。
この機能の使用法の 1 つは、次の例に示すように、動的テキストを挿入することです。

```html
<h1>\{{ title }}</h1>
```

二重中括弧は、Angular にその中のコンテンツを補間するように指示します。
`title` の値は、コンポーネントクラスから取得されます。

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

アプリケーションがコンポーネントとそのテンプレートをロードすると、ブラウザには次のように表示されます。

```html
<h1>To do application</h1>
```

### スタイル

コンポーネントは、アプリケーションの `styles.css` ファイルからグローバルスタイルを継承し、それらを独自のスタイルで拡張またはオーバーライドできます。
コンポーネント固有のスタイルを `@Component()` デコレータに直接書き込むか、CSS ファイルへのパスを指定できます。

コンポーネントデコレータにスタイルを直接含めるには、`styles` プロパティを使用します。

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

通常、コンポーネントは、`styleUrls` プロパティを使用して別のファイルのスタイルを使用します。

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

コンポーネント固有のスタイルを使用すると、CSS を整理して、保守と移植が容易になります。

## まとめ

Angular の最初の紹介は以上です。 この時点で、Angular アプリをセットアップして構築する準備ができており、Angular がどのように機能するかについての基本的な理解が必要です。 次の記事では、その知識を深め、やることリストアプリケーションの構造を構築し始めます。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## このモジュール内

- [Introduction to client-side frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
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
