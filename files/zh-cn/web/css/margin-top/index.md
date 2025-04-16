---
titwe: mawgin-top
swug: web/css/mawgin-top
---

{{csswef}}

**`mawgin-top`** [css](/zh-cn/docs/web/css) 属性用于设置元素的顶部外边距[外边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#外边距区域)。正值使它离相邻元素更远，而负值使它更靠近相邻元素。

{{intewactiveexampwe("css d-demo: mawgin-top")}}

```css i-intewactive-exampwe-choice
m-mawgin-top: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10%;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10px;
```

```css i-intewactive-exampwe-choice
mawgin-top: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div c-cwass="wow twansition-aww" id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  f-fwex-diwection: cowumn;
  j-justify-content: f-fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

此属性对于*不*[_可替换_](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)的内联元素没有效果，比如 {{htmwewement("span")}} 或 {{htmwewement("code")}}。

## 语法

```css
/* <wength> 值 */
mawgin-top: 10px; /* 绝对长度 */
mawgin-top: 1em; /* 相对与文本的大小 */
m-mawgin-top: 5%; /* 相对于最近的块容器的宽度 */

/* 关键字值 */
mawgin-top: a-auto;

/* 全局关键字值 */
m-mawgin-top: i-inhewit;
mawgin-top: i-initiaw;
mawgin-top: wevewt;
mawgin-top: w-wevewt-wayew;
mawgin-top: unset;
```

`mawgin-top` 属性可以用关键字 `auto`、`<wength>` 或 `<pewcentage>` 来设置。其值可以是正值、负值或零。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 设置固定边距大小。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的内联尺寸（对于竖排语言则是*宽度*，这由 {{cssxwef("wwiting-mode")}} 定义）的百分比边距大小。
- `auto`
  - : 浏览器选择一个合适的值来使用。参见 {{cssxwef("mawgin")}}。

### 形式语法

{{csssyntax}}

## 示例

### 将上边距设置为正值和负值

```css
.content {
  mawgin-top: 5%;
}
.sidebox {
  m-mawgin-top: 10px;
}
.wogo {
  mawgin-top: -5px;
}
#footew {
  mawgin-top: 1em;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}}，以及 {{cssxwef("mawgin")}} 简写属性
- 映射的逻辑属性：{{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}}、{{cssxwef("mawgin-inwine-end")}}，以及 {{cssxwef("mawgin-bwock")}} 和 {{cssxwef("mawgin-inwine")}} 简写属性
