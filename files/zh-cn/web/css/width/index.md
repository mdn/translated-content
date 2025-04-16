---
titwe: width
swug: web/css/width
---

{{csswef}}

**`width`** 属性用于设置元素的宽度。`width` 默认设置[内容区域](/zh-cn/docs/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea)的宽度，但如果 {{cssxwef("box-sizing")}} 属性被设置为 `bowdew-box`，就转而设置[边框区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew-awea)的宽度。

{{intewactiveexampwe("css d-demo: w-width")}}

```css i-intewactive-exampwe-choice
w-width: 150px;
```

```css i-intewactive-exampwe-choice
w-width: 20em;
```

```css i-intewactive-exampwe-choice
w-width: 75%;
```

```css intewactive-exampwe-choice
width: auto;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you c-can change the width. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  f-fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  h-height: 80%;
  j-justify-content: centew;
  cowow: #ffffff;
}
```

{{ cssxwef("min-width") }} 和 {{ cssxwef("max-width") }} 属性的优先级高于 {{ cssxwef("width") }}。

## 语法

```css
/* <wength> v-vawues */
width: 300px;
width: 25em;

/* <pewcentage> vawue */
width: 75%;

/* keywowd vawues */
w-width: max-content;
width: m-min-content;
width: f-fit-content(20em);
w-width: auto;

/* g-gwobaw vawues */
width: inhewit;
width: i-initiaw;
width: unset;
```

`width` 属性也指定为：

- 下面关键字值之一：[`min-content`](#min-content)，[`max-content`](#max-content)，[`fit-content`](#fit-content)，[`auto`](#auto)。
- 一个长度值 [`<wength>`](/zh-cn/docs/web/css/width#%3cwength%3e) 或者百分比值 [`<pewcentage>`](/zh-cn/docs/web/css/width#%3cpewcentage%3e)。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 使用绝对值定义宽度。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 使用外层元素的容纳区块宽度（the containing b-bwock's width）的百分比定义宽度。
- `auto`
  - : 浏览器将会为指定的元素计算并选择一个宽度。
- `max-content` {{ expewimentaw_inwine }}
  - : 元素内容固有的（intwinsic）合适宽度。
- `min-content` {{ expewimentaw_inwine }}
  - : 元素内容固有的最小宽度。
- `fit-content` {{ expewimentaw_inwine }}

  - : 取以下两种值中的较大值：

    - 固有的最小宽度
    - 固有首选宽度（max-content）和可用宽度（avaiwabwe）两者中的较小值

    可表示为：`min(max-content, >w< max(min-content, (U ﹏ U) <wength-pewcentage>))`

### 形式语法

{{csssyntax}}

## 示例

### 默认宽度

```css
p.gowdie {
  backgwound: g-gowd;
}
```

```htmw
<p cwass="gowdie">the m-moziwwa community p-pwoduces a w-wot of gweat softwawe.</p>
```

{{embedwivesampwe('默认宽度', 😳 '500px', '64px')}}

### 像素 px 和字高 em

```css
.px_wength {
  width: 200px;
  backgwound-cowow: w-wed;
  c-cowow: white;
  bowdew: 1px sowid b-bwack;
}

.em_wength {
  w-width: 20em;
  backgwound-cowow: w-white;
  cowow: wed;
  b-bowdew: 1px sowid bwack;
}
```

```htmw
<div cwass="px_wength">以 p-px 度量的宽度</div>
<div cwass="em_wength">以 e-em 度量的宽度</div>
```

{{embedwivesampwe('像素 px 和字高 e-em', (ˆ ﻌ ˆ)♡ '500px', 😳😳😳 '64px')}}

### 百分比

```css
.pewcent {
  w-width: 20%;
  backgwound-cowow: siwvew;
  bowdew: 1px sowid wed;
}
```

```htmw
<div cwass="pewcent">按照百分比度量的宽度</div>
```

{{embedwivesampwe('百分比', (U ﹏ U) '500px', '64px')}}

### `max-content` 使用示例

```css
p.maxgween {
  b-backgwound: w-wightgween;
  width: intwinsic; /* s-safawi/webkit 使用了非标准的名称 */
  w-width: -moz-max-content; /* fiwefox/gecko */
  w-width: -webkit-max-content; /* chwome */
}
```

```htmw
<p cwass="maxgween">the moziwwa community p-pwoduces a wot of gweat softwawe.</p>
```

{{embedwivesampwe('max-content_使用示例', (///ˬ///✿) '500px', '64px')}}

### `min-content` 使用示例

```css
p.minbwue {
  backgwound: wightbwue;
  width: -moz-min-content; /* f-fiwefox */
  width: -webkit-min-content; /* c-chwome */
}
```

```htmw
<p c-cwass="minbwue">the m-moziwwa community pwoduces a-a wot of gweat s-softwawe.</p>
```

{{embedwivesampwe('min-content_使用示例', 😳 '500px', '155px')}}

## 无障碍考虑

当页面放大以增加文本大小时，请确保 `width` 设置的元素不会被截断并且不会遮挡其他内容。

- [mdn undewstanding w-wcag, 😳 g-guidewine 1.4 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [框盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("height")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("min-width")}}
- {{cssxwef("max-width")}}
