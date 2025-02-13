---
title: KeyboardLayoutMap：keys() 方法
slug: Web/API/KeyboardLayoutMap/keys
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("KeyboardLayoutMap")}} 接口的 **`keys()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含 `KeyboardLayoutMap` 对象中每个索引的键。

该方法与 {{jsxref("Map.prototype.keys()")}} 相似。

## 语法

```js-nolint
keys()
```

### 返回值

一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象。

## 示例

以下示例迭代英文 QWERTY 键盘上的每个键盘代码。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const code of keyboardLayoutMap.keys()) {
    console.log(`${code} 键盘代码`);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.keys()")}}
