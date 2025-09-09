---
title: React アプリのコンポーネント化
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。 React には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。

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
        ToDo リストアプリを部品にに分ける賢明な方法。
      </td>
    </tr>
  </tbody>
</table>

## 最初のコンポーネントの定義

コンポーネントの定義は、ある程度練習をするまでは難しいと思われるかもしれませんが、要点は以下の通りです。

- アプリの明らかな「塊」を表している場合、それはおそらくコンポーネントです。
- よく再利用されるのであれば、それはおそらくコンポーネントです。

2 番目の項目には特に価値があります。一般的な UI 要素からコンポーネントを作成することで、コードを一箇所で変更することができ、そのコンポーネントが使用される場所のどこでも変更内容を確認することができます。また、すぐにすべてをコンポーネントに分割する必要もありません。 2 つ目の項目をヒントに、UI の中で最も再利用され、最も重要な部分である TODO リスト項目からコンポーネントを作成してみましょう。

## `<Todo />` の作成

コンポーネントを作る前に、そのための新しいファイルを作らなければなりません。実際は、コンポーネント用の新しいディレクトリーの作成が必要です。次のコマンドは、 `components` ディレクトリーを作成し、その中に `Todo.js` というファイルを作成します。これらを実行する前に、アプリのルートにいることを確認してください。

```bash
# `components` ディレクトリーを作成
mkdir src/components
# `components` の中に、 `Todo.jsx` というファイルを作成する
touch src/components/Todo.jsx
```

前回のコマンドを実行するために開発サーバーを停止した場合は、再起動することを忘れないでください。

新しい `Todo.js` ファイルは今は空です。ファイルを開いて最初の行に次を入力してください。

```jsx
function Todo() {}

export default Todo;
```

ここまでは問題ありませんが、このコンポーネントは何かを返さなければなりません！`src/App.js` に戻って、最初の [`<li>`](/ja/docs/Web/HTML/Reference/Elements/li) をコピーし、 `Todo.js` に貼り付けると、以下のようになります。

```jsx
function Todo() {
  return (
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
  );
}

export default Todo;
```

これで `Todo` コンポーネントは完成しました。 `App.jsx` で、ファイルの先頭付近に次の行を追加して `Todo` をインポートします。

```jsx
import Todo from "./components/Todo";
```

このコンポーネントをインポートすると、`App.js` の `<li>` 要素をすべて `<Todo />` コンポーネント呼び出しに置き換えることができます。 `<ul>` は以下のようになるはずです。

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

ブラウザーに戻ってみると、何か不幸なことに気づくでしょう。リストが、最初のタスクを 3 回繰り返すようになりました。

![Todo リストアプリの Todo コンポーネントラベルがコンポーネントにハードコードされているため、繰り返し使用されています。](todo-list-repeating-todos.png)

私たちがすべきことは、食べることだけではありません。そう、他にもすべきことがあります。— そう、TODO があります。次に、異なるコンポーネント呼び出しで別々のコンテンツをレンダリングする方法を見てみましょう。

## 一意の `<Todo />` を作成

コンポーネントが強力なのは、UI の一部を再利用し、その UI のソースを 1 か所で参照できるからです。問題は、通常、各コンポーネントのすべてを再利用するのではなく、ほとんどの部分を再利用しつつ小さな部分を変更したいということです。そこでプロップの出番です。

### `name` に何が入るでしょう？

完了させたいタスクの名前を追跡するために、それぞれの `<Todo />` コンポーネントが一意の名前を表示するようにしなければなりません。

`App.js` では、それぞれの `<Todo />` に name プロップを与えます。先ほどのタスクの名前を使ってみましょう。

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

ブラウザーを更新すると...以前と全く同じものが表示されます。 `<Todo />` にプロップを与えましたが、まだ使っていません。 `Todo.jsx` に戻って解決しましょう。

最初に `Todo()` 関数の定義を変更して、 `props` を引数として受け取るようにします。 `props` がコンポーネントによって正しく受信されているかどうかを確認したい場合は、先ほどと同様に `console.log()` で `props` を取得することができます。

コンポーネントが `props` を取得していることを確認したら、 `Eat` を `name` プロップで置き換えることができます。覚えておいてください。 JSX の式の途中では、中括弧を使って変数の値を注入します。

これらをまとめると、`Todo()` 関数は次のようになるはずです。

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

これで、ブラウザーには 3 つの一意のタスクが表示されるようになりました。しかし、もう一つの問題が残っています。これらはすべて既定でチェックされています。

![Todo リストアプリには、異なる Todo ラベルが付けられており、それらはコンポーネントにプロップとして渡されます。](todo-list-unique-todos.png)

### それは `completed` ですか？

元の静的リストでは、`Eat` だけがチェックされていました。もう一度言いますが、`<Todo />` コンポーネントを構成する UI のほとんどを再利用しつつ、一つだけ変更したいのです。これは別のプロップが良い仕事をしてくれます！ `App.js` での各 `<Todo />` の呼び出しには、完了したことを示す新しいプロップを与えます。

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

