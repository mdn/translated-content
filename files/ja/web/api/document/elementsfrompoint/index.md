---
title: DocumentOrShadowRoot.elementsFromPoint()
slug: Web/API/Document/elementsFromPoint
original_slug: Web/API/DocumentOrShadowRoot/elementsFromPoint
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`elementsFromPoint()`** は {{domxref("DocumentOrShadowRoot")}} インターフェイスのメソッドで、指定された座標 (ビューポートからの相対) にあるすべての要素の配列を返します。

これは {{domxref("DocumentOrShadowRoot.elementFromPoint", "elementFromPoint()")}} メソッドと同じような方法で動作します。

## 構文

```
const elements = document.elementsFromPoint(x, y);
```

### 引数

- `x`
  - : 点の水平座標です。
- `y`
  - : 点の垂直座標です。

### 返値

{{domxref("Element")}} オブジェクトの配列です。

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
  for (var i = 0; i < elements.length; i++) {
    output.textContent += elements[i].localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  }
} else {
  output.innerHTML = "<span style=\"color: red;\">" +
     "Browser does not support <code>document.elementsFromPoint()</code>" +
     "</span>";
}
```

{{EmbedLiveSample('Example', '420', '120')}}

## 仕様書

| 仕様書                                                                                                                       | 状態                             |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Shadow DOM','#dom-documentorshadowroot-elementsfrompoint','elementsFromPoint()')}} | {{Spec2('Shadow DOM')}} |
| {{SpecName('CSSOM View', '#dom-document-elementsfrompoint', 'elementsFromPoint()')}}             | {{Spec2('CSSOM View')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("DocumentOrShadowRoot.elementFromPoint()")}}
- {{DOMxRef("DocumentOrShadowRoot.msElementsFromRect()")}} {{Non-standard_Inline}}
