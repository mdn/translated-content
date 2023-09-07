---
title: <a>：锚元素
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<a>`** 元素（或称*锚*元素）可以通过[它的 `href` 属性](#href)创建通向其他网页、文件、电子邮件地址、同一页面内的位置或任何其他 URL 的超链接。

`<a>` 中的内容*应该*指明链接的目标。如果存在 `href` 属性，当 `<a>` 元素聚焦时按下回车键就会激活它。

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

## 属性

该元素的属性包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `download`

  - : 导致浏览器将链接的 URL 视为下载资源。可以使用或不使用 `filename` 值：

    - 如果没有指定值，浏览器会从多个来源决定文件名和扩展名：

      - {{HTTPHeader("Content-Disposition")}} HTTP 标头。
      - URL [路径](/zh-CN/docs/Web/API/URL/pathname)的最后一段。
      - {{Glossary("MIME_type", "媒体类型")}}。来自 {{HTTPHeader("Content-Type")}} 标头，[`data:` URL](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) 的开头，或 [`blob:` URL](/zh-CN/docs/Web/API/URL/createObjectURL_static) 的 {{domxref("Blob.type")}}。

    - `filename`：决定文件名的值。`/` 和 `\` 被转化为下划线（`_`）。文件系统可能会阻止文件名中其他的字符，因此浏览器会在必要时适当调整文件名。

    > **备注：**
    >
    > - `download` 只在[同源 URL](/zh-CN/docs/Web/Security/Same-origin_policy) 或 `blob:`、`data:` 协议起作用。
    > - 浏览器对待下载的方式因浏览器、用户设置和其他因素而异。在下载开始之前，可能会提示用户，或者自动保存文件，或者自动打开。自动打开要么在外部应用程序中，要么在浏览器本身中。
    > - 如果 `Content-Disposition` 标头的信息与 `download` 属性不同，产生的行为可能不同：
    >
    >   - 如果文件头指定了一个 `filename`，它将优先于 `download` 属性中指定的文件名。
    >   - 如果标头指定了 `inline` 的处置方式，Chrome 和 Firefox 会优先考虑该属性并将其视为下载资源。旧的 Firefox 浏览器（版本 82 之前）优先考虑该标头，并将内联显示内容。

- `href`

  - : 超链接所指向的 URL。链接不限于基于 HTTP 的 URL——它们可以使用浏览器支持的任何 URL 协议：

    - 使用文档片段链接到页面的某一段
    - 使用[文本片段](/zh-CN/docs/Web/Text_fragments)链接到某一段文字
    - 使用媒体片段链接到某个媒体文件
    - 使用 `tel:` URL 链接到一个电话号码
    - 使用 `mailto:` URL 链接到一个邮箱地址
    - 如果 web 浏览器不能支持其他 URL 协议，网站可以使用 [`registerProtocolHandler()`](/zh-CN/docs/Web/API/Navigator/registerProtocolHandler)

- `hreflang`
  - : 该属性用于指定所链接到的文档的人类语言。其仅提供建议，并没有内置的功能。其允许的值与[全局的 `lang` 属性](/zh-CN/docs/Web/HTML/Global_attributes/lang)一致。
- `ping`
  - : 包含一个以空格分隔的 URL 列表，当跟随超链接时，浏览器会发送带有正文 `PING` 的 {{HTTPMethod("POST")}} 请求。通常用于跟踪。
- `referrerpolicy`

  - : 在跟随链接时，[referrer](/zh-CN/docs/Web/HTTP/Headers/Referer) 需要发送多少内容：

    - `no-referrer`：{{HTTPHeader("Referer")}} 标头将不会被发送。
    - `no-referrer-when-downgrade`：如果没有 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}），{{HTTPHeader("Referer")}} 头将不会被发送到{{Glossary("origin","源")}}上。
    - `origin`：发送的 referrer 将被限制在其页面的来源：[协议](/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)、{{Glossary("host","主机")}}和{{Glossary("port","端口")}}。
    - `origin-when-cross-origin`：发送到其他源的 referrer 将只包含协议、主机和端口，而导航到相同的源仍将包括路径。
    - `same-origin`：将向[同源](/zh-CN/docs/Glossary/Same-origin_policy)地址发送 referrer，但跨源请求不包含 referrer 信息。
    - `strict-origin`：当协议安全级别保持不变（HTTPS→HTTPS）时，只将文档的来源作为 referrer 发送，但不要将其发送到安全性较低的目的地（HTTPS→HTTP）。
    - `strict-origin-when-cross-origin`（默认）：在执行同源请求时发送完整的 URL，在协议安全级别保持不变时只发送源（HTTPS→HTTPS），对安全性较低的目的地不发送标头（HTTPS→HTTP）。
    - `unsafe-url`：表示 referrer 将会包含源*和*路径（但是不包含[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)或[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**此值是不安全的**，因为它可能会将受 TLS 保护的资源的源和路径泄露到不安全的源中。

- `rel`
  - : 该属性指定了目标对象到链接对象的关系。
- `target`

  - : 该属性指定在何处显示链接的 URL，作为*浏览上下文*的名称（标签、窗口或 {{HTMLElement("iframe")}}）。以下关键词对加载 URL 的位置有特殊含义：

    - `_self`：当前页面加载。（默认）
    - `_blank`：通常在新标签页打开，但用户可以通过配置选择在新窗口打开。
    - `_parent`：当前浏览环境的父级浏览上下文。如果没有父级框架，行为与 `_self` 相同。
    - `_top`：最顶级的浏览上下文（当前浏览上下文中最“高”的祖先）。如果没有祖先，行为与 `_self` 相同。

      > **备注：** 在 `<a>` 元素上使用 `target="_blank"` 隐式提供了与使用 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Attributes/rel/noopener) 相同的 `rel` 行为，即不会设置 `window.opener`。

- `type`
  - : 该属性指定在一个 {{Glossary("MIME type","MIME 类型")}}链接目标的形式的媒体类型。没有内置的功能。

### 废弃的属性

- `charset` {{Deprecated_Inline}}

  - : 此属性定义链接资源的{{Glossary("character encoding","字符编码")}}。

    > **备注：** 该属性已作废，**不应使用**。请在链接的 URL 上使用 HTTP {{HTTPHeader("Content-Type")}} 标头。

- `coords` {{Deprecated_Inline}}
  - : 与 [`shape` 属性](#shape)一同使用，以逗号分隔的坐标列表。
- `name` {{Deprecated_Inline}}

  - : 在定义一个可能的目标位置时曾经是必需的。在 HTML 4.01 规范中，`<a>` 元素可以同时使用 `id` 和 `name`，只要它们有相同的值。

    > **备注：** 使用全局属性 [`id`](/zh-CN/docs/HTML/Global_attributes#id) 来代替。

- `rev` {{Deprecated_Inline}}
  - : 指定一个反向链接；与 [`rel` 属性](#rel)作用相反。因为非常混乱而被废弃。
- `shape` {{Deprecated_Inline}}

  - : 图像映射（image map）中超链接区域的形状。

    > **备注：** 使用 {{HTMLElement("area")}} 元素来代替图像映射。

## 示例

### 链接到绝对地址

#### HTML

```html
<a href="https://www.mozilla.com"> Mozilla </a>
```

#### 结果

{{EmbedLiveSample('链接到绝对地址')}}

### 链接到相对地址

#### HTML

```html
<a href="//example.com">相对于协议的 URL</a>
<a href="/zh-CN/docs/Web/HTML">相对于源的 URL</a>
<a href="./p">相对于路径的 URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### 结果

