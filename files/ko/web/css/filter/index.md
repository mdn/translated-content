---
title: filter
slug: Web/CSS/filter
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`filter`** 속성은 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용합니다. 보통 필터는 이미지, 배경, 테두리 렌더링을 조정하는 데 쓰입니다.

CSS 표준은 미리 정의된 효과를 내는 몇 가지 함수를 포함하고 있습니다. [SVG 필터 요소](/ko/docs/Web/SVG/Element/filter)를 가리키는 URL 참조를 사용하여 SVG 필터를 적용할 수도 있습니다.

{{EmbedInteractiveExample("pages/css/filter.html")}}

## 구문

```css
/* SVG 필터를 가리키는 URL */
filter: url("filters.svg#filter-id");

/* <filter-function> 값 */
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

/* 다중 값 */
filter: contrast(175%) brightness(3%);

/* 필터 없음 */
filter: none;

/* 전역 값 */
filter: inherit;
filter: initial;
filter: unset;
```

함수를 사용하려면 다음 구문을 사용하세요.

```
filter: <filter-function> [<filter-function>]* | none
```

SVG {{SVGElement("filter")}} 요소에 대한 참조를 사용하려면 다음 구문을 사용하세요.

```
filter: url(svg-url#element-id)
```

### 보간

보간의 처음과 끝 필터의 함수 목록 길이가 같고, 그 안에 {{cssxref("&lt;url&gt;")}} 값이 없으면, 각 필터 함수는 스스로의 특정 규칙을 따라 보간됩니다. 함수의 길이가 서로 다를 때는 긴 필터 목록에만 존재하는 필터를 짧은 필터 목록에 추가하며, 이 때 추가된 필터의 값으로는 누락 값(누락 시의 기본값)을 사용합니다. 이후 각 필터 함수는 서로 동일한 길이일 때와 같은 방식으로 보간합니다. 만약 한쪽의 필터가 `none`일 경우 다른 쪽 필터 목록을 모두 가져오고, 각각에 누락 값을 대입한 후 보간합니다. 이 외의 경우에는 이산적 보간을 사용합니다.

## 함수

`filter` 속성은 `none` 또는 아래의 함수를 하나 이상 사용해 지정할 수 있습니다. 어떤 함수의 매개변수가 유효하지 않다면, 그 함수는 `none`을 반환합니다. 따로 명시하지 않으면 백분율 값(`34%` 등)을 받는 함수는 그 백분율의 소수 표기(`0.34` 등)도 받을 수 있습니다.

### SVG 필터

#### `url()`

[SVG 필터](/ko/docs/Web/SVG/Element/filter)를 가리키는 URI를 받습니다. 외부 XML 파일에 포함된 필터도 가능합니다.

```css
filter: url(resources.svg#c1);
```

### 필터 함수

#### `blur()`

{{cssxref("filter-function/blur", "blur()")}} 함수는 주어진 이미지에 가우시안 블러를 적용합니다. `radius` 값은 정규 분포의 표준 편차, 즉 화면에서 혼합할 픽셀의 수를 지정하므로 값이 클수록 이미지가 흐려집니다. 보간 시 누락값은 `0`입니다. 매개변수는 CSS 길이로 명시되어 있지만 백분율 값은 받지 않습니다.

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

{{EmbedLiveSample('blur_example','100%','236px','','', 'no-codepen')}}

#### `brightness()`

{{cssxref("filter-function/brightness", "brightness()")}} 함수는 주어진 이미지에 선형 배수를 적용하여 이미지를 밝거나 어둡게 표시합니다. `0%`일 경우 완전히 검은색 이미지가 되고, `100%`일 경우 이미지가 그대로 유지되며, 이외의 값은 효과의 선형 배수로 작용합니다. `100%`보다 큰 값도 허용되며, 이때는 더 밝은 이미지가 생성됩니다. 보간 시 누락값은 `1`입니다.

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

