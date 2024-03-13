---
title: CanvasRenderingContext2D.clip()
slug: Web/API/CanvasRenderingContext2D/clip
---

{{APIRef}}

**`CanvasRenderingContext2D.clip()`** 是 Canvas 2D API 将当前创建的路径设置为当前剪切路径的方法。

## 语法

```
void ctx.clip();
void ctx.clip(fillRule);
void ctx.clip(path, fillRule);
```

### 参数

![](canvas_clipping_path.png)

- `fillRule`

  - : 这个算法判断一个点是在路径内还是在路径外。
    允许的值：

    - `nonzero`
      - : [非零环绕原则](http://en.wikipedia.org/wiki/Nonzero-rule)，默认的原则。
    - `evenodd`
      - : [奇偶环绕原则](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 需要剪切的 {{domxref("Path2D")}} 路径。

## 示例

### 一个简单的裁剪区域

这是一段简单的代码片段，使用 `clip` 方法创建剪切区域。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create circular clipping region
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI * 2);
ctx.clip();

// Draw stuff that gets clipped
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
```

#### 结果

{{ EmbedLiveSample('一个简单的裁剪区域', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
