---
title: KeyboardLayoutMap：entries() 方法
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("KeyboardLayoutMap")}} 接口的 **`entries()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含键/值对，顺序与 {{jsxref("Statements/for...in", "for...in")}} 循环提供的顺序相同（不同之处在于 `for-in` 循环也会枚举原型链中的属性）。

该方法与 {{jsxref("Map.prototype.entries()")}} 相似。

## 语法

```js-nolint
entries()
```

### 返回值

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
