---
title: "`<cite>` HTML 引用元素"
short-title: <cite>
slug: Web/HTML/Reference/Elements/cite
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<cite>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于标记创作作品的标题。该引用可根据与引用元数据相关的、适合上下文的惯例采用缩写形式。

{{InteractiveExample("HTML 演示：&lt;cite&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <blockquote>
    <p>那是四月里明媚而寒冷的一天，时钟正敲响十三下。</p>
  </blockquote>
  <figcaption>
    乔治·奥威尔《
    <cite><a href="http://www.george-orwell.org/1984/0.html">一九八四</a></cite>
    》第一部第一章的首句。
  </figcaption>
</figure>
```

```css interactive-example
cite {
  /* 在此添加你的样式 */
}
```

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

在 `<cite>` 元素的语境中，创作作品例如可以是以下之一：

- 一本书
- 一篇研究论文
- 一篇散文
- 一首诗
- 一份乐谱
- 一首歌曲
- 一部戏剧或电影剧本
- 一部电影
- 一档电视节目
- 一款游戏
- 一座雕塑
- 一幅画
- 一场戏剧演出
- 一部戏剧
- 一部歌剧
- 一部音乐剧
- 一场展览
- 一份法律案件报告
- 一个计算机程序
- 一个网站
- 一个网页
- 一篇博客文章或评论
- 一篇论坛帖子或评论
- 一条推文
- 一条 Facebook 帖子
- 一份书面或口头陈述
- 等等。

若要标明包含在 {{HTMLElement("blockquote")}} 或 {{HTMLElement("q")}} 元素中的引文来源，请在该元素上使用 [`cite`](/zh-CN/docs/Web/HTML/Reference/Elements/blockquote#cite) 属性。

通常，浏览器默认以斜体样式呈现 `<cite>` 元素的内容。若要避免这一点，请对 `<cite>` 元素应用 CSS {{cssxref("font-style")}} 属性。

## 示例

```html
<p>更多信息请参见 <cite>[ISO-0000]</cite>。</p>
```

### 结果

{{EmbedLiveSample("示例", 640, 80)}}

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
        >、
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
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
        任何接受
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLElement")}}。在 Gecko 1.9.2（Firefox 4）及更早版本中，Firefox 对该元素实现的是 {{domxref("HTMLSpanElement")}} 接口。
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 用于长引用的 {{HTMLElement("blockquote")}} 元素。
- 用于行内引用的 {{HTMLElement("q")}} 元素，以及 [`cite`](/zh-CN/docs/Web/HTML/Reference/Elements/q#cite) 属性。
