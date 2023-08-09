---
title: "Element: replaceWith() メソッド"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.replaceWith()`** メソッドは、この `Element` を親の子リストの中で一連の {{domxref("Node")}} オブジェクトまたは文字列に置換します。文字列は {{domxref("Text")}} ノードと等価なノードとして挿入されます。

## 構文

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列で置換します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 階層の指定の位置にノードを挿入できなかったときに発生します。

## 例

### `replaceWith()` の使用

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` はスコープに非対応

`replaceWith()` メソッドは `with` 文でのスコープに対応していません。詳細は {{jsxref("Symbol.unscopables")}} をご覧ください。

```js
with (node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}
