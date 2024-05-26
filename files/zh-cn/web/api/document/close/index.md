---
title: Document：close() 方法
slug: Web/API/Document/close
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.close()`** 方法用于完成对使用 {{domxref("Document.open()")}} 打开的文档的写入。

## 语法

```js-nolint
close()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 打开文档并写入
document.open();

// 在文档中编写内容
document.write("<p>独一无二的内容。</p>");

// 关闭文档
document.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
