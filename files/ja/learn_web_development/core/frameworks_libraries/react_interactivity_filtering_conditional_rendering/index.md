---
title: "React での操作の実装: 編集、絞り込み、条件付きレンダリング"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

React の旅も終わりに近づいてきました（これで終わりです）。 Todo リストアプリの主な機能に仕上げのタッチを追加していきます。これには、既存のタスクの編集や、すべてのタスク、完了したタスク、未完了のタスクのリストの絞り込み機能などが含まれます。また、条件付きの UI レンダリングについても見ていきます。

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
        React での条件付きレンダリング、およびアプリへのリストフィルターと編集 UI の実装。
      </td>
    </tr>
  </tbody>
</table>

## タスクの名前の編集

タスクの名前を編集するためのユーザーインターフェイスはまだありません。 すぐに実装に取り掛かりましょう。 まずは、少なくとも `App.jsx` に `editTask()` 関数を実装します。 `deleteTask()` 関数と似たようなものになりますが、対象のオブジェクトを見つけるために `id` を必要とする点が異なります。また、タスクの名前を更新するための `newName` プロパティも必要となります。
配列から何かを削除するのではなく、いくつかの変更を加えた新しい配列を返したいので、 [`Array.prototype.map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を [`Array.prototype.filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) の代わりに使用します。

`editTask()` 関数を `<App />` コンポーネント内に、他にも関数があるのと同じ場所に追加します。

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // このタスクが編集されたタスクと同じIDを持っている場合
    if (id === task.id) {
      // タスクをコピーし、名前を更新する
      return { ...task, name: newName };
    }
    // 編集されたタスクでない場合は、元のタスクを返します。
    return task;
  });
  setTasks(editedTaskList);
}
```

`editTask` を `deleteTask` の場合と同じ方法でプロップとして `<Todo />` コンポーネントに渡します。

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
```

これで `Todo.jsx` が開きました。これからリファクタリングを行います。

## 編集のための UI

ユーザーがタスクを編集できるようにするには、ユーザーインターフェイスを提供して編集できるようにする必要があります。最初のステップとして、以前に `<App />` コンポーネントに対して行ったように、 `useState` を `<Todo />` コンポーネントにインポートします。

```jsx
import { useState } from "react";
```

これを使って `isEditing` 状態を既定値 `false` に設定します。 `<Todo />` コンポーネント定義の冒頭部分に、以下の行を追加してください。

```jsx
const [isEditing, setEditing] = useState(false);
```

次に、`<Todo />` 部分について考え直してみましょう。 今後は、これまで使用していた単一のテンプレートではなく、 2 つの可能なテンプレートのうちの 1 つを表示するようにしたいと思います。

- "view" テンプレートは、 ToDo を表示するだけの場合に使用します。これは、これまでのチュートリアルで使用したものです。
- "editing" テンプレートは、が ToDo を編集しているとき。これをこれから作成します。

