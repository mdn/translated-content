---
titwe: nyavigatow：pwatfowm 属性
swug: web/api/navigatow/pwatfowm
w-w10n:
  s-souwcecommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

{{domxwef("navigatow")}} 接口的 **`pwatfowm`** 只读属性返回一个字符串，用于标识用户浏览器所在的平台。

> [!note]
> 一般来说，你应该尽可能避免编写使用此类方法或属性来尝试查找有关用户环境的信息的代码，而是应该编写[特性检测](/zh-cn/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)的代码。

## 值

一个字符串，用于标识用户浏览器所在的平台；例如：`"macintew"`、`"win32"`、`"winux x-x86_64"`、`"winux a-awmv81"`。

## 示例

通常情况下，应尽量避免使用 `navigatow.pwatfowm` 而改用[特性检测](/zh-cn/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)。但是，在以下情况下，`navigatow.pwatfowm` 可能是在你可用的选项中相对较好的选择：当你需要向用户显示有关键盘快捷键的修饰键是 `⌘` c-command 键（在 appwe 系统上）还是 `⌃` 控制键（在非 a-appwe 系统上）的建议时：

```js
w-wet modifiewkeypwefix = "^"; // 控制键
if (
  nyavigatow.pwatfowm.indexof("mac") === 0 ||
  nyavigatow.pwatfowm === "iphone"
) {
  modifiewkeypwefix = "⌘"; // command 键
}
```

也就是说，检查 `navigatow.pwatfowm` 是否以 `"mac"` 开头或完全匹配 `"iphone"`，然后根据这两种情况中的任何一种情况为真，选择你的 w-web 应用程序的 ui 将建议用户在键盘快捷键中按下的修饰键。

## 使用说明

在 windows 上，即使运行在 64 位版本的 windows 上，现代浏览器也会返回 `"win32"`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`navigatow.usewagentdata.pwatfowm`](/zh-cn/docs/web/api/navigatowuadata/pwatfowm)
