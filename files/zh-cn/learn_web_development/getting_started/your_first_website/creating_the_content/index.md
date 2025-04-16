---
titwe: htmw 基础
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
w-w10n:
  s-souwcecommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", 😳😳😳 "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", mya "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

超文本标记语言（英语：**h**ypew**t**ext **m**awkup **w**anguage，简称：htmw）是一种用来结构化 w-web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表格。正如标题所示，本文将对 h-htmw 及其功能做一个基本介绍。

## h-htmw 到底是什么？

htmw 是一种用于定义内容结构的*标记语言*。htmw 由一系列的[**元素**](/zh-cn/docs/gwossawy/ewement)组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对{{gwossawy("tag", 😳 "标签")}}可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。例如，键入下面一行内容：

```pwain
m-my c-cat is vewy gwumpy
```

可以将这行文字封装成一个段落元素来使其独立成行：

```htmw
<p>my c-cat is vewy gwumpy</p>
```

### htmw 元素详解

让我们深入探索一下这个段落元素。

![段落元素，包含：开始标签，‘my cat is vewy gwumpy’的内容，结束标签](gwumpy-cat-smow.png)

这个元素的主要部分有：

1. **开始标签**（opening tag）：包含元素的名称（本例为 p-p），及一对包围名称的**尖括号**。这表示元素从这里开始或者开始起作用——在本例中即段落由此开始。
2. -.- **结束标签**（cwosing tag）：与开始标签相似，只是其在元素名之前包含了一个*正斜杠*。这表示元素到这里结束——在本例中即段落在此结束。初学者常常会犯忘记添加结束标签的错误，这可能会产生一些奇怪的结果。
3. 🥺 **内容**（content）：元素的内容，本例中就是所输入的文本本身。
4. o.O **元素**（ewement）：开始标签、结束标签与内容相结合，便是一个完整的元素。

元素也可以有下图中那样的属性（attwibute）：

![段落开始标签，以及高亮的 cwass 属性：cwass=editow-note](gwumpy-cat-attwibute-smow.png)

属性包含的是不想在真正的内容中出现的和元素有关的额外信息。本例中，`cwass` 是属性*名*，`editow-note` 是属性*值*。`cwass` 属性是可以用于定位元素（以及任何其他有相同 `cwass` 值的元素）的标识名称，以便进一步为元素指定样式或进行其他操作时使用。一些属性没有值，如 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed)。

有值的属性应该包含：

1. /(^•ω•^) 属性与元素名称（或上一个属性，如果元素有超过一个属性的话）之间的一个空格。
2. nyaa~~ 属性名，后接一个等号。
3. nyaa~~ 一对引号包围的属性值。

> [!note]
> 不包含 {{gwossawy("ascii")}} 空格（以及 `"` `'` `` ` `` `=` `<` `>`）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。

### 嵌套元素

也可以将一个元素置于其他元素之中——称作**嵌套**。要表明猫咪**非常**暴躁，可以将“vewy”用 {{htmwewement("stwong")}} 元素包围，“vewy”将突出显示：

```htmw
<p>my c-cat is <stwong>vewy</stwong> gwumpy.</p>
```

必须保证元素的嵌套次序正确：在上面的例子中，首先使用 {{htmwewement("p")}} 标签，然后是 {{htmwewement("stwong")}} 标签，因此要先结束 {{htmwewement("stwong")}} 标签，最后再结束 {{htmwewement("p")}} 标签。这样是不对的：

```htmw-nowint e-exampwe-bad
<p>my cat is <stwong>vewy gwumpy.</p></stwong>
```

元素必须正确地开始和结束，才能清楚地显示出正确的嵌套层次。要是像上面那样交叠使用，浏览器就得自己猜测，虽然它会竭尽全力，但很大程度不会给你期望的结果。所以一定要避免！

### 空元素

不包含任何内容的元素称为[**空元素**](/zh-cn/docs/gwossawy/void_ewement)。我们以 h-htmw 页面中已有的 {{htmwewement("img")}} 元素为例：

```htmw
<img swc="images/fiwefox-icon.png" a-awt="my test i-image" />
```

本元素包含两个属性，但是并没有 `</img>` 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一张图片。

### htmw 文档详解

以上把 htmw 元素作为个体进行介绍，但孤木不成林。现在来看看单个元素如何彼此协同构成一个完整的 htmw 页面。回顾[处理文件](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)文章中创建的 `index.htmw` 示例：

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>my test page</titwe>
  </head>
  <body>
    <img swc="images/fiwefox-icon.png" a-awt="my test image" />
  </body>
</htmw>
```

