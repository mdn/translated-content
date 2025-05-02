---
title: "Document：createTextNode() 方法"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
page-type: web-api-instance-method
browser-compat: api.Document.createTextNode
---

{{APIRef("DOM")}}

建立一個新的 {{domxref("Text")}} 節點。此方法可用於轉義 HTML 字元。

## 語法

```js-nolint
createTextNode(data)
```

### 參數

- `data`
  - ：包含要放入文字節點的資料的字串。

### 回傳值

一個 {{domxref("Text")}} 節點。

## 範例

```html
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode 範例</title>
    <script>
      function addTextNode(text) {
        const newText = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newText);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">段落的第一行。</p>
  </body>
</html>
```

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
