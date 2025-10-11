---
title: <area>：图像映射区域元素
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`<area>`** [HTML](/zh-CN/docs/Web/HTML) 元素定义了图像映射中的一个区域，该区域具有预定义的可点击区域。*图像映射*允许将图像上的几何区域与{{Glossary("Hyperlink", "超链接")}}关联起来。

此元素仅用于 {{HTMLElement("map")}} 元素内。

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN 信息图表" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `alt`
  - : 在不显示图像的浏览器上显示的替代文本字符串。文本内容应当以一种表达方式呈现给用户，使其能获得与图像显示时相同的选择体验。只有在使用了 [`href`](#href) 属性时，此属性才是必需的。
- `coords`
  - : `coords` 属性用于具体描述 `<area>` 元素中 [`shape`](#shape) 属性指定区域的大小、形状和位置。如果 `shape` 属性设置为 `default`，则不得使用此属性。
    - `rect`：该值为 `x1,y1,x2,y2`，表示矩形的左上角和右下角的坐标。例如，在 `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` 中，坐标分别是 `0,0` 和 `253,27`，对应矩形的左上角和右下角。
    - `circle`：该值为 `x,y,radius`，表示圆的中心坐标和半径。例如：`<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`：该值为 `x1,y1,x2,y2,..,xn,yn`，表示多边形各边的坐标。如果第一个和最后一个坐标对不相同，浏览器会自动将最后一个坐标对添加进去以闭合多边形。

    这些值是以 CSS 像素为单位的数字。

- `download`
  - : 如果存在此属性，表示链接的资源是用于下载而非在浏览器中显示。完整说明请参见 {{HTMLElement("a")}} 中的 [`download`](/zh-CN/docs/Web/HTML/Reference/Elements/a#download) 属性。
- `href`
  - : 该区域的超链接目标。其值为有效的 URL。此属性可以省略；若省略，则 `<area>` 元素不表示超链接。
- `ping`
  - : 包含以空格分隔的 URL 列表，当点击超链接时，浏览器会（在后台）向这些 URL 发送带有 `PING` 内容的 HTTP {{HTTPMethod("POST")}} 请求。通常用于追踪目的。
- `referrerpolicy`
  - : 表示在获取资源时应使用哪个引用来源（referrer）的字符串：
    - `no-referrer`：不会发送 {{HTTPHeader("Referer")}} 标头。
    - `no-referrer-when-downgrade`：不会将 {{HTTPHeader("Referer")}} 标头发送到不使用 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的{{Glossary("origin", "源")}}。
    - `origin`：发送的引用来源将被限制为引用页面的源：包括其[方案](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "主机")}}和{{Glossary("port", "端口")}}。
    - `origin-when-cross-origin`：发送到其他源的引用来源将仅包含方案、主机和端口；而对于同源的导航，请求中仍会包含路径信息。
    - `same-origin`：对于{{Glossary("Same-origin policy", "同源")}}请求会发送来源地址，但跨源请求将不包含任何引用来源信息。
    - `strict-origin`：仅当协议的安全级别保持一致时（例如 HTTPS → HTTPS），才会将文档的源作为引用来源发送；但不会在从更安全的协议跳转到不太安全的目的地时（例如 HTTPS → HTTP）发送引用来源。
    - `strict-origin-when-cross-origin`（默认）：当执行同源请求时应发送完整的 URL；若协议的安全等级保持一致（例如 HTTPS→HTTPS），则仅发送源；若请求目标的协议安全等级较低（例如 HTTPS→HTTP），则不应发送请求标头。
    - `unsafe-url`：来源标头会包含源*和*路径（但不会包含[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)或[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**此值是不安全的**，因为它会将受 TLS 保护的资源的源和路径泄露给不安全的目标地址。

- [`rel`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel)
  - : 对于包含 [`href`](#href) 属性的锚点元素，该属性指定目标对象与链接对象之间的关系。其值是以空格分隔的链接类型列表。这些值及其语义将由某个可能对文档作者有意义的权威机构进行注册。如果未指定其他关系类型，则默认关系为空。仅当存在 [`href`](#href) 属性时，才应使用该属性。
- `shape`
  - : 该属性用于指定图像热点区域的形状，可选值包括 `rect`，表示矩形区域；`circle`，表示圆形区域；`poly`，表示多边形区域；和 `default` 表示除已定义形状之外的整个区域。
- `target`
  - : 一个关键字或作者自定义的名称，用于指定用于显示所链接资源的{{Glossary("browsing context", "浏览上下文")}}；其中一些关键字具有特殊含义：
    - `_self`（默认）：在当前浏览上下文中显示资源。
    - `_blank`：在新的、未命名的浏览上下文中显示资源。
    - `_parent`：如果当前页面位于一个框架内，则在其父级浏览上下文中显示该资源；如果没有父级，则效果等同于 `_self`。
    - `_top`：在最顶层的浏览上下文中显示该资源（即当前浏览上下文的最上层父级，上层不再有父级）。如果不存在父级，则与 `_self` 行为相同。

    仅当存在 [`href`](#href) 属性时，才使用此属性。

    > [!NOTE]
    > 在 `<area>` 元素上设置 `target="_blank"` 会隐式地提供与设置 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/noopener) 相同的 `rel` 行为，即不会设置 `window.opener`。支持情况请参见[浏览器兼容性](#浏览器兼容性)。

## 示例

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" alt="点击向左" />
  <area shape="circle" coords="275,75,75" href="right.html" alt="点击向右" />
</map>
<img
  usemap="#primary"
  src="https://dummyimage.com/350x150"
  alt="350 x 150 pic" />
```

### 结果

{{ EmbedLiveSample('示例', 360, 160) }}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；这是一个{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>的元素。<code>&#x3C;area></code> 元素必须有一个 {{HTMLElement("map")}} 父元素，但不需要是其直接父元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        当存在 <a href="#href"><code>href</code></a> 属性时为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>，否则为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
