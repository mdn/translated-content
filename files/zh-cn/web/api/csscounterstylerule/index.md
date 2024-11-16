---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

**`CSSCounterStyleRule`** 接口表示 {{CSSxRef("@counter-style")}} [At 规则](/zh-CN/docs/Web/CSS/At-rule)。

{{InheritanceDiagram}}

## 实例属性

_该接口还继承了父接口 {{DOMxRef("CSSRule")}} 的属性。_

- {{DOMxRef("CSSCounterStyleRule.name")}}
  - : 一个字符串，包含了 {{CSSxRef("&lt;custom-ident&gt;")}} 为关联规则 `name` 定义的序列化内容。
- {{DOMxRef("CSSCounterStyleRule.system")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/system", "system")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.symbols")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/symbols", "symbols")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.additiveSymbols")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.negative")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/negative", "negative")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.prefix")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/prefix", "prefix")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.suffix")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/suffix", "suffix")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.range")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/range", "range")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.pad")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/pad", "pad")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.speakAs")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/speak-as", "speak-as")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。
- {{DOMxRef("CSSCounterStyleRule.fallback")}}
  - : 一个字符串，包含 {{CSSxRef("@counter-style/fallback", "fallback")}} 描述符为关联规则定义的序列化内容。如果关联规则中未指定描述符，则该属性返回空字符串。

## 实例方法

_该接口未实现任何自定义方法，但是从其父接口 {{DOMxRef("CSSRule")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("@counter-style")}}
- [CSS 计数器样式](/zh-CN/docs/Web/CSS/CSS_counter_styles)模块
- [使用 CSS 计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)指南
