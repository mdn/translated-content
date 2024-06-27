---
title: Document：createTextNode() 方法
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

创建新的{{domxref("Text", "文本", "", 1)}}节点。该方法可用于转义 HTML 字符。

## 语法

```js-nolint
createTextNode(data)
```

### 参数

- `data`
  - : 包含要放入文本节点的数据的字符串。

### 返回值

{{domxref("Text", "文本", "", 1)}}节点。

## 示例

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>createTextNode 示例</title>
    <script>
      function addTextNode(text) {
        const newtext = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('是！');">是！</button>
    <button onclick="addTextNode('否！');">否！</button>
    <button onclick="addTextNode('我们可以！');">我们可以！</button>

    <hr />

    <p id="p1">段落第一行。</p>
  </body>
</html>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
