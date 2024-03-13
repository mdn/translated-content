---
title: <h1>–<h6>：HTML 区域标题元素
slug: Web/HTML/Element/Heading_Elements
---

**HTML `<h1>`–`<h6>` 标题 (Heading) 元素**呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低。

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（Flow_content）">流式内容</a>，标题内容，可触知的内容。</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受流内容的元素；不要把它作为 {{HTMLElement("hgroup")}} 元素的子元素，这种做法已经被废弃了。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLHeadingElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含所有[全局特性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **备注：** align 属性已废弃；不要继续使用它。

## 使用要点

- 用户代理可以使用标题信息，例如自动构建文档的目录。
- 不要为了减小标题的字体而使用低级别的标题，而是使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("font-size")}} 属性。
- 避免跳过某级标题：始终要从 `<h1>` 开始，接下来依次使用 `<h2>` 等等。

## 示例

### 所有标题

下面的代码展示了所有可用的标题级别。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

下面是这些代码的结果：

{{ EmbedLiveSample('所有标题', '280', '300', '') }}

### 示例页面

下面的代码展示了几个具有部分内容的标题。

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

下面是代码的运行结果：

{{ EmbedLiveSample('示例页面', '280', '480', '') }}

## 无障碍问题

### 导航

对于使用屏幕阅读软件的用户而言，一种常见的导航方式是从一个标题跳到另一个标题，以快速确定页面的内容。因此，不要跳过一个或多个标题级别。因为这样做可能会造成混乱，使用户困惑于缺少的标题在哪里。

#### 错误用法

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### 正确用法

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 嵌套

标题可以嵌套其小节，以反映页面的结构。大多数屏幕阅读器可以生成页面上所有标题的列表，从而帮助用户快速确定内容的层次结构：

1. `h1` Beetles

   1. `h2` Etymology
   2. `h2` Distribution and Diversity
   3. `h2` Evolution

      1. `h3` Late Paleozoic
      2. `h3` Jurassic
      3. `h3` Cretaceous
      4. `h3` Cenozoic

   4. `h2` External Morphology

      1. `h3` Head

         1. `h4` Mouthparts

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Legs
      4. `h3` Wings
      5. `h3` Abdomen

当小节中嵌套子标题时，若关闭了某个小节，则其中的嵌套的子标题可能会被“跳过”。

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 标注章节内容

屏幕阅读软件用户的另一种常用导航技术是生成[内容分区](/zh-CN/docs/Web/HTML/Element#内容分区)的列表，并使用其确定页面布局

Sectioning content can be labeled using a combination of the [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) and [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) attributes, with the label concisely describing the purpose of the section. This technique is useful for situations where there is more than one sectioning element on the same page.

#### 示例

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

In this example, screen reading technology would announce that there are two {{HTMLElement("nav")}} sections, one called "Primary navigation" and one called "Footer navigation". If labels were not provided, the person using screen reading software may have to investigate each `nav` element's contents to determine their purpose.

- [Using the aria-labelledby attribute](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

{{HTMLSidebar}}
