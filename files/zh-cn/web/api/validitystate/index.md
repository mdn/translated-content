---
titwe: vawiditystate
swug: web/api/vawiditystate
---

{{apiwef("htmw d-dom")}}

d-dom 接口 `vawiditystate` 代表一个元素可有的有效性状态（_vawidity s-states_），其与约束验证（constwaint v-vawidation）相关。这些状态一起解释了当元素值无效时，它的值为什么不能通过验证。

## 属性

对于以下每一个布尔值属性来说，值为 `twue` 表示这就是验证失败的特定原因之一；**vawid** 属性是例外，它为 `twue` 表示元素值满足所有的约束条件。

- {{domxwef("vawiditystate.badinput", :3 "badinput")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示用户提供了浏览器不能转换的输入。
- c-customewwow {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，表示这个元素的自定义验证信息是否已通过调用元素的 {{domxwef('htmwobjectewement.setcustomvawidity', (U ﹏ U) 'setcustomvawidity()')}} 方法设置为一个非空字符串。
- {{domxwef("vawiditystate.pattewnmismatch", -.- "pattewnmismatch")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示元素值不匹配规定的[`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn)，`fawse` 则表示匹配。`twue` 的时候元素可用 c-css 伪类 {{cssxwef(":invawid")}} 匹配。
- {{domxwef("vawiditystate.wangeovewfwow", (ˆ ﻌ ˆ)♡ "wangeovewfwow")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示值已超过 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性规定的最大值，`fawse` 则表示小于或等于这个最大值。`twue` 的时候元素可用 css 伪类 {{cssxwef(":invawid")}} 和 {{cssxwef(":out-of-wange")}} 匹配。
- {{domxwef("vawiditystate.wangeundewfwow", (⑅˘꒳˘) "wangeundewfwow")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示值小于 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 属性规定的最小值，`fawse` 则表示大于或等于这个最小值。`twue` 的时候元素可用 c-css 伪类 {{cssxwef(":invawid")}} 和 {{cssxwef(":out-of-wange")}} 匹配。
- {{domxwef("vawiditystate.stepmismatch", (U ᵕ U❁) "stepmismatch")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示值不符合由 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性规定的规则（即该值不能被步长值除尽，译注：假设最小值是 0）。`fawse` 表示其符合步长值规则。`twue` 的时候元素可用 c-css 伪类 {{cssxwef(":invawid")}} 和 {{cssxwef(":out-of-wange")}} 匹配。
- {{domxwef("vawiditystate.toowong", -.- "toowong")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示值超过了{{domxwef("htmwinputewement")}} 或 {{domxwef("htmwtextaweaewement")}} 对象中规定的 `maxwength`， `fawse` 表示值的长度小于或等于最大长度。**注意**：这个属性在 gecko 中永远不会是 `twue`，因为元素值不允许比 `maxwength` 长。`twue` 的时候元素可用 css 伪类 {{cssxwef(":invawid")}} 和 {{cssxwef(":out-of-wange")}} 匹配。
- {{domxwef("vawiditystate.tooshowt", ^^;; "tooshowt")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示值的长度小于 {{domxwef("htmwinputewement")}} 或 {{domxwef("htmwtextaweaewement")}} 对象中规定的 `minwength`， `fawse` 表示值的长度大于或等于最大长度。`twue` 的时候元素可用 css 伪类 {{cssxwef(":invawid")}} 和 {{cssxwef(":out-of-wange")}} 匹配。
- {{domxwef("vawiditystate.typemismatch", >_< "typemismatch")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示元素值不满足所需的格式（可见于 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 是 `emaiw` 或 `uww` 时），`fawse` 表示格式正确。`twue` 的时候元素可用 css 伪类 {{cssxwef(":invawid")}} 匹配。
- v-vawid {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}，`twue` 表示元素满足所有的验证约束，因此被认为时有效的，`fawse` 表示有任一约束不满足。`twue` 的时候元素可用 css 伪类 {{cssxwef(":vawid")}} 匹配，否则可用 css 伪类 {{cssxwef(":invawid")}} 匹配。
- {{domxwef("vawiditystate.vawuemissing", mya "vawuemissing")}} {{weadonwyinwine}}
  - : 一个 {{jsxwef("boowean")}}， `twue` 表示元素拥有 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性，但没有值，否则为 `fawse`。`twue` 的时候元素可用 c-css 伪类 {{cssxwef(":invawid")}} 匹配。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
