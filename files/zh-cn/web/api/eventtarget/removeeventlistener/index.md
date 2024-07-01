---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM")}}

{{domxref("EventTarget")}} 的 **`removeEventListener()`** 方法可以删除使用 {{domxref("EventTarget.addEventListener()")}} 方法添加的事件。可以使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。参见下文的[匹配要删除的事件监听器](#匹配要删除的事件监听器)。

调用 `removeEventListener()` 时，若传入的参数不能用于确定当前注册过的任何一个[事件监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)，该函数不会起任何作用。

如果一个 {{domxref("EventTarget")}} 上的[事件监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)在另一监听器处理该事件时被移除，那么它将不能被事件触发。不过，它可以被重新绑定。

> **警告：** 如果同一个事件监听器分别为“事件捕获（`capture` 为 `true`）”和“事件冒泡（`capture` 为 `false`）”注册了一次，这两个版本的监听器需要分别移除。移除捕获监听器不会影响非捕获版本的相同监听器，反之亦然。

还有一种移除事件监听器的方法：可以向 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 传入一个 {{domxref("AbortSignal")}}，稍后再调用拥有该事件的控制器上的 {{domxref("AbortController/abort()", "abort()")}} 方法即可。

## 语法

```js
removeEventListener(type, listener);
removeEventListener(type, listener, options);
removeEventListener(type, listener, useCapture);
```

### 参数

- `type`
  - : 一个字符串，表示需要移除的事件类型。
- `listener`
  - : 需要从目标事件移除的[事件监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)函数。
- `options` {{optional_inline}}

  - : 一个指定事件侦听器特征的可选对象。可选项有：

    - `capture`: 一个布尔值，指定需要移除的[事件监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)函数是否为捕获监听器。如果未指定此参数，默认值为 `false`。

- `useCapture` {{ optional_inline }}
  - : 一个布尔值，指定需要移除的[事件监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)函数是否为捕获监听器。如果未指定此参数，默认值为 `false`。

### 返回值

无（{{jsxref("undefined")}}）。

### 匹配要删除的事件监听器

假设你之前通过 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 添加了一个事件监听器，你总会在某些情况下需要将其移除。很明显，你需要提供相同的 `type` 和 `listener` 参数给 `removeEventListener()`，但是 `options` 或者 `useCapture` 参数呢？

当使用 `addEventListener()` 时，如果 `options` 参数不同，那么你可以在相同的 `type` 上多次添加相同的监听，唯一需要 `removeEventListener()` 检测的是 `capture`/`useCapture` 标志。这个标志必须与 `removeEventListener()` 的对应标志匹配，但是其他的值不需要。

举个例子，思考一下下面的 `addEventListener()`：

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

现在思考下下面两个 `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // 失败
element.removeEventListener("mousedown", handleMouseDown, true); // 成功
```

第一个调用失败是因为 `useCapture` 没有匹配。第二个调用成功，是因为 `useCapture` 匹配相同。

现在再思考下这个：

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

这里，我们在 `options` 对象里将 `passive` 设成 `true`，其他 `options` 配置都是默认值 `false`。

现在我们看下下面的 `removeEventListener()`。当配置 `capture` 或 `useCapture` 为 `true` 时，移除事件失败；其他所有都是成功的。这说明只有 `capture` 配置影响 `removeEventListener()`。

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // 失败
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // 成功
element.removeEventListener("mousedown", handleMouseDown, false); // 成功
element.removeEventListener("mousedown", handleMouseDown, true); // 失败
```

值得注意的是，一些浏览器版本在这方面会有些不一致。除非你有特别的理由，使用与调用 `addEventListener()` 时配置的参数去调用 `removeEventListener()` 是明智的。

## 示例

以下例子展示了添加与删除监听事件：

```js
const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventTarget.addEventListener()")}}
