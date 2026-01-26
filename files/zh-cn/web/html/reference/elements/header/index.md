---
title: <header>：标题元素
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

**`<header>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示介绍性内容，通常是一组介绍性或导航性辅助内容。它可能包含一些标题元素，也可能包含徽标、搜索表单、作者姓名和其他元素。

{{InteractiveExample("HTML Demo: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: #000 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## 使用说明

`<header>` 元素的意义与网站范围内的 [`banner`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) 地标角色相同，除非嵌套在分段内容内。在这种情况下，`<header>` 元素不再是地标。

`<header>` 元素可以定义一个全局站点标题，在无障碍树中描述为 `banner`。它通常包括一个徽标、公司名称、搜索功能，以及可能的全局导航或标语。它通常位于页面的顶端。

否则，它是在无障碍树中的一个 `section`，通常包含周围部分的标题（`h1` – `h6` 元素）和可选的副标题，但这并**不是**必要的。

### 历史用法

`<header>` 元素最初在 HTML 的早期用于标题。在[第一个网站](https://info.cern.ch/)中可以看到。在某个时间点，标题变成了 [`<h1>` 至 `<h6>`](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)，使 `<header>` 可以自由地扮演一个不一样的角色。

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 无障碍

当 `<header>` 元素的上下文为 {{HTMLElement('body')}} 元素时，它定义了一个 [`banner`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) 地标。当 HTML 标题元素是 {{HTMLElement('article')}}、{{HTMLElement('aside')}}、{{HTMLElement('main')}}、{{HTMLElement('nav')}} 或 {{HTMLElement('section')}} 元素的后代时，则不视为 banner 地标。

## 示例

### 页面标题

```html
<header>
  <h1>主页标题</h1>
  <img src="mdn-logo-sm.png" alt="MDN 徽标" />
</header>
```

#### 结果

{{EmbedLiveSample('页面标题')}}

### 文章标题

```html
<article>
  <header>
    <h2>行星地球</h2>
    <p>
      作者：Jane Smith，发布日期：<time datetime="2017-10-04"
        >2017 年 10 月 4 日</time
      >
    </p>
  </header>
  <p>我们生活在一个蓝绿相间的星球上，有许多东西还未曾见过。</p>
  <p><a href="https://example.com/the-planet-earth/">继续阅读……</a></p>
</article>
```

#### 结果

{{EmbedLiveSample('文章标题')}}

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
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >，但没有 <code>&#x3C;header></code> 或 {{HTMLElement("footer")}} 后代。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#flow_content"
          >流式内容</a
        >的元素。请注意，<code>&#x3C;header></code> 元素不得是 {{HTMLElement("address")}}、{{HTMLElement("footer")}} 或另一个 <code>&lt;header&gt;</code> 元素的后代。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        如果是
        <code><a href="/zh-CN/docs/Web/HTML/Reference/Elements/article">article</a></code
        >、<code><a href="/zh-CN/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >、<code><a href="/zh-CN/docs/Web/HTML/Reference/Elements/main">main</a></code
        >、<code><a href="/zh-CN/docs/Web/HTML/Reference/Elements/nav">nav</a></code> 或是
        <code><a href="/zh-CN/docs/Web/HTML/Reference/Elements/section">section</a></code>
        元素的后代，或者是带有
        <code
          >role=<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
            >article</a
          ></code
        >、<code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >、<code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
          ></code
        >、<code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
            >navigation</a
          ></code
        >
        或
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >region</a
          ></code
        > 属性的元素的后代，则为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a>；否则为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">banner</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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

- 其他与章节相关的元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("footer")}}、{{HTMLElement("section")}}、{{HTMLElement("address")}}。
