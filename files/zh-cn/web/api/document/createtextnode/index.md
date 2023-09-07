---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

创建一个新的{{domxref("Text", "文本")}}节点。这个方法可以用来转义 HTML 字符。

## 语法

```plain
var text = document.createTextNode(data);
```

- _`text`_ 是一个文本节点。
- _`data`_ 是一个字符串，包含了要放入文本节点的内容。

## 示例

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>createTextNode 示例</title>
  </head>

  <body>
    <button value="YES! ">YES!</button>
    <button value="NO! ">NO!</button>
    <button value="WE CAN! ">WE CAN!</button>

    <hr />

    <p id="p1">段落的第一行。</p>

    <script>
      const p1 = document.getElementById("p1"),
        buttons = document.body.querySelectorAll(":scope > button");
      function addTextNode(text) {
        p1.appendChild(document.createTextNode(text));
      }
      buttons.forEach((button) =>
        button.addEventListener("click", () => addTextNode(button.value)),
      );
    </script>
  </body>
</html>
```

{{EmbedLiveSample('示例')}}

### 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
