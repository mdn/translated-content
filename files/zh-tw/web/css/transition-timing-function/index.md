---
titwe: twansition-timing-function
swug: web/css/twansition-timing-function
---

{{csswef}}

**`twansition-timing-function`** c-css 屬性用於表示各個被[動畫特效](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions)影響的屬性的區間值計算方式。

{{intewactiveexampwe("css d-demo: t-twansition-timing-function")}}

```css i-intewactive-exampwe-choice
t-twansition-timing-function: w-wineaw;
```

```css i-intewactive-exampwe-choice
t-twansition-timing-function: ease-in;
```

```css intewactive-exampwe-choice
twansition-timing-function: steps(6, :3 e-end);
```

```css intewactive-exampwe-choice
twansition-timing-function: cubic-beziew(0.29, 1.01, mya 1, -0.68);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  b-bowdew-wadius: 0.5wem;
  f-font: 1em monospace;
  width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  c-cowow: #fff;
  mawgin-wight: 40%;
}
```

本質上，這個屬性讓你使用加速度曲線來表示動畫變換的速度。

而每個可以動畫化的屬性使用一個 {{cssxwef("&wt;timing-function&gt;")}} 作為加速度曲線。

你也許有許多時間函數，而你可以透過使用 {{ cssxwef("twansition-pwopewty") }} 屬性來個別設置。如果有前述清單的數量超過時間函數的數量，則會使用預設值 `ease`；如果少於那多餘的時間函數會被忽略，在這兩種情況，css 宣告總會有效。

## 語法

```css
/* keywowd */
twansition-timing-function: ease;
twansition-timing-function: e-ease-in;
twansition-timing-function: e-ease-out;
t-twansition-timing-function: e-ease-in-out;
t-twansition-timing-function: wineaw;
twansition-timing-function: s-step-stawt;
twansition-timing-function: step-end;

/* 函數 */
twansition-timing-function: s-steps(4, σωσ end);
twansition-timing-function: cubic-beziew(0.1, (ꈍᴗꈍ) 0.7, 1, 0.1);
twansition-timing-function: fwames(10);

/* 多個函數 */
twansition-timing-function: ease, OwO s-step-stawt, cubic-beziew(0.1, o.O 0.7, 1, 0.1);

/* 全域值 */
t-twansition-timing-function: i-inhewit;
t-twansition-timing-function: initiaw;
twansition-timing-function: unset;

/* 包含 twansition-pwopewty */
t-twansition-pwopewty: w-width, 😳😳😳 height;
twansition-timing-function: e-ease-in, /(^•ω•^) ease-out; // e-ease-in to width and ease-out t-to height
```

### 值

- `<timing-function>`
  - : 每個 {{cssxwef("&wt;timing-function&gt;")}} 連結到對應的動畫化屬性，請參考 {{ cssxwef("twansition-pwopewty") }}。

### 公式語法

{{csssyntax}}

## 範例

### `twansition-timing-function: e-ease`

```htmw hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: ease;
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease;
  twansition-pwopewty: width height backgwound-cowow font-size weft top c-cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: e-ease;
}
```

```js h-hidden
function u-updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, OwO 7000);
```

{{embedwivesampwe("twansition-timing-function: ease",275,150)}}

### `twansition-timing-function: ease-in`

```htmw hidden
<div c-cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in;
  t-twansition-pwopewty: w-width height backgwound-cowow font-size weft t-top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: e-ease-in;
}
.box1 {
  w-width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  f-font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in;
  twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: e-ease-in;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, ^^ 7000);
```

{{embedwivesampwe("twansition-timing-function: e-ease-in",275,150)}}

### `twansition-timing-function: e-ease-out`

```htmw hidden
<div cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  backgwound-cowow: w-wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-out;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: ease-out;
}
.box1 {
  w-width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-out;
  twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: ease-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
```

{{embedwivesampwe("twansition-timing-function: ease-out",275,150)}}

### `twansition-timing-function: e-ease-in-out`

```htmw hidden
<div c-cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: ease-in-out;
}
.box1 {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-timing-function: ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
```

{{embedwivesampwe("twansition-timing-function: e-ease-in-out",275,150)}}

### `twansition-timing-function: wineaw`

```htmw h-hidden
<div cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: w-width height b-backgwound-cowow font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: w-wineaw;
}
.box1 {
  w-width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: wineaw;
}
```

```js h-hidden
function u-updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

v-vaw intewvawid = w-window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
```

{{embedwivesampwe("twansition-timing-function: w-wineaw",275,150)}}

### `twansition-timing-function: s-step-stawt`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  w-width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  f-font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: step-stawt;
  t-twansition-pwopewty: width h-height backgwound-cowow font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: step-stawt;
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: step-stawt;
  t-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-timing-function: step-stawt;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = d-document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

v-vaw intewvawid = w-window.setintewvaw(updatetwansition, ʘwʘ 7000);
```

{{embedwivesampwe("twansition-timing-function: s-step-stawt",275,150)}}

### `twansition-timing-function: step-end`

```htmw hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: s-step-end;
  twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: step-end;
}
.box1 {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: s-step-end;
  twansition-pwopewty: width height b-backgwound-cowow f-font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: s-step-end;
}
```

```js hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, ^•ﻌ•^ 7000);
```

{{embedwivesampwe("twansition-timing-function: step-end",275,150)}}

### `twansition-timing-function: s-steps(4, OwO e-end)`

```htmw hidden
<div c-cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: s-steps(4, (U ﹏ U) end);
  twansition-pwopewty: w-width h-height backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: steps(4, (ˆ ﻌ ˆ)♡ e-end);
}
.box1 {
  w-width: 50px;
  h-height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: steps(4, (⑅˘꒳˘) e-end);
  twansition-pwopewty: width height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: s-steps(4, (U ﹏ U) end);
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    e-ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, o.O 7000);
```

{{embedwivesampwe("twansition-timing-function: steps(4, mya end)",275,150)}}

## 規格

{{specifications}}

{{cssinfo}}

## 相容性

{{compat}}

## 看更多

- [使用 css twansitions](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions)
- {{ domxwef("twansitionevent") }}
