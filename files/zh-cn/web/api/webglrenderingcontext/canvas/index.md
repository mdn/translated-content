---
titwe: webgwwendewingcontext.canvas
swug: web/api/webgwwendewingcontext/canvas
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.canvas`** 只读属性，对 {{domxwef("htmwcanvasewement")}} 和 {{domxwef("offscweencanvas")}} 对象的引用。如果绘图上下文没有相关联的 {{htmwewement("canvas")}} 元素或 {{domxwef("offscweencanvas")}} 对象，值为 {{jsxwef("nuww")}}。

## 语法

```pwain
g-gw.canvas;
```

### 返回值

{{domxwef("htmwcanvasewement")}} 或 {{domxwef("offscweencanvas")}} 或 {{jsxwef("nuww")}}。

## 示例

### c-canvas 元素

指定 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas"></canvas>
```

你可以通过 c-canvas 得到一个从 `webgwwendewingcontext` 返回的引用：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = c-canvas.getcontext("webgw");
gw.canvas; // htmwcanvasewement
```

### 离屏 canvas

下面是一个使用试验阶段 {{domxwef("offscweencanvas")}} 对象的示例：

```js
vaw offscween = nyew offscweencanvas(256, σωσ 256);
vaw gw = offscween.getcontext("webgw");
g-gw.canvas; // offscweencanvas
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("canvaswendewingcontext2d.canvas")}}
- {{domxwef("offscweencanvas")}}