{{EmbedLiveSample('链接到相对地址')}}

### 链接到相同页面的元素上

```html
<!-- <a> 元素链接到下面部分 -->
<p><a href="#Section_further_down"> 跳转到下方标题 </a></p>

<!-- 要链接到的标题 -->
<h2 id="Section_further_down">更下面的部分</h2>
```

#### 结果

{{EmbedLiveSample('链接到相同页面的元素上')}}

> **备注：** [如 HTML 规范所定义](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier)的那样，你可以使用 `href="#top"` 或空片段（`href="#"`）来链接到当前页面的顶部。

### 链接到 email 地址

要创建在用户的电子邮件程序中打开的链接，让他们发送一个新的信息，请使用 `mailto:` 协议：

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### 结果

{{EmbedLiveSample('链接到 email 地址')}}

有关 `mailto:` URL 协议的更多细节，比如如何包含主题、正文，或其他预定内容，参考 [Email 链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_链接)或 {{RFC(6068)}}。

### 链接到电话号码

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### 结果

{{EmbedLiveSample('链接到电话号码')}}

`tel:` 链接行为随设备能力而变化：

- 蜂窝设备会自动拨出号码。
- 大多数操作系统都有可以打电话的程序，如 Skype 或 FaceTime。
- 网站可以通过 {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}} 拨打电话，如 `web.skype.com`。
- 其他行为包括将号码保存到联系人，或将号码发送到另一个设备。

