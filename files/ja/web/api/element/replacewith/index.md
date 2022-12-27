---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
original_slug: Web/API/ChildNode/replaceWith
---

{{APIRef("DOM")}}

**`Element.replaceWith()`** メソッドは、この `Element` を親の子リストの中で一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトに置換します。 {{domxref("DOMString")}} オブジェクトは {{domxref("Text")}} ノードと等価なノードとして挿入されます。

## 構文

```js
replaceWith(...nodes)
```

### 引数

- `nodes`
  - : 一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトで置換します。

### 例外

- {{domxref("HierarchyRequestError")}}: 階層の指定の位置にはノードを挿入できません。

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

### `replaceWith()` はスコーピングに非対応

`replaceWith()` メソッドは `with` 文でのスコーピングに対応していません。詳細は {{jsxref("Symbol.unscopables")}} をご覧ください。

```js
with(node) {
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
