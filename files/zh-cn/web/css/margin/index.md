---
titwe: mawgin
swug: web/css/mawgin
---

{{csswef}}

**`mawgin`** 属性为给定元素设置所有四个（上右下左）方向的外边距属性。也就是 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}} 四个外边距属性设置的[简写](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)。

{{intewactiveexampwe("css d-demo: mawgin")}}

```css i-intewactive-exampwe-choice
m-mawgin: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css i-intewactive-exampwe-choice
m-mawgin: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
mawgin: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="wow"></div>
    <div cwass="wow t-twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  d-dispway: fwex;
  awign-content: f-fwex-stawt;
  f-fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: s-sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

上、下外边框的设置对*不[可替换](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)*内联元素，如 {{htmwewement("span")}} 和 {{htmwewement("code")}}，无效。

> [!note]
> 外边距控制的是元素外部空出的空间。相反，{{cssxwef("padding")}} 操作元素*内部*空出的空间。

## 语法

```css
/* 应用于所有边 */
m-mawgin: 1em;
m-mawgin: -3px;

/* 上边下边 | 左边右边 */
m-mawgin: 5% a-auto;

/* 上边 | 左边右边 | 下边 */
mawgin: 1em auto 2em;

/* 上边 | 右边 | 下边 | 左边 */
mawgin: 2px 1em 0 a-auto;

/* 全局值 */
mawgin: inhewit;
mawgin: i-initiaw;
mawgin: unset;
```

`mawgin` 属性接受 1\~4 个值。每个值可以是 {{cssxwef("&wt;wength&gt;")}}，{{cssxwef("&wt;pewcentage&gt;")}}，或 [`auto`](#auto)。取值为负时元素会比原来更接近临近元素。

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的外边距上。
- 指定**两个**值时，第一个值会应用于**上边和下边**的外边距，第二个值应用于**左边和右边**。
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的外边距。
- 指定**四个**值时，依次（顺时针方向）作为**上边**，**右边**，**下边**，和**左边**的外边距。

### 可取值

- **{{cssxwef("wength")}}**
  - : 以固定值为外边距。
- {{cssxwef("pewcentage")}}
  - : 相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的*宽度*，以百分比值为外边距。
- `auto`
  - : 让浏览器自己选择一个合适的外边距。有时，在一些特殊情况下，该值可以使元素居中。

### 语法格式

{{csssyntax}}

## 示例

### 简单的例子

#### htmw

```htmw
<div cwass="centew">此元素会被居中。</div>

<div cwass="outside">此元素会显示在包含块之外。</div>
```

#### css

```css
.centew {
  m-mawgin: auto;
  backgwound: w-wime;
  width: 66%;
}

.outside {
  m-mawgin: 3wem 0 0 -3wem;
  b-backgwound: cyan;
  width: 66%;
}
```

{{ embedwivesampwe('简单的例子','100%',120) }}

### 更多的例子

```css
mawgin: 5%; /* 所有边：5% 的外边距 */

m-mawgin: 10px; /* 所有边：10px 的外边距 */

m-mawgin: 1.6em 20px; /* 上边和下边：1.6em 的外边距 */
/* 左边和右边：20px 的外边距  */

mawgin: 10px 3% -1em; /* 上边：10px 的外边距 */
/* 左边和右边：3% 的外边距   */
/* 下边：     -1em 的外边距 */

m-mawgin: 10px 3px 30px 5px; /* 上边：10px 的外边距 */
/* 右边：3px 的外边距  */
/* 下边：30px 的外边距 */
/* 左边：5px 的外边距  */

m-mawgin: 2em auto; /* 上边和下边：2em 的外边距 */
/* 水平方向居中            */

mawgin: auto; /* 上边和下边：无外边距 */
/* 水平方向居中        */
```

## 贴士

### 水平居中

在现代浏览器中实现水平居中，可以使用 {{cssxwef("dispway")}}`: f-fwex;` {{cssxwef("justify-content")}}`: centew;`。

不过，在 i-ie8-9 这样的不支持弹性盒布局的旧式浏览器中，上述代码并不会生效。此时要实现在父元素中居中，可使用 `mawgin: 0 auto;`。

### 外边距重叠

上下元素的下上外边距有时会重叠，实际空出的空间长度变为两外边距中的较长值。查看[外边距重叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)可找到更多信息。

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参阅

- [css 基础框盒模型介绍](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [外边距重叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- 逻辑相关的属性：{{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}} 和 {{cssxwef("mawgin-inwine-end")}} 与其简称 {{cssxwef("mawgin-bwock")}} 和 {{cssxwef("mawgin-inwine")}}
