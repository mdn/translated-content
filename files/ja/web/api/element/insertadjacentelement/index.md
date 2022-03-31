---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
tags:
  - API
  - DOM
  - Element
  - Gecko
  - メソッド
  - リファレンス
  - insertAdjacentElement
browser-compat: api.Element.insertAdjacentElement
---
{{APIRef("DOM")}}

**`insertAdjacentElement()`** は {{domxref("Element")}} インターフェイスのメソッドで、、呼び出された要素から相対的に指定された位置に、指定された要素ノードを挿入します。

## 構文

```js
targetElement.insertAdjacentElement(position, element);
```

### 引数

- `position`

  - : {{domxref("DOMString")}} で、 `targetElement` の相対位置を表します。以下の何れかの文字列と一致する必要があります（大文字小文字の区別なし）。

    - `'beforebegin'`: `targetElement` 自体の前。
    - `'afterbegin'`: `targetElement` の直下、最初の子の前。
    - `'beforeend'`: `targetElement` の直下、最後の子の後。
    - `'afterend'`: `targetElement` 自体の後。

- `element`
  - : ツリーに挿入する要素です。

### 返値

挿入された要素です。挿入に失敗した場合は `null` になります。

### 例外

| 例外     | 説明                                         |
| ------------- | --------------------------------------------------- |
| `SyntaxError` | 指定された `position` が理解できない値であった場合。 |
| `TypeError`   | 指定された `element` が有効な要素でなかった場合。     |

### position の名前の視覚化

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **Note:** `beforebegin` および `afterend` の位置は、そのノードがツリー内にあり、親が要素である場合のみ動作します。

## 例

```js
beforeBtn.addEventListener('click', function() {
  var tempDiv = document.createElement('div');
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement('beforebegin', tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener('click', function() {
  var tempDiv = document.createElement('div');
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement('afterend', tempDiv);
  }
  setListener(tempDiv);
});
```

[insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) のデモを GitHub で見てください（[ソースコード](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentElement.html)も見てください）。ここでは、コンテナーの中に {{htmlelement("div")}} 要素が並んでいます。そして、_Insert before_ と _Insert after_ ボタンを押すと、 `insertAdjacentElement()` を使って選択された要素の前後に新しい div を挿入することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}} (`beforebegin` と同様で、異なる引数)
- {{domxref("Node.appendChild()")}} (`beforeend` と同様の効果)
