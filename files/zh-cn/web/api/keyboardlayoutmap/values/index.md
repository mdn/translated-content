---
title: KeyboardLayoutMap：values() 方法
slug: Web/API/KeyboardLayoutMap/values
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("KeyboardLayoutMap")}} 接口的 **`values()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含 `KeyboardLayoutMap` 对象中每个索引的值。

该方法与 {{jsxref("Map.prototype.values()")}} 相似。

## 值

一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象。

## 示例

以下示例迭代英文 QWERTY 键盘上每个位置或布局特定的字符串。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const key of keyboardLayoutMap.values()) {
    console.log(`${key} 键`);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.values()")}}