先ほどと同様に、これらのプロップを実際に使用するためには `Todo.jsx` に戻る必要があります。`<input />` の `defaultChecked` 属性の値が `completed` プロップと同じになるように変更します。これで、Todo コンポーネントの `<input />` 要素は次のようになります。

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

そして、ブラウザーを更新すると、`Eat` だけがチェックされていることが表示されるようになるはずです。

![Todo リストアプリで、チェックの状態が異なるようになった。- あるチェックボックスはチェックされ、他のチェックボックスはチェックされない。](todo-list-differing-checked-states.png)

各 `<Todo />` コンポーネントの `completed` プロップを変更すると、ブラウザーはそれに応じてレンダリングされた同等のチェックボックスをチェックしたり、チェックを外したりします。

### `id` をください

現在、`<Todo />` コンポーネントはすべてのタスクに `todo-0` という `id` 属性を与えています。これは悪い HTML です。

- [id 属性](/ja/docs/Web/HTML/Reference/Global_attributes/id) は一意でなければなりません（CSS や JavaScript などで文書フラグメントの一意な識別子として使用されます）。
- `id` が一意ではない場合、 [label 要素](/ja/docs/Web/HTML/Reference/Elements/label) の機能が動作しなくなります。

2 つ目の問題は、このアプリに影響を与えています。 2 つ目のチェックボックスの隣にある "Sleep" という単語をクリックすると、 "Eat" チェックボックスが "Sleep" チェックボックスの代わりに切り替わっていることに気づくでしょう。これは、すべてのチェックボックスの `<label>` 要素が `todo-0` の `htmlFor` 属性を持っているためです。 `<label>` は指定された `id` 属性を持つ最初の要素のみを認識するため、他のラベルをクリックしたときに問題が発生します。

私たちは、固有の `id` 属性を `<Todo />` コンポーネントを作成する前に指定していました。 それらを戻し、 `todo-i` の書式に即して `i` をその時点ごとに 1 つずつ大きく取得していくようにしましょう。 `App.jsx` 内の `Todo` コンポーネントのインスタンスを、 `id` プロパティを追加するよう、次のように更新しましょう。

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> `completed` プロパティが最後に記載されているのは、割り当てを行わない論理値であるためです。これは純粋にスタイル上の慣例です。プロパティの順序は重要ではありません。なぜなら、プロパティは JavaScript オブジェクトであり、 JavaScript オブジェクトは順序なしだからです。

これで `Todo.jsx` に戻り、`id` プロパティを使用します。 `<input />` 要素の `id` 属性値と、その `<label>` の `htmlFor` 属性値を置き換える必要があります。

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

これらの修正をその場で行い、各チェックボックスの隣にあるラベルをクリックすると、期待通りに動作します。つまり、そのラベルの隣にあるチェックボックスのチェックマークを付けたり外したりします。

## ここまでは順調ですか？

今のところ React をうまく使っていますが、もっとうまくできるかもしれません。今のコードは反復的です。 `<Todo />` コンポーネントをレンダリングする 3 つの行はほぼ同じですが、 1 つだけ違う点があります。それぞれのプロップの値です。

JavaScript のコアな能力の一つであるイテレーション（反復処理）を使えば、コードをきれいにすることができます。イテレーションを使うためには、まず自分のタスクを再考する必要があります。

## データとしてのタスク

それぞれのタスクには現在、 3 つの情報が含まれています: 名前、チェック済みかどうか、そして一意な ID です。このデータはうまくオブジェクトに変換されます。複数のタスクがあるので、このデータを表現するにはオブジェクトの配列が有効です。

