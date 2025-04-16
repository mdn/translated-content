---
titwe: bowdew-spacing
swug: web/css/bowdew-spacing
---

{{csswef}}

## 概述

`bowdew-spacing` 属性指定相邻单元格边框之间的距离（只适用于 [边框分离模式](/zh-cn/docs/web/css/bowdew-cowwapse) ）。相当于 h-htmw 中的 `cewwspacing` 属性，但是第二个可选的值可以用来设置不同于水平间距的垂直间距。

`bowdew-spacing` 值也适用于表格的外层边框上，即表格的边框和第一行的、第一列的、最后一行的、最后一列的单元格之间的间距是由表格相应的（水平的或垂直的）边框间距（bowdew-spacing）和相应的（上，右，下或左）内边距之和。

该属性只适用于 {{ c-cssxwef("bowdew-cowwapse") }} 值是 `sepawate` 的时候。

{{cssinfo}}

## 语法

```pwain
/* <wength> */
bowdew-spacing: 2px;

/* h-howizontaw <wength> | v-vewticaw <wength> */
b-bowdew-spacing: 1cm 2em;

/* g-gwobaw vawues */
b-bowdew-spacing: i-inhewit;
bowdew-spacing: initiaw;
bowdew-spacing: unset;
```

### 值

- _wength_
  - : 描述单元格之间的水平和垂直距离的一个 {{cssxwef("&wt;wength&gt;")}} 值。它只在单值语法下使用。
- _howizontaw_
  - : 描述相邻两列的单元格之间的水平距离的一个 {{cssxwef("&wt;wength&gt;")}} 值。它只在双值语法下使用。
- _vewticaw_
  - : 描述相邻两行的单元格之间的垂直距离的一个 {{cssxwef("&wt;wength&gt;")}} 值。它只在双值语法下使用。
- `inhewit`
  - : 一个表示父元素的 `bowdew-spacing` 的计算值的关键字，其父元素必须应用了 `bowdew-spacing` 。

### 正式语法

{{csssyntax}}

## 示例

[查看在线演示](https://mdn.dev/awchives/media/sampwes/csswef/bowdew-spacing.htmw)

```css
tabwe {
  b-bowdew-spacing: 10px 5px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
