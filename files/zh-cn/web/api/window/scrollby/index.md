---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

## 摘要

在窗口中按指定的偏移量滚动文档。

## 语法

```plain
window.scrollBy(x-coord, y-coord);
window.scrollBy(options)
```

### 参数

- `X` 是水平滚动的偏移量，单位：像素。
- `Y` 是垂直滚动的偏移量，单位：像素。

正数坐标会朝页面的右下方滚动，负数坐标会滚向页面的左上方。

- `options` 是一个包含三个属性的对象：

1. `top` 等同于 `y-coord`
2. `left` 等同于 `x-coord`
3. `behavior` _表示滚动行为，支持参数：`smooth` (平滑滚动)，`instant` (瞬间滚动)，默认值 `auto`，效果等同于 `instant`_

## 例子

向下滚动一页：

```plain
window.scrollBy(0, window.innerHeight);
```

向上滚动一页：

```plain
window.scrollBy(0, -window.innerHeight);
```

使用 options：

```plain
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth"
});
```

## 注意

[window.scrollBy](/zh-CN/docs/DOM/Window.scrollBy) 滚动指定的距离，而 [window.scroll](/zh-CN/docs/DOM/Window.scroll) 滚动至文档中的绝对位置。另外还有 [window.scrollByLines](/zh-CN/docs/DOM/Window.scrollByLines), [window.scrollByPages](/zh-CN/docs/DOM/Window.scrollByPages)

## 规范

{{Specifications}}
