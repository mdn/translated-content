---
title: document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}}

{{deprecated_header()}}

### 概述

`anchors`属性返回当前文档中的所有锚点元素。

### 语法

```plain
nodeList = document.anchors
```

### 例子

```js
if (document.anchors.length >= 5) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
```

下例自动生成一个目录列表，包含了到每个段落的锚点。

```js
<!DOCTYPE HTML>
<html>
<head>
    <script type="text/javascript" charset="utf-8">
    function init() {
        var toc = document.getElementById("toc");
        var i, li, newAnchor;
        for (i = 0; i < document.anchors.length; i++) {
            li = document.createElement("li");
            newAnchor = document.createElement('a');
            newAnchor.href = "#" + document.anchors[i].name;
            newAnchor.innerHTML = document.anchors[i].text;
            li.appendChild(newAnchor);
            toc.appendChild(li);
        }
    }

    </script>
</head>
<body onload="init()">

<h1>Title</h1>
<a name="contents"><h2>Contents</h2></a>
<ul id="toc"></ul>

<a name="plants"><h2>Plants</h2></a>
<ol>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Pears</li>
</ol>

<a name="veggies"><h2>Veggies</h2></a>
<ol>
    <li>Carrots</li>
    <li>Celery</li>
    <li>Beats</li>
</ol>

</body>
</html>
```

[在 JSFiddle 中查看](https://jsfiddle.net/S4yNp)

### 备注

由于向后兼容的原因，该属性只返回那些拥有 `name` 属性的 `a` 元素，而不是那些拥有 `id` 属性的 `a` 元素。

### 规范

[DOM Level 2 HTML: anchors](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7577272)
