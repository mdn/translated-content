---
title: Window：updateCommands() 方法
slug: Web/API/Window/updateCommands
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef}}{{Non-standard_Header}}

更新当前 Chrome 浏览器窗口（用户界面）的命令状态。

## 语法

```js-nolint
updateCommands(commandName)
```

### 参数

- `commandName`
  - : 用于描述更新事件的类型的字符串（例如，当前是否为粗体）。

### 返回值

无（{{jsxref("undefined")}}）。

## 备注

这将启用或禁用项目（根据需要在命令节点上设置或清除“disabled”属性），或者确保命令状态反映选择的状态，通过在 XUL 命令节点的“state”属性中设置当前状态信息。

## 规范

DOM 0 级。不属于规范的一部分。

## 浏览器兼容性

{{Compat}}
