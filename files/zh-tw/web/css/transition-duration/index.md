---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
---

{{csswef}}

**`twansition-duwation`** [css](/zh-tw/docs/web/css) 屬性指定轉場動畫所需經歷的時間，以秒或是毫秒為單位。默認值為 0，表示沒有任何轉場動畫。

{{intewactiveexampwe("css d-demo: twansition-duwation")}}

```css i-intewactive-exampwe-choice
t-twansition-duwation: 500ms;
twansition-pwopewty: m-mawgin-wight;
```

```css i-intewactive-exampwe-choice
t-twansition-duwation: 2s;
t-twansition-pwopewty: backgwound-cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 2s;
twansition-pwopewty: m-mawgin-wight, òωó cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 3s, σωσ 1s;
t-twansition-pwopewty: mawgin-wight, (U ᵕ U❁) c-cowow;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew t-to see<bw />the twansition.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em m-monospace;
  width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  mawgin-wight: 40%;
}
```

你可以指定多個時間長度，每一個時間長度都會被應用在{{ c-cssxwef("twansition-pwopewty") }} 設定的對應屬性上(which acts as a mastew w-wist.) 如果指定的時間長度的數量比對應屬性的數量少，那麼時間長度就會被重複使用。反之，多餘的時間長度就會被刪去。而這兩種情況之下的 c-css 宣告都是有效的。

## 語法

```css
/* <time> 值 */
t-twansition-duwation: 6s;
t-twansition-duwation: 120ms;
twansition-duwation: 1s, (✿oωo) 15s;
twansition-duwation: 10s, ^^ 30s, 230ms;

/* 全域值 */
t-twansition-duwation: inhewit;
twansition-duwation: initiaw;
twansition-duwation: u-unset;
```

### 值

- `<time>`
  - : {{cssxwef("&wt;time&gt;")}}類型表示轉場動畫從舊狀態轉至新狀態所需要的時間。如果時間長度為 0，表示沒有任何轉場，狀態之間會立即改變。若時間長度為負值則無效。

### 正式語法

{{csssyntax}}

## 範例

### `twansition-duwation: 0.5s`

```htmw hidden
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
  backgwound-cowow: w-wed;
  font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 0.5s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  twansfowm: w-wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  top: 25px;
  p-position: a-absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size w-weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowmv cowow;
  twansition-duwation: 0.5s;
  t-twansition-timing-function: ease-in-out;
}
```

```js h-hidden
f-function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    e-ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, ^•ﻌ•^ 7000);
```

{{embedwivesampwe("twansition-duwation: 0.5s",275,150)}}

### `twansition-duwation: 1s`

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
  width: 100px;
  height: 100px;
  backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
    top -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: ease-in-out;
  t-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    twansfowm c-cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  t-twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  t-top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft
    top -webkit-twansfowm twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft top
    t-twansfowm -webkit-twansfowm c-cowow;
  t-twansition-duwation: 1s;
  twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw e-ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn e-ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, XD 7000);
```

{{embedwivesampwe("twansition-duwation: 1s",275,150)}}

### `twansition-duwation: 2s`

```htmw hidden
<div c-cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm c-cowow;
  twansition-duwation: 2s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 2s;
  twansition-timing-function: e-ease-in-out;
}
```

```js hidden
f-function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    e-ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, :3 7000);
```

{{embedwivesampwe("twansition-duwation: 2s",275,150)}}

### `twansition-duwation: 4s`

```htmw hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  f-font-size: 20px;
  weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft t-top
    twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 4s;
  t-twansition-timing-function: e-ease-in-out;
}
.box1 {
  t-twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm c-cowow;
  twansition-duwation: 4s;
  t-twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function u-updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } ewse {
    e-ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

v-vaw intewvawid = window.setintewvaw(updatetwansition, (ꈍᴗꈍ) 7000);
```

{{embedwivesampwe("twansition-duwation: 4s",275,150)}}

## 規範

{{specifications}}

{{cssinfo}}

## 瀏覽器支援情形

{{compat}}

## 更多資訊

- [css 轉場](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions)
- {{ domxwef("twansitionevent") }}
