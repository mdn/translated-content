---
title: "Element: moveBefore() メソッド"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

**`moveBefore()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された {{domxref("Node")}} を呼び出し元ノード内の直接の子として、指定された参照ノードの前に移動します。

## 構文

```js-nolint
moveBefore(movedNode, referenceNode)
```

### 引数

- `movedNode`
  - : 移動するノードを表す {{domxref("Node")}}。なお、これは {{domxref("Element")}} または {{domxref("CharacterData")}} ノードでなければなりません。
- `referenceNode`
  - : {{domxref("Node")}} であり、 `movedNode` の移動先はこの前になります。または `null` です。この値が `null` であった場合、`movedNode` は呼び出し元のノードの子要素の末尾に挿入されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : 以下のいずれかの場面で発生します。
    - 指定された `movedNode` がこの DOM に属しておらず、この DOM に属しているノードの中に移動しようとしている。またはその逆。
    - 指定された `movedNode` が、`moveBefore()` が呼び出された要素の祖先ノードである。
    - `movedNode` を 2 つの異なる文書間で移動しようとしている。
    - 指定された `movedNode` は {{domxref("Element")}} または {{domxref("CharacterData")}} ノードではない。
- `NotFoundError` {{jsxref("TypeError")}}
  - : 指定された `referenceNode` は、`moveBefore()` を呼び出したノードの子ノードではない。つまり、`movedNode` の移動先ノードの子ノードではない。
- `TypeError` {{jsxref("TypeError")}}
  - : 2 つ目の引数が指定されていない。

## 解説

`moveBefore()` メソッドは、指定されたノードをこの DOM 内の新しい場所に移動します。これは `Node.insertBefore()` メソッドと同様の機能を提供しますが、ノードを除去せずに、再挿入される点が異なります。つまり、 `insertBefore()` や類似のメカニズムで移動した場合にリセットされる、次のようなノードの状態が、移動後も保持されます。

- [アニメーション](/ja/docs/Web/CSS/Guides/Animations)や[トランジション](/ja/docs/Web/CSS/Guides/Transitions)の状態。
- {{htmlelement("iframe")}} の読み込み状態。
- 操作の状態（例えば {{cssxref(":focus")}} や {{cssxref(":active")}}）。
- 要素の[全画面](/ja/docs/Web/API/Fullscreen_API)の状態。
- [ポップオーバー](/ja/docs/Web/API/Popover_API)の開閉状態。
- {{htmlelement("dialog")}} 要素のモーダル状態（モーダルダイアログは閉じられません）。

{{htmlelement("video")}} および {{htmlelement("audio")}} 要素の再生状態は、以上の一覧には含まれません。これらの要素は、使用される仕組みに関わらず、除去され再挿入された後も状態を保持するからです。

{{domxref("MutationObserver")}} を使用して DOM の変更を監視する場合、`moveBefore()` で移動されたノードは[除去されたノード](/ja/docs/Web/API/MutationRecord/removedNodes)と[追加されたノード](/ja/docs/Web/API/MutationRecord/addedNodes)として記録されます。

### `moveBefore()` の制約

`moveBefore()` を使用する際には、いくつか留意すべき制約があります。

- 同じ文書内でノードを移動する場合にのみ、動作します。
- DOM に接続されていないノードを既に接続済みの親ノードに移そうとした場合、またはその逆の場合、動作しません。

このような場合、`moveBefore()` は `HierarchyRequestError` 例外で失敗します。上記の制約が具体的な用途で必要となる場合、代わりに {{domxref("Node.insertBefore()")}} を使用するか、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) を使用して、このようなケースで発生するエラーを処理する必要があります。

### 状態を保持しながらのカスタム要素の移動

[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements) の DOM 内の位置が `Element.moveBefore()` や、{{domxref("Node.insertBefore()")}} などの類似メソッドによって変更されるたびに、その `disconnectedCallback()` および `connectedCallback()` ライフサイクルコールバックが発生します。これらのコールバックは通常、要素のライフサイクルの始まる時または終わりに実行する必要のある初期化やクリーンアップコードを実装するために使用されるため、要素が移動された時（除去されるまたは挿入される時ではなく）に実行すると、その状態に問題が発生することがあります。

カスタム要素の状態を保持するには、`connectedMoveCallback()` コールバックを使用することができます。カスタム要素が移動される際に `moveBefore()` が使用された場合、 `connectedMoveCallback()` が `connectedCallback()` や `disconnectedCallback()` の代わりに実行されます。

詳細については、[カスタム要素の移動](/ja/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves)を参照してください。

## 例

### 基本的な `moveBefore()` の使い方

このデモでは、`moveBefore()` の基本的な使い方を示します。

#### HTML

この HTML には、{{htmlelement("article")}} 要素があり、その中に {{htmlelement("div")}} 要素と 2 つの {{htmlelement("section")}} 要素があります。`<div>` 要素には {{htmlelement("button")}} が含まれており、後でこれを移動するために使用します。

```html live-sample___movebefore-basic
<article id="wrapper">
  <div id="mover">
    <button>移動する</button>
  </div>
  <section id="section1">
    <h2>セクション 1</h2>
  </section>
  <section id="section2">
    <h2>セクション 2</h2>
  </section>
