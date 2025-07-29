---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

移除之前调用 {{WebExtAPIRef("find.highlightResults()")}} 或浏览器原生 UI 执行产生的搜索高亮。

## 语法

```js-nolint
browser.find.removeHighlighting()
```

### 参数

无。

## 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

```js
browser.find.removeHighlighting();
```
