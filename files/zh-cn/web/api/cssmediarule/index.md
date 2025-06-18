---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
---

{{ APIRef("CSSOM") }}

**`CSSMediaRule`** 是一个表示单个 CSS {{cssxref("@media")}} 规则的接口。它实现了 {{domxref("CSSConditionRule")}} 接口，因此也是 {{domxref("CSSGroupingRule")}}，也相当于{{domxref("CSSRule")}}中类型值为 `4` 的规则类型（即`CSSRule.MEDIA_RULE`）。

## 语法

下列语法是使用 [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) 格式描述的。

```plain
interface CSSMediaRule : CSSConditionRule {
    readonly attribute MediaList media;
}
```

## 属性

作为一个 {{ domxref("CSSConditionRule") }}，同时也是 {{domxref("CSSGroupingRule")}} 和 {{ domxref("CSSRule") }}，`CSSMediaRule` 也实现（继承）了来自这些接口的属性。它还有如下属性：

- {{domxref("CSSMediaRule.media")}} {{readonlyinline}}
  - : 声明了一个 {{domxref("MediaList")}}，表示指定目标媒体中的样式信息。

## 方法

作为一个 {{ domxref("CSSConditionRule") }}，同时也是 {{domxref("CSSGroupingRule")}} 和 {{ domxref("CSSRule") }}，`CSSMediaRule` 也实现（继承）了来自这些接口的方法。除此之外，没有其他方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
