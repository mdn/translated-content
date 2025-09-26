---
title: Keyboard：getLayoutMap() 方法
slug: Web/API/Keyboard/getLayoutMap
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("Keyboard")}} 接口的 **`getLayoutMap()`** 方法返回一个 {{jsxref('Promise')}}，其会兑现一个 {{domxref('KeyboardLayoutMap')}} 实例，该实例是一个类 map 的对象，具有检索与特定物理键关联的字符串的功能。

## 语法

```js-nolint
getLayoutMap()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}}，其会兑现一个 {{domxref('KeyboardLayoutMap')}} 实例。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用被[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止，则抛出此异常。

## 示例

下面的示例演示如何获取与英语 QWERTY 键盘上“W”键对应的键关联的位置或布局的特定字符串。

```js
const keyboard = navigator.keyboard;
keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`按下 ${upKey} 以向上移动。`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl")}}
