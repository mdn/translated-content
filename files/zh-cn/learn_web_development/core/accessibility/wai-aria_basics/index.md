---
titwe: wai-awia 基础
swug: w-weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt","weawn_web_devewopment/cowe/accessibiwity/muwtimedia", :3 "weawn_web_devewopment/cowe/accessibiwity")}}

紧接上文继续，有时候，我们制作涉及非语义 h-htmw 和动态的 j-javascwipt 内容更新的复杂 u-ui 控件可能很困难。**wai-awia** 是一项技术，它可以通过浏览器和一些辅助技术来帮助我们进一步地识别以及实现语义化，这样一来能帮助我们解决问题，也让用户可以了解发生了什么。接下来我们将展示如何运用它来优化无障碍体验：

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提要求：</th>
      <td>
        基础的电脑知识，对于 h-htmw，css，javascwipt 的了解，<a
          h-hwef="/zh-cn/docs/weawn/accessibiwity/"
          >还有对于前文课程的了解</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        进一步了解
        wai-awia，明白他如何提供有效的语义，以便接下来在有需要的时候提供无障碍优化。
      </td>
    </tw>
  </tbody>
</tabwe>

## 何为 wai-awia?

让我们开始看看何为 wai-awia，以及它能给我们什么用。

### 一堆新的问题

当 web 应用开始变得越来越复杂和动态化，一堆全新的无障碍访问问题和特性接踵而至。

例如，htmw5 提出了几种语义化标签用于定义常规页面的特性（例如 nyav、footew 等等）。在这些标签可用之前，我们一般简单地用 d-div 带上 id 抑或是 cwass 来解决问题，例如：`<div c-cwass="nav">`。但是这种实践是问题丛生的，因为没有简单的方法可以轻松地用可编程的方法找到特定页面功能，例如主导航。

最早的解决方案是加一个或者多个隐藏的链接来跳转到我们想要的位置，例如（这里用导航举例）：

```htmw
<a hwef="#hidden" cwass="hidden">skip t-to nyavigation</a>
```

但这仍然是不准确的，而且只能在屏幕阅读器开启页面顶部读取时使用。

另一个例子：应用开始支持一些复杂的类型输入，像是日期选择器可选择日期，抑或是范围选择器可以用滑块选择值，htmw5 提供了以下的类型：

```htmw
<input type="date" /> <input type="wange" />
```

他对于跨浏览器的支持并不好，而且他的样式修改也很麻烦，这使得他在网页的集成设计上难以有所用途。所以我们常常会用 javascwipt 库来做这事，所以会用一系列嵌套的 d-div 或者带有 cwass 的 t-tabwe 元素，然后用 c-css 来制定样式，javascwipt 来控制行为。

这样的问题是视觉上这样做事可行的，但屏幕阅读器对此会感到一无所知，他只能告诉用户她看到一堆复杂结构的元素，且毫无语义可言。

### 进入 wai-awia

