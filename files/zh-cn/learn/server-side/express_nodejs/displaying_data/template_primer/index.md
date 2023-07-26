---
title: 模板入门
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
---

模板是一个文字档，定义了一个输出档的结构或者排版，使用定位符号表示，当模板被绘制时，资料将插入到何处（在 Express，模板被称为视图）。

## Express 模板选择

Express 可以与许多不同的[模板渲染引擎](https://expressjs.com/en/guide/using-template-engines.html)一起使用。在本教程中，我们使用[Pug](https://pugjs.org/api/getting-started.html)（以前称为 Jade）作为模板。这是最流行的 Node 模板语言，并且官方将自身描述为“用于编写 HTML，语法干净且空格敏感，受 [Haml](http://haml.info/)影响很大”。

不同的模板语言使用不同的方法，来定义布局和标记数据的占位符 — 一些使用 HTML 来定义布局，而另一些则使用可以编译为 HTML 的不同标记格式。Pug 是第二种类型；它使用 HTML 的表示形式，其中任何行中的第一个单词，通常表示 HTML 元素，后续行中的缩进，用于表示嵌套在这些元素中的任何内容。结果是一个页面定义直接转换为 HTML，但可以说更简洁，更容易阅读。

> **备注：** 使用 Pug 的缺点，是它对缩进和空格敏感（如果在错误的位置添加额外的空格，可能会得到没什么帮助的错误代码）。但是，一旦您的模板到位，它们就很容易阅读和维护。

## 模板组态

在我们[创建骨架网站](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website)时，LocalLibrary 配置为使用 [Pug](https://pugjs.org/api/getting-started.html)。您应该看到 Pug 模块作为依赖项，包含在网站的 **package.json**文件中，以及 **app.js**文件中的以下配置设置。设置告诉我们，使用 Pug 作为视图引擎，Express 应该在 **/views**子目录中搜索模板。

```js
// View engine setup.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

如果查看 views 目录，您将看到项目默认视图的 .pug 文件。这包括需要用自己的内容替换的主页（**index.pug**）和基本模板（**layout.pug**）的视图。

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## 模板语法

下面的示例模板文件，展示了许多 Pug 最有用的功能。

首先要注意的是，该文件映射典型 HTML 文件的结构，其中（几乎）每一行中的第一个单词是 HTML 元素，并且缩进用于指示嵌套元素。因此，例如，`body` 本文元素位于 `html` 元素内，而段落元素（`p`）位于 `body` 元素内等。非嵌套元素（例如，各个段落）位于不同的行上。

```pug
doctype html
html(lang="en")
  head
    title= title
    script(type='text/javascript').
  body
    h1= title

    p This is a line with #[em some emphasis] and #[strong strong text] markup.
    p This line has un-escaped data: !{'<em> is emphasised</em>'} and escaped data: #{'<em> is not emphasised</em>'}.
      | This line follows on.
    p= 'Evaluated and <em>escaped expression</em>:' + title

    <!-- You can add HTML comments directly -->
    // You can add single line JavaScript comments and they are generated to HTML comments
    //- Introducing a single line JavaScript comment with "//-" ensures the comment isn't rendered to HTML

    p A line with a link
      a(href='/catalog/authors') Some link text
      |  and some extra text.

    #container.col
      if title
        p A variable named "title" exists.
      else
        p A variable named "title" does not exist.
      p.
        Pug is a terse and simple template language with a
        strong focus on performance and powerful features.

    h2 Generate a list

    ul
      each val in [1, 2, 3, 4, 5]
        li= val
```

元素属性被定义在其关联元素之后的括号中。在括号内，属性定义在以逗号或空格分隔的属性名称和属性值对的列表中，例如：

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

所有属性的值都被转义（例如“`>`”等字符转换为 HTML 代码等效项，如“`&gt;`”），以防止注入 JavaScript 或跨站点脚本攻击。

如果标记后跟着等号，则以下文本将被视为 JavaScript 表达式。因此，打个比方，在下面的第一行中，`h1`标记的内容将是标题变量`title`（在文件中定义，或从 Express 传递到模板中）。在第二行中，段落内容是与标题变量`title`连接的文本字符串。在这两种情况下，默认行为是转义该行。

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

如果标记后面没有等号，则将内容视为纯文本。在纯文本中，您可以使用`#{}` 和`!{}`语法，插入转义和非转义数据，如下所示。您还可以在纯文本中添加原始 HTML。

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasised</em>'}, an escaped string: #{'<em> is not emphasised</em>'}, and escaped variables: #{title}.
```

> **备注：** 您几乎总是希望转义来自用户的数据（通过 **`#{}`** 语法）。可信任的数据（例如，生成的记录计数等）可以不先转义就显示。

您可以在行的开头使用管道（“**|**”）字符来表示“[纯文本](https://pugjs.org/language/plain-text.html)”。例如，下面显示的附加文本，将显示在与前一个锚点相同的行上，但不会链接。

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug 允许您使用`if`, `else` , `else if` 和 `unless`执行条件操作 - 例如：

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

以使用`each-in` 或 `while`语法执行循环/迭代操作。在下面的代码片段中，我们循环遍历数组，以显示变量列表（注意，使用 'li =' 来评估“val” ，以作为下面的变量。）迭代的值也可以传递给模板作为变量！

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

语法还支持注释（可以在输出中呈现 - 或者不是 - 可自行选择），支持 mixins 创建可重用的代码块，case 语句和许多其他功能。有关更多详细信息，请参阅[Pug](https://pugjs.org/api/getting-started.html)文档。

## 扩展模板

在一个站点中，通常所有页面都有一个共同的结构，包括页首，页脚，导航等的标准 HTML 标记。比起强迫开发人员在每个页面中复制这个“样板”的做法，Pug 允许你声明一个基本模板，然后扩展它，只替换每个特定页面不同的地方。

例如，在我们的[骨架项目](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website)中，创建的基本模板 **layout.pug**，如下所示：

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

块标记`block`用于标记“可在派生模板中替换的内容部分“（如果未重新定义块，则使用其在基类中的实现）。

默认的 **index.pug**（为我们的骨架项目所创建），显示了我们如何覆盖基本模板。`extends`标记，标识要使用的基本模板，然后我们使用 `block section_name` ，来指示我们将覆盖的部分的新内容。

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下一个部分：[图书馆基本模板](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
