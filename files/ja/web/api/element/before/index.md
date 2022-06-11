---
title: Element.before()
slug: Web/API/Element/before
tags:
  - API
  - DOM
  - メソッド
  - Node
  - リファレンス
browser-compat: api.Element.before
translation_of: Web/API/Element/before
original_slug: Web/API/ChildNode/before
---
{{APIRef("DOM")}}

**`Element.before()`** は一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトを、この `Element` の親の子リストの中、この `Element` の直前に挿入します。 {{domxref("DOMString")}} オブジェクトは {{domxref("Text")}} ノードと等価なノードとして挿入されます。

## 構文

```js
before(... nodes)
```

### 引数

- `nodes`
  - : 挿入する一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトです。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層構造の中の指定された位置に挿入できなかったときに発生します。

## 例

### 要素の挿入

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### テキストの挿入

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### 要素とテキストの挿入

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
