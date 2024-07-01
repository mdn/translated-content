---
title: CanvasRenderingContext2D.isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
---

{{APIRef}}

**`CanvasRenderingContext2D.isPointInPath()`** 是 Canvas 2D API 用于判断在当前路径中是否包含检测点的方法。

## 语法

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### 参数

- x
  - : 检测点的 X 坐标
- y
  - : 检测点的 Y 坐标
- `fillRule`

  - : 用来决定点在路径内还是在路径外的算法。
    允许的值：

    - `nonzero`
      - : [非零环绕规则](http://en.wikipedia.org/wiki/Nonzero-rule)，默认的规则。
    - `evenodd`
      - : [奇偶环绕原则](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : {{domxref("Path2D")}}应用的路径。

### 返回值

- {{jsxref("Boolean")}}
  - : 一个 Boolean 值，当检测点包含在当前或指定的路径内，返回 true；否则返回 false。

## 示例

### 检查当前路径中的点

这是一段简单的代码片段，使用 `isPointInPath` 方法检查某点是否在当前的路径内。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In path: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.fill();
result.innerText = ctx.isPointInPath(30, 70);
```

#### 结果

{{ EmbedLiveSample('检查当前路径中的点', 700, 220) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
