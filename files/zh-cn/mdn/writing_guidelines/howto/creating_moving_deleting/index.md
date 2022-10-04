---
title: 如何创建及编辑页面
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
original_slug: MDN/Contribute/Howto/Create_and_edit_pages
---

{{MDNSidebar}}

本文介绍了如何编辑现有页面或创建新页面以做出新的贡献。

## 编辑现有页面

要编辑页面，你需要在我们的 [content](https://github.com/mdn/content) 仓库（译者注：对于本地化页面，请访问 [translated-content](https://github.com/mdn/translated-content) 仓库）中找到页面源文件。找到它的最简单的方法是导航到要编辑的页面，转到页面的底部，然后点击链接“Source on GitHub”。

在找到要编辑的源文件后，请转到我们的 README，阅读 [Making contributions](https://github.com/mdn/content#making-contributions) 指南（译者注：对于本地化页面，请阅读 [translated-content 仓库上的 Making contributions](https://github.com/mdn/translated-content#making-contributions) 指南）。

### 预览更改

如果你在本地编辑页面，要预览更改的内容，请前往 content 仓库的文件夹，执行命令 `yarn start`，在浏览器中访问 `localhost:5042`，然后导航到修改的页面并进行查看。在搜索框输入标题能够帮助你快速的找到它。预览的页面会在你编辑源文件后在浏览器中实时更新。

### 标签

你可以添加或删除用于描述页面内容和功能的标签。参见[如何合理地标记页面](/zh-CN/docs/MDN/Contribute/Howto/Tag)，以了解如何为页面添加合适的标签。

### 附加文件

如果你想附加某个文件到一个现有的文章中，你只需要将其包含到与文章的 `index.md` 或 `index.html` 文件相同的目录中，然后将其包含到页面中（通常是通过一个链接）。

## 新建一个页面

要新建一个页面，请阅读[添加新文档](https://github.com/mdn/content#adding-a-new-document)的说明。

## 参见

- [MDN Web 文档写作规范](/zh-CN/docs/MDN/Guidelines/Writing_style_guide)
