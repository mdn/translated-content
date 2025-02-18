---
title: React で ToDo リストを始める
slug: Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}

例えば、 React で概念実証を作成することになったとします。ユーザーが取り組みたい課題を追加、編集、削除でき、また課題を削除せずに完了とマークすることもできるアプリです。この記事では、このようなアプリケーションの基本構造とスタイル設定について説明します。個々のコンポーネント定義と操作性を備えたアプリケーションの作成手順を説明し、後で追加する部分についても説明します。

> [!NOTE]
> コードを我々のバージョンと照らし合わせる必要がある場合は、我々の [todo-react](https://github.com/mdn/todo-react) リポジトリーからサンプルの React アプリコードの完成版を確認することができます。実際に動作しているアプリのバージョンについては、<https://mdn.github.io/todo-react/> を参照してください。

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
      <td>
        ToDo リストの例題を理解すること、そして基本的な <code>App</code> の構造とスタイル設定を理解すること。
      </td>
    </tr>
  </tbody>
</table>

## アプリの「ユーザーストーリー」

ソフトウェア開発においてユーザーストーリーとは、ユーザーの視点から見た実行可能な目標のことを指します。作業を始める前にユーザーストーリーを定義することで、作業に集中することができます。このアプリは、次のようなストーリーを満たす必要があります。

ユーザーができること

- タスクのリストを読むこと
- マウスまたはキーボードを使用して、タスクを追加すること
- マウスまたはキーボードを使用して、タスクに完了のマークを付けること
- マウスまたはキーボードを使用して、タスクを削除すること
- マウスまたはキーボードを使用して、タスクを編集すること
- タスクの特定の一部を表示する。すべてのタスク、アクティブなタスクのみ、完了したタスクのみ。

これらのストーリーに 1 つずつ取り組んでいきます。

## プロジェクト開始前の環境整備

Vite は、自分のプロジェクトではまったく使用しないコードを提供します。次の端末コマンドを実行することで、新しいプロジェクトのためにそれらを削除することができます。アプリのルートディレクトリーから起動していることを確認してください。

```bash
# src ディレクトリーへ移動
cd src
# App.css ファイルと React のロゴ（Vite から提供されるもの）を削除
rm App.css assets/react.svg
# App.jsx と index.css の内容を空にする
echo -n > App.jsx && echo -n > index.css
# 自分のプロジェクトのルートへ移動
cd ..
```

> [!NOTE]
> 上記の端末での作業を行うためにサーバーを停止した場合は、`npm run dev`を使用してサーバーを再び起動する必要があります。

## プロジェクトの出発点のコード

このプロジェクトの出発点として、次の 2 つを用意します。今あるものを置き換えた `App()` 関数と、アプリのスタイルを設定するための CSS です。

### JSX

次のスニペットをコピーしてクリップボードに保存し、それを `App.jsx` に貼り付けます。

```jsx
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
```

次に `index.html` を開いて、 [`<title>`](/ja/docs/Web/HTML/Element/title) 要素のテキストを `TodoMatic` に変更します。こうすることでアプリ上部の [`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) と一致します。

```html
<title>TodoMatic</title>
```

ブラウザーを再読み込みすると、次のように表示されます。

![todo-matic アプリ、スタイルなし、乱雑なラベル、入力、ボタンの混乱を表示](unstyled-app.png)

まだ見た目が整っていなくて、機能もしていませんが、一旦問題はありません。すぐにスタイルを設定します。まず現在の JSX と、それがユーザーストーリーにどのように対応しているかを考えてみます。

- [`<form>`](/ja/docs/Web/HTML/Element/form) 要素があり、新しいタスクを書き込むための [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text) 要素と、フォームを送信するためのボタンを備えています。
- タスクの絞り込みに使用するためのボタンが並んでいます。
- 残っているタスクの数を示す見出しがあります。
- 3 つのタスクがあり、順序付けられていないリストとして配置されています。それぞれのタスクはリストアイテム（[`<li>`](/ja/docs/Web/HTML/Element/li)）であり、タスクを編集および削除するためのボタンと、完了したことをチェックするためのチェックボックスがあります。

フォームはタスクを作成するためのもので、ボタンはタスクを絞り込みするためのもの、また見出しとリストはタスクを読むためのものです。今のところタスクを編集するための UI は分かりづらいですが、そちらについては後でコードを書き足していきます。

### アクセシビリティ機能

ここでいくつかの珍しいマークアップに気付くかもしれません。例えば次のような箇所です。

```jsx
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

`aria-pressed` は支援技術（スクリーンリーダーなど）に対して、ボタンが押された状態と押されていない状態の 2 つの状態のうちの 1 つであることを伝えます。これは `on` と `off` （あるいは `pressed` か `unpressed`）を切り替えるようなものだと考えてください。 `"true"` の値を設定すると、既定でボタンが押された状態となります。

`visually-hidden` というクラスについては、CSS を記述していないので、まだ意味はありません。ただし、スタイルを設定すると、このクラスの要素はすべて目の見えるユーザーからは隠され、スクリーンリーダーのユーザーは引き続き使用できるようになります。これらの単語は、目の見えるユーザーには必要ありません。視覚的な文脈を持たないスクリーンリーダーのユーザーに、ボタンが何をするのかという情報を提供するためにあります。

さらに下には、次のような [`<ul>`](/ja/docs/Web/HTML/Element/ul) 要素があります。

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

`role` 属性は、タグがどのような要素を表しているのかを説明するのに役立ちます。 `<ul>` は既定ではリストのように扱われますが、これから追加するスタイルはその機能を壊します。この `role` 属性は、`<ul>` 要素に「リスト」であることを再度伝えます。なぜこれが必要な理由なのか詳しく知りたい方は、[Scott O'Hara の記事「Fixing Lists」](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) をご覧ください。

`aria-labelledby` 属性は、リストの見出しをその下にあるリストの目的を説明するラベルとして扱っていることを支援技術に伝えます。この関連付けを行うことで、リストの情報がより豊富になり、スクリーンリーダーのユーザーがリストの目的をよりよく理解できるようになります。

最後に、リスト項目のラベルと入力には、JSX 特有の属性がいくつかあります。

```jsx
<input id="todo-0" type="checkbox" defaultChecked />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```

`<input　/>` タグの `defaultChecked` 属性は、React にこのチェックボックスを最初にチェックするように指示します。通常の HTML のように `checked` を使用した場合、React はチェックボックスのイベント処理に関連する警告をブラウザーコンソールに表示させます。今のところは気にしないで大丈夫です。後ほどイベントを使用するときにこれについては説明します。

また `htmlFor` 属性は、HTML で使用されている `for` 属性に対応しています。 JSX では `for` は予約語であるため、属性として使用できません。そのため React は `for` の代わりに `htmlFor` を使用します。

### JSX における論理属性についてのメモ

この節の前回で説明した `defaultChecked` 属性は、論理属性です。つまり、値が `true` または `false` である属性です。 HTML と同様に、論理属性は存在すれば `true`、存在しなければ `false` となります。 式の右辺に割り当てることはオプションです。 例えば、`defaultChecked={true}` や `defaultChecked={false}` のように、波括弧で囲んで渡すと、その値を明示的に設定することができます。

JSX は JavaScript なので、論理属性には注意すべき点があります。 `defaultChecked="false"` と記述すると、論理値ではなく文字列値として `false` が設定されます。 空文字列以外の文字列は[真値](/ja/docs/Glossary/Truthy)とみなされるため、 React は `defaultChecked` を `true` と見なし、既定ではチェックボックスにチェックが入った状態になります。 これは望む状態ではないため、避けるべきです。

よければ、ページに要素がレンダリングされないようにする、hiddenという別の属性を使って、論理属性を書く練習をしてみましょう。 [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) を `<h1>` 要素に追加して何が現れるか確認し、その値を `{false}` に明示的に設定してみてください。 `hidden="false"` と記述すると真値となるため、 `<h1>` は非表示になります。 作業が完了したら、このコードを除去することをお忘れなく。

> [!NOTE]
> 先ほどのコードスニペットで使用した `aria-pressed` 属性は、`"true"` の値を持っています。 `aria-pressed` は `checked` のような真の論理値属性ではないからです。

### スタイルを実装する

次の CSS コードを `src/index.css` に貼り付けて、現在のコードを置き換えてください。

```css
/* リセット */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus-visible {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  -moz-osx-font-smoothing: inherit;
  -webkit-font-smoothing: inherit;
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;
  padding: 0;
  width: auto;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  background-color: #f5f5f5;
  color: #4d4d4d;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* リセット終了 */
/* グローバルスタイル */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  padding: 0.8rem 1rem 0.7rem;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-color: #d3d3d3;
  border-width: 1px;
}
.btn.toggle-btn[aria-pressed="true"] {
  border-color: #4d4d4d;
  text-decoration: underline;
}
.btn__danger {
  background-color: #ca3c3c;
  border-color: #bd2130;
  color: #fff;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  background-color: #000;
  color: #fff;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  flex: 0 0 100%;
  margin: 0;
  text-align: center;
}
.visually-hidden {
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}
[class*="stack"] > * {
  margin-bottom: 0;
  margin-top: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
.stack-exception {
  margin-top: 1.2rem;
}
/* グローバルスタイル終了 */
/* アプリスタイル全般 */
.todoapp {
  background: #fff;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  text-align: center;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  margin-bottom: 1rem;
  padding: 0.8rem;
  text-align: center;
}
.input__lg {
  border: 2px solid #000;
  padding: 2rem;
}
.input__lg:focus-visible {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  font-size: 1.9rem;
  width: 100%;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
/* アプリの全般的なスタイル終了 */
/* Todo アイテムのスタイル */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  border: 2px solid #565656;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
}
.todo-text:focus-visible {
  box-shadow: inset 0 0 0 2px;
}
/* todo アイテムのスタイル終了 */
/* チェックボックスのスタイル */
.c-cb {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  clear: left;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.25;
  min-height: 44px;
  padding-left: 40px;
  position: relative;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  height: 44px;
  left: -2px;
  top: -2px;
  width: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
}
.c-cb > label {
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  touch-action: manipulation;
}
.c-cb > label::before {
  background: transparent;
  border: 2px solid currentcolor;
  content: "";
  position: absolute;
}
.c-cb > input[type="checkbox"]:focus-visible + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  background: transparent;
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  box-sizing: content-box;
  content: "";
  height: 7px;
  left: 9px;
  opacity: 0;
  position: absolute;
  top: 11px;
  transform: rotate(-45deg);
  width: 18px;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
/* チェックボックスのスタイル終了 */
```

保存してブラウザーを確認すると、アプリに適切なスタイルが設定されているはずです。

## まとめ

これで、私達の todo リストアプリは実際のアプリのようになりました。ただし、まだ実際には何も動きません。次の章で修正をしていきます。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}
