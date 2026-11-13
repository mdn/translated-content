---
title: 键盘 API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

键盘 API（Keyboard API）提供了使用连接到运行浏览器的设备的物理键盘的方法。

它提供了多种功能。*键盘映射*提供了一个接口，用于检索键盘上特定物理键生成的字符串，以便向用户正确标识该键。*键盘锁定*使网页能够捕获通常由用户代理或底层操作系统保留的键。Keyboard API 的预期用途是提供全屏沉浸式体验的 Web 应用程序，例如游戏或远程访问应用程序。

## 概念和用法

### 键盘映射

在物理键盘上，`code` 属性包含所按下按键的物理位置，`key` 属性包含按下键盘上该物理位置的按键所生成的字符串。`key` 值考虑了键盘的区域设置（例如“en-US”）、布局（例如“QWERTY”）和修饰键状态（<kbd>Shift</kbd>、<kbd>Control</kbd> 等）。过去没有办法检索这些信息。

键盘映射 API 提供了一种通过 {{domxref('Keyboard')}} 接口和 {{domxref('KeyboardLayoutMap')}} 接口检索特定按键所生成的字符串的方法。可以通过 {{domxref('navigator.keyboard')}} 属性访问 {{domxref('Keyboard')}} 接口。{{domxref('Keyboard')}} 接口提供 {{domxref('Keyboard.getLayoutMap')}} 方法，该方法返回一个 promise，其兑现一个 {{domxref('KeyboardLayoutMap')}} 对象，该对象包含用于将代码转换为键的成员。有效代码值列表可在 [UI 事件 KeyboardEvent 代码值](https://w3c.github.io/uievents-code/)规范的[写入系统键](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system)部分中找到。

以下示例演示如何获取与英语 QWERTY 键盘上标记为 <kbd>W</kbd> 的键相关联的位置特定或布局特定字符串。

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

丰富的交互式网页、游戏和远程流媒体体验通常需要在全屏模式下访问特殊键和键盘快捷键。此类键/键组合的示例包括 <kbd>Escape</kbd>、<kbd>Alt+Tab</kbd> 和 <kbd>Ctrl+N</kbd>。这些键和键组合通常由用户代理或底层操作系统捕获，如下例所示。

要捕获 <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd> 和 <kbd>D</kbd> 键，请使用包含每个键的键代码属性值的列表调用 `lock()`：

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

无论按键时使用哪种修饰符，此操作都会捕获这些键。假设采用标准的美国 QWERTY 布局，注册 `KeyW` 可确保 <kbd>W</kbd>、<kbd>Shift+W</kbd>、<kbd>Control+W</kbd>、<kbd>Control+Shift+W</kbd> 以及所有其他带有 <kbd>W</kbd> 的键修饰符组合都发送到应用。这同样适用于 `KeyA`、`KeyS` 和 `KeyD`。

### 写入系统键

传递给 {{domxref('Keyboard.lock')}} 的代码和 {{domxref('KeyboardLayoutMap')}} 接口的各种方法称为“写入系统键”。

“写入系统键”在 [UI 事件 KeyboardEvent 代码值](https://w3c.github.io/uievents-code/)规范的[写入系统键](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system)部分中定义，因为物理键会根据当前语言环境和键盘布局改变含义。这些键如下所示。所有标准键盘上都有蓝色键，而绿色键仅在某些键盘上可用。

![按照 UI 事件 KeyboardEvent 代码值规范的定义写入系统键。](writing-system-keys.png)

## 接口

- {{domxref('Keyboard')}} {{experimental_inline}}
  - : 提供检索键盘布局图和从物理键盘切换捕获按键的功能。
- {{domxref('KeyboardLayoutMap')}} {{experimental_inline}}
  - : 一个类 map 的对象，具有检索与特定物理键关联的字符串的功能。

### 其他接口的扩展

- {{domxref('navigator.keyboard')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 返回一个 {{domxref('Keyboard')}} 对象，该对象提供对检索键盘布局图和从物理键盘切换按键捕获的功能的访问。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
