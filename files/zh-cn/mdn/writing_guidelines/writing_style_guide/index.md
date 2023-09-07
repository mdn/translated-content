---
title: 文档写作规范
slug: MDN/Writing_guidelines/Writing_style_guide
---

{{MDNSidebar}}

本篇写作风格指南描述了 MDN Web 文档上的内容应该如何书写、组织、拼写和格式化。

这些指南是为了确保整个网站的语言和风格的一致性。也就是说，我们对内容而不是格式更感兴趣，所以不必在为 MDN Web 文档贡献前学习整个写作风格指南。然而，如果其他贡献者后来编辑你的作品以符合该指南，请不要感到不安或惊讶。当你提交内容拉取请求时，审稿人也可能将你指向这个风格指南。

> **备注：** 本指南的语言方面主要适用于英语文档。其他语言可能有（并且欢迎创建）他们自己的风格指南。这些应该作为各自的本地化团队页面的子页面发布。然而，在格式化和组织内容时，仍应参考本指南。

> **备注：** 简体中文翻译时的规范请参见《[简体中文翻译指南](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md)》，当然“简体中文翻译指南”仅列出了常见的规范，这份文档较为详细一点，在翻译时，参考一些相关内容也是有益的。

在列出一般的写作准则后，本指南介绍了 MDN Web 文档的推荐写作风格，然后介绍了如何对页面上的不同组件进行格式化，如列表和标题。

## 通用的写作准则

我们的目标是写出包括读者可能需要的所有信息的页面，以了解手头的主题。

以下各小节提供了实现这一目标的建议：

