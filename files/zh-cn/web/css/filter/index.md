---
title: filter
slug: Web/CSS/filter
tags:
  - CSS
  - CSS Property
  - Reference
  - SVG
  - SVG Filter
  - recipe:css-property
translation_of: Web/CSS/filter
---
{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS)属性 **`filter`** 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

CSS 标准里包含了一些已实现预定义效果的函数。你也可以参考一个 SVG 滤镜，通过一个 URL 链接到 SVG 滤镜元素（[SVG filter element](/zh-CN/docs/Web/SVG/Element/filter)）。

{{EmbedInteractiveExample("pages/css/filter.html")}}

## 语法

```css
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: unset;
```

设置一种函数，方法如下：

```css
filter: <filter-function> [<filter-function>]* | none
```

给 SVG 元素 {{SVGElement("filter")}} 引用滤镜，如下：

```css
filter: url(file.svg#filter-element-id)
```

### 插值

如果起始和结束过滤器都有一个不含 {{cssxref("url()")}} 的相同长度的函数列表，则会根据其指定的规则对其每个过滤器函数进行插值。如果它们的长度不同，较长列表中缺少的等效过滤器函数将使用空白的值添加到较短列表的尾部，然后所有的过滤器函数根据其特定的规则插值。如果一个过滤器是 `none` 则会使用过滤器函数的默认值替换函数列表，然后根据特定的规则进行插值，否则使用离散插值。

## 函数

使用 CSS 滤镜属性，你需要设定下面某一函数的值。如果该值无效，函数返回 `none`。除特殊说明外，函数的值如果接受百分比值（如 `34%`），那么该函数也接受小数值（如 `0.34`）。

当单个 `filter` 属性具有两个或多个函数时，其结果将不同于把两个或多个 `filter` 属性分别应用于相同的函数时的结果。

### SVG filter

#### url()

获取指向 SVG 滤镜的 URI，该 [SVG filter](/zh-CN/docs/Web/SVG/Element/filter) 可以嵌入到外部 XML 文件中。

```css
filter: url(resources.svg#c1)
```

### Filter 函数

#### blur()

{{cssxref("filter-function/blur()", "blur()")}} 函数将高斯模糊应用于输入图像。`radius` 定义了高斯函数的标准偏差值，或者屏幕上有多少像素相互融合，因此，较大的值将产生更多的模糊。若没有设置值，默认为 `0`。该参数可以指定为 CSS 长度，但不接受百分比值。

```css
filter: blur(5px)
```

```html hidden
  <table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_2.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_2.jpeg" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg id="img3" overflow="visible" viewbox="0 0 212 161" color-interpolation-filters="sRGB">
            <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5"/>
            </filter>
            <image xlink:href="test_form_2.jpeg" filter="url(#svgBlur)" width="212px" height="161px"/>
          </svg>
        </div>
      </td>
      <td><img id="img4" class="internal default" src="test_form_2_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", Lucida, Arial, Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -webkit-filter:blur(5px);
  -ms-filter:blur(5px);
  filter:blur(5px); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 0 1.286em;
  height: 100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
  </filter>
</svg>
```

{{EmbedLiveSample('blur','100%','236px','','', 'no-codepen')}}

#### brightness()

{{cssxref("filter-function/brightness()", "brightness()")}} 函数将线性乘法器应用于输入图像，使其看起来或多或少地变得明亮。值为 `0%` 将创建全黑图像。值为 `100%` 会使输入保持不变。其他值是效果的线性乘数。如果值大于 `100%` 提供更明亮的结果。若没有设置值，默认为 `1`。

```css
filter: brightness(2)
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="brightness">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]"/>
      <feFuncG type="linear" slope="[amount]"/>
      <feFuncB type="linear" slope="[amount]"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form.jpg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 286 217" color-interpolation-filters="sRGB">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="2"/>
        <feFuncB type="linear" slope="2"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="test_form.jpg" filter="url(#brightness)" width="286px" height="217px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:brightness(2);
  -webkit-filter:brightness(2);
  -ms-filter:brightness(2);
  filter:brightness(2); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  height:100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('brightness','100%','231px','','', 'no-codepen')}}

#### contrast()

{{cssxref("filter-function/contrast()", "contrast()")}} 函数可调整输入图像的对比度。值是 `0%` 的话，图像会全黑。值是 `100%`，图像不变。值可以超过 `100%`，意味着会运用更低的对比。若没有设置值，默认是 `1`。

```css
filter: contrast(200%)
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_3.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_3.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151" color-interpolation-filters="sRGB">
 <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="test_form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_3_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:contrast(200%);
  -webkit-filter:contrast(200%);
  -ms-filter:contrast(200%);
  filter:contrast(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('contrast','100%','203px','','', 'no-codepen')}}

