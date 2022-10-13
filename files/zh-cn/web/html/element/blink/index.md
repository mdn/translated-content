---
title: <blink>
slug: Web/HTML/Element/blink
---

{{Deprecated_header}}

HTML Blink Element (`<blink>`) 不是标准元素，它会使包含其中的文本闪烁。

> **警告：** 不要使用这个元素，它已经被**淘汰**。闪烁字体不符合无障碍标准，CSS 规范允许浏览器忽略闪烁值。

## DOM 接口

该元素不被支持，因而实现了{{domxref("HTMLUnknownElement")}} 接口。

## 示例

```html
<blink>Why would somebody use this?</blink>
```

### 结果 (淡化！)

![Image:HTMLBlinkElement.gif](htmlblinkelement.gif)

## 规范

该元素不是标准元素，不属于规范的一部分。不信的话，[你自己来看 HTML 规范文档](http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#non-conforming-features).

## 浏览器兼容

{{Compat}}

## 参见

- [History of the creation of the HTML `<blink>` element](http://www.montulli.org/theoriginofthe%3Cblink%3Etag).
- {{cssxref("text-decoration")}}, where a blink value exists, though browsers are not required to effectively make it blink.
- {{htmlelement("marquee")}}, another similar non-standard element.
- [CSS animations](/zh-CN/docs/Web/Guide/CSS/Using_CSS_animations) are the way to go to create such an effect.

{{HTMLRef}}
