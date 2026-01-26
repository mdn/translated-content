---
title: HTML 基础语法
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

在本文中，我们将介绍最基础的 HTML 知识。为了让你快速入门，本文将定义元素、属性以及你可能听过的所有其他重要术语，并解释它们在 HTML 中的作用。你将学习 HTML 元素的结构、一个典型 HTML 页面的结构，以及其他重要的基本语言特性。在此过程中，你也将有机会动手玩转 HTML！

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        安装<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">基础软件</a>，并掌握<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">处理文件的基本知识</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>HTML 元素的剖析：元素、开始标签、内容、结束标签、属性。</li>
          <li>HTML body 及其作为页面内容容器的用途。</li>
          <li>辨识<a href="/zh-CN/docs/Glossary/Void_element">空元素</a>，以及其与其他元素的区别。</li>
          <li>明白为何需要在 HTML 文档顶部声明 doctype。了解其历史缘由，但现在它在某种程度上已成为历史遗留。</li>
          <li>掌握 HTML 标签正确嵌套的规则。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 什么是 HTML？

{{glossary("HTML")}}（HyperText Markup Language，超文本标记语言）是一种*标记语言*，它告诉 Web 浏览器如何组织你访问的网页。它可以像 Web 开发者希望的那样复杂或简单。HTML 由一系列的{{glossary("Element", "元素")}}组成，你使用这些元素来包围、包装或*标记*内容的不同部分，使其以某种方式显示或运作。闭合的{{glossary("Tag", "标签")}}可以使内容成为一个连接到其他页面的超链接、将文字变为斜体等等。例如，考虑下面这行文本：

```plain
My cat is very grumpy
```

如果我们想让这段文本独立成段，我们可以用段落（{{htmlelement("p")}}）元素来包裹它：

```html
<p>My cat is very grumpy</p>
```

HTML 存在于扩展名为 `.html` 的文本文件中，这种文件被称为 **HTML 文档**，或简称**文档**。在我们之前谈论网页的地方，一个 HTML 文档包含了网页的内容并指定了其结构。

你将遇到的最常见的 HTML 文件是 `index.html`，它通常用于包含网站主页的内容。同样常见的是看到带有各自 `index.html` 的子文件夹，因此一个网站可以在不同的位置有多个索引文件。

> [!NOTE]
> HTML 中的标签不区分大小写。这意味着它们可以用大写或小写书写。例如，{{htmlelement("title")}} 标签可以写成 `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>` 等，并且都能正常工作。但是，为了保持一致性和可读性，最佳实践是所有标签都用小写书写。

## 剖析一个 HTML 元素

让我们进一步探讨一下上一节中的段落元素：

![一个示例代码片段，展示了 HTML 元素的结构。<p>My cat is very grumpy</p>。](grumpy-cat-small.png)

我们元素的结构是：

- **开始标签**（opening tag）：由元素的名称（本例中为段落的 _p_）包裹在开、闭角括号中组成。这个开始标签标志着元素开始或生效的位置。在此示例中，它位于段落文本的开始之前。
- **内容**（content）：这是元素的内容。在此示例中，就是段落的文本。
- **结束标签**（closing tag）：这与开始标签相同，只是在元素名称前包含一个正斜杠。这标志着元素的结束。忘记包含结束标签是一个常见的初学者错误，可能会产生奇特的结果。

元素是开始标签、内容和结束标签的总和。

