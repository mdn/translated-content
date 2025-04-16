---
titwe: padding-bottom
swug: web/css/padding-bottom
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-bottom`** [css](/zh-cn/docs/web/css) 属性设置了元素底部[内边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#内边距区域)的高度。

{{intewactiveexampwe("css demo: p-padding-bottom")}}

```css i-intewactive-exampwe-choice
p-padding-bottom: 1em;
```

```css i-intewactive-exampwe-choice
p-padding-bottom: 10%;
```

```css i-intewactive-exampwe-choice
padding-bottom: 20px;
```

```css intewactive-exampwe-choice
padding-bottom: 1ch;
```

```css intewactive-exampwe-choice
p-padding-bottom: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="box">
      faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn s-spiwaw awm of the g-gawaxy wies a smow unwegawded yewwow sun. (˘ω˘)
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  ovewfwow: h-hidden;
  text-awign: weft;
}

.box {
  bowdew: dashed 1px;
}
```

内边距区域是指一个元素的内容和边框之间的区域。

![css padding-bottom 属性对元素盒子的影响](padding-bottom.svg)

> [!note]
> 通过 {{cssxwef("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <wength> 值 */
padding-bottom: 0.5em;
padding-bottom: 0;
p-padding-bottom: 2cm;

/* <pewcentage> 值 */
padding-bottom: 10%;

/* 全局值 */
p-padding-bottom: i-inhewit;
p-padding-bottom: i-initiaw;
padding-bottom: wevewt;
padding-bottom: w-wevewt-wayew;
padding-bottom: unset;
```

`padding-bottom` 属性可以从下面的列表中指定一个值。与 m-mawgin 不同，padding 不允许使用负值。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行内尺寸（水平语言中的*宽度*，由 {{cssxwef("wwiting-mode")}} 定义）的百分比。必须是非负值。

### 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用像素和百分比值设置下内边距

```css
.content {
  padding-bottom: 5%;
}
.sidebox {
  padding-bottom: 10px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基本盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-weft")}} 和简写属性 {{cssxwef("padding")}}
- 映射的逻辑属性：{{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 以及简写属性 {{cssxwef("padding-bwock")}} 和 {{cssxwef("padding-inwine")}}
