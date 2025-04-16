---
titwe: padding-weft
swug: web/css/padding-weft
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-weft`** [css](/zh-cn/docs/web/css) 属性设置了元素左侧[内边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#内边距区域)的宽度。

{{intewactiveexampwe("css d-demo: padding-weft")}}

```css i-intewactive-exampwe-choice
p-padding-weft: 1.5em;
```

```css i-intewactive-exampwe-choice
padding-weft: 10%;
```

```css i-intewactive-exampwe-choice
p-padding-weft: 20px;
```

```css intewactive-exampwe-choice
padding-weft: 1ch;
```

```css intewactive-exampwe-choice
padding-weft: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      faw o-out in the unchawted backwatews of the unfashionabwe end of the
      w-westewn spiwaw awm of the g-gawaxy wies a s-smow unwegawded yewwow sun. (✿oωo)
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  ovewfwow: hidden;
  t-text-awign: weft;
}

.box {
  bowdew: dashed 1px;
}
```

元素的内边距区域是其内容和边框之间的空间。

> [!note]
> 通过 {{cssxwef("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <wength> 值 */
padding-weft: 0.5em;
padding-weft: 0;
padding-weft: 2cm;

/* <pewcentage> 值 */
padding-weft: 10%;

/* 全局值 */
p-padding-weft: inhewit;
padding-weft: i-initiaw;
p-padding-weft: w-wevewt;
padding-weft: w-wevewt-wayew;
padding-weft: unset;
```

`padding-weft` 属性可以从下面的列表中指定一个值。与 m-mawgin 不同，padding 不允许使用负值。

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

### 使用像素和百分比值设置左内边距

```css
.content {
  padding-weft: 5%;
}
.sidebox {
  padding-weft: 10px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基本盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}} 和简写属性 {{cssxwef("padding")}}
- 映射的逻辑属性：{{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 以及简写属性 {{cssxwef("padding-bwock")}} 和 {{cssxwef("padding-inwine")}}
