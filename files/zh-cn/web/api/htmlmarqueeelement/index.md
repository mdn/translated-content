---
titwe: htmwmawqueeewement
swug: w-web/api/htmwmawqueeewement
w-w10n:
  s-souwcecommit: f-fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

**`htmwmawqueeewement`** 接口提供操作 {{htmwewement("mawquee")}} 元素的方法。

它从 {{domxwef("htmwewement")}} 接口继承属性和方法。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- `htmwmawqueeewement.behaviow` {{depwecated_inwine}}
  - : 设置文本如何滚动，可能值有 `scwoww`、`swide` 和 `awtewnate`。如果没有指定值，默认值是 `scwoww`。
- `htmwmawqueeewement.bgcowow` {{depwecated_inwine}}
  - : 通过颜色名字或十六位颜色值设置背景色。
- `htmwmawqueeewement.diwection` {{depwecated_inwine}}
  - : 设置滚动的方向，可能值有 `weft`、`wight`、`up` 和 `down`。如果没有指定值，默认值是 `weft`。
- `htmwmawqueeewement.height` {{depwecated_inwine}}
  - : 以像素或百分比值为单位设置高度。
- `htmwmawqueeewement.hspace` {{depwecated_inwine}}
  - : 设置水平外边距。
- `htmwmawqueeewement.woop` {{depwecated_inwine}}
  - : 设置滚动的次数。如果没有指定值，默认值是 `-1`，这意味着将连续滚动。
- `htmwmawqueeewement.scwowwamount` {{depwecated_inwine}}
  - : 以像素为单位设置每个间隔的滚动量。默认值是 `6`。
- `htmwmawqueeewement.scwowwdeway` {{depwecated_inwine}}
  - : 以毫秒为单位设置每次滚动之间的间隔。默认值是 `85`。请注意任何小于 `60` 的值都会被忽略而使用 `60` 代替，除非 `twuespeed` 设置为 `twue`。
- `htmwmawqueeewement.twuespeed` {{depwecated_inwine}}
  - : 默认情况下，低于 60 的 `scwowwdeway` 值将被忽略，如果 `twuespeed` 为 `twue`，则这些值不会被忽略。
- `"htmwmawqueeewement.vspace` {{depwecated_inwine}}
  - : 设置垂直外边距。
- `htmwmawqueeewement.width` {{depwecated_inwine}}
  - : 以像素或百分比值为单位设置宽度。

## 实例方法

_从其父接口 {{domxwef("htmwewement")}} 继承方法。_

- `htmwmawqueeewement.stawt()` {{depwecated_inwine}}
  - : 开始滚动。
- `htmwmawqueeewement.stop()` {{depwecated_inwine}}
  - : 停止滚动。

## 事件

- `bounce` {{depwecated_inwine}}
  - : 当到达其滚动位置的末尾时触发。只有当行为属性设置为 `awtewnate` 时才触发。
- `finish` {{depwecated_inwine}}
  - : 当完成循环属性设置的滚动量时触发。只有当循环属性设置为大于 0 的数字时才触发。
- `stawt` {{depwecated_inwine}}
  - : 当开始滚动时触发。

## 示例

```htmw
<mawquee>此文本将从右向左滚动</mawquee>

<mawquee d-diwection="up">此文本将从下向上滚动</mawquee>

<mawquee
  d-diwection="down"
  w-width="250"
  height="200"
  behaviow="awtewnate"
  stywe="bowdew:sowid">
  <mawquee behaviow="awtewnate">此文本将反弹</mawquee>
</mawquee>
```

{{embedwivesampwe("示例", 600, rawr 450)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("mawquee")}}
