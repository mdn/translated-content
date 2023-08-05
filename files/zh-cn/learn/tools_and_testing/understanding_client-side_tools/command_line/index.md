---
title: 命令行速成课
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

在您的开发过程中，您无疑需要在终端上运行一些命令 (或者在“命令行”上，它们实际上是相同的)。本文介绍了终端、需要输入的基本命令、如何将命令链接在一起，以及如何添加自己的命令行接口 (CLI) 工具。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
        <a href="/zh-CN/docs/Learn/CSS">CSS</a>, 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        要了解什么是终端/命令行，应该学习什么基本命令，以及如何安装新的命令行工具。
      </td>
    </tr>
  </tbody>
</table>

## 欢迎使用终端

终端是一个文本界面，用于执行基于文本的程序。如果您正在运行任何用于 web 开发的工具，那么几乎可以保证您必须打开命令行并运行一些命令来使用您所选择的工具 (您经常会看到这样的工具被称为**CLI 工具**命令行接口工具)。

大量的工具可以通过在命令行中输入命令来使用;许多是预先安装在您的系统上的，还有大量其他的可以从包注册表中安装。包注册表类似于应用程序商店，但 (主要) 用于基于命令行的工具和软件。我们将在本章后面看到如何安装一些工具，在下一章我们将学习更多关于包注册表的知识。

对命令行最大的一个批评是它在用户体验方面非常缺乏。第一次查看命令行可能是一种令人畏惧的体验：空白屏幕和闪烁的光标，对于要做什么几乎没有明显的帮助。

表面上看，它们并不受欢迎，但您可以使用它们做很多事情，我们保证，通过一些指导和练习，使用它们会变得更容易！这就是为什么我们提供这一章来帮助你在这个看似不友好的环境中开始。

### 终端从何而来？

终端机起源于 20 世纪五六十年代，它最初的形式与我们今天使用的并不相似 (这是我们应该感谢的)。你可以在维基百科的词条中读到一些历史 [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal)。

从那时起，终端一直是所有操作系统的一个不变的特征，从台式电脑到隐藏在云中的服务器 (它并不是真正的云)，到像树莓 PI Zero 这样的微型计算机，甚至到移动电话。它提供了对计算机底层文件系统和底层特性的直接访问，因此，如果您知道自己在做什么，它对于快速执行复杂任务非常有用。

例如，编写一个命令来立即更新数百个文件的标题，例如从 ch01-xxxx.png 更新到 ch02-xxxx.png，这对于自动化也很有用。如果您使用 finder 或 explorer GUI 应用程序更新文件名，这将花费您很长时间。

总而言之，终端不会很快消失。

### 终端像什么呢？

下面你可以看到一些不同口味的程序，你可以得到一个终端。

下面的图片显示了 Windows 中可用的命令提示，有很多种选项，从“cmd”程序到“powershell”，可以在开始菜单中输入程序名称运行。

![A vanilla windows cmd line window, and a windows powershell window](win-terminals.png)

下面是 macOS 终端应用程序。

![A basic vanilla mac terminal](mac-terminal.png)

### 你如何进入终端？

现在许多开发人员都在使用基于 unix 的工具 (例如，终端，以及你可以通过它访问的工具)。目前 web 上存在的许多教程和工具都支持 (可悲的是假定) 基于 unix 的系统，但不用担心它们在大多数系统上都可用。在本节中，我们将了解如何访问所选系统上的终端。

#### Linux/Unix

如上所述，Linux / Unix 系统默认情况下在应用程序中列出了一个可用的终端。

#### macOS

macOS 有一个名为 Darwin 的系统，它位于图形用户界面的下方。Darwin 是类 unix 系统，它提供了终端和对底层工具的访问。macOS Darwin 在很大程度上与 Unix 不相上下，当然在阅读本文时不会给我们带来任何担忧。

终端可在 macOS 的“应用程序/实用程序/终端”上使用。

