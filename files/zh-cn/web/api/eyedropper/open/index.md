---
title: "EyeDropper: open() 方法"
short-title: open()
slug: Web/API/EyeDropper/open
---

{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

**`EyeDropper.open()`** 方法启动拾色器模式，返回一个 Promise，在用户选择颜色或取消拾色器模式后返回成功（fulfilled）。

## 语法

```js-nolint
open()
open(options)
```

### 参数

- `options` {{optional_inline}}

  - : 可以通过传递一个选项对象来使用 {{domxref("AbortSignal")}} 信号。：

    - `signal`
      - : 一个 {{domxref("AbortSignal")}} 对象。当调用 `AbortSignal` 的 {{domxref("AbortController/abort()", "abort()")}} 方法时，拾色器模式将被中止。

### 返回值

一个 {{jsxref("Promise")}}，最终在用户从屏幕上选择一个像素颜色时返回（resolve）。

该 Promise 返回一个带有以下属性的对象：

- `sRGBHex`
  - : 代表所选颜色的字符串，采用十六进制 sRGB 格式 (`#aabbcc`)。

### 例外情况

在 {{jsxref("Promise")}} 被拒绝（rejected）时，不会抛出异常，而是返回一个错误对象。

- 当用户通过按下 <kbd>Escape</kbd> 键来取消拾色器模式。
- 当通过传递给 `open()` 方法的 {{domxref("AbortController")}} 的方式中止拾色器模式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{DOMxRef("EyeDropper")}} 接口。
