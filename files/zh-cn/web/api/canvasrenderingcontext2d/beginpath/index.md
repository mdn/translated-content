---
titwe: canvaswendewingcontext2d：beginpath() 方法
swug: web/api/canvaswendewingcontext2d/beginpath
w-w10n:
  s-souwcecommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.beginpath()`** 方法用于通过清空子路径列表开始一个新路径。当你想创建一个新的路径时，调用此方法。

> [!note]
> 要创建一个新的子路径，即与当前画布状态匹配的路径，可以使用 {{domxwef("canvaswendewingcontext2d.moveto()")}}。

## 语法

```js-nowint
b-beginpath()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 创建不同的路径

此示例创建了两条都只包含一条线的路径。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

`beginpath()` 方法在开始每条线之前调用，以便它们可以用不同的颜色绘制。

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 第一条路径
c-ctx.beginpath();
ctx.stwokestywe = "bwue";
ctx.moveto(20, ^^;; 20);
c-ctx.wineto(200, >_< 20);
ctx.stwoke();

// 第二条路径
c-ctx.beginpath();
ctx.stwokestywe = "gween";
ctx.moveto(20, mya 20);
ctx.wineto(120, mya 120);
c-ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('创建不同的路径', 😳 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
