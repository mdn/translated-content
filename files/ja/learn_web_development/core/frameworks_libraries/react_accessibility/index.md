---
title: React でのアクセシビリティ
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

最後のチュートリアル記事では、アクセシビリティ（意図通りにアクセシビリティに焦点を当てます）に焦点を当て、キーボードのみを使用するユーザーとスクリーンリーダーユーザーの両方にとって、使いやすさを向上させ、混乱を軽減することができる React のフォーカス管理を含めることができます。

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
      <td>React でキーボードアクセシビリティを実装する。</td>
    </tr>
  </tbody>
</table>

## キーボードユーザーも利用できるようにする

現時点では、実装を予定していたすべての機能を実装しました。ユーザーは新しいタスクを追加したり、タスクのチェックやチェック解除、タスクの削除、タスク名の編集を行うことができます。また、すべてのタスク、アクティブなタスク、完了したタスクなど、タスクリストを絞り込むこともできます。

少なくとも、マウスを使ってこれらの操作を行うことができます。残念ながら、これらの機能はキーボードのみを使用するユーザーにとってはアクセシビリティが十分ではありません。それでは、この点について詳しく見ていきましょう。

## キーボードのユーザビリティの問題を探る

新しいタスクを追加するつもりで、アプリの上部にある入力フィールドをクリックします。 太い破線の概要がその入力フィールドの周りに表示されます。 この概要は、ブラウザーが現在この要素に焦点を当てていることを視覚的に示すものです。 <kbd>Tab</kbd>キーを押すと、入力フィールドの下にある "Add" ボタンの周りに概要が現れます。 これにより、ブラウザーの焦点が移動したことが示されます。

<kbd>Tab</kbd> キーをいくつか押すと、この破線のフォーカスインジケーターが各フィルターボタン間を移動するのが見えるでしょう。 フォーカスインジケーターが最初の "Edit" ボタンの周りに移動するまで続けてください。 <kbd>Enter</kbd> キーを押します。

`<Todo />`部分が、設計通りにテンプレートを切り替え、課題の名前を編集できるフォームが表示されます。

しかし、フォーカスインジケーターはどこに行ってしまったのでしょうか？

私たちが `<Todo />` コンポーネントのテンプレートを切り替えると、古いテンプレートから要素が完全に除去され、新しいテンプレートから要素が置き換えられます。つまり、私たちがフォーカスしていた要素はもう存在しなくなり、ブラウザーのフォーカスがどこにあるのかを視覚的に示す手がかりがなくなります。これは、幅広いユーザーを混乱させる可能性があります。特に、キーボードに頼っているユーザーや支援技術を使用しているユーザーにとってはそうです。

キーボードや支援技術を使用するユーザーの使い勝手を向上させるには、ブラウザーのフォーカスを自分たちで管理する必要があります。

### 補足：フォーカスインジケーターに関するメモ

"All"、"Active"、"Completed" の絞り込みボタンをマウスでクリックすると、フォーカスインジケーターは表示されませんが、キーボードの <kbd>Tab</kbd> キーでそれらの間を移されると表示されます。ご心配なく。コードが壊れているわけではありません。

この CSS ファイルでは、 [`:focus-visible`](/ja/docs/Web/CSS/Reference/Selectors/:focus-visible) 擬似クラスを使用してフォーカスインジケーターに独自のスタイルを提供しています。また、ブラウザーは一連の内部ルールを使用して、ユーザーに表示するタイミングを決定します。一般的に、ブラウザーはキーボード入力に応じてフォーカスインジケーターを表示します。また、マウス入力に応じて表示する場合もあります。 `<button>` 要素はマウス入力に応じてフォーカスインジケーターを表示しませんが、 `<input>` 要素は表示します。

`:focus-visible` の動作は、皆さんが馴染みのある古い [`:focus`](/ja/docs/Web/CSS/Reference/Selectors/:focus) 擬似クラスよりも選択的です。 `:focus` は、より多くの状況でフォーカスインジケーターを表示させます。できれば、 `:focus-visible` の代わりに使用することも、結合子として使用することもできます。

## テンプレート間のフォーカス

ユーザーが `<Todo />` テンプレートを表示から編集に変更する場合、テンプレート名を変更するために使用する `<input>` にフォーカスを合わせるべきです。編集から閲覧に戻す場合は、 "Edit" ボタンにフォーカスを戻すべきです。

### 要素のターゲッティング

ここまで、 JSX コンポーネントを書いて、 React が裏で結果の DOM を構築するようにしてきました。ほとんどの場合、 React の状態と プロップ を使用してレンダリングされるものを制御できるため、 DOM の特定の要素をターゲットにする必要はありません。しかし、フォーカスを管理するには、特定の DOM 要素をターゲットにできる必要があります。

そこで `useRef()` フックが使われます。

