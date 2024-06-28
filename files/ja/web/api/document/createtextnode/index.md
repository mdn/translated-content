---
title: "Document: createTextNode() メソッド"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

新しい {{domxref("Text")}} ノードを生成します。このメソッドは HTML 文字をエスケープするのに利用できます。

## 構文

```js-nolint
createTextNode(data)
```

### 引数

- `data`
  - : テキストノードの中に入れるデータが入った文字列です。

### 返値

{{domxref("Text")}} ノードです。

## 例

```html
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        const newtext = document.createTextNode(text);
        const p1 = document.getElementById("p1");

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

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
