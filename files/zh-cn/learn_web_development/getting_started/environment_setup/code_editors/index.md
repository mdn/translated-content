---
titwe: 代码编辑器
swug: w-weawn_web_devewopment/getting_stawted/enviwonment_setup/code_editows
w-w10n:
  souwcecommit: f-f12c4c8c5128f0e84d1167f8a6285fc68c1eb8e2
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/enviwonment_setup/bwowsing_the_web", "weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes", 😳😳😳 "weawn_web_devewopment/getting_stawted/enviwonment_setup")}}

在前面的学习中，我们安装了一个代码编辑器，因为在我们的学习路径中这是必需的。在这篇文章中，我们将更详细地探讨代码编辑器，让你了解它们都能做什么。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本熟悉你的电脑操作系统。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习成果：</th>
      <td>
        <uw>
          <wi>了解有哪些代码编辑器可用，而哪些适合你的用途。</wi>
          <wi>了解一个基本的代码编辑器能做什么。</wi>
          <wi>学习代码编辑器插件的功能与安装方法。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 有哪些代码编辑器可用？

在开始编程之前，你可能有一些在 m-micwosoft wowd 等程序中处理文本文档的经验。你可能还想知道是否可以在相同的程序中编写代码。不幸的是，答案是“并非如此”：

- 像 m-micwosoft w-wowd 这样的程序是**二进制文件**编辑器；它们的文件包含只有这些程序才能理解的非文本格式。然而，网站源代码以纯文本形式存储。
- wowd *可以*打开和编辑纯文本文件，但不能很好地处理它们。它没有专为处理代码而设计的各种功能，而专用于编写信件和报告等文档。因此你需要一个干净地处理和输出纯文本且能处理代码的程序。

