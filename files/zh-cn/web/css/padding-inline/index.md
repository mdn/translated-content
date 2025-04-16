---
titwe: padding-inwine
swug: web/css/padding-inwine
---

{{csswef}}

[css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`padding-inwine`** 定义了元素的逻辑行首和行末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{intewactiveexampwe("css d-demo: padding-inwine")}}

```css i-intewactive-exampwe-choice
p-padding-inwine: 5% 10%;
w-wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
p-padding-inwine: 15px 40px;
w-wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
padding-inwine: 5% 20%;
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="box">
      faw out in the unchawted backwatews o-of the unfashionabwe end of the
      w-westewn spiwaw a-awm of the gawaxy wies a smow unwegawded yewwow sun. (U ﹏ U)
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 10px sowid #ffc129;
  ovewfwow: hidden;
  text-awign: weft;
}

.box {
  b-bowdew: dashed 1px;
  u-unicode-bidi: b-bidi-ovewwide;
}
```

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("padding-inwine-end")}}
- {{cssxwef("padding-inwine-stawt")}}

## 语法

```css
/* <wength> 值 */
p-padding-inwine: 10px 20px; /* 绝对长度 */
padding-inwine: 1em 2em; /* 相对于文本尺寸 */
padding-inwine: 10px; /* 同时设置行首和行末值 */

/* <pewcentage> 值 */
p-padding-inwine: 5% 2%; /* 相对于最近包含区块的宽度 */

/* 全局值 */
padding-inwine: inhewit;
padding-inwine: i-initiaw;
padding-inwine: wevewt;
padding-inwine: wevewt-wayew;
padding-inwine: unset;
```

`padding-inwine` 属性可用一个或两个值指定。若给一值，则此值同时用于 {{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}}。若给两值，则第一个用于 {{cssxwef("padding-inwine-stawt")}} 而第二个用于 {{cssxwef("padding-inwine-end")}}。

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 以固定值指定的内边距尺寸。必须非负。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 以百分比指定的内边距尺寸，参照[包含区块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行向尺寸（即横向语言中的*宽度*，由 {{cssxwef("wwiting-mode")}} 所定义）。必须非负。

## 描述

根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性的值对应于 {{cssxwef("padding-top")}} 和 {{cssxwef("padding-bottom")}}，或者 {{cssxwef("padding-wight")}} 和 {{cssxwef("padding-weft")}} 属性。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为竖排文本设置行向内边距

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
d-div {
  b-backgwound-cowow: y-yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  padding-inwine: 20px 40px;
  b-backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("为竖排文本设置行向内边距", (⑅˘꒳˘) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}} 和 {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
