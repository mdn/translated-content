---
title: Comment：Comment() 构造函数
slug: Web/API/Comment/Comment
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ApiRef("DOM")}}

**`Comment()`** 构造函数返回一个新创建的 {{domxref("Comment")}} 对象，其文本内容为可选参数中给出的字符串。

## 语法

```js-nolint
new Comment()
new Comment(aString)
```

### 参数

- `aString` {{optional_inline}}

### 返回值

一个新的包含 `aString`（如果没有给出参数，则为空字符串）的注释（{{domxref("Comment")}}）。

## 示例

```js
let comment = new Comment("测试");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createComment()")}} 是此构造函数的一个过时替代方案。
