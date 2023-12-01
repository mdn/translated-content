---
title: filter
slug: Web/CSS/filter
---

{{CSSRef}}{{SeeCompatTable}}

## Описание

[CSS](/ru/docs/Web/CSS) свойство **`filter`** позволяет вам применять к элементу такие графические эффекты, как размытие и смещение цвета. Фильтры обычно используются для регулировки рендеринга изображений, фонов и рамок.

В стандарт CSS включены несколько функций, которые обеспечивают предопределённые эффекты. Вы также можете ссылаться на SVG фильтр с URL-адресом на [элемент фильтра SVG](/ru/docs/Web/SVG/Element/filter).

> **Примечание:** Старые версии (с 4.0 до 9.0) браузера Windows Internet Explorer поддерживают нестандартный ["filter"](<http://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx>), который с тех пор устарел.

{{cssinfo}}

## Синтаксис

```css
filter: url(resources.svg);
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

/* Применение нескольких фильтров */
filter: contrast(175%) brightness(3%);

/* Глобальные значения */
filter: inherit;
filter: initial;
filter: unset;
```

С помощью функции, используйте:

```
filter: <filter-function> [<filter-function>]* | none
```

Для ссылки на SVG {{SVGElement("filter")}} элемент, используйте:

```
filter: url(svg-url#element-id)
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

Примеры использования предопределённых функций показаны ниже. См. каждую функцию для конкретного примера.

```css
.mydiv {
  filter: grayscale(50%);
}

/* сделать все изображения серыми на 50% и размыть на 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

Примеры использования функции URL с SVG ресурсом показаны ниже.

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## Функции

Для использования CSS-свойства `filter`, вы указываете значение для одной из выбранных функций. Если это значение недействительно, функция возвращает "none." За исключением тех случаев, когда функции, которые принимают значение, выраженное в процентах (34%), также принимают значение, выраженное как десятичная дробь (0.34).

### `url()`

The url() function takes the location of an XML file that specifies an SVG filter, and may include an anchor to a specific filter element.

```css
filter: url(resources.svg#c1);
```

### `blur() [размытие]`

Applies a Gaussian blur to the input image. The value of 'radius' defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value `0` is used. The parameter is specified as a CSS length, but does not accept percentage values.

```css
filter: blur(5px);
```

```html hidden
  <table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg id="img3" viewbox="0 0 233 176">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%" >
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
  <image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" x="5%" y="5%" width="212px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: blur(5px);
  -webkit-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

```html
<svg
  style="position: absolute; top: -99999px"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
</svg>
```

{{EmbedLiveSample('blur_example','100%','236px','')}}

### `brightness() [яркость]`

Applies a linear multiplier to input image, making it appear more or less bright. A value of `0%` will create an image that is completely black. A value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over `100%` are allowed, providing brighter results. If the 'amount' parameter is missing, a value of `1` is used.

```css
filter: brightness(0.5);
```

```html
<svg
  style="position: absolute; top: -99999px"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="brightness">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" />
      <feFuncG type="linear" slope="[amount]" />
      <feFuncB type="linear" slope="[amount]" />
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 286 217">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="2"/>
        <feFuncB type="linear" slope="2"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3708/Test_Form.jpg" filter="url(#brightness)" width="286px" height="217px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3709/Test_Form_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: brightness(2);
  -webkit-filter: brightness(2);
  -o-filter: brightness(2);
  -ms-filter: brightness(2);
  filter: brightness(2);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('brightness_example','100%','231px','')}}

### `contrast() [контраст]`

Adjusts the contrast of the input. A value of `0%` will create an image that is completely black. A value of `100%` leaves the input unchanged. Values of amount over `100%` are allowed, providing results with less contrast. If the 'amount' parameter is missing, a value of `1` is used.

```css
filter: contrast(200%);
```

```html
<svg
  style="position: absolute; top: -99999px"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR
        type="linear"
        slope="[amount]"
        intercept="-(0.5 * [amount]) + 0.5" />
      <feFuncG
        type="linear"
        slope="[amount]"
        intercept="-(0.5 * [amount]) + 0.5" />
      <feFuncB
        type="linear"
        slope="[amount]"
        intercept="-(0.5 * [amount]) + 0.5" />
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_3.jpeg" id="img1" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_3.jpg" id="img2" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151">
 <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3712/Test_Form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: contrast(200%);
  -webkit-filter: contrast(200%);
  -o-filter: contrast(200%);
  -ms-filter: contrast(200%);
  filter: contrast(200%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('contrast_example','100%','203px','')}}

### `drop-shadow() [тень]`

Applies a drop shadow effect to the input image. A drop shadow is effectively a blurred, offset version of the input image's alpha mask drawn in a particular color, composited below the image. The function accepts a parameter of type \<shadow> (defined in CSS3 Backgrounds), with the exception that the 'inset' keyword is not allowed. This function is similar to the more established {{cssxref("box-shadow")}} property; the difference is that with filters, some browsers provide hardware acceleration for better performance. The parameters of the `<shadow>` parameter are as follows.

- `<offset-x>` `<offset-y>` (required)
  - : These are two {{cssxref("&lt;length&gt;")}} values to set the shadow offset. `<offset-x>` specifies the horizontal distance. Negative values place the shadow to the left of the element. `<offset-y>` specifies the vertical distance. Negative values place the shadow above the element. See {{cssxref("&lt;length&gt;")}} for possible units.
    If both values are `0`, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).
- `<blur-radius>` (optional)
  - : This is a third {{cssxref("&lt;length&gt;")}} value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be `0` (the shadow's edge is sharp).
- `<spread-radius>` (optional)
  - : This is a fourth {{cssxref("&lt;length&gt;")}} value. Positive values will cause the shadow to expand and grow bigger, and negative values will cause the shadow to shrink. If not specified, it will be `0` (the shadow will be the same size as the element).
    Note: Webkit, and maybe other browsers, do not support this 4th length; it will not render if added.
- `<color>` (optional)
  - : See {{cssxref("&lt;color&gt;")}} values for possible keywords and notations. If not specified, the color depends on the browser. In Gecko (Firefox), Presto (Opera) and Trident (Internet Explorer), the value of the {{cssxref("color")}} property is used. On the other hand, WebKit's shadow is transparent and therefore useless if `<color>` is omitted.

```css
filter: drop-shadow(16px 16px 10px black);
```

```html
<svg
  style="position: absolute; top: -999999px"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]" />
    <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur" />
    <feFlood flood-color="[color]" />
    <feComposite in2="offsetblur" operator="in" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_4.jpeg" id="img1" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4.jpg" id="img2" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 239 187">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
    <feOffset dx="16" dy="16"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
 </filter>
 <image xlink:href="/files/3714/Test_Form_4.jpeg" filter="url(#drop-shadow)" width="213px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_4_s.jpg" id="img4" class="internal default" src="/files/3715/Test_Form_4_s.jpg" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td><img alt="Test_Form_4 distorded border - Original image" id="img11" class="internal default" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4 distorded border - Live example" id="img12" class="internal default" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" id="img13" viewbox="0 0 239 187">
            <filter id="drop-shadow2">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="8" dy="10"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <image xlink:href="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" filter="url(#drop-shadow2)" width="213px" height="161px" />
          </svg>
        <div>
      </td>
      <td><img alt="Test_Form_4 distorded border drop shadow - Static example" id="img14" class="internal default" src="/files/8469/Test_Form_4_irregular-shape_opacity-gradient_drop-shadow.png" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: drop-shadow(16px 16px 10px black);
  -webkit-filter: drop-shadow(16px 16px 10px black);
  -o-filter: drop-shadow(16px 16px 10px black);
  -ms-filter: drop-shadow(16px 16px 10px black);
  filter: drop-shadow(16px 16px 10px black);
}
#img12 {
  width: 100%;
  height: auto;
  -moz-filter: drop-shadow(8px 9px 5px rgba(0, 0, 0, 0.8));
  -webkit-filter: drop-shadow(8px 9px 5px rgba(0, 0, 0, 0.8));
  -o-filter: drop-shadow(8px 9px 5px rgba(0, 0, 0, 0.8));
  -ms-filter: drop-shadow(8px 9px 5px rgba(0, 0, 0, 0.8));
  filter: drop-shadow(8px 9px 5px rgba(0, 0, 0, 0.8));
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
  width: 25%;
  height: auto;
}
#img3,
#img13 {
  height: 100%;
}
```

{{EmbedLiveSample('shadow_example','100%','300px','')}}

### `grayscale() [оттенки серого]`

Converts the input image to grayscale. The value of 'amount' defines the proportion of the conversion. A value of `100%` is completely grayscale. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. If the 'amount' parameter is missing, a value of `0` is used.

```css
filter: grayscale(100%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_5.jpeg" id="img1" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_5.jpg" id="img2" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184">
 <filter id="grayscale">
    <feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </filter>
  <image xlink:href="/files/3716/Test_Form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" />
</svg><div></td>
      <td><img alt="Test_Form_5_s.jpg" id="img4" class="internal default" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('grayscale_example','100%','209px','')}}

### `hue-rotate() [изменение оттенка]`

Applies a hue rotation on the input image. The value of `angle` defines the number of degrees around the color circle the input samples will be adjusted. A value of `0deg` leaves the input unchanged. If the `angle` parameter is missing, a value of `0deg` is used. Though there is no maximum value, the effect of values above `360deg` wraps around.

```css
filter: hue-rotate(90deg);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_6.jpeg" id="img1" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_6.jpg" id="img2" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img alt="Test_Form_6_s.jpg" id="img4" class="internal default" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: hue-rotate(90deg);
  -webkit-filter: hue-rotate(90deg);
  -o-filter: hue-rotate(90deg);
  -ms-filter: hue-rotate(90deg);
  filter: hue-rotate(90deg);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

```html
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgHueRotate" >
    <feColorMatrix type="hueRotate" values="[angle]" />
  <filter />
</svg>
```

{{EmbedLiveSample('huerotate_example','100%','221px','')}}

### `invert() [инвертирование]`

Inverts the samples in the input image. The value of `amount` defines the proportion of the conversion. A value of `100%` is completely inverted. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. If the `amount` parameter is missing, a value of `0` is used.

```css
filter: invert(100%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_7.jpeg" id="img1" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_7.jpg" id="img2" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276">
 <filter id="invert">
    <feComponentTransfer>
        <feFuncR type="table" tableValues="1 0"/>
        <feFuncG type="table" tableValues="1 0"/>
        <feFuncB type="table" tableValues="1 0"/>
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3720/Test_Form_7.jpeg" filter="url(#invert)" width="183px" height="276px" />
</svg><div></td>
      <td><img alt="Test_Form_7_s.jpg" id="img4" class="internal default" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('invert_example','100%','407px','')}}

### `opacity() [непрозрачность]`

Applies transparency to the samples in the input image. The value of `amount` defines the proportion of the conversion. A value of `0%` is completely transparent. A value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. This is equivalent to multiplying the input image samples by amount. If the `amount` parameter is missing, a value of `1` is used. This function is similar to the more established {{Cssxref("opacity")}} property; the difference is that with filters, some browsers provide hardware acceleration for better performance.

```css
filter: opacity(50%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_14.jpeg" id="img1" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_14.jpg" id="img2" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" />
</svg><div></td>
      <td><img alt="Test_Form_14_s.jpg" id="img4" class="internal default" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -o-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('opacity_example','100%','210px','')}}

### `saturate() [насыщенность]`

Saturates the input image. The value of `amount` defines the proportion of the conversion. A value of `0%` is completely un-saturated. A value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of amount over `100%` are allowed, providing super-saturated results. If the `amount` parameter is missing, a value of `1` is used.

```css
filter: saturate(200%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_9.jpeg" id="img1" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_9.jpg" id="img2" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" />
</svg><div></td>
      <td><img alt="Test_Form_9_s.jpg" id="img4" class="internal default" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -o-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('saturate_example','100%','332px','')}}

### `sepia() [сепия]`

Converts the input image to sepia. The value of `amount` defines the proportion of the conversion. A value of 100% is completely sepia. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. If the `amount` parameter is missing, a value of `0` is used.

```css
filter: sepia(100%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_12.jpeg" id="img1" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_12.jpg" id="img2" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194">
 <filter id="sepia">
    <feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/>
 </filter>
 <image xlink:href="/files/3727/Test_Form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" />
</svg><div></td>
      <td><img alt="Test_Form_12_s.jpg" id="img4" class="internal default" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -o-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('sepia_example','100%','229px','')}}

## Комбинирование функций

You may combine any number of functions to manipulate the rendering. The following example enhances the contrast and brightness of the image.

```css
filter: contrast(175%) brightness(103%);
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Test_Form_8.jpeg"
          id="img1"
          class="internal default"
          src="/files/3729/Test_Form_8.jpeg"
          style="width: 100%;" />
      </td>
      <td>
        <img
          alt="Test_Form_8.jpg"
          id="img2"
          class="internal default"
          src="/files/3729/Test_Form_8.jpeg"
          style="width: 100%;" />
      </td>
      <td>
        <img
          alt="Test_Form_8_s.jpg"
          id="img4"
          class="internal default"
          src="/files/3730/Test_Form_8_s.jpeg"
          style="width: 100%;" />
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height: 100%;
}
body {
  font:
    14px/1.286 "Lucida Grande",
    "Lucida Sans Unicode",
    "DejaVu Sans",
    Lucida,
    Arial,
    Helvetica,
    sans-serif;
  color: rgb(51, 51, 51);
  height: 100%;
  overflow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -o-filter: contrast(175%) brightness(103%);
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
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{EmbedLiveSample('combination_example','100%','209px','')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Applying SVG effects to HTML content](/ru/docs/Applying_SVG_effects_to_HTML_content)
- The {{Cssxref("mask")}} property
- [SVG](/ru/docs/Web/SVG)
- [Understanding CSS filters](http://www.html5rocks.com/en/tutorials/filters/understanding-css/), HTML5Rocks! article
- [CSS 3 filters](http://techstream.org/Web-Design/CSS3-Image-Filters) Tech Stream article
- [CSS filters](http://davidwalsh.name/css-filters) By David Walsh
