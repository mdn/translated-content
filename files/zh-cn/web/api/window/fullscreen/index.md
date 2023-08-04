---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
---

{{APIRef}}

## 概述

这个属性表明了窗口是否处于全屏模式下。仅在 Gecko 1.9（Firefox 3）以及之后的版本中有意义，详情参见后附备注。

## 语法

```plain
isInFullScreen = windowRef.fullScreen;
```

在取得 chrome privileges 的情况下，这个属性是可读写的，否则将是只读属性。如果你试图在未取得 chrome privileges 的情况下设置这个属性，虽然实际上修改会失败，却并不会抛出错误。这是为了阻止在 IE 浏览器中意图通过修改这个属性而进行恶意攻击的脚本。

## 返回值

- `isInFullScreen`

  - : 一个布尔值。可能的值如下：

    - `true`: 窗口处于全屏模式下。
    - `false`: 窗口未处于全屏模式下。

## 示例

```plain
if (window.fullScreen) {
    // it's fullscreen!
} else {
    // not fullscreen!
}
```

## 规范

DOM 0 级。window\.fullScreen 并不属于任何 W3C 规范或技术推荐中。

## 备注

- 这个属性仅在 Mozilla 1.9（Firefox 3）及之后才有意义。Mozilla 1.8 及早期版本确实有这个属性，但它总是返回 false，即使在窗口确实处于全屏模式的情况下 ([Firefox bug 127013](https://bugzil.la/127013))。
- 在常规窗口与全屏窗口之间切换会在相应的窗口中触发“resize”事件。
