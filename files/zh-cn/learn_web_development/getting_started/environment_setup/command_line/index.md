---
title: 命令行速成课
short-title: 命令行
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

在你的开发过程中，你无疑需要在终端上（或者在“命令行”上——它们实际上是相同的）运行一些命令。本文介绍了终端、需要输入的基本命令、如何将命令串联起来，以及如何添加自己的命令行界面（CLI）工具。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        对计算机操作系统、用于构建网站的基本软件以及文件系统有基本的了解。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>什么是命令行，以及它能做什么。</li>
          <li>了解如何在不同系统上访问命令行。</li>
          <li>掌握基本的键盘快捷键（例如，向上箭头键可查看上条命令，Tab 键可实现自动补全）。</li>
          <li>掌握基本命令（例如 <code>cd</code>、<code>ls</code>、<code>mkdir</code>、<code>touch</code>、<code>grep</code>、<code>cat</code>、<code>mv</code>、<code>cp</code>）。</li>
          <li>命令选项/标志。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 欢迎使用终端

终端是一个文本界面，用于执行基于文本的程序。如果你正在运行任何用于 web 开发的工具，那么几乎可以保证你必须打开命令行并运行一些命令来使用你所选择的工具（你经常会看到这样的工具被称为 **CLI 工具**——命令行界面工具）。

大量的工具可以通过在命令行中输入命令来使用；许多是预先安装在你的系统上的，还有大量其他的可以从包注册表中安装。包注册表类似于应用程序商店，但（主要）用于基于命令行的工具和软件。我们将在本章后面看到如何安装一些工具，在下一章我们将学习更多关于包注册表的知识。

对命令行最大的一个批评是它在用户体验方面非常缺乏。第一次查看命令行可能是一种令人畏惧的体验：空白屏幕和闪烁的光标，对于要做什么几乎没有明显的帮助。

表面上看，它们并不受欢迎，但你可以使用它们做很多事情，我们保证，通过一些指导和练习，使用它们会变得更容易！这就是为什么我们提供这一章来帮助你在这个看似不友好的环境中开始。

### 终端从哪里来？

