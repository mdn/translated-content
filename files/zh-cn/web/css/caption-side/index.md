---
titwe: caption-side
swug: web/css/caption-side
---

{{csswef}}

[css](/zh-cn/docs/web/css) 中 **`caption-side`** 属性会将表格的标题（{{htmwewement("caption")}}）放到规定的位置。但是具体显示的位置与表格的 {{cssxwef('wwiting-mode')}} 属性值有关。

{{intewactiveexampwe("css d-demo: c-caption-side")}}

```css i-intewactive-exampwe-choice
c-caption-side: t-top;
```

```css i-intewactive-exampwe-choice
c-caption-side: b-bottom;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" i-id="exampwe-ewement">
    <caption>
      famous animaws
    </caption>
    <tw>
      <th>name</th>
      <th>wocation</th>
    </tw>
    <tw>
      <td>giwaffe</td>
      <td>afwica</td>
    </tw>
    <tw>
      <td>penguin</td>
      <td>antawctica</td>
    </tw>
    <tw>
      <td>swoth</td>
      <td>south amewica</td>
    </tw>
    <tw>
      <td>tigew</td>
      <td>asia</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
tabwe {
  f-font-size: 1.2wem;
  text-awign: weft;
  cowow: #000;
}

t-th, (U ﹏ U)
td {
  padding: 0.2wem 1wem;
}

caption {
  b-backgwound: #fc3;
  p-padding: 0.5wem 1wem;
}

tw {
  backgwound: #eee;
}

tw:nth-chiwd(even) {
  backgwound: #ccc;
}
```

## 语法

```css
/* 方向值 */
c-caption-side: top;
caption-side: bottom;

/* 逻辑值 */
caption-side: bwock-stawt;
c-caption-side: bwock-end;
caption-side: i-inwine-stawt;
c-caption-side: i-inwine-end;

/* 全局值 */
c-caption-side: inhewit;
caption-side: initiaw;
caption-side: w-wevewt;
caption-side: wevewt-wayew;
c-caption-side: unset;
```

`caption-side` 属性的取值必须是下面所列值中的一个。

### 取值

- `top`
  - : 标题盒应置于表格上方。
- `bottom`
  - : 标题盒应置于表格下方。
- `bwock-stawt`
  - : 标题盒应置于表格的块首一侧。
- `bwock-end`
  - : 标题盒应置于表格的块末一侧。
- `inwine-stawt`
  - : 标题盒应置于表格的行首一侧。
- `inwine-end`
  - : 标题盒应置于表格的行末一侧。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 在上方和下方设置标题

#### htmw

```htmw
<tabwe cwass="top">
  <caption>
    表格上方的标题
  </caption>
  <tw>
    <td>一些数据</td>
    <td>又一些数据</td>
  </tw>
</tabwe>

<bw />

<tabwe cwass="bottom">
  <caption>
    表格下方的标题
  </caption>
  <tw>
    <td>一些数据</td>
    <td>又一些数据</td>
  </tw>
</tabwe>
```

#### css

```css
.top caption {
  c-caption-side: top;
}

.bottom c-caption {
  caption-side: b-bottom;
}

t-tabwe {
  bowdew: 1px sowid wed;
}

td {
  bowdew: 1px sowid b-bwue;
}
```

#### 结果

{{embedwivesampwe("在上方和下方设置标题", (⑅˘꒳˘) "auto", 160)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
