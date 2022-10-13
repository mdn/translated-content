---
title: DocumentOrShadowRoot.caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
original_slug: Web/API/DocumentOrShadowRoot/caretPositionFromPoint
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

{{domxref("DocumentOrShadowRoot")}} インターフェイスの **`caretPositionFromPoint()`** プロパティは、 DOM ノードを含む {{domxref('CaretPosition')}} オブジェクトを、そのノード内のキャレットとキャレットの文字オフセットと共に返します。

## 構文

```
var caretPosition = document.caretPositionFromPoint(float x, float y);
```

### パラメータ

- `x`
  - : ポイントの水平座標。
- `y`
  - : ポイントの垂直座標。

### 返り値

{{domxref('CaretPosition')}} オブジェクト。

## 例

この例では、クリックした場所に改行を挿入します。そのコードはデモの下にあります。

### Demo

{{EmbedLiveSample('Example', '100%', '300px')}}

### HTML Content

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

### JavaScript Content

```js
function insertBreakAtPoint(e) {
  var range;
  var textNode;
  var offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  }

  // only split TEXT_NODEs
  if (textNode.nodeType == 3) {
    var replacement = textNode.splitText(offset);
    var br = document.createElement('br');
    textNode.parentNode.insertBefore(br, replacement);
  }
}

window.onload = function (){
  var paragraphs = document.getElementsByTagName("p");
  for (i=0 ; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
  }
};
```

## 仕様

| 仕様                                                                                                                         | ステータス                       | 備考                |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('CSSOM View','#dom-document-caretpositionfrompoint','caretPositionFromPoint()')}} | {{Spec2('CSSOM View')}} | Initial definition. |

## ブラウザーの互換性

{{Compat}}
