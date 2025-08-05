---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

与你的扩展已经开始交互（在用户在地址栏中输入了扩展的关键词以及一个空格）的情况下，当用户的输入变化时触发。

这是你会向地址栏的下拉菜单中填入推荐的事件。事件监听器会传递：

- 当前的用户输入（不包含关键词以及其后的空格）
- 一个函数，监听器可以使用代表一个推荐内容的 {{WebExtAPIRef("omnibox.SuggestResult")}} 对象的数组调用它。只有前六个推荐会被显示。

## 语法

```js-nolint
browser.omnibox.onInputChanged.addListener(listener)
browser.omnibox.onInputChanged.removeListener(listener)
browser.omnibox.onInputChanged.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

该监听器函数接收两个参数：字符串 `text` 以及 `suggest` 函数。

### 参数

- `text`
  - : `String`。当前的用户输入（不包含关键词以及其后的空格），你可以据此决定要在下拉菜单中显示的推荐内容。
- `suggest`
  - : `Function`。事件监听器可调用的函数，用于为地址栏的下拉列表提供建议。该函数将接收 {{WebExtAPIRef("omnibox.SuggestResult")}} 对象数组，每个对象代表一个推荐内容。只有前六个推荐会被显示。

## 浏览器兼容性

{{Compat}}

## 示例

本示例将用户输入的内容解释为 CSS 属性名称，并为每个与输入内容匹配的 CSS 属性在下拉列表中填充一个 {{WebExtAPIRef("omnibox.SuggestResult")}} 对象。`SuggestResult` 的 `description` 属性将为该属性的全名，而 `content` 将是该属性的 MDN 页面。

本示例还会监听 {{WebExtAPIRef("omnibox.onInputEntered")}} 并根据 {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} 参数打开与选择相对应的 MDN 页面。

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
