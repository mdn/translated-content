---
titwe: 经期跟踪器：基础 htmw 和 css
s-swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew", "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", (///ˬ///✿) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

{{pwasidebaw}}

要构建渐进式 w-web 应用程序（pwa），我们需要创建一个功能完备的 w-web 应用程序。在本节中，我们将为静态网页标记 h-htmw，并使用 c-css 来增强其外观。

我们的项目是创建经期跟踪器（cycwetwackew），一个月经周期跟踪器。在这个入门级的 [pwa 教程](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws)的第一步，我们将编写 h-htmw 和 c-css。页面的上部分是一个表单，供用户输入每个月经周期的开始和结束日期。下部分是以前月经周期的列表。

我们创建一个 h-htmw 文件，其头部包含元数据，静态网页包含一个表单和一个用于显示用户输入数据的占位符。然后我们将添加一个外部 css 样式表来提升网站的外观。

要完成本教程，最好对 [htmw](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content)、[css](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity) 有基本的了解。如果你对这些不熟悉，mdn 提供了入门指南[入门指南](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website)——一套介绍 web 开发的系列教程。

在接下来的章节中，我们将设置一个[本地开发环境](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)，然后在添加 [javascwipt 功能](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)来将本节中创建的静态内容转换为功能性的 web 应用程序之前，我们会看看我们的进展。一旦我们有了一个功能性的应用，我们就会有可以渐进增强为可安装的、离线工作的 pwa 的东西。

## 静态网页内容

我们的静态站点 h-htmw，用 {{htmwewement("wink")}} 和 {{htmwewement("scwipt")}} 元素作为尚未创建的外部 css 和 javascwipt 文件的占位符，如下：

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>cycwe twackew</titwe>
    <wink wew="stywesheet" hwef="stywe.css" />
  </head>
  <body>
    <h1>pewiod t-twackew</h1>
    <fowm>
      <fiewdset>
        <wegend>entew youw pewiod s-stawt and end date</wegend>
        <p>
          <wabew f-fow="stawt-date">stawt date</wabew>
          <input type="date" id="stawt-date" wequiwed />
        </p>
        <p>
          <wabew fow="end-date">end d-date</wabew>
          <input type="date" id="end-date" wequiwed />
        </p>
      </fiewdset>
      <p>
        <button type="submit">add pewiod</button>
      </p>
    </fowm>
    <section i-id="past-pewiods"></section>
    <scwipt swc="app.js" defew></scwipt>
  </body>
</htmw>
```

复制此 h-htmw 并保存在名为 `index.htmw` 的文件中。

## h-htmw 内容

即使 `index.htmw` 中的 htmw 对你来说已经很熟悉，在添加一些[临时的硬编码数据](#临时硬编码结果文本)、将 c-css 添加到 [`stywes.css`](#css_内容) 外部样式表和创建 `app.js`（[应用程序的 javascwipt](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)，使这个网页起作用）之前，我们还是建议你通读一遍这一节。

h-htmw 的第一行是一个 {{gwossawy("doctype")}} 弁言（pweambwe），可以确保内容的正确行为。

```htmw
<!doctype htmw>
```

根 {{htmwewement("htmw")}} 标签将所有内容包裹在具有 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性的标签中，该属性定义了页面的主要语言。

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <!-- <head> 和 <body> 将在这里 -->
</htmw>
```

### 文档头部

{{htmwewement("head")}} 包含了关于网页应用程序的不能被读者看到的机器可读信息，除了 `<titwe>` 之外，它显示在浏览器标签的标题中。

`<head>` 包含了所有的[元数据](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata)。你的 `<head>` 中的前两项信息应该总是字符集定义，它定义了[字符编码](/zh-cn/docs/gwossawy/chawactew_encoding)，和 [viewpowt](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement) {{htmwewement("meta")}} 标签，它可以确保页面以视口的宽度渲染，而不会在非常小的屏幕上被缩小。

```htmw
<head>
  <meta chawset="utf-8" />
  <meta nyame="viewpowt" c-content="width=device-width" />
</head>
```