このコードブロックを `Todo()` 関数にコピーし、`useState()` フックの下、`return` 文の上に配置します。

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
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
  </div>
);
```

これで、 "edit" と "view" という2つの異なるテンプレート構造が、 2 つの別々の定数の中に定義されました。つまり、 `<Todo />` の `return` 文は、これで繰り返しになります。また、 "view" テンプレートの定義も含まれています。これを整理するには、**条件付きレンダリング**を使用して、コンポーネントが返すテンプレートを決定し、 UI にレンダリングすることができます。

## 条件付きレンダリング

JSX では、条件を使用してブラウザーでレンダリングされる内容を変更することができます。 JSX で条件を書くには、[三項演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)を使用することができます。

`<Todo />` コンポーネントの場合、条件は「このタスクは編集されているか？」です。 `Todo()` 内の `return` 文を次のように変更します。

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

ブラウザーは、すべてのタスクをこれまでと同じように表示するはずです。編集テンプレートを見るには、コードで既定では `isEditing` 状態が `false` から `true` に変更されているので、これで表示されます。次の章では、この編集ボタンを切り替える方法を見ていきます。

## `<Todo />` テンプレートの切り替え

ついに、私たちは最終的なコア機能の操作を開始する準備が整いました。始めるには、ユーザーが `viewTemplate` の "Edit" ボタンを押したときに `setEditing()` を値 `true` で呼び出します。そうすることで、テンプレートを切り替えることができます。

`viewTemplate` の "Edit" ボタンを以下のように更新します。

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

これで、同じ `onClick` ハンドラーを `editingTemplate` の "Cancel" ボタンに追加します。ただし、この時点では `isEditing` を `false` に設定し、ビューテンプレートに戻れるようにします。

`editingTemplate` 内の "Cancel" ボタンを以下のように更新します。

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

このコードをその場で、 "Edit" と "Cancel" のボタンをタスクアイテムで押すことで、テンプレートを切り替えることができるはずです。

![todo アイテムの Eat がビューテンプレートで表示されており、 Edit および Delete ボタンが利用できます。](view.png)

![todo アイテムの Eat が編集テンプレートで表示されており、新しい名前を入力する入力フィールドと、 Cancel および Save ボタンが利用できます。](edit.png)

次の段階は、実際に編集機能を作動させてみます。

## UI からの編集

これから行うことの多くは、`Form.jsx`の中で行った作業と似たものになります。ユーザーが新しい入力フィールドに入力すると、そのテキストを追跡する必要があります。また、ユーザーがフォームを送信すると、コールバックプロップを使用して、新しいタスクの名前で状態を更新する必要があります。

新しい名前を格納し、設定するには、新しいフックを作成することから始めます。 `Todo.jsx` ファイル内で、既存のフックの下に次のコードを追加します。

```jsx
const [newName, setNewName] = useState("");
```

次に、新しい名前を設定する `handleChange()` 関数を作成します。フックの下、テンプレートより前に配置します。

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

これで、 `editingTemplate` の `<input />` フィールドを更新し、 `newName` の `value` 属性を設定し、その `onChange` イベントに `handleChange()` 関数をバインドします。次の手順で更新してください。

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

最後に、編集フォームの `onSubmit` イベントを処理する関数を作成する必要があります。 `handleChange()` のすぐ下に次の内容を追加してください。

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

`editTask()` コールバックプロップには、編集するタスクのIDと新しい名前の両方が必要であることを覚えておいてください。

次の `onSubmit` ハンドラーを `editingTemplate` の `<form>` に追加することで、この関数をフォームの `submit` イベントに結びつけます。

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

これでブラウザー上でタスクを編集できるようになっているはずです。この時点で、 `Todo.jsx` ファイルは次のようになっているはずです。

```jsx
function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
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
        <button
          type="button"
          className="btn"
          onClick={() => {
            setEditing(true);
          }}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
```

## 絞り込みボタンに戻る

これで主要な機能が完全に完成したので、絞り込みボタンについて考えることができます。現在、これらのボタンには "All" というラベルが繰り返し表示されているだけで、関数が何もないのです。私たちは、`<Todo />` 部分で使用したスキルを再び適用します。

- アクティブなフィルターを格納するためにフックを作成する。
- ユーザーが「すべて」、「完了済み」、「未完了」のアクティブなフィルターを変更できる `<FilterButton />` 要素の配列をレンダリングします。

### 絞り込みフックの作成

フィルターを読み込み、設定するには、 `App()` 関数に新しいフックを追加します。 すべてのタスクを最初に表示させる必要があるため、既定のフィルターは `All` にします。

```jsx
const [filter, setFilter] = useState("All");
```

### フィルターの定義

たった今、 2 つの目標ができました。

- それぞれのフィルターには固有の名前を与えるべきです。
- それぞれのフィルターは固有の動作を持つべきです。

JavaScript オブジェクトは、名前と動作を関連付ける優れた方法です。各キーはフィルターの名前であり、各プロパティはその名前に関連付けられた動作です。

`App.jsx` の先頭、インポートの下で `App()` 関数の上に、`FILTER_MAP` と呼ばれるオブジェクトを追加してみましょう。

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

`FILTER_MAP` の値は、`tasks` データ配列をフィルター処理するために使用する関数です。

- `All` フィルターはすべてのタスクを表示するため、すべてのタスクで `true` を返します。
- `Active` フィルターは、 `completed` プロップが `false` であるタスクを表示します。
- `Completed` フィルターは、 `completed` プロップが `true` であるタスクを表示します。

前回追加した部分の下に、次の内容を追加します。ここでは、[`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) メソッドを使用して、`FILTER_NAMES` の配列を収集しています。

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> これらの定数を `App()` 関数外で定義しているのは、もし関数内で定義した場合、`<App />` コンポーネントが再レンダリングされるたびに再計算されてしまうためです。 このようなことは避けたいと考えています。 この情報は、アプリケーションが何をしようとも、決して変更されることはありません。

