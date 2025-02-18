---
title: React のリソース
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

最後の記事では、更に学習を進めるために利用できる React のリソースを紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コアの <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a> 言語、<a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">端末/コマンドライン</a>が分かっていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>React についてさらに学ぶためのリソースを把握すること。</td>
    </tr>
  </tbody>
</table>

## コンポーネントレベルのスタイル

チュートリアルでは、すべての CSS を単一の `index.css` ファイルにまとめましたが、 React アプリケーションでは、コンポーネントごとのスタイルシートを定義するのが一般的です。 Vite で構築されたアプリケーションでは、 CSS ファイルを作成し、対応するコンポーネントモジュールにインポートすることで、このスタイルシートを定義することができます。

例えば、`<Form />` コンポーネントに関連の CSS を収める専用の `Form.css` ファイルを作り、そのスタイル設定を `Form.jsx` にインポートするということも可能です。

```jsx
import Form from "./Form";
import "./Form.css";
```

この方法だと、特定のコンポーネントに属する CSS を簡単に特定し、管理することができます。しかし、コードベース全体でスタイルシートを断片化することになり、この断片化は価値のあるものにならないかもしれません。何百ものユニークなビューと多くの可動部分を持つ大規模なアプリケーションの場合、ユーザーに送信される無関係なコードの量を制限することは理にかなっています。アプリケーション全体のスタイルと、その上に構築された特定のコンポーネントのスタイルをもつことになるでしょう。

React コンポーネントのスタイル設定に関するこの手法や他にも様々な手法については、Smashing Magazine の記事「[Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/)」で詳しく解説されています。

## React 開発者ツール

このチュートリアルでは `console.log()` を使ってアプリケーションの状態やプロップを確認しました。また、 React が CLI やブラウザーの JavaScript コンソールに表示する便利な警告やエラーメッセージも見てきたと思います。しかし、ここでできることはまだあります。

React 開発者ツールはブラウザーで React アプリケーションの内部を直接検査できるようにするものです。ブラウザーの開発者ツールに新しいパネルが追加され、それを使って様々なコンポーネントの状態やプロップを検査したり、状態やプロップを編集してアプリケーションにすぐに変更を加えたりすることができます。

このスクリーンショットは React 開発者ツールに表示される私達が作成したアプリケーションの最終形を示します。

![自分のプロジェクトを React 開発ツールで表示させる](react-devtools.png)

左側には、アプリケーションを構成するすべてのコンポーネントが表示され、配列からレンダリングされるものの一意なキーが表示されます。右側には、 App コンポーネントが利用するプロップとフックが表示されています。また、`Form`、`FilterButton`、`Todo` コンポーネントは右側にインデントされていることに注意してください。より複雑なアプリでは、このビューは親子関係を一目で理解するために最適です。

React DevTools は様々な形態で提供されています。

- [Chrome 拡張機能](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Firefox 拡張機能](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Microsoft Edge ブラウザー拡張機能](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- [npm か Yarn でインストールできるスタンドアロンアプリケーション](https://www.npmjs.com/package/react-devtools)

これらのうち一つをインストールしてみて、作ったアプリの検査に使ってみてください！

[React のブログで React 開発者ツールについて詳しく読むことができます](https://ja.react.dev/learn/react-developer-tools)。

## `useReducer()` フック

このチュートリアルでは、`useState()` フックを使用して、イベントハンドラー関数の小さな集合全体にわたって状態を管理しました。これは学ぶ目的では良かったのですが、状態管理のロジックがコンポーネントのイベントハンドラー（特に `<Todo />` コンポーネントの）に紐付けられた状態になってしまいました。

`useReducer()` フックは、異なるが関連のある状態管理ロジックを単一の関数に統合する方法を開発者に提供します。 `useState()` よりもやや複雑ですが、これは開発者が保有しておくと便利なツールです。 [`useReducer()` についての詳細は React のドキュメント](https://ja.react.dev/learn/extracting-state-logic-into-a-reducer)をご覧ください。

## コンテキスト API

このチュートリアルで作成したアプリケーションでは、 `App` コンポーネントからデータを必要とする子コンポーネントにデータを渡すために、コンポーネントのプロップを利用しました。ほとんどの場合、プロップはデータを共有するための適切な方法です。しかし、複雑で深くネストされたアプリケーションでは、必ずしも最適とは言えません。

React はコンポーネントツリーの下にプロップを渡さずに、データを必要とするコンポーネントにデータを提供する方法として [コンテキスト API](https://ja.react.dev/learn/passing-data-deeply-with-context) を提供します。また、これを容易にする [useContext フック](https://ja.react.dev/reference/react/useContext)も提供されています。

自身でこの API を試したいというかたは、 Smashing Magazine が書いた [React コンテキストの紹介記事](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) を読むといいでしょう。

## クラスコンポーネント

このチュートリアルでは触れていませんが、 React コンポーネントを [JavaScript のクラス](/ja/docs/Web/JavaScript/Reference/Classes)を使用して構築することは可能です。これらはクラスコンポーネントと呼ばれます。フックが登場するまで、クラスはコンポーネントに状態をもたせたり、副作用のある描画の管理を行うための唯一の方法でした。これらは、他の特定のエッジケースな機能を処理する唯一の方法であり、従来の React プロジェクトでは非常に一般的です。公式の React ドキュメントでは、 [`Component`](https://ja.react.dev/reference/react/Component) 基底クラスのリファレンスを保守していますが、フックを使用して[状態](https://ja.react.dev/learn/state-a-components-memory)や[副作用](https://ja.react.dev/learn/synchronizing-with-effects)を管理することを推奨しています。

## テスト

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) などのライブラリーを使用すると、 React コンポーネントの単体テストを書くことが可能になります。 これらのテストを実行する方法は数多くあります。 テストフレームワークの [Vitest](https://vitest.dev/) は Vite の上に構築されており、 Vite を使用した React アプリケーションに最適なツールです。 [Jest](https://jestjs.io/) は、 React と併用できるもう一つの人気テストフレームワークです。

## ルーティング

ルーティングは従来、ユーザーのコンピューター上のアプリケーションではなく、サーバーによって処理されていました。しかし、現在では、ウェブアプリケーションがブラウザーの位置を読み取り、更新し、特定のユーザーインターフェイスをレンダリングすることが可能です。これをクライアントサイドルーティングと呼びます。アプリケーションのために多くの一意なルート (`/home` または `/dashboard` 、 `login/` など) を作成することが可能です。

[React Router](https://reactrouter.com/) は、 React 用の最も人気があり、最も堅牢なクライアントサイドのルーティングライブラリーです。開発者はこのライブラリーを使用して、アプリケーションのルートを定義し、それらのルートに関連付けられたコンポーネントを作成することができます。また、ブラウザーのロケーションと履歴を管理するための便利なフックやコンポーネントが数値指定されています。

> [!NOTE]
> クライアントサイドのルーティングでは、フォーカス管理が不可欠です。これがないと、キーボードユーザーはフォーカスの問題に陥り、スクリーンリーダーを使用するユーザーは新しいページに移動したことに気づかない可能性があります。これについて詳しくは、 Marcy Sutton の記事 ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing) を参照してください。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
