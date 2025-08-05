---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

移除先前调用 {{WebExtAPIRef("find.highlightResults()")}} 或浏览器原生 UI 执行所产生的搜索高亮。

## 语法

```js-nolint
browser.find.removeHighlighting()
```

### 参数

无。

## 返回值

无。

## 示例

```js
browser.find.removeHighlighting();
```

## 浏览器兼容性

{{Compat}}
