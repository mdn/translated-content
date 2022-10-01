---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
---

{{ APIRef }}

{{domxref("Element")}} 的 **`scrollTo()`** 方法可以使界面滚动到给定元素的指定坐标位置。

## 语法

```plain
element.scrollTo(x-coord, y-coord)
element.scrollTo(options)
```

### 参数

- `x-coord` 是期望滚动到位置水平轴上距元素左上角的像素。
- `y-coord` 是期望滚动到位置竖直轴上距元素左上角的像素。

\- or -

- `options` 是一个{{domxref("ScrollToOptions")}}对象。

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

## 参考

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
