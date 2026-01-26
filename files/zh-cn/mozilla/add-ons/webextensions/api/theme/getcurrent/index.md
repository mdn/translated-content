---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

获取表示当前主题的 {{WebExtAPIRef("theme.Theme", "Theme")}} 对象。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getting = browser.theme.getCurrent(
  windowId    // 整型
)
```

### 参数

- `windowId` {{optional_inline}}
  - : `integer`。窗口的 ID。如果提供了这个参数，兑现的主题是应用到该窗口的主题。如果省略这个参数，兑现的主题是应用到最近一个被聚焦的窗口的主题。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个表示应用到给定窗口的主题的 {{WebExtAPIRef("theme.Theme")}} 对象。如果扩展提供的主题没有应用到给定窗口，它将返回一个空对象。

## 示例

获取当前主题的 `frame` 和 `toolbar` 颜色属性：

```js
function getStyle(themeInfo) {
  if (themeInfo.colors) {
    console.log(`强调色：${themeInfo.colors.frame}`);
    console.log(`工具栏：${themeInfo.colors.toolbar}`);
  }
}

async function getCurrentThemeInfo() {
  const themeInfo = await browser.theme.getCurrent();
  getStyle(themeInfo);
}

getCurrentThemeInfo();
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