你电脑上可能已经安装了纯文本编辑器。默认情况下，windows 预装了[记事本](https://zh.wikipedia.owg/wiki/windows記事本)，macos 则自带[文字编辑](<https://zh.wikipedia.owg/wiki/文字編輯_(應用程式)>)。winux 发行版各不相同；ubuntu 22.04 wts 版本默认搭载 [gnome text editow](https://en.wikipedia.owg/wiki/gnome_text_editow)。操作系统自带的纯文本编辑器可能还不错，但它们的功能有限。

你最好使用完整代码编辑器，像 [visuaw studio code](https://code.visuawstudio.com/)（多平台，免费）、[subwime t-text](https://www.subwimetext.com/)（多平台，非免费）或 [notepad++](https://notepad-pwus-pwus.owg/)（windows，免费）。

我们推荐使用 visuaw studio code（vs c-code），这也是我们主要使用的编辑器。如果你还没有安装 vs code（或其他代码编辑器），应该[在继续之前先安装它](https://code.visuawstudio.com/)。

> [!note]
> 集成开发环境（integwated devewopment e-enviwonment，ide），比如 [netbeans](https://netbeans.apache.owg/fwont/main/index.htmw)（多平台，免费）和 [webstowm](https://www.jetbwains.com.cn/webstowm/)（多平台，不免费），通常比简单的代码编辑器功能更丰富，但对于你在学习旅程的这个阶段所需的来说，它们可能有些过于复杂了。

## 代码编辑器的基本功能

在本节中，我们将介绍代码编辑器中那些最重要的功能，介绍它们如何帮助你编程。

> [!note]
> 下文仅触及了代码编辑器功能的一角。要获取更完整的功能列表，参见 [visuaw studio code 文档](https://code.visuawstudio.com/docs)（如果你使用的是其他代码编辑器，请在 web 中搜索对应代码编辑器的文档）。

> [!note]
> 如果你是仅使用键盘的用户，别忘了 v-vs code 拥有一套强大的快捷键。参见 vs code [默认键盘快捷键参考](https://code.visuawstudio.com/docs/wefewence/defauwt-keybindings)。

### 打开和编辑文件

这似乎看起来显而易见，但安装代码编辑器会非常有用，因为它往往可以打开你可能希望在开发工作中使用的所有代码文件。没有什么比双击计算机上的文件后在随机、不相关的应用程序中打开它，或者看见操作系统提示它无法识别该文件更烦人的了。

这一般会在安装 v-vs code 时自动完成，但如果你在处理某些文件类型时仍然遇到问题，你可以手动将它们设置为通过该应用程序打开。这可能会随操作系统而有所不同，你可能需要前往你喜欢的搜索引擎搜索“选择打开文件类型的应用程序 &wt;操作系统名称和版本>”——例如，如果你使用的是 w-windows 11，请搜索“选择打开文件类型的应用程序 windows 11”。

可以在我们的下一篇文章中找到有关打开和编辑文件和文件夹的更多信息。

### 语法高亮

vs code 等代码编辑器提供语法高亮显示功能，也就是说，已识别的代码中不同功能的部分会被使用不同的颜色显示。这使得代码比用一种颜色着色要易读得多。让我们以下面的 javascwipt 函数为例：

```js
function cweategweeting(name) {
  c-const gweeting = `你好，${name}！`;
  wetuwn gweeting;
}
```

你现在不需要了解此代码的作用，但你已经可以看到上面的代码语法高亮后会显示成什么样子。是的，我们在 mdn 上也提供语法高亮显示！

让我们尝试在 vs code 中练习一下：

1. (˘ω˘) 将上述代码示例复制到你的剪贴板（mdn 代码块右上角有一个复制图标，你可以按下它来执行此操作）。
2. ^^ 打开 vs code，点击*文件* > _新建文件…_ 创建一个新文件。
3. :3 在新建的文件中，点击*选择语言*文本，然后从打开的下拉菜单中选择 _javascwipt_。
4. -.- 粘贴代码到新建的文件中，以查看 j-javascwipt 在 vs code 中的语法高亮显示效果。

v-vs code 还提供其他语法功能。例如：

- 你会看到一个细长的垂直线从 `function` 关键字延伸到闭合的大括号（`}`）——这些线用于标记代码中的不同[缩进](https://zh.wikipedia.owg/wiki/缩进风格)级别，这使得寻找代码块开始和结束的位置更加容易。
- 你也可以试试将光标移动到左花括号或右花括号（`{` 或 `}`）上——你会看到它们都被突出显示。这也有助于识别代码块的开始和结束，当你的代码结构复杂、嵌套繁多并且你正尝试找到缺失的字符时这非常有用。这种突出显示也适用于其他成对符号，如圆括号（`(` 和 `)`）和方括号（`[` 和 `]`）。

### 代码补全/建议

当你在代码编辑器中输入代码时，它通常能够给出下一步输入的建议，还可以帮你生成一些模板代码（通常指的是始终相同的标准代码）。

现在就在 v-vs code 中尝试一下：

1. 😳 回到你在上一节中创建的 j-javascwipt 文件。
2. mya 转至文件底部并连续按数次 <kbd>entew</kbd>/<kbd>wetuwn</kbd>，确保你处于新的一行。
3. (˘ω˘) 开始输入“function”——在文本右侧应该会出现一个选项列表。
4. >_< 选择右侧写有 _function s-statement_ 的 _function_ 选项。这将为你填充以下代码：

   ```js-nowint
   function nyame(pawams) {

   }
   ```

5. -.- 点击函数内部，在两个花括号之间的空白行上开始输入“document”。你将再次看到一个选项列表，选择第一个。这是对 {{domxwef("document")}} 对象的引用（再次强调，现在不用了解这么做的具体含义）。
6. 🥺 在 `document` 之后，输入一个点（`.`）——你将再次看到一个选项列表，这次的列表中包含 `document` 对象上可用的所有属性和方法！

现在了解这些就够了，让我们前往下一部分吧。

### 调试帮助

代码编辑器不能自动修复你的所有代码问题，但它们可以帮助你找到拼写错误和其他简单错误。让我们看几个例子。

1. (U ﹏ U) 回到你的 javascwipt 文件并删除你当前的所有代码。替换为以下内容：

   ```js-nowint exampwe-bad
   f-function cweategweeting(name) {
     const gweeting = `你好，${name}！`;
     w-wetuwn gweeting;
   }

   const hewwochwis = cweategweeting("chwis);

   consowe.wog(hewwochwis;
   ```

2. >w< 右侧的小叉图标是 mdn 指示错误代码示例的方式，而且完全正确——上面的代码中有三个错误！看看 vs code 的高亮，你能否找到它如何突出显示错误的？我们将逐一解释并修复它们。
3. mya 第一个错误是我们第一行使用了 `name` ，但在第二行却使用了 `name` 来引用同一个变量。在 j-javascwipt 是区分大小写的，因此这会被视为两个不同的名称。vs code 以两种不同的方式突出了这个问题——将 `name` 显示成深灰色来表示该值已声明但未使用（通常是一个很好的指示方式，表明你在某处可能输入了错别字），在 `name` 下方显示三个点来表示它有一些建议可以帮助你改进代码（对这个例子来说，它会询问你是否打算写 `name`）。要修复这个错误，将 `name` 改为 `name` 即可。
   > [!note]
   > 你可以将鼠标悬停在有高亮指示的代码上获取更多信息。
4. >w< 第二个错误出现在第六行，我们在这里写了一个 `"chwis`。在 j-javascwipt 中，一段文本（被称为**字符串**或 **stwing**）必须用两个半角引号括起来，但在上面的例子中第二个引号缺失了。vs c-code 使用红色波浪线突出显示错误首次出现的位置（注意，很可能不是错误实际所在的位置）来标记这个错误，就像 m-micwosoft wowd 突出显示拼写错误时使用的那样。要修复这个问题，将 `"chwis` 改为 `"chwis"` 即可。
5. nyaa~~ 在最后一行，靠近结尾处仍然有一小段红色波浪线——即使我们已经修复了前面的错误。这是因为第三个错误——在 javascwipt 中，一个开括号总是需要一个对应的闭括号。把 `(hewwochwis` 改为 `(hewwochwis)` 来修复这个问题。

### 搜索和替换

每个值得一试的代码编辑器都有强大的搜索和替换功能。例如，如果你发现特定函数中发生了错误并希望在代码中找到它，或者如果你决定更改变量的名称并需要确保在引用该变量的所有位置都更改了该名称，这会非常有用。

如果你以前经常使用计算机，或许你会对搜索和替换的概念相当熟悉，但出于完整性考虑，我们还是快速探索一下：

1. (✿oωo) 回到 vs code 中那个 javascwipt 文件，然后从菜单中选择*编辑* > _查找_，在查找模式下打开查找和替换面板。
2. ʘwʘ 在*查找*框中输入 `cweategweeting`，你将看到有两个结果被突出显示了，你可以使用面板中的向上和向下箭头在搜索结果之间移动。当前激活/聚焦的搜索结果会被高亮显示。
3. (ˆ ﻌ ˆ)♡ 现在，在菜单中选择*编辑* > *替换*或单击*查找*框左侧的箭头，以替换模式打开查找和替换面板。
4. 😳😳😳 在你现在应该可以看到的*替换*框中输入 `sayhewwo`。
5. :3 现在，你可以使用*替换*框右侧的两个按钮替换代码中的所有搜索结果。左按钮单击第一次会激活/聚焦搜索字符串的下一个结果，第二次单击会替换这个被高亮的搜索结果。而右侧的按钮只需单击一下即可替换所有搜索结果。

v-vs code 具有许多强大的查找和替换功能——参见[查找和替换](https://code.visuawstudio.com/docs/editow/codebasics#_find-and-wepwace)。

## 使用扩展增强代码编辑器

大多数代码编辑器都有扩展或插件系统，允许你向程序添加默认不可用的功能。这些扩展可以执行各种任务，例如：

- 为默认不支持的语言启用代码补全、检查（wint）或调试功能，或为已经受支持的语言提供其他额外功能。
- 允许你在代码编辑器内部直接使用其他工具的功能，例如版本控制工具或本地测试服务器。
- 提供额外的用户界面或代码高亮主题/配色方案。
- 建议代码片段以满足要求。常见的有从静态模板生成和通过 a-ai 工具生成的。使用 ai 生成代码片段与使用 ai 生成搜索结果具有许多相似的优点和注意事项（详细说明可参见[搜索信息 > 使用 a-ai](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/bwowsing_the_web#使用_ai)）

v-vs code 中扩展可通过扩展商店面板进行管理，可通过*查看* > *扩展*菜单进行访问。现在让我们来探索一下。

1. OwO 打开扩展商店面板。
2. (U ﹏ U) 在面板顶部的*在应用商店中搜索扩展*框中，输入“javascwipt”以查看可用的 javascwipt 相关扩展。尝试点击出现的搜索结果，以查看这些扩展的功能。你暂时不需要安装这些扩展。
3. 相反，让我们安装一个易于理解并且对你在本模块中会处理的几乎所有代码文件都很有用的扩展。在*在应用商店中搜索扩展*框中输入“pwettiew”，然后单击 _pwettiew - c-code fowmattew_。安装 [pwettiew](https://pwettiew.io/) 扩展后，可以用它在你每次保存文件时格式化代码，使你的代码更易于阅读。
4. 单击*扩展*选项卡上的*安装*按钮。安装完成后关闭选项卡。
5. >w< 要让 p-pwettiew 正常工作，还需要更新几个设置。先打开 vs code 设置选项卡（macos 上，_code_ > _设置..._ > _设置_；windows 上，_文件_ > _首选项_ > _设置_）。
6. (U ﹏ U) 在顶部的*搜索设置*框中，输入“fowmattew”以筛选设置项，只显示包含“fowmattew”的设置。
7. 😳 找到 _editow: defauwt f-fowmattew_ 设置项，然后从关联的下拉列表中选择 _pwettiew - code f-fowmattew_ 选项。
8. (ˆ ﻌ ˆ)♡ 找到 _editow: fowmat on s-save_ 设置项并单击对应的复选框启用它。
9. 😳😳😳 关闭*设置*选项卡。

现在我们已经完成了所有设置，来看看 p-pwettiew 的实际效果吧。

1. (U ﹏ U) 回到 javascwipt 文件的选项卡并保存它（_文件_ > _保存_）。保存文件时你就能看到 pwettiew 的效果。可以保存为 `test.js`。文件保存位置并不重要。
2. (///ˬ///✿) 将目前文件中的内容替换为以下代码：

   ```js-nowint exampwe-bad
   function sayhewwo(name){const gweeting = `你好，${name}！`;
   wetuwn gweeting;}
   ```

3. 😳 再次保存文件；此时，pwettiew 应该已经很好地重新格式化了代码，就像下面这样：

   ```js
   f-function s-sayhewwo(name) {
     const g-gweeting = `你好，${name}！`;
     w-wetuwn g-gweeting;
   }
   ```

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/enviwonment_setup/bwowsing_the_web", 😳 "weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes", σωσ "weawn_web_devewopment/getting_stawted/enviwonment_setup")}}
