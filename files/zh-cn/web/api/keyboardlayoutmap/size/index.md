---
title: KeyboardLayoutMap：size 属性
slug: Web/API/KeyboardLayoutMap/size
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("KeyboardLayoutMap")}} 接口的 **`size`** 只读属性返回映射中的元素数量。

该属性与 {{jsxref("Map.prototype.size")}} 相似。

## 值

一个数字。

## 示例

以下示例获取英文 QWERTY 键盘上位置或布局特定字符串及其关联键盘代码的数量。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.size);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.size")}}
