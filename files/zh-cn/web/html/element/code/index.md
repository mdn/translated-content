---
title: <code>
slug: Web/HTML/Element/code
---

## 摘要

**HTML `<code>` 元素**呈现一段计算机代码。默认情况下，它以浏览器的默认等宽字体显示。

- _[Content categories](/zh-CN/docs/HTML/Content_categories)_ [Flow content](/zh-CN/docs/HTML/Content_categories#Flow_content), [phrasing content](/zh-CN/docs/HTML/Content_categories#Phrasing_content), palpable content.
- _Permitted content_ [Phrasing content](/zh-CN/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/zh-CN/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.

## 属性

此元素仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes).

## 例子

```html
<p>Regular text. <code>This is code.</code> Regular text.</p>
```

### 结果

Regular text. `This is code.` Regular text.

(中文的等宽字和正常字看起来区别不大，因为汉字本身就是方块行。但是仍能看出几行文字之间的对齐差异)

## 注意

CSS 规则可以覆盖浏览器默认的 `code` 标签字体样式。但用户设置的浏览器字体选项可能会超过 CSS 的优先级，使之无效。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}

{{HTMLSidebar}}
