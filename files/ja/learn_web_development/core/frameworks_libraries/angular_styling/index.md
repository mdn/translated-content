---
title: Angular アプリのスタイル設定
slug: Learn_web_development/Core/Frameworks_libraries/Angular_styling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}

基本的なアプリケーション構造がセットアップされ、アプリケーションが表示されるようになったので、次の段階へ移って、 Angular がアプリケーションのスタイル設定をどのように処理するかを見てみましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        主要な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
        言語を扱うことができ、
        <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>Angular アプリのスタイルを設定する方法を学びます。</td>
    </tr>
  </tbody>
</table>

## Angular にスタイルを追加する

Angular CLI は、次の 2 種類のスタイルファイルを生成します。

- コンポーネントスタイル: Angular CLI は、各コンポーネントにスタイル用の独自のファイルを提供します。
  このファイルのスタイルは、そのコンポーネントにのみ適用されます。
- `styles.css`: `src` ディレクトリーでは、コンポーネントレベルでスタイルを指定しない限り、このファイルのスタイルはアプリケーション全体に適用されます。

CSS プリプロセッサーを使用しているかどうかによって、CSS ファイルの拡張子は異なる場合があります。
Angular は、プレーン CSS、SCSS、Sass、Less に対応しています。

`src/styles.css` に、次のスタイルを貼り付けます。

```css
body {
  font-family: Helvetica, Arial, sans-serif;
}

.btn-wrapper {
  /* flexbox */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: 0.35rem 1rem 0.25rem 1rem;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ecf2fd;
}

.btn:active {
  background-color: #d1e0fe;
}

.btn:focus {
  outline: none;
  border: black solid 2px;
}

.btn-primary {
  color: #fff;
  background-color: #000;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.3rem;
  border: black solid 2px;
  margin: 1rem 0;
}

.btn-primary:hover {
  background-color: #444242;
}

.btn-primary:focus {
  color: #000;
  outline: none;
  border: #000 solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}
```

`src/styles.css` の CSS はアプリケーション全体に適用されますが、これらのスタイルがページのすべてに影響するわけではありません。
次のステップは、特に `AppComponent` に適用されるスタイルを追加することです。

`app.component.css` に、次のスタイルを追加します。

```css
.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}

@media screen and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding-bottom: 1rem;
}

.lg-text-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
}

.btn-wrapper {
  margin-bottom: 2rem;
}

.btn-menu {
  flex-basis: 32%;
}

.active {
  color: green;
}

ul {
  padding-inline-start: 0;
}

ul li {
  list-style: none;
}
```

最後のステップは、ブラウザーに再度アクセスして、スタイルがどのように更新されたかを確認することです。 スタイルが更新された事を確認出来ます。

## まとめ

Angular でのスタイル設定の簡単なツアーが終了したので、アプリ機能の作成に戻りましょう。 次の記事では、to-do items に適切なコンポーネントを作成し、to-do items を確認、編集、および削除できるようにします。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}
