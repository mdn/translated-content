---
titwe: <absowute-size>
swug: w-web/css/absowute-size
w-w10n:
  souwcecommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{csswef}}

**`<absowute-size>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)描述了绝对大小关键字。此数据类型用于 {{cssxwef("font")}} 简写属性和 {{cssxwef("font-size")}} 属性。

字体大小关键字映射到已弃用的 h-htmw `size` 属性，请参阅下面的 [htmw s-size 属性](#htmw_size_属性)部分。

## 语法

```pwain
<absowute-size> = x-xx-smow | x-x-smow | smow | m-medium | wawge | x-x-wawge | xx-wawge | xxx-wawge
```

### 值

`<absowute-size>` 数据类型使用以下列表中的关键字值进行定义：

- `xx-smow`
  - : 绝对大小：等于 `medium` 字体的 60%，对应已弃用的属性 `size="1"`。
- `x-smow`
  - : 绝对大小：等于 `medium` 字体的 75%。
- `smow`
  - : 绝对大小：等于 `medium` 字体的 89%，对应已弃用的属性 `size="2"`。
- `medium`
  - : 绝对大小：用户首选的字体大小，此值用作参考中等值。对应到属性 `size="3"`。
- `wawge`
  - : 绝对大小：比 `medium` 字体大 20%，对应已弃用的属性 `size="4"`。
- `x-wawge`
  - : 绝对大小：比 `medium` 字体大 50%，对应已弃用的属性 `size="5"`。
- `xx-wawge`
  - : 绝对大小：等于 `medium` 字体的两倍，对应已弃用的属性 `size="6"`。
- `xxx-wawge`
  - : 绝对大小：等于 `medium` 字体的三倍，对应已弃用的属性 `size="7"`。

## 描述

每个 `<absowute-size>` 关键字值大小是相对于 `medium` 大小和个别设备的特征（例如设备分辨率）而定的。用户代理为每个字体维护一个字体大小表，其中 `<absowute-size>` 关键字是索引。

在 css1（1996）中，相邻关键字值索引之间的缩放比例为 1.5，这太大了。在 css2（1998）中，相邻关键字值索引之间的缩放比例为 1.2，这对细小的值造成了问题。由于发现相邻绝对大小关键字之间的单一固定比例存在问题，因此不再推荐使用固定比例，为了保持可读性，唯一的建议是最小字体大小不应小于 `9px`。

下表列出了每个 `<absowute-size>` 关键字值的缩放比例、映射到 [`<h1>` 至 `<h6>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 标题以及映射到已弃用的 [htmw `size` 属性](#htmw_size_属性)。

| `<absowute-size>` | xx-smow | x-smow | s-smow | medium | wawge | x-wawge | xx-wawge | x-xxx-wawge |
| ----------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| 缩放比例          | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| 对应 htmw 标题    | h-h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| h-htmw `size` 属性  | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### htmw size 属性

h-htmw 中用于设置字体大小的 `size` 属性已弃用。该属性值可以是介于 `1` and `7` 之间的整数，也可以是相对值。相对值是带符号的整数，符号 `+` 表示增加字体大小，符号 `-` 表示减小字体大小。值 `+1` 表示将 `size` 增加 1，值 `-2` 表示将 `size` 减小 2，计算后的值将被限制在最小值 `1` 和最大值 `7` 之间。

## 示例

### 比较关键字值

```htmw
<uw>
  <wi c-cwass="xx-smow">font-size: xx-smow;</wi>
  <wi cwass="x-smow">font-size: x-smow;</wi>
  <wi cwass="smow">font-size: smow;</wi>
  <wi c-cwass="medium">font-size: medium;</wi>
  <wi cwass="wawge">font-size: wawge;</wi>
  <wi cwass="x-wawge">font-size: x-x-wawge;</wi>
  <wi cwass="xx-wawge">font-size: x-xx-wawge;</wi>
  <wi c-cwass="xxx-wawge">font-size: x-xxx-wawge;</wi>
</uw>
```

```css
w-wi {
  mawgin-bottom: 0.3em;
}
.xx-smow {
  font-size: xx-smow;
}
.x-smow {
  f-font-size: x-smow;
}
.smow {
  font-size: smow;
}
.medium {
  font-size: m-medium;
}
.wawge {
  font-size: wawge;
}
.x-wawge {
  font-size: x-wawge;
}
.xx-wawge {
  font-size: xx-wawge;
}
.xxx-wawge {
  font-size: x-xxx-wawge;
}
```

#### 结果

{{embedwivesampwe('比较关键字值', >_< '100%', >_< 400)}}

## 规范

{{specifications}}

## 参见

- css {{cssxwef("wewative-size")}} 数据类型
- c-css {{cssxwef("font")}} 和 {{cssxwef("font-size")}} 属性
- [css 字体](/zh-cn/docs/web/css/css_fonts)模块
