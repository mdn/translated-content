---
title: 你的网站会是什么样子？
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 14f7331883bfa16ca5c0e3cd3b19d412e1b412fd
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_你的网站会是什么样子_？讨论的是你编写代码之前不得不为你的网站准备的计划和设计工作，包括“网站提供哪些信息？”、“用哪些字体和颜色？”、“网站是做什么的？”。

## 第一步：计划

做任何事情之前，都要先有一些想法。你的网站到底是做什么的？一个网站基本上可以做任何事情，但对于你的第一个网站来说，最好简单一些。我们将从创建一个简单的网页开始，它包含一个标题、一张图片和几个段落。

首先，请考虑以下问题：

1. **网站的主题是什么**？你喜欢狗、上海、还是吃豆人？
2. **基于所选主题要展示哪些信息**？写下标题和几段文字，再找个你想在页面上展示的图像。
3. 用简单且高级的话来说，**你的网站会是什么样子**？背景颜色是什么？哪种字体合适：正式的、卡通的、粗体还是瘦体？

> [!NOTE]
> 复杂的网站需要更详细的指引，深入到颜色、字体、页面上元素的间距、适当的书写风格等等以及其他细节。这有时被称为设计指南、设计系统或品牌手册，可以在 [Firefox Photon 设计系统](https://design.firefox.com/photon/)中找到一个示例。

## 绘制草图

接下来，拿起笔和纸，大致勾勒出你所希望的网站样子。对于第一个简单的网站，虽然要绘制的东西不多，但你现在应该养成这样做的习惯。画草图很有用——并且你不需要有梵高的手法！

![画在纸上的一个粗略的网站草图](website-drawing-scan.png)

> [!NOTE]
> 即使在实际的复杂网站中，设计团队通常也是从粗略的草图开始设计的，再使用图形编辑器或 Web 技术建立数字模拟图。
>
> Web 团队通常包含一名平面设计师和一名{{Glossary("UX", "用户体验")}}（UX）设计师。平面设计师把网站的视觉效果放在一起。用户体验设计师则以一种稍加抽象的方式解决用户体验及网站交互方面的问题。

## 选定素材

此时，就可以开始把最终呈现在网页上的内容放在一起。

### 文本

准备好刚才撰写的标题和文字。把这些东西放到旁边。

### 主题颜色

使用[色彩选择工具](/zh-CN/docs/Web/CSS/Guides/Colors/Color_format_converter)挑选心仪的颜色。当选中某种颜色时，会显示一个六位神秘代码，类似于 `#660066`。它是一个*十六进制数*，用于表示颜色。将其复制并暂存。

![MDN 文档网站上的色彩选择工具，包含 RGB、HSL、HEX 格式](color-picker.png)

### 图像

访问 [Google 图片](https://www.google.com/imghp)搜索合适的图片。

1. 当你找到想要的图片时，点击该图片查看放大视图。
2. 右键单击图片（Mac 上为 Ctrl + 单击），选择*将图像另存为...*，并选择一个安全的存放图片的位置。或者，从浏览器地址栏中复制图片的网址，以便后续使用。

![Google 图片上搜索项的搜索结果](updated-google-images.png)

请注意，网络上的大多数图片，包括谷歌图片中的图片，都是有版权的。为了降低侵权的可能性，可以使用谷歌的许可证过滤器。点击*工具*按钮，然后点击下面出现的*使用权限*选项。你应该选择*知识共享许可*这个选项。

![Google 图片上经知识共享许可过滤后的搜索结果](updated-google-images-licensing.png)

### 字体

和图片一样，很多字体都受版权保护，也就是说，你不可以在你的网站上随意使用它们。[Google Fonts](https://developers.google.cn/fonts) 是 Google 旗下的提供许多字体许可的 Web 服务。

选好字体后，你有两种主要的使用方式：

1. 在你的代码中添加一个从 Google 服务器加载这个字体的引用。
2. 将字体文件下载到你的系统，自行托管这个文件，并在你网站的代码中使用托管的副本文件。

> [!NOTE]
> 使用 Google Fonts 上托管的字体可能会违反欧盟的数据隐私规定 [GDPR](https://gdpr.eu/what-is-gdpr/)，因为该字体服务会暴露用户的 IP 地址。如果这对你而言是潜在的问题，那么可以选择第二种方式，也可以选择符合 GDPR 的字体供应商，如 [Bunny Fonts](https://fonts.bunny.net/about)。

另一个选择是使用[安全 Web 字体](https://web.mit.edu/jmorzins/www/fonts.html)，如 Arial、Times New Roman、Courier New。

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
