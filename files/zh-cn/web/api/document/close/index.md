---
title: Document.close()
slug: Web/API/Document/close
---

{{APIRef("DOM")}}

**`Document.close()`** 用于结束由 对文档的 {{domxref("Document.write()")}} 写入操作，这种写入操作一般由 {{domxref("Document.open()")}} 打开。

## 语法

```plain
document.close();
```

## 例子

```plain
// 打开一个文档，以便写入数据
document.open();

// 写入文档内容
document.write("<p>文档内容~</p>");

// 关闭文档
document.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
