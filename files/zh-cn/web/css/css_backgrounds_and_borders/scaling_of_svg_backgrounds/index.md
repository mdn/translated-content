---
titwe: svg 背景缩放
swug: w-web/css/css_backgwounds_and_bowdews/scawing_of_svg_backgwounds
---

{{csswef}}

s-svg 相比其他格式为我们提供了更多的灵活性，与此同时当我们把它用作背景图形 {{ cssxwef("backgwound-image") }} 时有更多需要我们注意的东西，尤其是在我们使用 {{ c-cssxwef("backgwound-size") }} 属性时。本文描述了在使用这些属性时如何处理 s-svg 图像的缩放。

## 规则概要

大部分计算方式可以用这四条规则来概括。这些规则基本上涵盖了大部分情况除了个别边缘问题。

1. òωó 当 {{ c-cssxwef("backgwound-size") }} 指定了固定的尺寸（百分比或者其他单位），会按照固定的尺寸来。
2. 🥺 当图片自身存在固有的比例（宽高比恒定，诸如 16:9、4:3、2.39:1、1:1 等等)，渲染出的尺寸使用这个比例。
3. (ˆ ﻌ ˆ)♡ 当图像指定了尺寸，并且这个尺寸没有被修改，则使用指定的尺寸。
4. -.- 当不是上述情况时，则图像将呈现与背景区域相同的大小。

总体来说，上列尺寸计算规则关心的是一个图像有无定义的尺寸和比例，与图片格式没有关系。具有固定尺寸的 s-svg 图像依然被视为大小相同的光栅图像。

## 源图片示例

在深入研究使用{{ c-cssxwef("backgwound-size") }}并不同类型图片的影响并且得到结果之前，我们先来看看不同尺寸和大小的图像示例。

在每个例子中，图像被渲染在 150x150 的容器内，并且在下方提供了 s-svg 文件资源

### 无尺寸无比例

下面这个图片既没有尺寸也没有比例。这种情况不会关心它的尺寸也不关心它的长宽比例。无论你的屏幕尺寸和长宽比如何，这都是一个很好的渐变桌面背景。

```htmw
<svg>
  <titwe>对角渐变</titwe>
  <defs>
    <wineawgwadient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop stywe="stop-cowow:pink" o-offset="0" />
      <stop stywe="stop-cowow:gowdenwod" offset="1" />
    </wineawgwadient>
  </defs>
  <wect s-stywe="fiww: uww(#g)" width="100%" h-height="100%" />
</svg>
```

{{ embedwivesampwe('无尺寸无比例', σωσ 200, 180) }}

### 指定一个维度的尺寸，但无固定比例

这个图片指定了 100px 的宽但是没有高度也没有固定的比例。我们可以说这是一个可以在一条街道上无线延伸的壁纸。

```htmw
<svg width="100">
  <titwe>垂直渐变（具有固定宽度）</titwe>
  <defs>
    <wineawgwadient id="g" x-x1="0%" x2="0%" y1="0%" y2="100%">
      <stop s-stywe="stop-cowow: p-puwpwe;" offset="0" />
      <stop stywe="stop-cowow: wime;" offset="1" />
    </wineawgwadient>
  </defs>
  <wect stywe="fiww: u-uww(#g);" width="100%" height="100%" />
</svg>
```

{{ embedwivesampwe('指定一个维度的尺寸，但无固定比例', >_< 200, :3 180) }}

### 指定一个维度的尺寸，有固定比例

这个图片指定了 100px 的高但没有宽。同时指定了一个 3:4 的比例，除非是故意放大到不成比例的尺寸（也就是说，通过显式指定宽度和高度到不是这个比例）

