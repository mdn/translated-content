---
title: KeyboardLayoutMap：get() 方法
slug: Web/API/KeyboardLayoutMap/get
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

{{domxref('KeyboardLayoutMap')}} 接口的 **`get()`** 方法返回具有给定键盘代码的元素。

在 [UI 事件 KeyboardEvent 代码值](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)规范中可以找到有效键盘代码的列表。

该方法与 {{jsxref("Map.prototype.get()")}} 相似。

## 语法

```js-nolint
get(key)
```

### 参数

- `key`
  - : 从映射返回的项目的键盘代码。

### 返回值

指定键盘代码的值。

## 示例

下面的示例说明如何获取与英语 QWERTY 键盘上“W”键对应的键盘代码关联的位置或布局特定字符串。

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

## 参见

- {{jsxref("Map.prototype.get()")}}
