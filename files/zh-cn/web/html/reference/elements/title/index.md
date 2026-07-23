---
title: "`<title>`：文档标题元素"
short-title: <title>
slug: Web/HTML/Reference/Elements/title
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<title>`** [HTML](/zh-CN/docs/Web/HTML) 元素定义文档的标题，该标题显示在{{glossary("Browser", "浏览器")}}的标题栏或页面标签页中。它只包含文本；元素内的 HTML 标签（如有）也会被当作纯文本处理。

```html
<title>祖母的重金属音乐节日记</title>
```

## 属性

该元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

`<title>` 元素始终用在页面的 {{HTMLElement("head")}} 块内。

### 页面标题与 SEO

页面标题的内容会对搜索引擎优化（{{glossary("SEO")}}）产生显著影响。一般来说，较长且具有描述性的标题比简短或笼统的标题表现更好。标题内容是搜索引擎算法决定搜索结果中页面排列顺序时所使用的因素之一。此外，标题也是吸引浏览搜索结果页的读者注意力的最初“钩子”。

撰写良好标题的几条准则和建议：

- 避免只有一两个词的标题。使用描述性短语，或对术语表/参考类页面采用“术语—定义”配对。
- 搜索引擎通常大约只显示页面标题的前 55–60 个字符。超出部分可能会丢失，因此尽量不要让标题超过这个长度。如果必须使用较长标题，请确保重要部分靠前，且标题中可能被截断的部分不包含关键内容。
- 不要使用“关键词堆砌”。如果标题只是一串词语列表，算法往往会降低你的页面在搜索结果中的排名。
- 尽量确保站点内各页面的标题尽可能唯一。重复——或近乎重复——的标题可能导致搜索结果不准确。

## 无障碍

提供准确且简洁的标题来描述页面用途非常重要。

辅助技术用户常用的一种导航技巧是阅读页面标题，并据此推断页面所含内容。这是因为进入页面内部再判断其内容可能既耗时又容易令人困惑。网站中每个页面的标题都应唯一，理想情况下先呈现页面的主要用途，再跟网站名称。遵循这一模式有助于确保屏幕阅读器首先朗读页面的主要用途。这比用户在同一网站中导航每个页面时都要先听完网站名称再听到独特的页面标题，体验要好得多。

### 示例

```html
<title>菜单 - 蓝屋中餐 - FoodYum：今天在线外卖！</title>
```

如果表单提交包含错误且提交后重新渲染当前页面，可以利用标题帮助用户意识到提交中的错误。例如，更新页面的 `title` 值以反映重要的页面状态变化（如表单验证问题）。

```html
<title>2 个错误 - 你的订单 - 海鲜商店 - Food：今天在线外卖！</title>
```

> [!NOTE]
> 目前，动态更新页面标题不会被屏幕阅读器自动朗读。如果你要通过更新页面标题来反映页面状态的重大变化，可能还需要使用 [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)。

- [MDN / 理解 WCAG，准则 2.4](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功标准 2.4.2 | W3C 理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## 示例

```html
<title>精彩有趣的内容</title>
```

此示例将页面标题（显示在窗口顶部或窗口标签页中）设为“精彩有趣的内容”。

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#元数据内容"
          >元数据内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        非元素间{{glossary("whitespace", "空白字符")}}的文本。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签和结束标签都是必需的。请注意，若省略
        <code>&#x3C;/title></code>，浏览器应忽略页面的其余部分。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        不包含其他
        <code>&lt;title&gt;</code> 元素的 {{ HTMLElement("head") }} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code>。</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- SVG {{svgelement("title")}} 元素
