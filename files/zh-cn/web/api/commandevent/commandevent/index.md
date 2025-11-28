---
title: CommandEvent：CommandEvent() 构造函数
slug: Web/API/CommandEvent/CommandEvent
l10n:
  sourceCommit: 66ca26b10d8a8d7c8c287728cd60108b65a1f331
---

{{APIRef("Invoker Commands API")}}

**`CommandEvent()`** 构造函数用于创建一个新的 {{domxref("CommandEvent")}} 对象。

## 语法

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### 参数

- `type`
  - : 表示事件名称的字符串。区分大小写，浏览器会将其设置为 `command`。
- `options` {{optional_inline}}
  - : 一个对象，_除 {{domxref("Event/Event", "Event()")}} 中定义的属性外_，还可以包含下列属性：
    - `source` {{optional_inline}}
      - : 一个 {{domxref("HTMLButtonElement")}}，表示触发该事件的按钮。虽然可以使用任意元素作为来源，但建议仅使用按钮以避免意外行为。
    - `command` {{optional_inline}}
      - : 一个字符串，表示受控元素应执行的命令。手动实例化 `CommandEvent` 时可以使用任意字符串，但建议使用内置名称或以两个连字符（`--`）为前缀，以确保向前兼容。

### 返回值

新的 {{domxref("CommandEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Invoker Commands API", "调用者命令 API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}
