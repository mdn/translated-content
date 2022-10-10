---
title: Element.scroll()
slug: Web/API/Element/scroll
---

{{APIRef}}

**`scroll()`** 方法是用于在给定的元素中滚动到某个特定坐标的 {{domxref("Element")}} 接口。

## Syntax

```plain
element.scroll(x-coord, y-coord)
element.scroll(options)
```

### Parameters

- `x-coord` 是指在元素左上方区域横轴方向上想要显示的像素。
- `y-coord` 是指在元素左上方区域纵轴方向上想要显示的像素。

\- or -

- `options` 是一个 {{domxref("ScrollToOptions")}} 的字典。

## 例子

```js
// 在元素上方显示 1000 像素
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
