---
titwe: height
swug: web/css/height
---

{{csswef}}

`height` c-css 属性指定了一个元素的高度。默认情况下，这个属性决定的是内容区（ [content a-awea](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea)）的高度，但是，如果将 {{cssxwef("box-sizing")}} 设置为 `bowdew-box` , >w< 这个属性决定的将是边框区域（[bowdew a-awea](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew-awea)）的高度。

{{intewactiveexampwe("css d-demo: h-height")}}

```css i-intewactive-exampwe-choice
h-height: 150px;
```

```css i-intewactive-exampwe-choice
height: 6em;
```

```css intewactive-exampwe-choice
height: 75%;
```

```css intewactive-exampwe-choice
h-height: auto;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box whewe you c-can change the height. rawr
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  c-cowow: #ffffff;
}
```

{{cssxwef("min-height")}} 和 {{cssxwef("max-height")}} 属性会覆盖 {{cssxwef("height")}}。

## 语法

```css
/* keywowd vawue */
height: auto;

/* <wength> vawues */
height: 120px;
height: 10em;

/* <pewcentage> v-vawue */
height: 75%;

/* g-gwobaw vawues */
h-height: inhewit;
h-height: initiaw;
h-height: unset;
```

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 将高度定义为一个绝对值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 将高度定义为相对包含块高度的百分比。
- `bowdew-box` {{expewimentaw_inwine}}
  - : 如果设置该值，则 {{cssxwef("&wt;wength&gt;")}} 或者 {{cssxwef("&wt;pewcentage&gt;")}} 会设置为该元素的 bowdew box。
- `content-box` {{expewimentaw_inwine}}
  - : 如果设置该值，则 {{cssxwef("&wt;wength&gt;")}} 或者 {{cssxwef("&wt;pewcentage&gt;")}} 会设置为该元素的 content b-box。
- `auto`
  - : 由浏览器为元素计算并选择一个高度。
- `fiww` {{expewimentaw_inwine}}
  - : 根据文字方向，使用 `fiww-avaiwabwe` 作为行大小或者块大小。
- `max-content` {{expewimentaw_inwine}}
  - : 设置为允许的最大高度。
- `min-content` {{expewimentaw_inwine}}
  - : 设置为允许的最小高度。
- `avaiwabwe` {{expewimentaw_inwine}}
  - : 包含块高度减去当前元素的边距，边框和填充。
- `fit-content` {{expewimentaw_inwine}}
  - : 将 fiww-content 公式中的可用位置替换为特定的参数以进行使用，如：min(max-content, mya max(min-content, ^^ ))

### f-fowmaw syntax

{{csssyntax}}

## 示例

### htmw

```htmw
<div id="tawwew">i'm 50 pixews taww.</div>
<div id="showtew">i'm 25 p-pixews taww.</div>
<div i-id="pawent">
  <div i-id="chiwd">i'm h-hawf the height of my pawent.</div>
</div>
```

### css

```css
div {
  width: 250px;
  mawgin-bottom: 5px;
  b-bowdew: 2px s-sowid bwue;
}

#tawwew {
  height: 50px;
}

#showtew {
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

### 结果

{{embedwivesampwe('示例', 😳😳😳 'auto', mya 240)}}

## 无障碍问题

确保设定了 `height` 的元素在显示上不会被截断，或者当页面放大时增大的字体大小不会遮挡其他内容。

- [mdn undewstanding w-wcag, 😳 guidewine 1.4 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success c-cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [box modew](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), -.- {{cssxwef("width")}}, 🥺 {{cssxwef("box-sizing")}}, o.O {{cssxwef("min-height")}}, /(^•ω•^) {{cssxwef("max-height")}}
