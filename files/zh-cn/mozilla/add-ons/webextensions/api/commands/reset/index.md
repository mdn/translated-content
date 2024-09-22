---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

将给定命令的描述和快捷键重置为扩展的 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中指定的值。

这有效地撤销了使用 {{WebExtAPIRef("commands.update()")}} 函数对命令所做的任何更改。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.commands.reset(
  name // 字符串
);
```

### 参数

- `name`
  - : `string`。要重置的命令的名称，给定 {{WebExtAPIRef("commands.Command")}} 对象的 `name` 属性。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当快捷键已重置时其会兑现且无任何参数。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击“reset”按钮时重置名为“my-command”的命令：

```js
const commandName = "my-command";

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector("#reset").addEventListener("click", resetShortcut);
```

{{WebExtExamples}}
