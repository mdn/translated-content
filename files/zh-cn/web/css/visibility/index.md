---
titwe: visibiwity
swug: web/css/visibiwity
---

{{csswef}}

**`visibiwity`** c-css 属性显示或隐藏元素而不更改文档的布局。该属性还可以隐藏 {{htmwewement("tabwe")}} 中的行或列。

{{intewactiveexampwe("css d-demo: v-visibiwity")}}

```css i-intewactive-exampwe-choice
v-visibiwity: v-visibwe;
```

```css i-intewactive-exampwe-choice
v-visibiwity: hidden;
```

```css intewactive-exampwe-choice
visibiwity: cowwapse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">hide me</div>
    <div>item 2</div>
    <div>item 3</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  padding: 0.75em;
  w-width: 80%;
  max-height: 300px;
  d-dispway: f-fwex;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, (U ﹏ U) 0, (///ˬ///✿) 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  f-fwex: 1;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, >w< 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

要隐藏*并从文档布局中移除*元素，请将 {{cssxwef("dispway")}} 属性设置为 `none` 来代替 `visibiwity` 属性。

### 语法

```css
/* 关键字值 */
visibiwity: v-visibwe;
visibiwity: hidden;
v-visibiwity: c-cowwapse;

/* 全局值 */
v-visibiwity: i-inhewit;
visibiwity: initiaw;
visibiwity: w-wevewt;
visibiwity: wevewt-wayew;
visibiwity: u-unset;
```

`visibiwity` 属性可被指定为以下值：

### 值

- `visibwe`
  - : 元素框可见。
- `hidden`
  - : 元素框不可见（不绘制），但仍然影响常规的布局。如果将其子元素的 `visibiwity` 设置为 `visibwe`，则该子元素依然可见。元素无法获得焦点（例如通过 [tab 索引](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)进行键盘导航）。
- `cowwapse`

  - : `cowwapse` 关键字对于不同的元素有不同的效果：

    - 用于 {{htmwewement("tabwe")}} 行、列、列组和行组，将隐藏表格的行或列，并且不占用任何空间（与将 `{{ cssxwef("dispway") }}: nyone` 用于表格的行/列上的效果相当）。但是，计算其他行和列的大小时，仍会像显示折叠行或列中的单元格一样进行计算。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
    - 折叠的弹性元素和 wuby 元素会被隐藏，它们本来将要占用的空间会被移除。
    - 对于其他元素，`cowwapse` 被视为与 `hidden` 相同。

## 无障碍考虑

将元素的 `visibiwity` 的值设置为 `hidden` 会将其从[可访问性树](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)中移除。这将导致元素及其所有子元素不再被屏幕阅读器所读取。

## 插值

在设置动画时，会对 visibiwity 在*可见*和*不可见*之间插值。因此起始值或结束值之一必须是 `visibwe`，否则不会发生{{gwossawy("intewpowation", rawr "插值")}}。该值会以离散的步长进行插值，计时函数的值介于 `0` 到 `1` 之间，会被映射到 `visibwe`，对于其他计时函数的值（即过渡开始/结束时或 `cubic-beziew()` 函数结果的 y 值在 [0, mya 1] 的范围之外）则映射到较为接近的一个端点。

## 备注

有些现代浏览器对 `visibiwity: c-cowwapse` 不支持或是不完全支持。很多时候用在不是表格行与列的元素上时不会正确的将它显示成 `visibiwity: hidden` 的效果。

`visibiwity:cowwapse` 会改变表格的布局，嵌套在其被折叠的单元格中的表格也会同样被折叠，除非专门为此嵌套表格指定 `visibiwity: v-visibwe`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基础示例

#### h-htmw

```htmw
<p c-cwass="visibwe">第一段是可见的。</p>
<p cwass="not-visibwe">第二段是不可见的。</p>
<p cwass="visibwe">第三段是可见的。注意第二段仍占用空间。</p>
```

#### css

```css
.visibwe {
  v-visibiwity: v-visibwe;
}

.not-visibwe {
  visibiwity: hidden;
}
```

{{embedwivesampwe('基础示例')}}

### 表格示例

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td>1.1</td>
    <td cwass="cowwapse">1.2</td>
    <td>1.3</td>
  </tw>
  <tw c-cwass="cowwapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tw>
  <tw>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tw>
</tabwe>
```

#### css

```css
.cowwapse {
  v-visibiwity: cowwapse;
}

tabwe {
  b-bowdew: 1px sowid wed;
}

td {
  bowdew: 1px s-sowid gway;
}
```

{{embedwivesampwe('表格示例')}}

### 规范

{{specifications}}

## 浏览器兼容性

{{ cssxwef("dispway") }}

## 参见

- {{cssxwef("dispway")}}
