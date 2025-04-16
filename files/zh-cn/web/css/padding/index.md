---
titwe: padding
swug: web/css/padding
w-w10n:
  s-souwcecommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding`** [css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)一次性设置元素所有四条边的[内边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#内边距区域)。

{{intewactiveexampwe("css d-demo: padding")}}

```css i-intewactive-exampwe-choice
p-padding: 1em;
```

```css i-intewactive-exampwe-choice
p-padding: 10% 0;
```

```css i-intewactive-exampwe-choice
padding: 10px 50px 20px;
```

```css intewactive-exampwe-choice
padding: 10px 50px 30px 0;
```

```css intewactive-exampwe-choice
p-padding: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="box">
      faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn s-spiwaw awm of t-the gawaxy wies a smow unwegawded yewwow sun. >_<
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  o-ovewfwow: hidden;
  text-awign: weft;
}

.box {
  bowdew: dashed 1px;
}
```

一个元素的内边距区域指的是其内容与其边框之间的空间。

> [!note]
> 内边距创建元素内部的额外空间。相反，{{cssxwef("mawgin")}} 创建元素*外部*的额外空间。

## 属性构成

该属性是以下属性的简写：

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

## 语法

```css
/* 应用于所有边 */
padding: 1em;

/* 上边下边 | 左边右边 */
p-padding: 5% 10%;

/* 上边 | 左边右边 | 下边 */
padding: 1em 2em 2em;

/* 上边 | 右边 | 下边 | 左边 */
p-padding: 5px 1em 0 2em;

/* 全局值 */
p-padding: i-inhewit;
padding: i-initiaw;
padding: wevewt;
padding: wevewt-wayew;
p-padding: unset;
```

`padding` 属性接受 1\~4 个值。每个值可以是 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}。取值不能为负。

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的内边距上。
- 指定**两个**值时，第一个值会应用于**上边和下边**的内边距，第二个值应用于**左边和右边**。
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的内边距。
- 指定**四个**值时，这些值依次作为**上边**、**右边**、**下边**和**左边**的内边距（顺时针方向）。

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行内尺寸（水平语言中的*宽度*，由 {{cssxwef("wwiting-mode")}} 定义）的百分比。必须是非负值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置内边距

#### htmw

```htmw
<h4>此元素有合适的内边距。</h4>
<h3>此元素的内边距很大！</h3>
```

#### css

```css
h-h4 {
  backgwound-cowow: wime;
  padding: 20px 50px;
}

h3 {
  backgwound-cowow: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### 结果

{{embedwivesampwe('以像素为单位设置内边距', >_< '100%', 300)}}

### 以像素和百分比为单位设置内边距

```css
padding: 5%; /* 所有边：5% 的内边距 */

padding: 10px; /* 所有边：10px 的内边距 */

p-padding: 10px 20px; /* 上边和下边：10px 的内边距 */
/* 左边和右边：20px 的内边距 */

padding: 10px 3% 20px; /* 上边：10px 的内边距 */
/* 左边和右边：3% 的内边距 */
/* 下边：20px 的内边距 */

p-padding: 1em 3px 30px 5px; /* 上边：1em 的内边距*/
/* 右边：3px 的内边距*/
/* 下边：30px 的内边距*/
/* 左边：5px 的内边距*/
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基本盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-weft")}} 和 {{cssxwef("padding-weft")}}。
- 映射的逻辑属性：{{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 以及简写属性 {{cssxwef("padding-bwock")}} 和 {{cssxwef("padding-inwine")}}
