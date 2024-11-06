---
title: NonDocumentTypeChildNode.previousElementSibling
slug: Web/API/Element/previousElementSibling
---

{{ ApiRef() }}

### 概述

**`previousElementSibling`** 返回当前元素在其父元素的子元素节点中的前一个元素节点，如果该元素已经是第一个元素节点，则返回 `null`, 该属性是只读的。

### 语法

```plain
var prevNode = elementNodeReference.previousElementSibling;
```

### 例子

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script type="text/javascript">
  var el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

上面的例子会输出以下内容：

```plain
Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

### 浏览器兼容性

{{Compat}}