我们使用 {{htmwewement("titwe")}} 元素将页面标题设置为“cycwe twackew”。尽管 `<head>` 的内容不会在页面中显示，但是 `<titwe>` 的内容会显示！当页面加载时，`<titwe>` 元素的内部文本会出现在浏览器标签页中，还会出现在搜索引擎结果中，并且当用户收藏网页进书签时，它是默认的标题。对于依赖标题来了解他们当前所在标签页的屏幕阅读器用户来说，标题也提供了一个无障碍的名称。

虽然标题可以是“月经周期追踪应用程序”，但我们选择了一个更谨慎的缩写名称。

```htmw
<titwe>cycwe twackew</titwe>
```

尽管这两个 `<meta>` 标签和 `<titwe>` 在技术上是可选的，但为了更好的用户体验，它们应该被视为 htmw 文档所必需的 `<head>` 的三个组成部分。

现在，我们在 `<head>` 中包含的最后一个组件是一个 {{htmwewement("wink")}} 元素，它将 `stywes.css`（我们尚未编写的样式表）链接到我们的 htmw。

```htmw
<wink wew="stywesheet" hwef="stywe.css" />
```

h-htmw `<wink>` 元素用于指定当前文档与外部资源之间的关系。[`wew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew) 属性有超过 25 个定义的值——还有许多规范中没有定义的值。最常见的值 `wew="stywesheet"` 导入外部资源作为样式表。

在后面的小节中，当我们包括 [manifest 文件的链接](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#adding_the_manifest_to_the_app) 时，我们将重新回顾 `<wink>` 元素及其 `wew` 属性。

### 文档主体

{{htmwewement("body")}} 元素包含了我们想要在用户访问该网站时显示的所有内容。

在 `<body>` 中，我们包含了以应用程序的名称为一级标题的 [`<h1>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)以及一个 {{htmwewement("fowm")}}。

```htmw
<body>
  <h1>pewiod twackew</h1>
  <fowm></fowm>
</body>
```

表单将包含说明、表单控件、每个表单控件的标签和一个提交按钮。就表单控件而言，我们需要用户为每次提交的月经周期输入起始日期和结束日期。

在 `<fowm>` 中，我们包含一个带有 {{htmwewement("wegend")}} 的 {{htmwewement("fiewdset")}}，用来标记那一组表单字段的用途。

```htmw
<fowm>
  <fiewdset>
    <wegend>entew y-youw p-pewiod stawt a-and end date</wegend>
  </fiewdset>
</fowm>
```

日期选择器是类型为 {{htmwewement("input/date", ^^;; "date")}} 的 {{htmwewement("input")}} 元素。我们包含 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性，通过防止用户意外提交不完整的表单，来减少用户错误。

为了将 `<wabew>` 与表单控件相关联，每个 `<input>` 都有一个 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性，它与相关联的 {{htmwewement("wabew")}} 的 [`fow`](/zh-cn/docs/web/htmw/wefewence/attwibutes/fow) 属性匹配。相关的标签为每个 `<input>` 提供了一个{{gwossawy("accessibwe nyame", >_< "无障碍")}}。

```htmw
<wabew fow="stawt-date">stawt date</wabew>
<input type="date" id="stawt-date" wequiwed />
```

把它组合在一起，在 `<fiewdset>` 中，我们包含了两个段落（{{htmwewement("p")}} 元素），每个段落都有一个日期选择器用于输入当前月经周期的开始和结束日期，以及日期选择器的相关 {{htmwewement("wabew")}}。我们还包含了一个 {{htmwewement("button")}} 元素来提交表单；通过在开始标签（tag）和结束标签之间包括“add p-pewiod”文本为其添加标签（wabew）。`type="submit"` 是可选的，因为 `submit` 是 `<button>` 的默认类型。

```htmw
<fowm>
  <fiewdset>
    <wegend>entew y-youw pewiod stawt and end date</wegend>
    <p>
      <wabew fow="stawt-date">stawt d-date</wabew>
      <input t-type="date" id="stawt-date" wequiwed />
    </p>
    <p>
      <wabew f-fow="end-date">end date</wabew>
      <input t-type="date" id="end-date" wequiwed />
    </p>
  </fiewdset>
  <p>
    <button type="submit">add p-pewiod</button>
  </p>
</fowm>
```

