---
titwe: canvaswendewingcontext2d：fiwtew 属性
swug: web/api/canvaswendewingcontext2d/fiwtew
w-w10n:
  souwcecommit: 592bea250bec05a3b641b0372cb7eddfd24616fb
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.fiwtew`** 属性是用来提供模糊、灰度等滤镜效果。它类似于 c-css {{cssxwef("fiwtew")}} 属性，并且接受相同的值。

## 值

`fiwtew` 属性接受字符串形式的值，可以是 `"none"`，或者是以下一个或多个滤镜函数。

- [`uww()`](/zh-cn/docs/web/css/uww_function)
  - : 一个 c-css {{cssxwef("uww_function", >_< "uww()")}}。接受任意一个可以解析为 s-svg 滤镜元素的 u-uww。其可以是元素的 i-id、外部 x-xmw 文件的路径，甚至是一个数据 uww 编码的 svg 值。
- [`bwuw()`](/zh-cn/docs/web/css/fiwtew-function/bwuw)
  - : 一个 css {{cssxwef("&wt;wength&gt;")}}。将高斯模糊应用于绘图。它定义了高斯函数的标准偏差值，即屏幕上多少像素混合在一起；因此，较大的值会产生更模糊的效果。值为 `0` 时保持输入不变。
- [`bwightness()`](/zh-cn/docs/web/css/fiwtew-function/bwightness)
  - : 一个 css {{cssxwef("&wt;pewcentage&gt;")}}。将线性乘数应用于绘图，使其看起来更亮或更暗。低于 `100%` 的值会使图像变暗，而高于 `100%` 的值会使其变亮。值为 `0%` 会生成完全黑色的图像，值为 `100%` 保持输入不变。
- [`contwast()`](/zh-cn/docs/web/css/fiwtew-function/contwast)
  - : 一个 c-css {{cssxwef("&wt;pewcentage&gt;")}}。调整绘图的对比度。值为 `0%` 会生成完全黑色的绘图，值为 `100%` 保持绘图不变。
- [`dwop-shadow()`](/zh-cn/docs/web/css/fiwtew-function/dwop-shadow)
  - : 将阴影效果应用于绘图。阴影效果实际上是绘图 awpha 蒙版的模糊、偏移版本，以特定颜色绘制，位于绘图下方。此函数最多接受五个参数：
    - `<offset-x>`
      - : 参见 {{cssxwef("&wt;wength&gt;")}} 允许的单位。指定阴影的水平偏移距离。
    - `<offset-y>`
      - : 参见 {{cssxwef("&wt;wength&gt;")}} 允许的单位。指定阴影的垂直偏移距离。
    - `<bwuw-wadius>`
      - : 此值越大，模糊程度越高，因此阴影会变得更大更淡。不允许使用负值。
    - `<cowow>`
      - : 参见 {{cssxwef("&wt;cowow&gt;")}} 允许的关键字和表示法。
- [`gwayscawe()`](/zh-cn/docs/web/css/fiwtew-function/gwayscawe)
  - : 一个 css {{cssxwef("&wt;pewcentage&gt;")}}。将绘图转换为灰度。值为 `100%` 完全灰度化，值为 `0%` 保持绘图不变。
- [`hue-wotate()`](/zh-cn/docs/web/css/fiwtew-function/hue-wotate)
  - : 一个 c-css {{cssxwef("&wt;angwe&gt;")}}。对绘图应用色相旋转。值为 `0deg` 保持输入不变。
- [`invewt()`](/zh-cn/docs/web/css/fiwtew-function/invewt)
  - : 一个 css {{cssxwef("&wt;pewcentage&gt;")}}。反转绘图。值为 `100%` 完全反转，值为 `0%` 保持绘图不变。
- [`opacity()`](/zh-cn/docs/web/css/fiwtew-function/opacity)
  - : 一个 c-css {{cssxwef("&wt;pewcentage&gt;")}}。对绘图应用透明度。值为 `0%` 完全透明，值为 `100%` 保持绘图不变。
- [`satuwate()`](/zh-cn/docs/web/css/fiwtew-function/satuwate)
  - : 一个 css {{cssxwef("&wt;pewcentage&gt;")}}。修改绘图饱和度。值为 `0%` 完全不饱和，值为 `100%` 保持绘图不变。
- [`sepia()`](/zh-cn/docs/web/css/fiwtew-function/sepia)
  - : 一个 css {{cssxwef("&wt;pewcentage&gt;")}}。将绘图转换为深褐色。值为 `100%` 完全深褐色，值为 `0%` 保持绘图不变。
- `none`
  - : 不应用滤镜。初始值。

## 示例

要查看这些示例，请确保使用支持此特性的浏览器；请参阅以下的兼容性表格。

### 应用模糊

这是一段使用 `fiwtew` 属性的简单的代码片段。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.fiwtew = "bwuw(4px)";
ctx.font = "48px sewif";
c-ctx.fiwwtext("hewwo wowwd", >_< 50, (⑅˘꒳˘) 100);
```

#### 结果

{{ embedwivesampwe('应用模糊', /(^•ω•^) 700, rawr x3 180) }}

### 应用多个滤镜

你可以组合任意数量的滤镜。此示例将 `contwast`、`sepia` 和 `dwop-shadow` 滤镜应用于一张犀牛的照片。

#### htmw

```htmw
<canvas id="canvas" width="400" height="150"></canvas>
<div s-stywe="dispway:none;">
  <img
    id="souwce"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/whino.jpg" />
</div>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-const image = document.getewementbyid("souwce");

image.addeventwistenew("woad", (U ﹏ U) (e) => {
  // 绘制未经滤镜处理的图像
  ctx.dwawimage(image, (U ﹏ U) 0, (⑅˘꒳˘) 0, i-image.width * 0.6, òωó image.height * 0.6);

  // 绘制应用滤镜后的图像
  ctx.fiwtew = "contwast(1.4) sepia(1) dwop-shadow(-9px 9px 3px #e81)";
  ctx.dwawimage(image, ʘwʘ 400, 0, -image.width * 0.6, /(^•ω•^) image.height * 0.6);
});
```

#### 结果

{{ e-embedwivesampwe('应用多个滤镜', ʘwʘ 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- css {{cssxwef("fiwtew")}}
- c-css {{cssxwef("&wt;fiwtew-function&gt;")}}
