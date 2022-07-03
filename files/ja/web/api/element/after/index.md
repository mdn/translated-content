---
title: Element.after()
slug: Web/API/Element/after
tags:
  - API
  - DOM
  - メソッド
  - Node
  - リファレンス
browser-compat: api.Element.after
translation_of: Web/API/Element/after
---
{{APIRef("DOM")}}

**`Element.after()`** は、一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトをこの `Element` の親の子リストの、 `Element` の直後に挿入します。 {{domxref("DOMString")}} オブジェクトは {{domxref("Text")}} ノードと等価なノードとして挿入されます。

## 構文

```js
after(... nodes)
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

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### テキストの挿入

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### 要素とテキストの挿入

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
