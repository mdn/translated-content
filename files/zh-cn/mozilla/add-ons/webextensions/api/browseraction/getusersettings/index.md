---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
l10n:
  sourceCommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

{{AddonSidebar}}

获取用户为浏览器操作指定的设置。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### 参数

此函数不接受任何参数。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含了用户为浏览器操作指定的设置的对象，具有以下属性：

- `userSettings`

  - : 包含用户为浏览器操作指定的设置的对象，具有以下属性：

    - `isOnToolbar` {{optional_inline}}
      - : `boolean` 值。用户是否将操作的图标固定到浏览器 UI。这一设置不表示图标是否可见。图标的可见性取决于浏览器窗口的大小和浏览器 UI 的布局。

## 示例

此代码记录一条消息，指示浏览器操作是否被固定：

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("浏览器操作已固定到工具栏。");
  } else {
    console.log("浏览器操作未固定到工具栏。");
  }
}

let gettingUserSettings = browser.browserAction.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