#### drop-shadow()

{{cssxref("filter-function/drop-shadow()", "drop-shadow()")}} 函数对输入图像应用阴影效果。阴影可以设置模糊度的，以特定颜色画出的遮罩图的偏移版本，最终合成在图像下面。函数接受 `<shadow>`（在 [CSS3 背景](https://www.w3.org/TR/css-backgrounds-3/#typedef-shadow)中定义）类型的值，除了 `inset` 和 `spread` 关键字。该函数与已有的 {{cssxref("box-shadow")}} 属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。`<shadow>` 参数如下：

- `<offset-x>` `<offset-y>`（必须）
  - : 这是设置阴影偏移量的两个 {{cssxref("&lt;length&gt;")}} 值。 `<offset-x>` 设定水平方向距离，负值会使阴影出现在元素左边。 `<offset-y>` 设定垂直距离，负值会使阴影出现在元素上方。查看 {{cssxref("&lt;length&gt;")}} 了解可能的单位。
    如果两个值都是 `0`，则阴影出现在元素正后面（如果设置了`<blur-radius>` 且/或 `<spread-radius>` 也会有模糊效果）。
- `<blur-radius>` {{Optional_Inline}}
  - : 这是第三个 {{cssxref("&lt;length&gt;")}} 值。值越大，越模糊，所以阴影可以变得更大或更淡。不允许负值。若未设定，默认是 `0`（则阴影的边界很锐利）。
- `<color>` {{Optional_Inline}}
  - : 查看 {{cssxref("&lt;color&gt;")}} 了解该值可能的关键字和标记。若未设定，颜色值基于浏览器 —— 通常是 {{cssxref("&lt;color&gt;")}} 属性的值，但请注意，在这种情况下，Safari 当前会绘制透明阴影。

```css
filter: drop-shadow(16px 16px 10px black)
```

```svg
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/>
    <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
    <feFlood flood-color="[color]"/>
    <feComposite in2="offsetblur" operator="in"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_4.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_4.jpeg" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" id="img3" overflow="visible" viewbox="0 0 213 161" color-interpolation-filters="sRGB">
            <defs>
              <image id="MyImage" xlink:href="test_form_4.jpeg" width="213px" height="161px"/>
            </defs>
            <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="9" dy="9" in="SourceAlpha"/>
              <feGaussianBlur stdDeviation="5"/>
            </filter>
            <use xlink:href="#MyImage" filter="url(#drop-shadow)"/>
            <use xlink:href="#MyImage"/>
          </svg>
        </div>
      </td>
      <td><img id="img4" class="internal default" src="test_form_4_s.jpg" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td><img alt="test_form_4 distorted border - Original image" id="img11" class="internal default" src="test_form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td><img alt="test_form_4 distorted border - Live example" id="img12" class="internal default" src="test_form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" id="img13" overflow="visible" viewbox="0 0 213 161" color-interpolation-filters="sRGB">
            <defs>
              <image id="MyImage2" xlink:href="test_form_4_irregular-shape_opacity-gradient.png" width="213px" height="161px"/>
            </defs>
            <filter id="drop-shadow2" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="5" dy="5.5" in="SourceAlpha"/>
              <feGaussianBlur stdDeviation="2.5"/>
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.8"/>
              </feComponentTransfer>
            </filter>
            <use xlink:href="#MyImage2" filter="url(#drop-shadow2)"/>
            <use xlink:href="#MyImage2"/>
          </svg>
        </div>
      </td>
      <td><img alt="test_form_4 distorted border drop shadow - Static example" id="img14" class="internal default" src="test_form_4_irregular-shape_opacity-gradient_drop-shadow.png" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(16px 16px 10px black);
  -webkit-filter: drop-shadow(16px 16px 10px black);
  -ms-filter: drop-shadow(16px 16px 10px black);
  filter: drop-shadow(16px 16px 10px black);
}
#img12 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -webkit-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -ms-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
#irregular-shape {
  width: 64%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3, #img13 {
  width:100%;
  height:auto;
}
```

{{EmbedLiveSample('drop-shadow','100%','400px','','', 'no-codepen')}}

#### grayscale()

{{cssxref("filter-function/grayscale()", "grayscale()")}}  函数将改变输入图像灰度。`amount` 的值定义了转换的比例。值为 `100%` 则完全转为灰度图像，值为 `0%` 图像无变化。值在 `0%` 到 `100%` 之间，则是效果的线性乘数。若未设置值，默认是 `0`。

```css
filter: grayscale(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_5.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_5.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184" color-interpolation-filters="sRGB">
 <filter id="grayscale">
    <feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </filter>
  <image xlink:href="test_form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_5_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:grayscale(100%);
  -webkit-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  filter:grayscale(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('grayscale','100%','209px','','', 'no-codepen')}}

#### hue-rotate()

{{cssxref("filter-function/hue-rotate()", "hue-rotate()")}} 函数在输入图像上应用色相旋转。`angle` 一值设定图像会被调整的色环角度值。值为 `0deg`，则图像无变化。若值未设置值，默认为 `0deg`。该值虽然没有最大值，超过 `360deg` 的值相当于又绕一圈。

```css
filter: hue-rotate(90deg)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_6.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_6.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190" color-interpolation-filters="sRGB">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="test_form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_6_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
  -ms-filter:hue-rotate(90deg);
  filter:hue-rotate(90deg); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```html
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgHueRotate">
    <feColorMatrix type="hueRotate" values="[angle]"/>
  </filter>
</svg>
```

{{EmbedLiveSample('hue-rotate','100%','221px','','', 'no-codepen')}}

#### invert()

{{cssxref("filter-function/invert()", "invert()")}} 函数反转输入图像。`amount` 的值定义转换的比例。值为 `100%` 则图像完全反转。值为 `0%` 则图像无变化。值在 `0%` 和 `100%` 之间，则是效果的线性乘数。若未设置值，则默认为 `0`。

```css
filter: invert(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_7.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_7.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276" color-interpolation-filters="sRGB">
 <filter id="invert">
    <feComponentTransfer>
        <feFuncR type="table" tableValues="1 0"/>
        <feFuncG type="table" tableValues="1 0"/>
        <feFuncB type="table" tableValues="1 0"/>
    </feComponentTransfer>
 </filter>
 <image xlink:href="test_form_7.jpeg" filter="url(#invert)" width="183px" height="276px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_7_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('invert','100%','407px','','', 'no-codepen')}}

#### opacity()

{{cssxref("filter-function/opacity()", "opacity()")}}  转化图像的透明程度。`amount` 的值定义转换的比例。值为 `0%` 则是完全透明，值为 `100%` 则图像无变化。值在 `0%` 和 `100%` 之间，则是效果的线性乘数。也相当于图像样本乘以数量。若未设置值，则默认为 `1`。该函数与已有的 `opacity` 属性很相似，不同之处在于通过 `filter`，一些浏览器为了提升性能会提供硬件加速。

```css
filter: opacity(50%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_14.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_14.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183" color-interpolation-filters="sRGB">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="test_form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_14_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('opacity','100%','210px','','', 'no-codepen')}}