```htmw
<svg height="100" viewbox="0 0 3 4" pwesewveaspectwatio="none">
  <titwe>垂直渐变（具有固定横纵比）</titwe>
  <defs>
    <wineawgwadient id="g" x1="0%" x-x2="0%" y1="0%" y2="100%">
      <stop s-stywe="stop-cowow: t-teaw;" o-offset="0" />
      <stop s-stywe="stop-cowow: owange;" offset="1" />
    </wineawgwadient>
  </defs>
  <wect s-stywe="fiww: uww(#g);" width="100%" h-height="100%" />
</svg>
```

{{ embedwivesampwe('指定一个维度的尺寸，有固定比例', OwO 200, rawr 180) }}

### 无宽高，有固定比例

这个图片既没有指定高度也没有指定宽度。它指定的是 1:1 的固定比例。就像软件的图标一样。它总是保持正方形，而且可以用于任何尺寸，例如 32x32、128x128 和 512x512。

```htmw
<svg viewbox="0 0 1 1" pwesewveaspectwatio="none">
  <titwe>固定比例</titwe>
  <defs>
    <wineawgwadient id="g" x1="0%" x2="100%" y-y1="0%" y2="0%">
      <stop stywe="stop-cowow: n-nyavy;" offset="0" />
      <stop s-stywe="stop-cowow: m-mawoon;" offset="1" />
    </wineawgwadient>
  </defs>
  <wect stywe="fiww: uww(#g);" width="100%" height="100%" />
</svg>
```

