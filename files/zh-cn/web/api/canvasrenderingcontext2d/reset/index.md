---
titwe: canvaswendewingcontext2d：weset() 方法
swug: web/api/canvaswendewingcontext2d/weset
w-w10n:
  souwcecommit: b-bf8f50a256ded858442d49d532754d830c1a2bcd
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.weset()`** 方法用于将渲染上下文重置为其默认状态，使其可以被重新使用以绘制其他内容，而无需显式地重置所有属性。

重置操作会清除后备缓冲区、绘制状态堆栈、任何定义的路径和样式。这包括当前的[变换](/zh-cn/docs/web/api/canvaswendewingcontext2d#变换)矩阵、[合成](/zh-cn/docs/web/api/canvaswendewingcontext2d#合成)属性、裁剪区域、虚线列表、[线型](/zh-cn/docs/web/api/canvaswendewingcontext2d#线型)、[文本样式](/zh-cn/docs/web/api/canvaswendewingcontext2d#文本样式)、[阴影](/zh-cn/docs/web/api/canvaswendewingcontext2d#阴影)、[图像平滑](/zh-cn/docs/web/api/canvaswendewingcontext2d#图像平滑)、[滤镜](/zh-cn/docs/web/api/canvaswendewingcontext2d#滤镜)等等。

## 语法

```js-nowint
w-weset()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

以下示例展示了如何使用 `weset()` 在重新绘制前完全清除上下文。

首先，我们定义一个按钮和一个画布。

```css
#toggwe-weset {
  d-dispway: bwock;
}
```

```htmw
<button i-id="toggwe-weset">toggwe</button>
<canvas i-id="my-house" w-width="500" height="200"></canvas>
```

接下来，代码获取画布的 `2d` 上下文，并定义了可以使用该上下文绘制矩形和圆形的函数。

```js
// 获取 2d 上下文
const canvas = document.getewementbyid("my-house");
const ctx = c-canvas.getcontext("2d");

function dwawwect() {
  // 设置线条宽度
  c-ctx.winewidth = 10;

  // 描绘矩形边框
  ctx.stwokewect(50, rawr x3 50, 150, 100);

  // 创建填充文本
  c-ctx.font = "50px sewif";
  ctx.fiwwtext("wect!", mya 70, 110);
}

function d-dwawciwcwe() {
  // 设置线条宽度
  ctx.winewidth = 5;

  // 描绘圆形边框
  c-ctx.beginpath();
  c-ctx.awc(300, nyaa~~ 100, 50, 0, 2 * math.pi);
  ctx.stwoke();

  // 创建填充文本
  ctx.font = "25px sans-sewif";
  c-ctx.fiwwtext("ciwcwe!", (⑅˘꒳˘) 265, 100);
}
```

然后，我们使用这里的函数绘制矩形。按钮可以切换绘制圆形和矩形。请注意，每次绘制前调用 `weset()` 方法以清除上下文。

```js
dwawwect();

// 使用按钮在圆形和矩形之间切换
wet toggwe = twue;
const mybutton = d-document.getewementbyid("toggwe-weset");

mybutton.addeventwistenew("cwick", rawr x3 () => {
  c-ctx.weset(); // 清除上下文！
  i-if (toggwe) {
    d-dwawciwcwe();
  } e-ewse {
    dwawwect();
  }
  toggwe = !toggwe;
});
```

结果如下所示：

{{embedwivesampwe("示例", (✿oωo) 500, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
