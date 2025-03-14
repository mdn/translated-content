---
title: 如何创建、移动、删除及编辑页面
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
---

本文描述了创建、移动、删除及编辑页面的方法。在所有这些情况下，最好检查我们的 [MDN 收录规则](/zh-CN/docs/MDN/Writing_guidelines/What_we_write)页面的指导方针，以确认是否应该采取这些行动，并在采取进一步措施之前与 MDN Web 文档团队在 [MDN Web 文档聊天室](/zh-CN/docs/MDN/Community/Communication_channels#聊天室)进行讨论。

## 创建页面

MDN Web 文档的所有页面使用 Markdown 格式书写，所有的内容位于 `index.md` 名称的文件中，它们存储于属于自身的唯一目录中。目录名代表了页面的名称。例如，如果 `align-content` 是所要创建的新 CSS 属性参考页面，你需要在 `en-us/web/css` 下建立名为 `align-content` 的文件夹，并在其中创建 `index.md` 文件。

> [!NOTE]
> 目录的名称与页面的路径名有微小的差别。最主要的区别是，路径名是符合句式大小写规则的。

很多不同的[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)具有一定的结构和支持它们的页面模板，你可以复制这些模板来开始。

一个文档的 `index.md` 文件必须以 `title`、`slug` 和 `page-type` 的页面元数据（front matter）定义开始。所有这些页面元数据信息都可以在前面提到的页面模板中找到。另外，在类似文件的 `index.md` 中参考这些数据是有帮助的。

创建一个页面的一般步骤是：

1. 开启一个全新的、最新的分支。

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次运行“yarn”
   # 以确保安装了最新的 Yari 依赖
   yarn
   git checkout -b my-add
   ```

2. 创建新的文档所对应的文件夹，以及其中的 `index.md` 文件。

3. 添加并提交你的新文件，并将你的新分支推送到 fork 中。

   ```sh
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. 创建拉取请求。

## 移动页面

移动文档或文档树是很容易的，我们创建了一个特别的命令来为你处理一些细节：

```sh
yarn content move <from-slug> <to-slug> [locale]
```

只需指定你想移动的现有文件的标题（例如 `Learn/Accessibility`）以及它的新位置（例如 `Learn/A11y`），可以选择在后面加上现有文件的地区语言（默认为 `en-US`）。

如果你想移动的现有文档有子文档（即代表一个文档树），`yarn content move` 命令将移动整个文档树。

例如，假设你想把整个 `/en-US/Learn/Accessibility` 树移到 `/en-US/Learn/A11y`，你要执行以下步骤：

1. 从全新的分支开始。

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次运行“yarn”
   # 以确保安装了最新的 Yari 依赖
   yarn
   git checkout -b my-move
   ```

2. 执行移动操作（将删除和修改现有文件，并创建新文件）。

   ```sh
   yarn content move Learn/Accessibility Learn/A11y
   ```

3. 添加并提交所有删除的、创建的和修改的文件，并向你的 fork 分支推送更改。

   ```sh
   git commit -a
   git push -u origin my-move
   ```

4. 创建拉取请求。

> **备注：** `yarn content move` 会自动在 `_redirects.txt` 文件中添加必要的重定向信息，这样旧的位置会重定向到新的位置。不要手动编辑 `_redirects.txt` 文件！如果你这样做，很容易出现错误。如果你需要在不移动文件的情况下添加重定向，请在 [MDN Web 文档聊天室](/zh-CN/docs/MDN/Community/Communication_channels#聊天室) 上与 MDN Web 文档团队讨论。

## 删除页面

只有特定情况下才可以从 MDN Web 文档中删除文档。如果你正在考虑删除页面，请先与 MDN Web 文档团队在 [MDN Web 文档聊天室](/zh-CN/docs/MDN/Community/Communication_channels#聊天室)沟通。

删除文档或文档树是容易的，我们创建了一个特别的命令来为你处理一些细节：

```sh
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> 你需要使用 `yarn content delete` 命令来删除 MDN Web 文档的页面。不要只是从存储库中删除它们的目录。`yarn content delete` 命令还可以处理其他必要的变化，如更新 `_wikihistory.json` 文件。

只需指定你想删除的现有文件的标题（例如 `Learn/Accessibility`），可以选择在后面加上现有文件的地区语言（默认为 `en-US`）。

如果你想删除的现有文档有子文档（即代表一个文档树），必须指定 `-r, --recursive` 选项，否则命令会运行失败。

例如，假设你想删除整个 `/en-US/Learn/Accessibility` 树，需要进行如下步骤：

1. 从全新的分支开始。

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次运行“yarn”
   # 以确保安装了最新的 Yari 依赖
   yarn
   git checkout -b my-delete
   ```

2. 执行删除操作。

   ```sh
   yarn content delete Learn/Accessibility --recursive
   ```

3. 添加重定向。目标页面可以是外部 URL 或 MDN 文档上其他的页面。

   ```sh
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. 添加并提交所有删除的文件，并向你的 fork 分支推送你的更改。

   ```sh
   git commit -a
   git push -u origin my-delete
   ```

5. 创建拉取请求。

> [!NOTE]
> 如果你想要删除的页面路径名中包含特殊字符，将其包裹在引号内，像这样：
>
> ```sh
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

从 MDN Web 文档中删除内容将不可避免地导致对现有内容的更新。由于很多文章都会链接到其他文章，被删除的内容很可能会在其他地方被引用。添加重定向将减轻删除内容的影响；然而，最好的做法是编辑内容以反映变化，并将内容编辑与删除拉取请求一起列入。

## 编辑现有页面

要编辑页面，你需要在我们的 [content](https://github.com/mdn/content) 仓库（译者注：对于本地化页面，请访问 [translated-content](https://github.com/mdn/translated-content) 仓库）中找到页面源文件。找到它的最简单的方法是导航到要编辑的页面，转到页面的底部，然后点击“View the source on GitHub”链接。

### 预览更改

如果你在本地编辑页面，要预览更改的内容，请前往 content 仓库的文件夹，执行命令 `yarn start`，在浏览器中访问 `localhost:5042`，然后导航到修改的页面并进行查看。在搜索框输入标题能够帮助你快速的找到它。预览的页面会在你编辑源文件后在浏览器中实时更新。

### 附加文件

如果你想附加某个文件到文章中，只需要将其包含到与文章的 `index.md` 文件相同的目录中，然后将其包含到页面中（通常是通过 {{htmlelement("a")}} 元素）。
