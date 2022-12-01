---
title: Element.prepend()
slug: Web/API/Element/prepend
original_slug: Web/API/ParentNode/prepend
---

{{APIRef("DOM")}}

**`Element.prepend()`** メソッドは、一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトをこの {{domxref("Element")}} の最初の子の前に挿入します。 {{domxref("DOMString")}} オブジェクトは、同等の {{domxref("Text")}} ノードとして挿入されます。

## 構文

```js
prepend(...nodesOrDOMStrings);
```

### 引数

- `nodesOrDOMStrings`
  - : 挿入する一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトです。

### 返値

`undefined`.

### 例外

- {{domxref("HierarchyRequestError")}}: ノードを階層の特定の箇所に追加することができません。

## 例

### 要素の前に追加

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### テキストの前に追加

```js
let div = document.createElement("div");
div.append("Some text");
div.prepend("Headline: ");

console.log(div.textContent); // "Headline: Some text"
```

### 要素とテキストの追加

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### prepend() メソッドはスコープが効かない

`prepend()` メソッドは `with` 文の中ではスコープが効きません。詳しくは {{jsxref("Symbol.unscopables")}} をご覧ください。

```js
let div = document.createElement("div");

with(div) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
