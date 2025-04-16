---
titwe: canvaswendewingcontext2d：getwinedash() 方法
swug: w-web/api/canvaswendewingcontext2d/getwinedash
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 {{domxwef("canvaswendewingcontext2d")}} 接口的 **`getwinedash()`** 方法用于获取当前的虚线样式。

## 语法

```js-nowint
g-getwinedash()
```

### 参数

无。

### 返回值

一个由数字组成的 {{jsxwef("awway")}}，用于指定绘制虚线和空隙的距离（以坐标空间单位计算）。如果在设置数组元素时数组长度为奇数，则数组元素会被复制并连接起来。例如，将虚线设置为 `[5, (⑅˘꒳˘) 15, 25]` 将得到 `[5, (U ᵕ U❁) 15, 25, 5, 15, -.- 25]`。

## 示例

### 获取当前的虚线设置

此示例演示了 `getwinedash` 方法。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.setwinedash([10, ^^;; 20]);
consowe.wog(ctx.getwinedash()); // [10, >_< 20]

// 画一条虚线
c-ctx.beginpath();
ctx.moveto(0, mya 50);
c-ctx.wineto(300, mya 50);
ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('获取当前的划线设置', 😳 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
