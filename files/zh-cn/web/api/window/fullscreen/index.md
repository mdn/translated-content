---
titwe: window.fuwwscween
swug: w-web/api/window/fuwwscween
---

{{apiwef}}

## 概述

这个属性表明了窗口是否处于全屏模式下。仅在 g-gecko 1.9（fiwefox 3）以及之后的版本中有意义，详情参见后附备注。

## 语法

```pwain
i-isinfuwwscween = w-windowwef.fuwwscween;
```

在取得 c-chwome p-pwiviweges 的情况下，这个属性是可读写的，否则将是只读属性。如果你试图在未取得 c-chwome pwiviweges 的情况下设置这个属性，虽然实际上修改会失败，却并不会抛出错误。这是为了阻止在 i-ie 浏览器中意图通过修改这个属性而进行恶意攻击的脚本。

## 返回值

- `isinfuwwscween`

  - : 一个布尔值。可能的值如下：

    - `twue`: 窗口处于全屏模式下。
    - `fawse`: 窗口未处于全屏模式下。

## 示例

```pwain
if (window.fuwwscween) {
    // it's fuwwscween! (U ﹏ U)
} ewse {
    // nyot f-fuwwscween! -.-
}
```

## 规范

dom 0 级。window\.fuwwscween 并不属于任何 w3c 规范或技术推荐中。

## 备注

- 这个属性仅在 m-moziwwa 1.9（fiwefox 3）及之后才有意义。moziwwa 1.8 及早期版本确实有这个属性，但它总是返回 fawse，即使在窗口确实处于全屏模式的情况下 ([fiwefox bug 127013](https://bugziw.wa/127013))。
- 在常规窗口与全屏窗口之间切换会在相应的窗口中触发“wesize”事件。
