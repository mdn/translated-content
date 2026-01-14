---
title: Window：moveTo() 方法
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

{{domxref("Window")}} 接口的 **`moveTo()`** 方法将当前窗口移动到指定的坐标。

> [!NOTE]
> 该函数将窗口移动到一个绝对位置。而 {{domxref("window.moveBy()")}} 则相对于窗口的当前位置移动窗口。

## 语法

```js-nolint
moveTo(x, y)
```

### 参数

- `x`
  - : 要移动到的位置的横坐标。
- `y`
  - : 要移动到的位置的纵坐标。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

这个示例将窗口移动到屏幕的左上角。

```js
function origin() {
  window.moveTo(0, 0);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

从 Firefox 7 开始，网站在[以下情况下](https://bugzil.la/565541#c24)将不能再移动浏览器窗口。

1. 不能移动不是由 {{domxref("Window.open()")}} 创建的窗口或标签页。
2. 当一个窗口里有多于一个标签页时，不能移动该窗口或其中的标签页。

> [!NOTE]
> 这个函数可能不会同步地移动窗口。
> 在某些环境中（比如 Wayland，或移动设备）它可能根本不会移动窗口。
> 目前没有办法监听移动事件，详见
> [CSS 工作组问题 #7693](https://github.com/w3c/csswg-drafts/issues/7693)。

## 参见

- {{domxref("Window.moveBy()")}}
