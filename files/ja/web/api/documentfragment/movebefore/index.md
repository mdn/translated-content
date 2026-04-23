---
title: "DocumentFragment: moveBefore() メソッド"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

**`moveBefore()`** は {{domxref("DocumentFragment")}} インターフェイスのメソッドで、指定された {{domxref("Node")}} を呼び出し元の `DocumentFragment` 内の直接の子として、指定された参照ノードの前に移動します。

## 構文

```js-nolint
moveBefore(movedNode, referenceNode)
```

### 引数

- `movedNode`
  - : 移動するノードを表す {{domxref("Node")}}。なお、これは {{domxref("Element")}} または {{domxref("CharacterData")}} ノードでなければなりません。
- `referenceNode`
  - : {{domxref("Node")}} であり、 `movedNode` の移動先はこの前になります。または `null` です。この値が `null` であった場合、`movedNode` は呼び出し元の `DocumentFragment` の子要素の末尾に挿入されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : 以下のいずれかの場面で発生します。
    - 指定した `movedNode` がこの DOM に既に追加されており、`DocumentFragment` 内に移動しようとしている。
    - `movedNode` を 2 つの異なる文書フラグメント間で移動しようとしている。
    - 指定された `movedNode` は {{domxref("Element")}} または {{domxref("CharacterData")}} ノードではない。
- `NotFoundError` {{jsxref("TypeError")}}
  - : 指定された `referenceNode` は、`moveBefore()` を呼び出した `DocumentFragment` の子ノードではない。つまり、`movedNode` の移動先フラグメントの子ノードではない。
- `TypeError` {{jsxref("TypeError")}}
  - : 2 つ目の引数が指定されていない。

## 解説

`moveBefore()` メソッドは、指定されたノードをこの `DocumentFragment` 内の新しい場所に移動します。これは `Node.insertBefore()` メソッドと同様の機能を提供しますが、ノードを除去せずに、再挿入される点が異なります。つまり、 `insertBefore()` や類似のメカニズムで移動した場合にリセットされる、次のようなノードの状態が、移動後も保持されます。

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

- 同じ文書フラグメント内でノードを移動する場合にのみ、動作します。
- `DocumentFragment` の中の DOM に既に追加されているノードを移動しようとした場合は動作しません。

このような場合、`moveBefore()` は `HierarchyRequestError` 例外で失敗します。上記の制約が具体的な用途で必要となる場合、代わりに {{domxref("Node.insertBefore()")}} を使用するか、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) を使用して、このようなケースで発生するエラーを処理する必要があります。

## 例

### 基本的な `moveBefore()` の使い方

このデモでは、`moveBefore()` の基本的な使い方を示します。

#### HTML

この HTML には、3 つの {{htmlelement("button")}} 要素と 1 つの {{htmlelement("article")}} 要素があります。ボタンを使用して制御し、`<article>` 内に `DocumentFragment` インスタンスを挿入したり、それを空にしたりします。

```html live-sample___movebefore-basic
<button id="insert1">フラグメントを挿入</button>
<button id="insert2">変更されたフラグメントを挿入</button>
<button id="clear">クリア</button>
<article id="wrapper"></article>
```

#### CSS

JavaScript で生成された `DocumentFragment` の子要素として、後ほどページに挿入される要素の外観や操作感、空間について、基本的なスタイルを設定します。

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  display: inline-block;
  width: 200px;
  height: 30px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-top: 10px;
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

スクリプト内で、`createFragment()` 関数を定義します。この関数は、直下の子要素として {{htmlelement("div")}} 要素と 2 つの {{htmlelement("section")}} 要素を含む `DocumentFragment` を作成します。

次に、 click イベントリスナーをそれぞれの `<button>` に {{domxref("EventTarget.addEventListener", "addEventListener()")}} で追加します。

- まずボタンは、変更を加えずに `DocumentFragment` を `#wrapper` の `<article>` 要素に追加します。
- 2 つ目のボタンは `DocumentFragment` を `#wrapper` の `<article>` 要素に追加しますが、その前に `moveBefore()` を使用して、`<div>` を `DocumentFragment` の最初ではなく 2 番目の子要素に移動します。
- 3 つ目ボタンは、{{domxref("Element.innerHTML", "innerHTML")}} を使用して `#wrapper` の `<article>` 要素を空にします。

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const insertBtn1 = document.getElementById("insert1");
const insertBtn2 = document.getElementById("insert2");
const clearBtn = document.getElementById("clear");

function createFragment() {
  const fragment = new DocumentFragment();
  const divElem = document.createElement("div");
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  divElem.id = "mover";
  section1.id = "section1";
  section2.id = "section2";
  fragment.appendChild(divElem);
  fragment.appendChild(section1);
  fragment.appendChild(section2);

  return fragment;
}

insertBtn1.addEventListener("click", () => {
  const fragment = createFragment();
  wrapper.appendChild(fragment);
});

insertBtn2.addEventListener("click", () => {
  const fragment = createFragment();
  fragment.moveBefore(
    fragment.querySelector("#mover"),
    fragment.querySelector("#section2"),
  );

  wrapper.appendChild(fragment);
});

clearBtn.addEventListener("click", () => {
  wrapper.innerHTML = "";
});
```

#### 結果

レンダリングされた例は以下のようになります。

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

まず 2 つのボタンを何回かクリックしてみて、2 つ目のボタンが `DocumentFragment` 構造を変更する様子に注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