最初の作業として、`Todo.jsx` の先頭にある `import` 文を、`useRef` を含むように変更します。

```jsx
import { useRef, useState } from "react";
```

`useRef()` は、単一のプロパティ `current` を持つオブジェクトを作成します。参照には任意の値を格納でき、後でその値を見ていくことができます。 さらに、 DOM 要素への参照を格納することもでき、まさにこれから行うのがそれです。

次に、`Todo()` 関数内の `useState()` フックの下に、 2 つの新しい定数を作成します。それぞれの定数は参照であるべきです。 1 つはビューテンプレートの "Edit" ボタン用、もう 1 つは編集テンプレートの編集フィールド用です。

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

これらの参照は、 DOM 要素に結び付けられるまでは空であることを明確にするため、既定値が `null` となっています。 それらを要素に結び付けるには、各要素の JSX に特別な `ref` 属性を追加し、それらの属性の値を適切に名前付きの `ref` オブジェクトに設定します。

編集テンプレート内の `<input>` を次のように更新してください。

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

ビューテンプレートの "Edit" ボタンを次のように更新します。

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

これを行うことで、 React がその部分をレンダリングした後にのみ、 `editFieldRef` と `editButtonRef` に、それらが関連付けられている DOM 要素への参照が設定されます。 ご自身で検査してみてください。 `Todo()` 関数の本体のどこかに、以下の行を追加します。ただし、 `editButtonRef` が初期化される場所より下に追加してください。

```jsx
console.log(editButtonRef.current);
```

コンポーネントが最初にレンダリングされた際には、 `editButtonRef.current` の値は `null` であることがわかりますが、 "Edit" ボタンをクリックすると、 `<button>` 要素がコンソールにログ出力されます。これは、コンポーネントがレンダリングされた後にのみ参照が設定され、 "Edit" ボタンをクリックするとコンポーネントが再レンダリングされるためです。このログは、移される前に必ず削除してください。

> [!NOTE]
> ログ出力は 6 回現れます。これは、アプリに `<Todo />` が 3 回指定されていることと、 React が開発中のコンポーネントを 2 回レンダリングしているためです。

私たちはより近づいています！新たに参照した要素を有益なものにするには、別の React フックである `useEffect()` を使用する必要があります。

### `useEffect()` の実装

