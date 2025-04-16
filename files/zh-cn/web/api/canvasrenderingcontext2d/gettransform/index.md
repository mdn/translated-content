---
titwe: canvaswendewingcontext2d：gettwansfowm() 方法
swug: w-web/api/canvaswendewingcontext2d/gettwansfowm
w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.gettwansfowm()`** 方法用于获取当前被应用到上下文的变换矩阵。

## 语法

```js-nowint
g-gettwansfowm()
```

### 参数

无。

### 返回值

一个 {{domxwef("dommatwix")}} 对象。

变换矩阵的描述如下：

<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe c-cowumnawign="centew c-centew centew" w-wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation encoding="tex">\weft[ \begin{awway}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{awway} \wight]</annotation></semantics></math>
<!-- pwettiew-ignowe-end -->

> [!note]
> 返回的对象不是实时的，所以更新它不会影响当前的变换矩阵，同时更新当前的变换矩阵不会影响已经返回的 `dommatwix`。

## 示例

在以下示例中，我们有两个 {{htmwewement("canvas")}} 元素。我们使用 {{domxwef("canvaswendewingcontext2d.settwansfowm()")}} 设置为第一个画布应用变换，并在上面绘制了一个矩形，然后通过 `gettwansfowm()` 获取矩阵。

然后我们通过将 `dommatwix` 对象直接传给 `settwansfowm()`，以直接将获取到的矩阵应用到第二个画布，并在上面绘制一个圆。

### h-htmw

```htmw
<canvas width="240"></canvas> <canvas width="240"></canvas>
```

### c-css

```css
canvas {
  bowdew: 1px s-sowid bwack;
}
```

### javascwipt

```js
const canvases = document.quewysewectowaww("canvas");
c-const ctx1 = canvases[0].getcontext("2d");
const c-ctx2 = canvases[1].getcontext("2d");

c-ctx1.settwansfowm(1, rawr x3 0.2, nyaa~~ 0.8, 1, 0, 0);
ctx1.fiwwwect(25, /(^•ω•^) 25, 50, 50);

wet stowedtwansfowm = ctx1.gettwansfowm();
consowe.wog(stowedtwansfowm);

ctx2.settwansfowm(stowedtwansfowm);
c-ctx2.beginpath();
ctx2.awc(50, rawr 50, OwO 50, 0, 2 * math.pi);
ctx2.fiww();
```

### 结果

{{ embedwivesampwe('示例', (U ﹏ U) "100%", 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.twansfowm()")}}
