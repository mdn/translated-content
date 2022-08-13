---
title: <body>：文档主体元素
slug: Web/HTML/Element/body
tags:
  - HTML
  - 元素
  - 分段
  - 参考
  - 段落根元素
translation_of: Web/HTML/Element/body
---
<p>{{HTMLRef}}</p>

<p><strong>HTML <code>body</code> 元素</strong>表示文档的内容。{{domxref("document.body")}} 属性提供了可以轻松访问文档的 body 元素的脚本。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/en-US/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots">Sectioning root</a>.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>The start tag may be omitted if the first thing inside it is not a space character, comment, {{HTMLElement("script")}} element or {{HTMLElement("style")}} element. The end tag may be omitted if the <code>&lt;body&gt;</code> element has contents or has a start tag, and is not immediately followed by a comment.</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>它必须是 <a href="/zh-CN/docs/Web/HTML/Element/html">html</a> 元素的直接子元素。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLBodyElement")}}
    <ul>
     <li><code>body</code> 元素接口 {{domxref("HTMLBodyElement")}} 。</li>
     <li>你可以通过 {{domxref("document.body")}} 属性访问 <code>body</code> 元素。</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="属性">属性</h2>

<p>此元素包含 <a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a> 。</p>

<dl>
 <dt>{{htmlattrdef("alink")}} {{Deprecated_Inline}}</dt>
 <dd>超链接选中之后的文本颜色。<em>此方法不符合规范，请使用 CSS 的 {{cssxref("color")}} 属性和 {{cssxref(":active")}} 伪类替代。</em></dd>
 <dt>{{htmlattrdef("background")}} {{Deprecated_Inline}}</dt>
 <dd>将 URI 所指向的图片作为背景。此方法不符合规范，请<em>使用</em><em> CSS 的 {{cssxref("background")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("bgcolor")}} {{Deprecated_Inline}}</dt>
 <dd>文档的背景颜色。此方法不符合规范，请使用<em> CSS 的 {{cssxref("background-color")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("bottommargin")}} {{Deprecated_Inline}}</dt>
 <dd><code>body</code> 的底外边距。此方法不符合规范，请使用<em> CSS 的 {{cssxref("margin-bottom")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("leftmargin")}} {{Deprecated_Inline}}</dt>
 <dd><code>body</code> 的左外边距。此方法不符合规范，请使用<em> CSS 的 {{cssxref("margin-left")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("link")}} {{Deprecated_Inline}}</dt>
 <dd>未访问过的超链接文本颜色。此方法不符合规范，请使用<em> CSS 的 {{cssxref("color")}} 属性和 {{cssxref(":link")}} 伪类替代。</em></dd>
 <dt>{{htmlattrdef("onafterprint")}}</dt>
 <dd>用户完成文档打印之后调用的函数。</dd>
 <dt>{{htmlattrdef("onbeforeprint")}}</dt>
 <dd>用户要求打印文档之前调用的函数。</dd>
 <dt>{{htmlattrdef("onbeforeunload")}}</dt>
 <dd>文档即将被关闭之前调用的函数。</dd>
 <dt>{{htmlattrdef("onblur")}}</dt>
 <dd>文档失去焦点时调用的函数。</dd>
 <dt>{{htmlattrdef("onerror")}}</dt>
 <dd>文档加载失败时调用的函数。</dd>
 <dt>{{htmlattrdef("onfocus")}}</dt>
 <dd>文档获得焦点时调用的函数。</dd>
 <dt>{{htmlattrdef("onhashchange")}}</dt>
 <dd>文档当前地址的片段标识部分（以 (<code>'#'</code>) 开始的部分）发生改变时调用的函数。</dd>
 <dt>{{htmlattrdef("onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>用户选择的语言发生改变时调用的函数。</dd>
 <dt>{{htmlattrdef("onload")}}</dt>
 <dd>文档完成加载时调用的函数。</dd>
 <dt>{{htmlattrdef("onmessage")}}</dt>
 <dd>文档接收到消息时调用的函数。</dd>
 <dt>{{htmlattrdef("onoffline")}}</dt>
 <dd>网络连接失败时调用的函数。</dd>
 <dt>{{htmlattrdef("ononline")}}</dt>
 <dd>网络连接恢复时调用的函数。</dd>
 <dt>{{htmlattrdef("onpopstate")}}</dt>
 <dd>用户回退历史记录时调用的函数。</dd>
 <dt>{{htmlattrdef("onredo")}}</dt>
 <dd>用户重做操作时调用的函数。</dd>
 <dt>{{htmlattrdef("onresize")}}</dt>
 <dd>文档尺寸发生改变时调用的函数。</dd>
 <dt>{{htmlattrdef("onstorage")}}</dt>
 <dd>存储内容（<code>localStorage</code> / <code>sessionStorage</code>）发生改变时调用的函数。</dd>
 <dt>{{htmlattrdef("onundo")}}</dt>
 <dd>用户撤销操作时调用的函数。</dd>
 <dt>{{htmlattrdef("onunload")}}</dt>
 <dd>文档关闭时调用的函数。</dd>
 <dt>{{htmlattrdef("rightmargin")}} {{Deprecated_Inline}}</dt>
 <dd><code>body</code> 的右外边距。此方法不符合规范，请使用 <em>CSS 的 {{cssxref("margin-right")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("text")}} {{Deprecated_Inline}}</dt>
 <dd>文本颜色。此方法不符合规范，请使用<em> CSS 的 {{cssxref("color")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("topmargin")}} {{Deprecated_Inline}}</dt>
 <dd><code>body</code> 的上外边距。此方法不符合规范，请使用<em> CSS 的 {{cssxref("margin-top")}} 属性替代。</em></dd>
 <dt>{{htmlattrdef("vlink")}} {{Deprecated_Inline}}</dt>
 <dd>访问过的超链接的文本颜色。 此方法不符合规范，请使用<em> CSS {{cssxref("color")}} 属性和 {{cssxref(":visited")}} 伪类替代。</em></dd>
</dl>

<h2 id="例子">例子</h2>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Document title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("html.elements.body")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{HTMLElement("html")}}</li>
 <li>{{HTMLElement("head")}}</li>
</ul>
