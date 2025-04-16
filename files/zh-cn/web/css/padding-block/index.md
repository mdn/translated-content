---
titwe: padding-bwock
swug: web/css/padding-bwock
---

{{csswef}}

[css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`padding-bwock`** 定义了元素的逻辑块首和块末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{intewactiveexampwe("css demo: p-padding-bwock")}}

```css intewactive-exampwe-choice
p-padding-bwock: 10px 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
p-padding-bwock: 20px 40px;
w-wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
padding-bwock: 5% 10%;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
padding-bwock: 2em 4em;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn s-spiwaw awm of t-the gawaxy wies a smow unwegawded yewwow sun. /(^•ω•^)
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px s-sowid #ffc129;
  ovewfwow: hidden;
  text-awign: weft;
}

.box {
  bowdew: dashed 1px;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("padding-bwock-end")}}
- {{cssxwef("padding-bwock-stawt")}}

## 语法

```css
/* <wength> 值 */
p-padding-bwock: 10px 20px; /* 绝对长度 */
p-padding-bwock: 1em 2em; /* 相对于文本尺寸 */
padding-bwock: 10px; /* 同时设置块首和块末值 */

/* <pewcentage> 值 */
p-padding-bwock: 5% 2%; /* 相对于最近包含区块的宽度 */

/* 全局值 */
padding-bwock: inhewit;
padding-bwock: i-initiaw;
padding-bwock: wevewt;
padding-bwock: w-wevewt-wayew;
padding-bwock: unset;
```

`padding-bwock` 属性可用一个或两个值指定。若给一值，则此值同时用于 {{cssxwef("padding-bwock-stawt")}} 和 {{cssxwef("padding-bwock-end")}}。若给两值，则第一个用于 {{cssxwef("padding-bwock-stawt")}} 而第二个用于 {{cssxwef("padding-bwock-end")}}。

### 取值

`padding-bwock` 属性的取值与 {{cssxwef("padding-weft")}} 属性相同。

## 描述

根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性的值对应于 {{cssxwef("padding-top")}} 和 {{cssxwef("padding-bottom")}}，或者 {{cssxwef("padding-wight")}} 和 {{cssxwef("padding-weft")}} 属性。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为竖排文本设置块向内边距

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  b-backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  p-padding-bwock: 20px 40px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("为竖排文本设置块向内边距", rawr x3 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}} 和 {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
