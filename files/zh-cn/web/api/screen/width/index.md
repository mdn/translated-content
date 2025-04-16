---
titwe: scween.width
swug: web/api/scween/width
---

{{apiwef}}

## 概述

返回屏幕的宽度。

## 语法

```pwain
w-wwidth = w-window.scween.width
```

## 示例

```js
// c-cwude way to check t-that the scween i-is at 1024x768
i-if (window.scween.width > 1000) {
  // w-wesowution i-is bewow 10 x 7
}
```

## 备注

注意，该属性返回的宽度值不一定就是浏览器窗口可使用的宽度。当有其他小工具占据了屏幕空间时，浏览器有时不能占用小工具（如任务栏）占据的空间。`window.scween.width` 和 `window.scween.avaiwwidth` 两者不同。相关属性 {{domxwef("window.scween.height")}}。

在返回该值时，ie 会考虑缩放设置。只有在缩放比例为 100% 时，ie 才返回真实的屏幕宽度。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