- [考虑你的目标受众](#考虑你的目标受众)
- [考虑写作的“3C”准则](#考虑写作的“3c”准则)
- [包含相关的示例](#包含相关的示例)
- [提供描述性的介绍](#提供描述性的介绍)
- [使用包容性语言](#使用包容性语言)
- [写作时要带有 SEO 意识](#写作时要带有_seo_意识)

### 考虑你的目标受众

牢记你所写内容的目标受众。例如，一个关于高级网络技术的页面可能不需要像典型的网络页面那样详细介绍基本的网络概念。请记住，这些是指导方针。其中一些提示不一定适用于每一种情况。

### 考虑写作的“3C”准则

好文章的“3C”准则是指清晰性（clearly）、简洁性（concisely）和一致性（consistently）。

- **清晰性**：确保你的行文清晰而简单。一般来说，使用主动语态和不含糊的代词。写短句子，每句坚持一个观点。在使用新的术语之前，要对其进行定义，保持目标受众。
- **简洁性**：在撰写任何文档时，知道该说多少是很重要的。如果你提供了过多的细节，页面就会变得乏味难读，而且很少会被使用。
- **一致性**：确保你在整个页面和多个页面中一致地使用相同的措辞。

### 包含相关的示例

一般来说，添加例子或现实生活中的场景，以更好地解释你所写的内容。这有助于读者以更具体和实用的方式理解概念性和程序性信息。

你应该用例子来说明每个参数的用途，并澄清可能存在的任何边缘情况。你也可以用例子来演示常见任务的解决方案和可能出现的问题的解决方案。

### 提供描述性的介绍

确保在第一个标题之前的开篇一段（几段）充分概括了该页将涵盖的信息，以及读者在浏览完内容后可能会取得的成果。这样，读者就能迅速确定该页是否与他们关注的问题和期望的学习成果有关。

在指南或教程中，介绍性段落应该告诉读者将涵盖的主题，以及读者应该具备的先决知识（如果有的话）。开头一段应该提到正在记录或讨论的技术和/或 API，并提供相关信息的链接，还应该对文章内容可能有用的情况提供提示。

- **过于简短的简介示例**：下面这个例子中的简介太过于简短，很多信息都没有包含进来，比如“stroke”文本意味着什么，文本会在哪里等。

  > **`CanvasRenderingContext2D.strokeText()`** draws a string.

- **过于冗长的简介示例**：下面是上面那个简介的修改版，但是这次它又太过冗长了。其中包含了过多的细节，并且还包含了很多其他方法和属性，但实际上它应该将重点聚焦在 `strokeText()` 方法上，然后给出详细介绍它的文章的链接即可。

  > When called, the Canvas 2D API method **`CanvasRenderingContext2D.strokeText()`** strokes the characters in the specified string beginning at the coordinates specified, using the current pen color.
  > In the terminology of computer graphics, "stroking" text means to draw the outlines of the glyphs in the string without filling in the contents of each character with color.
  >
  > The text is drawn using the context's current font as specified in the context's {{domxref("CanvasRenderingContext2D.font", "font")}} property.
  >
  > The placement of the text relative to the specified coordinates are determined by the context's `textAlign`, `textBaseline`, and `direction` properties.
  > `textAlign` controls the placement of the string relative to the X coordinate specified; if the value is `"center"`, then the string is drawn starting at `x - (stringWidth / 2)`, placing the specified X-coordinate in the middle of the string.
  > If the value is `"left"`, the string is drawn starting at the specified value of `x`.
  > And if `textAlign` is `"right"`, the text is drawn such that it ends at the specified X-coordinate.
  >
  > (…)
  >
  > You can, optionally, provide a fourth parameter that lets you specify a maximum width for the string, in pixels.
  > If you provide this parameter, the text is compressed horizontally or scaled (or otherwise adjusted) to fit inside a space that wide when being drawn.
  >
  > You can call the **`fillText()`** method to draw a string's characters as filled with color instead of only drawing the outlines of the characters.

- **合适的介绍简介示例**：在这里，我们看到一个更好的 `strokeText()` 方法的概述。

  > The {{domxref("CanvasRenderingContext2D")}} method **`strokeText()`**, part of the [Canvas 2D API](/zh-CN/docs/Web/API/Canvas_API), strokes (draws the outlines of) the characters of a specified string, anchored at the position indicated by the given X and Y coordinates.
  > The text is drawn using the context's current {{domxref("CanvasRenderingContext2D.font", "font")}}, and is justified and aligned according to the {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, and {{domxref("CanvasRenderingContext2D.direction", "direction")}} properties.
  >
  > For more details and examples, see the [Text](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text) section on the Drawing graphics page as well as our main article on the subject, [Drawing text](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### 使用包容性语言

MDN 拥有广泛而多样化的受众。我们强烈建议尽可能保持文本的包容性。以下是文档中使用的常用术语的一些替代方案：

- 不使用“**master**”和“**slave**”，而使用“**main**”和“**replica**”
- 不使用“**whitelist**”和“**blacklist**”，而使用“**allowlist**”和“**denylist**”
- 不使用“**Sanity**”而使用“**coherence**”
- 不使用“**dummy**”而使用“**placeholder**”
- 不要在文档中使用“**crazy**”和“**insane**”，如果真的需要的话，考虑使用“**fantastic**”代替

在任何性别无关的场合使用性别中立的表述方式是一种比较好的做法，这样可以使你的文章具有普适性。举个例子，如果你正在写的是关于某个男人的行为，那么使用“he”或“his”来指代是没问题的；但如果内容并没有特指是男还是女，那么再使用“he”或“his”就不太恰当了。

让我们再看几个例子：

- **错误**：A confirmation dialog appears, asking the user if he allows the Web page to make use of his Web cam.
- **错误**：A confirmation dialog appears, asking the user if she allows the Web page to make use of her Web cam.

这两句话使用的都是特定性别的表述方式，我们可以将其修改为性别中立的代词：

- **正确**：A confirmation dialog appears, asking the user if they allow the Web page to make use of their Web cam.

> **备注：** MDN 允许在这里使用第三人称复数，也就是通常所说的“[单数形式的‘they’](https://zh.wikipedia.org/wiki/单数they)”。中性代名词包括：“they”、“them”、“their”和“theirs”。

或者使用复数形式的“users”：

- **正确**：A confirmation dialog appears, asking the users if they allow the web page to make use of their web cams.

当然，最好的方法还是重写句子，去掉其中的代词：

- **正确**：A confirmation dialog appears, requesting the user's permission for web cam access.
- **正确**：A confirmation dialog box appears, which asks the user for permission to use the web cam.

最后一种方法可能更好一些，因为它不但语法上更加正确，而且还能消除不同语言处理性别问题时所带来的复杂性，因为不同语言对性别的处理可能有不同的规则。因此这种方法无论是对读者（译注：意为阅读英语原文的非英语读者）还是翻译人员来说都可以让翻译更简单。

### 写作时要带有 SEO 意识

虽然 MDN Web 文档上的任何写作的主要目标应该始终是解释和告知开放的 web 技术，以便开发人员能够迅速学会做他们想做的事情，或者找到他们需要知道的小细节，以完善他们的代码，但重要的是，他们能够*找到*我们写的材料。我们可以通过在写作时牢记搜索引擎优化（{{Glossary("SEO")}}）来实现这一点。

本节涵盖了内容的标准做法、建议和要求，以帮助确保搜索引擎能够轻松地对我们的材料进行分类和索引，以确保用户能够轻松地达到他们所需要的内容。搜索引擎优化指南包括确保作家和编辑工作的每一个页面都有合理的设计、编写和标记，以便给搜索引擎提供它们所需的背景和线索，从而正确地对文章进行索引。

在编写和审查内容时，以下的检查表是很好的选择，以帮助确保页面及其相邻的内容能被搜索引擎正确索引：

- **确保页面不会太相似**：如果不同页面上的内容在文字上相似，搜索引擎就会认为这些页面是关于同一事物的，即使它们实际上不是。例如，如果一个界面有 `width` 和 `height` 两个属性，那么记录这两个属性的两个页面上的文字很容易惊人地相似，只是换了几个词，用了同一个例子。这使得搜索引擎很难知道哪个是哪个，而且它们最终会共享页面排名，导致这两个页面比预期更难找到。

  那么，确保每一个页面都有自己的内容是很重要的。这里有一些建议可以帮助你实现这一目标：

  - **解释更多独特的概念**：考虑那些可能比人们想象的有更多差异的使用案例。例如，在编写 `width` 和 `height` 属性的文档时，也许可以写出水平空间和垂直空间的不同使用方式，并提供关于适当概念的讨论。也许你可以提到在为侧边栏腾出空间方面使用 `width`，而使用 `height` 来处理垂直滚动或页脚。包括关于无障碍问题的信息也是一个有用的、重要的想法。
  - **使用不同的例子**：这些情况下的例子往往比正文更相似，因为例子可能一开始就使用了两个（或全部）相似的方法或属性，因此在重复使用时不需要真正的改变。所以扔掉这个例子，写一个新的，或者至少提供多个例子，其中至少有一些是不同的。
  - **为例子增加描述**：既要概述例子的作用，又要涵盖它是如何工作的，考虑到主题的复杂性和目标受众，要有适当的详细程度。

  如果时间允许，避免过于相似的最简单方法当然是从头开始写每一篇文章。

- **确保页面不会太短**：如果一个页面上的内容太少（在 SEO 术语中称为“薄页（thin page）”），搜索引擎将不会对这种页面进行准确的分类。内容过短的页面很难找到。作为一个指导原则，确保 MDN Web 文档上的页面内容不少于 300 字左右。不要人为地撑满一个页面，但在可能的情况下，将这一准则作为一个最小的目标长度。

  这里有一些基本准则，可以帮助你创建有足够内容的页面，使其可以正常搜索，而不至于用不必要的文字把它们弄得很乱：

  - **避免占位符**：很明显，如果文章存在占位符或缺少内容，请补充上相应的内容。我们尽量避免在 MDN Web 文档上出现直接的“占位符”页面，尽管它们确实存在，但有很多页面缺少大量的内容。
  - **审查页面结构**：审查页面以确保它的结构对于[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)来说是正确的。要确保它应该有的每一节都存在，并有适当的内容。
  - **确保完整性**：审查各节以确保没有遗漏任何信息。确保所有的参数都被列出并解释。确保涵盖任何例外情况——这是一个特别常见的内容缺失的地方。
  - **确保所有的概念都得到充实**：对某件事进行快速解释很容易，但要确保涵盖所有的细微差别。是否有特殊情况？是否有读者可能需要了解的任何已知限制？
  - **增加例子**：应该有涵盖所有参数或至少是初级到中级用户可能使用的参数（或属性）的例子，以及任何需要额外解释的高级参数。每个例子前面都应该有一个概述，说明这个例子将做什么，理解它可能需要哪些额外的知识，等等。在例子之后（或穿插在例子的各个部分）应该有解释代码如何工作的文字。不要吝啬例子中的细节和对错误的处理。请记住，用户会复制和粘贴你的例子在他们自己的项目中使用，而你的代码也会在生产网站上使用！请参阅我们的[代码范例指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)以获得更多有用的信息。
  - **解释用例**：如果所描述的功能有特别常见的用例，那就谈一谈吧！而不是假设用户会在使用过程中出现问题！与其假设用户会发现被记录的方法可以用来解决一个常见的开发问题，不如实际添加一个关于该用例的部分，并提供一个例子和解释该例子如何工作的文字。
  - **添加图片信息**：在所有的图像和图表上包括适当的 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 文本。这个文本，以及表格和其他数字的标题，都是重要的，因为网络蜘蛛不能抓取图像，所以 `alt` 文本告诉搜索引擎爬虫嵌入式媒体包含哪些内容。
    > **备注：** 不建议包含过多的关键词或与功能无关的关键词，以试图操纵搜索引擎的排名；这种类型的行为很容易被发现，而且往往会受到惩罚。同样，**不要**在实际页面内添加重复的、无益的材料或大量的关键词，以试图提高页面的大小和搜索排名。这对内容的可读性和我们的搜索结果来说都是弊大于利。
  - **专注于主题内容**：随着谷歌在 2013 年的 Hummingbird 更新，人们越来越关注使用自然语言来传达信息。这意味着，围绕页面的主题来写内容要比围绕特定的关键词好得多。对于一个给定的主题，你极有可能包括许多关键词；事实上，许多 SEO 编制了一个 5-100 个不同关键词的清单（在短、中、长尾关键词之间变化），以包括在他们的文章中，这取决于长度。这样做会使你的措辞多样化，从而减少重复。

## 写作风格

除了用英语写出语法正确的句子外，我们建议你遵循这些准则，以保持 MDN Web 文档的内容一致。

- [缩写和缩略语](#缩写和缩略语)
- [大写](#大写)
- [口头缩略](#口头缩略)
- [数字与数词](#数字与数词)
- [复数形式](#复数形式)
- [撇号和引号](#撇号和引号)
- [逗号](#逗号)
- [连字符](#连字符)
- [拼写形式](#拼写形式)
- [术语](#术语)
- [语态](#语态)

### 缩写和缩略语

缩写是一个较长单词的缩短版本，而首字母缩写是使用短语中每个单词的第一个字母创造的新单词。本节介绍了缩写和首字母缩写的准则。

- **扩展形式**：在页面中第一次提到一个术语时，要展开用户可能不熟悉的缩略语。如果有疑问，就展开它——或者更好的是，把它链接到描述该技术的文章或[术语表](/zh-CN/docs/Glossary)条目。

  - **正确**："XUL (XML User Interface Language) is Mozilla's XML-based language..."
  - **错误**："XUL is Mozilla's XML-based language..."

- **大写形式及句点：** 在这两种缩写中（包括国家和组织的缩写，如“US”、“UN”），请使用全大写且不要添加句号。

  - **正确**：XUL
  - **错误**：X.U.L.; Xul

- **拉丁文缩写**：你可以在括号内的表达和注释中使用常见的拉丁文缩写（如 etc.、i.e.、e.g.）。在这些缩写中使用句号，后面是逗号或其他适当的标点符号。

  - **正确**：Web browsers (e.g., Firefox) can be used ...
  - **错误**：Web browsers e.g. Firefox can be used ...
  - **错误**：Web browsers, e.g. Firefox, can be used ...
  - **错误**：Web browsers, (eg: Firefox) can be used ...

  在普通的句子中（也就是注记文字或括号的外面），请使用与拉丁文缩写等价的英文单词或短语。

  - **正确**：... web browsers, and so on.
  - **错误**：... web browsers, etc.

  - **正确**：Web browsers such as Firefox can be used ...
  - **错误**：Web browsers e.g. Firefox can be used ...

  以下表格总结了拉丁文缩写的含义和英文对应关系：

  | 缩写形式 | 拉丁文           | 英语含义                |
  | -------- | ---------------- | ----------------------- |
  | cf.      | _confer_         | compare                 |
  | e.g.     | _exempli gratia_ | for example             |
  | et al.   | _et alii_        | and others              |
  | etc.     | _et cetera_      | and so forth, and so on |
  | i.e.     | _id est_         | that is, in other words |
  | N.B.     | _nota bene_      | note well               |
  | P.S.     | _post scriptum_  | postscript              |

  > **备注：** 在使用前请仔细思考使用拉丁文缩写是否真的能带来好处。上面列出的某些缩写很少用到，很多读者可能不知道其意思，还有一些读者可能会分不清其中的某些缩写。
  >
  > 另外，如果你决定使用缩写，那么请确保*你*的用法是正确的。比如，一个很多人经常会犯的错误是将“e.g.”和“i.e.”弄混。

- **缩写和缩略语的复数形式**：当需要使用复数形式的缩写或缩略语时，直接在后面加上 _s_ 即可，请务必不要加撇号。

  - **正确**：CD-ROMs
  - **错误**：CD-ROM's

- **“Versus”、“vs.”和“v.”**：如果使用缩略语，“vs.”比“v.”更好，可以在标题中使用。在文本的其他地方，使用全拼形式“versus”。

  - **正确**：this vs. that
  - **错误**：this v. that
  - **错误**：this versus that

### 大写

在文章内容中请使用标准英文大写规则，比如对于“World Wide Web”需大写每个单词的首字母。如果“web”和“internet”是单独使用或作为修饰词使用，那么将其全小写也可以。

> **备注：** 这一指导原则是后来修改过的，所以在 MDN 中你也许会看到很多首字母大写的“Web”和“Internet”。当你编辑文章的时候遇到这种情况，可以随它去，也可以随手修改一下。但是仅仅只是为了修改一下大写的话就没必要专门去编辑一下了。

对于键盘按键，应该使用普通的大写规则，而不是全大写。比如，是“<kbd>Enter</kbd>”而不是“<kbd>ENTER</kbd>”。不过你可以使用“<kbd>ESC</kbd>”作为“<kbd>EScape</kbd>”的缩写。

某些单词应始终大写（例如商标中的大写字母），或源自某人姓名的单词（除非它在代码中使用，并且代码的语法要求小写）。以下是一些例子：

- Boolean（其源自英国数学家和逻辑学家的姓名 [George Boole](https://zh.wikipedia.org/wiki/乔治·布尔)）
- JavaScript（甲骨文公司的商标，应始终写成商标的样式）
- Python、TypeScript、Django 以及其他编程语言和框架名称

### 口头缩略

我们倾向于宽松的写作风格，所以你可以按你的喜好来决定是否使用简写（如“don't”、“can't”、“shouldn't”）。

### 数字和数词

- **逗号**：应该仅在数字的位数大于等于 5 位时才使用逗号分隔符：

  - **正确**：4000、54,000
  - **错误**：4,000、54000

- **日期**：请用“January 1, 1990”这样的形式来表达日期（不包括代码示例中的日期）。

  - **正确**：February 24, 1906
  - **错误**：February 24th, 1906、24 February, 1906、24/02/1906

  或者你也可以使用“YYYY/MM/DD”的形式：

  - **正确**：1906/02/24
  - **错误**：02/24/1906、24/02/1906、02/24/06

- **年代**：请使用“1990s”这种形式来表示年代，但不要使用撇号：

  - **正确**：1920s
  - **错误**：1920's

- **数词的复数**：数词的复数直接在后面加“s”，同样不要使用撇号：

  - **正确**：486s
  - **错误**：486's

### 复数形式

请使用英语风格的复数形式，不要使用拉丁文或希腊文的形式。

- **正确**：syllabuses、octopuses
- **错误**：syllabi、octopi

### 撇号和引号

不要使用弯引号。在 MDN Web 文档中，我们只使用直角引号和直角撇号。这是因为我们需要选择一个或另一个来保证一致性。如果大括号或撇号进入代码片段，甚至是内联的代码片段，读者可能会复制和粘贴它们，期望它们能发挥作用（其实不会）。

- **正确**：Please don't use "curly quotes."
- **错误**：Please don’t use “curly quotes.”

> **备注：** 中文与英文的使用习惯是不同的，在翻译时，应该遵循[简体中文翻译指南 - 标点符号](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md#标点符号)中的有关说明。

### 逗号

下面的列表描述了一些我们需要注意逗号使用规则的常见情况：

- **在介绍性从句后**：引导句是一个从属句，通常出现在一个句子的开头。在引导句后使用逗号，将其与后面的独立句分开。

  - 示例 1：
    - **正确**："In this example, you will see how to use a comma."
    - **错误**："In this example you will see how to use a comma."
  - 示例 2:
    - **正确**："If you are looking for guidelines, you have come to the right place."
    - **错误**："If you are looking for guidelines you have come to the right place."
  - 示例 3：
    - **正确**："On mobile platforms, you tend to get a numeric keypad for entering data."
    - **错误**："On mobile platforms you tend to get a numeric keypad for entering data."

- **在连接词之前**：串行逗号（也称为“牛津逗号”）是指在三个或更多项目的系列中出现在连词前的逗号。在 MDN Web 文档上，我们使用串行逗号。逗号还可以分隔列表中的每个项目。

  - **正确**：I will travel on trains, planes, and automobiles.
  - **错误**：I will travel on trains, planes and automobiles.

  在包含两个项目的列表中，不要在“and”或“or”之前使用逗号。

  - **正确**："My dog is cute and smart."
  - **错误**："My dog is cute, and smart."

  如果连词“and”、“but”和“or”连接两个独立分句，则在其前面使用逗号。但是，如果句子在连词的作用下变得很长或很复杂，可以考虑将其改写成两个句子。

  - 示例 1：
    - **正确**："You can perform this step, but you need to pay attention to the file setting."
    - **错误**："You can perform this step but you need to pay attention to the file setting."
  - 示例 2：
    - **正确**："My father is strict but loving."
    - **错误**："My father is strict, but loving."

  > **备注：** 这种情况在翻译成简体中文时应将逗号翻译为顿号。“简体中文翻译指南”一文的[标点符号](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md#标点符号)”一节中也提到了这个问题。

- **在“that”和“which”之前：** 限制性从句对句子的意义至关重要，不需要用逗号将其与其余句子隔开。限制性从句通常由“that”引入，**不应**在其前面加逗号。

  - **正确**："We have put together a course that includes all the essential information you need to work towards your goal."
  - **错误**："We have put together a course, that includes all the essential information you need to work towards your goal."

  非限制性从句提供额外的信息，对句子的意思不是至关重要的。非限制性从句通常由“which”引入，前面应加一个逗号。

  - **正确**："You write a policy, which is an allowed list of origins for each feature."
  - **错误**："You write a policy which is an allowed list of origins for each feature."

- **在“such as”之前**：如果“such as”是一个非限制性从句的一部分，而剩下的句子是一个独立的从句，在“such as”前使用逗号。

  - **正确：** "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **错误：** "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  下面的例子显示了什么时候不能用逗号与“such as”搭配。在这里，包含“such as”的句子对句子的意义至关重要。

  - **正确**："Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **错误**："Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### 连字符

当两个单词连起来组成另一个单词时，如果前一个单词的最后一个字母是元音字母，并且与后一个单词的第一个字母相同时，应使用连字符。

- **正确**：re-elect、co-op、email
- **错误**：reelect、coop、e&#45;mail

### 拼写形式

请使用美式英语拼写。

一般来说，使用 [Dictionary.com](https://www.dictionary.com/) 中的第一个条目，除非该条目被列为变体拼写或主要用于非美国形式的英语中。例如，如果你[查找“behaviour”一词](https://www.dictionary.com/browse/behaviour)（在美式英语基础上增加了一个字母 _u_），你会发现“Chiefly British”（通常是英式英语）这个短语，后面还有一个链接到美式英语标准形式，[“behavior”](https://www.dictionary.com/browse/behavior)的链接。不要使用变体拼写。

- **正确**：localize、behavior、color
- **错误**：localise、behaviour、colour

### 术语

- **HTML 元素**：请使用“element”来表示 HTML 和 XML 元素，不要使用“tag”。另外，请在元素名称两边使用尖括号“<>”括起来，并使用 {{HTMLElement("code")}} 样式。

  当文章中第一次出现某个元素的时候，应该用 [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) 宏创建一个指向该元素文档的链接（除非你正在撰写的恰好是该元素的文档页面）。

  - **正确**：{{HTMLElement("span")}} element
  - **错误**：span tag

- **Parameters 和 arguments**：MDN Web 文档上推荐使用 **parameters** 术语，为了保持一致性，如果可能的话请尽量避免使用“arguments”。

- **用户界面操作**：在说明一系列操作步骤时，应使用祈使语气来描述用户的操作，并用 UI 组件的名称和其元素类型来标识操作对象。

  - **正确**："Click the Edit button."
  - **错误**："Click Edit."

### 语态

推荐使用主动语态，但被动语态也可以接受，只是可能会让文章看起来不太正式。建议选择一种并在文章中尽量保持统一。

## 页面部件

本节列出了通常出现在页面上的标题、注释、链接和示例等组件应遵循的准则。

- [代码示例](#代码示例)
- [外部链接](#外部链接)
- [短链接](#短链接)
- [标题级别](#标题级别)
- [图片及其他媒体](#图片及其他媒体)
- [列表](#列表)
- [“参见”部分](#“参见”部分)
- [子页面](#子页面)
- [路径名](#路径名)
- [标题](#标题)

### 代码示例

MDN Web 文档上的一个页面可以包含一个以上的代码示例。以下列表介绍了为 MDN Web 文档编写代码范例时的一些推荐做法：

- 每一段示例代码应包括：
  - **标题**：一个简短的 `###`（`<h3>`）标题，用来描述通过代码实例演示的情景。例如，“Using offset printing”和“Reverting to style in previous layer”。
  - **描述**：在示例代码前的简短描述，说明你想引起读者注意的示例的具体内容。例如，“In the example below, two cascade layers are defined in the CSS, `base` and `special`.”。
  - **结果解释**：在示例代码之后的解释，描述结果和代码的工作原理。
- 一般来说，代码示例不仅要展示该功能的语法和使用方法，而且要强调 web 开发人员可能想要或需要使用该功能的目的和情况。
- 如果你正在处理一大段示例代码，把它分解成较小的逻辑部分，以便对它们进行单独描述，这可能是有意义的。
- 在添加[实时演示](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)时，注意到包含样本的区域中的所有 {{HTMLElement("pre")}} 块在运行样本前都被串联起来，这让你可以将任何或所有的 HTML、CSS 和 JavaScript 分成多个片段，每个片段可以选择有自己的描述、标题等。这使得撰写代码文档的功能非常强大和灵活。

要了解如何为 MDN Web 文档的代码示例设置样式或格式，请参见[代码示例样式指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)。

### 外部链接

在特定情况下，MDN Web 文档上允许有外部链接。使用本节描述的准则来决定是否可以在 MDN Web 文档上包括一个外部链接。如果你的添加外部链接的拉取请求不符合这里描述的准则，它将被拒绝。

一般来说，如果你考虑增加一个外部链接，你需要确保以下风险最小：

- 破损或过时的链接
- 出现背书，特别是商业产品或服务的背书
- 试图利用 MDN Web 文档来传播垃圾信息
- 混淆链接目的地的短链接

> **备注：** 在添加外部链接之前，考虑在 MDN Web 文档内交叉引用内容。内部链接更容易维护，并使整个 MDN Web 文档对读者更有价值。

- **良好的外部链接**：好的外部链接能把读者带到相关的、持久的、被广泛信任的资源。你应该更倾向于添加链接到以下的外部内容：

  - 独特或不可缺少的（例如，IETF RFC）。
  - 对归属、引用或鸣谢是必要的（例如，作为知识共享署名的一部分）
  - 比起将这些内容纳入 MDN Web 文档本身，更有可能对该主题进行维护（例如，供应商的发布说明）。
  - 开源或社区驱动，就像 MDN Web 文档本身一样

- **糟糕的外部链接**：糟糕的外部链接缺乏相关性、可维护性、无障碍性，或者给读者带来障碍。避免添加指向外部内容的链接：

  - 通用的或不具体的（例如，一个供应商的主页，而不是相关的文档）。
  - 短暂的或未维护的（例如，一次性的公告）
  - 自我链接或自我宣传（例如，作者在 MDN Web 文档之外的自己的工作）。
  - 付费（例如，一个昂贵的课程，超出了业余爱好者、学生或生活在低收入国家的读者的承受能力）
  - 无障碍性差（例如，一个没有字幕的视频）

- **自我宣传或垃圾链接**：虽然个人博客文章、会议演讲或 GitHub 资源库有价值，但链接到你自己的资源会造成利益冲突的表象。在链接到与你有商业或个人联系的资源之前，请三思而行。

  > **备注：** 如果你与链接的目标有商业或个人关系，你必须在你的拉取请求中披露这种关系。如果不这样做，可能会危及你继续参与 MDN Web 文档的工作。

  有时，这种链接是相关的和适当的。例如，如果你是一个规范的编辑，并且你正在贡献与该规范相关的文档，那么链接到该规范是可以预期和接受的。但你必须披露你和该链接之间的关系。

### 短链接

URL 缩短器（如 TinyURL 或 Bitly）可以很好地将长链接缩短为小的、更容易记住的 URL（也称为“短链接”）。然而，它们也混淆了 URL 的目的地址。此外，在某些缩短器中，目的地址可以在创建后被改变，这一功能可能被用于恶意目的。

不要使用通过第三方（用户生成的）URL 缩短器创建的链接。例如，如果 `https://myshort.link/foobar` 是一个由随机用户生成的短网址，并重定向到 `https://example.com/somelongURL/details/show?page_id=foobar`，则使用较长的 `example.com` 网址。

另一方面，鼓励使用由同时维护目标 URL 的组织所维护的第一方缩短器。`https://bugzil.la` 是由 Mozilla 拥有和运营的，是一个重定向到 `https://bugzilla.mozilla.org/` 的 URL 缩短器，这也是 Mozilla 拥有的一个域名。在这种情况下，使用较短的 URL。例如，使用 `https://bugzil.la/1682349` 而不是 `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`。

### 标题级别

当一个新的段落开始一个新的章节时，应该添加一个标题。

在不跳级的情况下，按照递减的顺序使用这些 markdown 标记级别：`##`，然后是 `###`，然后是 `####`；这些分别翻译成 [HTML 标题标签](/zh-CN/docs/Web/HTML/Element/Heading_Elements)的 `<h2>`、`<h3>` 和 `<h4>` 标签。

`##` 是允许的最高级别，因为 `#` 是保留给页面标题的。我们建议不要添加超过三层的标题。如果你觉得有必要添加第四层标题，可以考虑将文章分成几个小的文章，并设置一个着陆页。或者，看看你是否可以用无序列表的方式来呈现信息，以避免添加第四级标题。

在创建分节的标题时，请记住以下注意事项：

- **不要创建只包含一个小节的子级别**。如果只有一个小节，那么拆分主题就是没有意义的。至少包含两个小节，要么就不要拆分。
- **不要在标题中使用内联样式、类或宏调用**。然而你可以使用反引号指示代码术语（例如“Using `FooBar` interface”）。
- **不要让两个小节标题紧挨在一起**。这是标题后面紧跟着一个副标题，中间没有内容文字的情况，看起来很丑。每个小节标题的下面至少要放上一段对后面各子小节的简短说明，这会对阅读的人很有帮助。

### 图片及其他媒体

如果要在一个页面上包括图像或其他媒体，请遵循以下准则：

- 确保媒体许可证允许你使用它们。尽量使用具有非常宽松许可的媒体，如 [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) 或至少与我们的一般内容许可兼容的媒体——[知识共享署名——相同方式共享许可](https://creativecommons.org/licenses/by-sa/2.5/)（CC-BY-SA）。
- 对于图片，请使用 <https://tinypng.com> 或 <https://imageoptim.com> 工具处理它们，以减少页面的大小。
- 对于 `SVG`，通过 [SVGOMG](https://jakearchibald.github.io/svgomg/) 运行代码，并确保 `SVG` 文件在文件末尾有一个空行。

### 列表

列表的格式应该在所有文章中保持一致，并且应在列表中恰当使用标点和结构合理的句子。不管是哪种类型的列表，都需要对格式进行适当的调整。下面的内容说明了每种列表之间的不同。

- **无序列表**：应使用无序列表来分组相关的简明信息。列表中的每个项目都应遵循类似的句子结构。项目符号列表中的句子和短语（即缺少动词或主语或两者的句子片段）应包括标准的标点符号——句子以句号结束，短语则没有。

  如果一个列表项中有多个句子，则每个句子的末尾必须有一个句号，包括该项目最后一个句子，就像段落中所期望的那样。这是一个结构正确的项目列表的例子：

  > In this example, we should include:
  >
  > - A condition, with a brief explanation.
  > - A similar condition, with a brief explanation.
  > - Yet another condition, with some further explanation.

  注意相同的句子结构是如何从一个项目符号到另一个项目符号重复出现的。在这个例子中，每个圆点都说明了一个条件，然后是一个逗号和一个简短的解释，列表中的每个项目都以句号结束。

  如果列表中的项目包括不完整的句子，则不需要在末尾加上句号。比如说：

  > The following color-related properties will be helpful in this scenario:
  >
  > - propertyA: Sets the background color
  > - propertyB: Adds shadow to text

  如果一个或多个列表项是完整的句子，在每个列表项后都使用句号，即使一个列表项包含三个或更少的单词。然而，尽可能对一个列表中的所有项目采用相同的结构；确保所有列表项目都是完整的句子或短语。

- **有序列表**：有序列表主要用于列举一套指令中的步骤。因为指示可能很复杂，所以清晰是首要任务，特别是当每个列表中的文字很冗长时。与无序列表一样，要遵循标准的标点符号用法。这是一个结构正确的有序列表的例子：

  > In order to correctly structure a numbered list, you should:
  >
  > 1. Open with a heading or brief paragraph to introduce the instructions. It's important to provide the user with context before beginning the instructions.
  > 2. Start creating your instructions, and keep each step in its own numbered item.
  >    Your instructions may be quite extensive, so it is important to write clearly and use correct punctuation.
  > 3. After you have finished your instructions, follow the numbered list with a brief closing summary or explanation about the expected outcome upon completion.

  下面是为上述清单写结尾解释的例子：

  > We have created a short numbered list that provides instructive steps to produce a numbered list with the correct formatting.

  请注意有序列表中的项目如何像简短的段落一样阅读。因为有序列表通常用于教学目的或引导人们完成一个有序的程序，所以要确保每个项目都有重点：每个步骤有一个编号的项目。

### “参见”部分

MDN Web 文档上的大多数指南、参考页、甚至词汇表页都在文章的结尾处包含一个*参见*部分。这是一个参考部分，包含了 MDN 内相关主题的交叉引用，有时还包含了相关外部文章的链接。例如，这是 `@layer` 页面的[“参见”部分](/zh-CN/docs/Web/CSS/@layer#参见)。

一般来说，在“参见”部分的链接以[项目符号列表](#列表)格式呈现，列表中的每一项都是一个短语。然而，在 MDN 的[学习网页开发](/zh-CN/docs/Learn)区域，“参见”部分遵循[定义列表](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#定义列表)格式。

为了保持整个 MDN Web 文档的一致性，在添加或更新“参见”部分时，请记住以下准则。

#### 链接文字

- 链接文本应与被链接的页面或章节的标题相同。例如，这个 [ARIA](/zh-CN/docs/Web/Accessibility/ARIA/Attributes) 页面的链接文本将是：
  - **正确**：[ARIA 状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)
- 在链接文本中使用句子大小写，即使它与链接的页面标题或章节标题不同。这可能是页面或章节标题中使用的大小写不正确。例如，[WAI-ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)页面的链接文本将是：
  - **正确**：[WAI-ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
- 对于外部链接也要使用句子的大小写，即使目标文章页面上的大小写不同。这是为了确保整个 MDN Web 文档的一致性。例外情况包括书籍的名称。
- 使用适当的宏来链接到[参考文档页面](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#链接到_mdn_的参考文档页面)。使用宏将为链接文本中的关键词添加代码格式，如前面的例子所示。
- 链接列表项的开头不需要冠词（"A"、"An"、"The"）。链接文本后不需要标点符号，因为它必然是一个术语或一个短语。
  - **正确**：{{cssxref("revert-layer")}}。
  - **错误**：{{cssxref("revert-layer")}} 关键词。

#### 描述性文字

- 保持链接周围的描述性文字尽量少。如果有描述，就在链接文本和冒号之后添加。把描述写成一个短语，没有结尾的标点符号。将所有的链接文本放在开头，有助于粗读链接列表。
  - **正确**：{{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS selectors for styling checkboxes
- 不要在系列的最后一个项目前使用连词“and”。
  - **正确**：{{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Other color-related properties
- 在外部链接和源网站之后，在括号内提及文章发表的日期或年份。使用“January 1, 1900”的格式来指定日期。出版日期不仅有助于告知读者所链接内容的相关性，而且还有助于作者审查那些非常古老的链接。例如，要链接到 [Top-level await](https://v8.dev/features/top-level-await) 的外部文章，参照会这样书写：
  - [Top-level await](https://v8.dev/features/top-level-await) on v8.dev (October 8, 2019)

#### 链接顺序

- 对于 MDN 内部的交叉引用，首先列出参考页的链接，然后是相关指南和教程页的链接。
- 如果列表是内部和外部链接的混合，先列出内部链接，再列出外部链接。
- 在每组内部和外部链接中，按照字母顺序或从简单到高级的顺序，无论哪种顺序对上下文都更有意义。

### 子页面

当你需要添加一些关于某个主题或专题领域的文章时，你通常会通过创建一个着陆页，然后为每篇单独的文章添加子页面来实现。着陆页应该用一两段话来描述该主题或技术，然后提供一个子页面的列表，并对每个页面进行描述。你可以使用我们创建的一些宏来自动将页面插入列表中。

例如，[JavaScript](/zh-CN/docs/Web/JavaScript) 指南的结构如下：

- [JavaScript/指南](/zh-CN/docs/Web/JavaScript/Guide)——主目录页
- [JavaScript/指南/JavaScript 概述](/zh-CN/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/指南/函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/指南/对象模型的细节](/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

尽量避免把文章内容放置在层次结构的顶层，这会降低网站的访问速度，同时搜索和导航的效率也会下降。

### 路径名

显示在页面顶部的页面标题可以与页面路径名不同，后者是页面 URL 中 `<locale>/docs/` 之后的部分。在定义路径名时，请记住以下准则：

- 路径名应该保持简短。当创建一个新的层次结构时，路径名中的新层次成分应该只是一两个单词。
- 路径名应使用下划线来表示多字组件，例如 `/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started` 中的 `Getting_started`。
- 在其中的每一个部分也要遵循句子的大小写，如前面例子中的 `Getting_started`。

### 标题

页面标题在搜索结果中使用，也用于在页面顶部的面包屑列表中构建页面层次。页面标题可以不同于页面的路径名，这一点在[路径名](#路径名)部分有解释。

在撰写标题时，请牢记以下准则：

- **大写风格**：在 MDN Web 文档中，页面标题和章节标题应使用分句式大写（仅大写第一个单词和专有名词），而不是标题式大写：

  - **正确**："A new method for creating JavaScript rollovers"
  - **错误**："A New Method for Creating JavaScript Rollovers"

  我们还有很多旧的页面是在这条规范确立之前就已经发布了的。所以只要你愿意，你随时可以更新它们的标题。我们也正在逐步完善它们。

- **通用原则**：决定你要记录什么，以及你将如何组织这些内容，是写作的第一步。写一个目录可以帮助你决定如何安排信息。先介绍简单的概念，然后再介绍更复杂和高级的概念。先讲概念性的信息，然后再讲面向行动的主题。

  在为页面和章节或分节撰写标题时，请牢记以下准则：

  - **由浅入深**：如[标题级别](#标题级别)部分所述，从较高的 `##` 到较低的 `####` 排布内容，中间不要跳级。使用较高层次的标题作为广泛的介绍性标题，并在进入较低层次的标题时使用更具体的标题。
  - **按逻辑分组**：确保所有相关的小节都在一个较高层次的标题下有逻辑地组合在一起。命名各部分的标题可以帮助你完成这项工作。
  - **保持标题简短**：较短的标题更容易在文本和目录中粗读。
  - **保持标题具体**：使用标题来表达本节将涉及的具体信息。例如，对于介绍 HTML 元素的章节，使用标题“HTML 元素”，而不是“介绍”或“概述”。
  - **保持标题的重点**：使用标题来表达一个目标——该部分将涉及的一个想法或概念。为此，尽可能不要在标题中使用连词“and”。
  - **使用平行结构**：在同一标题层次上，使用类似的语言作为标题。例如，如果一个 `###` 标题级别的标题使用动名词，即以“-ing”结尾的词，如“Installing”，那么尽量将该标题级别的所有标题都使用动名词。如果一个标题以祈使动词开头，如“Use”、“Configure”，那么该标题层的所有标题都以祈使动词开头。
  - **避免在较低层次的标题中使用普通术语**：不要在下级标题中重复上级标题中的文字。例如，在一个标题为“Commas”的章节中，将一个小节的标题命名为“After introductory clauses”，而不是“Commas after introductory clauses”。
  - **不要以冠词开头**：避免以冠词“a”、“an”或“the”开始标题。
  - **添加引导性信息**：在标题之后，添加一些介绍性的文字，解释该部分将涉及的内容。

## 其他参考资料

### 其他样式指南

如果你在撰写过程中或在格式方面遇到了本文尚未提及的问题，我们建议你参考[微软的风格指南](https://docs.microsoft.com/zh-cn/style-guide)，如果还是不能解决问题，还可参考[芝加哥格式指南](https://www.chicagomanualofstyle.org)，网络上有一份非官方的 [PDF 版本](https://faculty.cascadia.edu/cma/HIST148/cmscrib.pdf)。

### 语言、语法和拼写

如果你对提高写作和编辑能力感兴趣，下面的资料会对你有所帮助：

- [更好的写作](https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction/dp/0060891548)（Amazon），作者 William Zinsser
- [清晰与优雅的格式基础](https://www.amazon.com/Style-Basics-Clarity-Grace-4th/dp/0205830765/)（Amazon），作者 Joseph Williams 和 Gregory Colomb
- [使用英文时的常见错误](https://brians.wsu.edu/common-errors-in-english-usage/)
- [英语语法 FAQ](https://www-personal.umich.edu/~jlawler/aue.html)
- [Bob 的撇号快速指南，你个笨蛋](https://www.angryflower.com/bobsqu.gif)（这很有趣）
- [Merriam-Webster 的简明英语用法词典](https://www.amazon.com/Merriam-Websters-Concise-Dictionary-English-Usage/dp/B004L2KNI2)（Amazon），虽是学术著作但很容易理解，基于实际例子并给出解释，对非英语国家的人很有帮助，特别是介词的使用方面。
- [StackExchange 网站的英语子站](http://english.stackexchange.com/)，关于英语使用的问答网站。
