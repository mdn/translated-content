---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
---

{{ ApiRef("DOM") }}

返回带有指定名称和命名空间的元素集合。整个文件结构都会被搜索，包括根节点。

## 语法

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### 参数

- `namespace`
  - : 所要查询的元素的命名空间 URL（参见 {{domxref("Element.namespaceURI", "element.namespaceURI")}}）。
- `name`
  - : 所要查询的元素的名称或特殊值 `*`（代表所有元素，参见 {{domxref("Element.localName", "element.localName")}}）。

    > [!NOTE]
    > 与 {{domxref("document.getElementsByTagName()")}} 不同，`getElementsByTagNameNS()` 的参数是大小写敏感的。

### 返回值

一个动态的 {{DOMxRef("HTMLCollection")}}，其中包含找到的元素（按照元素在树中出现的顺序排列）。

## 示例

在下面的示例中，`getElementsByTagNameNS`方法从一个特定的父元素开始，并从该父元素的 DOM 中自上而下递归式搜索，查找所有与标签名参数匹配的子元素。

注意当调用`getElementsByTagName`方法获取到的节点不是文档节点时，实际上是调用了[element.getElementsByTagNameNS](/zh-CN/docs/Web/API/Element/getElementsByTagNameNS)方法。

需要使用以下示例，只需复制/粘贴以下代码到用.xhtml 后缀名保存的新文件中即可。

```html
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>getElementsByTagNameNS example</title>

    <script type="text/javascript">
      function getAllParaElems() {
        var allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = allParas.length;

        alert("There are " + num + " &lt;p&gt; elements in this document");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div1Paras.length;

        alert("There are " + num + " &lt;p&gt; elements in div1 element");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div2Paras.length;

        alert("There are " + num + " &lt;p&gt; elements in div2 element");
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button
    ><br />

    <button onclick="div1ParaElems();">
      show all p elements in div1 element</button
    ><br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element.getElementsByTagNameNS()")}}