[`useEffect()`](https://ja.react.dev/reference/react/useEffect) は、レンダリング処理に追加したいがメイン関数本体では実行できない副作用を実行するため、このような名前が付けられています。 `useEffect()` はコンポーネントがレンダリングされた直後に実行されるため、前回参照した DOM 要素を使用することができます。

`Todo.jsx` のインポート文を再び変更して、 `useEffect` を追加します。

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` は引数として関数を受け取ります。この関数は、コンポーネントがレンダリングされた後に実行されます。これを示すために、次の `useEffect()` 呼び出しを `Todo()` 本体の `return` 文のすぐ上に配置し、コンソールに "side effect" とログ出力する関数を渡します。

```jsx
useEffect(() => {
  console.log("side effect");
});
```

メインのレンダリングプロセスと `useEffect()` 内で実行するコードの違いを示すために、もう一つログ出力を追加します。前回追加した部分の下記に追加してください。

```jsx
console.log("main render");
```

これで、ブラウザーでアプリを開きます。コンソールにどちらのメッセージも表示され、それぞれが複数回繰り返されているはずです。たとえ "side effect" のログがコードで最初に現れているとしても、 "main render" が最初のログ出力で、 "side effect" が 2 つ目のログ出力であることに注目してください。

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

繰り返しになりますが、ログ出力がこのように並べられるのは、 `useEffect()` 内のコードがコンポーネントのレンダリング後に実行されるためです。これは慣れが必要ですが、先に進む前に頭に入れておいてください。これで、 `console.log("main render")` を削除し、フォーカス管理の実装に移ります。

### 編集フィールドへのフォーカス

これで、 `useEffect()` フックが動作することが分かりました。これと一緒にフォーカスを管理することができます。念のため、編集テンプレートに切り替える際には、編集フィールドにフォーカスを合わせたいと思います。

既存の `useEffect()` フックを次のように更新します。

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

これらの変更により、`isEditing` が true の場合、React は `editFieldRef` の現在の値を読み取り、ブラウザーのフォーカスがそこに移されるようになります。また、 2 つ目の引数として配列を `useEffect()` に渡します。 この配列は、`useEffect()` が依存すべき値のリストです。 これらの値が含まれている場合、 `useEffect()` はそれらの値のいずれかが変更された場合にのみ実行されます。 私たちは、 `isEditing` の値が変更された場合にのみフォーカスを変更したいのです。

試してみましょう。 <kbd>Tab</kbd> キーを使用して "Edit" ボタンのいずれかに移動し、<kbd>Enter</kbd> キーを押します。 `<Todo />` 部分が編集テンプレートに切り替わり、ブラウザーのフォーカスインジケーターが `<input>` 要素の周りに現れるはずです。

### フォーカスを "Edit" ボタンに戻す

一見すると、編集が保存されたり取り消されたりした際に、 React が "Edit" ボタンにフォーカスを戻すようにするのは、簡単そうに見えます。確かに、 `isEditing` が `false` の場合に、 `useEffect` に条件を追加して編集ボタンにフォーカスを当てることはできますか？ それでは、これで試してみましょう。 `useEffect()` の呼び出しを次のように更新してください。

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

これはうまく動作します。キーボードを使用して "Edit" ボタンを起動する場合（思い出してください。 <kbd>Tab</kbd> キーで移動し、 <kbd>Enter</kbd> でキーを押します）、編集を始めたり終わったりする際に、フォーカスが `<input>` と "Edit" ボタン間を移動することがわかるでしょう。しかし、新しい問題に気づくことができるかもしれません。アプリを操作する前に、ページ読み込み時に最終的な `<Todo />` 部分の "Edit" ボタンにすぐにフォーカスが当たっているのです。

私たちの `useEffect()` フックは、設計通りに動作しています。コンポーネントがレンダリングされるとすぐに実行され、`isEditing` が `false` であることを確認し、 "Edit" ボタンにフォーカスを指定します。 `<Todo />` が 3 つあり、最後にレンダリングされたものの "Edit" ボタンにフォーカスが指定されました。

`isEditing` が別の値に変更された場合にのみフォーカスが変更されるように、手法を変更する必要があります。

## より強固なフォーカス管理

私たちの洗練された基準を満たすには、 `isEditing` の値だけでなく、その値がいつ変更されたのかも知る必要があります。 そのためには、 `isEditing` 定数の前回値を読み取れるようにする必要があります。 擬似コードを使用して、私たちのロジックは次のようなものになるはずです。

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

React チームは、[コンポーネントの前回状態を取得する方法](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)について議論を行い、その用途に使用することができるフックの例を提供してくれました。

### `usePrevious()` の入力

次のコードを `Todo.jsx` の先頭付近に、`Todo()` 関数の上に貼り付けます。

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` は、レンダリングをまたいで値を追跡するカスタムフックです。

1. `useRef()` フックを使用して空の `ref` を作成します。
2. `ref` の `current` 値を、呼び出し元のコンポーネントに返します。
3. `useEffect()` を呼び出し、呼び出されるコンポーネントがレンダリングされるたびに、`ref.current` に格納される値を更新します。

この機能の鍵となるのは `useEffect()` の動作です。 `ref.current` は `useEffect()` が呼び出される際に更新されるため、常にその部分の値が更新されるよりも 1 段階遅れて更新されます。そのため、この関数は `usePrevious()` という名前で呼ばれています。

### `usePrevious()` の使用

これで、`isEditing` の前回値を追跡する `wasEditing` 定数を定義することができます。これは、引数として `isEditing` を指定して `usePrevious` を呼び出すことで実現されます。 `useRef` の行の続く `Todo()` 内に、次の行を追加します。

```jsx
const wasEditing = usePrevious(isEditing);
```

この行の下にコンソールログ出力を追加すると、 `usePrevious()` の動作を確認できます。

```jsx
console.log(wasEditing);
```

このログ出力では、 `wasEditing` の `current` の値は常に `isEditing` の前回の値となります。 "Edit" と "Cancel" ボタンを何度かクリックして、その変化を確認し、準備ができたらこのログ出力を削除します。

この `wasEditing` 定数を使用して、以前に説明した擬似コードを実装するために、`useEffect()` フックを更新することができます。

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

これで `useEffect()` のロジックが `wasEditing` に依存することになるので、依存性の配列にそれを指定しました。

キーボードを使用して、`<Todo />` 部分の "Edit" と "Cancel" ボタンをアクティブにしてみてください。この章の始めに説明した問題がなく、ブラウザーのフォーカスインジケーターが適切に移されるのがわかるでしょう。

## ユーザーがタスクを削除する際にフォーカス

キーボードの使い勝手のギャップがもう一つあります。ユーザーがリストからタスクを削除すると、フォーカスが失われてしまうのです。私たちは、前回と同様のパターンに従うことで、この問題に対処します。新しい ref を作成し、`usePrevious()` フックを利用することで、ユーザーが課題を削除するたびにリストの見出しにフォーカスを合わせることができるようになります。

### なぜリストの見出しなのか

フォーカスを送りたい場所が明らかな場合もあります。例えば、`<Todo />` テンプレートを切り替えた場合、「戻る」ための出発点となる "Edit" ボタンがあります。しかし、このケースでは、要素が完全に DOM から除去されるため、戻る場所がありません。 次善の策としては、直感的に操作できる場所が近くにあることです。 リストの見出しは、ユーザーが削除しようとしているリストアイテムに近く、そこにフォーカスを合わせると、ユーザーに残っている課題の数が指示されるため、最良の選択です。

### 参照の作成

`useRef()` および `useEffect()` フックを `App.jsx` にインポートします。下記でどちらも必要になります。

```jsx
import { useState, useRef, useEffect } from "react";
```

次に、 `App()` 関数内で、 `return` 文のすぐ上部に新しい参照を宣言します。

```jsx
const listHeadingRef = useRef(null);
```

### 見出しの準備

`<h2>` のような見出し要素は通常フォーカスできません。これは問題ではありません。属性 [`tabindex="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を追加することで、任意の要素をプログラムでフォーカス可能にすることができます。これは、JavaScript でのみフォーカス可能であることを意味します。 <kbd>Tab</kbd> キーを押して tabindex が `-1` の要素にフォーカスすることはできません。 [`<button>`](/ja/docs/Web/HTML/Reference/Elements/button) や [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a) 要素の場合と同じ方法ではできません（これは `tabindex="0"` を使用することで可能ですが、この場合は適切ではありません）。

課題のリストの上にある見出しに、　`tabindex` 属性（JSXでは`tabIndex`と表記）を `listHeadingRef` とともに追加しましょう。

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> `tabindex` 属性はアクセシビリティの特殊なケースに最適ですが、**過剰に使用しないよう細心の注意**を払う必要があります。 要素にフォーカスできるようにすることがユーザーに何らかの恩恵をもたらすことが確実な場合にのみ、 `tabindex` を適用してください。 ほとんどの場合、ボタン、アンカー、入力フィールドなど、自然にフォーカスを受け取ることができる要素を利用すべきです。 `tabindex` を無責任に使用すると、キーボードやスクリーンリーダーのユーザーに深刻な悪影響を及ぼす可能性があります。

### 前回状態の取得

ユーザーが自分の一覧から課題を削除したときのみ、 `ref` 属性を介して関連付けられた要素に注目したいと考えています。そのためには、先ほど使用した `usePrevious()` フックが要求されます。これを `App.jsx` ファイルの先頭に、インポートのすぐ下に追加します。

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

これで、 `App()` 関数内の `return` 文の上に次のコードを追加します。

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

ここでは、`usePrevious()` を呼び出して、タスク配列の前回の長さを追跡しています。

> [!NOTE]
> これで `usePrevious()` が 2 つのファイルで使用されることになりましたので、`usePrevious()` 関数を独自のファイルに移し、そのファイルからエクスポートし、必要がある場所でインポートする方が効率的かもしれません。 終わりに達したら、練習としてこれを試してみてください。

### `useEffect()` を使用して見出しのフォーカスを制御する

これで、前回いくつのタスクがあったかを保存したので、`useEffect()` フックを設定して、タスクの数が変更されたときに、実行するようにします。 つまり、タスクを削除したときに、見出しにフォーカスを当てるのです。

`App()` 関数の本体に、前回追加した部分のすぐ下に次の内容を追加します。

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

私たちは、これで持っているタスクの数が前回よりも少なくなった場合にのみ、掲載されている見出しにフォーカスしようとします。このフックに渡される依存関係により、これらの値（現在のタスク数、または前回タスク数）のいずれかが変更された場合にのみ確実に再実行できるようにします。

これで、ブラウザーで課題を削除するためにキーボードを使用すると、リストの上の見出しの周りに破線のフォーカス輪郭線が現れます。

## 完了です！

React アプリをゼロから構築できしました。おめでとうございます。ここで学んだスキルは、 React で作業を続ける上で、素晴らしい基礎となります。

ほとんどの場合、たとえあなたがコンポーネントやその状態、プロップについて慎重に考えることしかできなくても、 React プロジェクトに効果的な協力者となることができます。常に最善の HTML を書くことを忘れないでください。

`useRef()` と `useEffect()` は、やや高度な機能です。それらを使用している自分を褒めてあげましょう。これらの機能をさらに練習する機会を探してみてください。そうすることで、ユーザーにとって包括的な使い勝手を作成できるようになります。 忘れないでください。これらの機能がなければ、キーボードユーザーにとって、私たちのアプリはアクセスしにくいものになっていたでしょう。

> [!NOTE]
> 自分のコードを完成したバージョンと照らし合わせて調べたい場合は、 [todo-react リポジトリー](https://github.com/mdn/todo-react)で React アプリのサンプルコードの完了版を探すことができます。実行中のライブバージョンについては、 <https://mdn.github.io/todo-react/> をご覧ください。

この記事の最後では、さらに深く学ぶために使用できる React のリソースの一覧を紹介します。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
