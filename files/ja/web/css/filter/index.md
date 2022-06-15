---
title: filter
slug: Web/CSS/filter
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - SVG
  - SVG フィルター
  - recipe:css-property
browser-compat: css.properties.filter
translation_of: Web/CSS/filter
---
{{CSSRef}}

**`filter`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。

CSS 標準に含まれているものは、定義済みの効果を実現するためのいくつかの関数です。[SVG の filter 要素](/ja/docs/Web/SVG/Element/filter)への URL で SVG フィルターを参照することもできます。

{{EmbedInteractiveExample("pages/css/filter.html")}}

## 構文

```css
/* SVG フィルターへの URL */
filter: url("filters.svg#filter-id");

/* <filter-function> 値 */
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

/* 複数のフィルター */
filter: contrast(175%) brightness(3%);

/* フィルターを使用しない */
filter: none;

/* グローバル値 */
filter: inherit;
filter: initial;
filter: revert;
filter: unset;
```

次のように関数と共に使用してください。

```css
filter: <filter-function> [<filter-function>]* | none
```

SVG の {{SVGElement("filter")}} 要素への参照の場合は、次のようにしてください。

```css
filter: url(file.svg#filter-element-id)
```

### 補間

最初のフィルターと最後のフィルターの両方が同じ長さの関数リストであり、 {{cssxref("url()","url()")}} を持たない場合、それぞれのフィルター関数はその固有の規則に従って補間されます。長さが異なる場合は、長い方のリストから欠落している等価なフィルター関数が、空白値を使って短い方のリストの最後に追加され、すべてのフィルター関数がその固有の規則に従って補間されます。一方のフィルターが `none` である場合は、フィルター関数の既定値を用いて、もう一方のフィルター関数のリストに置き換えられ、すべてのフィルター関数がその固有の規則に従って補間されます。それ以外の場合は、離散補間が使用されます。

## 関数

`filter` プロパティは `none` または以下にある関数を一つ以上使って指定します。いずれかの関数の引数が妥当でない場合、関数は `none` を返します。特に示す場合を除いて、パーセント記号付きの値 (`34%` など) を取る関数は、10進数の値 (`0.34` など) も受け付けます。

単一の `filter` プロパティに2つ以上の関数を指定した場合、同じフィルター関数を2つ以上の `filter` プロパティに別々に適用した場合とは異なる結果になります。

### SVG フィルター

#### url()

外部 XML ファイルに埋め込むことができる [SVG フィルター](/ja/docs/Web/SVG/Element/filter)を指す URI を取ります。

```css
filter: url(resources.svg#c1)
```

### フィルター関数

#### blur()

{{cssxref("filter-function/blur()", "blur()")}} 関数は、入力画像にガウスぼかしを適用します。 `radius` の値は、ガウス関数の標準偏差の値、つまり画面上のいくつのピクセルが互いに溶け込むかを定義します。補間のための空白値は `0` です。 この引数は CSS の長さとして指定されますが、パーセント値は受け付けません。

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

{{cssxref("filter-function/brightness()", "brightness()")}} 関数は、入力画像に線形乗数を適用して明るさを明るくしたり暗くしたりします。 `0%` の値を設定すると、完全な黒の画像が作成されます。 `100%` の値を指定すると、入力は変更されません。その他の値は効果の線形乗数です。 `100%` を超える値が許されており、より明るい結果が得られます。補間時の空白値は `1` です。

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

{{cssxref("filter-function/contrast()", "contrast()")}} 関数は、入力画像のコントラストを調整します。 `0%` の値を指定すると完全にグレーの画像が作成されます。 `100%` の値を指定すると、入力画像は変更されません。 `100%` を超える値を指定すると、よりコントラストの高い結果が得られます。補完時の空白値は `1` です。

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

