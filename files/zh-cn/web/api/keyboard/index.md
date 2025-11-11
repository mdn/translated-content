---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

{{domxref("Keyboard API", "", "", "nocode")}} 的 **`Keyboard`** 接口提供检索键盘布局图和切换从物理键盘捕获按键的功能。

在 [UI 事件 KeyboardEvent 代码值](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)规范中可以找到有效的代码值列表。

{{InheritanceDiagram}}

## 实例属性

_还从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

## 实例方法

_还从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{domxref('Keyboard.getLayoutMap()')}} {{experimental_inline}}
  - : 返回一个 {{jsxref('Promise')}}，兑现 {{domxref('KeyboardLayoutMap')}} 实例，该实例是一个类 map 对象，具有检索与特定物理键关联的字符串的功能。
- {{domxref('Keyboard.lock()')}} {{experimental_inline}}
  - : 返回一个 {{jsxref('Promise')}}，在启用对物理键盘上任意或所有按键的按键捕获后兑现。
- {{domxref('Keyboard.unlock()')}} {{experimental_inline}}
  - : 解锁 `lock()` 方法捕获的所有键并同步返回。

## 示例

### 键盘映射

下面的示例说明如何获取与英语 QWERTY 键盘上“W”键对应的键关联的位置或布局特定字符串。

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`按 ${upKey} 向上移动。`);
  });
} else {
  // 做点别的事。
}
```

### 键盘锁定

以下示例捕获 <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd> 和 <kbd>D</kbd> 键，并使用包含每个键的键代码属性值的列表调用 `lock()`：

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

无论按键时使用了哪些修饰键，此操作都会捕获这些键。假设采用标准的美国 QWERTY 布局，注册 `KeyW` 可确保 <kbd>W</kbd>、<kbd>Shift+W</kbd>、<kbd>Control+W</kbd>、<kbd>Control+Shift+W</kbd> 以及所有其他带有 <kbd>W</kbd> 的修饰键组合都发送到应用。这同样适用于 `KeyA`、`KeyS` 和 `KeyD`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
