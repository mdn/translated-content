---
title: "Element: before() メソッド"
short-title: before()
slug: Web/API/Element/before
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.before()`** は一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `Element` の親の子リストの中、この `Element` の直前に挿入します。文字列は {{domxref("Text")}} ノードと等価なノードとして挿入されます。

## 構文

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} オブジェクトまたは文字列です。

### 返値

なし ({{jsxref("undefined")}})。

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
