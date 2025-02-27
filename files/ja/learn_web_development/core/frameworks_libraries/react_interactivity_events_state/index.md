---
title: "React での操作の実装: イベントと状態"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

部分的な計画がまとまったので、これで、完全に静的な UI から、実際に操作や状況の変化に対応できるものへと、アプリの更新を開始する時点に到達しました。この記事では、イベントと状態を掘り下げながら、タスクの追加と削除、完了したタスクの切り替えを正しく行うことができるアプリを完成させるまでを説明します。

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
        React でイベントと状態を処理し、それらを使用して例題アプリを操作可能にするほうほう。
      </td>
    </tr>
  </tbody>
</table>

## イベント処理

これまでバニラ JavaScript しか書いたことがない人は、 DOM ノードをクエリーし、それらにリスナーを取り付ける別個の JavaScript ファイルを置くことに慣れているかもしれません。例えば、 HTML ファイルでは以下のようにボタンを設置することができます。

```html
<button type="button">Say hi!</button>
```

また、 JavaScript ファイルは、次のようなコードになるでしょう。

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

JSX では、 UI を説明するコードがイベントリスナーの横に並んで存在しています。

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

例えば、 {{htmlelement("button")}}要素に `onClick` 属性を追加します。 この属性の値は、アラートを起動する関数です。 これは、 HTML にイベントリスナーを記述しないという最善の手法に反しているように思えるかもしれませんが、 JSX は HTML ではないことを思い出してください。

`onClick` 属性はここで特別な意味を持っています。ユーザーがボタンをクリックすると、 React が指定された関数を実行するように指示するということです。他にもいくつか注意すべきことがあります。

- {{Glossary("camel_case", "キャメルケース")}} で `onClick` を書くことが重要です。 JSX は `onclick` を認識しません（繰り返しになりますが、これが JavaScript で特定の目的のためにすでに使用されているためです。これは標準の [`onclick`](/ja/docs/Web/API/Element/click_event) ハンドラープロパティとは、関連はしますが異なるものです）。
- すべてのブラウザーイベントは JSX では、 `on` に続いてイベント名の形式に従います。

これをアプリに適用してみましょう。始めるには、`Form.jsx` コンポーネントから始めます。

### フォーム送信処理

