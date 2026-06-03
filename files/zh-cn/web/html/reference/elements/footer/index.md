---
title: <footer>：页脚元素
slug: Web/HTML/Reference/Elements/footer
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

[HTML](/zh-CN/docs/Web/HTML) **`<footer>`** 元素表示其最近的祖先[分段内容](/zh-CN/docs/Web/HTML/Guides/Content_categories#分段内容)的页脚或[分段根](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements#标注章节内容)元素。`<footer>` 通常包含有关该部分作者、版权数据或相关文档链接的信息。

{{InteractiveExample("HTML Demo: &lt;footer&gt;", "tabbed-standard")}}

```html interactive-example
<article>
  <h1>How to be a wizard</h1>
  <ol>
    <li>Grow a long, majestic beard.</li>
    <li>Wear a tall, pointed hat.</li>
    <li>Have I mentioned the beard?</li>
  </ol>
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
</article>
```

```css interactive-example
article {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #45a1ff;
  color: #fff;
}
```

## 属性

该元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

- 在 {{HTMLElement("address")}} 元素中包含有关作者的信息，该元素可以包含在 `<footer>` 元素中。
- 当最近的祖先分段内容或分段根元素是 body 元素时，页脚适用于整个页面。
- `<footer>` 元素不是分段内容，因此不会在[大纲](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)中引入新的分段。

## 示例

```html
<body>
  <h3>FIFA 世界杯最佳射手</h3>
  <ol>
    <li>米罗斯拉夫 · 克洛泽，16</li>
    <li>罗纳尔多 · 纳扎里奥，15</li>
    <li>格尔德 · 穆勒，14</li>
  </ol>

  <footer>
    <small> 版权所有 © 2023 足球历史档案馆。保留所有权利。 </small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: #000;
}
```

{{EmbedLiveSample('示例')}}

## 无障碍考虑

在 Safari 13 发布之前，`contentinfo` [地标角色](/zh-CN/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#路牌地标)无法通过 [VoiceOver](https://help.apple.com/voiceover/info/guide/) 正确显示。如果需要支持传统的 Safari 浏览器，请在 `footer` 元素中添加 `role="contentinfo"` 以确保正确显示地标。

- 相关：[WebKit Bugzilla: 146930 - AX：HTML 原生元素（页眉、页脚、主页、旁页、导航）应与 ARIA 地标一样工作，但有时却不一样](https://webkit.org/b/146930)

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>，但不可以有 <code>&#x3C;footer></code> 或
        {{HTMLElement("header")}} 后代。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始和结束标签都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>的元素。请注意，<code>&#x3C;footer></code> 元素不得是 {{HTMLElement("address")}}、{{HTMLElement("header")}} 或其他 <code>&#x3C;footer></code> 元素的后代。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role">contentinfo</a> 或
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Generic_role">generic</a>
       如果是 <a href="/zh-CN/docs/Web/HTML/Reference/Elements/article">article</a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/aside">aside</a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/main">main</a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/nav">nav</a> 或 <a href="/zh-CN/docs/Web/HTML/Reference/Elements/section">section</a> 元素的后代，则为 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role">contentinfo</a> 或
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Generic_role">generic</a>，或一个具有 <code>role=<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Article_Role">article</a></code>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Complementary_role">complementary</a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Main_role">main</a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Navigation_Role">navigation</a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Region_role">region</a> 的元素
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> 或
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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

- 其他与分节相关的元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、 {{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("section")}}、{{HTMLElement("address")}}
- [使用 HTML 分节和大纲](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA：Contentinfo 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
