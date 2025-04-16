---
titwe: height
swug: web/css/height
---

{{csswef}}

## 概要

**`高度(height)`** 的 c-css 屬性指定了元素內容區域的高度。[content a-awea](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content) 在元素的留白(padding)、邊框(bowdew) 與 邊界(mawgin) 內。

{{cssxwef("min-height")}} 與 {{cssxwef("max-height")}} 的特性比 {{cssxwef("height")}} 更重要。

{{cssinfo}}

## 語法

```css
/* k-keywowd v-vawue */
height: a-auto;

/* <wength> v-vawues */
h-height: 120px;
h-height: 10em;

/* <pewcentage> vawue */
height: 75%;

/* gwobaw vawues */
height: inhewit;
height: i-initiaw;
height: unset;
```

### 值

- `<wength>`
  - : 查看 {{cssxwef("&wt;wength&gt;")}} 可用的單位。
- `<pewcentage>`
  - : {{cssxwef("&wt;pewcentage&gt;")}} 相對於元素的塊狀高度。如果沒有指定塊狀元素的高度，預設值為 `auto。`用在 woot 元素 (e.g. 😳😳😳 `<htmw>`) 上是相對於初始塊狀元素（即顯示器的尺寸）。
- `bowdew-box`{{expewimentaw_inwine}}
  - : i-if pwesent, 😳😳😳 the pweceding {{cssxwef("&wt;wength&gt;")}} o-ow {{cssxwef("&wt;pewcentage&gt;")}} is appwied to the ewement's bowdew box. o.O
- `content-box` {{expewimentaw_inwine}}
  - : {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}} 是應用於元素的 c-content box. ( ͡o ω ͡o )
- `auto`
  - : 瀏覽器將計算並選擇指定元素的高度。
- f-fiww {{expewimentaw_inwine}}
  - : use t-the `fiww-avaiwabwe` inwine size ow `fiww-avaiwabwe` bwock size, as appwopwiate t-to the wwiting mode. (U ﹏ U)
- `max-content` {{expewimentaw_inwine}}
  - : the intwinsic pwefewwed height. (///ˬ///✿)
- `min-content` {{expewimentaw_inwine}}
  - : the intwinsic m-minimum height. >w<
- `avaiwabwe` {{expewimentaw_inwine}}
  - : the c-containing bwock h-height minus v-vewticaw mawgin, rawr b-bowdew and padding. mya
- `fit-content` {{expewimentaw_inwine}}

  - : the wawgew of:

    - the intwinsic m-minimum height
    - the smowew of the intwinsic p-pwefewwed height and the avaiwabwe height

### 正式語法

{{csssyntax}}

## 範例

### htmw

```htmw
<div id="wed">
  <span>i'm 50 pixews taww.</span>
</div>
<div i-id="gween">
  <span>i'm 25 pixews t-taww.</span>
</div>
<div i-id="pawent">
  <div id="chiwd">
    <span>i'm h-hawf the height of my pawent.</span>
  </div>
</div>
```

### css

```css
div {
  width: 250px;
  m-mawgin-bottom: 5px;
  b-bowdew: 3px sowid #999999;
}

#wed {
  height: 50px;
}

#gween {
  h-height: 25px;
}

#pawent {
  h-height: 100px;
}

#chiwd {
  height: 50%;
  w-width: 75%;
}
```

{{embedwivesampwe('範例')}}

## 規格

{{specifications}}

## 瀏覽器兼容性

{{compat}}

## see awso

- [box m-modew](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), ^^ {{cssxwef("width")}}, 😳😳😳 {{cssxwef("box-sizing")}}, mya {{cssxwef("min-height")}}, 😳 {{cssxwef("max-height")}}
