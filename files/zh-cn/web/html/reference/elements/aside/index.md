---
title: <aside>：侧边栏元素
slug: Web/HTML/Reference/Elements/aside
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`<aside>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于表示文档中内容仅与主内容间接相关的部分。通常以侧边栏或提示框的形式呈现。

{{InteractiveExample("HTML Demo: &lt;aside&gt;", "tabbed-standard")}}

```html interactive-example
<p>蝾螈是两栖动物的一种，其外形类似蜥蜴，包括幼体和成体的短腿和尾巴。</p>

<aside>
  <p>粗皮蝾螈用一种致命的神经毒素来保护自己。</p>
</aside>

<p>
  有几种蝾螈栖息在太平洋西北部的温带雨林中，其中包括恩萨蒂娜蝾螈、西北蝾螈和粗皮蝾螈。大多数蝾螈都是夜间活动，捕食昆虫、蠕虫和其他小生物。
</p>
```

```css interactive-example
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

- 不要使用 `<aside>` 元素来标记括号内的文本，因为这种文本被视为正文的一部分。

## 示例

### 使用 \<aside>

此示例使用 `<aside>` 标签来标记文章中的一个段落。该段落与文章的主要内容仅存在间接关联：

```html
<article>
  <p>迪士尼电影<cite>《小美人鱼》</cite>于 1989 年首次在院线上映。</p>
  <aside>
    <p>电影在上映初期就获得了 8700 万美元的票房收入。</p>
  </aside>
  <p>关于电影的更多信息……</p>
</article>
```

#### 结果

{{EmbedLiveSample("使用_aside")}}

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
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素。请注意，<code>&#x3C;aside></code> 元素不能是 {{HTMLElement("address")}} 元素的后代。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
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

- 其他与章节相关的元素：{{HTMLElement("body")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("nav")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}；
- [使用 HTML 章节与大纲](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA：Complementary 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
