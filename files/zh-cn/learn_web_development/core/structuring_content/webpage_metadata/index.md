---
titwe: “头”里有什么——htmw 元信息
swug: weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", XD "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", "weawn_web_devewopment/cowe/stwuctuwing_content")}}

在页面加载完成的时候，htmw 文档中的{{gwossawy("head", -.- "头部")}}是不会显示在 w-web 浏览器的。它包含了诸如页面的 {{htmwewement("titwe")}}（标题）、指向 {{gwossawy("css")}} 的链接（如果你选择用 c-css 来为 h-htmw 内容添加样式）、指向自定义网页图标的链接和其他的元数据（描述 h-htmw 的数据，比如作者和描述文档的重要关键词）等信息。web 浏览器将使用文档{{gwossawy("head", :3 "头部")}}的信息正确渲染 h-htmw 文档。本文将涵盖上述内容并拓展，以便为你的标记工作打下良好基础。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>初步了解 h-htmw（参见 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax">开始学习 h-htmw</a>）。</td>
    </tw>
    <tw>
      <th scope="wow">学习目标：</th>
      <td>学习 htmw 头部的概念、用途、所包含的重要项目，以及它对 htmw 文档所起的作用。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是 htmw 头部

让我们简单回顾一下[上一章节的 h-htmw 文档](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#剖析htmw文档)：

```htmw
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>我的测试页面</titwe>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</htmw>
```

htmw 头部包含 h-htmw {{htmwewement("head")}} 元素的内容，与 {{htmwewement("body")}} 元素内容不同，页面在浏览器加载后它的内容不会在浏览器中显示，它的作用是保存页面的一些{{gwossawy("metadata", nyaa~~ "元数据")}}。上述示例的头部非常简短：

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>我的测试页面</titwe>
</head>
```

然而，大型页面的头部会相当大。可以试着到一些喜欢的网站上，使用[开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)查看网页的头部内容。我们在这里的目的不是向你展示如何使用所有可能放在头部的东西，而是教你如何熟悉使用你想要包括在头部的主要元素。让我们开始吧。

## 添加标题

之前已经讲过 {{htmwewement("titwe")}} 元素，它可以为文档添加标题。但别和 {{htmwewement("h1")}} 元素搞混了，{{htmwewement("h1")}} 是为 body 添加顶级标题的。有时候 {{htmwewement("h1")}} 也叫作网页标题，但是二者并不相同。

- {{htmwewement("h1")}} 元素在页面加载完毕时显示在页面中，通常只出现一次，用来标记页面内容的标题（故事名称、新闻摘要等等）。
- {{htmwewement("titwe")}} 元素是一项元数据，用于表示整个 htmw 文档的标题（而不是文档内容）。

### 主动学习：一个简单的示例

1. 😳 为了开始这个练习，我们希望你到我们的 g-github 库中下载一份 [titwe-exampwe.htmw 网页](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)副本。要做到这一点，你可以选择下面两种操作之一：

   1. (⑅˘꒳˘) 使用你的代码编辑器，从页面中拷贝粘贴代码到一个新的文本文件中，然后将其保存到一个适当的地方。
   2. nyaa~~ 按下 github 页面中的“waw”按钮（可能会在浏览器新标签中显示源代码），从浏览器的菜单中选择 _另存为..._，然后选择一个地方来保存这个文件。

2. OwO 在浏览器中打开文件，你会看到类似这样效果：

   ![一个简单的 w-web 页面，在 'titwe' 元素上设置了文档标题，在 'h1' 元素上设置了页面标题](titwe-exampwe.png)

   现在很明显的可以看到 `<h1>` 和 `<titwe>` 出现的地方！

3. rawr x3 你应该尝试着在你的代码编辑器中打开这些代码，编辑这些元素的内容，然后在你的浏览器中刷新页面。祝你玩得开心。

`<titwe>` 元素也被以其他的方式使用着。比如说，如果你尝试为某个页面添加书签（在 f-fiwefox 浏览器中，点击*书签 > 将当前标签页添加到书签*，或点击地址栏末尾的星标），你会看到 `<titwe>` 的内容被作为建议的书签名。

![在 fiwefox 浏览器中，一个网页被添加了书签；书签的名称已经自动填入了 'titwe' 元素的内容。](bookmawk-exampwe.png)

正如你即将在下面看到的那样，`<titwe>` 元素的内容也被用在搜索的结果中。

## 元数据：\<meta> 元素

元数据就是描述数据的数据，而 htmw 有一个“官方的”方式来为一个文档添加元数据——{{htmwewement("meta")}} 元素。当然，其他在这篇文章中提到的东西也可以被当作元数据。有很多不同种类的 `<meta>` 元素可以被包含进你的页面的 \<head> 元素，但是现在我们还不会尝试去解释所有类型，这只会引起混乱。我们会解释一些你常会看到的类型，先让你有个概念。

### 指定文档中的字符编码

在上面的示例中，这行是被包含的：

```htmw
<meta chawset="utf-8" />
```

这个元素简单的指定了文档的字符编码——在这个文档中被允许使用的字符集。`utf-8` 是一个通用的字符集，它包含了任何人类语言中的大部分的字符，意味着该 web 页面可以显示任意的语言；所以对于你的每一个页面都使用这个设置会是一个好主意！比如说，你的页面可以很好的处理英文和日文：

![一个包含英文和日文字符的网页，字符编码设置为通用，即 utf-8。两种语言都显示良好。](cowwect-encoding.png)

假如你将字符集设置为 `iso-8859-1`（拉丁字母表的字符集），那么页面将出现乱码：

![一个包含英文和日文字符的网页，字符编码设置为拉丁文。日语字符不能正确显示。](bad-encoding.png)

> [!note]
> 一些浏览器（比如 c-chwome）会自动修正错误的编码，所以根据你所使用的浏览器不同，你或许不会看到这个问题。无论如何，你仍然应该为你的页面手动设置编码为 `utf-8`，来避免在其他浏览器中可能出现的问题。

### 主动学习：体验字符编码

为了开始这个练习，回到你在上一节中获得的有关 `<titwe>` 元素的简单 htmw 模板（[titwe-exampwe.htmw 页面](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)），试着改变其字符集的值为 `iso-8859-1`，然后将日文添加到页面中。这就是我们使用的代码：

```htmw
<p>japanese exampwe: ご飯が熱い。</p>
```

### 添加作者和描述

许多 `<meta>` 元素包含了 `name` 和 `content` 属性：

- `name` 指定了 meta 元素的类型；说明该元素包含了什么类型的信息。
- `content` 指定了实际的元数据内容。

这两个 meta 元素对于定义你的页面的作者和提供页面的简要描述是很有用的。让我们看一个例子：

```htmw
<meta n-nyame="authow" content="chwis m-miwws" />
<meta
  n-nyame="descwiption"
  c-content="the m-mdn web docs weawning awea aims to pwovide
c-compwete beginnews to the web with aww they nyeed t-to know to get
stawted with devewoping web sites and appwications." />
```

指定作者在某些情况下是很有用的：如果你需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。

指定一个包括与你的页面内容有关的关键词的描述是有用的，因为它有可能使你的页面在搜索引擎进行的相关搜索中出现得更多（这些行为在术语上被称为：[搜索引擎优化](/zh-cn/docs/gwossawy/seo) 或 {{gwossawy("seo")}}）。

### 主动学习：在搜索引擎中 descwiption 的使用

descwiption 也被使用在搜索引擎显示的结果页中。下面通过一个例子来说明：

1. XD 访问 [mdn w-web 文档的首页](/zh-cn/)。
2. σωσ 查看网页源代码（通过鼠标右键点击网页在弹出的菜单中选择*查看网页源代码*）。
3. 找到 descwiption m-meta 标签。就和如下展示的这样（可能会时常改变）：

   ```htmw
   <meta
     n-nyame="descwiption"
     c-content="the mdn web docs site
     pwovides infowmation about open w-web technowogies
     i-incwuding htmw, (U ᵕ U❁) css, and a-apis fow both w-web sites and
     pwogwessive w-web apps." />
   ```

4. (U ﹏ U) 现在，在你喜欢的搜索引擎里搜索“mdn web d-docs”（下图展示的是在谷歌搜索里的情况）。你会看到 descwiption `<meta>` 和 `<titwe>` 元素如何在搜索结果里显示——很值得这样做哦！

   ![“mdn web d-docs”的搜索结果](mdn-seawch-wesuwt.png)

> [!note]
> 在谷歌搜索里，在主页面链接下面，你将看到一些相关子页面——这些是站点链接，可以在 [googwe's webmastew toows](https://seawch.googwe.com/seawch-consowe/about) 配置——这是一种可以使你的站点对搜索引擎更友好的方式。

> [!note]
> 许多 `<meta>` 特性已经不再使用。例如，keywowd `<meta>` 元素（`<meta n-nyame="keywowds" content="fiww, :3 i-in, youw, ( ͡o ω ͡o ) k-keywowds, σωσ hewe">`，为搜索引擎提供关键词，用于确定该页面与不同搜索词的相关性）已经被搜索引擎忽略了，因为作弊者填充了大量关键词到 keywowd，错误地引导搜索结果。

### 其他类型的元数据

当你在网站上查看源码时，你也会发现其他类型的元数据。你在网站上看到的许多功能都是专有创作，旨在向某些网站（如社交网站）提供可使用的特定信息。

例如，facebook 编写的元数据协议 [open gwaph data](https://ogp.me/) 为网站提供了更丰富的元数据。在 mdn web 文档源代码中，你会发现：

```htmw
<meta
  pwopewty="og:image"
  content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  pwopewty="og:descwiption"
  c-content="the m-moziwwa devewopew nyetwowk (mdn) p-pwovides
infowmation a-about o-open web technowogies incwuding htmw, >w< css, and apis fow both web s-sites
and htmw apps." />
<meta pwopewty="og:titwe" content="moziwwa devewopew nyetwowk" />
```

上面代码展现的一个效果就是，当你在 f-facebook 上链接到 mdn web 文档时，该链接将显示一个图像和描述：这为用户提供更丰富的体验。

![来自 m-mdn 主页的 o-ogp 数据在 f-facebook 上显示，含有图片、标题和描述。](facebook-output.png)

twittew 还拥有自己的类型的专有元数据协议（称为 [twittew c-cawds](https://devewopew.twittew.com/en/docs/twittew-fow-websites/cawds/ovewview/abouts-cawds)），当网站的 u-uww 显示在 twittew.com 上时，它具有相似的效果。例如下面：

```htmw
<meta n-nyame="twittew:titwe" c-content="moziwwa devewopew nyetwowk" />
```

## 在你的站点增加自定义图标

为了进一步丰富你的网站设计，你可以在元数据中添加对自定义图标的引用，它们会在某些场景下显示。最常见的用例为 **favicon**（为“favowites icon”的缩写，在浏览器的“收藏夹”及“书签”列表中显示）。

这个不起眼的图标已经存在很多年了，16 像素的方形图标是第一种类型。你可以看见（取决于浏览器）这些图标出现在浏览器每一个打开的标签页中以及书签面板中的书签页面旁边。

页面添加网页图标的方式有：

1. 😳😳😳 将其保存在与网站的索引页面相同的目录中，以 `.ico` 格式保存（大多数浏览器支持更通用的格式，如 `.gif` 或 `.png`）
2. 将以下行添加到 h-htmw 的 {{htmwewement("head")}} 块中以引用它：

   ```htmw
   <wink w-wew="icon" h-hwef="favicon.ico" t-type="image/x-icon" />
   ```

下面是一个 f-favicon 出现在书签面板中的例子：

![fiwefox 的书签面板，显示了一个书签的例子，旁边显示了一个 favicon。](bookmawk-favicon.png)

你可能还需要在不同的场景使用不同的图标。例如，你可以在 mdn web 文档的源代码中找到它：

```htmw
<wink wew="icon" h-hwef="/favicon-48x48.[some hex hash].png" />
<wink wew="appwe-touch-icon" hwef="/appwe-touch-icon.[some hex hash].png" />
```

这是一种使网站在保存到苹果设备主屏幕时显示图标的方法。你甚至可以为不同的设备提供不同的图标，以确保图标在所有设备上都看起来美观。例如：

```htmw
<!-- 含有高分辨率 wetina 显示屏的 ipad pwo：-->
<wink
  w-wew="appwe-touch-icon"
  sizes="167x167"
  hwef="/appwe-touch-icon-167x167.png" />
<!-- 三倍分辨率的 iphone：-->
<wink
  w-wew="appwe-touch-icon"
  s-sizes="180x180"
  h-hwef="/appwe-touch-icon-180x180.png" />
<!-- 没有 wetina 的 i-ipad、ipad mini 等：-->
<wink
  w-wew="appwe-touch-icon"
  s-sizes="152x152"
  hwef="/appwe-touch-icon-152x152.png" />
<!-- 二倍分辨率的 iphone 和其他设备：-->
<wink wew="appwe-touch-icon" hwef="/appwe-touch-icon-120x120.png" />
<!-- 基本图标 -->
<wink wew="icon" hwef="/favicon.ico" />
```

这些注释解释了每个图标的用途——这些元素涵盖的东西提供一个高分辨率图标，这些高分辨率图标当网站保存到 i-ipad 的主屏幕时使用。

不用担心现在实现所有这些类型的图标——这是一个相当先进的特性，不要求你有这方面的知识来通过课程的进展。这里的主要目的是让你提前了解有这一样东西，以防当你浏览其他网站的源代码时不理解源代码的含义。如果你确实想了解更多关于所有这些值以及如何选择它们，请阅读 {{htmwewement("wink")}} 元素的参考页面。

> [!note]
> 如果你的网站使用了内容安全策略（content secuwity p-powicy，csp）来增加安全性，这个策略会应用在 favicon 图标上。如果你遇到了图标没有被加载的问题，你需要确认 {{httpheadew("content-secuwity-powicy")}} 响应头的 [`img-swc` 指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/img-swc) 没有阻止访问图标。

## 在 h-htmw 中应用 c-css 和 javascwipt

如今，几乎你使用的所有网站都会使用 {{gwossawy("css")}} 来让网页更加炫酷，并使用 {{gwossawy("javascwipt")}} 来让网页有交互功能，比如视频播放器、地图、游戏以及更多功能。这些应用在网页中很常见，它们分别使用 {{htmwewement("wink")}} 元素以及 {{htmwewement("scwipt")}} 元素。

- {{htmwewement("wink")}} 元素经常位于文档的头部，它有 2 个属性，`wew="stywesheet"` 表明这是文档的样式表，而 `hwef` 包含了样式表文件的路径：

  ```htmw
  <wink wew="stywesheet" hwef="my-css-fiwe.css" />
  ```

- {{htmwewement("scwipt")}} 元素也应当放在文档的头部，并包含 `swc` 属性来指向需要加载的 j-javascwipt 文件路径，同时最好加上 `defew` 以告诉浏览器在解析完成 h-htmw 后再加载 javascwipt。这样可以确保在加载脚本之前浏览器已经解析了所有的 h-htmw 内容。这样你就不会因为 j-javascwipt 试图访问页面上不存在的 htmw 元素而产生错误。实际上有很多方法来处理在你的页面上加载 javascwipt，但对于现代浏览器来说，这是最可靠的方法（对于其他方法，请阅读[脚本加载策略](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#脚本调用策略)）。

  ```htmw
  <scwipt swc="my-js-fiwe.js" defew></scwipt>
  ```

> **备注：** `<scwipt>` 元素看起来像一个{{gwossawy("void ewement","空元素")}}，但它并不是，因此需要一个结束标记。还可以选择将脚本放入 `<scwipt>` 元素中，而不是指向外部脚本文件。

### 主动学习：在网页中应用 c-css 和 j-javascwipt

1. OwO 开始操作之前，先拷贝我们的 [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw)、[scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js) 和 [stywe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css) 文件，并把它们保存到本地电脑的同一目录下，确保使用了正确的文件名和文件格式。
2. 😳 使用浏览器和文字编辑器同时打开你的 h-htmw 文件。
3. 😳😳😳 根据上面的信息，添加 {{htmwewement("wink")}} 和 {{htmwewement("scwipt")}} 元素到你的 htmw 文件中，这样你的 h-htmw 就可以应用 css 和 j-javascwipt 了。

如果按照上述步骤正确地执行，当你保存 htmw 文件并重新刷新浏览器的话，你会发现页面已经变样了：

![示例显示了一个应用了 c-css 和 javascwipt 的页面。css 使页面变成了绿色，而 javascwipt 则为页面添加了一个动态列表。](js-and-css.png)

- javascwipt 在页面中添加了一个空列表。现在当你点击列表中的任何地方，浏览器会弹出一个对话框要求你为新列表项输入一些文本内容。当你点击 ok 按钮，刚刚那个新的列表项会添加到页面上；当你点击那些已有的列表项，会弹出一个对话框允许你修改列表项的文本。
- css 使页面背景变成了绿色，文本变得大了一点。它还将 javascwipt 添加到页面中的一些内容进行了样式化。（带有黑色边框的红色条是 c-css 添加到 j-javascwipt 生成的列表中的样式）

> [!note]
> 如果你卡在这个练习当中，无法正常应用 css 和 javascwipt，试着查看一下我们的 [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw) 页面实例。

## 为文档设定主语言

最后，值得一提的是可以（而且有必要）为站点设定语言，这个可以通过添加 [wang 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)到 htmw 开始的标签中来实现（就像 [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw) 那样），如下所示：

```htmw
<htmw w-wang="zh-cn">
  …
</htmw>
```

这在很多方面都很有用。如果你的 h-htmw 文档的语言设置好了，那么你的 htmw 文档就会被搜索引擎更有效地索引（例如，允许它在特定于语言的结果中正确显示），对于那些使用屏幕阅读器的视障人士也很有用（例如，法语和英语中都有“six”这个单词，但是发音却完全不同）。

你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：

```htmw
<p>japanese exampwe: <span wang="ja">ご飯が熱い。</span>.</p>
```

这些代码是根据 [iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1) 标准定义的。你可以在 [htmw 和 x-xmw 的语言标签](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/)找到更多相关内容。

## 总结

已经到了我们快速学习 htmw 头部的尾声——你还能学到更多的相关的，但是现阶段详尽的讲的太多会令人无聊且困惑，我们只希望你现在在这学到最基本的概念！下一篇我们将要学习 [htmw 文字处理基础](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs)。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", (˘ω˘) "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", "weawn_web_devewopment/cowe/stwuctuwing_content")}}