{{cssxref("filter-function/drop-shadow()", "drop-shadow()")}} 関数は、入力画像に効果を適用します。ドロップシャドウとは、入力画像のアルファマスクを特定の色で、ずらしてぼやかして描画したものを画像の下に合成したものです。この関数は `<shadow>` 型 ([CSS3 Backgrounds](https://www.w3.org/TR/css-backgrounds-3/#typedef-shadow) で定義) の引数を受け取りますが、 `inset` キーワードは使用できません。この関数は、より確立された {{cssxref("box-shadow")}} プロパティに似ています。違いはフィルターであること、一部のブラウザーでは性能を改善するためにハードウェアアクセラレーションを提供していることです。 `<shadow>` 引数の値は次の通りです。

- `<offset-x>` `<offset-y>` (必須)
  - : 二つの {{cssxref("&lt;length&gt;")}} 値で、影をずらす大きさを設定します。 `<offset-x>` は水平の距離を指定します。負の数の場合、影を要素の左側に配置します。 `<offset-y>` は垂直の距離を指定します。負の数の場合、影を要素の上に配置します。利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。
 両方の値が `0` である場合は、影は要素の背後に配置されます (そして、 `<blur-radius>` や `<spread-radius>` を設定することで、ぼかしの効果を生成することができます)。</dd>
- `<blur-radius>` (オプション)
  - : これは三番目の {{cssxref("&lt;length&gt;")}} 値です。この値が大きくなるほど、ぼかしが大きくなり、影がより大きく薄くなります。負の数を指定することはできません。指定されなかった場合は、 `0` (影の縁がはっきりしている) になります。</dd>
- `<color>` (オプション)
  - : 指定可能なキーワードや記述方法は {{cssxref("&lt;color&gt;")}} 値を参照してください。指定されなかった場合は、使用される色はブラウザーに依存します。 - 普通は {{cssxref("&lt;color&gt;")}} プロパティの値ですが、 Safari では現在のところ、この場合には透明な影を描くことに注意してください。</dd>
</dl>

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

{{cssxref("filter-function/grayscale()", "grayscale()")}} 関数は入力画像をグレースケールに変換します。 `amount` の値は変換の程度を定義します。 `100%` の値は完全にグレースケールになります。 `0%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。補完時の空白値は `0` です。

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

{{cssxref("filter-function/hue-rotate()", "hue-rotate()")}} 関数は、入力画像の色相を回転させます。 `angle` の値は、色相環を何度回転させて入力サンプルを調整するかを定義します。 `0deg` の値を指定すると入力は変更されません。補完時の空白値は `0` です。最大値はありませんが、 `360deg` を超える値の以上の値の場合は回り込みになります。

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

{{cssxref("filter-function/invert()", "invert()")}} 関数は、入力画像のサンプルを反転します。 `amount` の値は、変換の度合を定義します。 `100%` の値を指定すると、完全に反転されます。 `0%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。補完時の空白値は `0` です。

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

{{cssxref("filter-function/opacity()", "opacity()")}} 関数は、入力画像のサンプルに透過度を適用します。 `amount` の値は、変換の度合を定義します。 `0%` の値を指定すると、完全に透明になります。 `100%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。これは、入力画像のサンプルに量を乗算することに相当します。補完時の空白値は `1` です。この関数は、より確立された {{cssxref("opacity")}} プロパティに似ていますが、フィルターの場合、一部のブラウザーでは性能を向上させるためにハードウェアアクセラレーションを提供する点が異なります。

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

{{cssxref("filter-function/saturate()", "saturate()")}} 関数は、入力画像の彩度を変化させます。 `amount` の値は、変換の度合を定義します。 `0%` の値を指定すると、無彩色になります。 `100%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。 `100%` を超える値を指定することもでき、彩度を増した結果になります。補完時の空白値は `1` です。

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

{{cssxref("filter-function/sepia()", "sepia()")}} 関数は、入力画像をセピア調にします。 `amount` の値は、変換の度合を定義します。 `100%` の値を指定すると、完全にセピア調になります。 `0%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。補完時の空白値は `0` です。

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

<h2 id="Combining_functions">関数の組み合わせ</h2>

いくつかの関数を組み合わせてレンダリングを操作することができます。次の例では、画像のコントラストと明るさを強調しています。

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

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルター関数の適用

定義済み関数を使用した例が以下にあります。個別の例についてはそれぞれの関数を参照してください。

```css
.mydiv {
  filter: grayscale(50%);
}

/* Gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

### SVG フィルターの適用

URL 関数を使用して SVG リソースを使用した例は以下の通りです。

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML コンテンツへの SVG 効果の適用](/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- {{cssxref("mask")}} プロパティ
- [SVG](/ja/docs/Web/SVG)
