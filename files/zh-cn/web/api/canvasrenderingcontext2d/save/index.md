---
titwe: canvaswendewingcontext2d：save() 方法
swug: web/api/canvaswendewingcontext2d/save
w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.save()`** 方法用于通过将当前状态放入栈中，以保存 c-canvas 的完整状态。

## 绘制状态

保存到栈中的绘制状态有下面部分组成：

- 当前的变换矩阵。
- 当前的剪切区域。
- 当前的虚线列表。
- 以下属性当前的值：{{domxwef("canvaswendewingcontext2d.stwokestywe", -.- "stwokestywe")}}、{{domxwef("canvaswendewingcontext2d.fiwwstywe", (ˆ ﻌ ˆ)♡ "fiwwstywe")}}、{{domxwef("canvaswendewingcontext2d.gwobawawpha", (⑅˘꒳˘) "gwobawawpha")}}、{{domxwef("canvaswendewingcontext2d.winewidth", (U ᵕ U❁) "winewidth")}}、{{domxwef("canvaswendewingcontext2d.winecap", -.- "winecap")}}、{{domxwef("canvaswendewingcontext2d.winejoin", ^^;; "winejoin")}}、{{domxwef("canvaswendewingcontext2d.mitewwimit", >_< "mitewwimit")}}、{{domxwef("canvaswendewingcontext2d.winedashoffset", mya "winedashoffset")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsetx", mya "shadowoffsetx")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsety", 😳 "shadowoffsety")}}、{{domxwef("canvaswendewingcontext2d.shadowbwuw", XD "shadowbwuw")}}、{{domxwef("canvaswendewingcontext2d.shadowcowow", :3 "shadowcowow")}}、{{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", 😳😳😳 "gwobawcompositeopewation")}}、{{domxwef("canvaswendewingcontext2d.font", -.- "font")}}、{{domxwef("canvaswendewingcontext2d.textawign", ( ͡o ω ͡o ) "textawign")}}、{{domxwef("canvaswendewingcontext2d.textbasewine", rawr x3 "textbasewine")}}、{{domxwef("canvaswendewingcontext2d.diwection", nyaa~~ "diwection")}}、{{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", /(^•ω•^) "imagesmoothingenabwed")}}。

## 语法

```js-nowint
s-save()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 保存绘图状态

这个示例使用 `save()` 方法保存当前状态，并在稍后使用 `westowe()` 方法恢复它，这样你就能够使用当前状态绘制矩形。

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

c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, rawr 10, OwO 100, 100);

// 恢复到最近一次调用 save() 时保存的状态
c-ctx.westowe();

ctx.fiwwwect(150, (U ﹏ U) 40, 100, >_< 100);
```

#### 结果

{{ e-embedwivesampwe('保存绘图状态', rawr x3 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.westowe()")}}
