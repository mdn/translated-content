---
title: onChanged
slug: Mozilla/Add-ons/WebExtensions/API/commands/onChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

在命令的键盘快捷键更改时触发。

监听器将接收到一个包含命令名称、新的激活快捷键和旧的快捷键的对象。

## 语法

```js-nolint
browser.commands.onChanged.addListener(listener)
browser.commands.onChanged.removeListener(listener)
browser.commands.onChanged.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当命令的快捷键更改时调用的函数。该函数接收以下参数：
    - `changeInfo`
      - : `object`。包含命令名称、新的激活快捷键和旧的快捷键的对象。
        - `name`
          - : `string`。命令的名称。这与在 [manifest.json 条目](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中命令给出的名称相匹配。
        - `newShortcut`
          - : `string`。命令的新激活快捷键，若无激活快捷键则为空。
        - `oldShortcut`
          - : `string`。命令的旧激活快捷键，若无激活快捷键则为空。

## 浏览器兼容性

{{Compat}}

## 示例

你可以像这样记录命令快捷键的更改：

```js
function handleChanged(changeInfo) {
  console.log(`${changeInfo.name} 的快捷键已更改`);
  console.log(`从：${changeInfo.oldShortcut}`);
  console.log(`到：${changeInfo.newShortcut}`);
}

browser.commands.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}
