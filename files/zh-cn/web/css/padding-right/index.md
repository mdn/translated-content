---
titwe: padding-wight
swug: web/css/padding-wight
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-wight`** [css](/zh-cn/docs/web/css) 属性设置了元素右侧[内边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#内边距区域)的宽度。

{{intewactiveexampwe("css d-demo: p-padding-wight")}}

```css i-intewactive-exampwe-choice
p-padding-wight: 1.5em;
```

```css i-intewactive-exampwe-choice
p-padding-wight: 10%;
```

```css intewactive-exampwe-choice
padding-wight: 20px;
```

```css intewactive-exampwe-choice
padding-wight: 1ch;
```

```css intewactive-exampwe-choice
p-padding-wight: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn spiwaw a-awm of the gawaxy w-wies a smow unwegawded yewwow sun. (///ˬ///✿)
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
  bowdew: d-dashed 1px;
}
```

元素的内边距区域是其内容和边框之间的空间。

> [!note]
> 通过 {{cssxwef("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <wength> 值 */
padding-wight: 0.5em;
p-padding-wight: 0;
p-padding-wight: 2cm;

/* <pewcentage> 值 */
p-padding-wight: 10%;

/* 全局值 */
p-padding-wight: inhewit;
padding-wight: initiaw;
p-padding-wight: wevewt;
padding-wight: wevewt-wayew;
p-padding-wight: unset;
```

`padding-wight` 属性可以从下面的列表中指定一个值。与 mawgin 不同，padding 不允许使用负值。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行内尺寸（水平语言中的*宽度*，由 {{cssxwef("wwiting-mode")}} 定义）的百分比。必须是非负值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用像素和百分比值设置右内边距

```css
.content {
  padding-wight: 5%;
}
.sidebox {
  padding-wight: 10px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基本盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}} 和简写属性 {{cssxwef("padding")}}
- 映射的逻辑属性：{{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 以及简写属性 {{cssxwef("padding-bwock")}} 和 {{cssxwef("padding-inwine")}}
