---
title: KeyboardLayoutMap：entries() 方法
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("KeyboardLayoutMap")}} 接口的 **`entries()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含键/值对，顺序与 {{jsxref("Statements/for...in", "for...in")}} 循环提供的顺序相同（不同之处在于 `for-in` 循环也会枚举原型链中的属性）。

该方法与 {{jsxref("Map.prototype.entries()")}} 相似。

## 值

一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象。

## 示例

以下示例迭代英文 QWERTY 键盘上每个位置或布局特定的字符串及其关联的键盘代码。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const [code, key] of keyboardLayoutMap.entries()) {
    console.log(`键盘代码 ${code} 代表键 ${key}`);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.entries()")}}
