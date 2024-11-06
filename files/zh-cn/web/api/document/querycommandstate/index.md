---
title: Document.queryCommandState()
slug: Web/API/Document/queryCommandState
---

{{ApiRef("DOM")}}{{deprecated_header}}

## 语法

```js
Object.queryCommandState(String command)
```

## 描述

返回 指定命令 在对象内的状态码（1 表示指定命令在对象内已执行；0 表示指定命令在对象内未执行，处于可执行状态；-1 表示指定命令在对象内处于不可用状态）

## 规范

此特性不属于任何规范，也不再有望被标准化。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.contentEditable")}}
- {{domxref("document.designMode")}}
- [Rich-Text Editing in Mozilla](/zh-CN/docs/Rich-Text_Editing_in_Mozilla)
- Browser bugs related to `queryCommandState()`: [Scribe's "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
