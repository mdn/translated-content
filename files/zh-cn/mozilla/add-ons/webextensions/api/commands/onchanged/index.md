---
title: onChanged
slug: Mozilla/Add-ons/WebExtensions/API/commands/onChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

在命令的键盘快捷键更改时触发。

监听器将接收到一个包含命令名称、新的活动快捷键和旧的快捷键的对象。

## 语法

```js-nolint
browser.commands.onChanged.addListener(listener)
browser.commands.onChanged.removeListener(listener)
browser.commands.onChanged.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 添加一个监听器到这个事件。
- `removeListener(listener)`
  - : 停止监听这个事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到这个事件。若在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当命令的快捷键更改时调用的函数。该函数接收以下参数：

    - `changeInfo`

      - : `object`。包含命令名称、新的活动快捷键和旧的快捷键的对象。

        - `name`
          - : `string`。命令的名称。这与在 [manifest.json entry](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) 中给命令的名称相匹配。
        - `newShortcut`
          - : `string`。命令的新活动快捷键，若无活动快捷键则为空。
        - `oldShortcut`
          - : `string`。命令的旧活动快捷键，若无活动快捷键则为空。

## 浏览器兼容性

{{Compat}}

## 示例

你可以像这样记录命令快捷键的更改：

```js
function handleChanged(changeInfo) {
  console.log(`快捷键已更改：${changeInfo.name}`);
  console.log(`从：${changeInfo.oldShortcut}`);
  console.log(`到：${changeInfo.newShortcut}`);
}

browser.commands.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}
