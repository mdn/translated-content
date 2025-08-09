---
title: Navigator：platform 属性
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

{{domxref("Navigator")}} 接口的 **`platform`** 只读属性返回一个字符串，用于标识用户浏览器所在的平台。

> [!NOTE]
> 一般来说，你应该尽可能避免编写使用此类方法或属性来尝试查找有关用户环境的信息的代码，而是应该编写[特性检测](/zh-CN/docs/Learn_web_development/Extensions/Testing/Feature_detection)的代码。

## 值

一个字符串，用于标识用户浏览器所在的平台；例如：`"MacIntel"`、`"Win32"`、`"Linux x86_64"`、`"Linux armv81"`。

## 示例

通常情况下，应尽量避免使用 `navigator.platform` 而改用[特性检测](/zh-CN/docs/Learn_web_development/Extensions/Testing/Feature_detection)。但是，在以下情况下，`navigator.platform` 可能是在你可用的选项中相对较好的选择：当你需要向用户显示有关键盘快捷键的修饰键是 `⌘` command 键（在 Apple 系统上）还是 `⌃` 控制键（在非 Apple 系统上）的建议时：

```js
let modifierKeyPrefix = "^"; // 控制键
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // Command 键
}
```

也就是说，检查 `navigator.platform` 是否以 `"Mac"` 开头或完全匹配 `"iPhone"`，然后根据这两种情况中的任何一种情况为真，选择你的 Web 应用程序的 UI 将建议用户在键盘快捷键中按下的修饰键。

## 使用说明

在 Windows 上，即使运行在 64 位版本的 Windows 上，现代浏览器也会返回 `"Win32"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`navigator.userAgentData.platform`](/zh-CN/docs/Web/API/NavigatorUAData/platform)
