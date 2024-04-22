---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
---

{{APIRef("DOM")}}{{Non-standard_header}}

**`caretRangeFromPoint()`** は {{domxref("Document")}} インターフェイスのメソッドで、指定された座標にある文書フラグメントの {{domxref("Range")}} オブジェクトを返します。

## 構文

```js
caretRangeFromPoint(x, y);
```

### 引数

- `x`
  - : 現在のビューポート内での水平位置。
- `y`
  - : 現在のビューポート内での垂直位置。

### 返値

以下のうちの一つです。

- {{domxref("Range")}}
- `Null` (x または y が負の数、ビューポート外、テキスト入力ノードがない場合)

## 例

下の**デモ**の段落のどこかをクリックすると、クリックした箇所に改行が挿入されます。そのためのコードは、デモの下にあります。

### デモ

{{EmbedLiveSample('Examples')}}

以下のコードでは、まず `document.caretRangeFromPoint` の対応をチェックしますが、ブラウザーが対応していない場合は、次に {{domxref("Document.caretPositionFromPoint", "document.caretPositionFromPoint")}} をチェックし、代わりにそれを使用するようにしています。

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else {
    document.body.textContent =
      "[This browser supports neither" +
      " document.caretRangeFromPoint" +
      " nor document.caretPositionFromPoint.]";
    return;
  }
  // Only split TEXT_NODEs
  if (textNode && textNode.nodeType == 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}
```

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

## ブラウザーの互換性

{{Compat}}
