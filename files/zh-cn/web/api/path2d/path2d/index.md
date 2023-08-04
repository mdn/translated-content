---
title: Path2D()
slug: Web/API/Path2D/Path2D
---

{{APIRef("Canvas API")}}{{seeCompatTable}}

**`Path2D()`** 构造函数返回一个新的 `Path2D` 对象的实例，可以选择另一条路径作为参数（创建一个拷贝），或者选择 [SVG path](/zh-CN/docs/Web/SVG/Tutorial/Paths) 数据构成的字符串。

## 语法

```
new Path2D();
new Path2D(path);
new Path2D(d);
```

### 参数

- `path` {{optional_inline}}
  - : 当调用另一个 `Path2D` 对象时，会创建一个 `path` 变量的拷贝。
- `d` {{optional_inline}}
  - : 当调用 [SVG path](/zh-CN/docs/Web/SVG/Tutorial/Paths) 数据构成的字符串时，会根据描述创建一个新的路径。

## 示例

### 创建和拷贝路径

这是一段简单的代码片段，创建和拷贝 `Path2D` 路径。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let path1 = new Path2D();
path1.rect(10, 10, 100, 100);

let path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

{{ EmbedLiveSample('创建和拷贝路径', 700, 180) }}

### 使用 SVG 路径

这是一段简单的代码片段，使用 [SVG path data](/zh-CN/docs/Web/SVG/Tutorial/Paths) 创建一个 `Path2D` 路径。路径将会移动到点 (`M10 10`) ，然后向右侧水平移动 80 个点 (`h 80`)，然后向下 80 个点 (`v 80`)，然后向左 80 个点 (`h -80`)，最后回到起始点 (`z`)。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
```

{{ EmbedLiveSample('使用 SVG 路径', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Path2D")}}, 这个构造函数属于此接口。
