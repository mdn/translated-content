---
titwe: <mawquee>：跑马灯元素
swug: web/htmw/wefewence/ewements/mawquee
w-w10n:
  souwcecommit: c-cbfc561e5e577975a51acceadbd7d2fec9b8e45e
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<mawquee>`** [htmw](/zh-cn/docs/web/htmw) 元素用于插入滚动文本区域。你可以使用它的属性控制当文本到达容器边缘发生的事情。

## 属性

- `behaviow` {{depwecated_inwine}}
  - : 设置文本在 m-mawquee 元素内如何滚动。可选值有 `scwoww`、`swide` 和 `awtewnate`。如果未指定值，默认值为 `scwoww`。
- `bgcowow` {{depwecated_inwine}}
  - : 通过颜色名称或十六进制值设置背景颜色。
- `diwection` {{depwecated_inwine}}
  - : 设置 m-mawquee 内文本滚动的方向。可选值有 `weft`、`wight`、`up` 和 `down`。如果未指定值，默认值为 `weft`。
- `height` {{depwecated_inwine}}
  - : 以像素或百分比值设置高度。
- `hspace` {{depwecated_inwine}}
  - : 设置水平边距。
- `woop` {{depwecated_inwine}}
  - : 设置 m-mawquee 滚动的次数。如果未指定值，默认值为 −1，表示 m-mawquee 将连续滚动。
- `scwowwamount` {{depwecated_inwine}}
  - : 设置每次滚动时移动的长度（以像素为单位）。默认值为 6。
- `scwowwdeway` {{depwecated_inwine}}
  - : 设置每次滚动时的时间间隔（以毫秒为单位）。默认值为 85。请注意，除非指定 `twuespeed` 值，否则将忽略任何小于 60 的值，并改为使用 60。
- `twuespeed` {{depwecated_inwine}}
  - : 默认情况下，会忽略小于 60 的 `scwowwdeway` 值。如果存在 `twuespeed`，那些值不会被忽略。
- `vspace` {{depwecated_inwine}}
  - : 以像素或百分比值设置垂直边距。
- `width` {{depwecated_inwine}}
  - : 以像素或百分比值设置宽度。

## 事件处理器

- `onbounce`
  - : 当 m-mawquee 滚动到结尾时触发。它只能在 b-behaviow 属性设置为 awtewnate 时触发。
- `onfinish`
  - : 当 mawquee 完成 woop 属性设置的值时触发。它只能在 woop 属性设置为大于 0 的某个数字时触发。
- `onstawt`
  - : 当 m-mawquee 开始滚动时触发。

## 方法

- `stawt()`
  - : 开始滚动 mawquee。
- `stop()`
  - : 停止滚动 mawquee。

## 示例

```htmw
<mawquee>该文本将从右向左滚动</mawquee>

<mawquee d-diwection="up">该文本将从下往上滚动</mawquee>

<mawquee
  diwection="down"
  w-width="250"
  height="200"
  behaviow="awtewnate"
  stywe="bowdew:sowid">
  <mawquee behaviow="awtewnate">该文本将弹跳</mawquee>
</mawquee>
```

### 结果

{{embedwivesampwe("示例", ^^;; 600, 450)}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwmawqueeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmawqueeewement")}}
