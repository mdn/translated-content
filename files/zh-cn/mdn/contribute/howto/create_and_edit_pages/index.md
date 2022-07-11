---
title: 如何创建及编辑页面
slug: MDN/Contribute/Howto/Create_and_edit_pages
tags:
  - 指南
  - 新手
  - 简介
translation_of: MDN/Contribute/Howto/Create_and_edit_pages
---
## 测试页面

[需要帮助？](/zh-CN/docs/MDN/Community) • [编者指南](/zh-CN/docs/MDN/Contribute/Editor) • [风格指南](/zh-CN/docs/MDN/Contribute/Content/Style_guide)

如何编辑一个页面:

1.  登陆 MDN Web Docs 账号，若未注册请注册。
2.  如果你在只读版本的 MDN Web Docs（https\://developer.mozilla.org），点击点击页面右上角的 **Edit in wiki（在 wiki 编辑）**按钮。这将带你进入可编辑的，wiki 版本的网页（https\://wiki.developer.mozilla.org），但是这并没有真正地打开可编辑的界面。
3.  请点击 wiki 页面文章标题旁的 **编辑** 按钮**。**
4.  页面会重新加载具有规定格式的编辑页面，你可以直接在页面上新增或者删除内容。
5.  你可以新增段落，删除文本，插入标题，并且执行更多涉及编写和编辑的功能。

通过查看[MDN Editor guide](/en-US/docs/MDN/Contribute/Editor)里的[Editor UI elements](/en-US/docs/MDN/Contribute/Editor/Basics)获得更多关于 MDN 内置编辑器的信息。

### 预览修改

查看你修改的内容：

- 点击文章标题上方的"**Preview**"（**预览**）按钮（在编辑模式下）。
- 这会在新窗口或新标签页中打开一个修改过的预览页。
- 每次点击按钮，预览页都会刷新到最新的状态。

注意！预览页面并**不会**保存你的修改内容，所以你在关闭编辑的页面前必须保存你的修改。

### 版本注释

当预览修改之后，你需要保存你的修改版本。在**保存**之前，查看页面文章下方的版本注释栏，留下一些注释信息来告诉其它贡献者你为什么要去修改它。例如，你可能新增加了一个章节，或修改了一些文字来使得术语表述的更加一致，亦或重构了一个段落使其语言更加易于理解，或者就是删除了一些冗余信息。

### 目录

一篇文章的“在本文中”部分是自动生成的页面上标题的链接列表。这些链接的措词可以通过编辑标题进行编辑。也可以通过选择“编辑页面标题和属性”和改变“TOC”下拉列表的值，从而删除目录，或减少链接数量。

### 标签

你可以新增或删除编辑区域下面的一些描述页面内容或者功能的标签。查看 [如何正确标记页面](/en-US/docs/MDN/Contribute/Tagging) 来了解如何为页面添加合适的标签。

### 需要复核？

保存之前，为了确保信息的准确性，你可以勾选技术复核（针对代码，API，或技术），编辑复核（针对文章，语法，和内容），或模板复核（针对 KumaScript code）的选择框，来让专家或有经验的贡献者复核你的编辑信息。

### 附件

