---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.insertBefore
translation_of: Web/API/Node/insertBefore
---
{{APIRef("DOM")}}

**`insertBefore()`** は {{domxref("Node")}} インターフェイスのメソッドで、*参照先ノード*の前にこの*親ノード*の子としてノードを挿入します。

指定されたノードが既に文書中に存在した場合、  `insertBefore()` はこれを現在の位置から新しい位置に移動します。（つまり、既存の親ノードから自動的に削除され、指定された新しい親に追加されます。）

これは、 1 つのノードが文書中に同時に 2 か所に存在できないことを意味します。

> **Note:** {{domxref("Node.cloneNode()")}} を使用すると、ノードを新しい親の下に追加する前に複製を作成することができます。なお、 `cloneNode()` で作成された複製は自動的には同期されません。

指定された子が {{domxref("DocumentFragment")}} である場合、 `DocumentFragment` の内容全体が指定された親ノードの子リストに移動されます。

## 構文

```js
insertBefore(newNode, referenceNode);
```

### 引数

- `newNode`
  - : 挿入するノードです。
- `referenceNode`
  - : `newNode` が挿入される位置の前にあるノードです。このノードが `null` である場合は、 `newNode` はこのノードの子ノードの末尾に挿入されます。
    > **Note:** `referenceNode` は省略可能な引数では**ありません**。
    > 明示的に {{domxref("Node")}} または `null` を渡す必要があります。
    > 渡さなかった場合や無効な値を渡した場合の[動作](https://code.google.com/p/chromium/issues/detail?id=419780)は、ブラウザーのバージョンによって[異なる](https://bugzilla.mozilla.org/show_bug.cgi?id=119489)可能性があります。

## 返値

追加された子ノードを返します（ただし `newNode` が {{domxref("DocumentFragment")}} の場合は、空の {{domxref("DocumentFragment")}} を返します）。

### 例外

挿入前の検証

## 例

### 例 1

```html
<div id="parentElement">
   <span id="childElement">foo bar</span>
</div>

<script>
// 挿入する新しいノードを作成する
let newNode = document.createElement("span")

// 親ノードの参照を取得する
let parentDiv = document.getElementById("childElement").parentNode

// テストケース [ 1 ] 開始: 既存の childElement (すべて正しく動作)
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)
// テストケース [ 1 ] 終了

// テストケース [ 2 ] 開始: childElement が undefined 型の場合
let sp2 = undefined // "childElement" の ID を持つノードが存在しない
parentDiv.insertBefore(newNode, sp2) // Node 型に暗黙に動的型変換
// テストケース [ 2 ] 終了

// テストケース [ 3 ] 開始: childElement が "undefined" (文字列) の場合
let sp2 = "undefined" // "childElement" の ID を持つノードが存在しない
parentDiv.insertBefore(newNode, sp2) // Generates "Type Error: Invalid Argument"
// テストケース [ 3 ] 終了
</script>
```

### 例 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
// 新しい只の <span> 要素を作成
let sp1 = document.createElement("span")

// 参照要素を取得
let sp2 = document.getElementById("childElement")
// 親要素を取得
let parentDiv = sp2.parentNode

// 新しい要素を sp2 の手前に挿入
parentDiv.insertBefore(sp1, sp2)
</script>
```

> **Note:** `insertAfter()` メソッドはありません。
> これは `insertBefore` メソッドと {{domxref("Node.nextSibling")}} の組み合わせでエミュレートできます。
>
> 前の例では、 `sp1` は以下のようにして `sp2` の後に挿入することができます。
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling)
> ```
>
> `sp2` に次の兄弟ノードがない場合、これが最後の子ノードです。 — `sp2.nextSibling` は `null` を返し、 `sp1` は子ノードリストの末尾（`sp2` の直後）に挿入されます。

### 例 3

要素を最初の子要素の前に挿入するために、 {{domxref("Node/firstChild", "firstChild")}} プロパティを使用します。

```js
// 親ノードを取得
let parentElement = document.getElementById('parentElement')
// 親ノードの最初の子ノードを取得
let theFirstChild = parentElement.firstChild

// 新しい要素を取得
let newElement = document.createElement("div")

// 最初の子ノードの前に新しい要素を挿入
parentElement.insertBefore(newElement, theFirstChild)
```

要素に最初の子ノードがない場合、 `firstChild` は `null` になります。その場合も、要素は親ノードの最後の子ノードの後に追加されます。

親要素に最初の子ノードがない場合は、最後の子ノードもありません。結果的に、新しく挿入された要素は**唯一の**要素になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.prepend()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.after()")}}
