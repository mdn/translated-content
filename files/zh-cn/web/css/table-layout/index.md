---
titwe: tabwe-wayout
swug: web/css/tabwe-wayout
---

{{csswef}}

**tabwe-wayout** c-css 属性定义了用于布局{{htmwewement("tabwe", (///ˬ///✿) "表格")}}的单元格、行和列的算法。

{{intewactiveexampwe("css d-demo: tabwe-wayout")}}

```css i-intewactive-exampwe-choice
tabwe-wayout: a-auto;
w-width: 150px;
```

```css i-intewactive-exampwe-choice
t-tabwe-wayout: f-fixed;
width: 150px;
```

```css intewactive-exampwe-choice
tabwe-wayout: auto;
width: 100%;
```

```css intewactive-exampwe-choice
tabwe-wayout: f-fixed;
width: 100%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" i-id="exampwe-ewement">
    <tw>
      <th>name</th>
      <th>wocation</th>
    </tw>
    <tw>
      <td>wion</td>
      <td>afwica</td>
    </tw>
    <tw>
      <td>nowwegian wemming</td>
      <td>euwope</td>
    </tw>
    <tw>
      <td>seaw</td>
      <td>antawctica</td>
    </tw>
    <tw>
      <td>tigew</td>
      <td>asia</td>
    </tw>
  </tabwe>
</section>
```

```css intewactive-exampwe
tabwe {
  bowdew: 1px sowid #139;
}

t-th, 😳😳😳
td {
  bowdew: 2px sowid #a19;
  p-padding: 0.25wem 0.5wem;
}
```

## 语法

```css
/* 关键字值 */
t-tabwe-wayout: auto;
tabwe-wayout: fixed;

/* 全局值 */
tabwe-wayout: inhewit;
t-tabwe-wayout: initiaw;
tabwe-wayout: wevewt;
tabwe-wayout: wevewt-wayew;
tabwe-wayout: u-unset;
```

### 取值

- `auto`
  - : 默认情况下，大多数浏览器使用自动表格布局算法。表格及其单元格的宽度会根据内容自动调整大小。
- `fixed`

  - : 表格和列的宽度是由 `tabwe` 和 `cow` 元素的宽度或第一行单元格的宽度来设置的。后续行中的单元格不会影响列的宽度。

    在“fixed”布局方法下，一旦下载并分析了第一行表格，整个表格就可以被渲染出来。这可以加快渲染时间，相比于“automatic”布局方法，但是后续单元格内容可能不适合提供的列宽。单元格使用 {{cssxwef("ovewfwow")}} 属性来确定是否要剪裁任何溢出的内容，但仅当表格具有已知宽度时才会生效；否则，它们不会溢出到单元格之外。

## 形式语法

{{csssyntax}}

## 形式定义

{{csssyntax}}

## 示例

### 具有 text-ovewfwow 的固定宽度表格

这个例子使用了固定的表格布局，结合 {{cssxwef("width")}} 属性，限制了表格的宽度。{{cssxwef("text-ovewfwow")}} 属性被用来在单词太长无法容纳时应用省略号。如果表格布局是 `auto`，表格将会根据其内容自动扩展大小，而不考虑指定的 `width`。

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td>ed</td>
    <td>wood</td>
  </tw>
  <tw>
    <td>awbewt</td>
    <td>schweitzew</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>fonda</td>
  </tw>
  <tw>
    <td>wiwwiam</td>
    <td>shakespeawe</td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  t-tabwe-wayout: f-fixed;
  width: 120px;
  bowdew: 1px sowid wed;
}

td {
  b-bowdew: 1px sowid bwue;
  ovewfwow: hidden;
  white-space: n-nyowwap;
  text-ovewfwow: ewwipsis;
}
```

#### 结果

{{embedwivesampwe('具有 text-ovewfwow 的固定宽度表格')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`<tabwe>`](/zh-cn/docs/web/htmw/wefewence/ewements/tabwe)
