---
title: Angular アプリのスタイリング
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

基本的なアプリケーション構造がセットアップされ、アプリケーションが表示されるようになったので、次の段階へ移って、Angular がアプリケーションのスタイリングをどのように処理するかを見てみましょう。

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
      <td>Angular アプリのスタイルを設定する方法を学びます。</td>
    </tr>
  </tbody>
</table>

## Angular にスタイルを追加する

Angular CLI は、次の 2 種類のスタイルファイルを生成します。

- Component styles: Angular CLI は、各コンポーネントにスタイル用の独自のファイルを提供します。
  このファイルのスタイルは、そのコンポーネントにのみ適用されます。
- `styles.css`: `src` ディレクトリーでは、コンポーネントレベルでスタイルを指定しない限り、このファイルのスタイルはアプリケーション全体に適用されます。

CSS プリプロセッサを使用しているかどうかによって、CSS ファイルの拡張子は異なる場合があります。
Angular は、プレーン CSS、SCSS、Sass、Less、および Stylus をサポートします。

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
body {
  color: #4d4d4d;
  background-color: #f5f5f5;
  color: #4d4d4d;
}

.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
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

Angular でのスタイリングの簡単なツアーが終了したので、アプリ機能の作成に戻りましょう。 次の記事では、to-do items に適切なコンポーネントを作成し、to-do items を確認、編集、および削除できるようにします。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
