---
title: Element.append()
slug: Web/API/Element/append
tags:
  - API
  - DOM
  - メソッド
  - Node
  - Element
  - リファレンス
browser-compat: api.Element.append
translation_of: Web/API/Element/append
original_slug: Web/API/ParentNode/append
---
{{APIRef("DOM")}}

**`Element.append()`** メソッドは、一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトを `Element` のの最後の子の後に挿入します。 {{domxref("DOMString")}} オブジェクトは等価な {{domxref("Text")}} ノードとして挿入されます。

{{domxref("Node.appendChild()")}} との違いは次の通りです。

- `Element.append()` は {{domxref("DOMString")}} も追加することができますが、`Node.appendChild()` は{{domxref("Node")}} オブジェクトのみを受け付けます。
- `Element.append()` には返値がありませんが、`Node.appendChild()` は追加された {{domxref("Node")}} オブジェクトを返します。
- `Element.append()` は複数のノードや文字列を追加することができますが、`Node.appendChild()` はノードを 1 つだけしか追加することができせん。

## 構文

```js
append(...nodesOrDOMStrings)
```

### 引数

- `nodesOrDOMStrings`
  - : 挿入する一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトです。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層構造の中の指定された位置に挿入できなかったときに発生します。

## 例

### 要素の追加

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ <p> ]
```

### テキストの追加

```js
let div = document.createElement("div")
div.append("Some text")

console.log(div.textContent) // "Some text"
```

### 要素とテキストの追加

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append("Some text", p)

console.log(div.childNodes) // NodeList [ #text "Some text", <p> ]
```

### append メソッドはスコープが効かない

`append()` メソッドは `with` 文の中ではスコープが効きません。詳しくは {{jsxref("Symbol.unscopables")}} をご覧ください。

```js
let div = document.createElement("div")

with(div) {
  append("foo")
}
// ReferenceError: append is not defined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
