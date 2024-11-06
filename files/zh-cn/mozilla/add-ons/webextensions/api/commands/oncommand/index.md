---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: cc844647f646395fa602816586640c77017898cf
---

{{AddonSidebar}}

当使用相关的键盘快捷键执行命令时触发。

监听器会接收到命令的名称。这与在其 [manifest.json 条目](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中给出的名称相匹配。

## 语法

```js-nolint
browser.commands.onCommand.addListener(listener)
browser.commands.onCommand.removeListener(listener)
browser.commands.onCommand.hasListener(listener)
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

  - : 用户输入命令的快捷键时调用的函数。该函数接收以下参数：

    - `name`
      - : `string`。命令的名称。这与在其 [manifest.json 条目](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中给出的名称相匹配。
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}。输入命令快捷键时激活的标签页。

## 示例

给出这样的 manifest.json 条目：

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "发送一个“toggle-feature”事件"
  }
}
```

你可以像这样监听这个特定命令：

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("切换功能！");
  }
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.commands`](https://developer.chrome.google.cn/docs/extensions/reference/api/commands) API。