#### Windows

与其他一些编程工具一样，在 Windows 上使用终端 (或命令行) 传统上并不像在其他操作系统上那样简单。但情况正在好转。

很长一段时间以来，Windows 一直有自己的名为 cmd(命令提示符) 的类似于终端的程序，但这显然与 Unix 命令不同，它相当于老式的 Windows DOS 提示符。

更好的程序可以在 Windows 上提供终端体验，比如 Powershell ([see here to find installers](https://github.com/PowerShell/PowerShell)), 和 Gitbash (作为一部分 [git for Windows](https://gitforwindows.org/) 工具箱)

然而，在现代，Windows 的最佳选择是 Windows Linux 子系统 (WSL)，它是一个兼容层，用于从 Windows 10 中直接运行 Linux 操作系统，允许您直接在 Windows 上运行真正的终端，而不需要虚拟机。

这可以直接从 Windows 商店免费安装。在目录中可以找到所需的所有文档 [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl).

![a screenshot of the windows subsystem for linux documentation](wsl.png)

至于在 Windows 上选择什么选项，我们强烈建议尝试安装 WSL。您可以坚持使用默认的命令提示符 (cmd)，许多工具都可以正常工作，但是您会发现，如果与 Unix 工具具有更好的一致性，那么一切都会变得更容易。

#### 边注：命令行和终端的区别是什么？

通常你会发现这两个术语可以互换使用。从技术上讲，终端是启动并连接到 shell 的软件。shell 是您的会话和会话环境 (提示符和快捷方式等内容可以在其中定制)。命令行是您输入命令并且光标闪烁的文字行。

### 你*必须*使用终端吗

尽管命令行提供了大量的工具，但是如果您使用的工具是这样像 [Visual Studio Code](https://code.visualstudio.com/)

还有大量的扩展可以作为代理使用终端命令，而不需要直接使用终端。但是，您不会找到一个代码编辑器扩展来满足您想要做的所有事情 — 你最终将会获得一些使用终端的经验。

## 基本的内置终端命令

说的够多了，让我们开始看看一些终端命令吧！下面是命令行可以做的一些事情，以及每种情况下相关工具的名称

- 导航计算机的文件系统以及基本级别的任务，如创建、复制、重命名和删除：

  - 移动您的目录结构 : `cd`
  - 建立目录：`mkdir`
  - 创建文件（修改他们的原数据）: `touch`
  - 复制文件：`cp`
  - 移动文件：`mv`
  - 删除文件或目录：`rm`

- 下载在特定的 url 找到的文件：`curl`
- 在较大的文件体中寻找特定的片段：`grep`
- 主页查看文件的内容：`less`, `cat`
- 操作和转换文本流（例如，将 HTML 文件中 `<div>` 的所有实例改为 `<article>`）：`awk`、`tr`、`sed`

> **备注：** 在 web 上有许多很好的教程深入了解 web 上的命令行——这只是一个简短的介绍

让我们继续，看看在命令行上使用这些工具中的几个。在进一步操作之前，先打开终端程序

### 在命令行中导航

当您访问命令行时，您将不可避免地需要导航到一个特定的目录“做一些事情”。所有的操作系统 (假设是默认设置) 都将在您的“home”目录中启动它们的终端程序，从那里您可能想要移动到另一个地方。

`cd` 命令允许您更改目录。从技术上讲，cd 不是一个程序，而是内置的。这意味着您的操作系统可以开箱即用地提供它，而且您也不会意外地删除它，感谢上帝！您不需要过多地担心某个命令是否是内置的，但是要记住，内置的命令会在所有基于 unix 的系统上出现。

要更改目录，请在终端中键入 cd，然后输入要移动到的目录。假设该目录在您的主目录中，您可以使用 `cd Desktop` (请参见下面的屏幕截图).

![results of the cd Desktop command being run in a variety of windows terminals - the terminal location moves into the desktop](win-terminals-cd.png)

试着把这个输入到你的系统终端

```bash
cd Desktop
```

如果您想回到上一个目录，您可以使用两个点

```bash
cd ..
```

> **备注：** 一个非常有用的终端快捷方式是使用<kbd>tab</kbd> 键自动完成你知道的名字，而不是必须键入整个东西。例如，在键入以上两个命令后，尝试键入 `cd D` 并按下<kbd>tab</kbd> — 它应该自动完成目录名称 `Desktop` 对于您，只要它存在于当前目录中。在你前进的过程中记住这一点。

如果要转到的目录嵌套得很深，则需要知道访问该目录的路径。当您更加熟悉文件系统的结构时，这通常会变得更容易，但是如果您不确定路径，通常可以使用 ls 命令（请参见下文）的组合并在其中单击来确定它的路径。 “资源管理器/查找器”窗口可查看目录相对于当前位置的位置。

例如，如果您想进入一个名为 src 的目录，该目录位于桌面的一个名为 project 的目录中，您可以从您的主文件夹键入这三个命令来到达该目录

```bash
cd Desktop
cd project
cd src
```

但这只是浪费时间，相反，您可以键入一个命令，用斜杠分隔路径中的不同项，就像在 CSS、HTML 或 JavaScript 代码中指定图像或其他资产的路径一样

```bash
cd Desktop/project/src
```

例如，请注意，在路径上包含一个前斜线将使路径成为绝对路径 `/Users/your-user-name/Desktop`. 像我们上面做的那样，省略前导斜杠可以使路径相对于当前的工作目录。这与您在 web 浏览器中看到的 url 完全相同。前面的斜杠意味着“在网站的根”，而省略斜杠意味着“这个 URL 是相对于我当前页面的”。

> **备注：** 在 windows 中，你使用反斜杠而不是正斜杠。`cd Desktop\project\src` — 他的可能看起来很奇怪，但是如果你感兴趣的话，[watch this YouTube clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) 微软的一位主要工程师对此进行了解释。

### 列出目录内容

另一个内置的 Unix 命令是 ls (list 的缩写)，它列出当前所在目录的内容。注意，这不会工作，如果你使用默认的 Windows 命令提示符 (cmd)，相当于 dir。

现在试着在终端上运行它

```bash
ls
```

这提供了当前工作目录中的文件和目录的列表，但这些信息实际上很基本，您只能得到每个项的名称，而不能知道它是文件还是目录，或者其他任何东西。幸运的是，对命令的用法进行一个小小的更改就可以提供更多的信息。

### 介绍命令选项

大多数终端命令都有选项，这些选项是您添加到命令末尾的修饰符，它们使命令的行为略有不同。它们通常由命令名后的空格、后接破折号、后接一个或多个字母组成。

例如，试一试看，你能得到什么？

```bash
ls -l
```

至于 `ls`, the `-l` 选项为您提供每行一个文件或目录的清单，并显示更多信息。可以通过查找行最左边的字母“d”来识别目录。这些是我们可以做到的 `cd` 进入。

下面是一个屏幕截图，顶部是一个普通的 macOS 终端，还有一个定制的终端，添加了一些额外的图标和颜色，让它看起来生动，都显示了运行的结果`ls -l`:

![A vanilla mac terminal and a more colorful custom mac terminal, showing a file listing - the result of running the ls -l command](mac-terminals-ls.png)

> **备注：** 要确切地了解每个命令有哪些可用选项，您可以查看它[man page](https://en.wikipedia.org/wiki/Man_page). 通过键入 `man` 命令，后跟要查找的命令的名称，例如`man ls`. 这将在终端的默认文本文件查看器中打开手册页 (例如，[`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>)(在我的终端中)，然后您应该能够使用箭头键或其他类似的机制在页面中滚动。手册页详细地列出了所有选项，一开始可能有点吓人，但至少在需要时您知道它就在那里。一旦您完成了对手册页的查看，您需要使用文本查看器的 quit 命令退出它 ("q" 在 `less`;如果不明显，你可能需要在网上搜索才能找到).

> **备注：** 要同时运行具有多个选项的命令，通常可以将它们全部放在破折号后面的单个字符串中`ls -lah`, 或`ls -ltrh`.尝试在 `ls` 了解这些额外选项的作用

既然我们已经讨论了两个基本命令，那么稍微浏览一下您的目录，看看是否可以从一个位置导航到下一个位置。

### 创建、复制、移动、删除

在使用终端时，您可能会经常使用其他一些基本实用程序命令。它们非常简单，所以我们不会像前一对那样详细地解释它们。

在您创建的某个地方的测试目录中使用它们，这样您就不会意外地删除任何重要的内容，使用下面的示例命令作为指导

- `mkdir`——这将在用户所在的当前目录中创建一个新目录，名称是在命令名之后提供的。例如 `mkdir my-awesome-website` 将创建一个新目录叫 `my-awesome-website`。
- `rmdir`——删除指定目录，但仅当它为空时。例如 `rmdir my-awesome-website` 将删除我们在上面创建的目录。如果你希望删除一个非空的目录（并删除其中包含的所有内容），则可以使用 `-r` 选项（递归），但这很危险。确保以后在目录中不需要任何内容，因为它将永远消失。
- `touch`——在当前目录中创建一个新的空文件。例如`touch mdn-example.md` 创建一个新的空文件叫做 `mdn-example.md`.
- `mv`——将文件从第一个指定的文件位置移动到第二个指定的文件位置。例如，将文件从第一个指定的文件位置移动到第二个指定的文件位置 `mdn-example.md mdn-example.txt`（这些位置被写成文件路径）。此命令将当前目录中名为 `mdn-example.md` 的文件移动到当前目录中名为 `mdn-example.txt` 的文件。从技术上讲，文件正在被移动，但是从实际的角度来看，这个命令实际上是在重命名文件。
- `cp`——类似于 `mv`, `cp`在指定的第一个位置和第二个位置创建文件的副本。例如 `cp mdn-example.txt mdn-example.txt.bak` 创建一个副本 `mdn-example.txt` 叫做 `mdn-example.txt.bak`（当然，如果你愿意，你也可以叫它别的名字）。
- `rm`——删除指定的文件。例如，`rm mdn-example.txt` 删除单个文件叫做 `mdn-example.txt`。请注意，此删除是永久性的，不能通过桌面用户界面上的回收站撤消。

> **备注：** 许多终端命令允许你使用星号作为“通配符”字符，意思是“任何字符序列”。这允许你一次对可能大量的文件运行操作，所有这些文件都匹配指定的模式。例如，`rm mdn-*` 将删除所有以 `mdn-` 开头的文件。`rm mdn-*.bak` 会删除所有以 `mdn-` 开头，以 `.bak` 结束的文件。

## 考虑终端有害吗？

我们之前提到过这一点，但为了明确起见，您需要小心使用终端。简单的命令不会带来太多危险，但是当您开始将更复杂的命令组合在一起时，您需要仔细考虑该命令将执行什么操作，并在最终在指定的目录中运行它们之前先尝试测试它们。假设您在一个目录中有 1000 个文本文件，您想遍历它们，并且只删除文件名中有特定子字符串的文件。如果不小心，可能会删除一些重要的内容，在此过程中丢失大量工作。

要养成的一个好习惯是在文本编辑器中编写您的 terminal 命令，弄清楚您认为它应该是什么样子，然后对目录进行备份，并首先尝试在该备份上运行命令，以测试它。

另一个好建议是，如果你不习惯在自己的机器上尝试终端命令，可以在 Glitch.com 上试试。除了是测试 web 开发代码的好地方外，这些项目还允许您访问终端，这样您就可以直接在该终端中运行所有这些命令，而且不会破坏您自己的机器。

![a double screenshot showing the glitch.com home page, and the glitch terminal emulator](glitch.png)

快速浏览特定终端命令的一个很好的资源是 [tldr.sh](https://tldr.sh/). 这是一个社区驱动的文档服务，类似于 MDN，但特定于终端命令。

在下一节中，让我们更进一步 (实际上是几个层次)，看看如何在命令行上将工具连接在一起，从而真正了解终端如何优于常规的桌面用户界面。

## 与管道命令连接在一起

当您开始使用。将命令链接在一起时，终端才真正成为自己的终端 `|` (pipe) 的象征。让我们看一个简单的例子来说明这意味着什么。

我们已经看了 `ls`, 它可以输出文件目录：

```bash
ls
```

但是如果我们想要快速计算当前目录中的文件和目录的数量会怎样呢`ls` 不能单独运行

还有另一个可用的 Unix 工具，称为`wc`. 它计算输入到其中的单词、行、字符或字节的数量。这可以是一个文本文件，下面的示例输出其中的行数

`myfile.txt`:

```bash
wc -l myfile.txt
```

但是它还可以计算输入到它的输出的行数。例如，下面的命令计算 ls 命令输出的行数 (如果单独运行，它通常会打印到终端)，并计算到终端的输出

```bash
ls | wc -l
```

因为 `ls` 在自己的行上打印每个文件或目录，这有效地为我们提供了目录和文件计数。

这是怎么回事？(unix) 命令行工具的一般原理是，它们将文本打印到终端 (也称为“打印到标准输出”或`STDOUT`). 很多命令也可以从流输入 (称为“标准输入”o) 中读取内容 `STDIN`).

管道操作符可以将这些输入和输出连接在一起，允许我们构建越来越复杂的操作，以满足我们的需要。一个命令的输出可以成为下一个命令的输入。在这种情况下，`ls` 通常会将其输出到`STDOUT`, 但是相反 `ls`输出被制成`wc`, 它将该输出作为输入，计算它包含的行数，然后将该计数输出到 STDOUT。

## 一个稍微复杂一点的例子

让我们看一些更复杂的东西。我们将首先尝试获取 MDN 的“获取”页面的内容 `curl` 命令 (可用于从 url 请求内容)[https://developer.mozilla.org/en-US/docs/Web/API/fetch](/zh-CN/docs/Web/API/fetch).

但是，这个 URL 是页面的旧位置。如果您在一个新的浏览器标签中输入它，您将 (最终) 被重定向到[https://developer.mozilla.org/en-US/docs/Web/API/fetch](/zh-CN/docs/Web/API/fetch).

因此，如果您使用 curl 请求 `https://developer.mozilla.org/docs/Web/API/fetch`，则不会得到输出。现在就试试：

```bash
curl https://developer.mozilla.org/docs/Web/API/fetch
```

我们想精确的告诉 `curl` 遵循重定向使用`-L` 标签。

让我们也看看标题 `developer.mozilla.org` 返回使用 `curl`'s `-I` 标签，并打印它发送到终端的所有位置重定向，通过管道输出 `curl` 到`grep` (我们将要求 grep 返回包含单词“location”的所有行)。

尝试运行以下代码，您将看到在到达最终页面之前，实际上发生了三次重定向

```bash
curl https://developer.mozilla.org/docs/Web/API/fetch -L -I | grep location
```

输出应该是这样的 (`curl` 首先会输出一些下载计数器之类的东西):

```bash
location: /en-US/docs/Web/API/fetch
```

尽管有些做作，我们可以把这个结果做得更深入一点，并变换 `location:` 行内容，将基本的起点添加到每个起点的开始，这样我们就可以打印出完整的 url。为此，我们将在混合中添加 awk(它是一种类似于 JavaScript、Ruby 或 Python 的编程语言，只是要老得多 !)

尝试运行这个：

```bash
curl https://developer.mozilla.org/docs/Web/API/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

最终的输出应该是这样的

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
```

通过组合这些命令，我们定制了输出以显示完整的 url，当我们请求时，Mozilla 服务器将通过这些 url 重定向`/docs/Web/API/fetch` URL.了解您的系统将在未来几年证明是有用的，您将了解这些单一服务工具是如何工作的，以及它们如何成为您解决小众问题的工具库的一部分。

## 添加工具

现在我们已经了解了系统自带的一些内置命令，让我们看看如何安装和使用第三方 CLI 工具。

目前，用于前端 web 开发的可安装工具的巨大生态系统主要存在于内部 [npm](https://www.npmjs.com), 与 Node.js 紧密合作的私有的包托管服务。随着时间的推移，您可以期望看到更多的包提供者。

[Installing Node.js](https://nodejs.org/en/) 还要安装 npm 命令行工具 (以及一个以 npm 为中心的补充工具 npx)，它提供了安装其他命令行工具的网关。js 和 npm 在所有系统上都能工作:macOS、Windows 和 Linux。

现在在您的系统上安装 npm，转到上面的 URL，下载并运行适合您的操作系统的 Node.js 安装程序。如果出现提示，请确保将 npm 作为安装的一部分。

![the node.js installer on windows, showing the option to include npm](npm-install-option.png)

尽管我们将在下一篇文章中讨论许多不同的工具，但我们将继续深入研究 [Prettier](https://prettier.io/). Prettier 是一种固执己见的代码格式化程序，它只有“很少的选择”。更少的选择往往意味着更简单。考虑到工具在复杂性方面有时会失控，“很少的选项”可能非常有吸引力。

### 在哪里下载我们的 CLI 工具？

在开始安装 Prettier 之前，有一个问题需要回答：“我们应该安装到哪里？”

用`npm` 我们可以选择在全局安装工具，因此我们可以在任何地方或本地访问当前项目目录。

每种方式各有利弊 — 而这张全局安装的利弊清单还远远不够详尽：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><p>全局安装的优点</p></th>
      <th scope="col">全局安装的缺点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>任何地方在您的终端</p></td>
      <td>可能与您项目的代码库不兼容</td>
    </tr>
    <tr>
      <td>只下载一次</td>
      <td>
        <p>
          您团队中的其他开发人员无法使用这些工具，例如，如果您通过 git
          这样的工具共享代码仓库。
        </p>
      </td>
    </tr>
    <tr>
      <td><p>使用较少的磁盘空间</p></td>
      <td>
        <p>
          与前一点相关的是，它使得项目代码更难复制
          (如果您在本地安装工具，可以将它们设置为依赖项并使用 npm 进行安装
          (<code>npm install</code>).
        </p>
      </td>
    </tr>
    <tr>
      <td><p>总是相同的版本</p></td>
      <td></td>
    </tr>
    <tr>
      <td><p>就像任何其他 unix 命令</p></td>
      <td></td>
    </tr>
  </tbody>
</table>

尽管缺点清单比较短，但是全局安装的负面影响可能要比好处大得多。然而，现在我们宁可追求简单，而采用全局安装来保持简单。在下一篇文章中，我们将进一步了解本地安装以及它们的优点。

### 下载 Prettier

对于本文，我们将安装 Prettier 作为全局命令行实用程序。

Prettier 是一款专门为前端开发人员设计的代码格式化工具，专注于基于 javascript 的语言，并增加了对 HTML、CSS、SCSS、JSON 等的支持。Prettier 能够：

- 省去了在所有代码文件中手动保持样式一致的认知开销;Prettier 可以自动为您完成此操作。
- 帮助 Web 新手以最佳方式完成他们的代码。
- 安装在任何操作系统上，甚至直接作为项目工具的一部分，以确保从事您的代码工作的同事和朋友使用您正在使用的代码风格。
- 配置为在保存时运行、在键入时运行，甚至在发布代码之前运行 (使用稍后将在模块中看到的其他工具）。

安装 node 之后，打开终端并运行以下命令来安装 prettier 程序：

```bash
npm install --global prettier
```

命令运行完成后，Prettier 工具现在可以在终端中的文件系统中的任何位置使用。

与许多其他命令一样，不带任何参数运行该命令将提供用法和帮助信息。现在试试这个

```bash
prettier
```

输出应该是这样的

```bash
Usage: prettier [options] [file/dir/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

即使它很长，至少浏览一下使用信息也是值得的。它将帮助您更好地理解如何使用该工具。

### 尝试 Prettier

让我们快速演示一下 Prettier，这样您就可以看到它是如何工作的。

首先，在文件系统中容易找到的地方创建一个新目录。可能是一个叫做`prettier-test` 在你的 `Desktop`.

现在将以下代码保存在一个名为`index.js`, 在测试目录中：

```js
const myObj = {
  a: 1,
  b: { c: 2 },
};
function printMe(obj) {
  console.log(obj.b.c);
}
printMe(myObj);
```

我们可以在代码基上运行得更好，以检查我们的代码是否需要调整。cd 到您的目录中，并尝试运行此命令：

```bash
prettier --check index.js
```

你的产出应该是：

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

有些代码样式是可以修改的。没有问题。添加 `--write` option to the prettier 命令将修复这些问题，让我们专注于实际编写有用的代码。

现在尝试运行这个版本的命令：

```bash
prettier --write index.js
```

你可能得到这样的输出：

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

但更重要的是，如果你回头看你的 JavaScript 文件，你会发现它被重新格式化成这样：

```js
const myObj = {
  a: 1,
  b: { c: 2 },
};
function printMe(obj) {
  console.log(obj.b.c);
}
printMe(myObj);
```

根据您的工作流 (或您选择的工作流)，您可以将其作为流程的自动化部分。自动化确实是工具的优势所在;我们的个人偏好是那种无需配置任何东西就能“自动发生”的自动化。

使用 Prettier 有许多实现自动化的方法，尽管它们超出了本文的范围，但是有一些很好的在线资源可以提供帮助 (已经链接到其中一些)。您可以调用更漂亮的：

- 在将代码提交到 git 存储库之前，使用[Husky](https://github.com/typicode/husky).
- 当你在代码编辑器中点击“保存”的时候，无论是[VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Atom](https://atom.io/packages/prettier-atom), 或[Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- 作为持续集成检查的一部分，可以使用以下工具[Github Actions](https://github.com/features/actions).

我们个人的偏好是第二个当使用 say VS 代码时，Prettier 会启动并清理每次我们点击保存时需要做的格式化。关于以不同方式使用 Prettier，您可以在 [Prettier docs](https://prettier.io/docs/en/).

## 尝试其他的工具

如果你想尝试更多的工具，这里有一个简短的列表，很有趣的尝试：

- [`bat`](https://github.com/sharkdp/bat) — 一个更好的 `cat` (`cat` 用于打印文件内容）。
- [`prettyping`](http://denilson.sa.nom.br/prettyping/) — `ping`在命令行上，但是是可视化的 (ping 是检查服务器是否有响应的有用工具)。
- [`htop`](http://hisham.hm/htop/) —进程查看器，当某些东西使您的 CPU 风扇的行为像一个喷气发动机，并且您想要识别出错的程序时，它非常有用。
- [`tldr`](https://tldr.sh/#installation) —在本章前面提到的，但是可以作为命令行工具使用。

注意，上面的一些建议可能需要使用 npm 进行安装，就像我们使用 Prettier 所做的那样。

## 总结

这使我们结束了对终端/命令行的简短浏览。接下来，我们将更详细地介绍软件包管理器，以及如何使用它们。

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