`src/main.js` で、 import の後 `ReactDOM.createRoot()` より前の行で以下の `const` を作成してください。

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> テキストエディターに [ESLint](https://eslint.org/) プラグがある場合、この `DATA` 定数に対して警告が表示されることがあります。この警告は、使用した Vite テンプレートが提供する ESLint 構成によって決まりますが、このコードには適用されません。 `DATA` 定数の上の行に `// eslint-disable-next-line` を追加することで、警告を安全に抑制することができます。

次に、`<App />` に `DATA` をプロパティとして渡し、`tasks` と呼び出します。 `src/main.jsx` の中で `<App />` コンポーネントが呼び出される部分を、次のように更新します。

```jsx
<App tasks={DATA} />
```

この配列は、 App コンポーネントで `props.tasks` として利用できるようになりました。よかったら `console.log()` で確認してください。

> [!NOTE]
> すべて大文字の（`ALL_CAPS` のような）定数名に JavaScript で特別な意味があるわけではありません。他の開発者に「このデータはここで定義された後は変更されません」と伝えるための慣習です。

## 反復処理によるレンダリング

オブジェクトの配列をレンダリングするには、それぞれのオブジェクトを `<Todo />` コンポーネントに変換しなければなりません。 JavaScript では、データを別のものに変換するための配列メソッド [`Array.prototype.map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を提供しています。

`App.jsx` 内で、 `App()` 関数の `return` 文の上に、 `taskList` と名付けられた新しい定数を作成します。まずは、 `props.tasks` 配列内の各タスクを、その `name` に変換することから始めましょう。 `?.` 演算子を使用すると、[オプションチェーン](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)を行い、 `props.tasks` が `undefined` または `null` であるかどうかを確認してから、タスク名の新しい配列を作成することができます。

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

`<ul>` のすべての子を `taskList`に置き換えてみましょう。

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

これで、すべてのコンポーネントを再表示できるようになりましたが、まだやるべきことがあります。現在、ブラウザーは各タスクの名前を構造化されていないテキストとして表示しています。私たちが HTML の構造を見失っているからです。— `<li>` とチェックボックス、ボタンのことです。

![Todo リストアプリで、Todo アイテムのラベルが 1 行にまとまって表示されています。](todo-list-unstructured-names.png)

この問題を解決するには、 `map()` 関数から `<Todo />` コンポーネントを返す必要があります — JSX では、JavaScript とマークアップ構造を混在させることができることを覚えておいてください。今あるものの代わりに、次のものを試してみましょう。

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

アプリをもう一度見てみましょう。タスクは以前のように見えますが、タスク自体の名前がありません。私たちがマッピングした各タスクには、`id`、`name`、`completed` のプロパティがあり、`<Todo />` コンポーネントに渡したいことを覚えておいてください。これらの知識をまとめると、次のようなコードになります。

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

今では、アプリは以前のように見え、私たちのコードの繰り返しも少なくなりました。

## 固有なキー

React は配列からタスクをレンダリングしているので、それらを適切にレンダリングするために、どれがどれなのかを追跡しなければなりません。どれがどれなのかを把握して、適切にレンダリングする必要があります。 React は自分自身で推測で物事を把握しようとしますが、それを助けるために `key` プロップを `<Todo />` コンポーネントに渡すことで助けてあげることができます。 `key` は React で管理されている特別なプロップです。 `key` という単語を他の目的で使用することはできません。

キーは固有であるべきなので、各タスクオブジェクトの `id` をキーとして再利用します。 `taskList` は次のように更新します。

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**反復処理でレンダリングするものには、常に固有なキーを渡す必要があります。** ブラウザー上では何も明らかな変化はありませんが、もし固有なキーを使用していない場合、 React はコンソールに警告し、アプリは奇妙な動作をするかもしれません。

## アプリの残り部分をコンポーネント化

これで最も重要なコンポーネントが得られたので、残りのアプリをコンポーネントに変換しましょう。コンポーネントは、明白な UI 部分、再利用された UI 部分、またはそのどちらかであることを念頭に、さらに 2 つのコンポーネントを作成します。

- `<Form />`
- `<FilterButton />`

両方とも必要ですので、ファイルをターミナルコマンドで一括して行いましょう。ターミナルで次のコマンドを実行してください。アプリのルートディレクトリーにいることに注意してください。

```bash
touch src/components/{Form,FilterButton}.jsx
```

### `<Form />`

`components/Form.js` を開いて、以下のようにしてください。

- `Form()` 関数を宣言し、ファイルの末尾にエクスポートします。
- `<form>` タグとその間のものを `App.js` の中からコピーして、`Form()` の `return` 文の中に貼り付けます。

`Form.js` ファイルは次のようになります。

```jsx
function Form() {
  return (
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
  );
}

export default Form;
```

### `<FilterButton />`

`Form.jsx` を作成したのと同様のことを、`FilterButton.jsx` の中にも行いますが、コンポーネントは `FilterButton()` という名前とし、 `<div className="filters btn-group stack-exception">` 要素内の最初のボタンの HTML を `App.jsx` からコピーして、 `return` 文に入れます。

ファイルの内容は以下のようになります。

```jsx
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> [!NOTE]
> ここでは、最初に `<Todo />` コンポーネントで行ったのと同じ間違いをしていることに気づくかもしれません。つまり、それぞれのボタンは同じものになるということです。これでいいのです。このコンポーネントの修正は、後ほど[フィルターボタンへ戻る](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons)で行います。

## すべてのコンポーネントのインポート

新しいコンポーネントを使ってみましょう。さらにいくつかの `import` 文を `App.js` の上に追加して、インポートします。次に、`App()` の `return` 文を更新して、私たちのコンポーネントをレンダリングするようにします。

作業が完了すると、`App.jsx` は次のようになります。

```jsx
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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

これで、React アプリで操作の処理を行う準備が*ほぼ*整いました。

## まとめ

この記事では、アプリをコンポーネントにうまく分割し、それらを効率的にレンダリングする方法について、詳しく説明しました。さて、次は React でイベントを処理する方法を見て、いくつかの操作機能を追加していきます。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
