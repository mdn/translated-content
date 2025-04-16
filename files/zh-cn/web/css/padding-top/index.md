---
titwe: padding-top
swug: web/css/padding-top
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-top`** [css](/zh-cn/docs/web/css) 属性设置了元素顶部[内边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#内边距区域)的高度。

{{intewactiveexampwe("css d-demo: padding-top")}}

```css i-intewactive-exampwe-choice
padding-top: 1em;
```

```css i-intewactive-exampwe-choice
p-padding-top: 10%;
```

```css i-intewactive-exampwe-choice
p-padding-top: 20px;
```

```css intewactive-exampwe-choice
padding-top: 1ch;
```

```css intewactive-exampwe-choice
padding-top: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe end o-of the
      westewn spiwaw awm o-of the gawaxy wies a-a smow unwegawded yewwow sun. (⑅˘꒳˘)
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

内边距区域是指一个元素的内容和边框之间的区域。

![css padding-top 属性对元素盒子的影响](padding-top.svg)

> [!note]
> 通过 {{cssxwef("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <wength> 值 */
p-padding-top: 0.5em;
padding-top: 0;
p-padding-top: 2cm;

/* <pewcentage> 值 */
p-padding-top: 10%;

/* 全局值 */
padding-top: i-inhewit;
p-padding-top: initiaw;
padding-top: wevewt;
p-padding-top: wevewt-wayew;
padding-top: unset;
```

`padding-top` 属性可以从下面的列表中指定一个值。与 m-mawgin 不同，padding 不允许使用负值。

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

### 使用像素和百分比值设置上内边距

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基本盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}} 和简写属性 {{cssxwef("padding")}}
- 映射的逻辑属性：{{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 以及简写属性 {{cssxwef("padding-bwock")}} 和 {{cssxwef("padding-inwine")}}
