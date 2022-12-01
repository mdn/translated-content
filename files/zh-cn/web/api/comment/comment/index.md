---
title: Comment()
slug: Web/API/Comment/Comment
---

{{ApiRef("DOM")}}{{seeCompatTable}}

构造函数 **`Comment()`** 创建一个 {{domxref("Comment")}} 对象并返回，这个对象以可选的 {{domxref("DOMString")}} 参数作为它的文本内容。

## 语法

```
comment1 = new Comment(); // Create an empty comment
comment2 = new Comment("This is a comment");
```

## 示例

```js
var comment = new Comment("Test");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> **备注：** 对于不支持本构造函数的浏览器， {{domxref("Document.createComment()")}} 或许可以使用。

## 相关文档

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
