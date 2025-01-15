---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

获取你已使用 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)注册的所有扩展命令。

该命令会返回一个 {{WebExtAPIRef('commands.Command')}} 对象的数组。或者，如果你使用基于 promise 版本的 API——`browser.commands.getAll()`，该命令将被传递到 [`Promise.then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 的 `onFulfilled` 参数中。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getCommands = browser.commands.getAll();
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含 {{WebExtAPIRef('commands.Command')}} 对象的数组，每个对象对应扩展注册的一个命令。如果没有注册命令，数组将为空。

## 示例

```js
function logCommands(commands) {
  commands.forEach((command) => {
    console.log(command);
  });
}

let getCommands = browser.commands.getAll();
getCommands.then(logCommands);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.commands`](https://developer.chrome.google.cn/docs/extensions/reference/api/commands) API。

## 浏览器兼容性

{{Compat}}
