---
title: ValidityState
slug: Web/API/ValidityState
---

{{APIRef("HTML DOM")}}

DOM 接口 `ValidityState` 代表一个元素可有的有效性状态（_validity states_），其与约束验证（constraint validation）相关。这些状态一起解释了当元素值无效时，它的值为什么不能通过验证。

## 属性

对于以下每一个布尔值属性来说，值为 `true` 表示这就是验证失败的特定原因之一；**valid** 属性是例外，它为 `true` 表示元素值满足所有的约束条件。

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示用户提供了浏览器不能转换的输入。
- customError {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，表示这个元素的自定义验证信息是否已通过调用元素的 {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} 方法设置为一个非空字符串。
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示元素值不匹配规定的[`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern)，`false` 则表示匹配。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 匹配。
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示值已超过 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性规定的最大值，`false` 则表示小于或等于这个最大值。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 匹配。
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示值小于 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 属性规定的最小值，`false` 则表示大于或等于这个最小值。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 匹配。
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示值不符合由 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性规定的规则（即该值不能被步长值除尽，译注：假设最小值是 0）。`false` 表示其符合步长值规则。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 匹配。
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示值超过了{{domxref("HTMLInputElement")}} 或 {{domxref("HTMLTextAreaElement")}} 对象中规定的 `maxlength`， `false` 表示值的长度小于或等于最大长度。**注意**：这个属性在 Gecko 中永远不会是 `true`，因为元素值不允许比 `maxlength` 长。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 匹配。
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示值的长度小于 {{domxref("HTMLInputElement")}} 或 {{domxref("HTMLTextAreaElement")}} 对象中规定的 `minlength`， `false` 表示值的长度大于或等于最大长度。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 匹配。
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示元素值不满足所需的格式（可见于 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 是 `email` 或 `url` 时），`false` 表示格式正确。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 匹配。
- valid {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，`true` 表示元素满足所有的验证约束，因此被认为时有效的，`false` 表示有任一约束不满足。`true` 的时候元素可用 CSS 伪类 {{cssxref(":valid")}} 匹配，否则可用 CSS 伪类 {{cssxref(":invalid")}} 匹配。
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}， `true` 表示元素拥有 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，但没有值，否则为 `false`。`true` 的时候元素可用 CSS 伪类 {{cssxref(":invalid")}} 匹配。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单数据校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
