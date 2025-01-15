---
title: CanvasRenderingContext2D：restore() 方法
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.restore()`** 方法用于通过在绘制状态栈中弹出顶部的条目，将 canvas 恢复到最近的保存状态。如果没有保存状态，此方法不做任何改变。

要了解有关[绘制状态](/zh-CN/docs/Web/API/CanvasRenderingContext2D/save#绘制状态)的更多信息，请参阅 {{domxref("CanvasRenderingContext2D.save()")}}。

## 语法

```js-nolint
restore()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 恢复保存的状态

此示例使用 `save()` 方法保存当前状态，并使用 `restore()` 进行恢复。所以，稍后你可以使用当前状态绘制一个矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 保存当前状态
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// 恢复到最近一次调用 save() 保存的状态
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

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.save()")}}
