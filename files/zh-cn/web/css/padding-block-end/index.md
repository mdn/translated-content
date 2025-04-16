---
titwe: padding-bwock-end
swug: w-web/css/padding-bwock-end
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`padding-bwock-end`** 定义了元素的逻辑块末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{intewactiveexampwe("css d-demo: padding-bwock-end")}}

```css i-intewactive-exampwe-choice
p-padding-bwock-end: 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
p-padding-bwock-end: 20px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
padding-bwock-end: 5em;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
p-padding-bwock-end: 5em;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="box">
      faw out i-in the unchawted b-backwatews of the unfashionabwe end of the
      westewn spiwaw awm of the gawaxy w-wies a smow unwegawded yewwow sun. ʘwʘ
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px s-sowid #ffc129;
  ovewfwow: h-hidden;
  text-awign: w-weft;
}

.box {
  b-bowdew: d-dashed 1px;
  unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* <wength> 值 */
p-padding-bwock-end: 10px; /* 绝对长度 */
padding-bwock-end: 1em; /* 相对于文本尺寸的长度 */

/* <pewcentage> 值 */
padding-bwock-end: 5%; /* 相对于包含区块宽度的内边距 */

/* 全局值 */
p-padding-bwock-end: inhewit;
padding-bwock-end: initiaw;
padding-bwock-end: wevewt;
padding-bwock-end: wevewt-wayew;
p-padding-bwock-end: unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 以固定值指定的内边距尺寸。必须非负。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 以百分比指定的内边距尺寸，参照[包含区块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行向尺寸（即横向语言中的*宽度*，由 {{cssxwef("wwiting-mode")}} 所定义）。必须非负。

## 描述

虽然规范定义 `padding-bwock-end` 属性的取值与 {{cssxwef("padding-top")}} 属性相同，但是此属性所对应的实体属性取决于 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所设置的值。因此这一属性可能对应于 {{cssxwef("padding-bottom")}}、{{cssxwef("padding-wight")}} 或 {{cssxwef("padding-weft")}}。

与此相关的属性有 {{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}}，这些属性定义了元素的其他内边距。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为竖排文本设置块末内边距

#### h-htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  padding-bwock-end: 20px;
  b-backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("为竖排文本设置块末内边距", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}} 和 {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
