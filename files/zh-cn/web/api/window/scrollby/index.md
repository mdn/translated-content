---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

**`Window.scrollBy()`** 方法在窗口中按指定的偏移量滚动文档。

## 语法

```js-nolint
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### 参数

- `x-coord` 是你想滚动的水平像素值。
- `y-coord` 是你想滚动的垂直像素值。

\- 或：

- `options`
  - : 包含以下参数的字典
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数。
    - `behavior`
      - : 指定滚动是否应该平滑（`smooth`）、瞬时运动到该位置（`instant`）、或者让浏览器选择（`auto`，默认）。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

向下滚动一页：

```js
window.scrollBy(0, window.innerHeight);
```

向上滚动一页：

```js
window.scrollBy(0, -window.innerHeight);
```

使用 `options`：

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 备注

`window.scrollBy()` 滚动指定的距离，而 {{domxref("window.scroll()")}} 滚动至文档中的绝对位置。参见 {{domxref("window.scrollByLines()")}} 和 {{domxref("window.scrollByPages()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
