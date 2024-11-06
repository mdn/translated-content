---
title: "Node: removeChild() メソッド"
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`removeChild()`** は {{domxref("Node")}} インターフェイスのメソッドで、子ノードを DOM から取り除き、取り除いたノードを返します。

> [!NOTE]
> 取り除かれた子ノードへの参照が保持されている限り、子ノードはメモリー内に残りますが、 DOM の一部ではなくなります。
> これは、後のコードで再利用することができます。
>
> `removeChild()` の返値が保持されず、他の参照もなくなった場合は、まもなくメモリーから[自動的に削除](/ja/docs/Web/JavaScript/Memory_management)されます。

{{domxref("Node.cloneNode()")}} とは異なり、返値は関連付けられた {{domxref("EventTarget.addEventListener", "EventListener")}} オブジェクトを保持します。

## 構文

```js-nolint
removeChild(child)
```

### 引数

- `child`
  - : {{domxref("Node")}} で、 DOM から取り除きたい子ノードを指定します。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : `child` がこのノードの子ではない場合に発生します。
- {{jsxref("TypeError")}}
  - : `child` が `null` であった場合に発生します。

## 例

### 単純な例

この HTML を使います。

```html
<div id="top">
  <div id="nested"></div>
</div>
```

親ノードが分かる場合に、指定された要素を取り除きます。

```js
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);
```

親ノードが分からないときに指定された要素を取り除きます。

```js
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

ある要素からすべての子を削除します。

```js
let element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### TypeError が発生する例

```html
<!--HTML コードの例-->
<div id="top"></div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// TypeError が発生
let garbage = top.removeChild(nested);
```

### NotFoundError が発生する例

```html
<!--HTML コードの例-->
<div id="top">
  <div id="nested"></div>
</div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// 最初の呼び出しでは正しくノードを取り除く
let garbage = top.removeChild(nested);

// NotFoundError が発生
garbage = top.removeChild(nested);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.parentNode")}}
- {{domxref("Element.remove()")}}
- {{domxref("Node.cloneNode()")}}
