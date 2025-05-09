---
title: 代码编辑器
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: f12c4c8c5128f0e84d1167f8a6285fc68c1eb8e2
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

在前面的学习中，我们安装了一个代码编辑器，因为在我们的学习路径中这是必需的。在这篇文章中，我们将更详细地探讨代码编辑器，让你了解它们都能做什么。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本熟悉你的电脑操作系统。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>了解有哪些代码编辑器可用，而哪些适合你的用途。</li>
          <li>了解一个基本的代码编辑器能做什么。</li>
          <li>学习代码编辑器插件的功能与安装方法。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 有哪些代码编辑器可用？

在开始编程之前，你可能有一些在 Microsoft Word 等程序中处理文本文档的经验。你可能还想知道是否可以在相同的程序中编写代码。不幸的是，答案是“并非如此”：

- 像 Microsoft Word 这样的程序是**二进制文件**编辑器；它们的文件包含只有这些程序才能理解的非文本格式。然而，网站源代码以纯文本形式存储。
- Word *可以*打开和编辑纯文本文件，但不能很好地处理它们。它没有专为处理代码而设计的各种功能，而专用于编写信件和报告等文档。因此你需要一个干净地处理和输出纯文本且能处理代码的程序。

你电脑上可能已经安装了纯文本编辑器。默认情况下，Windows 预装了[记事本](https://zh.wikipedia.org/wiki/Windows記事本)，macOS 则自带[文字编辑](<https://zh.wikipedia.org/wiki/文字編輯_(應用程式)>)。Linux 发行版各不相同；Ubuntu 22.04 LTS 版本默认搭载 [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor)。操作系统自带的纯文本编辑器可能还不错，但它们的功能有限。

你最好使用完整代码编辑器，像 [Visual Studio Code](https://code.visualstudio.com/)（多平台，免费）、[Sublime Text](https://www.sublimetext.com/)（多平台，非免费）或 [Notepad++](https://notepad-plus-plus.org/)（Windows，免费）。

我们推荐使用 Visual Studio Code（VS Code），这也是我们主要使用的编辑器。如果你还没有安装 VS Code（或其他代码编辑器），应该[在继续之前先安装它](https://code.visualstudio.com/)。

> [!NOTE]
> 集成开发环境（Integrated Development Environment，IDE），比如 [NetBeans](https://netbeans.apache.org/front/main/index.html)（多平台，免费）和 [WebStorm](https://www.jetbrains.com.cn/webstorm/)（多平台，不免费），通常比简单的代码编辑器功能更丰富，但对于你在学习旅程的这个阶段所需的来说，它们可能有些过于复杂了。

## 代码编辑器的基本功能

在本节中，我们将介绍代码编辑器中那些最重要的功能，介绍它们如何帮助你编程。

> [!NOTE]
> 下文仅触及了代码编辑器功能的一角。要获取更完整的功能列表，参见 [Visual Studio Code 文档](https://code.visualstudio.com/docs)（如果你使用的是其他代码编辑器，请在 Web 中搜索对应代码编辑器的文档）。

> [!NOTE]
> 如果你是仅使用键盘的用户，别忘了 VS Code 拥有一套强大的快捷键。参见 VS Code [默认键盘快捷键参考](https://code.visualstudio.com/docs/reference/default-keybindings)。

### 打开和编辑文件

这似乎看起来显而易见，但安装代码编辑器会非常有用，因为它往往可以打开你可能希望在开发工作中使用的所有代码文件。没有什么比双击计算机上的文件后在随机、不相关的应用程序中打开它，或者看见操作系统提示它无法识别该文件更烦人的了。

这一般会在安装 VS Code 时自动完成，但如果你在处理某些文件类型时仍然遇到问题，你可以手动将它们设置为通过该应用程序打开。这可能会随操作系统而有所不同，你可能需要前往你喜欢的搜索引擎搜索“选择打开文件类型的应用程序 &lt;操作系统名称和版本>”——例如，如果你使用的是 Windows 11，请搜索“选择打开文件类型的应用程序 Windows 11”。

可以在我们的下一篇文章中找到有关打开和编辑文件和文件夹的更多信息。

### 语法高亮

VS Code 等代码编辑器提供语法高亮显示功能，也就是说，已识别的代码中不同功能的部分会被使用不同的颜色显示。这使得代码比用一种颜色着色要易读得多。让我们以下面的 JavaScript 函数为例：

```js
function createGreeting(name) {
  const greeting = `你好，${name}！`;
  return greeting;
}
```

你现在不需要了解此代码的作用，但你已经可以看到上面的代码语法高亮后会显示成什么样子。是的，我们在 MDN 上也提供语法高亮显示！

让我们尝试在 VS Code 中练习一下：

1. 将上述代码示例复制到你的剪贴板（MDN 代码块右上角有一个复制图标，你可以按下它来执行此操作）。
2. 打开 VS Code，点击*文件* > _新建文件…_ 创建一个新文件。
3. 在新建的文件中，点击*选择语言*文本，然后从打开的下拉菜单中选择 _JavaScript_。
4. 粘贴代码到新建的文件中，以查看 JavaScript 在 VS Code 中的语法高亮显示效果。

VS Code 还提供其他语法功能。例如：

- 你会看到一个细长的垂直线从 `function` 关键字延伸到闭合的大括号（`}`）——这些线用于标记代码中的不同[缩进](https://zh.wikipedia.org/wiki/缩进风格)级别，这使得寻找代码块开始和结束的位置更加容易。
- 你也可以试试将光标移动到左花括号或右花括号（`{` 或 `}`）上——你会看到它们都被突出显示。这也有助于识别代码块的开始和结束，当你的代码结构复杂、嵌套繁多并且你正尝试找到缺失的字符时这非常有用。这种突出显示也适用于其他成对符号，如圆括号（`(` 和 `)`）和方括号（`[` 和 `]`）。

### 代码补全/建议

当你在代码编辑器中输入代码时，它通常能够给出下一步输入的建议，还可以帮你生成一些模板代码（通常指的是始终相同的标准代码）。

现在就在 VS Code 中尝试一下：

1. 回到你在上一节中创建的 JavaScript 文件。
2. 转至文件底部并连续按数次 <kbd>Enter</kbd>/<kbd>Return</kbd>，确保你处于新的一行。
3. 开始输入“function”——在文本右侧应该会出现一个选项列表。
4. 选择右侧写有 _Function Statement_ 的 _function_ 选项。这将为你填充以下代码：

   ```js-nolint
   function name(params) {

   }
   ```

5. 点击函数内部，在两个花括号之间的空白行上开始输入“document”。你将再次看到一个选项列表，选择第一个。这是对 {{domxref("Document")}} 对象的引用（再次强调，现在不用了解这么做的具体含义）。
6. 在 `document` 之后，输入一个点（`.`）——你将再次看到一个选项列表，这次的列表中包含 `document` 对象上可用的所有属性和方法！

现在了解这些就够了，让我们前往下一部分吧。

### 调试帮助

代码编辑器不能自动修复你的所有代码问题，但它们可以帮助你找到拼写错误和其他简单错误。让我们看几个例子。

1. 回到你的 JavaScript 文件并删除你当前的所有代码。替换为以下内容：

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `你好，${Name}！`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. 右侧的小叉图标是 MDN 指示错误代码示例的方式，而且完全正确——上面的代码中有三个错误！看看 VS Code 的高亮，你能否找到它如何突出显示错误的？我们将逐一解释并修复它们。
3. 第一个错误是我们第一行使用了 `name` ，但在第二行却使用了 `Name` 来引用同一个变量。在 JavaScript 是区分大小写的，因此这会被视为两个不同的名称。VS Code 以两种不同的方式突出了这个问题——将 `name` 显示成深灰色来表示该值已声明但未使用（通常是一个很好的指示方式，表明你在某处可能输入了错别字），在 `Name` 下方显示三个点来表示它有一些建议可以帮助你改进代码（对这个例子来说，它会询问你是否打算写 `name`）。要修复这个错误，将 `Name` 改为 `name` 即可。
   > [!NOTE]
   > 你可以将鼠标悬停在有高亮指示的代码上获取更多信息。
4. 第二个错误出现在第六行，我们在这里写了一个 `"Chris`。在 JavaScript 中，一段文本（被称为**字符串**或 **string**）必须用两个半角引号括起来，但在上面的例子中第二个引号缺失了。VS Code 使用红色波浪线突出显示错误首次出现的位置（注意，很可能不是错误实际所在的位置）来标记这个错误，就像 Microsoft Word 突出显示拼写错误时使用的那样。要修复这个问题，将 `"Chris` 改为 `"Chris"` 即可。
5. 在最后一行，靠近结尾处仍然有一小段红色波浪线——即使我们已经修复了前面的错误。这是因为第三个错误——在 JavaScript 中，一个开括号总是需要一个对应的闭括号。把 `(helloChris` 改为 `(helloChris)` 来修复这个问题。

### 搜索和替换

每个值得一试的代码编辑器都有强大的搜索和替换功能。例如，如果你发现特定函数中发生了错误并希望在代码中找到它，或者如果你决定更改变量的名称并需要确保在引用该变量的所有位置都更改了该名称，这会非常有用。

如果你以前经常使用计算机，或许你会对搜索和替换的概念相当熟悉，但出于完整性考虑，我们还是快速探索一下：

1. 回到 VS Code 中那个 JavaScript 文件，然后从菜单中选择*编辑* > _查找_，在查找模式下打开查找和替换面板。
2. 在*查找*框中输入 `createGreeting`，你将看到有两个结果被突出显示了，你可以使用面板中的向上和向下箭头在搜索结果之间移动。当前激活/聚焦的搜索结果会被高亮显示。
3. 现在，在菜单中选择*编辑* > *替换*或单击*查找*框左侧的箭头，以替换模式打开查找和替换面板。
4. 在你现在应该可以看到的*替换*框中输入 `sayHello`。
5. 现在，你可以使用*替换*框右侧的两个按钮替换代码中的所有搜索结果。左按钮单击第一次会激活/聚焦搜索字符串的下一个结果，第二次单击会替换这个被高亮的搜索结果。而右侧的按钮只需单击一下即可替换所有搜索结果。

VS Code 具有许多强大的查找和替换功能——参见[查找和替换](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace)。

## 使用扩展增强代码编辑器

大多数代码编辑器都有扩展或插件系统，允许你向程序添加默认不可用的功能。这些扩展可以执行各种任务，例如：

- 为默认不支持的语言启用代码补全、检查（lint）或调试功能，或为已经受支持的语言提供其他额外功能。
- 允许你在代码编辑器内部直接使用其他工具的功能，例如版本控制工具或本地测试服务器。
- 提供额外的用户界面或代码高亮主题/配色方案。
- 建议代码片段以满足要求。常见的有从静态模板生成和通过 AI 工具生成的。使用 AI 生成代码片段与使用 AI 生成搜索结果具有许多相似的优点和注意事项（详细说明可参见[搜索信息 > 使用 AI](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#使用_ai)）

VS Code 中扩展可通过扩展商店面板进行管理，可通过*查看* > *扩展*菜单进行访问。现在让我们来探索一下。

1. 打开扩展商店面板。
2. 在面板顶部的*在应用商店中搜索扩展*框中，输入“JavaScript”以查看可用的 JavaScript 相关扩展。尝试点击出现的搜索结果，以查看这些扩展的功能。你暂时不需要安装这些扩展。
3. 相反，让我们安装一个易于理解并且对你在本模块中会处理的几乎所有代码文件都很有用的扩展。在*在应用商店中搜索扩展*框中输入“Prettier”，然后单击 _Prettier - Code formatter_。安装 [Prettier](https://prettier.io/) 扩展后，可以用它在你每次保存文件时格式化代码，使你的代码更易于阅读。
4. 单击*扩展*选项卡上的*安装*按钮。安装完成后关闭选项卡。
5. 要让 Prettier 正常工作，还需要更新几个设置。先打开 VS Code 设置选项卡（macOS 上，_Code_ > _设置..._ > _设置_；Windows 上，_文件_ > _首选项_ > _设置_）。
6. 在顶部的*搜索设置*框中，输入“formatter”以筛选设置项，只显示包含“formatter”的设置。
7. 找到 _Editor: Default Formatter_ 设置项，然后从关联的下拉列表中选择 _Prettier - Code formatter_ 选项。
8. 找到 _Editor: Format On Save_ 设置项并单击对应的复选框启用它。
9. 关闭*设置*选项卡。

现在我们已经完成了所有设置，来看看 Prettier 的实际效果吧。

1. 回到 JavaScript 文件的选项卡并保存它（_文件_ > _保存_）。保存文件时你就能看到 Prettier 的效果。可以保存为 `test.js`。文件保存位置并不重要。
2. 将目前文件中的内容替换为以下代码：

   ```js-nolint example-bad
   function sayHello(name){const greeting = `你好，${name}！`;
   return greeting;}
   ```

3. 再次保存文件；此时，Prettier 应该已经很好地重新格式化了代码，就像下面这样：

   ```js
   function sayHello(name) {
     const greeting = `你好，${name}！`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
