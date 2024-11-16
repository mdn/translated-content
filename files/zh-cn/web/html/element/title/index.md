---
title: <title>
slug: Web/HTML/Element/title
---

{{HTMLSidebar}}

**HTML `<title>` 元素** 定义文档的标题，显示在{{glossary("Browser", "浏览器")}}的标题栏或标签页上。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。

```html
<title>第十五届秋季运动会</title>
```

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Metadata_content">元数据内容。</a></td>
  </tr>
  <tr>
   <th>允许内容</th>
   <td>非空字符或特殊字符（{{glossary("whitespace")}}）的文本</td>
  </tr>
  <tr>
   <th>标签遗漏</th>
   <td>同时需要开标签和闭标签。注意：遗漏<code> &lt;/title&gt;</code> 标签会导致浏览器忽略掉页面的剩余部分。</td>
  </tr>
  <tr>
   <th>允许的父标签</th>
   <td>一个 {{ HTMLElement("head") }} 元素只能包含一个 {{ HTMLElement("title") }} 元素</td>
  </tr>
  <tr>
   <th>允许的无障碍角色</th>
   <td>无</td>
  </tr>
  <tr>
   <th>DOM 接口</th>
   <td>{{domxref("HTMLTitleElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只拥有[全局属性。](/zh-CN/docs/Web/HTML/Global_attributes)

## 使用说明

\<title>元素始终在页面的 {{HTMLElement("head")}} 块内使用。

### 页面标题和 SEO

页面标题的内容可能对搜索引擎优化（{{glossary("SEO")}}）具有重要意义。通常，较长的描述性标题要比简短或一般性标题更好。标题的内容是搜索引擎算法用来确定在搜索结果中列出页面顺序的组件之一。同样，标题是初始的“挂钩”，你可以通过它吸引浏览浏览结果页面的读者的注意力。

撰写好标题的一些准则和技巧：

- 避免使用一两个单词的标题。对于词汇表或参考样式的页面，请使用描述性短语或术语 - 定义对。
- 搜索引擎通常显示页面标题的前 55 至 60 个字符。超出此范围的文本可能会丢失，因此请尽量不要使标题更长。如果你必须使用较长的标题，请确保重要的部分出现在前面，并且标题中可能要删除的部分中没有关键内容。
- 不要使用“关键字集合”。如果标题只是单词列表，则算法通常会降低页面在搜索结果中的位置。
- 尝试确保你的标题在你自己的网站中尽可能唯一。标题重复（或几乎重复）可能会导致搜索结果不准确。

## 示例

```html
<title>Amazing！</title>
```

本示例建立一个页面，其标题（如显示在窗口顶部或在窗口的选项卡中）为“Amazing！”。

## 无障碍问题

提供描述页面用途的标题值很重要。

辅助技术用户的常用导航技术是读取页面标题并推断页面包含的内容。这是因为导航到页面以确定其内容可能是一个耗时且可能引起混乱的过程。

### 示例

```html
<title>菜单 - 蓝屋中餐 - FoodYum：今日可送达的在线外卖！</title>
```

为了帮助用户，更新页面标题值以反映重大的页面状态更改（例如表单验证问题）。

```html
<title>2 个异常 - 你的订单 - 海鲜店铺 - Food：今日可送达的在线外卖！</title>
```

- [MDN Understanding WCAG, Guideline 2.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
