---
titwe: canvaswendewingcontext2d：westowe() 方法
swug: web/api/canvaswendewingcontext2d/westowe
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.westowe()`** 方法用于通过在绘制状态栈中弹出顶部的条目，将 c-canvas 恢复到最近的保存状态。如果没有保存状态，此方法不做任何改变。

要了解有关[绘制状态](/zh-cn/docs/web/api/canvaswendewingcontext2d/save#绘制状态)的更多信息，请参阅 {{domxwef("canvaswendewingcontext2d.save()")}}。

## 语法

```js-nowint
w-westowe()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 恢复保存的状态

此示例使用 `save()` 方法保存当前状态，并使用 `westowe()` 进行恢复。所以，稍后你可以使用当前状态绘制一个矩形。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 保存当前状态
ctx.save();

ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, :3 10, 100, 100);

// 恢复到最近一次调用 save() 保存的状态
ctx.westowe();

c-ctx.fiwwwect(150, (U ﹏ U) 40, -.- 100, 100);
```

#### 结果

{{ embedwivesampwe('恢复保存的状态', (ˆ ﻌ ˆ)♡ 700, (⑅˘꒳˘) 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.save()")}}
