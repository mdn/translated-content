---
title: <article>：文章内容元素
slug: Web/HTML/Reference/Elements/article
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`<article>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示文档、页面、应用或网站中具有独立分发或复用意义的自包含内容块，例如论坛帖子、杂志或报纸文章、博客条目、产品卡片、用户评论、交互式组件等独立内容项。

{{InteractiveExample("HTML Demo: &lt;article&gt;", "tabbed-standard")}}

```html interactive-example
<article class="forecast">
  <h1>西雅图天气预报</h1>
  <article class="day-forecast">
    <h2>2018 年 3 月 3 日</h2>
    <p>雨。</p>
  </article>
  <article class="day-forecast">
    <h2>2018 年 3 月 04 日</h2>
    <p>降雨时段。</p>
  </article>
  <article class="day-forecast">
    <h2>2018 年 3 月 05 日</h2>
    <p>大雨。</p>
  </article>
</article>
```

```css interactive-example
.forecast {
  margin: 0;
  padding: 0.3rem;
  background-color: #eee;
}

.forecast > h1,
.day-forecast {
  margin: 0.5rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.day-forecast {
  background: right/contain content-box border-box no-repeat
    url("/shared-assets/images/examples/rain.svg") white;
}

.day-forecast > h2,
.day-forecast > p {
  margin: 0.2rem;
  font-size: 1rem;
}
```

一个文档中可以包含多个文章；例如，在一个博客页面中，用户滚动时依次展示的每篇文章都可以用一个 `<article>` 表示，且其中可能包含一个或多个 `<section>`。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

- 每个 `<article>` 应该具有明确的标识，通常做法是在 `<article>` 元素内部包含一个标题元素（[`<h1>`—`<h6>`](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements) 元素）来实现。
- 当 `<article>` 元素被嵌套使用时，内部元素代表与外部元素相关的文章。例如，博客文章的评论可以是嵌套在代表博客文章的 `<article>` 中的 `<article>` 元素。
- `<article>` 元素的作者信息可以通过 {{HTMLElement("address")}} 元素提供，但该方式不适用于嵌套的 `<article>` 元素。
- `<article>` 元素的发布时间可以使用 {{HTMLElement("time")}} 元素的 [`datetime`](/zh-CN/docs/Web/HTML/Reference/Elements/time#datetime) 属性来描述。

## 示例

```html
<article class="film_review">
  <h2>侏罗纪公园</h2>
  <section class="main_review">
    <h3>评论</h3>
    <p>恐龙是伟大的！</p>
  </section>
  <section class="user_reviews">
    <h3>用户评论</h3>
    <article class="user_review">
      <h4>太吓人了！</h4>
      <p>对我来说太可怕了。</p>
      <footer>
        <p>
          发表于
          <time datetime="2015-05-16 19:00">5 月 16 日</time> 作者：Lisa。
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>我喜欢恐龙！</h4>
      <p>我同意，恐龙是我的最爱。</p>
      <footer>
        <p>
          发表于 <time datetime="2015-05-17 19:00">5 月 17 日</time> 作者：Tom。
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      发表于 <time datetime="2015-05-15 19:00">5 月 15 日</time> 作者：Staff。
    </p>
  </footer>
</article>
```

### 结果

{{EmbedLiveSample('示例','','570')}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a
          href="/zh-CN/docs/Web/HTML/Guides/Content_categories#分段内容"
          >分段内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        所有接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素。注意 <code>&#x3C;article></code> 元素不能成为 {{HTMLElement("address")}} 元素的子元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"><code>main</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他分段相关元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("section")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}
- [使用 HTML 分段和大纲](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)
