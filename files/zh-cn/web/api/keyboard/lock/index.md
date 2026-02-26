---
title: Keyboard：lock() 方法
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("Keyboard")}} 接口的 **`lock()`** 方法返回一个 {{jsxref('Promise')}}，该方法在启用对物理键盘上任何或所有按键的按键捕获后兑现。此方法只能捕获底层操作系统授予访问权限的按键。

如果多次调用 `lock()`，则只有最近一次调用中指定的按键代码才会被锁定。之前调用 `lock()` 锁定的任何按键都会被解锁。

## 语法

```js-nolint
lock()
lock(keyCodes)
```

### 参数

- `keyCodes` {{optional_inline}}
  - : 一个或多个要锁定的按键代码的 {{jsxref('Array')}}。如果未提供按键代码，则所有按键都将被锁定。有效代码值列表可在 [UI 事件 KeyboardEvent 代码值](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system)规范中找到。

### 返回值

一个 {{jsxref('Promise')}}，当锁定成功时兑现 {{jsxref('undefined')}}。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 如果在当前调用完成之前对 `lock()` 进行了新的调用，则抛出此异常。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 如果 `keyCodes` 中的任一键不是有效的[键代码属性值](https://www.w3.org/TR/uievents-code/#key-code-attribute-value)，则抛出此异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果未在活跃的顶级浏览上下文中调用 `lock()`，则抛出此异常。

## 安全性

需要[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)。用户必须与页面或 UI 元素进行交互才能使用此特性。

## 示例

### 捕获所有按键

以下示例捕获所有按键。

```js
navigator.keyboard.lock();
```

### 捕获指定的按键

以下示例捕获“W”、“A”、“S”和“D”键。无论按键时使用了哪些修饰键，它都会捕获这些键。假设采用标准美国 QWERTY 布局，注册 `"KeyW"` 可确保“W”、“Shift+“W”、Control+“W”、Control+Shift+“W”以及所有其他带有“W”的键修饰键组合都发送到应用程序。这同样适用于 `"KeyA"`、`"KeyS"`和 `"KeyD"`。

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
