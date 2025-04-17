---
title: Element：requestPointerLock() 方法
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Pointer Lock API")}}

{{domxref("Element")}} 接口的 **`requestPointerLock()`** 方法允许你异步请求在给定元素上锁定指针。

要跟踪请求的成功或失败，必须在 {{domxref("Document")}} 级别监听 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 事件和 {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} 事件。

> [!NOTE]
> 在当前规范中，`requestPointerLock()` 仅通过触发 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 事件或 {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} 事件来传达请求的成功或失败。 [对规范的拟议更新](https://github.com/w3c/pointerlock/pull/49)更新了 `requestPointerLock()`，以返回 {{jsxref("Promise")}} 来传达成功或失败。此页面记录了返回 {{jsxref("Promise")}} 的版本。但请注意，此版本尚未成为标准，并且并非所有浏览器都实现此版本。有关更多信息，请参阅[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### 参数

- `options` {{optional_inline}}
  - : 选项对象，可以包含以下属性：
    - `unadjustedMovement` {{optional_inline}}
      - : 禁用操作系统级别的鼠标加速调整，而是访问原始鼠标输入。默认值为 `false`；将其设置为 `true` 将禁用鼠标加速。

### 返回值

兑现 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

## 安全

调用 `requestPointerLock()` 时需要{{Glossary("Transient activation", "瞬态激活")}}。用户必须与页面或 UI 元素进行交互才能使此特性正常工作。此外，目标元素的关联文档必须处于活动状态。

如果在通过默认解锁手势释放指针锁后立即调用 `requestPointerLock()`（而不是通过 `exitPointerLock()` 调用），即使有{{Glossary("Transient activation", "瞬态激活")}}，调用也会失败。

如果使用 {{domxref("Element.requestFullscreen()", "requestFullscreen()")}} 调用 `requestPointerLock()`，则必须先调用 `requestPointerLock()`，因为 {{domxref("Element.requestFullscreen()", "requestFullscreen()")}} 将消耗{{Glossary("Transient activation", "瞬态激活")}}的状态。

在 {{htmlelement("iframe")}} 元素中调用 `requestPointerLock()` 时，必须添加 `allow-pointer-lock` [沙盒令牌](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#sandbox)。此外，其他 {{htmlelement("iframe")}} 元素中的其他元素不得处于指针锁定模式。

## 示例

指针锁定通常用于在线游戏中，当你希望鼠标移动专注于控制游戏时，不会因鼠标指针四处移动、超出游戏区域或到达窗口边缘而分散注意力。

要启用指针锁定，你需要让用户以某种方式与 UI 进行交互，例如按下按钮或游戏画布本身。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

操作系统默认启用鼠标加速，这在你有时想要缓慢精确的移动（例如，你可能会使用图形包）但又想以更快的鼠标移动移动很远的距离（例如，滚动和选择多个文件）时非常有用。然而，对于某些第一人称视角游戏，原始鼠标输入数据更适合控制相机旋转——相同距离的移动（快速或慢速）都会导致相同的旋转。专业游戏玩家表示，这会带来更好的游戏体验和更高的准确度。

要禁用操作系统级鼠标加速并访问原始鼠标输入，你可以将 `unadjustedMovement` 设置为 `true`：

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

更多示例代码请参见：

- [指针锁定演示](https://mdn.github.io/dom-examples/pointer-lock/)（[查看源代码](https://github.com/mdn/dom-examples/tree/main/pointer-lock)）
- {{domxref("Pointer Lock API", "指针锁定 API", "", "nocode")}}
- [禁用鼠标加速以提供更好的 FPS 游戏体验](https://web.developers.google.cn/articles/disable-mouse-acceleration)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [指针锁定](/zh-CN/docs/Web/API/Pointer_Lock_API)
