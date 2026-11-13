---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

打开浏览操作的弹出窗口。

在稳定版本的 Firefox 中，你只能在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理器内调用此函数。有关详细信息，请参见[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nolint
browser.browserAction.openPopup(
  options // 可选对象
)
```

### 参数

- `details` {{optional_inline}}
  - : 一个包含以下属性的对象：
    - `windowId` {{optional_inline}}
      - : `integer`。要为其打开弹出窗口的窗口。默认为当前窗口。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，兑现时不带任何参数。

## 浏览器兼容性

{{Compat}}

## 示例

当用户选择上下文菜单项时，打开弹出窗口：

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}