</article>
```

#### CSS

ボックスの外観や間隔に対して基本的なスタイル設定を提供し、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用してコンテンツを中央揃えにします。

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  width: 200px;
  height: 80px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#section1,
#section2 {
  background-color: hotpink;
}

#mover {
  background-color: orange;
}
```

#### JavaScript

このスクリプトでは、`<button>` に {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して click イベントリスナーを設定します。ボタンがクリックされると、`mover` の `<div>` の {{domxref("Element.nextElementSibling", "nextElementSibling")}} が最初の `<section>` 要素であるかどうかを調べます。該当する場合、`wrapper` の `<article>` に対して `moveBefore()` を呼び出し、`<div>` を 2 つ目の `<section>` の前に移動されるよう指定します。該当しない場合、`moveBefore()` を使用して、`<div>` を最初の `<section>` の前に移動します。

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const moveBtn = document.querySelector("button");

moveBtn.addEventListener("click", () => {
  if (mover.nextElementSibling === section1) {
    wrapper.moveBefore(mover, section2);
  } else {
    wrapper.moveBefore(mover, section1);
  }
});
```

#### 結果

レンダリングされた例はこのようになります。

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

`<button>` を何度かクリックしてみて、2 つの状態の間で切り替わる様子に注意してください。

### 状態保持のデモ

このデモでは、 YouTube 埋め込みを含む `<div>` 要素を 2 つの異なるコンテナー間で移動させる複数の仕組みが用意されています。 `moveBefore()` が埋め込み再生状態を保持する一方、それ以外のメカニズムでは保持されないことを示しています。

#### HTML

この HTML には {{htmlelement("article")}} 要素があり、その中に 2 つの {{htmlelement("section")}} 要素があります。 最初の `<section>` 要素には、YouTube の埋め込みコードが含まれている {{htmlelement("div")}} 要素が含まれています。同時に、3 つの {{htmlelement("button")}} 要素を含む {{htmlelement("div")}} 要素も存在します。後ほど JavaScript を使用して、この埋め込み `<div>` をセクション間で移動する機能を追加します。

```html live-sample___movebefore-state
<article id="wrapper">
  <section id="section1">
    <div id="mover">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/XvoENpR9cCQ?si=o2i6MvxugD-O5yyv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  </section>
  <section id="section2"></section>
</article>
<div id="controls">
  <button id="move-before"><code>moveBefore()</code> で移動</button>
  <button id="insertbefore"><code>insertBefore()</code> で移動</button>
  <button id="prepend"><code>prepend()</code> で移動</button>
</div>
```

#### CSS

このレイアウトには[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用し、2 つの`<section>` 要素を横に並んでいるように配置し、`controls` の `<div>` 内のボタンを均等に空間を空けて配置します。

```css live-sample___movebefore-state
#wrapper,
#controls {
  width: 100%;
  display: flex;
}

#wrapper {
  margin-bottom: 10px;
}

section {
  flex: 1;
  padding: 10px;
}

#controls {
  display: flex;
  justify-content: space-around;
}

#section1 {
  background-color: hotpink;
}

#section2 {
  background-color: orange;
}

#mover {
  max-width: 100%;
  background-color: black;
}
```

#### JavaScript

このスクリプトでは、 `click` イベントリスナーをそれぞれの `<button>` 要素に {{domxref("EventTarget.addEventListener", "addEventListener()")}} で設定します。ボタンがクリックされると、どの `<section>` 要素が埋め込み `<div>` の {{domxref("Node.parentElement", "parentElement")}} であるかを確認し、関連する関数（`moveBefore()`、{{domxref("Node.insertBefore", "insertBefore()")}}、{{domxref("Element.prepend", "prepend()")}}）を使用して、別の `<section>` 要素内に移動するようにします。

```js live-sample___movebefore-state
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const moveBeforeBtn = document.getElementById("move-before");
const insertbeforeBtn = document.getElementById("insertbefore");
const prependBtn = document.getElementById("prepend");

moveBeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.moveBefore(mover, null);
  } else {
    section1.moveBefore(mover, null);
  }
});

insertbeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.insertBefore(mover, null);
  } else {
    section1.insertBefore(mover, null);
  }
});

prependBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.prepend(mover);
  } else {
    section1.prepend(mover);
  }
});
```

#### 結果

レンダリングされた例は以下のようになります。

{{EmbedLiveSample("movebefore-state", "100%", "260px")}}

YouTube 埋め込み動画を再生し、それぞれの `<button>` を数回クリックして `<div>` 要素の画面位置を左から右へ切り替えてみてください。`insertBefore()` と `prepend()` の場合、移動のたびに状態がリセットされるため、再起動が必要である点に注意してください。一方、`moveBefore()` の場合、移動後も状態が保持されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.moveBefore()")}}
- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
