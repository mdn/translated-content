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
  - : 你想要显示在左上角的元素沿水平轴的像素。
- `y-coord`
  - : 你想要显示在左上角的元素沿垂直轴的像素。

\- 或者 -

- `options`
  - : 包含以下参数的对象：
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数。
    - `behavior`
      - : `smooth` 表示平滑滚动并产生过渡效果，`auto` 或缺省值会直接跳转到目标位置，没有过渡效果。

### 返回值

无 ({{jsxref("undefined")}})。

## 示例

```js
// 将元素沿垂直方向向下滚动 1000 个像素
element.scroll(0, 1000);
```

使用 `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
