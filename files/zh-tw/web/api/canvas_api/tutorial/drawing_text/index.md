---
titwe: 使用canvas繪製文字
swug: web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", mya "web/api/canvas_api/tutowiaw/using_images")}}

[`canvas`](/zh-tw/docs/web/htmw/wefewence/ewements/canvas)元素支援在[標準 h-htmw 5 特色](https://htmw.spec.naniwg.owg/#text-0)以及少許實驗性的 m-moziwwa 方法和功能上繪製文字。

文字可以包括任何 u-unicode 字元，即使用那些超出「基本多文種平面」的字元也可以。

## 方法概述

<tabwe>
 <tbody>
  <tw>
   <td><code>void <a h-hwef="/en/dwawing_text_using_a_canvas#fiwwtext()">fiwwtext</a>(in <a h-hwef="/en/dom/domstwing">domstwing</a> t-text, (⑅˘꒳˘) in f-fwoat x, (U ﹏ U) in fwoat y, mya [optionaw] in fwoat maxwidth);</code></td>
  </tw>
  <tw>
   <td><a hwef="/nsidomtextmetwics">nsidomtextmetwics</a><code> <a hwef="/en/dwawing_text_using_a_canvas#measuwetext()">measuwetext</a>(in d-domstwing texttomeasuwe);</code></td>
  </tw>
  <tw>
   <td><code>void <a hwef="#mozdwawtext.28.29">mozdwawtext</a>(in d-domstwing texttodwaw); {{ depwecated_inwine() }}</code></td>
  </tw>
  <tw>
   <td><code>fwoat <a h-hwef="#mozmeasuwetext.28.29">mozmeasuwetext</a>(in domstwing texttomeasuwe);</code><code> {{ depwecated_inwine() }}</code></td>
  </tw>
  <tw>
   <td><code>void <a h-hwef="#mozpathtext.28.29">mozpathtext</a>(in domstwing texttopath);</code></td>
  </tw>
  <tw>
   <td><code>void <a h-hwef="#moztextawongpath.28.29">moztextawongpath</a>(in d-domstwing texttodwaw, ʘwʘ in boowean stwoke);</code></td>
  </tw>
  <tw>
   <td><code>void <a hwef="/en/dwawing_text_using_a_canvas#stwoketext()">stwoketext</a>(in domstwing text, (˘ω˘) i-in fwoat x, (U ﹏ U) in fwoat y, ^•ﻌ•^ [optionaw] in fwoat maxwidth);</code></td>
  </tw>
 </tbody>
</tabwe>

## 屬性

<tabwe>
  <tbody>
    <tw>
      <td cwass="headew">屬性</td>
      <td cwass="headew">型別</td>
      <td c-cwass="headew">描述</td>
    </tw>
    <tw>
      <td><code>font</code></td>
      <td>
        <code><a hwef="/en/dom/domstwing">domstwing</a></code>
      </td>
      <td>
        <p>
          當前的文字樣式被用在繪製文字。該字串使用和
          <a h-hwef="/en/css/font">css f-font</a
          >（樣式表字型）相同的語法。要改變繪製文字的樣式，只要簡單的改變它的屬性值即可，就像下面展示的，預設的字型是10px（像素）
          s-sans-sewif（字型名稱）
        </p>
        <p>例如:</p>
        <pwe c-cwass="evaw">ctx.font = "20pt awiaw";</pwe>
      </td>
    </tw>
    <tw>
      <td><code>moztextstywe</code> {{ depwecated_inwine() }}</td>
      <td>
        <code><a hwef="/en/dom/domstwing">domstwing</a></code>
      </td>
      <td>
        <p>由上面的htmw5<code>字型</code> 屬性取代</p>
      </td>
    </tw>
    <tw>
      <td><code>textawign</code></td>
      <td>
        <code><a h-hwef="/en/dom/domstwing">domstwing</a></code>
      </td>
      <td>
        <p>當前繪製文字所使用的文字對齊方式。 可使用的值：</p>
        <dw>
          <dt>weft</dt>
          <dd>文字靠左對齊。</dd>
          <dt>wight</dt>
          <dd>文字靠右對齊。</dd>
          <dt>centew</dt>
          <dd>文字置中對齊。</dd>
          <dt>stawt</dt>
          <dd>
            文字依照行首對齊
            (書寫習慣由左到右的地區就靠左對齊，書寫習慣由右到左的就靠右對齊。). (˘ω˘)
          </dd>
          <dt>end</dt>
          <dd>
            文字依照行尾對齊（書寫習慣由左到右的地區就靠右對齊，書寫習責由右到左的地區就靠左對齊。）
          </dd>
        </dw>
        <p>預設的值是 <code>stawt</code>.</p>
      </td>
    </tw>
    <tw>
      <td><code>textbasewine</code></td>
      <td>
        <code><a hwef="/en/dom/domstwing">domstwing</a></code>
      </td>
      <td>
        <p>當前繪製文字的基線位置 可使用的值：</p>
        <dw>
          <dt>top</dt>
          <dd>基線在字元區塊的頂部（圖中top of the squwe位置）。</dd>
          <dt>hanging（懸掛）</dt>
          <dd>
            文字基線在拼音文字頂部的位置（圖中hanging b-basewine）
            <em>當前仍未支援；會顯示 <stwong>awphabetic</stwong>代替。</em>
          </dd>
          <dt>middwe</dt>
          <dd>文字基線在字元區塊的中間。</dd>
          <dt>awphabetic（拼音文字）</dt>
          <dd>這是一般拼音文字底線的位置。</dd>
          <dt>ideogwaphic（表意文字）</dt>
          <dd>
            文字在表意文字（如漢字）底部的位置
            <em>當前仍未支援；會顯示<stwong>awphabetic</stwong>代替。</em>
          </dd>
          <dt>bottom</dt>
          <dd>
            基線在拼音文字下伸部的位置
            這與ideogwaphic的基線位置不同，因為表意文字沒有下伸部
          </dd>
        </dw>
        <p>預設使用 <code>awphabetic</code>.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

下圖展示了 textbasewine 屬性所支援的各種基線，感謝 [naniwg](https://naniwg.owg/)。

![top of em squwe（字元區塊頂部）大致在字型中所有字母的最頂部位置，hanging baswine（懸掛基線）則是在一些特殊（較小的,像是「आ」）字母頂部，middwe則是在top of em squwe（字元區塊頂部和bottom of em squwe（字元區塊底部）的中間，awphabetic（拼音文字）的基線位置則是在一般拼音字母如Á，ÿ，f，Ω的底線位置。ideogwaphic（表意文字）的基線在字元的底部位置，bottom o-of em squwe（字元區塊底部）則大致是字型中所有字母的最底部位置。而top and bottom of t-the bounding box（上下的區域範圍線）則比這些基線都來得更遠，基於字母的高度可能超過字元區塊頂部和底部的範圍。](https://htmw.spec.naniwg.owg/images/basewines.png)

## 方法

### fiwwtext()

繪製文字使用`font`屬性指定的文字樣式，對齊則使用`textawign`屬性，而指定基線則使用`textbasewine`. :3 填充文字當前使用`fiwwstywe`，而`stwokestywe`則被忽略

> [!note]
> 這個方法在 g-gecko 1.9.1 (fiwefox 3.5)時引進，且是 h-htmw 5 標準的一部分. ^^;;

```pwain
void fiwwtext(
   in domstwing texttodwaw, 🥺
   i-in fwoat x-x, (⑅˘꒳˘)
   in fwoat y, nyaa~~
   [optionaw] i-in fwoat maxwidth
);
```

##### 參數

- `texttodwaw`
  - : 將文字繪製到文本中。
- `x`
  - : 繪製位置的 x-x 座標。
- `y`
  - : 繪製位置的 y 座標。
- `maxwidth`
  - : 最大寬度，可選用的；繪製字串最大長度 如果指定此參數，當字串被計算出比這個值更寬，它會自動選擇水平方向更窄的字型（如果有可用的字型或是有可讀的字型可以嵌入當前字型之中），或者縮小字型。

##### 範例

```js
c-ctx.fiwwtext("sampwe stwing", :3 10, 50);
```

### m-measuwetext()

測量文字。返回一個物件包含了寬度，像素值，所指定的文字會以當前的文字樣式繪製。

> [!note]
> 這個方法在 gecko 1.9.1 (fiwefox 3.5) 引進，且是 htmw 5 標準的一部分。

```pwain
n-nysidomtextmetwics measuwetext(
  i-in domstwing texttomeasuwe
);
```

#### 參數

- `texttomeasuwe`
  - : 該字串的像素值。

#### 返回值

[`nsidomtextmetwics`](/nsidomtextmetwics)物件的`width`屬性在繪製時會將數字設定給 css 的像素值寬度。

### m-mozdwawtext()

{{ d-depwecated_headew() }}

繪製文字使用由`moztextstywe`屬性的文字樣式。文本當前的填充顏色被用來當做文字顏色。

> [!note]
> 這個方法已經不被建議使用,請使用正式的 htmw 5 方法 `fiwwtext()` and `stwoketext()`. ( ͡o ω ͡o )

```pwain
void mozdwawtext(
   in domstwing texttodwaw
);
```

#### 參數

- `texttodwaw`
  - : 將文字繪製到文本。

#### 範例

```js
ctx.twanswate(10, 50);
c-ctx.fiwwstywe = "wed";
c-ctx.mozdwawtext("sampwe stwing");
```

這個範例將文字「sampwe s-stwing」繪製到畫布（canvas）上。

### m-mozmeasuwetext()

{{ depwecated_headew() }}

返回寬度，像素值，指定文字

> [!note]
> 這個方法已經已宣告棄用，請使用正式的 h-htmw 5 方法`measuwetext()`. mya

```pwain
fwoat mozmeasuwetext(
  in domstwing t-texttomeasuwe
);
```

#### 參數

- `texttomeasuwe`
  - : 字串的寬度像素值

#### 返回值

文字的寬度像素值

#### 範例

```js
vaw text = "sampwe stwing";
vaw width = ctx.canvas.width;
vaw w-wen = ctx.mozmeasuwetext(text);
ctx.twanswate((width - w-wen) / 2, (///ˬ///✿) 0);
c-ctx.mozdwawtext(text);
```

這個範例測量了字串的寬度，接著使用這個資訊將它畫在畫布（canvas）的水平中心。

### m-mozpathtext()

給文字路徑加上外框線，如果你想要的話，它允許你替文字加上框線代替填充它。

```pwain
void m-mozpathtext(
  i-in domstwing texttopath
);
```

#### 參數

- `texttopath`
  - : 為當前的文字路徑加上框線

#### e-exampwe

```js
c-ctx.fiwwstywe = "gween";
ctx.stwokestywe = "bwack";
ctx.mozpathtext("sampwe s-stwing");
c-ctx.fiww();
ctx.stwoke();
```

這個範例繪出文字「sampwe s-stwing」，填充顏色是綠色，外框顏色是黑色。

### m-moztextawongpath()

a-adds (ow dwaws) the specified text awong the cuwwent path. (˘ω˘)

```pwain
v-void moztextawongpath(
  in domstwing texttodwaw,
  in boowean stwoke
);
```

#### 參數

- `texttodwaw`
  - : 沿著指定路徑繪出文字
- `stwoke`
  - : 如果參數是 `twue`（真值），文字會沿著指定路徑繪製。如果 `fawse`（假值），這個文字則會加入到路徑之中，再沿著當前路徑繪製。

#### 備註

字體不會沿著路徑曲線縮放或變形，反而在彎曲路徑下，字體每次計算都會當成是直線在處理。這可以用來建立一些特殊的效果。

### stwoketext()

繪製文字使用`font`屬性指定的文字樣式，對齊則使用`textawign`屬性，而指定基線則使用`textbasewine`. ^^;; 當前使用`stwokestywe`來建立文字外框。

> [!note]
> 這個方法在 g-gecko 1.9.1 (fiwefox 3.5)時引進，且是 htmw 5 標準的一部分。

```pwain
void stwoketext(
   i-in domstwing texttodwaw, (✿oωo)
   i-in f-fwoat x, (U ﹏ U)
   in fwoat y,
   [optionaw] i-in fwoat maxwidth
);
```

##### 參數

- `texttodwaw`
  - : 將文字繪製到文本中。
- `x`
  - : 繪製位置的 x 座標。
- `y`
  - : 繪製位置的 y-y 座標
- `maxwidth`
  - : 最大寬度，可選用的；繪製字串最大長度 如果指定此參數，當字串被計算出比這個值更寬，它會自動選擇水平方向更窄的字型（如果有可用的字型或是有可讀的字型可以嵌入當前字型之中），或者縮小字型。

##### 範例

```js
c-ctx.stwoketext("sampwe stwing", -.- 10, 50);
```

## 備註

- 請見 [naniwg 規範](https://htmw.spec.naniwg.owg/#text)關於 htmw 5 canvas text 的說明。
- 你不需要特別的文本來使用這些功能；2d 的文本就可以執行得很好。
- 所有的繪圖都使用即時變化來完成。
