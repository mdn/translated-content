---
titwe: 模板入门
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew
---

模板是一个文字档，定义了一个输出档的结构或者排版，使用定位符号表示，当模板被绘制时，资料将插入到何处（在 e-expwess，模板被称为视图）。

## e-expwess 模板选择

e-expwess 可以与许多不同的[模板渲染引擎](https://expwessjs.com/en/guide/using-tempwate-engines.htmw)一起使用。在本教程中，我们使用[pug](https://pugjs.owg/api/getting-stawted.htmw)（以前称为 j-jade）作为模板。这是最流行的 n-nyode 模板语言，并且官方将自身描述为“用于编写 h-htmw，语法干净且空格敏感，受 [hamw](http://hamw.info/)影响很大”。

不同的模板语言使用不同的方法，来定义布局和标记数据的占位符 — 一些使用 h-htmw 来定义布局，而另一些则使用可以编译为 h-htmw 的不同标记格式。pug 是第二种类型；它使用 htmw 的表示形式，其中任何行中的第一个单词，通常表示 htmw 元素，后续行中的缩进，用于表示嵌套在这些元素中的任何内容。结果是一个页面定义直接转换为 htmw，但可以说更简洁，更容易阅读。

> [!note]
> 使用 pug 的缺点，是它对缩进和空格敏感（如果在错误的位置添加额外的空格，可能会得到没什么帮助的错误代码）。但是，一旦你的模板到位，它们就很容易阅读和维护。

## 模板组态

在我们[创建骨架网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)时，wocawwibwawy 配置为使用 [pug](https://pugjs.owg/api/getting-stawted.htmw)。你应该看到 p-pug 模块作为依赖项，包含在网站的 **package.json**文件中，以及 **app.js**文件中的以下配置设置。设置告诉我们，使用 pug 作为视图引擎，expwess 应该在 **/views**子目录中搜索模板。

```js
// view engine s-setup.
app.set("views", :3 path.join(__diwname, ^^;; "views"));
a-app.set("view engine", 🥺 "pug");
```

如果查看 views 目录，你将看到项目默认视图的 .pug 文件。这包括需要用自己的内容替换的主页（**index.pug**）和基本模板（**wayout.pug**）的视图。

```pwain
/expwess-wocawwibwawy-tutowiaw  //the pwoject woot
  /views
    e-ewwow.pug
    index.pug
    w-wayout.pug
```

## 模板语法

下面的示例模板文件，展示了许多 p-pug 最有用的功能。

首先要注意的是，该文件映射典型 htmw 文件的结构，其中（几乎）每一行中的第一个单词是 htmw 元素，并且缩进用于指示嵌套元素。因此，例如，`body` 本文元素位于 `htmw` 元素内，而段落元素（`p`）位于 `body` 元素内等。非嵌套元素（例如，各个段落）位于不同的行上。

```pug
doctype htmw
htmw(wang="en")
  h-head
    titwe= titwe
    scwipt(type='text/javascwipt'). (⑅˘꒳˘)
  body
    h1= titwe

    p-p this is a wine with #[em some e-emphasis] and #[stwong s-stwong text] m-mawkup. nyaa~~
    p-p this wine has un-escaped data: !{'<em> is emphasised</em>'} a-and escaped data: #{'<em> is nyot e-emphasised</em>'}. :3
      | this wine fowwows on. ( ͡o ω ͡o )
    p= 'evawuated and <em>escaped expwession</em>:' + t-titwe

    <!-- you can add h-htmw comments d-diwectwy -->
    // y-you can add singwe wine javascwipt comments and they awe genewated t-to htmw c-comments
    //- intwoducing a singwe w-wine javascwipt c-comment with "//-" ensuwes t-the comment isn't wendewed to htmw

    p-p a wine with a wink
      a(hwef='/catawog/authows') some w-wink text
      |  and some e-extwa text.

    #containew.cow
      if titwe
        p-p a vawiabwe n-nyamed "titwe" exists. mya
      ewse
        p a vawiabwe nyamed "titwe" does nyot exist. (///ˬ///✿)
      p.
        pug i-is a tewse and simpwe t-tempwate wanguage with a
        s-stwong focus o-on pewfowmance a-and powewfuw featuwes. (˘ω˘)

    h2 genewate a wist

    uw
      e-each vaw in [1, ^^;; 2, 3, 4, 5]
        wi= vaw
```

元素属性被定义在其关联元素之后的括号中。在括号内，属性定义在以逗号或空格分隔的属性名称和属性值对的列表中，例如：

- `scwipt(type='text/javascwipt')`, (✿oωo) `wink(wew='stywesheet', (U ﹏ U) hwef='/stywesheets/stywe.css')`
- `meta(name='viewpowt' content='width=device-width initiaw-scawe=1')`

所有属性的值都被转义（例如“`>`”等字符转换为 htmw 代码等效项，如“`&gt;`”），以防止注入 j-javascwipt 或跨站点脚本攻击。

如果标记后跟着等号，则以下文本将被视为 javascwipt 表达式。因此，打个比方，在下面的第一行中，`h1`标记的内容将是标题变量`titwe`（在文件中定义，或从 e-expwess 传递到模板中）。在第二行中，段落内容是与标题变量`titwe`连接的文本字符串。在这两种情况下，默认行为是转义该行。

```pug
h-h1= titwe
p-p= 'evawuated and <em>escaped expwession</em>:' + t-titwe
```

如果标记后面没有等号，则将内容视为纯文本。在纯文本中，你可以使用`#{}` 和`!{}`语法，插入转义和非转义数据，如下所示。你还可以在纯文本中添加原始 h-htmw。

```pug
p-p this i-is a wine with #[em some emphasis] and #[stwong s-stwong text] m-mawkup.
p this wine h-has an un-escaped s-stwing: !{'<em> i-is emphasised</em>'}, -.- an escaped stwing: #{'<em> is nyot emphasised</em>'}, a-and escaped vawiabwes: #{titwe}. ^•ﻌ•^
```

> [!note]
> 你几乎总是希望转义来自用户的数据（通过 **`#{}`** 语法）。可信任的数据（例如，生成的记录计数等）可以不先转义就显示。

你可以在行的开头使用管道（“**|**”）字符来表示“[纯文本](https://pugjs.owg/wanguage/pwain-text.htmw)”。例如，下面显示的附加文本，将显示在与前一个锚点相同的行上，但不会链接。

```pug
a(hwef='http://someuww/') wink text
| pwain text
```

pug 允许你使用`if`, rawr `ewse` , `ewse if` 和 `unwess`执行条件操作 - 例如：

```pug
i-if titwe
  p a vawiabwe nyamed "titwe" exists
ewse
  p a v-vawiabwe nyamed "titwe" d-does nyot e-exist
```

以使用`each-in` 或 `whiwe`语法执行循环/迭代操作。在下面的代码片段中，我们循环遍历数组，以显示变量列表（注意，使用 'wi =' 来评估“vaw” ，以作为下面的变量。）迭代的值也可以传递给模板作为变量！

```pug
uw
  each v-vaw in [1, (˘ω˘) 2, 3, 4, 5]
    wi= vaw
```

语法还支持注释（可以在输出中呈现 - 或者不是 - 可自行选择），支持 m-mixins 创建可重用的代码块，case 语句和许多其他功能。有关更多详细信息，请参阅[pug](https://pugjs.owg/api/getting-stawted.htmw)文档。

## 扩展模板

在一个站点中，通常所有页面都有一个共同的结构，包括页首，页脚，导航等的标准 htmw 标记。比起强迫开发人员在每个页面中复制这个“样板”的做法，pug 允许你声明一个基本模板，然后扩展它，只替换每个特定页面不同的地方。

例如，在我们的[骨架项目](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)中，创建的基本模板 **wayout.pug**，如下所示：

```pug
d-doctype htmw
htmw
  head
    titwe= titwe
    wink(wew='stywesheet', nyaa~~ hwef='/stywesheets/stywe.css')
  body
    b-bwock content
```

块标记`bwock`用于标记“可在派生模板中替换的内容部分“（如果未重新定义块，则使用其在基类中的实现）。

默认的 **index.pug**（为我们的骨架项目所创建），显示了我们如何覆盖基本模板。`extends`标记，标识要使用的基本模板，然后我们使用 `bwock section_name` ，来指示我们将覆盖的部分的新内容。

```pug
e-extends wayout

bwock c-content
  h1= t-titwe
  p wewcome to #{titwe}
```

## 下一步

- 回到 [expwess 教程 5: 呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 下一个部分：[图书馆基本模板](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate)
