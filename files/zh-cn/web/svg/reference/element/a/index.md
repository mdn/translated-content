---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: 94a841dba1498c685a18e72d041fd9057f302d6c
---

**`<a>`** [SVG](/zh-CN/docs/Web/SVG) 元素用于创建指向其他网页、文件、同一页面中的位置、电子邮件地址或任何其他 URL 的超链接。它与 HTML 的 {{htmlelement("a")}} 元素非常相似。

SVG 的 `<a>` 元素是一个容器，这意味着你可以像在 HTML 中一样为文本创建链接，也可以为任意形状创建链接。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("download")}}
  - : 指示浏览器下载 {{Glossary("URL")}}，而不是导航到该地址，从而提示用户将其保存为本地文件。_值类型_：**\<string>**；_默认值_：_无_；_动画性_：**否**
- {{SVGAttr("href")}}
  - : 超链接所指向的 {{Glossary("URL")}} 或 URL 片段。_值类型_：**[\<URL>](/zh-CN/docs/Web/SVG/Guides/Content_type#url)**；_默认值_：_无_；_动画性_：**是**
- [`hreflang`](/zh-CN/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : 超链接所指向的 URL 或 URL 片段的人类语言。_值类型_：**\<string>**；_默认值_：_无_；_动画性_：**否**
- [`interestfor`](/zh-CN/docs/Web/HTML/Reference/Elements/a#interestfor) {{experimental_inline}} {{non-standard_inline}}
  - : 将 `<a>` 元素定义为**关注触发器**。其值为目标元素的 `id`，当触发器元素获得或失去关注时（例如通过悬停/取消悬停或聚焦/取消聚焦），该目标元素将受到某种影响（通常表现为显示或隐藏）。更多细节和示例请参阅[使用关注触发器](/zh-CN/docs/Web/API/Popover_API/Using_interest_invokers)。_值类型_：**\<string>**；_默认值_：_无_；_动画性_：**否**
- [`ping`](/zh-CN/docs/Web/HTML/Reference/Elements/a#ping) {{experimental_inline}}
  - : 以空格分隔的 URL 列表；跟随超链接时，浏览器会在后台向这些 URL 发送正文为 `PING` 的 {{HTTPMethod("POST")}} 请求。通常用于跟踪。若需功能相同且支持更广泛的特性，请参见 {{domxref("Navigator.sendBeacon()")}}。_值类型_：**[\<list-of-URLs>](/zh-CN/docs/Web/SVG/Guides/Content_type#t_值数列)**；_默认值_：_无_；_动画性_：**否**
- [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/a#referrerpolicy)
  - : 获取 {{Glossary("URL")}} 时要发送哪个 [referrer](/zh-CN/docs/Web/HTTP/Reference/Headers/Referer)。_值类型_：`no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`；_默认值_：_无_；_动画性_：**否**
- [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/a#rel)
  - : 目标对象与链接对象之间的关系。
    _值类型_：**[\<list-of-Link-Types>](/zh-CN/docs/Web/HTML/Reference/Attributes/rel)**；_默认值_：_无_；_动画性_：**否**
- {{SVGAttr("target")}}
  - : 在何处显示所链接的 {{Glossary("URL")}}。_值类型_：`_self` | `_parent` | `_top` | `_blank` | **\<XML-Name>**；_默认值_：`_self`；_动画性_：**是**
- [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/a#type)
  - : 所链接 URL 的 {{Glossary("MIME type", "MIME 类型")}}。_值类型_：**\<string>**；_默认值_：_无_；_动画性_：**否**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : 超链接所指向的 URL 或 URL 片段。为兼容旧版浏览器，可能仍需要此属性。_值类型_：**[\<URL>](/zh-CN/docs/Web/SVG/Guides/Content_type#url)**；_默认值_：_无_；_动画性_：**是**

## DOM 接口

该元素实现了 {{domxref("SVGAElement")}} 接口。

## 示例

```css hidden
@namespace svg url("http://www.w3.org/2000/svg");
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 围绕形状的链接 -->
  <a href="/docs/Web/SVG/Reference/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- 围绕文本的链接 -->
  <a href="/docs/Web/SVG/Reference/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* SVG 不会为链接提供默认视觉样式，因此添加一些样式被视为最佳实践 */

@namespace svg url("http://www.w3.org/2000/svg");
/* 用于仅选择 SVG 的 <a> 元素，而不是 HTML 的 <a>。参见下方警告 */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* 即使是文本，SVG 也使用 fill 而非 color */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample("示例", 100, 100)}}

> [!WARNING]
> 由于此元素与 [HTML 的 `<a>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/a)共用标签名，使用 CSS 或 {{domxref("Document.querySelector", "querySelector")}} 选择 `a` 时可能会选中错误类型的元素。可尝试使用 {{cssxref("@namespace")}} 规则来区分二者。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGAttr("xlink:title")}} 属性
- HTML {{HTMLElement("a")}} 元素