`Form()` コンポーネント関数の先頭（つまり、 `function Form() {` 行のすぐ下）で、 `handleSubmit()` という名前の関数を作成します。この関数は、 [`submit` イベントの既定の動作を抑制](/ja/docs/Learn_web_development/Core/Scripting/Events#既定の動作の抑制)するものです。その後、 `alert()` を呼び出して、任意の内容を表示します。最終的には、以下のような形になります。

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

この関数を使用するには、 [`<form>`](/ja/docs/Web/HTML/Element/form) 要素に `onSubmit` 属性を追加し、その値を `handleSubmit` 関数に設定してください。

```jsx
<form onSubmit={handleSubmit}>
```

これでブラウザーに戻って "Add" ボタンをクリックすると、ブラウザーに "Hello, world!" という文字（または表示するように指定した任意の文字列）を含むアラートダイアログが表示されます。

## コールバックプロップ

React アプリケーションでは、対話操作が 1 つのコンポーネントだけに限定されることはほとんどありません。 1 つのコンポーネントで発生したイベントは、アプリの他の部分にも影響を与えます。新しいタスクを自分たちで作成する力を与えるには、`<Form />`コンポーネントで発生したことは、`<App />`でレンダリングされたリストにも影響を与えます。

最終的に、 `handleSubmit()` 関数に新しいタスクを作成する手助けをしてもらいたいので、 `<Form />` から `<App />` に情報を渡す方法が必要です。標準のプロップを使用して親から子にデータを渡すのと同じ方法で、子から親にデータを渡すことはできません。代わりに、 `<App />` にフォームから入力されたデータを期待する関数を書き、その関数をプロップとして `<Form />` に渡します。 この関数の形のプロップは、**コールバックプロップ** と呼ばれます。 コールバックプロップがあると、 `<Form />` の中でそれを呼び出して、正しいデータを `<App />` に送信することができます。

### コールバックによるフォーム送信処理

`App.jsx` の `App()` 関数内で、 `name` という単一の引数を持った `addTask()` という名前の関数を作成します。

```jsx
function addTask(name) {
  alert(name);
}
```

次に、`addTask()` をプロップとして `<Form />` に渡します。プロパティは任意の名前を保有することができますが、後で理解できる名前を選択してください。例えば、`addTask` のような名前は機能します。なぜなら、関数の名前と関数の機能が一致するからです。 `<Form />` コンポーネントの呼び出しは、次のようになります。

```jsx
<Form addTask={addTask} />
```

このプロップを使用するには、 `Form.jsx` の `Form()` 関数のシグネチャを変更し、 `props` を引数として受け入れるようにする必要があります。

```jsx
function Form(props) {
  // ...
}
```

最後に、このプロップを `<Form />` コンポーネントの `handleSubmit()` 関数内で使用することができます。次の手順に従って更新してください。

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

ブラウザー上で "Add" ボタンをクリックすると、 `addTask()` コールバック関数が動作していることが証明されますが、入力フィールドに入力した内容をアラートに表示させることができればいいですね！これが次にやるべきことです。

### 補足: 名前付けの慣例に関するメモ

`addTask()` 関数を `<Form />` 部分に `addTask` プロップとして渡すことで、 `addTask()` 関数と `addTask` プロップの関係が明確になるようにしました。ただし、プロップ名は必ずしも具体的な名前である必要はないことに留意してください。 `addTask()` を `<Form />` に渡す際には、他にも次のような名前を使用することができます。

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

これにより、 `addTask()` 関数は `<Form />` コンポーネントで `onSubmit` プロップとして利用できるようになります。 このプロップは、 `Form.jsx` で次のように使用することができます。

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

ここでは、接頭辞 `on` がプロパティをコールバック関数にすることを指示しています。 `Submit` は、送信イベントがこの関数を開始することを示す手がかりとなります。

コールバックプロパティは、 `onSubmit` や `onClick` のように、よく慣れ親しんだイベントハンドラーの名前と一致することが多いですが、意味が明確になるよう、何らかの名前を付けることができます。仮の `<Menu />` コンポーネントには、メニューが開かれたときに実行されるコールバック関数と、閉じられたときに実行される別のコールバック関数を記載することができます。

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

この `on*` という名前を付ける習慣は、 React のエコシステムではとても一般的ですので、学びを続ける際には念頭に置いてください。わかりやすくするために、このチュートリアルの残りの部分では、 `addTask` やよく似たプロパティ名を使用していきます。この章を読みながらプロパティ名を変更した場合は、続ける前に必ず元に戻してください。

## 状態を持つデータの維持および変更

これまでは、コンポーネントに渡されるデータをプロップで保持し、それで十分でした。しかし、これで操作性を扱うことになったため、新しいデータを作成し、それを保持し、後で更新する機能が必要になりました。プロパティは不変であるため、この用途に適したツールではありません。コンポーネントは自分自身でプロパティを変更したり作成したりすることはできません。

ここで**状態**の登場です。 プロパティをコンポーネント間の通信方法と考えると、状態はコンポーネントに「記憶」をあたえる方法だと考えることができます。記憶とは、必要に応じて保持したり更新したりできる情報のことです。

React は、状態を部分に導入するための特別な関数を提供しており、その名前は `useState()` という名前が適切です。

> **メモ:** `useState()` は、**フック**と呼ばれる特別なカテゴリーの関数に属し、それぞれを使用してコンポーネントに新しい機能を追加することができます。他にもフックはありますが、それについては後ほど学びます。

useState() を使用するには、 React モジュールからそれをインポートする必要があります。 `Form.jsx` ファイルの先頭に、 `Form()` 関数の定義の上に以下の行を追加します。

```jsx
import { useState } from "react";
```

`useState()` は、状態の初期値を決定する単一の引数を取ります。 この引数は、文字列、数値、配列、オブジェクト、またはその他の JavaScript のデータ型とすることができます。 `useState()` は、 2 つのアイテムを含む配列を返します。 最初のアイテムは現在の状態の値であり、 2 番目のアイテムは状態を更新するために使用できる関数です。

名前付きの状態を作成しましょう。次のコードを、 `handleSubmit()` 関数の上、 `Form()` 内に記述してください。

```jsx
const [name, setName] = useState("Learn React");
```

このコード行では、いくつかのことが起こっています。

- `name` 定数を `"Learn React"` の名前で定義する。
- `name` を変更する関数として `setName()` と名付けた関数を定義しています。
- `useState()` はこれら 2 つのことを配列で返すので、[配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)を使用して、どちらも別個の変数に取得します。

### 状態の読み取り

名前付きの状態がすぐに動作しているのが確認できます。フォームの入力に値属性を追加し、その値を `name` に設定します。ブラウザーは入力フィールド内に "Learn React" と表示します。

```jsx
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>
```

"Learn React" を空文字列に変更したら、初期状態はこれで完了です。

```jsx
const [name, setName] = useState("");
```

### ユーザー入力の読み取り

`name` の値を変更する前に、ユーザーが入力する内容を取得する必要があります。そのためには、 `onChange` イベントを待ち受けします。 `handleChange()` 関数を書き、それを `<input />` 要素で待ち受けします。

```jsx
// `Form` コンポーネントの先頭付近
function handleChange() {
  console.log("Typing!");
}

...

// return 文の中に移動
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;
```

現在、テキストを入力しようとしても、入力フィールドの値は変わりませんが、ブラウザーは "Typing!" という語を JavaScript コンソールにログ出力します。これにより、入力フィールドにイベントリスナーが添付されていることが分かります。

ユーザーのキー入力を読み取るには、入力フィールドの `value` プロパティにアクセスする必要があります。これは、 `handleChange()` が呼び出された際に受け取るイベントオブジェクトを読み取ることで実行できます。イベントには、 [`target` プロパティ](/ja/docs/Web/API/Event/target)があり、これは `change` イベントを発行する要素を表します。これが私たちの入力フィールドです。つまり、 `event.target.value` は入力フィールド内のテキストです。

この値を `console.log()` で出力すると、ブラウザーのコンソールに表示されます。次のとおりに `handleChange()` 関数を更新し、入力値を入力してコンソールに結果が表示されることを確認してください。

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### 状態の更新

ログ出力するだけでは不十分です。ユーザーが入力した内容を実際に格納し、入力時に表示させたいのです。下記に示すように、 `console.log()` の呼び出しを `setName()` に変更してください。

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

これで入力すると、予想通り、キーストロークで入力フィールドが埋まります。

指定された段階がもう 1 つあります。 `handleSubmit()` 関数を変更して、`props.addTask` を `name` を引数として呼び出すようにする必要があります。コールバックプロップを覚えていますか？ これにより、タスクを `App` コンポーネントに戻すことができるので、後日、タスクのリストに追加することができます。 良い習慣として、フォームを送信した後は入力をクリアすべきなので、空文字列を指定して `setName()` を再度呼び出します。

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

最後に、ブラウザーの入力フィールドに何かを入力し、 "Add" をクリックします。入力した内容はすべて、アラートダイアログに現れます。

これで、 `Form.jsx` ファイルは次のようになります。

```jsx
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

> [!NOTE]
> タスク名を入れないで `Add` ボタンを押すだけで、空のタスクを送信できることに気づくでしょう。これを防ぐ方法が思いつきますか？ヒントとして、おそらく `handleSubmit()` 関数に何らかのチェックを追加する必要があるでしょう。

## すべてをまとめる：タスクの追加

これで、イベント、コールバックプロップ、フックを練習したので、ユーザーがブラウザーに新しいタスクを追加できる関数を書く準備ができました。

### 状態としてのタスク

状態にタスクを格納できるように、 `useState` を `App.jsx` にインポートする必要があります。次のコードを `App.jsx` ファイルの先頭に追加してください。

```jsx
import { useState } from "react";
```

`props.tasks` を `useState()` フックに渡すと、初期状態が保持されます。 `App()` 関数の定義の一番上に、次のコードを追加してください。

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

これで、`taskList` のマッピングを `props.tasks` ではなく `tasks` に割り当てられた結果となるように変更することができます。 `taskList` 定数の宣言は、これで以下のように見えるはずです。

```jsx
const taskList = tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

### タスクの追加

これで、 `addTask()` 関数で使用できる `setTasks` フックを取得することができました。これで、タスクのリストを更新することができます。しかし、 1 つ問題があります。 `addTask()` の `name` 引数をそのまま `setTasks` に渡すことはできません。なぜなら、 `tasks` はオブジェクトの配列であり、 `name` は文字列だからです。これを実行しようとすると、配列が文字列に置き換えられてしまいます。

まず、既存のタスクと同じ構造を持つオブジェクトに `name` を格納する必要があります。 `addTask()` 関数内で、配列に追加する `newTask` オブジェクトを作成します。

次に、この新しいタスクを追加した新しい配列を作成し、タスクデータの状態をこの新しい状態に更新する必要があります。これを行うには、スプレッド構文を使用して[既存の配列をコピー](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax#配列をコピーする)し、配列の終わりにオブジェクトを追加することができます。そして、この配列を `setTasks()` に渡すと、状態が更新されます。

それらをすべて用意すると、 `addTask()` 関数は次のようになります。

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

これで、ブラウザーを使用してタスクをデータに追加することができます。フォームに何らかの文字列を入力し、 "Add" をクリックする（または <kbd>Enter</kbd> キーを押す）と、新しいタスクアイテムが UI に現れます。

**ただし、別な問題があります。**: 作成した関数 `addTask()` は各タスクに同じ `id` を与えています。これはアクセシビリティの観点では良くなく、 React が将来のタスクを `key` プロパティで区別することが不可能になります。実際、 React は開発ツールコンソールに警告を表示します。 "Warning: Encountered two children with the same key…"

これを修正する必要があります。一意の識別子を作成することは難しい問題です。JavaScript コミュニティでは、役に立つライブラリーを書く人がいます。 [nanoid](https://github.com/ai/nanoid) を使用します。これは小さく、うまく動作するからです。

アプリケーションのルートディレクトリーにいることを確認し、端末で次のコマンドを実行してください。

```bash
npm install nanoid
```

> [!NOTE]
> Yarnを使用している場合は、代わりに `yarn add nanoid` が必要になります。

これで、`nanoid` を使用して、新しいタスクの一意の ID を作成することができます。 最初のステップとして、 `App.jsx` の先頭に以下の行を含めることで、それをインポートすることができます。

```jsx
import { nanoid } from "nanoid";
```

ここで `addTask()` を更新して、それぞれのタスク ID が接頭辞 `todo-` と nanoid によって生成された固有の文字列になるようにします。 `newTask` 定数宣言を以下のように更新します。

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

すべてを保存し、アプリをもう一度試してみてください。これで、重複 ID に関する警告が表示されることなく、タスクを追加できるようになりました。

## 回り道: タスクを数える

これで新しいタスクを追加することができるようになりましたが、問題があることに気づくかもしれません。指定されたタスクの数に関わらず、見出しは "3 tasks remaining" と表示されます。これを修正するには、 `taskList` の長さを数え、それに応じて見出しのテキストを変更します。

`App()` 定義内の、 return 文の前に、これを追加します。

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

これはほぼ正しいですが、掲載されているタスクが単一の場合でも、見出しは "tasks" という言葉を使用します。これも変数にすることができます。先ほど追加したコードを次のとおりに更新してください。

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

これで、リストの見出しのテキストコンテンツを `headingText` 変数に置き換えることができます。 `<h2>` を以下のように更新してください。

```jsx
<h2 id="list-heading">{headingText}</h2>
```

ファイルを保存し、ブラウザーに戻って、いくつかのタスクを追加してみてください。これで個数が期待通りに更新されるはずです。

## タスクの完了

チェックボックスをクリックすると、適切にチェックとチェック解除が行われることに気づくかもしれません。 HTML の機能として、ブラウザーは、どのチェックボックス入力がチェック済みか、またはチェックされていないかを、私たちが手伝ってあげなくても記憶する方法を知っています。しかし、この機能には問題があります。チェックボックスを切り替えても、 React アプリケーションの状態は変わりません。つまり、これでブラウザーとアプリケーションが同期しなくなりました。ブラウザーを自分自身でアプリケーションと同期させるコードを書く必要があります。

### バグの調査

問題を修正する前に、それが現れる様子を観察してみましょう。

まず、`App()` コンポーネントに `toggleTaskCompleted()` 関数を書いてみましょう。 この関数は `id` 引数を取りますが、今回は使用しません。 これで、配列の最初のタスクをコンソールにログ出力します。 ブラウザーでチェックまたはチェック解除したときに何が起こるのかを調べます。

`taskList` 定数宣言のすぐ上に、これを追加します。

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

次に、 `taskList` 内にレンダリングされたそれぞれの `<Todo />` コンポーネントのプロップに `toggleTaskCompleted` を追加します。以下のように更新します。

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  />
));
```

次に、 `Todo.jsx` 部分に移動し、 `<input />` 要素に `onChange` ハンドラーを追加します。これは、無名関数を使用して、 `props.id` を引数として `props.toggleTaskCompleted()` を呼び出すようにします。 `<input />` はこれで次のようになります。

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

すべてを保存し、ブラウザーを返値すると、最初のタスクである "Eat" がチェックされていることがわかります。 JavaScript コンソールを開き、 "Eat" の横にあるチェックボックスをクリックします。期待通り、チェックが外れます。ただし、 JavaScript コンソールには次のようなログ出力が行われます。

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

ブラウザーではチェックボックスのチェックが外れますが、コンソールでは "Eat" がまだ完了状態であると示しています。次のように修正します。

### ブラウザーをデータに同期させる

`App.jsx` の `toggleTaskCompleted()` 関数をもう一度見てみましょう。 切り替えられたタスクの `completed` プロップのみを変更し、それ以外はまったく変更しないようにしたいと思います。 これを実現するには、タスクリストに対して `map()` を実行し、完了したタスクのみを変更します。

`toggleTaskCompleted()` 関数を次の内容に更新します。

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // このタスクが編集されたタスクと同じ ID を持っている場合
    if (id === task.id) {
      // オブジェクトを開いて、 `completed` プロップが
      // 反転された新しいオブジェクトを作成します。
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

ここでは、元のタスク配列に割り当てられた `updatedTasks` 定数を定義します。タスクの `id` プロパティが関数に指定された `id` と一致する場合は、[オブジェクトスプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用して新しいオブジェクトを作成し、それを返す前にそのオブジェクトの `completed` プロップを切り替えます。一致しない場合は、元のオブジェクトを返します。

次に、状態を更新するために、この新しい配列で `setTasks()` を呼び出します。

## タスクの削除

タスクを削除するには、完了状態を切り替えるのと同様のパターンに従うことになります。状態を更新するための関数を定義し、その関数をプロップとして `<Todo />` に渡し、正しいイベントが発生したときにその関数を呼び出す必要があります。

### `deleteTask`コールバックプロップ

ここでは、まず `App` コンポーネントに `deleteTask()` 関数を書くことから始めます。 `toggleTaskCompleted()` と同様に、この関数も `id` 引数を取ります。 まずは、その `id` をコンソールにログ出力します。 `toggleTaskCompleted()` の下に次のコードを追加します。

```jsx
function deleteTask(id) {
  console.log(id);
}
```

次に、`<Todo />` コンポーネントの配列に別のコールバックプロップを追加します。

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));
```

`Todo.jsx` では、 "Delete" ボタンが押されたときに `props.deleteTask()` を呼び出したいと考えています。 `deleteTask()` は、呼び出したタスクの ID を知る必要があり、そうすることで、状態から正しいタスクを削除することができます。

`Todo.jsx` 内の "Delete" ボタンを次のように更新します。

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

これで、アプリ内の "Delete" ボタンをクリックすると、ブラウザーコンソールに関連のタスクの ID がログ出力されるはずです。

この時点で、`Todo.jsx`ファイルは次のようになっているはずです。

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

## 状態と UI からタスクを削除

これで、`deleteTask()` が正しく呼び出されることが分かったので、`deleteTask()` 内で `setTasks()` フックを呼び出し、アプリ UI 上で視覚的にだけでなく、アプリの状態からも実際にそのタスクを削除することができます。 `setTasks()` は引数として配列を必要とするので、`deleteTask()` に渡した ID と一致するタスクを除いた、既存のタスクをコピーした新しい配列を指定する必要があります。

これは、 [`Array.prototype.filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) を使用する絶好の機会です。各タスクを検査し、その `id` プロップが `deleteTask()` に渡された `id` 引数と一致する場合は、そのタスクを新しい配列から除外することができます。

`App.jsx` ファイル内の `deleteTask()` 関数を次のとおりに更新します。

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

もう一度アプリを試してみてください。これで、アプリからタスクを削除できるようになっているはずです。

この時点で、`App.jsx`ファイルは次のようになっているはずです。

```jsx
import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // このタスクが編集されたタスクと同じ ID を持っている場合
      if (id === task.id) {
        // オブジェクトを開いて、 `completed` プロップが
        // 反転された新しいオブジェクトを作成します。
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

## まとめ

この記事はこれで十分です。ここでは、 React がイベントを処理する方法と状態を処理する方法について、また、タスクの追加、タスクの削除、完了したタスクの切り替えを行う機能の実装について、指定された内容をお伝えしました。 もうすぐ完成です。 次の記事では、既存のタスクを編集する機能と、タスクのリストをすべて、完了したタスク、未完了のタスクに絞り込みをする機能を実装します。 その過程で、条件付きの UI レンダリングについても見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