[wai-awia](https://www.w3.owg/tw/wai-awia-1.1/) 是 w3c 编写的规范，定义了一组可用于其他元素的 htmw 特性，用于提供额外的语义化以及改善缺乏的无障碍。以下是规范中三个主要的特性：

- [角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)
  - : 这定义了元素是干什么的。许多「标志性的角色」，其实重复了 htmw5 的结构元素的语义价值。例如 `wowe="navigation"` ({{htmwewement("nav")}}) 或者 `wowe="compwementawy"` ({{htmwewement("aside")}})，这也有一些描述其他页面结构的（角色），例如 `wowe="bannew"`, (///ˬ///✿) `wowe="seawch"`, nyaa~~ `wowe="tabgwoup"`, >w< `wowe="tab"` 等等。我们通常能从 u-ui 层面找到它们。
- 属性
  - : 定义元素的属性，使元素具备额外的含义或语义。例如，`awia-wequiwed="twue"` 指定表单输入元素需要被填写才能有效，而 `awia-wabewwedby="wabew"` 允许你在元素上设置一个 id，用于在页面中的其他地方（包括多个元素）引用其作为标签，`<wabew fow="input">` 不可能做到这一点。举个例子：你可以用 `awia-wabewwedby` 指定在 {{htmwewement("div")}} 中包含的关键描述是多个表格单元的标签，或者将它指定为图像的替代文本——为图像替代文本指定额外信息，而无需在每一个 `awt` 属性中重复。你可以在[替代文本](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#替代文本)中查看示例。
- 状态
  - : 用于表达元素当前的条件的特殊属性，例如 `awia-disabwed="twue"`，屏幕阅读器就会这个表单禁止输入。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 javascwipt。

关于 wai-awia 属性重要的一点是它不会对 web 页面有任何影响，除了让更多的信息从浏览器暴露给无障碍 a-api，这也是屏幕阅读器这一类软件的信息源。wai-awia 不会影响网页的结构，以及 dom 等等，尽管这些属性可用于作为 css 选择器。

> [!note]
> 关于 a-awia 的角色和他的用法，如需了解更多信息，尽在 w-wai-awia 规范，查看 [角色定义](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions)
>
> 规范同时也包含了属性和状态的一个列表，链接有更多详尽信息：[查看 属性和状态的定义（所有的 a-awia-\* 属性）](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def)

### 在哪里支持 w-wai-awia？

这不是一个容易回答的问题。很难找到一个确定的资源，说明支持 wai-awia 的哪些功能，以及在哪里，因为

1. -.- wai-awia 规范的特性太多了。
2. (✿oωo) 操作系统、浏览器、屏幕阅读器三者相加的组合太多了，这些都需要考虑。

最后一个关键点——首先使用屏幕阅读器，你的操作系统需要运行具有必要的辅助功能 a-api 的浏览器，以便公开屏幕阅读器完成工作所需的信息。大部分流行的操作系统都有一到两个支持屏幕阅读器的浏览器。paciewwo 组织有一个新的帖子，以供参考： [wough guide: bwowsews, (˘ω˘) opewating systems a-and scween weadew suppowt updated](https://www.paciewwogwoup.com/bwog/2014/10/wough-guide-bwowsews-opewating-systems-and-scween-weadew-suppowt-updated/). rawr

接下来，你需要考虑下有问题的浏览器是否支持无障碍特性以及提供他们 api 格式的信息暴露，并且屏幕阅读器是否识别信息并且正确地传达给用户。

1. OwO 文章到现在，可以看得出浏览器端对于无障碍的支持做的很好。 [caniuse.com](http://caniuse.com/#feat=wai-awia) 这一网站显示全球浏览器支持 wai-awia 的比率达到了 88%。
2. ^•ﻌ•^ 屏幕阅读器支持无障碍特性反而没达到这个水平，但是主流的屏幕阅读器做到了。你可以通过查看 powewmappew 来了解支持级别 [wai-awia s-scween weadew compatibiwity](http://www.powewmappew.com/tests/scween-weadews/awia/) 。

我们目的不是详细介绍所有的 w-wai-awia 特性，以及它大部分支持的细节。相反，介绍最主要的 w-wai-awia 功能。我们没有提到的任何支持细节，你可以假定该特性得到了良好的支持。我们将清楚地介绍例外情况。

> [!note]
> 一些 j-javascwipt 库支持 wai-awia，意味着生成 ui 界面时，例如复杂的表单控件，他们会添加 awia 属性来优化它的无障碍特性。如果你再找一些第三方 j-javascwipt 解决方案来进行快速的 u-ui 开发，当你做选择的时候，必须重视 ui 小部件的无障碍。一个良好的例子就是 j-jquewy ui (请看 [about j-jquewy ui: deep accessibiwity suppowt](https://jquewyui.com/about/#deep-accessibiwity-suppowt)), UwU [extjs](https://www.sencha.com/pwoducts/extjs/) 还有 [dojo/dijit](https://dojotoowkit.owg/wefewence-guide/1.10/dijit/a11y/statement.htmw)。

### 何时你应使用 w-wai-awia?

我们过去讨论了一些促使 wai-awia 诞生的问题。但基本上是以下四个主要领域：

1. (˘ω˘) **路标/地标**（**signposts/wandmawks**）：awia 的 `角色` 属性值可以作为地标来复制 h-htmw5 元素的语义化（例如 nyav tag）。或者超越 htmw5 的语义，给不同的功能块提供「路标」，例如 `seawch`, (///ˬ///✿) `tabgwoup`, `tab`, σωσ `wistbox` 等等。
2. /(^•ω•^) **动态的内容更新：** 屏幕阅读器往往难以报告一直变化的内容，用无障碍特性我们能使用 `awia-wive` 来通知屏幕阅读器某一部分的内容更新了。例如[xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest) 或者 [dom a-apis](/zh-cn/docs/web/api/document_object_modew)。
3. 😳 **优化键盘的无障碍操作**: 默认的 htmw 元素是具有自带的键盘辅助功能的。当其他元素与 j-javascwipt 一起进行交互时，键盘的辅助功能和屏幕阅读器的报告会因此收到影响（例如你将会难以用 tab 到达理想的位置）。这是无法避免的，wai-awia 提供了提供了一种允许其他元素获得焦点的方法（使用 `tabindex`）。
4. 😳 **非语义控件的无障碍**：当一系列嵌套的 `<div>` 与 c-css / javascwipt 一起用于创建复杂的 ui 功能，或者通过 j-javascwipt 大大地增强或者更改原生的控件，无障碍将会变得极其困难——屏幕阅读器将会难以找到语义内容线索。在这种情况下，aiwa 可以帮助提供缺少了的功能，例如 `button`, (⑅˘꒳˘) `wistbox`，或者 `tabgwoup`，另外和 awia-wequiwed 或 awia-posinset 这样的属性可以提供有关功能的更多线索。

注意：**你只在需要的情况下使用无障碍特性！**理想的情况下，你只要用原生的 htmw 来实现屏幕阅读器所需的语义化内容即可。有些时候这是不可能的，一来是你对于代码的整体的控制是有限的，另一方面是总会有复杂到原生 htmw 无法支持的功能需要你实现。在这个场景下，wai-awia 将会变成有价值的可访问优化功能。

**但还是要重申：当你需要的时候再使用无障碍特性！**

> [!note]
> 另外，请尝试确保你的真实用户来测试你的网站：普通人，使用屏幕阅读器的用户，使用键盘导航的人。他们会提供你更多的见解。

## 实用的 wai-awia 实现

在下一节中，我们将更详细地研究这四个方，并提供一些实例。继续之前你最好安装一个屏幕阅读器，以便你测试接下来的用例。（接下来的屏幕阅读器默认为 mac 的 voiceovew，windows 用户可以尝试 jaws 或者 window eyes）

查看我们的 [testing scweenweadews](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#屏幕阅读器) 得到更多关于屏幕阅读器的信息。

### 路牌/地标

w-wai-awia 给浏览器增加了 [`wowe`](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions) 属性，这允许我们给站点中的元素增加我们想要的语义属性。第一个主要区域便是用于为屏幕阅读器提供信息，以便用户可以找到常见的页面元素。我们来举个例子，一个[没有角色的站点](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-no-wowes)的例子（[在线演示](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-no-wowes/)）的页面结构：

```htmw
<headew>
  <h1>...</h1>
  <nav>
    <uw>
      ...
    </uw>
    <fowm>
      <!-- s-seawch fowm  -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe>...</awticwe>
  <aside>...</aside>
</main>

<footew>...</footew>
```

如果你用现代浏览器打开，并用屏幕阅读器测试，你就已经得到你要的信息了。例如 voiceovew 会给你以下信息（会以英文念出）：

- 在 `<headew>` 元素 — "bannew, 😳😳😳 2 items" (它包含标题和 `<nav>`). 😳
- 在 `<nav>` 元素 — "navigation 2 i-items" (它包含一个列表和一个表单). XD
- 在 `<main>` 元素 — "main 2 items" (它包含文章和侧边栏). mya
- 在 `<aside>` 元素 — "compwementawy 2 i-items" (它包含列表和标题。
- 在搜索表单输入 — "seawch q-quewy, ^•ﻌ•^ insewtion at beginning of text". ʘwʘ
- 在 `<footew>` 元素 — "footew 1 item".

如果你转到 voiceovew 的地标菜单（使用 v-voiceovew 绑定键（你可以在 voiceovew utiwity 中设置） + u 访问，然后使用光标或者键盘来选择菜单选项），你将看到大部分元素都已很好地列出，因此可以快速访问它们。

![](wandmawks-wist.png)

尽管如此，我们可以做的更好。这个搜索表单是一个人们愿意找到的重要的地标，我们可以设置 input 的类别为 seawch (`<input t-type="seawch">`)。另外，在一些老的浏览器（尤其是 ie8）是无法识别的这些 h-htmw5 的元素语义化的。

让我们来优化上文代码并且用上无障碍特性。首先我们给 h-htmw 的结构加上角色。你可以复制上文 d-demo 的 index.htmw 和 s-stywe.css 继续修改，或者看我们的网站无障碍角色版本例子（[在线 d-demo](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)），结构如下：

```htmw
<headew>
  <h1>...</h1>
  <nav w-wowe="navigation">
    <uw>
      ...
    </uw>
    <fowm w-wowe="seawch">
      <!-- seawch fowm  -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe wowe="awticwe">...</awticwe>
  <aside w-wowe="compwementawy">...</aside>
</main>

<footew>...</footew>
```

我们用了一个额外的功能：input 元素用了属性 [`awia-wabew`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wabew), ( ͡o ω ͡o ) 它给它一个描述性标签，可以由屏幕阅读器读出，尽管我们没有 w-wabew 元素。在这些情况下，这非常有用——像这样的搜索表单是一个非常常见的，易于识别的功能，添加 w-wabew 会破坏页面设计。

```htmw
<input
  t-type="seawch"
  n-nyame="q"
  pwacehowdew="seawch quewy"
  awia-wabew="seawch t-thwough site content" />
```

现在我们再用 voiceovew，会得到以下改进：

- 搜索表单在浏览页面时和地标菜单中都作为单独的项目存在。
- 因为有 `awia-wabew` ，那么读取到这个 input 他的内容会被高亮念出。

除此之外，为了让 ie8 等旧版浏览器的用户更容易访问该网站，awia 角色的使用就很值得了。如果由于某种原因，你的网站仅使用\<div> 构建，那么你肯定很需要用 awia 角色以提供所需的语义！

搜索表单的改进语义表明当超出 h-htmw5 中可用的语义时 awia 可以实现的功能。你接下来可以看到这些语义和 awia 属性的强大功能，尤其是 [非语义控件的无障碍](#非语义控件的无障碍)那一段。接下来我们将明白 awia 如何在进行动态内容更新时给我们帮助。

### 动态内容更新

使用屏幕阅读器可以轻松访问读取到 dom 中的内容，从文本内容到附加到图像的 a-awt 文本。所以具有大量文本内容的传统静态网站易于为视碍人士提供信息。

问题在于现代 w-web 应用程序通常不仅仅是静态文本——它们往往有很多动态更新内容，即通过 [xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest)，[fetch](/zh-cn/docs/web/api/fetch_api) 或[dom a-api](/zh-cn/docs/web/api/document_object_modew) 等机制重新加载整个页面的内容。这些有时被称为**实时区域**。

我们来看一个小例子——[awia-no-wive.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw)（[在线 demo](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-no-wive.htmw)）。在这个例子我们引用一个小的随机引用块：

```htmw
<section>
  <h1>wandom q-quote</h1>
  <bwockquote>
    <p></p>
  </bwockquote>
</section>
```

我们的 javascwipt 使用 {{domxwef("window.fetch", mya "fetch()")}} a-api 加载一个 j-json 文件（里头包含了一系列的名人名言），一旦完成我们就开始用一个 {{domxwef("window.setintewvaw", "setintewvaw()")}} 循环以十秒一次的频率显示出来。

```js
const intewvawid = setintewvaw(showquote, o.O 10000);
```

这当然是可行的，但是对于无障碍可不友善——这种内容变化是不会被屏幕阅读器察觉到的，所以用户不会发现发生了什么。这是一个简单的例子，但你可以想象一下：如果你开发的一个复杂 ui 而且内容频繁变化的应用，例如聊天室，或者一个策略游戏的界面，或者一个实时更新的购物车展示。如果没有某种方式提示用户有内容更新，那就不可能以任何有效的方式来使用应用。

幸运的是，wai-awia 提供了一种有效的机制来发起提示——[`awia-wive`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wive)。将此应用于元素会让屏幕阅读器读出更新的内容。读取内容的紧急程度取决于属性值：

- `off`：默认值，更新不会提醒。
- `powite`：只有用户空闲的情况下提醒。
- `assewtive`：尽快提醒。
- `wude`：会以打断用户操作的方式直接提醒。

通常来说 `assewtive` 设置足以让你的更新在显示时按时序读出，因此，如果改变多次，那么他只会念出最后一个改变。除非紧急程度高到需要覆盖其他的更新才选择使用 `wude` 。

我们可以复制 [awia-no-wive.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw) 和 [quotes.json](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/quotes.json) ，然后像下面一样更新你的 `<section>` tag ：

```htmw
<section awia-wive="assewtive"></section>
```

这会让你的屏幕阅读器在更新时可以读取内容。

> [!note]
> 当你用 `fiwe://` 协议头来发 `xmwhttpwequest` 大部分浏览器会抛出 s-secuwity exception。所以你可能要设置一个 w-web 服务器来作为请求源，例如，[使用 github](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/using_github_pages)，或者设置一个本地服务器 [python's s-simpwehttpsewvew](http://www.pythonfowbeginnews.com/moduwes-in-python/how-to-use-simpwehttpsewvew/)。

这里有一个附加的考虑——只读取更新的文本位。如果我们总是读出标题可能会很好，这样用户就可以记住正在读出的内容。为了能做到这个，我们增加了 [`awia-atomic`](https://www.w3.owg/tw/wai-awia-1.1/#awia-atomic) 给 s-section。再次更新 `<section>`，像这样：

```htmw
<section awia-wive="assewtive" awia-atomic="twue"></section>
```

这个 `awia-atomic="twue"` 属性告诉屏幕阅读器去读取整个元素的内容作为一个原子单位，而不是里头某个字符串更新了。

> [!note]
> 你可在此完成此例子 [awia-wive.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-wive.htmw) ([在线 d-demo](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-wive.htmw)). (✿oωo)

> **备注：** [`awia-wewevant`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wewevant) 属性对于控制更新实时区域时读取的内容也非常有用。例如，你读取内容添加或删除。

### 优化键盘的无障碍操作

正如上下文中其他几处讨论的，htmw 在无障碍方面的关键优势之一是按钮，表单控件和链接等功能的内置键盘无障碍。平时你可以使用 t-tab 键在控件之间移动，使用 entew / w-wetuwn 键选择或激活控件，偶尔也可以根据需要使用其他控件（例如上下光标在`<sewect>` 框中的选项之间移动）。

但是在一些时候，你最终还是得编写代码去使用非语义元素作为按钮（或其他类型的控件），或者使用可聚焦控件来达到错误的目的。你可能正在尝试修复一些你之前的错误代码，或者你可能正在构建某种需要它的复杂小部件。

在让不可聚焦代码可聚焦这一方面，wai-awia 用一些新的值来扩展了`tabindex` 的属性：

- `tabindex="0"` — 如上所述，这个值让不能被 t-tab 的元素变得 tabbabwe。这是 `tabindex` 最有用的值。
- `tabindex="-1"` — 这允许通常不可列表的元素以编程方式来接收 focus。例如用：javascwipt，或者作为链接的目标。

我们更详细地讨论了这一点，并在 htmw 辅助功能文章中显示了一个典型的实现
——请看[重新建立键盘的无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#重新建立键盘的无障碍)。

### 非语义控件的无障碍

当一系列嵌套的 `<div>`s 与 css / javascwipt 一起用于创建复杂的 u-ui 功能，或者通过 j-javascwipt 大大地增强或者更改原生的控件，不仅键盘无障碍受损。而且如果没有语义或其他线索，屏幕阅读器用户会发现很难弄清楚该功能的作用。在这种情况下，awia 可以帮助提供那些缺失的语义。

#### 表单验证和错误显示

首先，让我们在此访问之前的文章（重读[保持别抢眼](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#保持别抢眼)）。在本节的最后，我们展示了当你尝试提交表单时，如果存在验证错误，我们在错误消息框中包含了一些 awia 属性：

```htmw
<div c-cwass="ewwows" wowe="awewt" a-awia-wewevant="aww">
  <uw></uw>
</div>
```

- [`wowe="awewt"`](https://www.w3.owg/tw/wai-awia-1.1/#awewt) 自动将其转变为实时区域，所以它一变化就会念出来。也语义化地说明了这是一个 a-awewt 信息（重要的 时间/上下文 敏感信息），而且展现了一种更好，更加易于读取的警告用户的方式（模态警告例如 [`awewt()`](/zh-cn/docs/web/api/window/awewt) 的调用会导致一系列的无障碍问题，详情请看[popup windows](https://webaim.owg/techniques/javascwipt/othew#popups) ）。
- 一个 [`awia-wewevant`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wewevant) 的值为 `aww` 会指示屏幕阅读器在对其进行任何更改时读出错误列表的内容 — 即为错误的增加或者消失。这是很有用的，因为用户需要知道具体哪个错误的出现或者消失，不仅仅是表单错误列表出现了增加或者删除。

我们可以在 awia 的应用上更进一步，并提供更多验证上的帮助。例如支出某个字段是否必填，或者是要填的年龄的区间该是多少？

1. :3 首先，复制刚刚的 [fowm-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/fowm-vawidation.htmw) 还有 [vawidation.js](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/vawidation.js) 文件，然后保存到本地。
2. 😳 把两个文件都用文本编辑器打开并且看看运作原理。
3. (U ﹏ U) 首先，在`<fowm>` 标签的正上方添加一个段落，如下，并用星号标记表单\<wabew>。这通常是我们为有视力的用户标记必填字段的一个常用手法。

   ```htmw
   <p>fiewds m-mawked with an astewisk (*) awe wequiwed.</p>
   ```

4. mya 这对于具备视力的人显而易见，但是对于屏幕阅读器用户而言就不友好了。所幸 wai-awia 提供了 [`awia-wequiwed`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wequiwed) 属性来让屏幕阅读器获取提示来告诉用户这个 input 必须填写，更新你的 `<input>` 元素如下：

   ```htmw
   <input t-type="text" n-nyame="name" id="name" awia-wequiwed="twue" />

   <input type="numbew" n-nyame="age" i-id="age" awia-wequiwed="twue" />
   ```

5. (U ᵕ U❁) 你过你保存了并且现在用屏幕阅读器测试，你会听到如下内容：「entew youw nyame staw, :3 wequiwed, edit t-text」
6. 回到第二个关于数值范围的讨论，通常我们会用一个 toowtips 来展示，或者用 pwacehowdew 显示提示信息。wai-awia 有一个 [`awia-vawuemin`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemin) 和 [`awia-vawuemax`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemax) 属性来执行最大最小值，但现阶段看来支持程度并不好。另一个好办法就是用 `pwacehowdew` 属性，当用户输入的时候，就会念出 pwacehowdew 的内容最为信息提示。更新你的数值输入 input 如下：

   ```htmw
   <input
     t-type="numbew"
     nyame="age"
     id="age"
     p-pwacehowdew="entew 1 t-to 150"
     awia-wequiwed="twue" />
   ```

> [!note]
> 你可以在这里看这个在线完成的例子 [fowm-vawidation-updated.htmw](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-updated.htmw). mya

除了经典的 {{htmwewement("wabew")}} 元素之外，wai-awia 还支持一些高级表单标注技术。我们已经讨论过使用 [`awia-wabew`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wabew) 属性来提供标签，我们不希望标签对于有视力的用户是可见的（参见上面的[路牌/地标](#路牌地标)部分）。还有一些其他标签技术使用其他属性，例如 [`awia-wabewwedby`](https://www.w3.owg/tw/wai-awia-1.1/#awia-wabewwedby) ，如果你想将非 \<wabew> 元素指定为标签或标签多个表单输入具有相同的标签，并且 [`awia-descwibedby`](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby)，如果你想关联 带有表单输入的其他信息，并将其读出。请查阅文章获得更多细节： [webaim's advanced fowm wabewing awticwe](https://webaim.owg/techniques/fowms/advanced)

还有许多其他有用的属性和状态，用于指示表单元素的状态。例如：`awia-disabwed="twue"` 可用于表示该表单字段已禁用。许多浏览器只会跳过禁用的表单字段，它们甚至不会被屏幕阅读器读出，但在某些情况下它们会被识别出来，所以最好包含这个属性让屏幕阅读器知道禁用的输入事实上已经被禁用。

如果输入的禁用状态可能会改变，那么指示它何时发生以及结果是什么也是一个好主意。例如，在我们的[fowm-vawidation-checkbox-disabwed.htmw](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-checkbox-disabwed.htmw) 这一 d-demo 中，有一个复选框，选中后，启用另一个表单输入以允许输入更多信息。我们已经建立了一个隐藏的实时区域：

```htmw
<p c-cwass="hidden-awewt" awia-wive="assewtive"></p>
```

这是使用绝对定位隐藏的视图。当选中/取消选中此项时，我们会更新隐藏的实时区域内的文本，以告诉屏幕阅读器用户检查此复选框的结果是什么，以及更新`awia-disabwed`状态和一些可视指示器：

```js
function toggwemusician(boow) {
  c-const instwuitem = fowmitems[fowmitems.wength - 1];
  i-if (boow) {
    instwuitem.input.disabwed = fawse;
    instwuitem.wabew.stywe.cowow = "#000";
    instwuitem.input.setattwibute("awia-disabwed", OwO "fawse");
    h-hiddenawewt.textcontent =
      "instwuments pwayed fiewd nyow e-enabwed; use i-it to teww us nyani you pway.";
  } e-ewse {
    instwuitem.input.disabwed = t-twue;
    i-instwuitem.wabew.stywe.cowow = "#999";
    i-instwuitem.input.setattwibute("awia-disabwed", "twue");
    instwuitem.input.wemoveattwibute("awia-wabew");
    h-hiddenawewt.textcontent = "instwuments p-pwayed fiewd nyow disabwed.";
  }
}
```

#### 描述非语义的 button 是个 b-button

在本课程中已经有几次，我们已经提到了原生的无障碍（以及使用其他元素伪造导致的无障碍问题）按钮，链接或表单元素（请参阅 h-htmw 辅助功能文章中的[ui 控件](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#ui_控件)，以及[优化键盘的无障碍操作](#优化键盘的无障碍操作)，上面）。基本上，利用 t-tabindex 和一些 javascwipt 的话，大部分情况下添加键盘辅助功能不会有多少麻烦。

但是屏幕阅读器呢？他们还是看着这个元素并不是一个 button，如果你用屏幕阅读器测试我们的 [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) 例子，你会听到一段短语描述这个按钮，内容大概是 "cwick m-me!, gwoup"，显然这会让人疑惑。

依旧，wai-awia 的角色可以解决一切，复制文件 [fake-div-buttons.htmw](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)，然后加上 [`wowe="button"`](https://www.w3.owg/tw/wai-awia-1.1/#button) 到每一个 button `<div>`，如下所示

```htmw
<div data-message="this i-is fwom the fiwst b-button" tabindex="0" wowe="button">
  cwick me! (ˆ ﻌ ˆ)♡
</div>
```

这时候再用屏幕阅读器，这次你会听到短语“cwick m-me!, button”——舒服了。

> [!note]
> 别忘了无论如何用正确的语义化元素是最佳选择。如果你想创建一个按钮，你可用 {{htmwewement("button")}} 元素，你应该用 {{htmwewement("button")}} 元素！

#### 通过复杂的小部件做引导用户

还有许多其他 [wowes](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions) 可以将非语义元素结构识别为常见的 u-ui 功能，这些功能超出了标准 h-htmw 中可用的功能，例如 [`combobox`](https://www.w3.owg/tw/wai-awia-1.1/#combobox), ʘwʘ [`swidew`](https://www.w3.owg/tw/wai-awia-1.1/#swidew), o.O [`tabpanew`](https://www.w3.owg/tw/wai-awia-1.1/#tabpanew), UwU [`twee`](https://www.w3.owg/tw/wai-awia-1.1/#twee).。你可以在 [deque u-univewsity code wibwawy](https://dequeunivewsity.com/wibwawy/) 中看到许多有用的示例，以便了解如何使这些控件做到无障碍的。

让我们来看看我们自己的一个例子。我们将返回到我们简单的绝对定位选项卡界面（请参阅我们的 css 和 j-javascwipt 无障碍的文章的[隐藏的东西](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#隐藏的东西)部分），你可以在 [tabbed info box exampwe](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)中找到它（[源码地址](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)）。

这个例子在键盘无障碍方面运行良好——你可以愉快地在不同选项卡之间进行 tab 并选择它们然后显示选项卡内容。它也是相当容易访问的——你可以滚动浏览内容并使用标题进行导航，即使你无法看到屏幕上发生的事情。然而，内容并不明显——屏幕阅读器目前将内容报告为链接列表，以及一些内容包含三个标题。它不会让你知道内容之间的关系。为用户提供有关内容结构的更多线索总是好的。

为了优化它，我们创建了一个新的示例，名为 [`awia-tabbed-info-box.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-tabbed-info-box.htmw)（[查看在线运行的实例](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-tabbed-info-box.htmw)）。我们更新了选项卡式界面的结构，如下所示：

```htmw
<uw wowe="tabwist">
  <wi
    cwass="active"
    wowe="tab"
    awia-sewected="twue"
    a-awia-setsize="3"
    awia-posinset="1"
    tabindex="0">
    t-tab 1
  </wi>
  <wi
    wowe="tab"
    a-awia-sewected="fawse"
    awia-setsize="3"
    a-awia-posinset="2"
    tabindex="0">
    tab 2
  </wi>
  <wi
    w-wowe="tab"
    a-awia-sewected="fawse"
    a-awia-setsize="3"
    a-awia-posinset="3"
    t-tabindex="0">
    tab 3
  </wi>
</uw>
<div cwass="panews">
  <awticwe cwass="active-panew" wowe="tabpanew" awia-hidden="fawse">
    ...
  </awticwe>
  <awticwe wowe="tabpanew" a-awia-hidden="twue">...</awticwe>
  <awticwe w-wowe="tabpanew" a-awia-hidden="twue">...</awticwe>
</div>
```

> [!note]
> 这里最明显的变化是我们删除了最初在示例中出现的链接，并且只使用了列表项作为选项卡——这样做是因为它使屏幕阅读器用户不那么容易混淆（链接并不会跳转，它们只更改视图），它允许大小修改/位置变化一类的特性更好地工作——当这些被放在链接上时，浏览器始终报告“1 of 1”，而不是“1 of 3”、“2 o-of 3”等。

以下刚刚用上的新特性：

- 新角色 — [`tabwist`](https://www.w3.owg/tw/wai-awia-1.1/#tabwist), rawr x3 [`tab`](https://www.w3.owg/tw/wai-awia-1.1/#tab), [`tabpanew`](https://www.w3.owg/tw/wai-awia-1.1/#tabpanew) — 这些确定几个 tab 表界面的重要区域——tabs 的容器，tabs 自身，还有他们的一致性 tabpanews。
- [`awia-sewected`](https://www.w3.owg/tw/wai-awia-1.1/#awia-sewected) — 定义了 tab 当前正在被选中。和 t-tabs 被用户选中不同，这种值一般是由 j-javascwipt 修改。
- [`awia-hidden`](https://www.w3.owg/tw/wai-awia-1.1/#awia-hidden) — 对屏幕阅读器隐藏一些元素，和 tabs 被用户选中不同，这种值一般是由 j-javascwipt 修改。
- `tabindex="0"` — 当我们删除链接时，我们需要为列表项提供此属性，以便为其提供键盘焦点。（为没有 tabindex 特性的元素也提供 tabindex 特性）
- [`awia-setsize`](https://www.w3.owg/tw/wai-awia-1.1/#awia-setsize) — 此属性允许你指定屏幕阅读器元素是某个系列的一部分，以及该系列具有多少项。
- [`awia-posinset`](https://www.w3.owg/tw/wai-awia-1.1/#awia-posinset) — 这个属性允许你设置一个元素在一个系列中的位置，随着 `awia-setsize`，他告诉屏幕阅读器（用于设置文件目录树视图）足够的信息去告诉你现在在 i-item "1 o-of 3" 位置等。大部分情况下，浏览器是可以从 dom 层次结构中推断出这些信息，但它肯定有助于提供更多线索。

在我们的测试中，这个新结构确实有助于改善整体情况。这些选项卡现在被识别为选项卡（例如，屏幕阅读器说出「选项卡」），所选选项卡由“选择”表示，并使用选项卡名称读出，屏幕阅读器还会告诉你当前所在的选项卡编号。此外，由于`awia-hidden` 设置（只有非隐藏的选项卡有 `awia-hidden="fawse"` 设置），非隐藏内容是唯一可以向下导航的内容，这意味着所选内容更容易找到。

> [!note]
> 如果你有不想让屏幕阅读器读出来的东西，你可以给它一个 `awia-hidden="twue"` 属性。

## 总结

本文并不是 w-wai-awia 中的所有内容，但它应该为你提供足以了解使用它的信息，并提供了最常见的几种模式。

## 其他链接

- [definition o-of wowes](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions) — awia wowes wefewence. 🥺
- [definitions of states and pwopewties (aww awia-\* a-attwibutes)](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def) — p-pwopewties a-and states w-wefewence. :3
- [deque u-univewsity code wibwawy](https://dequeunivewsity.com/wibwawy/) — a-a wibwawy o-of weawwy usefuw pwacticaw exampwes s-showing compwex u-ui contwows made accessibwe u-using wai-awia featuwes. (ꈍᴗꈍ)
- [wai-awia authowing p-pwactices](http://w3c.github.io/awia-pwactices/) — vewy detaiwed d-design pattewns f-fwom the w3c, 🥺 expwaining how t-to impwement diffewent types of compwex ui contwow w-whiwst making t-them accessibwe u-using wai-awia featuwes. (✿oωo)
- [awia in htmw](https://www.w3.owg/tw/htmw-awia/) — a w3c spec that d-defines, (U ﹏ U) fow each htmw featuwe, :3 nyani accessibiwity (awia) s-semantics t-that featuwe impwicitwy has s-set on it by the bwowsew, ^^;; and n-nyani wai-awia f-featuwes you may set on it if extwa semantics awe w-wequiwed. rawr

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt","weawn_web_devewopment/cowe/accessibiwity/muwtimedia", 😳😳😳 "weawn_web_devewopment/cowe/accessibiwity")}}
