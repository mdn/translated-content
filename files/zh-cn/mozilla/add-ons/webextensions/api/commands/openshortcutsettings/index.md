---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

打开允许用户配置扩展的键盘快捷键的浏览器界面。

在 Firefox 中，此函数会打开[管理扩展快捷键](https://support.mozilla.org/zh-CN/kb/manage-extension-shortcuts-firefox)选项。

Chrome 不支持此功能。在 Chrome 中，你可以使用 `tabs.create` 函数打开 `chrome://extensions/shortcuts`。

## 语法

```js-nolint
let openedShortcutSettings = browser.commands.openShortcutSettings();
```

### 参数

无。

## 返回值

一个 {{JSxRef("Promise")}}，如果成功打开扩展快捷键管理界面，则该 promise 将不带参数地兑现；如果请求失败，则该 promise 以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