#### saturate()

{{cssxref("filter-function/saturate()", "saturate()")}} 函数转换图像饱和度。`amount` 的值定义转换的比例。值为 `0%` 则是完全不饱和，值为 `100%` 则图像无变化。其他值是效果的线性乘数。超过 `100%` 则有更高的饱和度。若未设置值，则默认为 `1`。

```css
filter: saturate(200%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_9.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_9.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239" color-interpolation-filters="sRGB">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="test_form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_9_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('saturate','100%','332px','','', 'no-codepen')}}

#### sepia()

{{cssxref("filter-function/sepia()", "sepia()")}} 函数将图像转换为深褐色。`amount` 的值定义转换的比例。值为 `100%` 则完全是深褐色的，值为 `0%` 图像无变化。值在 `0%` 到 `100%` 之间，值是效果的线性乘数。若未设置值，则默认为 `0`。

```css
filter: sepia(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_12.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_12.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194" color-interpolation-filters="sRGB">
 <filter id="sepia">
    <feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/>
 </filter>
 <image xlink:href="test_form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" />
</svg><div></td>
      <td><img id="img4" class="internal default" src="test_form_12_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('sepia','100%','229px','','', 'no-codepen')}}

## 复合函数

你可以组合任意数量的函数来控制渲染。下面的例子可以增强图像的对比度和亮度。

```css
filter: contrast(175%) brightness(103%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img id="img1" class="internal default" src="test_form_8.jpeg" style="width: 100%;" /></td>
      <td><img id="img2" class="internal default" src="test_form_8.jpeg" style="width: 100%;" /></td>
      <td><img id="img4" class="internal default" src="test_form_8_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -ms-filter: contrast(175%) brightness(103%);
  filter: contrast(175%) brightness(103%);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('Combining_functions','100%','209px','','', 'no-codepen')}}

## 正式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用 filter 函数

下面显示了使用预定义功能的示例。有关特定示例，请参见每个功能。

```css
.mydiv {
  filter: grayscale(50%);
}

/* Gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

### 应用 SVG filter

将 URL 函数与 SVG 资源一起使用的示例如下：

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 HTML 内容中应用 SVG 效果](/zh-CN/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- {{cssxref("mask")}} 属性
- [SVG](/zh-CN/docs/Web/SVG)