关于 `tel:` URL 协议的语法、附加特性和其他细节，见 {{RFC(3966)}}。

### 使用 download 属性将 \<canvas> 保存为 PNG 格式

要把 {{HTMLElement("canvas")}} 元素的内容保存为图片，你可以创建一个链接，其中 `href` 是用 JavaScript 创建的 `data:` URL 的 canvas 数据， `download` 属性提供了下载的 PNG 文件的文件名：

#### 含有保存链接的示例画图程序

##### HTML

```html
<p>
  按下鼠标并移动来完成你的作画。
  <a href="" download="my_painting.png">下载我的绘画</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### 结果

{{EmbedLiveSample('含有保存链接的示例画图程序', '100%', '400')}}

## 安全与隐私

`<a>` 元素会对用户的安全和隐私产生影响。请参阅 [`Referer` 标头：隐私和安全问题](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns)了解情况。

使用 `target="_blank"` 而不使用 [`rel="noreferrer"`](/zh-CN/docs/Web/HTML/Attributes/rel/noreferrer) 和 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Attributes/rel/noopener) 会使网站容易受到 {{domxref("window.opener")}} 的 API 攻击。不过请注意，在较新的浏览器版本中，设置 `target="_blank"` 隐式地提供了与设置 `rel="noopener"` 同样的保护。详情见[浏览器兼容性](#浏览器兼容性)。

## 无障碍

### 强调链接文本

**链接内的内容应表明链接的去向**，即使脱离了上下文。

#### 无障碍性差的链接文本

一个通常的错误在于只链接了“点击这里”或“这里”词语：

```html example-bad
<p><a href="/products">在这里</a>了解到有关产品的更多信息。</p>
```

##### 结果

{{EmbedLiveSample('无障碍性差的链接文本')}}

#### 强调链接文本

幸运的是，这是一个很容易解决的问题，而且实际上比无障碍性差的版本要短一些！

```html example-good
<p>了解<a href="/products">有关产品</a>的更多信息。</p>
```

##### 结果

{{EmbedLiveSample('强调链接文本')}}

辅助软件有快捷键来列出页面上的所有链接。然而，强大的链接文本对所有用户都有好处。“列出所有链接”的快捷方式模仿了视力正常的用户快速扫描页面的方式。

### onclick 事件

锚点元素经常被滥用为假按钮，将其 `href` 设置为 `#` 或 `javascript:void(0)` 以防止页面刷新，然后监听其 `click` 事件。

这些假的 `href` 值在复制/拖动链接、在新的标签/窗口中打开链接、书签，或当 JavaScript 正在加载、出错或被禁用时，会导致意外行为。它们还向辅助技术（如屏幕阅读器）传达不正确的语义。

请使用 {{HTMLElement("button")}} 代替。一般来说，**你应该只使用超链接来导航到一个真正的 URL**。

### 外部链接与链接至非 HTML 资源

通过 `target="_blank"` 在新标签/窗口中打开的链接，或指向下载文件的链接，应说明在跟踪链接时将发生什么。

当一个新的标签、窗口或应用程序意外打开时，有低视力状况的人、借助屏幕阅读技术导航的人或有认知障碍的人可能会感到困惑。老式的读屏软件甚至可能不会宣布这种行为。

