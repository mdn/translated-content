---
title: 应该如何使用 Github Pages?
slug: Learn/Common_questions/Tools_and_setup/Using_GitHub_pages
---

[GitHub](https://github.com/)是一个“公共编码”网站。它允许你上传代码存储库并存储在 [Git](http://git-scm.com/) 版本控制系统上。然后，你可以在代码项目上进行协作，默认情况下系统是开源的，这意味着世界上任何人都可以找到你的 GitHub 代码，使用它，从中学习，并改进它。同样的，对于其他人的代码你也可以这么做！本文提供了一个基本的指南，即使用 Github 的 gh-pages 功能发布内容。

## 发布内容

GitHub 是一个非常重要和有用的社区，值得参与其中，Git / GitHub 也是一个非常受欢迎的[版本控制系统](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) - 现在大多数科技公司在其工作流程中使用它。GitHub 有一个非常有用的功能，称为[GitHub Pages](https://pages.github.com/)，它允许你在 Web 上实时发布网站代码。

### 基本 Github 设置

1. 首先，在你的机器上[安装 Git](http://git-scm.com/downloads)。这是 GitHub 工作的底层版本控制系统软件。
2. 接下来，[注册一个 GitHub 帐户](https://github.com/join)。这很简单易操作。
3. 注册后，用你的用户名和密码登录[github.com](https://github.com/)。

### 准备上传代码

你可以将任何你喜欢的代码存储在 Github 资源库中，但要使用 GitHub Pages 功能实现全面效果，你的代码应该被构造为典型的网站，例如主入口点是一个名为 index.html 的 HTML 文件。

第一步，你需要做的另一件事是将你的代码目录初始化为 Git 存储库。按照下述步骤：

1. 将命令行指向你的 test-site 目录（或者任何一个你能调用的包含有你的网站的目录）。为此，请使用 cd 命令（即“更改目录”）。如果你已经将你的网站放到了位于桌面上的 test-site 目录中，则可以输入以下内容：

   ```bash
   cd Desktop/test-site
   ```

2. 当命令行指向你的网站所在目录时，键入以下命令，该命令告诉 git 工具将目录转换为 git 仓库：

   ```bash
   git init
   ```

#### 命令行界面

将代码上传到 Github 的最佳方法是通过命令行 - 这是一个窗口，你可以在其中输入命令来执行诸如创建文件和运行程序等操作，而不是在用户界面内单击。它看起来像这样：

![](command-line.png)

> **备注：** 你也可以考虑使用[Git 图形用户界面](http://git-scm.com/downloads/guis)来执行相同的工作，如果你不熟悉命令行。

每个操作系统都附带有一个命令行工具：

- **Windows**: 可以通过按 Windows 键，键入**命令提示符**，并从出现的列表中选择命令提示符。请注意，Windows 具有与 Linux 和 OS X 不同的命令约定，因此以下命令可能因你的机器而异。
- **OS X**: **终端**可以在应用程序>实用程序中找到。
- **Linux**: 通常你可以用 Ctrl + Alt + T 启动一个终端。如果不行，请在应用程序栏或菜单中查找**Terminal**。

起初这可能看起来有点吓人，但不要担心 - 你很快就会得到基本的窍门。你可以通过键入命令并按 Enter 键来告诉计算机在终端中执行某些操作，如上所示。

### 为你的代码创建一个仓库

1. 接下来，你需要为你的文件创建一个新的仓库。单击 GitHub 主页右上角的加号（+），然后选择“_New Repository_”。
2. 在此页面的“_Repository name_”框中，为你的代码库起一个名字，例如：_my-repository_。
3. 还要填写一个描述来说明你的存储库将包含哪些内容。你的屏幕应该是这样的
   ![](create-new-repo.png)
4. 单击*Create repository*;你将会看到如下页面：
   ![](github-repo.png)

### 将你的文件上传到 GitHub

1. 在当前页面上，你可能对本节的这部分感兴趣“**_…or push an existing repository from the command line_**（或者从命令行推送一个现有存储库）”。你应该看到本节中列出的两行代码。复制整个第一行，将其粘贴到命令行中，然后按 Enter 键。命令应该看起来像是这样的：

   ```bash
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. 接下来，键入以下两个命令，每个命令之后按 Enter。这些指令将会把代码上传到 GitHub，并要求 Git 管理这些文件。

   ```bash
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. 最后，将代码推送到 GitHub，通过你正在访问的 GitHub 网页，然后输入我们看到的两个命令中的第二个命令“ **…or push an existing repository from the command line**（或从命令行部分推入现有存储库）部分”：

   ```bash
   git push -u origin master
   ```

4. 现在你需要为你的仓库开启 GitHub pages 分支。为此，其在仓库的主页中选择 _Settings_，然后从左侧的侧边栏中选择 _Pages_。在 _Source_ 下选择“main”分支。页面应该会自动刷新。
5. 重新回到 _GitHub Pages_ 部分，你应该会看到形式为“Your site is ready to be published at `https://xxxxxx`.”的一行内容。
6. 如果你点击这个 URL，你应该会跳转到你的示例的实时演示版本，提供的主页名为 `index.html`——这是默认的入口点。如果你的网站的入口点不是这个，例如 `myPage.html`，你需要访问 `https://xxxxxx/myPage.html`。

### 更多的 GitHub 知识

如果你想对 test-site 进行更多更改并将其上传到 GitHub，那么你只需像以前一样对文件进行更改。然后，你需要输入以下命令（在每个之后按 Enter 键）将这些更改推送到 GitHub：

```bash
git add --all
git commit -m 'another commit'
git push
```

你可以使用更合适的消息替换上一次的提交信息，以描述你刚刚做出的更改。

我们仅仅提供了 Git 的浅显基本的信息。要了解更多信息，请先从 [GitHub 帮助站点](https://help.github.com/index.html)开始。