{{EmbedLiveSample('brightness_example','100%','231px','','', 'no-codepen')}}

#### `contrast()`

{{cssxref("filter-function/contrast", "contrast()")}} 함수는 주어진 이미지의 대비를 조정합니다. `0%`일 경우 완전히 회색 이미지가 되고, `100%`일 경우 이미지가 그대로 유지됩니다. `100%`보다 큰 값도 허용되며, 이때는 대비가 더 큰 이미지가 생성됩니다. 보간 시 누락값은 `1`입니다.

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

{{EmbedLiveSample('contrast_example','100%','203px','','', 'no-codepen')}}

#### `drop-shadow()`

{{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 함수는 주어진 이미지에 그림자 효과를 적용합니다. 이때 추가하는 그림자는, 주어진 이미지의 알파 마스크에 특정한 색상과 오프셋, 흐림 효과를 적용하고 이미지 밑에 합성한 것입니다. 이 함수는 `inset` 키워드를 제외하고 (CSS3 Backgrounds에 정의된) `<shadow>` 자료형의 매개변수를 그대로 받을 수 있습니다. `drop-shadow()`는 보다 확립된 {{cssxref("box-shadow")}} 속성과 비슷하지만, 일부 브라우저에서는 필터를 사용했을 때 성능 향상을 위해 하드웨어 가속을 사용한다는 차이점이 있습니다. `<shadow>` 값의 매개변수는 다음과 같습니다.

- `<offset-x>` `<offset-y>` (필수)
  - : 그림자 오프셋을 설정하는 두 {{cssxref("&lt;length&gt;")}} 값입니다. `<offset-x>`는 가로 거리를 지정하며, 음수일 경우 그림자가 왼쪽에 배치됩니다. `<offset-y>`는 세로 거리를 지정하며, 음수일 경우 그림자가 위쪽에 배치됩니다. 가능한 단위는 {{cssxref("&lt;length&gt;")}}를 참조하세요.
    두 값이 모두 `0`이면 그림자가 요소 바로 밑에 배치되며, `<blur-radius>`나 `<spread-radius>`를 설정한 경우 흐림 효과를 표시할 수 있습니다.
- `<blur-radius>` (선택)
  - : 세 번째 {{cssxref("&lt;length&gt;")}} 값입니다. 클수록 흐려지는 반경이 커지고 그림자가 옅어집니다. 음수 값은 사용할 수 없습니다. 값을 지정하지 않으면 `0`으로 취급하여 그림자 가장자리가 날카로워집니다.
- `<color>` (선택)
  - : 가능한 키워드 및 표기법은 {{cssxref("&lt;color&gt;")}}를 참조하세요. 값을 지정하지 않았을 때의 색상은 브라우저에 따라 다릅니다. 보통 {{cssxref("&lt;color&gt;")}} 속성의 값을 사용하지만, 현재 사파리는 투명한 그림자를 그리는 것을 주의하세요.

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

{{EmbedLiveSample('shadow_example','100%','300px','','','no-codepen')}}

#### `grayscale()`

{{cssxref("filter-function/grayscale", "grayscale()")}} 함수는 주어진 이미지를 흑백으로 변환합니다. `amount` 값은 흑백으로 전환하는 비율을 지정합니다. `100%`일 경우 완전히 흑백 이미지가 되고, `0%`일 경우 이미지가 그대로 유지되며, 그 사이의 값은 효과의 선형 배수로 작용합니다. 보간 시 누락 값은 `0`입니다.

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

{{EmbedLiveSample('grayscale_example','100%','209px','','','no-codepen')}}

#### `hue-rotate()`

{{cssxref("filter-function/hue-rotate", "hue-rotate()")}} 함수는 주어진 이미지에 색조 회전을 적용합니다. `angle` 값은 입력 샘플을 조절할 색상환 각도입니다. `0deg`일 경우 이미지가 그대로 유지됩니다. 보간 시 누락 값은 `0`입니다. 최댓값이 존재하지는 않지만, `360deg` 이상의 값은 `0deg`와 `360deg` 사이를 순환합니다.

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

{{EmbedLiveSample('huerotate_example','100%','221px','','','no-codepen')}}

#### `invert()`

{{cssxref("filter-function/invert", "invert()")}} 함수는 주어진 이미지의 색을 반전합니다. `amount` 값이 변형 정도를 지정합니다. `100%`일 경우 색을 정반대로 바꾸고, `0%`일 경우 이미지를 그대로 유지하며, 그 사이의 값은 효과의 선형 배수로 작용합니다. 보간 시 누락 값은 `0`입니다.

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

{{EmbedLiveSample('invert_example','100%','407px','','','no-codepen')}}

#### `opacity()`

{{cssxref("filter-function/opacity", "opacity()")}} 함수는 주어진 이미지의 불투명도를 설정합니다. `amount` 값이 변형 정도를 지정합니다. `0%`일 경우 완전히 투명해지고, `100%`일 경우 이미지를 그대로 유지하며, 그 사이의 값은 효과의 선형 배수로 작용합니다. 즉 주어진 이미지 샘플을 `amount`와 곱하는 것과 같습니다. 보간 시 누락 값은 `1`입니다. 이 함수는 보다 확립된 {{cssxref("opacity")}} 속성과 비슷하지만, 일부 브라우저에서는 필터를 사용했을 때 성능 향상을 위해 하드웨어 가속을 사용한다는 차이점이 있습니다.

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

{{EmbedLiveSample('opacity_example','100%','210px','','','no-codepen')}}

#### `saturate()`

{{cssxref("filter-function/saturate", "saturate()")}} 함수는 주어진 이미지의 채도를 변경합니다. `amount` 값이 변형 정도를 지정합니다. `0%`일 경우 완전히 무채색이 되고, `100%`일 경우 이미지를 그대로 유지하며, 그 사이의 값은 효과의 선형 배수로 작용합니다. `100%`보다 큰 값도 허용되며, 이때는 원본보다 채도가 큰 이미지를 생성합니다. 보간 시 누락 값은 `1`입니다.

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

{{EmbedLiveSample('saturate_example','100%','332px','','','no-codepen')}}

#### `sepia()`

{{cssxref("filter-function/sepia", "sepia()")}} 함수는 주어진 이미지를 세피아로 변환합니다. `amount` 값이 변형 정도를 지정합니다. `100%`일 경우 완전히 세피아가 되고, `0%`에서는 이미지를 그대로 유지하며, 그 사이의 값은 효과의 선형 배수로 작용합니다. 보간 시 누락 값은 `0`입니다.

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

{{EmbedLiveSample('sepia_example','100%','229px','','','no-codepen')}}

## 함수 조합

원하는 만큼 함수를 조합해서 그려지는 모습을 바꿀 수 있습니다. 다음 에제는 이미지의 대비와 밝기를 동시에 높입니다.

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

{{EmbedLiveSample('combination_example','100%','209px','','','no-codepen')}}

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 필터 함수 적용하기

미리 정의된 함수는 다음 예제처럼 사용할 수 있습니다. 각 함수 문서에서 더 자세한 내용을 살펴보세요.

```css
.mydiv {
  filter: grayscale(50%);
}

/* 모든 이미지를 50% 흑백 처리하고 10px 흐리게 */
img {
  filter: grayscale(0.5) blur(10px);
}
```

### SVG 필터 적용하기

URL 함수와 SVG 리소스를 사용하는 방법은 다음과 같습니다.

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTML 콘텐츠에 SVG 효과 적용하기](/ko/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- {{cssxref("mask")}} 속성
- [SVG](/ko/docs/Web/SVG)
- [Understanding CSS filters](http://www.html5rocks.com/en/tutorials/filters/understanding-css/) (HTML5Rocks! 글)
