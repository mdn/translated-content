---
title: 处理文件
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
original_slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

一个网站包含许多文件：文本内容、代码、样式表、媒体内容，等等。在建立一个网站时，你需要在计算机上将这些文件以合理的结构组织起来，确保文件之间交互畅通，并在最终[将它们上传到服务器](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)之前使所有内容看起来正确。*处理文件*讨论了一些你应该注意的问题，以便你能为你的网站建立一个合理的文件结构。

## 网站应该保存在何处？

当你在本地计算机上构建网站时，应该将所有的相关文件放在一个映射出服务器端线上站点文件结构的单独文件夹中。这个文件夹可以放在你喜欢的任何地方，但你应该把它放在能轻易找到的地方，也许是在桌面上，在家目录里，或者在硬盘根目录下。

1. 选择一个存放网站项目的地方。在你选择的地方，创建一个名为 `web-projects`（或类似）的新文件夹。这是你所有的网站项目的存放地。
2. 在这个文件夹中，创建另一个存放你的第一个网站的文件夹。称之为 `test-site`（或更有想象力的名字）。

## 关于大小写和空格的提示

你会注意到，在本文中，我们要求你完全用小写字母且不带空格命名文件夹和文件。这是因为：

1. 许多计算机，特别是 Web 服务器，是区分大小写的。因此，假如把你的网站上的一张图片放在 `test-site/MyImage.jpg`，然后在一个不同的文件中，你试图以 `test-site/myimage.jpg` 调用该图片，它可能无法工作。
2. 许多情况下，带有空格的文件名会出现问题：

   - 在终端中调用命令时，你不得不在带有空格的文件名的周围包裹引号，否则这个路径会解释成两个不同的项。
   - 一些编程语言（如 Python）在导入模块文件时，不能很好地处理文件名中的空格。

文件名也会映射为 URL。例如，假设在你的服务器提供服务的根目录下有一个名为 `my_file.html` 的文件，根据大多数 Web 服务器的默认行为，一般是可以通过 `https://example.com/my_file.html` 访问这个文件。一些服务器会将文件名中的空格替换为“%20”（URL 中空格的字符代码），在假定文件名和 URL 完全匹配的情况下，会出现一些难以捉摸的服务器端逻辑错误。

也建议文件名使用连字符分割单词，而不是下划线：对比 `my-file.html` 和 `my_file.html`。[谷歌搜索引擎把连字符当作单词的分隔符，但不会把下划线当作单词的分隔符](https://developers.google.cn/search/docs/crawling-indexing/url-structure)。通过服务器配置将下划线替换为连字符能避免这种情况，但那是额外的工作并且文件名和 URL 不一致更容易出错。

基于这些原因，最好养成文件夹名和文件名使用小写、不带空格、用连字符分隔单词的习惯，至少直到你清楚自己在做什么的那个时候。那样的话，在接下来的旅程中，你遇到的问题会更少。

## 网站应该使用什么结构？

接下来，让我们看看测试网站应该使用什么结构。在我们创建的任何网站项目中，最常见的是一个主页 HTML 文件和包含图像、样式文件和脚本文件的文件夹。现在让我们创建这些：

1. **`index.html`**：这个文件一般包含主页内容，也就是用户第一次访问网站时看到的文字和图片。使用文本编辑器，创建一个名为 `index.html` 的新文件，并将其保存在 `test-site` 文件夹内。
2. **`images` 文件夹**：这个文件夹包含网站上使用的所有图片。在 `test-site` 文件夹内创建一个名为 `images` 的文件夹。
3. **`styles` 文件夹**：这个文件夹包含为内容提供样式的 CSS 代码（例如，设置文本和背景的颜色）。在 `test-site` 文件夹内创建一个名为 `styles` 的文件夹。
4. **`scripts` 文件夹**：这个文件夹包含所有用于向网站添加交互功能的 JavaScript 代码（例如，点击时加载数据的按钮）。在 `test-site` 文件夹内创建一个名为 `scripts` 的文件夹。

> [!NOTE]
> 在 Windows 上你可能看不到文件扩展名，因为 Windows 有一个默认开启的**隐藏已知文件类型的扩展名**的选项。一般来说，你可以通过 Windows 资源管理器，选择**文件夹选项**选项，取消勾选**隐藏已知文件类型的扩展名**复选框，然后点击**确认**将其关闭。你可以在网上搜索涉及你的 Windows 版本的更多具体信息。

## 文件路径

为使文件之间交互通畅，你必须提供一个文件间的文件路径，让一个文件知道另一个文件的位置。作为演示，我们将在 `index.html` 中插入一小段 HTML，显示在[“你的网站会是什么样子？“](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)一文中选择的图片。或者，你可以在电脑上或从网上选择一张现有的图片，并在下面的步骤中使用它：

1. 将前面选择的图片复制到 `images` 文件夹。
2. 打开 `index.html` 文件，准确无误地将下列代码插入该文件中。现在不用担心它是什么意思——我们将在本系列后面的文章中更详细地研究这些结构。

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

3. 该行 HTML 代码 `<img src="" alt="My test image">` 用于向页面插入图片。我们需要告知 HTML 图片的位置。这张图片位于与 `index.html` 处于同一目录的 _images_ 目录下。为了从 `index.html` 访问到图片，我们需要的文件路径是 `images/your-image-filename`。假如图片叫做 `firefox-icon.png`，那么文件路径就是 `images/firefox-icon.png`。
4. 在代码 `src=""` 的双引号之间插入文件路径。
5. 将 `alt` 属性的内容改成引入的[图片的描述信息](/zh-CN/docs/Web/HTML/Element/img#使用有实际意义的备用描述)。在这个例子中，就是 `alt="Firefox 标志：一只盘旋在地球上的火狐"`。
6. 保存 HTML 文件，然后使用浏览器打开（双击该文件）。你应该看到显示图片的新网页！

![一张只显示 firefox 标志的基础网站的截图——一只盘旋在地球上的火狐](website-screenshot.png)

一些通用的文件路径规则：

- 若引用的目标文件与 HTML 文件同级，只需直接使用文件名，例如：`my-image.jpg`。
- 要引用子目录中的文件，请在路径前面写上目录名，再加上一个正斜杠。例如：`subdirectory/my-image.jpg`。
- 若引用的目标文件位于 HTML 文件的**上级**，需要加上两个点。举个例子，如果 `index.html` 在 `test-site` 的一个子文件夹内，而 `my-image.jpg` 在 `test-site` 内，你可以使用 `../my-image.jpg` 从 `index.html` 引用 `my-image.jpg`。
- 以上方法可以随意组合，比如：`../subdirectory/another-subdirectory/my-image.jpg`。

这是你目前需要知道的全部内容。

> [!NOTE]
> Windows 的文件系统使用反斜杠而不是正斜杠，例如：`C:\Windows`。这在 HTML 中并不重要——即使你在 Windows 系统上进行开发，你也应该在代码中使用正斜杠。

## 还应该做些什么？

这就是本文目前的全部内容。现在你的文件夹结构应该看起来像这样：

![macOS 访达中的文件结构，包含：有一张图片的 images 文件夹，空的 scripts 和 styles 文件夹和一个 index.html 文件](file-structure.png)

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