#### 打开新标签页/新窗口的链接

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia（将在新标签页中打开）
</a>
```

##### 结果

{{EmbedLiveSample('打开新标签页/新窗口的链接')}}

#### 链接至非 HTML 资源

```html
<a href="2017-annual-report.ppt"> 2017 年度报告（PowerPoint） </a>
```

如果使用图标标志链接行为，确保其具有[_替代文本_](/zh-CN/docs/Web/HTML/Element/img#alt)：

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="（在新标签页中打开）" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 年度报告
  <img alt="（PowerPoint 文件）" src="ppt-icon.svg" />
</a>
```

##### 结果

{{EmbedLiveSample('链接至非 HTML 资源')}}

- [WebAIM: 链接和超文本 - 超文本链接](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / 理解 WCAG，准则 3.2](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200：只有在必要时才从链接中打开新窗口和标签](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201：在打开新窗口时给用户预先警告](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### 跳转链接

**跳转链接**（skip link）是在 {{HTMLElement("body")}} 内容中尽可能早地放置一个链接，指向页面主要内容的开头。通常情况下，CSS 会将跳转链接隐藏在屏幕之外，直到被聚焦。

```html
<body>
  <a href="#content" class="skip-link">跳转至主要内容</a>

  <header>…</header>

  <main id="content"></main>
  <!-- 跳转链接会跳转至这里 -->
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

#### 结果

{{EmbedLiveSample('跳转链接')}}

跳转链接让键盘用户绕过多个页面中重复的内容，如标题导航。

跳转链接对于借助辅助技术（如开关控制、语音命令或口棒/头棒）进行导航的人来说特别有用，因为在这种情况下，在重复的链接中移动的行为可能很费力。

- [WebAIM：“跳过导航”链接](https://webaim.org/techniques/skipnav/)
- [如何使用跳过导航链接](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / 理解 WCAG，准则 2.4](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功标准 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 尺寸和距离

#### 尺寸

交互式元素，如链接，应提供足够大的区域，以便于激活它们。这有助于各种人，包括那些有运动控制问题的人和那些使用不精确输入的人，如触摸屏。建议最小尺寸为 44×44 [CSS 像素](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)。

散文内容中的纯文本链接不受这一要求影响，但确保有足够的文本超链接，以便于激活，仍然是一个好主意。

- [理解成功标准 2.5.5：目标尺寸](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [目标尺寸和标准 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [快速测试：大型触摸目标](https://www.a11yproject.com/posts/large-touch-targets/)

#### 距离

交互式元素，如链接，放置在视觉上很近的地方，应该有空间将它们分开。间隔有助于有运动控制问题的人，否则他们可能会意外地激活错误的互动内容。

间隔可以使用 CSS 属性来创建，如 {{CSSxRef("margin")}}。

- [Hand tremors 和“巨大按钮问题”](https://axesslab.com/hand-tremors/)

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >、
        <a
          href="/zh-CN/docs/Web/HTML/Content_categories#交互内容"
          >交互内容</a
        >、可感知内容
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a
          href="/zh-CN/docs/Web/HTML/Content_categories#透明内容模型"
          >透明的</a
        >，但是后代不可以为<a
          href="/zh-CN/docs/Web/HTML/Content_categories#交互内容"
          >交互内容</a
        >或
        <a href="/zh-CN/docs/Web/HTML/Element/a"
          >a</a
        > 元素，且后代不可以指定 <a
          href="/zh-CN/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > 属性
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >的元素，或任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >但不是另外一个 <code>&#x3C;a></code> 元素的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        当 <code>href</code> 属性存在时，为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>，否则<a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <p>当 <code>href</code> 属性存在时：</p>
        <ul>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>当 <code>href</code> 属性不存在时：</p>
        <ul>
          <li>任何</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("link")}} 与 `<a>` 类似，但用于用户看不到的元数据超链接。
- {{CSSxRef(":link")}} 是一个 CSS 伪类，将匹配 `<a>` 元素，其 `href` 属性中的 URL 用户尚未访问。
- {{CSSxRef(":visited")}} 是一个 CSS 伪类，将匹配 `<a>` 元素，其 `href` 属性中的 URL 被用户在过去访问过。
- {{CSSxRef(":any-link")}} 是一个 CSS 伪类，将匹配带有 `href` 属性的 `<a>` 元素。
- [文本片段](/zh-CN/docs/Web/Text_fragments)是添加到 URL 的用户代理指令，允许内容作者链接到页面上的特定文本，而不需要 ID。