### フィルターのレンダリング

`FILTER_NAMES` 配列があるので、 3 つのフィルターすべてをレンダリングするために使用することができます。 `App()` 関数内で、 `filterList` と名付けた定数を作成することができます。この定数は、名前の配列を地図上に表示し、`<FilterButton />` コンポーネントを返すために使用します。 ここでもキーが必要であることを覚えておいてください。

`taskList` 定数の宣言の後に、次の内容を追加します。

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

これで、 `App.jsx` 内の 3 つの繰り返し `<FilterButton />` をこの `filterList` で置き換えます。次の部分を置き換えてください。

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

これを次のもので置き換えます。

```jsx-nolint
{filterList}
```

これはまだ動作しません。最初の作業がまだ残っています。

### 操作可能なフィルター

フィルターボタンを操作できるようにするには、どのようなプロップが必要かを検討する必要があります。

- `<FilterButton />` が現在押されているかどうかを報告すべきであり、その名前がフィルター状態の現在の値と一致する場合は押されるべきであることはわかっています。
- `<FilterButton />` がアクティブなフィルターを設定するにはコールバックが必要であることはわかっています。 `setFilter` フックを直接使用することができます。

次のように `filterList` 定数を更新してください。

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));
```

先ほど `<Todo />` 部分で行ったのと同じように、これで、指定されたプロップを利用するために `FilterButton.jsx` を更新する必要があります。次の各手順を行ってください。これらの変数を読み込むには、波括弧を使用することを忘れないでください。

- `all` を `{props.name}` で置き換えます。
- `aria-pressed` の値を `{props.isPressed}` にします。
- フィルターの名前付きで `props.setFilter()` を呼び出す `onClick` ハンドラーを追加します。

それだけです。 `FilterButton.jsx` ファイルは次のようになります。

```jsx
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

ブラウザーを再度開いてください。さまざまなボタンにそれぞれ名前が指定されたのがわかるはずです。フィルターボタンを押すと、そのテキストが新しい概要を取るのがわかるはずです。これは選択されたことを指示しています。そして、ボタンをクリックしながら開発者ツールのページインスペクターを見ると、 `aria-pressed` 属性の値がそれに応じて変化するのがわかるでしょう。
![アプリの3つのフィルターボタン（All、Active、Completed）で、 Completed にフォーカスハイライトが付けられている。](filter-buttons.png)

しかし、これらのボタンはまだ実際に UI のタスクを絞り込みしてくれません。これを完了させましょう。

### UI のタスクの絞り込み

現在、 `App()` 内の定数 `taskList` は、タスクの状態を対応付けし、それらすべてに対して新しい `<Todo />` 部分を返します。これは望む結果ではありません。タスクは、選択したフィルターを適用した結果に記載されている場合にのみレンダリングされるべきです。タスクの状態を対応付けする前に、レンダリングしたくないオブジェクトを除外するために、タスクの状態を絞り込み（[`Array.prototype.filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) を使用）する必要があります。

`taskList` を次のように更新します。

```jsx
const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
```

`Array.prototype.filter()` で使用するコールバック関数を決定するために、`FILTER_MAP` の値にアクセスし、フィルター状態のキーに対応する値を取得します。例えば、フィルターが `All` の場合、 `FILTER_MAP[filter]` は `() => true` と評価されます。

ブラウザーでフィルターを選べば、これでその条件を満たさないタスクが除去されます。リストの上部にある見出しの数字も、リストを反映して変更されます。

![フィルターボタンのあるアプリ。アクティブが強調表示されているので、アクティブな ToDo アイテムのみが表示されている。](filtered-todo-list.png)

## まとめ

以上で、アプリは完全に機能するようになりました。しかし、すべての機能を実装した今、より幅広いユーザーがこのアプリを使用できるように、いくつか改善を加えることができます。次の記事では、 React チュートリアルの総まとめとして、 React にフォーカス管理を記載し、キーボードのみを使用するユーザーとスクリーンリーダーのユーザーの両方にとって、使いやすさを向上させ、混乱を減らすことができることを説明します。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
