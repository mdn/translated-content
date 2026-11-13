---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

更改给定命令的描述或快捷键。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.commands.update(
  details // 对象
);
```

### 参数

- `details`
  - : `object`。包含以下属性的对象：
    - `name`
      - : `string`。要更新的命令的名称。这必须与现有命令的名称（例如 {{WebExtAPIRef("commands.Command")}} 对象的 `name` 属性所给出的）匹配。
    - `description` {{optional_inline}}
      - : `string`。要为命令设置的新描述。
    - `shortcut` {{optional_inline}}
      - : `string`。要为命令设置的新快捷键。可以是：
        - 一个空字符串，表示清除快捷键。
        - 一个与 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)格式匹配的字符串，以设置新的快捷键。如果字符串不符合此格式，函数将抛出错误。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当快捷键更新时其会兑现。如果找不到命令，promise 将被拒绝并出现错误。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击“update”时，使用给定的快捷键值更新名为“my-command”的命令：

```js
const commandName = "my-command";

function updateShortcut() {
  browser.commands.update({
    name: commandName,
    shortcut: document.querySelector("#shortcut").value,
  });
}

document.querySelector("#update").addEventListener("click", updateShortcut);
```

{{WebExtExamples}}
