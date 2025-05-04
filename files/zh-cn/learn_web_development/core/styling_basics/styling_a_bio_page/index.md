---
title: 挑战：为传记页面添加样式
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

通过在前几节课程中学到的知识，你应该学会了用 CSS 组织一个简单的文本文件，并且在其中添加自己的 CSS 样式。本节中你将实现这一功能。

## 前提

你可以使用下面的实时编辑器，或者下载这个[download the starting point](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/)在自己的编辑器中进行编辑。这是一个独立的 HTML 文件，在 head 中包含了初始 CSS 样式。你可以将这些 CSS 样式从 HTML 文件中移出，保存为另一个独立文件。你可以选择 CodePen、jsFiddle 或 Glitch 中的任意一个完成这些工作。

> [!NOTE]
> 如果遇到困难，你可以向我求助——参见本页下面的[测评或请求帮助](#测评或请求帮助)部分。

### 让我们来学一些 CSS 样式

接下来的实例是一个个人主页，我们用 CSS 设定它的样式。以下是我用到的一些 CSS 属性，通过这些链接，你可以打开相应的 MDN 页面了解更多。

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

我使用了许多不同的选择器（样式元素），如 h1 和 h2，也为工作职务建立了一个类别。

尝试使用 CSS 更改这一页面的显示，试着修改已有属性的取值，删除一些规则，或添加新的样式。然后通过[CSS 参考](/zh-CN/docs/Web/CSS/Reference)找到本文未提及的一些属性，尽管大胆尝试！

举例来说，你可以：

- 使用 CSS 的颜色关键词 hotpink，将一级标题设定为粉红色。
- 使用 CSS 颜色关键词 purple，为标题添加 10 像素宽的点线边距。
- 将二级标题设为斜体。
- 用#eeeeee 为联系人列表中的超链接添加背景颜色和一个 5 像素宽的紫色加粗边框。使用一些内边距属性，拉开正文与外边距的距离。
- 当鼠标在某些 HTML 元素上悬停时增加动画 (推荐改变颜色和字体)。
- 设置链接在鼠标悬停时变为绿色。

最终，你得到的页面将如下图所示：

![Screenshot of how the example should look after completing the assessment.](learn-css-basics-assessment.png)

记住这里没有错误的答案——在这个阶段你可以在学习中娱乐一下。

```html live-sample___biog
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: 123 45678</li>
</ul>
```

```css live-sample___biog
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #375e97;
  font-size: 2em;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-bottom: 1px solid #375e97;
}

h2 {
  font-size: 1.5em;
}

.job-title {
  color: #999999;
  font-weight: bold;
}

a:link,
a:visited {
  color: #fb6542;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("biog", "", "400px")}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
