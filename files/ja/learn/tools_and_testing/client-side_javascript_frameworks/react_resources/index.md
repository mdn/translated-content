---
title: React のリソース
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
tags:
  - Beginner
  - JavaScript
  - Learn
  - React
  - client-side
  - framework
  - resources
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

最後の記事では、更に学習を進めるために利用できる React のリソースを紹介します。

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
      <td>React をより学習するためのさらなるリソースを提供する</td>
    </tr>
  </tbody>
</table>

## コンポーネントレベルのスタイル

このチュートリアルではこのアプローチは使用しませんが、多くの React アプリケーションでは、単一のモノリシックなスタイルシートではなく、コンポーネントごとにスタイルを定義しています。

`create-react-app` を使うと、CSS ファイルが JavaScript モジュールにインポートできるので、対応するコンポーネントがレンダリングされるときにだけ CSS がユーザーに送信されるようになります。このアプリでは、例えば、専用の `Form.css` ファイルを書いて、それぞれのコンポーネントのスタイルを記載し、次のようにそれぞれのモジュールにスタイルをインポートすることができます。

```js
import Form from './Form';
import './Form.css'
```

この方法だと、特定のコンポーネントに属する CSS を簡単に特定し、管理することができます。しかし、コードベース全体でスタイルシートを断片化することになり、この断片化は価値のあるものにならないかもしれません。何百ものユニークなビューと多くの可動部分を持つ大規模なアプリケーションの場合、ユーザーに送信される無関係なコードの量を制限することは理にかなっています。アプリケーション全体のスタイルと、その上に構築された特定のコンポーネントのスタイルをもつことになるでしょう。

[コンポーネントのスタイルシートについては、 create-react-app のドキュメントに詳しく書かれています。](https://create-react-app.dev/docs/adding-a-stylesheet/)

## React DevTools

このチュートリアルでは `console.log()` を使ってアプリケーションの state や props を確認しました。また、 React が CLI やブラウザの JavaScript コンソールに表示する便利な警告やエラーメッセージも見てきたと思います。しかし、ここでできることはまだあります。

React DevTools はブラウザーで React アプリケーションの内部を直接検査できるようにするものです。ブラウザーの開発者ツールに新しいパネルが追加され、それを使って様々なコンポーネントの state や props を検査したり、 state や props を編集してアプリケーションにすぐに変更を加えたりすることができます。

このスクリーンショットは React DevTools に表示される私達が作成したアプリケーションの最終形を示します。

![Our project being shown in React devtools](react-devtools.png)

左側には、アプリケーションを構成するすべてのコンポーネントが表示され、配列からレンダリングされるものの一意なキーが表示されます。右側には、 App コンポーネントが利用する props とフックが表示されています。また、`Form`、`FilterButton`、`Todo` コンポーネントは右側にインデントされていることに注意してください。より複雑なアプリでは、このビューは親子関係を一目で理解するために最適です。

React DevTools は様々な形態で提供されています。

- [Chrome 拡張](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Firefox 拡張](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Chromium 版 Edge 拡張 （近日公開）
- [NPM か Yarn でインストールできるスタンドアロンアプリケーション](https://www.npmjs.com/package/react-devtools)

これらのうち一つをインストールしてみて、作ったアプリの検査に使ってみてください！

[React のブログで React DevTools について詳しく読むことができます。](https://reactjs.org/blog/2019/08/15/new-react-devtools.html) 

## コンテクスト API

このチュートリアルで作成したアプリケーションでは、 `App` コンポーネントからデータを必要とする子コンポーネントにデータを渡すために、コンポーネントの props を利用しました。ほとんどの場合、 props はデータを共有するための適切な方法です。しかし、複雑で深くネストされたアプリケーションでは、必ずしも最適とは言えません。

React はコンポーネントツリーの下に props を渡さずに、データを必要とするコンポーネントにデータを提供する方法として [コンテクスト API](https://reactjs.org/docs/context.html) を提供します。また、これを容易にする [useContext フック](https://reactjs.org/docs/hooks-reference.html#usecontext) も提供されています。

自身でこの API を試したいというかたは、 Smashing Magazine が書いた [React コンテクストの紹介記事](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) を読むといいでしょう。

## クラスコンポーネント

このチュートリアルでは触れていませんが、 ES6 のクラスを使用して React コンポーネントを構築することは可能です。これらはクラスコンポーネントと呼ばれます。フックが登場するまで、 ES6 のクラスはコンポーネントに state をもたせたり、副作用のある描画の管理を行うための唯一の方法でした。これらは、他の特定のエッジケースな機能を処理する唯一の方法であり、従来の React プロジェクトでは非常に一般的です。公式の React ドキュメントは、それらについて学び始めるのに最適です。

- [Reactドキュメントで学ぶ状態とライフサイクル](https://reactjs.org/docs/state-and-lifecycle.html)
- [Reactドキュメントで学ぶ React 入門](https://reactjs.org/tutorial/tutorial.html)
- [MDN で学ぶ JavaScript のクラス](/ja/docs/Web/JavaScript/Reference/Classes)

## テスト

`create-react-app` はアプリケーションがすぐにテストできるツールを提供しています。しかし、チュートリアルの前半で関連するファイルを削除してしまったかもしれません。 `create-react-app` のドキュメントには [テストのための基本的なことが書かれています](https://create-react-app.dev/docs/running-tests/) 。

## ルーティング

ルーティングは従来、ユーザーのコンピューター上のアプリケーションではなく、サーバーによって処理されていました。しかし、現在では、ウェブアプリケーションがブラウザーの位置を読み取り、更新し、特定のユーザーインターフェースをレンダリングすることが可能です。これをクライアントサイドルーティングと呼びます。アプリケーションのために多くの一意なルート (`/home` または `/dashboard` 、 `login/` など) を作成することが可能です。

React コミュニティはクライアントサイドルーティングについて、2つの主要なライブラリを作成しています。 [React Router](https://reacttraining.com/react-router/) と [Reach Router](https://reach.tech/router) です。

- React Router は、複雑なルーティングを必要とするアプリケーションに適しており、 Reach Router よりもエッジケースに対応することができます。しかし、 React Router はサイズが大きいライブラリになります。
- Reach Router は、より単純なアプリケーションに適しており、ユーザーがページ間を移動するときにフォーカスを自動的に管理します。

クライアントサイドのルーティングでは、フォーカス管理が不可欠です。これがないと、キーボードユーザーはフォーカスの問題に陥り、スクリーンリーダーを使用するユーザーは新しいページに移動したことに気づかない可能性があります。 Reach Router はアクセシビリティに優れているため、ルーティングを導入し始めるには良いライブラリです。

ただし、一つだけ注意点があります。これらのプロジェクトは [近い将来、統合される](https://reacttraining.com/blog/reach-react-router-future/) 予定があるということです。この統合が行われた場合、 React Router が(Reach のフォーカス管理機能が追加され)存続するプロジェクトとなる予定です。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Getting started with Angular](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
