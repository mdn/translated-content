---
title: Element.scroll()
slug: Web/API/Element/scroll
---

{{APIRef}}

**`scroll()`** 方法是用于在给定的元素中滚动到某个特定坐标的 {{domxref("Element")}} 接口。

## 语法

```js-nolint
scroll(x-coord, y-coord)
scroll(options)
```

### 参数

- `x-coord`
  - : 您想要显示在左上角的元素沿水平轴的像素。
- `y-coord`
  - : 您想要显示在左上角的元素沿垂直轴的像素。

\- 或者 -

- `options`
  - : 包含以下参数的字典：
    - `top`
      - : 指定沿Y轴滚动窗口或元素的像素数。
    - `left`
      - : 指定沿X轴滚动窗口或元素的像素数。
    - `behavior`
      - : 指定滚动是否应平稳地动画显示（`smooth`）或在单个跳跃中瞬间完成（`auto`，默认值）。

### 返回值

无 ({{jsxref("undefined")}})。

## 例子

```js
// 将元素沿垂直方向向下滚动1000个像素
element.scroll(0, 1000);
```

使用 `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
