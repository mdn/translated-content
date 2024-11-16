---
title: <search>：通用搜索元素
slug: Web/HTML/Element/search
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<search>`** [HTML](/zh-CN/docs/Web/HTML) 元素是一个容器，代表文档或应用程序中包含与执行搜索或过滤操作相关的表单控件或其他内容的部分。`<search>` 元素在语义上标识了元素内容的用途——具有搜索或过滤功能。搜索或过滤功能可以针对网站或应用程序、当前网页或文档，也可以针对整个互联网或其子部分。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

`<search>` 元素不是用来显示搜索结果的。相反，搜索或过滤结果应作为该网页主要内容的一部分。也就是说，属于搜索或筛选功能中“快速搜索”功能的建议和链接，应嵌套在 `<search>` 元素的内容中——因为它们是搜索功能的特性。

## 无障碍考虑

`<search>` 元素定义了 [`search`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role) 地标。这样就不需要在 {{HTMLElement('form')}} 元素中添加 `role=search` 了。

## 示例

### 标题搜索表单

此示例演示了如何将 `<search>` 作为网站页眉中的搜索容器，以执行简单的全站搜索。`<search>` 是向服务器提交用户输入的搜索查询的 {{HTMLElement("form")}} 的语义容器。

#### HTML

```html
<header>
  <h1>电影网站</h1>
  <search>
    <form action="./search/">
      <label for="movie">查找电影</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">搜索</button>
    </form>
  </search>
</header>
```

#### 结果

{{EmbedLiveSample('标题搜索表单')}}

### Web 应用搜索

此示例演示了在 web 应用程序中动态加入 JavaScript 搜索功能时可能出现的 DOM 内容。在完全使用 JavaScript 实现搜索功能时，如果没有提交表单，则既不需要 {{HTMLElement("form")}} 元素，也不需要提交 {{HTMLElement("button")}} 元素。从语义上讲，`<search>` 元素包含搜索和过滤功能。

#### HTML

```html
<search>
  <label>
    查找和过滤你的查询
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    仅精确匹配
  </label>

  <section>
    <h3>结果：</h3>
    <ul id="results">
      <!-- 搜索结果内容 -->
    </ul>
    <output id="no-results">
      <!-- 无结果内容 -->
    </output>
  </section>
</search>
```

#### 结果

{{EmbedLiveSample('Web 应用搜索')}}

> [!NOTE]
> 请记住，有些用户没有 JavaScript，而在 JavaScript 成功下载、解析和执行之前，你的用户都不会运行 JavaScript，因此请确保你的用户在禁用 JavaScript 的情况下也能访问网站内容。

### 多重搜索

此示例演示了一个具有两种搜索特性的页面。首先是位于页眉的全局网站搜索。第二种是基于页面上下文的搜索和筛选，在我们的例子中是汽车搜索。

#### HTML

```html
<body>
  <header>
    <h1>汽车租赁公司</h1>
    <search title="网站">...</search>
  </header>
  <main>
    <h2>可供出租的汽车</h2>
    <search title="汽车">
      <h3>筛选结果</h3>
      ...
    </search>
    <article>
      <!-- 搜索结果内容 -->
    </article>
  </main>
</body>
```

#### 结果

{{EmbedLiveSample('多重搜索')}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/form_role"><code>form</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
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

- 其他搜索相关元素：{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}}、{{HTMLElement("form")}}
- [ARIA：Search 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role)