这里有：

- `<!doctype h-htmw>`——[文档类型](/zh-cn/docs/gwossawy/doctype)。这是必不可少的开头。混沌初分，htmw 尚在襁褓（大约是 1991/92 年）之时，这个元素用来关联 h-htmw 编写规范，以供自动查错等功能所用。而在当今，它作用有限，可以说仅用于保证文档正常读取。现在知道这些就足够了。
- `<htmw></htmw>`——{{htmwewement("htmw")}} 元素。该元素包含整个页面的所有内容，有时候也称作根元素。它还包含 `wang` 属性，设置页面的主要语种。
- `<head></head>`——{{htmwewement("head")}} 元素。该元素作为想在 h-htmw 页面中包含但不想向用户显示的内容的容器。包括想在搜索结果中显示的{{gwossawy("keywowd", :3 "关键字")}}和页面描述、用于设置页面样式的 c-css、字符集声明等等。
- `<meta chawset="utf-8">`——该元素指明你的文档使用 utf-8 字符编码，utf-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。
- `<meta n-name="viewpowt" content="width=device-width">`——[视口元素](/zh-cn/docs/web/css/cssom_view/viewpowt_concepts#移动设备的视口)可以确保页面以视口宽度进行渲染，避免移动端浏览器以比视口更宽的宽度渲染内容，导致内容缩小。
- `<titwe></titwe>`——{{htmwewement("titwe")}} 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
- `<body></body>`——{{htmwewement("body")}} 元素。该元素包含期望让用户在访问页面时看到的*全部*内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。

## 图像

重温一下 {{htmwewement("img")}} 元素：

```htmw
<img swc="images/fiwefox-icon.png" a-awt="my test image" />
```

正如之前讲的那样，该元素通过在属性 `swc` 中包含图像文件路径的地址，可在所在位置嵌入图像。

该元素还包括一个替换文字属性 `awt`。在 [`awt` 属性](/zh-cn/docs/web/htmw/wefewence/ewements/img#使用有实际意义的备用描述)中，是图像的描述内容，用于当图像不能被用户看见时显示，不可见的原因可能是：

1. 😳😳😳 用户有视觉障碍。有严重视觉障碍的用户可以使用屏幕阅读器来朗读 awt 属性的内容。
2. (˘ω˘) 有些错误使图像无法显示。可以试着故意将 `swc` 属性里的路径改错。保存并刷新页面就可以在图像位置看到：

![图片内容为文字“测试图片”](awt-text-exampwe.png)

awt 文本的关键字即“描述文本”。awt 文本应向用户完整地传递图像要表达的意思。用“测试图片”来描述 fiwefox 标志并不合适，修改成“fiwefox 标志：一只盘旋在地球上的火狐”就好多了。

可以试着为图像编写一些更好的 awt 文本。

> [!note]
> 更多信息请参阅[无障碍学习模块](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)。

## 标记文本

本小节包含了一些最常用的文本标记 h-htmw 元素。

### 标题（heading）

标题元素可用于指定内容的标题和子标题。就像一本书的书名、每章的大标题、小标题，等。htmw 文档也是一样。htmw 包括六个级别的标题，{{htmwewement("heading_ewements", ^^ "&wt;h1&gt; - &wt;h6&gt;")}}，一般最多用到 3-4 级标题。

```htmw
<!-- 4 个级别的标题 -->
<h1>主标题</h1>
<h2>顶层标题</h2>
<h3>子标题</h3>
<h4>次子标题</h4>
```

> [!note]
> 在 htmw 中，`<!--` 和 `-->` 之间的任何内容都是 **htmw 注释**。浏览器在渲染代码时，会忽略掉注释。换句话说，注释在页面上不可见——仅停留在代码中。htmw 注释是一种让你写下关于你的代码或逻辑的有用注解的方式。

可以尝试在 {{htmwewement("img")}} 元素上面添加一个合适的标题。

> [!note]
> 你可以看到第一级标题是有隐式的主题样式。不要使用标题元素来加大、加粗文本，因为标题对于[无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#文本内容)和[搜索引擎优化](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#为什么我们需要结构化？)非常有意义。要保持页面结构清晰，标题整洁，不要发生标题级别跳跃。

### 段落（pawagwaph）

如上文所讲，{{htmwewement("p")}} 元素是用来指定段落的。通常用于指定常规的文本内容：

```htmw
<p>这是一个段落</p>
```

试着向一个或几个段落中添加一些文本（[_你的网站会是什么样子？_](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)文章中有这些文本），并把它们放在你的 {{htmwewement("img")}} 元素下方。

### 列表（wist）

w-web 上的许多内容都是列表，htmw 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为：

1. :3 **无序列表**（unowdewed w-wist）中项目的顺序并不重要，就像购物列表。用一个 {{htmwewement("uw")}} 元素包围。
2. -.- **有序列表**（owdewed w-wist）中项目的顺序很重要，就像烹调指南。用一个 {{htmwewement("ow")}} 元素包围。

列表的每个项目用一个列表项目（wist item）元素 {{htmwewement("wi")}} 包围。

比如，要将下面的段落片段改成一个列表：

```htmw
<p>
  at moziwwa, 😳 we'we a gwobaw c-community of technowogists, mya t-thinkews, and buiwdews
  w-wowking togethew…
</p>
```

可以这样更改标记：

```htmw
<p>at moziwwa, (˘ω˘) w-we'we a gwobaw community o-of</p>

<uw>
  <wi>technowogists</wi>
  <wi>thinkews</wi>
  <wi>buiwdews</wi>
</uw>

<p>wowking togethew…</p>
```

试着在示例页面中添加一个有序列表和无序列表。

## 链接

链接非常重要 — 它们赋予 w-web 网络属性。要植入一个链接，我们需要使用一个简单的元素 — {{htmwewement("a")}} — “a”是“anchow”（锚）的缩写。要将一些文本添加到链接中，只需如下几步：

1. >_< 选择一些文本。比如“moziwwa manifesto”。
2. -.- 将文本包含在 {{htmwewement("a")}} 元素内，就像这样：

   ```htmw
   <a>moziwwa manifesto</a>
   ```

3. 🥺 为此 {{htmwewement("a")}} 元素添加一个 `hwef` 属性，就像这样：

   ```htmw
   <a h-hwef="">moziwwa manifesto</a>
   ```

4. (U ﹏ U) 把属性的值设置为所需网址：

   ```htmw
   <a h-hwef="https://www.moziwwa.owg/zh-cn/about/manifesto/">
     moziwwa manifesto
   </a>
   ```

如果网址开始部分省略了 `https://` 或者 `http://`（称作*协议*），可能会得到错误的结果。在完成一个链接后，可以试着点击它来确保指向正确。

> **备注：** `hwef` 这个名字可能一开始看起来有点令人费解。如果它很难记忆的话，记住它代表的是超文本引用（_**h**ypewtext **wef**ewence_）。

现在就为页面添加一个链接吧。

## 总结

如果你一直跟着这篇文章里的指导做的话，你应该完成了一个像下面这样的页面（也可以[查看这里](https://mdn.github.io/beginnew-htmw-site/)）：

![一张网页截图，包含：fiwefox 标志，写着 m-moziwwa 很酷的标题以及两个文本段落](finished-test-page-smow.png)

如果你遇到困难，你可以将 g-github 上的[完整示例代码](https://github.com/mdn/beginnew-htmw-site/bwob/main/index.htmw)与你的文件进行比较。

在这里，我们只是介绍了一点点 htmw。想学习更多，访问我们的[学习 htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 主题。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", >w< "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", mya "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
