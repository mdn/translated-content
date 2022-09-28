---
title: <figure>：可附标题内容元素
slug: Web/HTML/Element/figure
---

{{HTMLRef}}

**HTML `<figure>` 元素**代表一段独立的内容，经常与说明（caption）{{HTMLElement("figcaption")}} 配合使用，并且作为一个独立的引用单元。当它属于主内容流（main flow）时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Sectioning_roots">sectioning root</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>A {{HTMLElement("figcaption")}} element, followed by <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>; or flow content followed by a {{HTMLElement("figcaption")}} element; or flow content.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>所有接受 <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a> 的元素</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td>{{ARIARole("group")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 实例</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素只包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

- 通常，`<figure>`是图像，插图，图表，代码片段等，在文档的主流程中引用，但可以移动到文档的另一部分或附录而不影响主流程。
- 作为[sectioning root](/zh-CN/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Sectioning_roots)，`<figure>`元素的内容轮廓将从文档的主要轮廓中排除。
- 通过在其中插入{{HTMLElement("figcaption")}}（作为第一个或最后一个子元素），可以将标题与`<figure>`元素相关联。图中找到的第一个`<figcaption>`元素显示为图的标题。

## 例子

### 图像

```html
<!-- Just an image -->
<figure>
  <img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="A robotic monster over the letters MDN.">
</figure>

<!-- Image with a caption -->
<figure>
  <img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="A robotic monster over the letters MDN.">
  <figcaption>MDN Logo</figcaption>
</figure>
```

{{EmbedLiveSample("Images", "100%", 250)}}

### 代码段

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName;
  txt+= "Browser Name: " + navigator.appName;
  txt+= "Browser Version: " + navigator.appVersion ;
  txt+= "Cookies Enabled: " + navigator.cookieEnabled;
  txt+= "Platform: " + navigator.platform;
  txt+= "User-agent header: " + navigator.userAgent;
}</pre>
</figure>
```

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### 引用内容

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>
```

{{EmbedLiveSample("Quotations")}}

### 诗歌

```html
<figure>
  <p style="white-space:pre">
Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("Poems", "100%", 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{HTMLElement("figcaption")}} element.
