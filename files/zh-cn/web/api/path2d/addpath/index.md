---
title: Path2D.addPath()
slug: Web/API/Path2D/addPath
---

{{APIRef("Canvas API")}}

**`Path2D.addPath()`** 是 Canvas 2D API 根据指定路径变量添加路径的方法。

## 语法

```
void path.addPath(path [, transform]);
```

### 参数

- `path`
  - : 需要添加的 {{domxref("Path2D")}} 路径。
- `transform` {{optional_inline}}
  - : {{domxref("DOMMatrix")}} 作为新增路径的变换矩阵。

## 示例

### 在已有的路径上添加一条路径

这是一段使用 `addPath` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create first path and add a rectangle
let p1 = new Path2D();
p1.rect(0, 0, 100, 150);

// Create second path and add a rectangle
let p2 = new Path2D();
p2.rect(0, 0, 100, 75);

// Create transformation matrix that moves 200 points to the right
let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// Add second path to the first path
p1.addPath(p2, m);

// Draw the first path
ctx.fill(p1);
```

#### 结果

{{ EmbedLiveSample('在已有的路径上添加一条路径', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("Path2D")}}
