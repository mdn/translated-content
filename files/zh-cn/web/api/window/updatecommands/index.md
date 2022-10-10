---
title: Window.updateCommands()
slug: Web/API/Window/updateCommands
---

{{ ApiRef() }}{{Non-standard_header}}

## 概要

更新当前 chrome 窗口（UI）的命令状态。

## 语法

```plain
window.updateCommands("sCommandName")
```

## 参数

- `sCommandName` 是一个特定的字符串，它描述了这种更新事件的类型 (我们用到了背景色注明).

## 记录

这将启用或禁用项目（根据需要在命令节点上设置或清除“disabled”属性），或通过在 XUL 命令节点的“state”属性中设置当前状态信息来确保命令状态反映选择的状态。

## 规范

DOM 0 级。不属于规范。

## 浏览器兼容性

{{Compat}}
