---
title: 处理文件
slug: Learn/Getting_started_with_the_web/Dealing_with_files
tags:
  - 初学者
  - CodingScripting
  - 文件
  - 指南
  - HTML
  - 理论
  - 网站
translation_of: Learn/Getting_started_with_the_web/Dealing_with_files
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

一个网站包含许多文件：文本内容、代码、样式表、媒体内容，等等。当你建立一个网站时，你需要在计算机上将这些文件以合理的结构组织起来，确保文件之间交互畅通，并在你最终[将它们上传到服务器](/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)之前使你的所有内容看起来正确。*处理文件*讨论了一些你应该注意的问题，以便你能为你的网站建立一个合理的文件结构。

## 网站应该保存在何处？

对于本地网站，应将所有相关文件放在一个单独文件夹中，可以映射出服务器端站点文件结构。这个文件夹可以放在任何你喜欢的地方，但你应该把它放在你能轻易找到的地方，也许是在你的桌面上，在你的主页文件夹里，或者在你的硬盘根目录下。

1. 选择一个地方来存储你的网站项目。在你选择的地方，创建一个名为 `web-projects`（或类似）的新文件夹。这是你所有的网站项目的存放地。
2. 在这个文件夹中，创建另一个文件夹来存放你的第一个网站。称之为 `test-site`（或更有想象力的东西）。

## 关于大小写和空格的提示

你会注意到，在这篇文章中，我们要求你完全用小写字母命名文件夹和文件，没有空格。这是因为：

1. 许多计算机，特别是网络服务器，是区分大小写的。因此，假如你把一张图片放在你的网站上 `test-site/MyImage.jpg`，然后在一个不同的文件中，你试图以 `test-site/myimage.jpg` 来调用该图片，它可能无法工作。
2. 浏览器、网络服务器和编程语言对空格的处理并不一致。例如，如果你在文件名中使用空格，一些系统可能将其视为两个文件名。一些服务器会用“%20”（URL 中空格的字符代码）替换文件名中的区域，导致所有链接被破坏。最好用连字符而不是下划线来分隔单词。对比 `my-file.html` 与 `my_file.html`。

简言之，文件名中应使用连字符。谷歌搜索引擎把连字符当作单词的分隔符，但不会识别下划线。基于此，最好在一开始就养成习惯，文件夹和文件名使用小写，用短横线来分隔。这可以避免许多问题。

## 网站应该使用什么结构？

接下来，让我们看看我们的测试网站应该是什么结构。在我们创建的任何网站项目中，最常见的是一个主页 HTML 文件和包含图像、样式文件和脚本文件的文件夹。现在让我们来创建这些：

1. **`index.html`**：这个文件一般会包含主页内容，也就是人们第一次进入网站时看到的文字和图片。使用文本编辑器，创建一个名为`index.html`的新文件，并将其保存在`test-site`文件夹内。
2. **`images` 文件夹**：这个文件夹包含网站上使用的所有图片。在 `test-site` 文件夹内创建一个名为 `images` 的文件夹。
3. **`styles` 文件夹**：这个文件夹包含用于设置内容样式的 CSS 代码（例如，设置文本和背景颜色）。在你的 `test-site` 文件夹内创建一个名为 `styles` 的文件夹。
4. **`scripts` 文件夹**：这个文件夹包含所有用于向网站添加交互功能的 JavaScript 代码（例如，点击时加载数据的按钮）。在 `test-site` 文件夹内创建一个名为 `scripts` 的文件夹。

> **备注：** 在 Windows 上你可能看不到文件扩展名，因为 Windows 有一个默认开启的**隐藏已知文件类型的扩展名**的选项。一般来说，你可以通过 Windows 资源管理器，选择**文件夹选项**选项，取消勾选**隐藏已知文件类型的扩展名**复选框，然后点击**确认**将其关闭。对于涉及你的 Windows 版本的更多具体信息，你可以在网上搜索。

## 文件路径

为使文件间正常交互，应为每个文件提供访问路径，所以一个文件知道另一个文件的位置。为作为演示，我们将在 `index.html` 中插入一小段 HTML，并使其显示你在[“你的网站会是什么样？“](/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)一文中选择的图片。或者，你可以在你的电脑上或从网上选择一个现有的图片，并在下面的步骤中使用它：

1. 将你之前选择的图片复制到你的 `images` 文件夹。
2. 打开你的 `index.html` 文件，并准确地将以下代码插入该文件中。当下不要对其感到困惑——我们将在本系列的后面更详细地研究这些结构。

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <img src="" alt="My test image">
      </body>
    </html>
    ```

3. 该行代码 `<img src="" alt="My test image">` 用于向页面中插入图片。我们需要告知 HTML 图片的位置。这张图片位于 *images* 目录下，与 `index.html` 处于同一目录。为了从 `index.html` 访问到我们的图像，我们需要的文件路径是 `images/your-image-filename`。例如，这里的图像叫做 `firefox-icon.png`，那么文件路径就是 `images/firefox-icon.png`。
4. 在 HTML 代码 `src=""` 的双引号之间插入文件路径。
5. 保存 HTML 文件，然后使用浏览器打开（双击该文件）。你应该看到新网页显示了新的图像！

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](website-screenshot.png)

文件路径的一些通用规则：

- 若引用的目标文件与 HTML 文件同级，只需直接使用文件名，例如：`my-image.jpg`。
- 要引用子目录中的文件，请在路径前面写上目录名，再加上一个正斜杠。例如：`subdirectory/my-image.jpg`。
- 若引用的目标文件位于 HTML 文件的**上级**，需要加上两个点。举个例子，如果 `index.html` 在 `test-site` 的一个子文件夹内，而 `my-image.jpg` 在 `test-site` 内，你可以使用`../my-image.jpg` 从 `index.html` 引用 `my-image.jpg`。
- 以上方法可以随意组合，比如：`../subdirectory/another-subdirectory/my-image.jpg`。

这是你目前需要知道的全部内容。

> **备注：** Windows 的文件系统使用反斜杠而不是正斜杠，例如：`C:\Windows`。这在 HTML 中并不重要——即使你在 Windows 系统上进行开发，你也应该在代码中使用正斜杠。

## 还应该做些什么？

现在你的文件夹结构应该看起来像这样：

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

## 本章目录

- [安装基础软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [你的网站会是什么样？](/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [处理文件](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML 基础](/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS 基础](/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript 基础](/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [发布你的网站](/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [万维网是如何工作的](/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
