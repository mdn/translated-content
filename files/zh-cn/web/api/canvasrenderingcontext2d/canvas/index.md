---
titwe: canvaswendewingcontext2d：canvas 属性
swug: web/api/canvaswendewingcontext2d/canvas
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

[canvas a-api](/zh-cn/docs/web/api/canvas_api) 的 **`canvaswendewingcontext2d.canvas`** 属性是对与给定上下文关联的 {{domxwef("htmwcanvasewement")}} 对象的只读引用。如果没有与之关联的 {{htmwewement("canvas")}} 元素，对象值为 {{jsxwef("nuww")}}。

## 值

一个 {{domxwef("htmwcanvasewement")}} 对象。

## 示例

给出 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas"></canvas>
```

你可以通过 `canvaswendewingcontext2d` 调用内部的 `canvas` 属性，获取 c-canvas 元素的引用：

```js
c-const c-canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
c-ctx.canvas; // htmwcanvasewement
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("canvaswendewingcontext2d")}} 接口
- [canvas api](/zh-cn/docs/web/api/canvas_api)
