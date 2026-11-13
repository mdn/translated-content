---
title: document.createComment
slug: Web/API/Document/createComment
---

{{ ApiRef() }}

### 概述

`createComment()` 方法用来创建并返回一个注释节点。

### 语法

```plain
var commentNode = document.createComment(data)
```

### 参数

- `commentNode` 是一个注释节点。
- `data` 是一个字符串，包含了注释的内容。

### 例子

```plain
var docu = new DOMParser().parseFromString('<xml></xml>',  "application/xml")

var comment = docu.createComment('这是注释内容');

docu.getElementsByTagName('xml')[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// 弹出 <xml><!--这是注释内容--></xml>
```

### 备注

- 如果 data 字符串包含了 "--" ,则会抛出 `NS_ERROR_DOM_INVALID_CHARACTER_ERR`异常，这种情况需要对"--" 字符串进行转义。

### 规范

[createComment](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createComment)
