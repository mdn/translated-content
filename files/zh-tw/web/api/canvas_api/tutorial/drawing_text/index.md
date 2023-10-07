---
title: 使用canvas繪製文字
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

[`canvas`](/zh-TW/HTML/Canvas)元素支援在[標準 HTML 5 特色](http://www.whatwg.org/specs/web-apps/current-work/#text-0)以及少許實驗性的 Mozilla 方法和功能上繪製文字。

文字可以包括任何 Unicode 字元，即使用那些超出「基本多文種平面」的字元也可以。

## 方法概述

<table>
 <tbody>
  <tr>
   <td><code>void <a href="/en/Drawing_text_using_a_canvas#fillText()">fillText</a>(in <a href="/En/DOM/DOMString">DOMString</a> text, in float x, in float y, [optional] in float maxWidth);</code></td>
  </tr>
  <tr>
   <td><a href="/nsIDOMTextMetrics">nsIDOMTextMetrics</a><code> <a href="/en/Drawing_text_using_a_canvas#measureText()">measureText</a>(in DOMString textToMeasure);</code></td>
  </tr>
  <tr>
   <td><code>void <a href="#mozDrawText.28.29">mozDrawText</a>(in DOMString textToDraw); {{ deprecated_inline() }}</code></td>
  </tr>
  <tr>
   <td><code>float <a href="#mozMeasureText.28.29">mozMeasureText</a>(in DOMString textToMeasure);</code><code> {{ deprecated_inline() }}</code></td>
  </tr>
  <tr>
   <td><code>void <a href="#mozPathText.28.29">mozPathText</a>(in DOMString textToPath);</code></td>
  </tr>
  <tr>
   <td><code>void <a href="#mozTextAlongPath.28.29">mozTextAlongPath</a>(in DOMString textToDraw, in boolean stroke);</code></td>
  </tr>
  <tr>
   <td><code>void <a href="/en/Drawing_text_using_a_canvas#strokeText()">strokeText</a>(in DOMString text, in float x, in float y, [optional] in float maxWidth);</code></td>
  </tr>
 </tbody>
</table>

## 屬性

<table>
  <tbody>
    <tr>
      <td class="header">屬性</td>
      <td class="header">型別</td>
      <td class="header">描述</td>
    </tr>
    <tr>
      <td><code>font</code></td>
      <td>
        <code><a href="/En/DOM/DOMString">DOMString</a></code>
      </td>
      <td>
        <p>
          當前的文字樣式被用在繪製文字。該字串使用和
          <a href="/en/CSS/font">CSS font</a
          >（樣式表字型）相同的語法。要改變繪製文字的樣式，只要簡單的改變它的屬性值即可，就像下面展示的，預設的字型是10px（像素）
          sans-serif（字型名稱）
        </p>
        <p>例如:</p>
        <pre class="eval">ctx.font = "20pt Arial";</pre>
      </td>
    </tr>
    <tr>
      <td><code>mozTextStyle</code> {{ deprecated_inline() }}</td>
      <td>
        <code><a href="/En/DOM/DOMString">DOMString</a></code>
      </td>
      <td>
        <p>由上面的Html5<code>字型</code> 屬性取代</p>
      </td>
    </tr>
    <tr>
      <td><code>textAlign</code></td>
      <td>
        <code><a href="/En/DOM/DOMString">DOMString</a></code>
      </td>
      <td>
        <p>當前繪製文字所使用的文字對齊方式。 可使用的值：</p>
        <dl>
          <dt>left</dt>
          <dd>文字靠左對齊。</dd>
          <dt>right</dt>
          <dd>文字靠右對齊。</dd>
          <dt>center</dt>
          <dd>文字置中對齊。</dd>
          <dt>start</dt>
          <dd>
            文字依照行首對齊
            (書寫習慣由左到右的地區就靠左對齊，書寫習慣由右到左的就靠右對齊。).
          </dd>
          <dt>end</dt>
          <dd>
            文字依照行尾對齊（書寫習慣由左到右的地區就靠右對齊，書寫習責由右到左的地區就靠左對齊。）
          </dd>
        </dl>
        <p>預設的值是 <code>start</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>textBaseline</code></td>
      <td>
        <code><a href="/En/DOM/DOMString">DOMString</a></code>
      </td>
      <td>
        <p>當前繪製文字的基線位置 可使用的值：</p>
        <dl>
          <dt>top</dt>
          <dd>基線在字元區塊的頂部（圖中top of the squre位置）。</dd>
          <dt>hanging（懸掛）</dt>
          <dd>
            文字基線在拼音文字頂部的位置（圖中hanging baseline）
            <em>當前仍未支援；會顯示 <strong>alphabetic</strong>代替。</em>
          </dd>
          <dt>middle</dt>
          <dd>文字基線在字元區塊的中間。</dd>
          <dt>alphabetic（拼音文字）</dt>
          <dd>這是一般拼音文字底線的位置。</dd>
          <dt>ideographic（表意文字）</dt>
          <dd>
            文字在表意文字（如漢字）底部的位置
            <em>當前仍未支援；會顯示<strong>alphabetic</strong>代替。</em>
          </dd>
          <dt>bottom</dt>
          <dd>
            基線在拼音文字下伸部的位置
            這與ideographic的基線位置不同，因為表意文字沒有下伸部
          </dd>
        </dl>
        <p>預設使用 <code>alphabetic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

下圖展示了 textBaseline 屬性所支援的各種基線，感謝 [WHATWG](http://www.whatwg.org/).

![top of em squre（字元區塊頂部）大致在字型中所有字母的最頂部位置，hanging basline（懸掛基線）則是在一些特殊（較小的,像是「आ」）字母頂部，middle則是在top of em squre（字元區塊頂部和bottom of em squre（字元區塊底部）的中間，alphabetic（拼音文字）的基線位置則是在一般拼音字母如Á，ÿ，f，Ω的底線位置。ideographic（表意文字）的基線在字元的底部位置，bottom of em squre（字元區塊底部）則大致是字型中所有字母的最底部位置。而top and bottom of the bounding box（上下的區域範圍線）則比這些基線都來得更遠，基於字母的高度可能超過字元區塊頂部和底部的範圍。](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

## 方法

### fillText()

繪製文字使用`font`屬性指定的文字樣式，對齊則使用`textAlign`屬性，而指定基線則使用`textBaseline`. 填充文字當前使用`fillStyle`，而`strokeStyle`則被忽略

> **備註：** 這個方法在 Gecko 1.9.1 (Firefox 3.5)時引進，且是 HTML 5 標準的一部分.

```plain
void fillText(
   in DOMString textToDraw,
   in float x,
   in float y,
   [optional] in float maxWidth
);
```

##### 參數

- `textToDraw`
  - : 將文字繪製到文本中。
- `x`
  - : 繪製位置的 x 座標。
- `y`
  - : 繪製位置的 y 座標。
- `maxWidth`
  - : 最大寬度，可選用的；繪製字串最大長度 如果指定此參數，當字串被計算出比這個值更寬，它會自動選擇水平方向更窄的字型（如果有可用的字型或是有可讀的字型可以嵌入當前字型之中），或者縮小字型。

##### 範例

```js
ctx.fillText("Sample String", 10, 50);
```

### measureText()

測量文字。返回一個物件包含了寬度，像素值，所指定的文字會以當前的文字樣式繪製。

> **備註：** 這個方法在 Gecko 1.9.1 (Firefox 3.5) 引進，且是 HTML 5 標準的一部分。

```plain
nsIDOMTextMetrics measureText(
  in DOMString textToMeasure
);
```

#### 參數

- `textToMeasure`
  - : 該字串的像素值。

#### 返回值

[`nsIDOMTextMetrics`](/nsIDOMTextMetrics)物件的`width`屬性在繪製時會將數字設定給 CSS 的像素值寬度。

### mozDrawText()

{{ deprecated_header() }}

繪製文字使用由`mozTextStyle`屬性的文字樣式。文本當前的填充顏色被用來當做文字顏色。

> **備註：** 這個方法已經不被建議使用,請使用正式的 HTML 5 方法 `fillText()` and `strokeText()`.

```plain
void mozDrawText(
   in DOMString textToDraw
);
```

#### 參數

- `textToDraw`
  - : 將文字繪製到文本。

#### 範例

```js
ctx.translate(10, 50);
ctx.fillStyle = "Red";
ctx.mozDrawText("Sample String");
```

這個範例將文字「Sample String」繪製到畫布（canvas）上。

### mozMeasureText()

{{ deprecated_header() }}

返回寬度，像素值，指定文字

> **備註：** 這個方法已經已宣告棄用，請使用正式的 HTML 5 方法`measureText()`.

```plain
float mozMeasureText(
  in DOMString textToMeasure
);
```

#### 參數

- `textToMeasure`
  - : 字串的寬度像素值

#### 返回值

文字的寬度像素值

#### 範例

```js
var text = "Sample String";
var width = ctx.canvas.width;
var len = ctx.mozMeasureText(text);
ctx.translate((width - len) / 2, 0);
ctx.mozDrawText(text);
```

這個範例測量了字串的寬度，接著使用這個資訊將它畫在畫布（canvas）的水平中心。

### mozPathText()

給文字路徑加上外框線，如果你想要的話，它允許你替文字加上框線代替填充它。

```plain
void mozPathText(
  in DOMString textToPath
);
```

#### 參數

- `textToPath`
  - : 為當前的文字路徑加上框線

#### Example

```js
ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.mozPathText("Sample String");
ctx.fill();
ctx.stroke();
```

這個範例繪出文字「Sample String」，填充顏色是綠色，外框顏色是黑色。

### mozTextAlongPath()

Adds (or draws) the specified text along the current path.

```plain
void mozTextAlongPath(
  in DOMString textToDraw,
  in boolean stroke
);
```

#### 參數

- `textToDraw`
  - : 沿著指定路徑繪出文字
- `stroke`
  - : 如果參數是 `true`（真值），文字會沿著指定路徑繪製。如果 `false`（假值），這個文字則會加入到路徑之中，再沿著當前路徑繪製。

#### 備註

字體不會沿著路徑曲線縮放或變形，反而在彎曲路徑下，字體每次計算都會當成是直線在處理。這可以用來建立一些特殊的效果。

### strokeText()

繪製文字使用`font`屬性指定的文字樣式，對齊則使用`textAlign`屬性，而指定基線則使用`textBaseline`. 當前使用`strokeStyle`來建立文字外框。

> **備註：** 這個方法在 Gecko 1.9.1 (Firefox 3.5)時引進，且是 HTML 5 標準的一部分。

```plain
void strokeText(
   in DOMString textToDraw,
   in float x,
   in float y,
   [optional] in float maxWidth
);
```

##### 參數

- `textToDraw`
  - : 將文字繪製到文本中。
- `x`
  - : 繪製位置的 x 座標。
- `y`
  - : 繪製位置的 y 座標
- `maxWidth`
  - : 最大寬度，可選用的；繪製字串最大長度 如果指定此參數，當字串被計算出比這個值更寬，它會自動選擇水平方向更窄的字型（如果有可用的字型或是有可讀的字型可以嵌入當前字型之中），或者縮小字型。

##### 範例

```js
ctx.strokeText("Sample String", 10, 50);
```

## 備註

- 請見 [WHATWG specification](http://www.whatwg.org/specs/web-apps/current-work/#text) 關於 HTML 5 canvas text 的說明。
- 你不需要特別的文本來使用這些功能；2D 的文本就可以執行得很好。
- 所有的繪圖都使用即時變化來完成。
