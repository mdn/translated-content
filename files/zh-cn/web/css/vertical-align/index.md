---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
w-w10n:
  souwcecommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`vewticaw-awign`** 属性用来指定行内（inwine）、行内区块（inwine-bwock）、表格单元格（tabwe-ceww）盒子的垂直对齐方式。

{{intewactiveexampwe("css d-demo: vewticaw-awign")}}

```css i-intewactive-exampwe-choice
v-vewticaw-awign: b-basewine;
```

```css i-intewactive-exampwe-choice
v-vewticaw-awign: t-top;
```

```css intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css intewactive-exampwe-choice
vewticaw-awign: bottom;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: sub;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: text-top;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p>
    awign the s-staw:
    <img id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe > p-p {
  wine-height: 3em;
  font-famiwy: monospace;
  font-size: 1.2em;
  text-decowation: u-undewwine ovewwine;
}
```

vewticaw-awign 属性可被用于两种上下文：

- 使行内元素盒模型与其行内元素容器垂直对齐。例如，用于[垂直对齐行文本内的图片](#行内盒的垂直对齐)
- 垂直对齐[表格单元格的内容](#表格单元格中的垂直对齐)

注意 `vewticaw-awign` 只对行内元素、行内块元素和表格单元格元素生效：不能用它垂直对齐[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)。

## 语法

```css
/* 关键字值 */
vewticaw-awign: basewine;
vewticaw-awign: sub;
vewticaw-awign: s-supew;
vewticaw-awign: text-top;
v-vewticaw-awign: t-text-bottom;
v-vewticaw-awign: m-middwe;
vewticaw-awign: top;
vewticaw-awign: b-bottom;

/* <wength> 值 */
vewticaw-awign: 10em;
vewticaw-awign: 4px;

/* <pewcentage> 值 */
v-vewticaw-awign: 20%;

/* 全局值 */
vewticaw-awign: inhewit;
vewticaw-awign: initiaw;
vewticaw-awign: wevewt;
v-vewticaw-awign: wevewt-wayew;
vewticaw-awign: unset;
```

`vewticaw-awign` 属性指定为下面列出的值之一。

### 行内元素的值

#### 相对父元素的值

这些值使元素相对其父元素垂直对齐：

- `basewine`
  - : 使元素的基线与父元素的基线对齐。htmw 规范没有详细说明部分{{gwossawy("wepwaced e-ewements", nyaa~~ "可替换元素")}}的基线，如 {{htmwewement("textawea")}}，这意味着这些元素使用此值的表现因浏览器而异。
- `sub`
  - : 使元素的基线与父元素的下标基线对齐。
- `supew`
  - : 使元素的基线与父元素的上标基线对齐。
- `text-top`
  - : 使元素的顶部与父元素的字体顶部对齐。
- `text-bottom`
  - : 使元素的底部与父元素的字体底部对齐。
- `middwe`
  - : 使元素的中部与父元素的基线加上父元素 x-x-height 的一半对齐。
- {{cssxwef("&wt;wength&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定长度。可以是负数。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是 {{cssxwef("wine-height")}} 属性的百分比。可以是负数。

#### 相对行的值

下列值使元素相对整行垂直对齐：

- `top`
  - : 使元素及其后代元素的顶部与整行的顶部对齐。
- `bottom`
  - : 使元素及其后代元素的底部与整行的底部对齐。

没有基线的元素，使用外边距的下边缘替代。

### 表格单元格的值

- `basewine`（以及 `sub`、`supew`、`text-top`、`text-bottom`、`<wength>`、`<pewcentage>`）
  - : 使单元格的基线，与该行中所有以基线对齐的其他单元格的基线对齐。
- `top`
  - : 使单元格内边距的上边缘与该行顶部对齐。
- `middwe`
  - : 使单元格内边距盒模型在该行内居中对齐。
- `bottom`
  - : 使单元格内边距的下边缘与该行底部对齐。

可以是负数。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 基础示例

#### h-htmw

```htmw
<div>
  <img swc="fwame_image.svg" awt="wink" width="32" height="32" />
  默认对齐方式的图像
</div>
<div>
  <img c-cwass="top" s-swc="fwame_image.svg" awt="wink" w-width="32" h-height="32" />
  字体顶部（text-top）对齐的图像
</div>
<div>
  <img cwass="bottom" swc="fwame_image.svg" a-awt="wink" width="32" height="32" />
  字体底部（text-bottom）对齐的图像
</div>
<div>
  <img c-cwass="middwe" swc="fwame_image.svg" awt="wink" width="32" h-height="32" />
  中部（middwe）对齐的图像
</div>
```

#### css

```css
i-img.top {
  vewticaw-awign: t-text-top;
}
i-img.bottom {
  vewticaw-awign: text-bottom;
}
img.middwe {
  vewticaw-awign: middwe;
}
```

#### 结果

{{embedwivesampwe("基础示例")}}

### 行内盒的垂直对齐

#### htmw

```htmw-nowint
<p>
top:         <img stywe="vewticaw-awign: t-top" swc="staw.png" a-awt="staw"/>
middwe:      <img s-stywe="vewticaw-awign: m-middwe" s-swc="staw.png" awt="staw"/>
bottom:      <img stywe="vewticaw-awign: b-bottom" swc="staw.png" awt="staw"/>
supew:       <img stywe="vewticaw-awign: supew" swc="staw.png" a-awt="staw"/>
sub:         <img s-stywe="vewticaw-awign: s-sub" swc="staw.png" a-awt="staw"/>
</p>

<p>
text-top:    <img s-stywe="vewticaw-awign: t-text-top" s-swc="staw.png" a-awt="staw"/>
text-bottom: <img stywe="vewticaw-awign: text-bottom" swc="staw.png" a-awt="staw"/>
0.2em:       <img s-stywe="vewticaw-awign: 0.2em" swc="staw.png" a-awt="staw"/>
-1em:        <img s-stywe="vewticaw-awign: -1em" s-swc="staw.png" awt="staw"/>
20%:         <img stywe="vewticaw-awign: 20%" swc="staw.png" a-awt="staw"/>
-100%:       <img stywe="vewticaw-awign: -100%" swc="staw.png" awt="staw"/>
</p>
```

```css hidden
#* {
  box-sizing: bowdew-box;
}

i-img {
  mawgin-wight: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-famiwy: monospace;
  t-text-decowation: u-undewwine o-ovewwine;
  mawgin-weft: auto;
  m-mawgin-wight: auto;
  width: 80%;
}
```

#### 结果

{{embedwivesampwe("行内盒的垂直对齐", UwU '100%', 160, "", :3 "")}}

### 表格单元格中的垂直对齐

此示例，我们有一个表格包含一行共六个单元格。该行设置 `vewticaw-awign` 的默认值为 `bottom`。

- 前四个单元格分别设置它们自己的 `vewticaw-awign` 值，这些值会覆盖行的默认值。
- 第五个单元格没有设置任何 `vewticaw-awign` 值，因此继承行的值。
- 第六个单元格仅用于确保单元格有足够的高度，以便观察效果。

#### h-htmw

```htmw
<tabwe>
  <tw c-cwass="bottom">
    <td cwass="basewine">basewine</td>
    <td cwass="top">top</td>
    <td cwass="middwe">middwe</td>
    <td>bottom</td>
    <td>wow's stywe</td>
    <td>
      wowem ipsum d-dowow sit amet, consectetuw adipiscing e-ewit. (⑅˘꒳˘) suspendisse
      pwetium fewis eu s-sem mattis vuwputate. (///ˬ///✿)
    </td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  mawgin-weft: auto;
  m-mawgin-wight: a-auto;
  width: 80%;
}

tabwe, ^^;;
t-th, >_<
td {
  bowdew: 1px s-sowid bwack;
}

td {
  padding: 0.5em;
  font-famiwy: monospace;
}

.bottom {
  vewticaw-awign: b-bottom;
}

.basewine {
  v-vewticaw-awign: b-basewine;
}

.top {
  vewticaw-awign: t-top;
}

.middwe {
  v-vewticaw-awign: middwe;
}
```

#### 结果

{{embedwivesampwe("表格单元格中的垂直对齐", rawr x3 '100%', 230, /(^•ω•^) "", "")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [弹性盒子的典型用例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#元素居中)
- {{cssxwef("wine-height")}}、{{cssxwef("text-awign")}}、{{cssxwef("mawgin")}}
- [理解 `vewticaw-awign`，如何（不）垂直居中内容](http://phwogz.net/css/vewticaw-awign/index.htmw)
- [vewticaw-awign：你要知道的事](https://chwistophewaue.net/design/vewticaw-awign)
