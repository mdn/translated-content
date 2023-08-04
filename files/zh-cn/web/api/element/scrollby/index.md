---
title: Element.scrollBy()
slug: Web/API/Element/scrollBy
---

{{ APIRef() }}

**`scrollBy()`** 方法是使得元素滚动一段特定距离的 {{domxref("Element")}} 接口。

## Syntax

```plain
element.scrollBy(x-coord, y-coord);
element.scrollBy(options)
```

### Parameters

- `x-coord` 是元素要在横轴上滚动的距离。
- `y-coord` 是元素要在纵轴上滚动的距离。

\- or -

- `options` 是一个 {{domxref("ScrollToOptions")}} 字典。

## 例子

```js
// 让元素滚动
element.scrollBy(300, 300);
```

使用 `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
