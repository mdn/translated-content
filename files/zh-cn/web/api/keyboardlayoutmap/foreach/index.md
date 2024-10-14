---
title: KeyboardLayoutMap：forEach() 方法
slug: Web/API/KeyboardLayoutMap/forEach
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

{{domxref('KeyboardLayoutMap')}} 接口的 **`forEach()`** 方法针对映射的每个元素执行一次提供的函数。

该方法与 {{jsxref("Map.prototype.forEach()")}} 相似。

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callbackFn`

  - : 对每个元素执行的函数，接受三个参数：

    - `currentValue`
      - : 当前正在处理的元素的值。
    - `index` {{optional_inline}}
      - : 当前正在处理的元素的索引。
    - `array` {{optional_inline}}
      - : 正在调用 `forEach()` 的 KeyboardLayoutMap。

- `thisArg` {{Optional_inline}}
  - : 执行 `callback` 时用作 **`this`** 的值（即引用 `Object`）。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下示例迭代英文 QWERTY 键盘上每个位置或布局特定的字符串及其关联的键盘代码。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  keyboardLayoutMap.forEach((key, code) => {
    console.log(`键盘代码 ${code} 表示 ${key} 键`);
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.forEach()")}}