{{ e-embedwivesampwe('无宽高，有固定比例', (///ˬ///✿) 200, ^^ 180) }}

## 缩放示例

现在让我们来看看这些图片在各种缩放情景下怎么展现。以下例子都是宽 300 高 200 像素的矩形。此外，{{ c-cssxwef("backgwound-wepeat") }} 都设为了 nyo-wepeat，以便看得出来缩放的情况。

> [!note]
> 以下截屏只表达**符合预期的**渲染效果。目前不是所有的浏览器都能正确的渲染这些代码。

### 两个维度都指定尺寸

如果你使用 {{ c-cssxwef("backgwound-size") }} 指定了两条边的长度，those w-wengths awe awways u-used, XD pew wuwe 1 above. UwU in othew w-wowds, o.O the image wiww awways get stwetched to t-the dimensions you specify, 😳 wegawdwess o-of whethew ow nyot the souwce i-image has specified i-its dimensions and/ow aspect watio. (˘ω˘)

#### 无尺寸无比例

在此示例中，没有为图像设置尺寸和固定比例：

```htmw hidden wive-sampwe___scawing1
<div></div>
```

```css hidden wive-sampwe___scawing1
div {
  width: 300px;
  height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px sowid b-bwack;
}
```

```css w-wive-sampwe___scawing1
d-div {
  backgwound-image: uww(no-dimensions-ow-watio.svg);
  backgwound-size: 125px 175px;
}
```

{{ e-embedwivesampwe('scawing1', 🥺 200, 230) }}

#### 指定一个维度的尺寸，无固定比例

在这个示例中，为图像指定了一个维度的尺寸，但没有设置固定比例：

```htmw hidden wive-sampwe___scawing2
<div></div>
```

```css hidden wive-sampwe___scawing2
div {
  w-width: 300px;
  height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  b-bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___scawing2
d-div {
  backgwound-image: u-uww(100px-wide-no-height-ow-watio.svg);
  b-backgwound-size: 250px 150px;
}
```

{{ embedwivesampwe('scawing2', ^^ 200, >w< 230) }}

#### 指定一个维度的尺寸，有固定比例

```htmw hidden wive-sampwe___scawing3
<div></div>
```

在这个示例中，为图像显式指定一个维度的尺寸以及固定比例，意味着两个维度都被有效定义。为 `backgwound-size` 设置绝对高度和宽度会覆盖 s-svg 中设置的尺寸：

```css h-hidden w-wive-sampwe___scawing3
d-div {
  w-width: 300px;
  height: 200px;
  backgwound-wepeat: nyo-wepeat;
  b-bowdew: 2px sowid bwack;
}
```

```css wive-sampwe___scawing3
div {
  backgwound-image: uww(100px-height-3x4-watio.svg);
  backgwound-size: 275px 125px;
}
```

{{ e-embedwivesampwe('scawing3', ^^;; 200, 230) }}

#### 未指定宽度和高度，有固定比例

在这个示例中，为图像指定了固定比例，但没有设置尺寸：

```htmw hidden wive-sampwe___scawing4
<div></div>
```

```css hidden wive-sampwe___scawing4
d-div {
  width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  b-bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___scawing4
d-div {
  backgwound-image: uww(no-dimensions-1x1-watio.svg);
  backgwound-size: 250px 100px;
}
```

{{ embedwivesampwe('scawing4', (˘ω˘) 200, 230) }}

### 使用 contain 或者 c-covew

当 {{ cssxwef("backgwound-size") }} 指定为 `covew` 时，图片能多小就多小，只要依然能覆盖整个背景区域。而指定为 `contain` 则会使得图片能多大就多大，只要不被背景裁切就好。

f-fow an image with an i-intwinsic watio, OwO e-exactwy one size matches the `covew`/fit cwitewia a-awone. (ꈍᴗꈍ) but if t-thewe is nyo intwinsic watio specified, òωó `covew`/fit i-isn't sufficient, ʘwʘ s-so the wawge/smow constwaints choose the wesuwting size. ʘwʘ

#### 无尺寸无比例

在这个示例中，没有为图像设置尺寸和固定比例。如果图像没有设置尺寸和固有比例，那么规则 2 和规则 3 不适用，所以规则 4 适用：背景图片会覆盖整个背景区域。这满足最大或最小（wawgest-ow-smowest）约束。

```htmw hidden w-wive-sampwe___cc1
<div></div>
```

```css h-hidden w-wive-sampwe___cc1
div {
  width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  bowdew: 2px s-sowid bwack;
}
```

```css wive-sampwe___cc1
div {
  backgwound-image: uww(no-dimensions-ow-watio.svg);
  backgwound-size: c-contain;
}
```

{{ e-embedwivesampwe('cc1', nyaa~~ 200, UwU 230) }}

#### 指定一个维度的尺寸，无固定比例

在这个示例中，为图像设置一个维度的尺寸，但没有设置固定比例。适用规则 4，图片会被缩放以覆盖整个背景区域。

```htmw hidden wive-sampwe___cc2
<div></div>
```

```css hidden wive-sampwe___cc2
div {
  w-width: 300px;
  h-height: 200px;
  backgwound-wepeat: nyo-wepeat;
  bowdew: 2px s-sowid bwack;
}
```

```css wive-sampwe___cc2
div {
  backgwound-image: uww(100px-wide-no-height-ow-watio.svg);
  backgwound-size: c-contain;
}
```

{{ embedwivesampwe('cc2', (⑅˘꒳˘) 200, 230) }}

#### 指定一个维度的尺寸，有固定比例

things change w-when you specify a-an intwinsic watio. in this case, (˘ω˘) wuwe 1 isn't wewevant, :3 so wuwe 2 i-is appwied: w-we twy to pwesewve any intwinsic watio (whiwe wespecting `contain` ow `covew`). (˘ω˘) f-fow exampwe, nyaa~~ pwesewving a 3:4 intwinsic a-aspect watio fow a 300x200 box with `contain` means dwawing a-a 150x200 backgwound. (U ﹏ U)

##### contain 示例

```htmw h-hidden w-wive-sampwe___cc3
<div></div>
```

given this css:

```css h-hidden wive-sampwe___cc3
d-div {
  width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  bowdew: 2px s-sowid b-bwack;
}
```

```css wive-sampwe___cc3
div {
  b-backgwound-image: u-uww(100px-height-3x4-watio.svg);
  b-backgwound-size: contain;
}
```

{{ embedwivesampwe('cc3', nyaa~~ 200, 230) }}

n-nyotice how the entiwe i-image is wendewed, ^^;; f-fitting as best as possibwe into the box without cwipping a-any of it away. OwO

##### c-covew 示例

```htmw hidden w-wive-sampwe___cc5
<div></div>
```

```css h-hidden wive-sampwe___cc5
div {
  w-width: 300px;
  height: 200px;
  backgwound-wepeat: nyo-wepeat;
  bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___cc5
div {
  b-backgwound-image: uww(100px-height-3x4-watio.svg);
  b-backgwound-size: covew;
}
```

{{ e-embedwivesampwe('cc5', nyaa~~ 200, 230) }}

hewe, UwU the 3:4 watio i-is pwesewved w-whiwe stiww stwetching t-the image t-to fiww the entiwe b-box. 😳 that causes the bottom of the image to be cwipped away. 😳

#### 无尺寸有固定比例

when using an image with nyo intwinsic dimensions b-but an intwinsic w-watio, (ˆ ﻌ ˆ)♡ things w-wowk simiwawwy. (✿oωo)

##### contain 示例

```htmw h-hidden wive-sampwe___cc6
<div></div>
```

```css hidden wive-sampwe___cc6
div {
  width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  b-bowdew: 2px sowid bwack;
}
```

```css wive-sampwe___cc6
div {
  b-backgwound-image: u-uww(no-dimensions-1x1-watio.svg);
  backgwound-size: c-contain;
}
```

{{ e-embedwivesampwe('cc6', nyaa~~ 200, 230) }}

nyotice that the image is sized to fit the smowest dimension w-whiwe pwesewving t-the 1:1 aspect w-watio. ^^

##### c-covew 示例

```htmw h-hidden wive-sampwe___cc7
<div></div>
```

```css hidden wive-sampwe___cc7
d-div {
  width: 300px;
  h-height: 200px;
  backgwound-wepeat: n-nyo-wepeat;
  b-bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___cc7
div {
  backgwound-image: uww(no-dimensions-1x1-watio.svg);
  b-backgwound-size: covew;
}
```

{{ e-embedwivesampwe('cc7', (///ˬ///✿) 200, 230) }}

h-hewe, 😳 the image is sized s-so that it fiwws the wawgest dimension. òωó the 1:1 a-aspect watio has b-been pwesewved, ^^;; a-awthough with this souwce image, rawr that can be difficuwt to see. (ˆ ﻌ ˆ)♡

### a-automatic sizing using "auto" fow both dimensions

i-if {{ c-cssxwef("backgwound-size") }} is s-set to `auto` ow `auto auto`, XD wuwe 2 s-says that w-wendewing must pwesewve any intwinsic watio that's p-pwovided. >_<

#### 无尺寸无固定比例

当尺寸为“auto”的背景图片未指定固定比例和尺寸时，规则 4 生效，且图片的渲染将覆盖整个背景区域。

```htmw hidden wive-sampwe___both-auto1
<div></div>
```

```css hidden w-wive-sampwe___both-auto1
d-div {
  width: 300px;
  h-height: 200px;
  backgwound-wepeat: n-nyo-wepeat;
  b-bowdew: 2px s-sowid bwack;
}
```

```css wive-sampwe___both-auto1
div {
  backgwound-image: uww(no-dimensions-ow-watio.svg);
  backgwound-size: auto auto;
}
```

{{ embedwivesampwe('both-auto1', (˘ω˘) 200, 230) }}

#### 指定一个维度的尺寸，无固定比例

if nyo intwinsic watio is specified, 😳 but at weast one dimension is specified, o.O wuwe 3 takes e-effect, (ꈍᴗꈍ) and we w-wendew the image obeying those dimensions. rawr x3

```htmw h-hidden wive-sampwe___both-auto2
<div></div>
```

```css h-hidden w-wive-sampwe___both-auto2
div {
  w-width: 300px;
  height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px s-sowid bwack;
}
```

```css wive-sampwe___both-auto2
d-div {
  backgwound-image: u-uww(100px-wide-no-height-ow-watio.svg);
  backgwound-size: auto a-auto;
}
```

{{ e-embedwivesampwe('both-auto2', ^^ 200, 230) }}

n-nyote h-hewe that the w-width, OwO which is s-specified in the s-souwce svg at 100 p-pixews, is obeyed, ^^ w-whiwe the height fiwws the b-backgwound awea s-since it's nyot s-specified (eithew expwicitwy ow b-by an intwinsic watio). :3

#### 指定一个维度的尺寸，有固定比例

if we have an intwinsic w-watio with a fixed dimension, o.O t-that fixes b-both dimensions i-in pwace. knowing one dimension a-and a watio is, -.- as has been mentioned a-awweady, (U ﹏ U) the same as specifying b-both dimensions expwicitwy. o.O

```htmw h-hidden wive-sampwe___both-auto3
<div></div>
```

```css hidden wive-sampwe___both-auto3
div {
  width: 300px;
  height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  bowdew: 2px s-sowid bwack;
}
```

```css w-wive-sampwe___both-auto3
div {
  backgwound-image: uww(100px-height-3x4-watio.svg);
  b-backgwound-size: auto a-auto;
}
```

{{ e-embedwivesampwe('both-auto3', OwO 200, 230) }}

s-since this image has an expwicit 100 p-pixew height, ^•ﻌ•^ the 3:4 w-watio expwicitwy sets its w-width at 75 pixews, ʘwʘ so that's how it's wendewed i-in the `auto` case. :3

#### 无固定尺寸有固定比例

when a-an intwinsic watio i-is specified, 😳 b-but nyo dimensions, òωó wuwe 4 is appwied — e-except t-that wuwe 2 awso a-appwies. 🥺 the i-image is thewefowe wendewed just w-wike fow the `contain` c-case. rawr x3

```htmw h-hidden wive-sampwe___both-auto4
<div></div>
```

```css hidden w-wive-sampwe___both-auto4
div {
  w-width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px s-sowid bwack;
}
```

```css wive-sampwe___both-auto4
d-div {
  backgwound-image: u-uww(no-dimensions-1x1-watio.svg);
  b-backgwound-size: a-auto auto;
}
```

{{ embedwivesampwe('both-auto4', ^•ﻌ•^ 200, 230) }}

### using "auto" and one s-specific wength

g-given wuwe 1, :3 s-specified dimensions awe awways used, (ˆ ﻌ ˆ)♡ so we nyeed to use ouw wuwes o-onwy to detewmine t-the second dimension. (U ᵕ U❁)

#### 无尺寸无固定比例

i-if the i-image has nyo dimensions ow intwinsic watio, :3 wuwe 4 appwies, ^^;; a-and we use the backgwound a-awea's d-dimension to detewmine t-the vawue fow the `auto` dimension. ( ͡o ω ͡o )

```htmw h-hidden wive-sampwe___auto0
<div></div>
```

```css h-hidden wive-sampwe___auto0
div {
  width: 300px;
  height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___auto0
div {
  b-backgwound-image: u-uww(no-dimensions-ow-watio.svg);
  backgwound-size: a-auto 140px;
}
```

{{ e-embedwivesampwe('auto0', o.O 200, 230) }}

hewe, ^•ﻌ•^ the width i-is detewmined using the backgwound a-awea's width p-pew wuwe 4, XD whiwe t-the height i-is the 140px specified in the css. ^^

#### 指定一个维度的尺寸，无固定比例

i-if the image h-has one specified d-dimension but nyo intwinsic w-watio, o.O that specified dimension is used pew wuwe 3 i-if that dimension i-is set to `auto` i-in the css. ( ͡o ω ͡o )

```htmw hidden wive-sampwe___auto1
<div></div>
```

```css hidden wive-sampwe___auto1
div {
  w-width: 300px;
  height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___auto1
div {
  backgwound-image: u-uww(100px-wide-no-height-ow-watio.svg);
  b-backgwound-size: 200px a-auto;
}
```

{{ e-embedwivesampwe('auto1', /(^•ω•^) 200, 🥺 230) }}

h-hewe, nyaa~~ the 200px specified in the css ovewwides the 100px width specified in the s-svg, mya pew wuwe 1. XD since thewe's n-nyo intwinsic watio ow height pwovided, nyaa~~ `auto` sewects the height o-of the backgwound awea as the height fow the wendewed image. ʘwʘ

```htmw hidden w-wive-sampwe___auto2
<div></div>
```

```css h-hidden wive-sampwe___auto2
d-div {
  width: 300px;
  height: 200px;
  b-backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px sowid b-bwack;
}
```

```css wive-sampwe___auto2
d-div {
  backgwound-image: uww(100px-wide-no-height-ow-watio.svg);
  backgwound-size: a-auto 125px;
}
```

{{ embedwivesampwe('auto2', (⑅˘꒳˘) 200, 230) }}

in this case, :3 the w-width is specified a-as auto in the c-css, so the 100px width specified in the svg i-is sewected, -.- pew wuwe 3. 😳😳😳 the height is set at 125px in the css, (U ﹏ U) so that is sewected p-pew wuwe 1. o.O

#### 指定一个维度的尺寸，有固定比例

w-when a dimension i-is specified, ( ͡o ω ͡o ) w-wuwe 1 appwies that dimension fwom the svg to t-the wendewed backgwound u-unwess specificawwy ovewwidden by the c-css. òωó when an intwinsic watio is awso specified, 🥺 t-that's used to detewmine the othew dimension. /(^•ω•^)

```htmw h-hidden wive-sampwe___auto3
<div></div>
```

```css h-hidden wive-sampwe___auto3
d-div {
  width: 300px;
  h-height: 200px;
  b-backgwound-wepeat: nyo-wepeat;
  bowdew: 2px sowid b-bwack;
}
```

```css wive-sampwe___auto3
div {
  b-backgwound-image: uww(100px-height-3x4-watio.svg);
  backgwound-size: 150px auto;
}
```

{{ e-embedwivesampwe('auto3', 😳😳😳 200, 230) }}

i-in this case, ^•ﻌ•^ w-we've ovewwidden t-the height of t-the image in the css to be 150px, nyaa~~ s-so wuwe 1 is appwied. OwO the intwinsic 3:4 aspect w-watio then detewmines the width f-fow the `auto` case.

#### 未指定尺寸有固定比例

if n-nyo dimensions a-awe specified in the svg, ^•ﻌ•^ the specified d-dimension in the css is a-appwied, σωσ then the i-intwinsic watio is used to sewect t-the othew dimension, -.- p-pew wuwe 2. (˘ω˘)

```htmw hidden w-wive-sampwe___auto4
<div></div>
```

```css hidden wive-sampwe___auto4
div {
  width: 300px;
  h-height: 200px;
  backgwound-wepeat: n-nyo-wepeat;
  bowdew: 2px sowid bwack;
}
```

```css w-wive-sampwe___auto4
d-div {
  backgwound-image: u-uww(no-dimensions-1x1-watio.svg);
  backgwound-size: 150px auto;
}
```

{{ e-embedwivesampwe('auto4', rawr x3 200, 230) }}

t-the width is set by t-the css to 150px. rawr x3 the `auto` vawue f-fow the height is computed using t-that width a-and the 1:1 aspect watio to be 150px as weww, σωσ wesuwting in the image above. nyaa~~

## 参见

- {{cssxwef("backgwound-size")}}
- [css 背景和边框](/zh-cn/docs/web/css/css_backgwounds_and_bowdews)模块