> [!NOTE]
> 可以前往我们的学习伙伴 Scrimba 的 [HTML 标签](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN 学习伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> 资料，获取关于 HTML 标签的交互式解释。

### 创建你的第一个 HTML 元素

让我们来练习编写你自己的 HTML 元素：

1. 点击下面代码块中的“**Play**”在 MDN 代码演练场中编辑示例。
2. 用 `<em>` 和 `</em>` 标签包裹这行文本。要*打开元素*，请将开始标签 `<em>` 放在行的开头。要*关闭元素*，请将结束标签 `</em>` 放在行的末尾。这样做应该会使输出面板中渲染的文本变为斜体格式。
3. 如果你想挑战一下，可以尝试查找更多 HTML 元素并将其应用于文本示例。

如果你犯了错误，可以使用 MDN 代码演练场中的“_Reset_”按钮清除你的工作。如果你实在卡住了，可以查看代码块下方的解决方案。

```html live-sample___basic_html_1
这是我的文本。
```

{{ EmbedLiveSample('basic_html_1', "100%", 60) }}

<details>
<summary>点击这里显示解决方案</summary>

你完成后的 HTML 行应该像这样：

```html
<em>这是我的文本。</em>
```

</details>

### 嵌套元素

元素可以放置在其他元素内部。这被称为*嵌套*。如果我们想要表明我们的小猫脾气**很**暴躁，我们可以将*很*这个词用 {{htmlelement("strong")}} 元素包裹起来，这意味着这个词将以粗体的文本格式显示：

```html
<p>我们的小猫脾气<strong>很</strong>暴躁。</p>
```

嵌套有正确和错误的方式。在上面的例子中，我们先打开了 `p` 元素，然后打开了 `strong` 元素。为了正确嵌套，我们应该先关闭 `strong` 元素，然后再关闭 `p` 元素。

以下是*错误*嵌套方式的示例：

```html-nolint example-bad
<p>我们的小猫脾气<strong>很暴躁。</p></strong>
```

**标签必须以它们相互嵌套或分离的方式打开和关闭**。如果像上面的例子那样重叠，浏览器就必须猜测你的意图。这种猜测可能会导致意想不到的结果。

### 空元素

并非所有元素都遵循开始标签、内容和结束标签的模式。有些元素只包含一个标签，通常用于在文档中插入/嵌入某些东西。这类元素被称为{{glossary("void element", "空元素")}}。例如，{{htmlelement("img")}} 元素可以在页面上嵌入一个图像文件：

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox 图标" />
```

这将输出以下内容：

{{ EmbedLiveSample('空元素', 700, 300) }}

> [!NOTE]
> 在 HTML 中，没有要求在空元素的标签末尾添加 `/`，例如：`<img src="images/cat.jpg" alt="猫">`。然而，这也是一种有效的语法，当你希望你的 HTML 是有效的 XML 时，可以这样做。

## 属性

元素也可以有属性。属性看起来是这样的：

![带有“class="editor-note"”属性的段落标签](grumpy-cat-attribute-small.png)

属性包含关于元素的额外信息，这些信息不会出现在内容中。在这个例子中，**`class`** 属性是一个标识名称，用于通过样式信息来定位元素。

一个属性应该有：

- 一个在它和元素名之间的空格。（对于拥有多个属性的元素，属性之间也应该用空格分隔。）
- 属性名，后跟一个等号。
- 一个属性值，用开始和结束的引号包裹。

### 为元素添加属性

现在又轮到你了。在这一节中，我们将让你向 `<img>` 元素添加属性，以便在页面上显示一张图片。`<img>` 元素可以接受多个属性，包括：

- `src`：一个**必需**的属性，指定图像的位置。例如：`src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`。
- `alt`：图像的文本描述。例如：`alt="Firefox 图标"`。
- `width`：图像的宽度，单位为像素。例如：`width="300"`。
- `height`：图像的高度，单位为像素。例如：`height="300"`。

按照以下步骤完成任务：

1. 点击下面代码块中的“**Play**”在 MDN 代码演练场中编辑示例。
2. 在网上找到你最喜欢的图片，右键单击它，然后按*复制图片链接/地址*。
3. 回到 MDN 代码演练场，将 `src` 属性添加到 `<img>` 元素，并将其值设置为第 2 步中的链接。
4. 将 `alt` 属性设置为对图片的适当描述。
5. 将 `width` 属性设置为一个值，比如 `300`，这样你可以在输出面板中更好地看到图片。如果需要可以进行调整。

如果你犯了错误，可以使用 MDN 代码演练场中的“_Reset_”按钮清除你的工作。如果你实在卡住了，可以查看代码块下方的解决方案。

```html live-sample___basic_html_2
<img />
```

{{ EmbedLiveSample('basic_html_2', "100%", 60) }}

<details>
<summary>点击这里显示解决方案</summary>

你完成后的 HTML 元素应该像这样：

```html
<img src="<URL-OF-IMAGE>" alt="图像的描述" width="300" />
```

</details>

### 布尔属性

有时你会看到没有值的属性。这是完全可以接受的。这些被称为[布尔属性](/zh-CN/docs/Glossary/Boolean/HTML)。当一个布尔属性没有值，或有任何值（甚至像 `"false"`）时，该布尔属性总是被设置为 true。否则，如果该属性没有写在 HTML 标签中，该属性就被设置为 false。规范要求该属性的值要么是空字符串（包括属性没有明确指定值时），要么与属性的名称相同，但其他值的作用也一样。例如，考虑 [`disabled`](/zh-CN/docs/Web/HTML/Reference/Elements/input#disabled) 属性，你可以把它赋给表单输入元素。（你可以用它来*禁用*表单输入元素，这样用户就不能输入内容了。被禁用的元素通常呈现为灰色。）例如：

```html
<input type="text" disabled="disabled" />
```

作为简写，可以这样写：

```html
<!-- 使用 disabled 属性来防止终端用户输入文本到输入框中 -->
<input type="text" disabled />

<!-- 下面这个输入框不包含 disabled 属性，所以用户可以向其中输入 -->
<input type="text" />
```

作为参考，上面的例子还包括一个非禁用的表单输入元素。上面的 HTML 会产生以下结果：

{{ EmbedLiveSample('布尔属性', 700, 100) }}

### 省略属性值周围的引号

如果你查看许多其他网站的代码，你可能会遇到一些奇怪的标记样式，包括没有引号的属性值。这在某些情况下是允许的，但在其他情况下也可能破坏你的标记。下面代码片段中的 `<a>` 元素被称为锚点。锚点包裹文本，并将其变成链接。`href` 属性指定了链接指向的网址。你可以只用 `href` 属性写出这个基本版本，像这样：

```html
<a href=https://www.mozilla.org/>最喜欢的网站</a>
```

锚点也可以有一个 `title` 属性，用来描述链接的页面。然而，一旦我们像 `href` 属性一样添加 `title`，问题就来了：

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>最喜欢的网站</a>
```

如上所示，浏览器会误解标记，将 `title` 属性误认为三个属性：一个值为 `The` 的 `title` 属性，以及两个布尔属性 `Mozilla` 和 `homepage`。显然，这不是我们想要的！它会导致错误或意想不到的行为，正如你在下面的实时示例中看到的那样。试着将鼠标悬停在链接上查看标题文本！

{{ EmbedLiveSample('省略属性值周围的引号', 700, 100) }}

始终包含属性引号。这样可以避免此类问题，并使代码更具可读性。

### 单引号还是双引号？

在本文中，你会注意到属性都是用双引号包裹的。然而，你可能在某些 HTML 代码中看到单引号。这是一个风格问题。你可以随意选择你喜欢的一种。下面这两行是等效的：

```html-nolint
<a href='https://www.example.com'>一个指向示例的链接。</a>

<a href="https://www.example.com">一个指向示例的链接。</a>
```

确保不要混合使用单引号和双引号。下面的例子显示了一种会出错的引号混合使用方式：

```html-nolint example-bad
<a href="https://www.example.com'>一个指向示例的链接。</a>
```

但是，如果你使用一种类型的引号，你可以在属性值*内部*包含另一种类型的引号：

```html
<a href="https://www.example.com" title="你觉得'好玩吗'？">
  一个指向示例的链接。
</a>
```

要在相同类型的引号内使用引号（单引号或双引号），请使用{{glossary("character reference", "字符引用")}}。例如，这样做会出错：

```html-nolint example-bad
<a href="https://www.example.com" title="一个"有趣"的引用">一个指向示例的链接。</a>
```

相反，你应该这样做：

```html-nolint
<a href="https://www.example.com" title="一个&quot;有趣&quot;的引用">一个指向示例的链接。</a>
```

## 剖析 HTML 文档

单个 HTML 元素本身并不是很有用。接下来，让我们看看单个元素如何组合成一个完整的 HTML 页面：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的测试页面</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```

这里我们有：

1. `<!doctype html>`：文档类型声明（doctype）。在 HTML 早期（1991-1992 年），doctype 旨在作为一套规则的链接，HTML 页面必须遵循这些规则才能被认为是好的 HTML。过去的 doctype 看起来像这样：

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   最近，doctype 成为了一个历史遗留物，为了让其他一切正常工作而必须包含它。`<!doctype html>` 是算作有效 doctype 的最短字符序列。你只需要知道这些！

2. `<html></html>`：{{htmlelement("html")}} 元素。这个元素包裹了页面上的所有内容。它有时被称为根元素。
3. `<head></head>`：{{htmlelement("head")}} 元素。这个元素充当一个容器，用于存放你想包含在 HTML 页面中但**不向**页面浏览者显示的内容。这包括会出现在搜索结果中的关键字和页面描述、用于样式化内容的 CSS、字符集声明等等。你将在本系列的下一篇文章中学到更多相关内容。
4. `<meta charset="utf-8">`：{{htmlelement("meta")}} 元素。这个元素代表了不能由其他 HTML 元相关元素（如 {{htmlelement("base")}}、{{htmlelement("link")}}、{{htmlelement("script")}}、{{htmlelement("style")}} 或 {{htmlelement("title")}}）表示的元数据。[`charset`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#charset) 属性将你的文档的字符编码指定为 UTF-8，它包含了绝大多数人类书面语言的字符。通过这个设置，页面现在可以处理它可能包含的任何文本内容。没有理由不设置它，而且它可以帮助避免以后的一些问题。
5. `<title></title>`：{{htmlelement("title")}} 元素。它设置了页面的标题，这个标题会出现在加载该页面的浏览器标签页中。当页面被收藏为书签时，页面标题也用于描述该页面。
6. `<body></body>`：{{htmlelement("body")}} 元素。它包含了在页面上显示的*所有*内容，包括文本、图像、视频、游戏、可播放的音轨或其他任何东西。

### 为 HTML 文档添加一些特性

此时，我们希望你练习编写一些稍微丰富一点的 HTML 内容。要做到这一点，你有两个选择——你可以在本地计算机上创建 HTML，或者像前面的例子一样使用 MDN 代码演练场。

- 在本地计算机上操作：
  1. 复制上一节中列出的 HTML 页面示例，并将其粘贴到你的代码编辑器的新文件中。
  2. 按照下面的说明对页面进行更改。
  3. 将文件另存为 `index.html`，然后在新的浏览器标签页中加载它以查看结果。

  > [!NOTE]
  > 你也可以在我们的 GitHub 仓库中找到这个[基础 HTML 模板](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)。你可以复制这个文件，而不是自己创建。

- 在 MDN 代码演练场中操作，点击下面的输出面板中的“**Play**”来编辑示例，然后按照以下说明操作。如果你犯了错误，可以使用 MDN 代码演练场中的“_Reset_”按钮清除你的工作。

```html hidden live-sample___basic_html_3
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的测试页面</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```

{{ EmbedLiveSample('basic_html_3', "100%", 60) }}

以下是要遵循的说明：

1. 在 {{htmlelement("body")}} 元素的开始标签正下方，为文档添加一个主标题。这应该被包裹在 `<h1>` 开始标签和 `</h1>` 结束标签内。
2. 编辑段落内容，使其包含一些你感兴趣的话题的文本。
3. 通过将重要的词语包裹在 {{htmlelement("strong")}} 元素内，使其以粗体突出显示。
4. 在你的段落中添加两个链接。这是通过使用 {{htmlelement("a")}} 元素实现的。
5. 在你的文档中添加一张图片，如[本文前面所述](#为元素添加属性)。将其放在段落下方。如果图片太大看不清，可以给它添加一个 `width` 属性来缩小它。

如果你真的卡住了，可以在这里查看解决方案：

<details>
<summary>点击这里显示解决方案</summary>

你完成的 HTML 元素 body 的内容应该看起来像这样：

```html
<h1>一些音乐</h1>
<p>
  我非常喜欢<strong>打鼓</strong>。我最喜欢的鼓手之一是 Neal Peart，他曾在<a
    href="https://zh.wikipedia.org/wiki/匆促樂團"
    >匆促乐团</a
  >中演奏。我最喜欢的匆促乐团专辑目前是
  <a href="https://www.deezer.com/album/942295">Moving Pictures</a>。
</p>
<img
  src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg"
  alt="匆促乐团 Moving Pictures 专辑封面"
  width="300" />
```

</details>

### HTML 中的空白

在上面的例子中，你可能注意到代码中包含了很多空白。这是可选的。这两个代码片段是等效的：

```html-nolint
<p id="noWhitespace">狗狗很 呆 萌。</p>

<p id="whitespace">狗狗很
    呆
        萌。</p>
```

无论你在 HTML 元素内容中使用了多少空白（可以包括一个或多个空格字符，也包括换行），HTML 解析器在渲染代码时都会将每个空白序列减少为单个空格。那么为什么要使用这么多空白呢？答案是可读性。

如果你的代码格式整齐，就更容易理解代码中发生了什么。在我们的 HTML 中，每个嵌套的元素都比它所在的元素多缩进两个空格。选择什么样的格式化风格（例如，每个缩进级别使用多少空格）由你决定，但你应该考虑格式化它。

让我们看看浏览器如何渲染上面带有和不带空白的两个段落：

{{ EmbedLiveSample('HTML 中的空白', 700, 100) }}

> [!NOTE]
> 从 JavaScript 访问元素的 [innerHTML](/zh-CN/docs/Web/API/Element/innerHTML) 将保留所有空白。
> 如果浏览器修剪了空白，这可能会返回意想不到的结果。

```js
const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "狗狗很 呆 萌。"

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "狗狗很
//     呆
//         萌。"
```

## 字符引用：在 HTML 中包含特殊字符

在 HTML 中，字符 `<`、`>`、`"`、`'` 和 `&` 是特殊字符。它们是 HTML 语法本身的一部分。那么你如何在文本中包含这些特殊字符之一呢？例如，如果你想使用一个与号或小于号，而不是让它被解释为代码。

你需要使用{{glossary("character reference", "字符引用")}}。这些是代表字符的特殊代码，用于在这些确切的情况下使用。每个字符引用都以一个与号（&）开始，并以一个分号（;）结束。

| 字面字符 | 字符引用等效项 |
| -------- | -------------- |
| <        | `&lt;`         |
| >        | `&gt;`         |
| "        | `&quot;`       |
| '        | `&apos;`       |
| &        | `&amp;`        |

字符引用的等效项可以很容易记住，因为它使用的文本可以看作是 `&lt;` 对应“less than（小于）”，`&quot;` 对应“quotation（引语）”，其他类似。要查找更多关于实体引用的信息，请参见 [XML 和 HTML 字符实体引用列表](https://zh.wikipedia.org/wiki/XML与HTML字符实体引用列表)（维基百科）。

在下面的示例中，有两个段落：

```html-nolint
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

在下面的实时输出中，你可以看到第一段出错了。浏览器将第二个 `<p>` 实例解释为开始一个新段落。第二段看起来很好，因为它用字符引用替换了尖括号。

{{ EmbedLiveSample('字符引用：在 HTML 中包含特殊字符', 700, 200) }}

> [!NOTE]
> 你不需要为任何其他符号使用实体引用，只要你的 HTML [字符编码设置为 UTF-8](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#指定文档中的字符编码)，现代浏览器就能很好地处理实际的符号。

## HTML 注释

HTML 有一种在代码中写注释的机制。浏览器会忽略注释，实际上使用户看不到注释。注释的目的是让你在代码中包含注释，以解释你的逻辑或编码。如果你在离开很长时间后回到一个代码库，以至于你不能完全记住它，这就非常有用。同样，当不同的人在进行修改和更新时，注释也是非常宝贵的。

要编写 HTML 注释，请将其包裹在特殊标记 `<!--` 和 `-->` 中。例如：

```html
<p>我不在注释里</p>

<!-- <p>但我在注释里</p> -->
```

如下所示，只有第一个段落显示在实时输出中。

{{ EmbedLiveSample('HTML 注释', 700, 100) }}

## 总结

你已经读完了整篇文章！我们希望你喜欢这次 HTML 基础知识之旅。

此时，你应该理解了 HTML 是什么样子的，以及它在基本层面上的工作原理。你也应该能够编写一些元素和属性。本模块的后续文章将更深入地探讨这里介绍的一些主题，并介绍该语言的其他概念。

- 当你开始学习更多关于 HTML 的知识时，可以考虑学习 CSS（层叠样式表）的基础知识。[CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 是用于设置网页样式的语言，例如更改字体、颜色或改变页面布局。HTML 和 CSS 配合得很好，你很快就会发现。

## 参见

- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
