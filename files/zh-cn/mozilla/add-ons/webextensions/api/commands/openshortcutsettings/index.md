---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
l10n:
  sourceCommit: fa98e7a82bde55434e22f26e72bdcb509e7d169f
---

{{AddonSidebar}}

打开浏览器界面，允许用户配置扩展的键盘快捷键。

在 Firefox 中，此函数会打开[管理扩展快捷键](https://support.mozilla.org/zh-CN/kb/manage-extension-shortcuts-firefox)选项。

Chrome 不支持此功能。在 Chrome 中，可以使用 `tabs.create` 函数打开 `chrome://extensions/shortcuts`。

## 语法

```js-nolint
let openedShortcutSettings = browser.commands.openShortcutSettings();
```

### 参数

无。

## 返回值

一个 {{JSxRef("Promise")}}，如果成功打开扩展快捷键管理界面，则该 Promise 以无参数形式解决；如果请求失败，则该 Promise 以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
