---
title: <figure>：可附标题内容元素
slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<figure>`** 元素代表一段独立的内容，可能包含 {{HTMLElement("figcaption")}} 元素定义的说明元素。该插图、标题和其中的内容通常作为一个独立的引用单元。

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td>
     <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容">流式内容</a>、
     <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#可感知内容">可感知内容</a>
    </td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>
     {{HTMLElement("figcaption")}} 元素，且紧随着<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容">流式内容</a>；或紧随流式内容的 {{HTMLElement("figcaption")}} 元素；或流式内容。
    </td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>所有接受<a href="/zh-CN/docs/HTML/Content_categories#流式内容">流式内容</a>的元素</td>
  </tr>
   <tr>
      <th scope="row">明确的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Figure_Role"
          >figure</a
        >
      </td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
       <td>
         无子 <a href="/zh-CN/docs/Web/HTML/Element/figcaption">figcaption</a> 元素：<a href="https://www.w3.org/TR/html-aria/#dfn-any-role">any</a>，否则没有允许的角色
      </td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

- 通常，`<figure>` 的内容为图像、插图、图表、代码片段等，在文档的主内容流中引用，但可以移动到文档的另一部分或附录而不影响主内容流。
- 通过在其中插入 {{HTMLElement("figcaption")}}（作为第一个或最后一个子元素），可以将标题与 `<figure>` 元素相关联。图中找到的第一个 `<figcaption>` 元素显示为图的标题。

## 示例

### 图像

```html
<!-- 只有图像 -->
<figure>
  <img
    src="/zh-CN/docs/Web/HTML/Element/figure/favicon-192x192.png"
    alt="The beautiful MDN logo." />
</figure>

<!-- 有标题的图像 -->
<figure>
  <img
    src="/zh-CN/docs/Web/HTML/Element/figure/favicon-192x192.png"
    alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

{{EmbedLiveSample("图像", "100%", 375)}}

### 代码段

```html
<figure>
  <figcaption>使用 <code>navigator</code> 获取浏览器的信息。</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

{{EmbedLiveSample("代码段", "100%", 250)}}

### 引用

```html
<figure>
  <figcaption><b>Edsger Dijkstra:</b></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

{{EmbedLiveSample("引用")}}

### 诗歌

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("诗歌", "100%", 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("figcaption")}} 元素
