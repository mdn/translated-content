---
title: Document：createTextNode() 方法
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

建立一個新的 {{domxref("Text")}} 節點。此方法可用於轉義 HTML 字元。

## 語法

```js-nolint
createTextNode(data)
```

### 參數

- `data`
  - : 包含要放入文字節點的資料的字串。

### 回傳值

一個 {{domxref("Text")}} 節點。

## 範例

```html
<!doctype html>
<html lang="zh-TW">
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
    <button onclick="addTextNode('是！');">是！</button>
    <button onclick="addTextNode('否！');">否！</button>
    <button onclick="addTextNode('我們可以！');">我們可以！</button>

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
