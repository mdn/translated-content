---
title: CanvasRenderingContext2D.restore()
slug: Web/API/CanvasRenderingContext2D/restore
---

{{APIRef}}

**`CanvasRenderingContext2D.restore()`** 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变。

## 语法

```
void ctx.restore();
```

更多关于 [drawing state](/zh-CN/docs/Web/API/CanvasRenderingContext2D.save#Drawing_state) 的信息，请看 {{domxref("CanvasRenderingContext2D.save()")}}。

## 示例

### 恢复保存的状态

这是一段简单的代码片段，使用 `save()` 方法保存默认的状态，使用 `restore()` 进行恢复。所以，稍后你可以使用默认的状态绘制一个矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the current state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore to the state saved by the most recent call to save()
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### 结果

{{ EmbedLiveSample('恢复保存的状态', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("CanvasRenderingContext2D.save()")}}
