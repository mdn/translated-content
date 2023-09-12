---
title: "Document: caretPositionFromPoint() メソッド"
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("CSSOM View")}}

**`caretPositionFromPoint()`** は {{domxref("Document")}} インターフェイスのメソッドで、この DOM ノードを含む {{domxref('CaretPosition')}} オブジェクトを、そのノード内のキャレットとキャレットの文字オフセットと共に返します。

## 構文

```js-nolint
caretPositionFromPoint(x, y)
```

### 引数

- `x`
  - : ポイントの水平座標。
- `y`
  - : ポイントの垂直座標。

### 返値

{{domxref('CaretPosition')}} オブジェクト。

## 例

以下の**デモ**の段落のどこかをクリックすると、クリックした位置に改行を挿入します。コードはデモの下にあります。

### デモ

{{EmbedLiveSample('Examples')}}

下記のコードでは、最初に `document.caretPositionFromPoint` の 対応状況を調べますが、ブラウザーが対応していない場合は {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} を調べて、代わりにそれを使用します。

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // WebKit 独自の代替メソッドを使用
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // どちらのメソッドも対応していなければ、何もしない
    return;
  }
  // TEXT_NODE のみを分割
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "このブラウザーは標準の document.caretPositionFromPoint に対応しています";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "このブラウザーは標準外の document.caretRangeFromPoint に対応しています";
  message.classList.add("supported");
}
```

### HTML

```html hidden
<div id="message">
  このブラウザーは document.caretRangeFromPoint にも
  document.caretPositionFromPoint にも対応していません。
</div>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('CaretPosition')}}
