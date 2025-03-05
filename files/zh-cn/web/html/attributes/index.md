---
title: HTML 属性参考
slug: Web/HTML/Attributes
---

{{HTMLSidebar("Attributes")}}

HTML 中的元素拥有**属性**（attribute）；这些额外的值可以配置元素或者以各种方式来调整元素的行为，进而满足用户所需的标准。

## 属性列表

<table class="standard-table">
  <thead>
    <tr>
      <th>属性名</th>
      <th>元素</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/accept">accept</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}、{{ HTMLElement("input") }}
      </td>
      <td>服务器接受内容（通常是文件类型）的列表。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>字符集，必须为 <code>"UTF-8"</code>（如果提供）。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>用于激活或聚焦元素的键盘快捷键。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/form#action">action</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        处理通过表单提交的信息的程序的 URI。
      </td>
    </tr>
    <tr>
      <td>
        <code>align</code> {{deprecated_inline}}
      </td>
      <td>
        {{ HTMLElement("caption") }}、{{ HTMLElement("col") }}、{{ HTMLElement("colgroup") }}、{{ HTMLElement("hr") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("img") }}、{{ HTMLElement("table") }}、{{ HTMLElement("tbody") }}、{{ HTMLElement("td") }}、{{ HTMLElement("tfoot") }}、{{ HTMLElement("th") }}、{{ HTMLElement("thead") }}、{{ HTMLElement("tr") }}
      </td>
      <td>指定元素水平对齐的方式。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/iframe#allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>指定 iframe 的特性策略。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/alt">alt</a></code>
      </td>
      <td>
        {{ HTMLElement("area") }}、{{ HTMLElement("img") }}、{{ HTMLElement("input") }}
      </td>
      <td>在图片无法显示时展示的替代文本。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/script#async">async</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>异步执行该脚本。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        设置用户输入时是否自动大写。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}、{{ HTMLElement("input") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>
        指示浏览器是否可以自动填充表单中的值。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/autofocus">autofocus</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>
        页面加载后，该元素应自动获得焦点。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/autoplay">autoplay</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("video") }}
      </td>
      <td>音视频应该自动播放。</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{ HTMLElement("body") }}、{{ HTMLElement("table") }}、{{ HTMLElement("td") }}、{{ HTMLElement("th") }}
      </td>
      <td>
        指定图像文件的 URL。
        <div class="note">
          <p>
            <strong>备注：</strong>虽然浏览器和电子邮件客户端可能仍然支持此属性，但它已经过时。请使用
            CSS {{ Cssxref("background-image") }} 代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{ HTMLElement("body") }}、{{ HTMLElement("col") }}、{{ HTMLElement("colgroup") }}、{{ HTMLElement("marquee") }}、{{ HTMLElement("table") }}、{{ HTMLElement("tbody") }}、{{ HTMLElement("tfoot") }}、{{ HTMLElement("td") }}、{{ HTMLElement("th") }}、{{ HTMLElement("tr") }}
      </td>
      <td>
        <p>元素的背景颜色。</p>
        <div class="note">
          <p>
            <strong>备注：</strong>这是遗留属性。请使用
            CSS {{ Cssxref("background-color") }} 属性代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{ HTMLElement("img") }}、{{ HTMLElement("object") }}、{{ HTMLElement("table") }}
      </td>
      <td>
        <p>边框宽度。</p>
        <div class="note">
          <p>
            <strong>备注：</strong>这是遗留属性。请使用
            CSS {{ Cssxref("border") }} 属性代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/buffered">buffered</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("video") }}
      </td>
      <td>包含已缓存媒体的时间范围。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/capture">capture</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        来自 <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media Capture 规范</a>，指定一个新文件是否可以被捕获。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meta#charset">charset</a></code>
      </td>
      <td>
        {{ HTMLElement("meta") }}
      </td>
      <td>申明该页面或脚本的字符编码。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/input#checked">checked</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}
      </td>
      <td>指出该元素在页面加载后是否处于选中状态。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/cite">cite</a></code>
      </td>
      <td>
        {{ HTMLElement("blockquote") }}、{{ HTMLElement("del") }}、{{ HTMLElement("ins") }}、{{ HTMLElement("q") }}
      </td>
      <td>包含一个指明引用或修改的来源的 URI。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/class">class</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>通常和 CSS 配合使用，使用常用属性来为元素添加样式。</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{ HTMLElement("font") }}、{{ HTMLElement("hr") }}
      </td>
      <td>
        <p>
          该属性为文本设置颜色，可以使用具名颜色或十六进制 #RRGGBB 格式的颜色。
        </p>
        <div class="note">
          <p>
            <strong>备注：</strong>这是遗留属性。请使用
            CSS {{ Cssxref("color") }} 属性代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/textarea#cols">cols</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>定义一个 textarea 中包含多少列。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/colspan">colspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}、{{ HTMLElement("th") }}
      </td>
      <td>
        colspan 属性定义了一个单元格跨越的列数。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meta#content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        与 <code>http-equiv</code> 或 <code>name</code>
        关联的值，取决于上下文。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>指示该元素的内容是否可以被编辑。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/controls">controls</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        指示浏览器是否应该向用户显示播放控件。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/area#coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        指定热点区域坐标的一组值。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("img") }}、{{ HTMLElement("link") }}、{{ HTMLElement("script") }}、{{ HTMLElement("video") }}
      </td>
      <td>元素如何处理跨源请求。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        指定嵌入文档必须同意对自身强制执行的内容安全策略。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/object#data">data</a></code>
      </td>
      <td>{{ HTMLElement("object") }}</td>
      <td>指定资源的 URL。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/data-*">data-*</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>允许你对一个 HTML 元素附加自定义的属性。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}、{{ HTMLElement("ins") }}、{{ HTMLElement("time") }}
      </td>
      <td>指示与元素关联的日期和时间。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/img#decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>指示解码图像的首选方法。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/track#default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        指示应启用该轨道，除非与用户首选项指示的不同。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/script#defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        指示该脚本应在页面解析后执行。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/dir">dir</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        定义文本的方向。允许的值有 ltr（从左到右）或 rtl（从右到左）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/dirname">dirname</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/disabled">disabled</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("input") }}、{{ HTMLElement("optgroup") }}、{{ HTMLElement("option") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>指示用户是否可以与该元素交互。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/download">download</a></code>
      </td>
      <td>{{ HTMLElement("a") }}、{{ HTMLElement("area") }}</td>
      <td>
        指示用于下载资源的超链接。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>定义元素是否可以被拖拽。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/form#enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        定义 <code>method</code> 为 POST 时，表单数据的内容类型。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/enterkeyhint">enterkeyhint</a></code>
        {{experimental_inline}}
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/zh-CN/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a>
        指定在虚拟键盘上显示的回车键的动作标签（或图标）。该属性可用于表单控件（例如
        <code>textarea</code> 元素的值），或者在可编辑宿主中的元素（例如使用
        <code>contenteditable</code> 属性）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/for">for</a></code>
      </td>
      <td>
        {{ HTMLElement("label") }}、{{ HTMLElement("output") }}
      </td>
      <td>描述与当前元素绑定的元素。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/form">form</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("input") }}、{{ HTMLElement("label") }}、{{ HTMLElement("meter") }}、{{ HTMLElement("object") }}、{{ HTMLElement("output") }}、{{ HTMLElement("progress") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>指示该元素所属的表单。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/formaction">formaction</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("button") }}
      </td>
      <td>
        指示元素的动作，覆盖 {{ HTMLElement("form") }} 中定义的动作。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/formenctype">formenctype</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}
      </td>
      <td>
        如果按钮/输入是{{Glossary("submit button", "提交按钮")}}（例如，<code>type="submit"</code>），该属性用于设置表单提交时要使用的编码类型。如果指定了该属性，则会覆盖按钮所属的
        <a href="/zh-CN/docs/Web/HTML/Element/form">form</a> 的 <code>enctype</code> 属性。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/formmethod">formmethod</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}
      </td>
      <td>
        如果按钮/输入是{{Glossary("submit button", "提交按钮")}}（例如，<code>type="submit"</code>），该属性用于设置表单提交时要使用的提交方法（<code>GET</code>、<code>POST</code>
        等）。如果指定了该属性，则会覆盖按钮所属的
        <a href="/zh-CN/docs/Web/HTML/Element/form">form</a> 的 <code>method</code> 属性。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/formnovalidate">formnovalidate</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}
      </td>
      <td>
        如果按钮/输入是{{Glossary("submit button", "提交按钮")}}（例如，<code>type="submit"</code>），该布尔属性用于指示在提交表单时不进行验证。如果指定了该属性，则会覆盖按钮所属的
        <a href="/zh-CN/docs/Web/HTML/Element/form">form</a> 的 <code>novalidate</code> 属性。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/formtarget">formtarget</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}
      </td>
      <td>
        如果按钮/输入是{{Glossary("submit button", "提交按钮")}}（例如，<code>type="submit"</code>），该属性用于指定提交表单后接收到的响应在哪个浏览上下文（例如，标签页、窗口或内联框架）中显示。如果指定了该属性，则会覆盖按钮所属的
        <a href="/zh-CN/docs/Web/HTML/Element/form">form</a> 的 <code>target</code> 属性。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/headers">headers</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}、{{ HTMLElement("th") }}
      </td>
      <td>
        应用于 <code>&#x3C;th></code> 元素的 ID。
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ HTMLElement("canvas") }}、{{ HTMLElement("embed") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("img") }}、{{ HTMLElement("input") }}、{{ HTMLElement("object") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          指定此处列出的元素的高度。对于其他所有元素，请使用
          CSS {{cssxref("height")}} 属性。
        </p>
        <div class="note">
          <p>
            <strong>备注：</strong>对于某些实例，例如
            {{ HTMLElement("div") }}，这是一个遗留属性，对于这些实例应使用
            CSS {{ Cssxref("height") }} 属性代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/hidden">hidden</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        阻止对给定元素的渲染，同时保持子元素（例如脚本元素）处于激活状态。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meter#high">high</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>指示高值区间的下限值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/href">href</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("area") }}、{{ HTMLElement("base") }}、{{ HTMLElement("link") }}
      </td>
      <td>关联资源的 URL。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("link") }}
      </td>
      <td>指定关联资源的语言。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meta#http-equiv">http-equiv</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>定义编译程序指令（pragma directive）。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        通常与 CSS 一起使用，以为特定元素添加样式。此属性的值必须是唯一的。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/Security/Subresource_Integrity">integrity</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}、{{ HTMLElement("script") }}
      </td>
      <td>
        指定<a href="/zh-CN/docs/Web/Security/Subresource_Integrity"
          >子资源完整性</a>值，允许浏览器验证它们获取的内容。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/img#intrinsicsize"><code>intrinsicsize</code></a>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>
        此属性指示浏览器忽略图像的实际的固有大小，并假设它是属性中指定的大小。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/zh-CN/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        提供一个提示，指示用户在编辑元素或其内容时可能输入的数据类型。该属性可用于表单控件（例如
        <code>textarea</code> 元素的值），或者在可编辑宿主中的元素（例如使用了
        <code>contenteditable</code> 属性的）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/img#ismap">ismap</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>指示图像是服务器端图像映射（image map）的一部分。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/track#kind">kind</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>指定文本字幕的类型。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/label">label</a></code>
      </td>
      <td>
        {{ HTMLElement("optgroup") }}、{{ HTMLElement("option") }}、{{ HTMLElement("track") }}
      </td>
      <td>为元素指定用户可读的标题。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>定义元素中使用的语言。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/script#language">language</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>定义元素中使用的脚本语言。</td>
    </tr>
    <tr>
      <td><code>loading</code> {{experimental_inline}}</td>
      <td>
        {{ HTMLElement("img") }}、{{ HTMLElement("iframe") }}
      </td>
      <td>
        指示元素是否应该被懒加载（<code>loading="lazy"</code>）或立即加载（<code>loading="eager"</code>）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/input#list">list</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>指示建议用户输入的预定义选项列表。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/loop">loop</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("marquee") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        指示媒体在播放结束时是否应从头开始播放。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meter#low">low</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>指示低值区间的上限值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("meter") }}、{{ HTMLElement("progress") }}
      </td>
      <td>指示允许的最大值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>定义元素中允许的最大字符数。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>定义元素中允许的最小字符数。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/media">media</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("area") }}、{{ HTMLElement("link") }}、{{ HTMLElement("source") }}、{{ HTMLElement("style") }}
      </td>
      <td>
        指定链接资源所设计的媒体的提示。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/form#method">method</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        <code>POST</code>.
        定义用于提交表单的 <a href="/zh-CN/docs/Web/HTTP">HTTP</a>
        方法。可以是 <code>GET</code>（默认）或 <code>POST</code>。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("meter") }}
      </td>
      <td>指示允许的最小值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/multiple">multiple</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("select") }}
      </td>
      <td>
        指示是否可以在 <code>email</code> 或 <code>file</code>
        类型的输入中输入多个值。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/muted">muted</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        指示页面加载时音频是否会被静音。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/name">name</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("form") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("input") }}、{{ HTMLElement("object") }}、{{ HTMLElement("output") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}、{{ HTMLElement("map") }}、{{ HTMLElement("meta") }}、{{ HTMLElement("param") }}
      </td>
      <td>
        元素的名称。例如，用于服务器标识表单提交中的字段。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/form#novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        此属性指示在提交表单时不应验证表单。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/open">open</a></code>
      </td>
      <td>
        {{ HTMLElement("details") }}、{{ HTMLElement("dialog") }}
      </td>
      <td>
        指示内容目前是否可见（若用于 <code>&#x3C;details></code>
        元素）或对话框是否处于活动状态且可以与之交互（若用于
        <code>&#x3C;dialog></code> 元素）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/meter#optimum">optimum</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>指示最佳数值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        定义用于验证元素值的正则表达式。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/a#ping">ping</a></code>
      </td>
      <td>{{ HTMLElement("a") }}、{{ HTMLElement("area") }}</td>
      <td>
        <code>ping</code> 属性指定一个用空格分隔的 URL
        列表，以便在用户访问超链接时通知这些 URL。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/placeholder">placeholder</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>提供用于告诉用户可以在字段中输入什么的提示。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/video#playsinline">playsinline</a></code>
      </td>
      <td>
        {{ HTMLElement("video") }}
      </td>
      <td>布尔属性，指示视频是否要“内嵌”播放；也就是说，在元素的播放区域内播放。请注意，该属性的缺失并不意味着视频将始终以全屏模式播放。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/video#poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        用于指示在用户播放或搜索之前要显示的海报帧的 URL。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/preload">preload</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        指示是否应预加载整个资源、部分资源或者不预加载。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/readonly">readonly</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>指示元素是否可以被编辑。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/referralpolicy">referrerpolicy</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("area") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("img") }}、{{ HTMLElement("link") }}、{{ HTMLElement("script") }}
      </td>
      <td>指定在获取资源时发送哪个引荐来源（referrer）。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/rel">rel</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("area") }}、{{ HTMLElement("link") }}
      </td>
      <td>
        指示目标对象与链接对象的关系。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/required">required</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>指示是否必须填写此元素。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/ol#reversed">reversed</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>
        指示列表是否应以降序而不是升序显示。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles">role</a></code>
      </td>
      <td><a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a></td>
      <td>定义元素的显式角色，供辅助技术使用。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/textarea#rows">rows</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>定义文本区域的行数。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/rowspan">rowspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}、{{ HTMLElement("th") }}
      </td>
      <td>定义表格单元格应跨越的行数。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/iframe#sandbox">sandbox</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        阻止在 iframe 中加载的文档使用某些特性（例如提交表单或打开新窗口）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/th#scope">scope</a></code>
      </td>
      <td>{{ HTMLElement("th") }}</td>
      <td>
        定义表头单元格（在 <code>th</code> 元素中定义）所关联的单元格。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/style#scoped">scoped</a></code>
        {{non-standard_inline}} {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("style") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/option#selected">selected</a></code>
      </td>
      <td>{{ HTMLElement("option") }}</td>
      <td>定义页面加载时将被选中的值。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/shape">shape</a></code>
      </td>
      <td>{{ HTMLElement("a") }}、{{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/size">size</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("select") }}
      </td>
      <td>
        定义元素的宽度（以像素为单位）。如果元素的 <code>type</code>
        属性是 <code>text</code> 或 <code>password</code>，则它是字符数。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/sizes">sizes</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}、{{ HTMLElement("img") }}、{{ HTMLElement("source") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/slot">slot</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>为影子 DOM（shadow DOM）影子树中的插槽分配一个元素。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/span">span</a></code>
      </td>
      <td>
        {{ HTMLElement("col") }}、{{ HTMLElement("colgroup") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/spellcheck">spellcheck</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>指示是否允许对元素进行拼写检查。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/src">src</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}、{{ HTMLElement("embed") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("img") }}、{{ HTMLElement("input") }}、{{ HTMLElement("script") }}、{{ HTMLElement("source") }}、{{ HTMLElement("track") }}、{{ HTMLElement("video") }}
      </td>
      <td>可嵌入内容的 URL。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/iframe#srcdoc">srcdoc</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/track#srclang">srclang</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/srcset">srcset</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}、{{ HTMLElement("source") }}
      </td>
      <td>一个或多个响应式图像候选项。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/ol#start">start</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>定义除 1 以外的第一个数字。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/style">style</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>定义将覆盖先前设置的 CSS 样式。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/table#summary">summary</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("table") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        使用指定的聚焦（tab）顺序覆盖浏览器的默认聚焦顺序。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/target">target</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}、{{ HTMLElement("area") }}、{{ HTMLElement("base") }}、{{ HTMLElement("form") }}
      </td>
      <td>
        指定打开链接文档的位置（若用于 <code>&#x3C;a></code>
        元素）或显示接收到的响应的位置（若用于
        <code>&#x3C;form></code> 元素）。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>在鼠标悬停在元素上时显示的提示文本。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>
      </td>
      <td>
        指定当页面本地化时，元素的属性值和其<a
          href="https://dom.spec.whatwg.org/#text">文本</a
        >节点后代的值是否应该被翻译，或者是否应该保持不变。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/type">type</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("input") }}、{{ HTMLElement("embed") }}、{{ HTMLElement("object") }}、{{ HTMLElement("ol") }}、{{ HTMLElement("script") }}、{{ HTMLElement("source") }}、{{ HTMLElement("style") }}、{{ HTMLElement("menu") }}、{{ HTMLElement("link") }}
      </td>
      <td>定义元素的类型。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/usemap">usemap</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}、{{ HTMLElement("input") }}、{{ HTMLElement("object") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/value">value</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("data") }}、{{ HTMLElement("input") }}、{{ HTMLElement("li") }}、{{ HTMLElement("meter") }}、{{ HTMLElement("option") }}、{{ HTMLElement("progress") }}、{{ HTMLElement("param") }}
      </td>
      <td>
        定义页面加载时元素中显示的默认值。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/width">width</a></code>
      </td>
      <td>
        {{ HTMLElement("canvas") }}、{{ HTMLElement("embed") }}、{{ HTMLElement("iframe") }}、{{ HTMLElement("img") }}、{{ HTMLElement("input") }}、{{ HTMLElement("object") }}、{{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          确定此处所列元素的宽度。
        </p>
        <div class="note">
          <p>
            <strong>备注：</strong>对于其他所有实例，例如
            {{ HTMLElement("div") }}，这是一个遗留属性，对于这些实例应使用
            CSS {{ Cssxref("height") }} 属性代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/HTML/Element/textarea#wrap">wrap</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>指示文本是否应该换行。</td>
    </tr>
  </tbody>
</table>

## 内容属性和 IDL 属性

在 HTML 中，大多数属性都有两个方面：**内容属性**和 **IDL（接口描述语言）属性**。

内容属性需要你在内容（HTML 代码）中设置，而且可以通过 {{domxref("element.setAttribute()")}} 或 {{domxref("element.getAttribute()")}} 来设置。内容属性总是一个字符串，即使里面的值是一个整数。例如，要将 {{HTMLElement("input")}} 元素的 `maxlength` 设置为 42，你需要在元素上调用 `setAttribute("maxlength", "42")`。

IDL 属性（attribute）也就是 JavaScript 属性（property）。你可以使用 JavaScript 属性如 `element.foo` 来设置这些属性。当你需要获取 IDL 属性的值时，IDL 属性总会使用隐含的内容属性的值（可能先经过转换）来返回一个值。同样地，当你设置这个值时，这个值会保存在内容属性中。换句话说，IDL 属性本质上反映了内容属性。

大多数时候，IDL 属性会返回元素实际使用的值。例如，{{HTMLElement("input")}} 的默认 `type` 是“text”，所以如果你设置 `input.type="foobar"`，`<input>` 元素仍然会是文本类型（在外观上和表现上），但 `type` 内容属性的值是“foobar”。然而，`type` IDL 属性依旧会返回字符串“text”。

IDL 属性并不总是字符串；例如 `input.maxlength` 是一个数字（有符号长整型）。使用 IDL 属性时，你读取或设置值的类型都是要求的类型。所以 `input.maxlength` 总会返回一个数字，而如果你要设置 `input.maxlength`，也需要使用数字。如果你传入了别的类型，则会根据标准 JavaScript 的类型转换规则被转换为数字。

IDL 属性可以[反映其他类型](https://html.spec.whatwg.org/multipage/urls-and-fetching.html)，如无符号长整型、URL、布尔类型，等。不幸的是，并没有清晰的规则定义一个属性的 IDL 属性与对应的内容属性如何关联。大多数时候，这会遵守[规范中列出的规则](https://html.spec.whatwg.org/multipage/urls-and-fetching.html)，但有时并不遵守。HTML 规范尝试将这件事尽可能变得对开发者友好，但由于很多原因（大多是历史原因），一些属性表现得很奇怪（例如 `select.size`），你就需要阅读规范以理解它们实际是如何表现的。

## 布尔属性

一些内容属性（例如 `required`、`readonly`、`disabled`）是[布尔属性](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes)。如果一个布尔值属性存在，则其值为**真**（true），如果不存在，其值为**假**（false）。

HTML 定义了布尔属性允许的取值：如果属性存在，其值必须是一个空字符串（或未给该属性赋值），或者是一个大小写无关的 ASCII 字符串，该字符串与属性名严格相同，前后都没有空格。以下示例是为一个布尔值属性取值的几个有效方式。

```html-nolint
<div itemscope>这是一个有效的 HTML，但不是有效的 XML。</div>
<div itemscope=itemscope>这也是有效的 HTML，但不是有效的 XML。</div>
<div itemscope="">这是有效的 HTML，也是有效的 XML。</div>
<div itemscope="itemscope">这也是有效的 HTML 或 XML，但可能有点冗长。</div>
```

再明确一点，布尔值属性不能取值为 `"true"` 和 `"false"`。如果需要表示假值，布尔值属性需要整个忽略不写。这个限制消除了一些常见的误解：比如在元素中设置 `checked="false"`，元素的 `checked` 属性会被解析为 **true**，因为这个属性出现了。

## 事件处理器属性

> [!WARNING]
> 不建议使用事件处理器属性。将 HTML 和 JavaScript 代码混合在一起通常会产生难以维护的代码，而且事件处理器属性的执行也可能会被内容安全策略阻止。

除了上表中列出的属性，全局[事件处理器](/zh-CN/docs/Web/Events/Event_handlers#使用_onevent_属性)（例如 [`onclick`](/zh-CN/docs/Web/API/Element/click_event)）也可以作为[内容属性](#内容属性和_idl_属性)在所有元素上指定。

所有事件处理器属性都接受字符串值。字符串将用于合成 [JavaScript 函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)，例如 `function name(/*args*/) {body}`，其中，`name` 为属性名，`body` 为属性值。处理器接收与其 JavaScript 事件处理器对应项相同的参数——大多数处理器只接收一个 `event` 参数，而 `onerror` 接收五个参数：`event`、`source`、`lineno`、`colno`、`error`。这意味着你通常可以在属性中使用 `event` 变量。

```html
<div onclick="console.log(event)">点击这里！</div>
<!-- 合成的处理器具有名称，你可以引用处理器本身 -->
<div onclick="console.log(onclick)">点击这里！</div>
```

## 参见

- [HTML 元素](/zh-CN/docs/Web/HTML/Element)
