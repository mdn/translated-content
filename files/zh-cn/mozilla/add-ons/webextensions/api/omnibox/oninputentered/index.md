---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

当用户选中扩展添加到地址栏下拉菜单的任一推荐时触发。

使用这个事件来处理用户的选择（通常是打开相应的页面）。事件监听器会传递：

- 用户的选择
- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}：据此决定是在当前标签页中打开新页面，在新的前台标签页中打开，还是在新的后台标签页中打开。

## 语法

```js-nolint
browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

该监听器函数需要传递两个参数：字符串 `text` 以及 {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}。

### 参数

- `text`
  - : `String`。这是用户选择的 {{WebExtAPIRef("omnibox.SuggestResult")}} 对象的 `content` 属性的值。
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}。{{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} 枚举，指示扩展应该在当前标签页中打开页面，还是在新的前台标签页中打开，还是在新的后台标签页中打开。

## 浏览器兼容性

{{Compat}}

## 示例

本示例将用户输入的内容解释为 CSS 属性名称，并为每个与输入内容匹配的 CSS 属性在下拉列表中填充一个 {{WebExtAPIRef("omnibox.SuggestResult")}} 对象。`SuggestResult` 的 `description` 属性将为该属性的全名，而 `content` 将是该属性的 MDN 页面。

本示例还会监听 `omnibox.onInputEntered` 并根据 {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} 参数打开与选择相对应的 MDN 页面。

```js
browser.omnibox.setDefaultSuggestion({
  description: "输入一个 CSS 属性名",
});

/*
包含一些 CSS 属性的非常短的列表
*/
const props = [
  "animation",
  "background",
  "border",
  "box-shadow",
  "color",
  "display",
  "flex",
  "flex",
  "float",
  "font",
  "grid",
  "margin",
  "opacity",
  "overflow",
  "padding",
  "position",
  "transform",
  "transition",
];

const baseURL = "https://developer.mozilla.org/zh-CN/docs/Web/CSS/";

/*
返回一个 SuggestResult 对象数组，每个对象代表一个与用户输入匹配的 CSS 属性。
*/
function getMatchingProperties(input) {
  const result = [];
  for (const prop of props) {
    if (prop.startsWith(input)) {
      console.log(prop);
      const suggestion = {
        content: `${baseURL}${prop}`,
        description: prop,
      };
      result.push(suggestion);
    } else if (result.length !== 0) {
      return result;
    }
  }
  return result;
}

browser.omnibox.onInputChanged.addListener((input, suggest) => {
  suggest(getMatchingProperties(input));
});

browser.omnibox.onInputEntered.addListener((url, disposition) => {
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({ url });
      break;
    case "newForegroundTab":
      browser.tabs.create({ url });
      break;
    case "newBackgroundTab":
      browser.tabs.create({ url, active: false });
      break;
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
