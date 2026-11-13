---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

{{domxref("Keyboard API", "", "", "nocode")}} 的 **`KeyboardLayoutMap`** 接口是一个只读对象，具有检索与特定物理按键关联的字符串的功能。

`KeyboardLayoutMap` 实例是一个只读的[类 `Map` 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#类_map_浏览器_api)，其中每个按键都是一个字符串，用于标识键盘上唯一的物理按键（“按键代码”），相应的值是关联的按键属性值（可能受键盘布局等影响）。

在 [UI 事件 KeyboardEvent 代码值](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)规范中可以找到有效按键的列表。

## 实例属性

- {{domxref('KeyboardLayoutMap.size')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 返回 `KeyboardLayoutMap` 对象中的元素数量。

## 实例方法

- `KeyboardLayoutMap[Symbol.iterator]()` {{experimental_inline}}
  - : 返回一个包含键/值对的新 [Iterator](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 对象。
- {{domxref('KeyboardLayoutMap.entries()')}} {{experimental_inline}}
  - : 返回一个包含键/值对的新 [Iterator](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 对象。
- {{domxref('KeyboardLayoutMap.forEach()')}} {{experimental_inline}}
  - : 为 `KeyboardLayoutMap` 的每个元素执行一次提供的函数。
- {{domxref('KeyboardLayoutMap.get()')}} {{experimental_inline}}
  - : 从 `KeyboardLayoutMap` 对象返回具有给定键的元素。
- {{domxref('KeyboardLayoutMap.has()')}} {{experimental_inline}}
  - : 返回一个布尔值，指示 `KeyboardLayoutMap` 对象是否具有带指定键的元素。
- {{domxref('KeyboardLayoutMap.keys()')}} {{experimental_inline}}
  - : 返回一个新的 [Iterator](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 对象，该对象包含 `KeyboardLayoutMap` 对象中每个索引的键。
- {{domxref('KeyboardLayoutMap.values()')}} {{experimental_inline}}
  - : 返回一个新的 [Iterator](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 对象，该对象包含 `KeyboardLayoutMap` 对象中每个索引的值。

## 示例

以下示例说明如何获取与英语 QWERTY 键盘上“W”键对应的键盘代码关联的位置或布局特定字符串。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`按 ${upKey} 向上移动。`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