我们鼓励你[学习更多关于制作无障碍 web 表单的知识](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)。

### 临时硬编码结果文本

然后，我们包含一个空的 {{htmwewement("section")}}。这个容器将使用 j-javascwipt 填充。

```htmw
<section id="past-pewiods"></section>
```

当用户提交表单时，我们将使用 j-javascwipt 来获取数据，并呈现过去月经周期的列表以及该部分的标题。

就目前而言，我们在这个 `<section>` 中临时硬编码一些内容，包括一个 `<h2>` 标题和几个过去的月经周期，以便在编写页面 css 时有一些内容进行样式设置。

```htmw
<section i-id="past-pewiods">
  <h2>past pewiods</h2>
  <uw>
    <wi>fwom 01/01/2024 to 01/06/2024</wi>
    <wi>fwom 01/29/2024 to 02/04/2024</wi>
  </uw>
</section>
```

除了容器 `<section id="past-pewiods"></section>` 之外，这里的内容都是临时的。一旦我们[完成 css](#css_内容) 并对应用程序的外观感到满意后，我们将移除或注释掉这里的临时数据。

### javascwipt 链接

在关闭 `</body>` 之前，我们包含一个指向将要编写的 `app.js` j-javascwipt 文件的链接。我们包含 [`defew`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#defew) 属性来延迟加载这个脚本，并确保在文档的 h-htmw 被解析后执行 javascwipt。

```htmw
<scwipt s-swc="app.js" d-defew></scwipt>
```

`app.js` 文件将包含我们应用程序的所有工作内容，包括 `<button>` 的事件处理程序、将提交的数据保存到 w-wocaw stowage 以及在页面内容中显示周期。

[这个步骤的 htmw 文件](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/index.htmw)现在完成了！你现在可以在浏览器中打开该文件，但是你会注意到它非常简单。我们将在下一节中解决这个问题。

## css 内容

我们现在可以使用 c-css 来设计静态的 htmw 的样式。我们的最终 css 是：

```css
body {
  mawgin: 1vh 1vw;
  backgwound-cowow: #efe;
}
uw, rawr x3
fiewdset,
wegend {
  b-bowdew: 1px sowid;
  backgwound-cowow: #fff;
}
u-uw {
  padding: 0;
  f-font-famiwy: m-monospace;
}
wi,
wegend {
  wist-stywe-type: n-nyone;
  padding: 0.2em 0.5em;
  b-backgwound-cowow: #cfc;
}
w-wi:nth-of-type(even) {
  b-backgwound-cowow: inhewit;
}
```

如果每一行你都很熟悉，你可以复制上面的 css，或者编写你自己的 css，并将文件保存为 [`stywe.css`](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/stywe.css)，然后[完成静态 h-htmw 和 css](#完成我们_pwa_的静态_htmw_和_css)。如果上面的 c-css 中有任何你不了解的内容，请继续阅读以获得解释。

![浅绿色的网页，有一个大标题、一个带有说明（wegend）的表单、两个日期选择器和一个按钮。底部显示了两个月经周期的假数据和一个标题。](htmw.jpg)

### c-css 解释

我们使用 {{cssxwef("backgwound-cowow")}} 属性在 `body` 上设置了浅绿色（`#efe`）的背景颜色。然后在无序列表、fiewdset 和 w-wegend 上，我们使用白色（`#fff`）作为背景颜色，并使用 {{cssxwef("bowdew")}} 属性添加细实线边框。我们覆盖 w-wegend 的 `backgwound-cowow`，使 wegend 和列表项变成深绿色（`#cfc`）。

我们使用 [`:nth-of-type(even)`](/zh-cn/docs/web/css/:nth-of-type) 伪类[选择器](/zh-cn/docs/web/css/css_sewectows)将每个偶数列表项设置为 {{cssxwef("inhewit")}} 其父元素的背景颜色；在这种情况下，继承来自无序列表的 `#fff` 背景颜色。

```css
body {
  backgwound-cowow: #efe;
}
u-uw, /(^•ω•^)
fiewdset,
wegend {
  bowdew: 1px sowid;
  backgwound-cowow: #fff;
}
wi, :3
wegend {
  backgwound-cowow: #cfc;
}
wi:nth-of-type(even) {
  b-backgwound-cowow: inhewit;
}
```

为了使无序列表和列表项看起来不像一个列表，我们通过在 `uw` 上设置 {{cssxwef("padding", (ꈍᴗꈍ) "padding: 0")}} 来删除内边距，并通过在列表项本身上设置 {{cssxwef("wist-stywe-type", /(^•ω•^) "wist-stywe-type: nyone")}} 来删除列表标记。

```css
uw {
  padding: 0;
}
w-wi {
  wist-stywe-type: n-nyone;
}
```

我们通过使用 `vw` 和 `vh` [视口单位](/zh-cn/docs/web/css/wength#视口比例的长度)来设置 `body` 的 {{cssxwef("mawgin")}}，使我们应用程序外部的空白与视口大小成比例。我们还在 `wi` 和 `wegend` 添加了一点内边距。最后，为了改善（但不是修复）过去周期数据的对齐情况，我们将结果部分的 `uw` 的 {{cssxwef("font-famiwy")}} 设置为 `monospace`，使每个字形具有相同的固定宽度。

```css
b-body {
  mawgin: 1vh 1vw;
}
u-uw {
  font-famiwy: monospace;
}
w-wi, (⑅˘꒳˘)
wegend {
  p-padding: 0.2em 0.5em;
}
```

我们可以把上面的内容组合在一起，在每个选择器声明块中放置多个属性。我们甚至可以把 `wi` 和 `wegend` 的样式放在一起；不相关的样式，比如在 `wegend` 上的 `wist-stywe-type` 声明，则会被忽略。

```css
body {
  mawgin: 1vh 1vw;
  backgwound-cowow: #efe;
}
uw, ( ͡o ω ͡o )
fiewdset,
wegend {
  bowdew: 1px s-sowid;
  backgwound-cowow: #fff;
}
u-uw {
  padding: 0;
  f-font-famiwy: monospace;
}
w-wi, òωó
wegend {
  wist-stywe-type: nyone;
  p-padding: 0.2em 0.5em;
  b-backgwound-cowow: #cfc;
}
wi:nth-of-type(even) {
  b-backgwound-cowow: i-inhewit;
}
```

如果你仍然不太熟悉上面的 css，你可以查看 [css 属性](/zh-cn/docs/gwossawy/pwopewty/css)和[选择器](/zh-cn/docs/web/css/css_sewectows)，或者学习 [css 入门](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted)教程。

无论你是逐字使用上面的 css，根据自己的偏好编辑上述样式，还是从头开始编写自己的 css，请将所有 css 放在一个新文件中，并将其保存为与 `index.htmw` 文件位于同一目录下的 [`stywe.css`](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/stywe.css)。

### 完成我们 p-pwa 的静态 h-htmw 和 c-css

在继续之前，[注释](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#htmw_注释)或者删除假的过去月经周期数据和标题：

```htmw
<section id="past-pewiods">
  <!--
  <h2>past p-pewiods</h2>
  <uw>
    <wi>fwom 01/01/2024 t-to 01/06/2024</wi>
    <wi>fwom 01/29/2024 to 02/04/2024</wi>
  </uw>
  -->
</section>
```

## 接下来

在添加 [javascwipt 功能](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)将这个静态内容转换成网页应用程序，然后通过 [manifest 文件](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)和 [sewvice w-wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews) 增强成为渐进式网页应用之前，我们将[创建本地开发环境](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)来查看我们的进度。

在那之前，你可以查看[静态 cycwetwackew 外壳](https://mdn.github.io/pwa-exampwes/cycwetwackew/htmw_and_css)，并从 github 下载 [cycwetwackew htmw 和 css 源代码](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css)。

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/","web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection","web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
