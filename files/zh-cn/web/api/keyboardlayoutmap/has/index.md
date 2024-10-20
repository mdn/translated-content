---
title: KeyboardLayoutMap：has() 方法
slug: Web/API/KeyboardLayoutMap/has
l10n:
  sourceCommit: bcb654104082a8d12d51aecfad047d7a4a26116f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

{{domxref('KeyboardLayoutMap')}} 接口的 **`has()`** 方法返回一个布尔值，指示该对象是否具有指定键的元素。

在 [UI 事件 KeyboardEvent 代码值](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)规范中可以找到有效键的列表。

该方法与 {{jsxref("Map.prototype.has()")}} 相似。

## 语法

```js-nolint
has(key)
```

### 参数

- `key`
  - : 要在映射中搜索的元素的键。

### 返回值

{{jsxref('Boolean')}} 值，表示是否找到了指定的键。

## 示例

以下示例检查与英语 QWERTY 键盘上“W”键对应的键盘代码关联的位置或布局特定的字符串是否存在。

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.has("KeyW"));
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.has()")}}