如果你想**附加某个文件**到一个现有的页面中来添加插图或作进一步说明的话，你可以在页面底部输入。当你上传图片时，请确保使用图片优化工具进行优化，以便我们的图片足够小，方便下载。这样便提高了页面加载速度，提升 MDN 的整体性能。有可能有你钟爱的工具，如果没有的话，我们推荐一款容易上手的 Web 工具：[TinyPNG](https://tinypng.com/)。

### 保存，放弃更改，继续编辑

当你完成编辑，并确认过预览界面，你可以点击标题右边或者文章底部的的绿色按钮**“发布修改”**来发布你的文章和注释。如果你想要继续编辑，可以选择点击按钮**“发布并继续编辑”**来保证在保存编辑的同时不离开编辑模式。

如果你改变主意，你也可以点击页面右侧的红色按钮**“放弃”**来放弃你的编辑，注意放弃更改是不可撤销返回的。

在版本注释区域点击 **Enter 键**和点击按钮**“发布并继续编辑”**具有相同的效果。

> **备注：** 当你尝试保存你编辑好的页面时发现你的编辑被视为无效操作而被拒绝了，若你编辑好的内容又确实是适合 MDN 的，此时你可以向[MDN 管理团队](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/mdn-admins@mozilla.com)发送邮件来获得帮助。

## 获取新建页面的许可

出于对安全的考虑，最近创建的 MDN 账号是没有权限新建页面的。如果你尝试这样做，你将看到一个页面引导你如何创建新页面。有以下两种可选的方式：

- **请别人帮你创建。**为此，请您提供一份[用于提出 bug 的申请书](https://bugzilla.mozilla.org/enter_bug.cgi?bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&contenttypemethod=autodetect&contenttypeselection=text%2Fplain&flag_type-4=X&flag_type-607=X&flag_type-800=X&flag_type-803=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Developer%20Documentation&rep_platform=Unspecified&short_desc=Create%20page%3A%20&status_whiteboard=create-page&target_milestone=---&version=unspecified)，并且以 "Create page: <页面标题>" 为主题。如果您知道该页面应该放在 MDN 中的什么位置，请确保填写好一个 URL 来描述该位置。您还应该注明您为何需要创建该页面。
- **申请页面创建权限。**如果您申请了页面创建权限且得到了授权，您将可以根据下述的指南自行创建新页面。为了请求该权限，请您将申请书通过电子邮件[发送给 MDN 管理团队](mailto:mdn-admins@mozilla.org)。请确保申请书的内容涵盖了您的用户名，以及为什么您有能力创建一个新页面（比方说：您正在编制一份新的 API 文档，该文档涉及许多新页面，又或者您想添加一些新条目到术语表）。您还应该曾经为该网站的内容作出过许多有益贡献，并且成为贡献者应该已经有一段时日了（至于这段时日有多久，这并没有一个固定期限，因为还需要同时考虑其他的因素）。

## 新建一个页面

当你拥有创建新页面的权限之后，你就可以开始创建页面了。

找不到在哪里新建一个页面？**别担心！**你可以在任何地方新建一个页面，我们会找到它并把它归档或者合并到最合适的类别下。你也不用过多担心它不够完美，我们有热心的志愿者来帮你打理，让你的文章保持干净美观。

下面是一些新建页面的方法：

- [已有网页上的“缺失页面”链接](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/1425373#Missing_page_link)
- [不需要链接的新页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/1425373#New_page_without_link)
- [在现有页面下新增子页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/1425373#Subpage_of_an_existing_page)
- [克隆已存在的页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/1425373#Clone_of_an_existing_page)
- [从已存在页面创建链接](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$revision/1425373#Link_from_an_existing_page)

### “缺失页面”链接

和许多维基站点一样，在 MDN 也有可能创建一个链接，它指向一个尚不存在的页面。例如：一个作者可能创建了一个清单页面，该页面涵盖了某个 API 的所有成员，而这些成员对应的页面还没创建好。在 MDN，指向到缺失页面的链接通常显示为红色。

从“缺失页面”链接创建对应的页面需要：

1.  确认已登录进 MDN，并且拥有新建页面的权限。（若未登录就点击“缺失页面”链接，会得到一个 404（找不到页面）的错误。）
2.  点击“缺失页面”链接。如果你拥有页面创建权限，[MDN 编辑器界面](/en-US/docs/MDN/Contribute/Editor)会自动打开，准备好让你创建缺失的页面。
3.  编写页面内容，然后保存。

### 不需要链接的新页面

想要创建一个没有链接到其他页面的新页面时，你需要在你的浏览器中键入一个包含新页面名字段的 URL。例如，如果你键入以下 URL 并回车：

    https://developer.mozilla.org/en-US/docs/FooBar

MDN 将创建一个标题为“FooBar”的新页面并且打开编辑器让你能够为新添加的页面添加内容。请参考本文中[编辑一个已存在的页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$edit#Editing_an_existing_page)的小节来学习如何使用编辑器模式。

要创建一个没有链接到其他页面的新页面需要：

1.  确保您已经登陆 MDN，并且拥有创建新页面的权限。
2.  在您的浏览器中输入以下 URL 并回车。

<!---->

    https://developer.mozilla.org/en-US/docs/new

此时，MDN 创建新页面时有一个地方专门用来填写标题，打开编辑器后您就可以添加内容到这个新页面。请参考本文中[编辑一个已存在的页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$edit#Editing_an_existing_page)的小节来学习如何使用编辑器模式。

### 已存在页面的子页面

在页面层次结构中的现有页面以下创建页面，需要：

1.  在“父”页面，点击**高级**菜单（工具栏中的齿轮按钮），然后点击“**新建子页面**”。
2.  打开编辑器视图以创建新文档。
3.  在标题栏键入文档**标题**。
4.  需要的话，更改 **Slug** 字段（例如，若标题太长而你又想用较短的 URL）。该字段由编辑器自动填充，替换掉标题处的空白下划线并且只更改文档对应的 URL 的最后一部分。
5.  在 **TOC** 字段，选择你想自动显示在页面目录中的标题级别，或者如果一个都不需要的话可以选择”无目录“。
6.  在编辑框中编写页面内容，然后保存您的修改。请参考本文中[编辑一个已存在页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$edit#Editing_an_existing_page)的小节来学习如何使用编辑器模式。

### 克隆一个已存在的页面

如果你想应用一个已经存在的页面的版式，你可以“克隆”这个页面并且修改其内容。

1.  在原页面中，点击**高级**菜单（工具栏中的齿轮按钮），然后点击“**克隆此文章**”，一个编辑器视图就会被打开来创建新文档。
2.  更换一个合适的标题，当你在更改**标题**时，**Slug** 字段会自动更新。
3.  如果需要，更改 **Slug** 字段部分的路径，然后把新的文档放入文件夹的另一处（在大多数情况下这是没有必要的，因为克隆的页面与原始页面拥有相似的内容，因此克隆的页面应该与原始页面安排在相近的位置）。
4.  在**TOC**字段中，选择你想让其显示在目录中的标题等级，或者选择“没有目录（No table of contents）”如果页面不需要的话。
5.  在编辑面板输入页面的内容并保存您的修改。请参考本文中[编辑一个已存在页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$edit#Editing_an_existing_page)的小节来学习如何使用编辑器模式。

### 从现有页面链接到新页面

你可以在一个现有页面创建一个链接，然后点击这个链接来创建一个新页面：

1.  在现有页面上任意但合理的位置输入新页面的名字
2.  将名字设置为高亮显示并在编辑工具栏点击**链接图标[![](https://developer.mozilla.org/files/3810/link-icon.png)](/files/3810/link-icon.png)**（也可能是简洁的锁链状）。“**更新链接**”对话框打开，高亮的文字会被显示在“**链接文本**”框中。
3.  "/en-US/docs/" 会被默认添加到 URL 的开头。在 "/en-US/docs/" 后输入此页面的名字。当然，链接文字和新页面的标题也可以不一样。
4.  点击“确认”来创建和插入这个链接。

如果这个页面不存在，这个链接将会用红色显示。如果这个页面存在，这个链接将会用蓝色显示。如果你想创建一个新的页面，但是你想创建页面的标题被占用了，请考虑是否更应该去编辑和改进这个已经存在的页面。如果您认为创建一个新页面更有必要，可以选择一个不同的标题并创建它。请参考[页面命名指南](/Project:cn/Page_Naming_Guide)获得指导。

为了给您新建的页面添加内容，点击您刚刚创建的红色的链接（在保存并且关闭编辑器之后）。新的页面将进入编辑模式使您能够开始编写内容，请参考本文中[编辑一个已存在的页面](/zh-CN/docs/MDN/Contribute/Howto/Create_and_edit_pages$edit#Editing_an_existing_page)的小节来学习如何使用编辑器模式。

## 刷新页面内容

由于性能上原因，MDN 对 KumaScript 宏指令和将一个页面嵌入另一个页面中的支持有时候会稍微被页面缓存所妨碍。页面由它们的数据源编译，并且输出会被缓存起来用来将来的页面请求。从那时起，在该页面的任何宏指令（模板）或者嵌入（使用宏[`Page`](/en-US/docs/Template:Page) ）将不会展现由于宏，宏的输出，或者嵌入的原本内容所引起的变化。

- 当想要手动刷新一个页面时，您可以在浏览器中强制刷新。MDN 能够识别这个动作并且触发一个页面的重新编译，拉取一个更新过的宏输出并且传输页面内容。
- 您也可以配置页面定期的自动重新编译。除非您期望页面需要经常性的更新，否则不应这样做。参考[页面重新生成](/Project:cn/Page_Regeneration)获取更多信息。

## 更多参考

- [MDN 编辑器指南](/en-US/docs/MDN/Contribute/Editor)
- [MDN 编辑风格指南](/en-US/docs/MDN/Contribute/Content/Style_guide)