终端起源于 20 世纪 50 至 60 年代左右，其最初的形态与我们今天使用的终端截然不同（为此我们应该心怀感激）。你可以在维基百科的[计算机终端](https://zh.wikipedia.org/wiki/終端)条目中了解一些相关历史。

从那时起，终端就一直是所有操作系统的标配——从台式机到隐藏在云端的服务器，再到树莓派 Zero 这样的微型计算机，甚至包括智能手机。它能够直接访问计算机的底层文件系统和低级功能，因此，如果你懂得如何操作，它对于快速完成复杂任务非常有用。

它对于自动化操作也很有用——例如，编写一条命令即可瞬间更新数百个文件的名称，比如将“ch01-xxxx.png”改为“ch02-xxxx.png”。如果你使用访达或资源管理器等图形界面应用程序来更新文件名，将会花费很长时间。

总之，终端在短期内不会消失。

### 终端长什么样？

下面列出了几种可用于打开终端的程序。

下图展示了 Windows 中可用的命令提示符——从“cmd”程序到“powershell”，选择范围相当广泛——只需在“开始”菜单中输入程序名称即可运行。

![一个标准的 Windows 命令提示符窗口和一个 Windows PowerShell 窗口](win-terminals.png)

下面是 macOS 终端应用程序。

![一个标准的 macOS 命令提示符窗口](mac-terminal.png)

### 如何访问终端？

如今，许多开发者都在使用基于 Unix 的工具（例如终端，以及通过终端可以访问的工具）。目前网络上现有的许多教程和工具都支持（遗憾的是，也默认）基于 Unix 的系统，但无需担心——它们在大多数系统上均可使用。在本节中，我们将探讨如何在你选择的系统上访问终端。

#### Linux/Unix

如上所述，Linux/Unix 系统默认提供了一个终端，它列在“应用程序”中。

#### macOS

macOS 有一个名为 Darwin 的系统，位于图形用户界面的底层。Darwin 是一个类 Unix 系统，它提供了终端，并允许访问低级工具。macOS 的 Darwin 与 Unix 基本功能相当，其性能绝对足以让我们在阅读本文时无需担心。

在 macOS 上，终端位于 `Applications/Utilities/Terminal` 路径下。

#### Windows

与其他一些编程工具一样，在 Windows 上使用终端（或命令行）历来不像在其他操作系统上那样简单易用。但情况正在好转。

Windows 长期以来一直拥有一个名为 `cmd`（“命令提示符”）的类似终端的程序，但它与 Unix 命令并不完全兼容，且相当于旧式的 Windows DOS 提示符。

目前已有更好的程序可在 Windows 上提供终端体验，例如 PowerShell（[点击此处查找安装程序](https://github.com/PowerShell/PowerShell)）和 Git Bash（作为 [git for Windows](https://gitforwindows.org/) 工具集的一部分提供）。

不过，当今 Windows 平台上最佳的选择是 Windows Subsystem for Linux（WSL）——这是一个兼容性层，可直接在 Windows 10 系统内运行 Linux 操作系统，让你无需虚拟机即可直接在 Windows 上运行“真正的终端”。

该组件可直接从 Windows 应用商店免费安装。你可以在 [Windows Subsystem for Linux 文档](https://learn.microsoft.com/zh-cn/windows/wsl/)中找到所需的所有文档。

![Windows Subsystem for Linux 文档的截图](wsl.png)

关于在 Windows 上选择哪种选项，我们强烈建议你尝试安装 WSL。也可以继续使用默认的命令提示符（`cmd`），虽然许多工具都能正常运行，但如果能与 Unix 工具保持更好的兼容性，你会发现一切操作都会更加便捷。

#### 附注：命令行和终端有什么区别？

通常情况下，这两个术语可以互换使用。从技术上讲，终端是一种用于启动并连接到 shell 的软件。shell 是指你的会话及其环境（例如，可以在其中自定义提示符和快捷键等）。而命令行则是你输入命令、光标闪烁的那一行。

### 必须要使用终端吗？

尽管命令行提供了大量工具，但如果你使用的是 [Visual Studio Code](https://code.visualstudio.com/) 这类工具，还有海量的扩展程序可供使用，它们可以作为中间层，让你无需直接使用终端即可执行终端命令。不过，并非所有你想做的事情都有相应的代码编辑器扩展——最终你还是得积累一些终端操作的经验。

## 基本的内置终端命令

说的够多了，让我们开始看看一些终端命令吧！下面是命令行可以做的一些事情，以及每种情况下相关工具的名称：

- 导航计算机的文件系统以及基本级别的任务，如创建、复制、重命名和删除：
  - 在目录（文件夹）结构中浏览：`cd`
  - 建立目录：`mkdir`
  - 创建文件（修改它们的元数据）：`touch`
  - 复制文件：`cp`
  - 移动文件：`mv`
  - 删除文件或目录：`rm`

- 下载在特定的 URL 找到的文件：`curl`
- 在较大的文件体中寻找特定的片段：`grep`
- 逐页查看文件的内容：`less`、`cat`
- 操作和转换文本流（例如，将 HTML 文件中 `<div>` 的所有实例改为 `<article>`）：`awk`、`tr`、`sed`

> [!NOTE]
> 网上有不少优秀的教程，对命令行进行了更深入的讲解——本文仅作简要介绍！

让我们继续，看看在命令行上使用这些工具中的几个。在进一步操作之前，先打开终端程序！

### 在命令行中导航

当你访问命令行时，你将不可避免地需要导航到一个特定的目录“做一些事情”。所有的操作系统（假设是默认设置）都将在你的*Home*目录中启动它们的终端程序，从那里你可能想要移动到另一个地方。

> [!NOTE]
> “目录”（directory）是上篇文章中我们所称“文件夹”（folder）的技术术语。在用户界面（UI）中查看文件结构时，“文件夹”这一术语更通俗易懂，因为所使用的图标看起来就像老式的实体文件夹。不过，“目录”这一术语也经常被使用，尤其是在讨论通过命令行操作文件时。虽然两者存在细微差别，但基本上是同义词。

`cd` 命令允许你更改目录。从技术上讲，cd 不是一个程序，而是内置的。这意味着你的操作系统可以开箱即用地提供它，而且你也不会意外地删除它，感谢上帝！你不需要过多地担心某个命令是否是内置的，但是要记住，内置的命令会在所有基于 unix 的系统上出现。

1. 要更改目录，请在终端中键入 `cd`，然后输入要移动到的目录。假设该目录在你的主目录中，你可以使用 `cd Desktop`（请参见下面的屏幕截图）。

   ![在各种窗口终端中运行 cd Desktop 命令的结果——终端位置移到了桌面上](win-terminals-cd.png)

2. 试着把这个输入到你的系统终端：

   ```bash
   cd Desktop
   ```

3. 如果你想回到上一个目录，你可以使用两个点。现在输入这个：

   ```bash
   cd ..
   ```

> [!NOTE]
> 一个非常有用的终端快捷方式是使用 <kbd>tab</kbd> 键自动完成你知道的名字，而不是必须键入整个东西。例如，在键入以上两个命令后，尝试键入 `cd D` 并按下 <kbd>tab</kbd>——它应该为你自动完成目录名称 `Desktop`，只要它存在于当前目录中。在后续操作的过程中记住这一点。

如果要转到的目录嵌套得很深，则需要知道访问该目录的路径。当你更加熟悉文件系统的结构时，这通常会变得更容易，但是如果你不确定路径，通常可以使用 `ls` 命令（参见下文）的组合并在其中单击来确定它的路径。“资源管理器/查找器”窗口可查看目录相对于当前位置的位置。

例如，如果你想进入一个名为 `src` 的目录，该目录位于*桌面*的一个名为 `project` 的目录中，你可以从你的主文件夹键入这三个命令来到达该目录：

```bash
cd Desktop
cd project
cd src
```

但这纯属浪费时间——其实，你可以输入一条命令，将路径中的不同项目用正斜杠分隔，就像你在 CSS、HTML 或 JavaScript 代码中指定图片或其他资源的路径时那样：

```bash
cd Desktop/project/src
```

请注意，在路径前添加斜杠会使路径变为绝对路径，例如 `/Users/your-user-name/Desktop`。如上文所示，省略前导斜杠则使路径相对于当前工作目录。这与网页浏览器中看到的 URL 完全相同。开头的斜杠表示“位于网站的根目录”，而省略斜杠则表示“该 URL 相对于当前页面”。

> [!NOTE]
> 在 Windows 系统中，你需要使用反斜杠而不是正斜杠，例如：`cd Desktop\project\src`——这看起来可能很奇怪，但如果你想了解原因，可以[观看这段 YouTube 视频](https://www.youtube.com/watch?v=5T3IJfBfBmI)，其中一位微软首席工程师对此进行了讲解。

### 列出目录内容

另一个内置的 Unix 命令是 `ls`（list 的缩写），它会列出当前所在目录的内容。请注意，如果你使用的是默认的 Windows 命令提示符（`cmd`），该命令将无法运行——在 Windows 中，对应的命令是 `dir`。

现在请在终端中尝试运行以下命令：

```bash
ls
```

这提供了当前工作目录中的文件和目录的列表，但这些信息实际上很基本，你只能得到每个项的名称，而不能知道它是文件还是目录，或者其他任何东西。幸运的是，对命令的用法进行一个小小的更改就可以提供更多的信息。

### 介绍命令选项

大多数终端命令都有选项——这些是添加在命令末尾的修饰符，可以使命令的行为略有不同。这些选项通常由命令名后跟一个空格、一个连字符，然后是一个或多个字母组成。

例如，试着输入以下命令，看看会得到什么结果：

```bash
ls -l
```

至于 `ls`，`-l`（连字符小写 L）选项为你提供每行一个文件或目录的清单，并显示更多信息。可以通过查找行最左边的字母“d”来识别目录。我们可以使用 `cd` 命令进入它们。

下图是一张屏幕截图，顶部是“原生”的 macOS 终端，下方则是经过自定义、添加了一些额外图标和颜色以使其更生动的终端——两者均显示了运行 `ls -l` 的结果：

![一个原生风格的 macOS 终端和一个色彩更丰富的自定义 macOS 终端，显示文件列表——这是运行 ls -l 命令后的结果](mac-terminals-ls.png)

> [!NOTE]
> 要准确了解每个命令支持哪些选项，可以查看其[手册页](https://zh.wikipedia.org/wiki/手册页)。操作方法是输入 `man` 命令，后面跟上要查询的命令名称，例如 `man ls`。这将在终端的默认文本文件查看器中打开手册页（例如，在我的终端中是 [`less`](<https://zh.wikipedia.org/wiki/Less_(Unix)>)），随后你可以使用方向键或类似的方式滚动浏览该页面。手册页会非常详细地列出所有选项，起初可能会让人感到有些望而生畏，但至少你知道在需要时可以查阅。浏览完手册页后，你需要使用文本查看器的退出命令来关闭它（在 `less` 中是“q”；如果不明显，你可能需要在网上搜索一下）。

> [!NOTE]
> 要同时运行带有多个选项的命令，通常可以将所有选项放在连字符后面的一个字符串中，例如 `ls -lah` 或 `ls -ltrh`。不妨查阅 `ls` 的手册页，了解这些额外选项的作用！

既然我们已经讨论了两个基本命令，那么稍微浏览一下你的目录，看看是否可以从一个位置导航到下一个位置。

### 创建、复制、移动、删除

在使用终端的过程中，你可能会频繁用到其他一些基本的实用命令。这些命令非常简单，因此我们不会像前面介绍的那几个命令那样详细地讲解它们。

请在某个位置创建一个测试目录，并在其中尝试使用这些命令，以免意外删除重要文件。你可以参考下面的示例命令进行操作：

- `mkdir`——该命令会在当前目录下创建一个新目录，目录名称即为命令名后跟的名称。例如，`mkdir my-awesome-website` 将创建一个名为 `my-awesome-website` 的新目录。
- `rmdir`——删除指定名称的目录，但仅限于该目录为空时。例如，`rmdir my-awesome-website` 将删除上面创建的目录。如果你想删除一个非空目录（并同时删除其中所有内容），可以使用 `rm -r` 代替（见下文），但这很危险。请确保该目录中没有你以后可能需要的内容，因为这些内容将被永久删除。
- `touch`——在当前目录中创建一个新的空文件。例如，`touch mdn-example.md` 会创建一个名为 `mdn-example.md` 的新空文件。
- `mv`——将文件从第一个指定的位置移动到第二个指定的位置，例如 `mv mdn-example.md mdn-example.txt`（位置以文件路径形式表示）。该命令将当前目录中名为 `mdn-example.md` 的文件移动到当前目录中名为 `mdn-example.txt` 的文件。从技术上讲，这是文件移动操作，但从实际应用角度来看，该命令实际上是在重命名文件。
- `cp`——用法与 `mv` 类似，`cp` 会将指定在第一个位置的文件复制到指定在第二个位置。例如，`cp mdn-example.txt mdn-example.txt.bak` 会创建一个名为 `mdn-example.txt.bak` 的 `mdn-example.txt` 副本（当然，如果你愿意，也可以将其命名为其他名称）。
- `rm`——删除指定的文件。例如，`rm mdn-example.txt` 将删除一个名为 `mdn-example.txt` 的文件。请注意，此删除操作是永久性的，无法通过桌面用户界面中的“回收站”撤销。

> [!NOTE]
> 许多终端命令允许你使用星号作为“通配符”字符，意思是“任何字符序列”。这允许你一次对可能大量的文件运行操作，所有这些文件都匹配指定的模式。例如，`rm mdn-*` 将删除所有以 `mdn-` 开头的文件。`rm mdn-*.bak` 会删除所有以 `mdn-` 开头，以 `.bak` 结束的文件。

## 终端——被认为有害吗？

我们之前曾提过这一点，但为了明确起见——使用终端时必须小心谨慎。简单的命令风险不大，但当你开始组合更复杂的命令时，需要仔细考虑该命令会产生什么效果，并在最终在目标目录中执行之前先进行测试。

假设某个目录中有 1000 个文本文件，你想遍历所有文件，并仅删除那些文件名中包含特定子字符串的文件。如果你不够小心，可能会误删重要文件，从而导致大量工作成果丢失。一个值得养成的良好习惯是：先在文本编辑器中写出终端命令，理清命令的结构，然后对目标目录创建一份备份副本，先在备份上运行该命令进行测试。

如果你不习惯在自己的电脑上尝试终端命令，可以使用一些托管的在线终端，它们提供了安全的环境供你练习输入命令，无需担心弄坏自己的电脑：

- 我们的学习合作伙伴 [Scrimba](https://scrimba.com/home?via=mdn) 在其学习环境中提供了一个用于输入命令的终端。要了解其实际应用，不妨查看他们的[命令行基础](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn)<sup> [_MDN 学习合作伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#伙伴链接与嵌入)</sup>课程，该课程还通过终端提供了关于浏览文件树以及操作文件和目录的趣味互动式入门指导。
- sandbox.bio 上的[命令行实验场](https://sandbox.bio/playgrounds/terminal)是尝试终端命令的绝佳场所，可帮助你熟悉命令行界面以及 Bash 等常见 shell。

若想快速了解特定的终端命令，[tldr.sh](https://tldr.sh/) 是一个绝佳的资源。这是一个由社区驱动的文档服务，类似于 MDN，但专门针对终端命令。

在下一节中，让我们更进一步（实际上是大幅提升），看看如何在命令行上将各种工具组合起来，从而真正体会到终端相较于常规桌面用户界面的优势所在。

## 使用管道将命令串联在一起

当你开始使用 `|`（管道）符号将命令串联起来时，终端的优势就真正体现出来了。让我们通过一个非常简短的例子来看看这是什么意思。

我们之前已经介绍过 `ls` 命令，它可以输出当前目录的内容：

```bash
ls
```

但如果我们想快速统计当前目录中的文件和目录数量呢？`ls` 命令本身无法做到这一点。

还有另一个名为 `wc` 的 Unix 工具。它可以统计输入内容的单词数、行数、字符数或字节数。输入内容可以是文本文件——下面的示例输出了 `myfile.txt` 中的行数：

```bash
wc -l myfile.txt
```

但它还可以统计通过**管道**传入的任何输出的行数。例如，下面的命令统计了 `ls` 命令输出的行数（即单独运行该命令时通常会打印到终端的内容），并将该行数输出到终端：

```bash
ls | wc -l
```

由于 `ls` 会将每个文件或目录单独打印在一行上，这实际上为我们提供了目录和文件的数量。

那么这里到底发生了什么？（Unix）命令行工具的一般设计理念是，它们会将文本打印到终端（也称为“打印到标准输出”或 `STDOUT`）。许多命令还可以从流式输入（称为“标准输入”或 `STDIN`）中读取内容。

管道运算符可以将这些输入和输出连接起来，让我们能够构建出越来越复杂的操作以满足需求——一个命令的输出可以成为下一个命令的输入。在此示例中，`ls` 通常会将其输出打印到 `STDOUT`，但现在 `ls` 的输出被通过管道传入 `wc`，后者将该输出作为输入，统计其中包含的行数，并将计数结果打印到 `STDOUT`。

## 一个稍微复杂一点的例子

让我们看一些更复杂的东西。

1. 我们将首先尝试使用 `curl` 命令（该命令可用于从 URL 请求内容）从 `https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch` 获取 MDN 的“fetch”页面的内容。现在就试一试：

   ```bash
   curl https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   你不会看到任何输出，因为该页面已被重定向（至 [/Web/API/fetch](/zh-CN/docs/Web/API/Window/fetch)）。我们需要使用 `-L` 标志明确告诉 `curl` 跟随重定向。

2. 让我们再利用 `curl` 的 `-I` 选项查看 `developer.mozilla.org` 返回的请求头，并将它发送的所有 location 重定向信息输出到终端——具体方法是将 `curl` 的输出通过管道传入 `grep`（我们将让 `grep` 返回所有包含“location”一词的行）。请尝试运行以下命令（你会发现，在到达最终页面之前只有一次重定向）：

   ```bash
   curl https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   你的输出结果应该类似于以下内容（`curl` 会先输出一些下载计数器等信息）：

   ```bash
   location: /zh-CN/docs/Web/API/Window/fetch
   ```

3. 虽然有些牵强，但我们可以进一步利用这个结果，对 `location:` 行中的内容进行转换，在每行开头添加基础源地址，从而输出完整的 URL。为此，我们将引入 `awk`（这是一种类似于 JavaScript、Ruby 或 Python 的编程语言，只是历史更为悠久！）。试着运行以下命令：

   ```bash
   curl https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

最终输出结果应类似如下：

```bash
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/fetch
```

通过组合这些命令，我们定制了输出结果，以显示当我们请求 `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` 这个 URL 时，Mozilla 服务器所经过的完整重定向路径。

了解你的系统在未来几年里会大有裨益——学习这些单一功能工具的工作原理，以及如何将它们纳入你的工具箱，以解决特定问题。

## 添加工具

现在我们已经了解了一些系统自带的内置命令，接下来让我们看看如何安装第三方 CLI 工具并加以利用。

目前，前端 Web 开发可安装工具的庞大生态系统主要存在于 [npm](https://www.npmjs.com/) 中，这是一个与 Node.js 紧密协作的私有包托管服务。这一生态系统正在逐步扩展——随着时间的推移，预计会出现更多的包提供商。

[安装 Node.js](https://nodejs.org/zh-cn/) 时，系统会同时安装 npm 命令行工具（以及一个名为 npx 的辅助工具，该工具以 npm 为核心），这为安装其他命令行工具提供了入口。Node.js 和 npm 在所有系统（macOS、Windows 和 Linux）上的工作原理都是一致的。

现在在你的系统上安装 npm，转到上面的 URL，下载并运行适合你的操作系统的 Node.js 安装程序。如果出现提示，请确保将 npm 作为安装的一部分。

![Windows 上的 Node.js 安装器，显示了包含 npm 的选项](npm-install-option.png)

这里我们将再次以 [Prettier](https://prettier.io/) 为例。我们在[代码编辑器](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions)一文中已经介绍了如何将其安装为 VS Code 扩展。这里我们将展示如何将其作为命令行工具进行安装。

> [!NOTE]
> Prettier 是一款立场鲜明的代码格式化工具，仅提供“少量选项”。选项越少，通常意味着越简单。考虑到工具的复杂性有时会失控，“少量选项”这一特点非常具有吸引力。

### 在哪里下载我们的 CLI 工具？

在开始安装 Prettier 之前，有一个问题需要回答：“我们应该安装到哪里？”

使用 `npm` 时，我们可以选择将工具全局安装（这样就能在任何地方使用它们），或者仅安装在当前项目目录中。

这两种方式各有优缺点——以下列出的全局安装的优缺点远非详尽无遗。

**全局安装的优点：**

- 在终端的任何位置均可访问
- 只需安装一次
- 占用更少的磁盘空间
- 始终保持同一版本
- 使用体验与其他 Unix 命令无异

**全局安装的缺点：**

- 可能与项目的代码库不兼容
- 团队中的其他开发者无法使用这些工具，例如当你通过 Git 等工具共享代码库时。
- 与上一条相关，这会增加项目代码复现的难度（如果你将工具本地安装，可以将其设置为依赖项，并通过 <code>npm install</code> 进行安装）。

尽管“缺点”列表较短，但全局安装带来的负面影响可能远大于其好处。这里我们将进行本地安装，但一旦你理解了相关风险，也可以自由选择全局安装。

### 安装 Prettier

Prettier 是一款专为前端开发者设计的、具有明确风格规范的代码格式化工具，主要针对基于 JavaScript 的语言，并支持 HTML、CSS、SCSS、JSON 等。

Prettier 能够：

- 节省手动在所有代码文件中保持风格一致所需的认知开销；Prettier 可以自动完成这项工作。
- 帮助 Web 开发新手按照最佳实践规范格式化代码。
- 可在任何操作系统上安装，甚至可直接集成到项目工具链中，确保参与代码开发的同事和朋友都采用你使用的代码风格。
- 可配置为在保存时、输入时，甚至在发布代码前运行（需配合本模块后续将介绍的额外工具）。

在本文中，我们将按照 [Prettier 安装指南](https://prettier.io/docs/install.html)的建议，在本地安装 Prettier。

1. 安装好 Node.js 后，打开终端并运行以下命令来安装 Prettier（关于 `--save-dev` 的作用，我们将在下一篇文章中进行说明）：

   ```bash
   npm install --save-dev prettier
   ```

2. 现在，可以使用 [npx](https://docs.npmjs.com/cli/commands/npx/) 工具在本地运行该文件。与其他许多命令一样，不带任何参数运行该命令将显示用法和帮助信息。现在试一试：

   ```bash
   npx prettier
   ```

输出结果应类似如下：

```bash
Usage: prettier [options] [file/dir/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

即使它很长，至少浏览一下使用信息也是值得的。它将帮助你更好地理解如何使用该工具。

> [!NOTE]
> 如果你尚未在本地安装 Prettier，那么运行 `npx prettier` 将会一次性下载并运行 Prettier 的最新版本——_仅限该命令_。
>
> 虽然这听起来很不错，但 Prettier 的新版本可能会对输出结果进行微调。建议将其本地安装，这样在准备更换版本之前，用于格式化的 Prettier 版本将保持不变。

### 尝试 Prettier

让我们快速演示一下 Prettier，这样你就可以看到它是如何工作的。

1. 首先，在文件系统中容易找到的地方创建一个新目录。可能是你的 `Desktop` 上的一个叫做 `prettier-test` 的目录。

2. 现在将以下代码保存在测试目录的一个名为 `index.js` 新文件中：

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. 我们可以对代码库运行 Prettier，仅检查代码是否需要调整。请使用 `cd` 命令进入你的目录，然后尝试运行以下命令：

   ```bash
   npx prettier --check index.js
   ```

   输出应该类似如下：

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. 有些代码样式是可以修改的。没有问题。为 `prettier` 命令添加 `--write` 选项将修复这些问题，让我们专注于实际编写有用的代码。现在尝试运行这个版本的命令：

   ```bash
   npx prettier --write index.js
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

根据你的工作流（或你选择的工作流），你可以将其作为流程的自动化部分。自动化确实是工具的优势所在；我们的个人偏好是那种无需配置任何东西就能“自动发生”的自动化。

使用 Prettier 有许多实现自动化的方法，尽管它们超出了本文的范围，但是有一些很好的在线资源可以提供帮助（已经链接到其中一些）。你可以在这些场景下调用 Prettier：

- 在将代码提交到 git 存储库之前，使用 [Husky](https://github.com/typicode/husky)。
- 当你在代码编辑器中点击“保存”的时候，无论是 [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 或 [Sublime Text](https://packagecontrol.io/packages/JsPrettier)。
- 作为{{glossary("continuous integration", "持续集成")}}检查的一部分，可以使用例如 [Github Actions](https://github.com/features/actions) 之类的工具。

我们个人的偏好是第二个——当使用 VS Code 时，Prettier 会启动并清理每次我们点击保存时需要做的格式化。你可以在 [Prettier 文档](https://prettier.io/docs/)中找到更多有关使用 Prettier 的不同方法。

## 尝试其他的工具

如果你想尝试更多的工具，这里有一个简短的列表，很有趣的尝试：

- [`bat`](https://github.com/sharkdp/bat)——一个“更好的” `cat`（`cat` 用于打印文件内容）。
- [`prettyping`](https://denilson.sa.nom.br/prettyping/)——命令行中的 `ping` 命令，但是是可视化的（ping 是检查服务器是否有响应的有用工具）。
- [`htop`](https://htop.dev/)——进程查看器，当某些东西使你的 CPU 风扇的行为像一个喷气发动机，并且你想要识别出错的程序时，它非常有用。
- [`tldr`](https://tldr.sh/#installation)——在本章前面提到的，但是可以作为命令行工具使用。

注意，上面的一些建议可能需要使用 npm 进行安装，就像我们使用 Prettier 所做的那样。

## 总结

至此，我们结束了对终端/命令行的入门介绍，也结束了“配置环境”模块的学习。接下来，我们将引导你开始构建你的第一个简单网站，让你对网页开发有一个初步的了解。

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
