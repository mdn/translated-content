---
title: "Document: elementsFromPoint() メソッド"
slug: Web/API/Document/elementsFromPoint
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`elementsFromPoint()`** は {{domxref("Document")}} インターフェイスのメソッドで、指定された（ビューポートからの相対位置の）座標にあるすべての要素の配列を返します。
要素はビューポートの最上位のボックスから最下位のボックスに向けて並べられます。

これは {{domxref("Document.elementFromPoint", "elementFromPoint()")}} メソッドと同じような方法で動作します。

## 構文

```js-nolint
elementsFromPoint(x, y)
```

### 引数

- `x`
  - : 点の水平座標です。
- `y`
  - : 点の垂直座標です。

### 返値

{{domxref('Element')}} オブジェクトの配列で、ビューポートの最上位のボックスから最下位のボックスに向けて並べられます。

## 例

### HTML

```html
<div>
  <p>Some text</p>
</div>
<p>Elements at point 30, 20:</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  elements.forEach((elt, i) => {
    output.textContent += elt.localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  });
} else {
  output.innerHTML =
    '<span style="color: red;">' +
    "Browser does not support <code>document.elementsFromPoint()</code>" +
    "</span>";
}
```

### 結果

{{EmbedLiveSample('Examples', '420', '160')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Document.elementFromPoint()")}}
