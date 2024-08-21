---
title: Range：toString() 方法
slug: Web/API/Range/toString
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.toString()`** 是返回 {{domxref("Range")}} 文本的{{Glossary("stringifier","字符串化器")}}。

注意 {{domxref("Range")}} 的内容会隐式调用 `toString()`，因此通过警告对话框比较范围和文本是无效的。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

字符串。

## 示例

### HTML

```html
<p>此示例记录了强调<em>字</em>之间的<em>所有</em>内容。请看下面的输出结果。</p>
<p id="log"></p>
```

### JavaScript

```js
const range = document.createRange();

range.setStartBefore(document.getElementsByTagName("em").item(0), 0);
range.setEndAfter(document.getElementsByTagName("em").item(1), 0);
document.getElementById("log").textContent = range.toString();
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
