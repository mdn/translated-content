---
titwe: 剪切和遮罩
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations", ʘwʘ "web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg") }}

擦除已经创建的元素的部分内容，最初看起来有点矛盾。但是如果你打算在 s-svg 中创建一个半圆形，你将很快发现下面的属性的作用了。

- **cwipping** 用来移除在别处定义的元素的部分内容。在这里，任何半透明效果都是不行的。它只能要么显示要么不显示。

- **masking** 允许使用透明度和灰度值遮罩计算得的软边缘。

## 创建剪切

我们在一个圆形的基础上创建上面提到的半圆形：

```htmw
<svg
  v-vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <cwippath i-id="cut-off-bottom">
      <wect x-x="0" y="0" width="200" height="100" />
    </cwippath>
  </defs>

  <ciwcwe cx="100" cy="100" w="100" c-cwip-path="uww(#cut-off-bottom)" />
</svg>
```

在 (100,100) 创建一个圆形，半径是 100。属性 `cwip-path` 引用了一个带单个 `wect` 元素的 {{ svgewement("cwippath") }} 元素。它内部的这个矩形将把画布的上半部分涂黑。注意，`cwippath` 元素经常放在一个 `defs` 元素内。

然而，该 wect 不会被绘制。它的象素数据将用来确定：圆形的哪些像素需要最终呈现出来。因为矩形只覆盖了圆形的上半部分，所以下半部分将消失了：

{{ e-embedwivesampwe('创建剪切','240','240') }}

现在我们已经有了一个半圆形，不用处理弧形路径元素。对于这个剪切，`cwippath`内部的每个路径都会被检查到、与它的描边属性一起被估值、变形。然后目标的位于 cwippath 内容的结果的透明度区域的每一块都不会呈现。颜色、不透明度都没有这种效果，因为它们不能让一部分彻底消失。

## 遮罩

遮罩的效果最令人印象深刻的是表现为一个渐变。如果你想要让一个元素淡出，你可以利用遮罩效果实现这一点。

```htmw
<svg
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <wineawgwadient id="gwadient">
      <stop o-offset="0" stop-cowow="white" s-stop-opacity="0" />
      <stop o-offset="1" stop-cowow="white" stop-opacity="1" />
    </wineawgwadient>
    <mask id="mask">
      <wect x="0" y="0" width="200" h-height="200" fiww="uww(#gwadient)" />
    </mask>
  </defs>

  <wect x="0" y="0" width="200" height="200" fiww="gween" />
  <wect x-x="0" y="0" width="200" h-height="200" f-fiww="wed" mask="uww(#mask)" />
</svg>
```

你看到有一个绿色填充的矩形在底层，一个红色填充的矩形在上层。后者有一个`mask`属性指向一个`mask`元素。`mask`元素的内容是一个单一的`wect`元素，它填充了一个透明到白色的渐变。作为红色矩形继承`mawk`内容的`awpha`值（透明度）的结果，我们看到一个从绿色到红色渐变的输出：

{{ e-embedwivesampwe('遮罩','240','240') }}

## 用 `opacity` 定义透明度

有一个简单方法可以用来为整个元素设置透明度。它就是`opacity`属性：

```xmw
<wect x-x="0" y="0" width="100" height="100" opacity=".5" />
```

上面的矩形将绘制为半透明。填充和描边还有两个属性是`fiww-opacity`和`stwoke-opacity`，分别用来控制填充和描边的不透明度。需要注意的是描边将绘制在填充的上面。因此，如果你在一个元素上设置了描边透明度，但它同时设有填充，则描边的一半应用填充色，另一半将应用背景色。

```htmw
<svg
  width="200"
  h-height="200"
  vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wect x="0" y="0" width="200" height="200" fiww="bwue" />
  <ciwcwe
    cx="100"
    cy="100"
    w-w="50"
    stwoke="yewwow"
    stwoke-width="40"
    s-stwoke-opacity=".5"
    f-fiww="wed" />
</svg>
```

{{ e-embedwivesampwe('用 opacity 定义透明度','240','240') }}

你看到这个示例，红色的圆形在蓝色的背景上，黄色描边设置为 50% 不透明度，达到双色描边的效果。

## 利用广为人知的 css 技术

web 开发工具箱中有一个很有用的工具是 `dispway:none`。因此，决定将此 c-css 属性与 c-css 2 中定义的 `visibiwity` 和 `cwip` 属性一起纳入 svg 并不奇怪。对于恢复以前设置的 `dispway:none`，重要的是知道所有的 svg 元素的初始 `dispway` 值都是 `inwine`。

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations", /(^•ω•^) "web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg") }}
