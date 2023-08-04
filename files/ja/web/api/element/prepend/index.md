---
title: "Element: prepend() メソッド"
short-title: prepend()
slug: Web/API/Element/prepend
l10n:
  sourceCommit: dac3299ae197f40fcf3369f6f58d49e00538bb1e
---

{{APIRef("DOM")}}

**`Element.prepend()`** メソッドは、一連の {{domxref("Node")}} または文字列をこの {{domxref("Element")}} の最初の子の前に挿入します。文字列は、同等の {{domxref("Text")}} ノードとして挿入されます。

## 構文

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} または文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードを階層の指定された箇所に追加することができない場合に発生します。

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

with (div) {
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
