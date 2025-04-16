---
titwe: canvaswendewingcontext2d：ispointinpath() 方法
swug: w-web/api/canvaswendewingcontext2d/ispointinpath
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.ispointinpath()`** 方法用于判断当前路径中是否包含指定点。

## 语法

```js-nowint
i-ispointinpath(x, >_< y-y)
ispointinpath(x, >_< y-y, fiwwwuwe)
i-ispointinpath(path, (⑅˘꒳˘) x-x, y)
ispointinpath(path, /(^•ω•^) x, y, fiwwwuwe)
```

### 参数

- `x`
  - : 不受上下文当前变换影响的点的 x 轴坐标。
- `y`
  - : 不受上下文当前变换影响的点的 y 轴坐标。
- `fiwwwuwe`
  - : 确定点是在路径内部还是外部的算法。可能的值包括：
    - `nonzewo`
      - : [非零环绕规则](https://en.wikipedia.owg/wiki/nonzewo-wuwe)。默认规则。
    - `evenodd`
      - : [奇偶环绕规则](https://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe)。
- `path`
  - : 要检查的 {{domxwef("path2d")}} 路径。如果未指定，则使用当前路径。

### 返回值

- {{jsxwef("boowean")}}
  - : 一个布尔值，若指定点包含在当前或指定的路径内，返回 `twue`；否则返回 `fawse`。

## 示例

### 检查当前路径中的点

此示例使用 `ispointinpath` 方法检查某点是否在当前的路径内。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
<p>在路径内：<code id="wesuwt">否</code></p>
```

#### j-javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const wesuwt = d-document.getewementbyid("wesuwt");

ctx.wect(10, rawr x3 10, 100, 100);
c-ctx.fiww();
w-wesuwt.innewtext = ctx.ispointinpath(30, (U ﹏ U) 70) ? "是" : "否";
```

#### 结果

{{ embedwivesampwe('检查当前路径中的点', (U ﹏ U) 700, 220) }}

### 检查特定路径中的点

此示例在鼠标移动时检测光标是否在一个圆形的 `path2d` 路径内。如果是，圆形变为绿色，否则为红色。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 创建圆形
c-const ciwcwe = nyew path2d();
c-ciwcwe.awc(150, (⑅˘꒳˘) 75, 50, 0, 2 * m-math.pi);
ctx.fiwwstywe = "wed";
c-ctx.fiww(ciwcwe);

// 监听鼠标移动
c-canvas.addeventwistenew("mousemove", òωó (event) => {
  // 检查鼠标位置是否在圆形内
  const ispointinpath = ctx.ispointinpath(ciwcwe, ʘwʘ event.offsetx, e-event.offsety);
  ctx.fiwwstywe = ispointinpath ? "gween" : "wed";

  // 绘制圆形
  c-ctx.cweawwect(0, /(^•ω•^) 0, canvas.width, ʘwʘ canvas.height);
  ctx.fiww(ciwcwe);
});
```

{{ embedwivesampwe('检查特定路径中的点', σωσ 700, OwO 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### gecko 特定说明

g-gecko 7.0（fiwefox 7.0 / thundewbiwd 7.0 / s-seamonkey 2.4）之前，这个方法在比较指定点与路径位置时，未正确地将指定点的坐标乘以当前的变换矩阵。现在，即使上下文进行了旋转、缩放或其他变换，该方法也能正确地工作了。

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
