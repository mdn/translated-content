---
title: Document：anchors 属性
slug: Web/API/Document/anchors
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}} {{Deprecated_Header}}

{{domxref("Document")}} 接口的 **`anchors`** 只读属性返回文档中所有锚点的列表。

## 值

{{domxref("HTMLCollection")}}。

## 示例

```js
if (document.anchors.length >= 5) {
  dump("发现了许多锚点");
}
```

以下是一个示例，它可以自动将页面上的每个锚点填充到目录中：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>测试</title>
    <script>
      function init() {
        const toc = document.getElementById("toc");
        for (const anchor of document.anchors) {
          const li = document.createElement("li");
          const newAnchor = document.createElement("a");
          newAnchor.href = "#" + anchor.name;
          newAnchor.textContent = anchor.text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>标题</h1>
    <h2><a name="contents">内容</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">植物</a></h2>
    <ol>
      <li>苹果</li>
      <li>橙子</li>
      <li>梨</li>
    </ol>

    <h2><a name="veggies">蔬菜</a></h2>
    <ol>
      <li>胡萝卜</li>
      <li>西芹</li>
      <li>节奏</li>
    </ol>
  </body>
</html>
```

[在 JSFiddle 中查看](https://jsfiddle.net/S4yNp)

## 备注

出于向后兼容性的原因，返回的锚点集合只包含使用 `name` 属性创建的锚点，而不包含使用 `id` 属性创建的锚点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
