---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

新しい {{domxref("Text")}} ノードを生成します。このメソッドは HTML 文字をエスケープするのに利用できます。

## 構文

```
var text = document.createTextNode(data);
```

- _text_: {{domxref("Text")}} ノード。
- _data_: テキストノードの中に入れるデータが入った[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)。

## 例

```html
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        var newtext = document.createTextNode(text),
          p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">First line of paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
