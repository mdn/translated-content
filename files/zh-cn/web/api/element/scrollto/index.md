---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
---

{{ APIRef }}

{{domxref("Element")}} 的 **`scrollTo()`** 方法可以使界面滚动到给定元素的指定坐标位置。

## 语法

```js-nolint
scrollTo(x-coord, y-coord)
scrollTo(options)
```

### 参数

- `x-coord` 是你想要显示在左上角的元素沿水平轴的像素。
- `y-coord` 是你想要显示在左上角的元素沿垂直轴的像素。

\- 或者 -

- `options`
  - : 包含以下参数的字典：
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数。
    - `behavior`
      - : 指定滚动是否应平稳地动画显示（`smooth`）、在单个跳跃中瞬间完成（`instant`），或由浏览器自行决定（`auto`，默认）。

### 返回值

无 ({{jsxref("undefined")}})。

## 例子

```js
element.scrollTo(0, 1000);
```

使用 `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
