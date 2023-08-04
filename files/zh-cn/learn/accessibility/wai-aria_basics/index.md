---
title: WAI-ARIA 基础
slug: Learn/Accessibility/WAI-ARIA_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

紧接上文继续，有时候，我们制作涉及非语义 HTML 和动态的 JavaScript 内容更新的复杂 UI 控件可能很困难。**WAI-ARIA** 是一项技术，它可以通过浏览器和一些辅助技术来帮助我们进一步地识别以及实现语义化，这样一来能帮助我们解决问题，也让用户可以了解发生了什么。接下来我们将展示如何运用它来优化无障碍体验：

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提要求：</th>
      <td>
        基础的电脑知识，对于 HTML，CSS，JavaScript 的了解，<a
          href="/zh-CN/docs/Learn/Accessibility/"
          >还有对于前文课程的了解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>
        进一步了解
        WAI-ARIA，明白他如何提供有效的语义，以便接下来在有需要的时候提供无障碍优化。
      </td>
    </tr>
  </tbody>
</table>

## 何为 WAI-ARIA?

让我们开始看看何为 WAI-ARIA，以及它能给我们什么用。

### 一堆新的问题

当 Web 应用开始变得越来越复杂和动态化，一堆全新的无障碍访问问题和特性接踵而至。

例如，HTML5 提出了几种语义化标签用于定义常规页面的特性 (例如 nav, footer 等等) 。在这些标签可用之前，我们一般简单地用 div 带上 ID 抑或是 class 来解决问题，例如：`<div class="nav">`。但是这种实践是问题丛生的，因为没有简单的方法可以轻松地用可编程的方法找到特定页面功能，例如主导航。

最早的解决方案是加一个或者多个隐藏的链接来跳转到我们想要的位置，例如（这里用导航举例）：

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

但这仍然是不准确的，而且只能在屏幕阅读器开启页面顶部读取时使用。

另一个例子：应用开始支持一些复杂的类型输入，像是日期选择器可选择日期，抑或是范围选择器可以用滑块选择值，HTML5 提供了以下的类型：

```html
<input type="date" /> <input type="range" />
```

他对于跨浏览器的支持并不好，而且他的样式修改也很麻烦，这使得他在网页的集成设计上难以有所用途。所以我们常常会用 JavaScript 库来做这事，所以会用一系列嵌套的 div 或者带有 class 的 table 元素，然后用 CSS 来制定样式，JavaScript 来控制行为。

这样的问题是视觉上这样做事可行的，但屏幕阅读器对此会感到一无所知，他只能告诉用户她看到一堆复杂结构的元素，且毫无语义可言。

### 进入 WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) 是 W3C 编写的规范，定义了一组可用于其他元素的 HTML 特性，用于提供额外的语义化以及改善缺乏的无障碍。以下是规范中三个主要的特性：

- **角色** — 这定义了元素是干什么的。许多「标志性的角色」，其实重复了 HTML5 的结构元素的语义价值。例如 `role="navigation"` ({{htmlelement("nav")}}) 或者 `role="complementary"` ({{htmlelement("aside")}})，这也有一些描述其他页面结构的（角色），例如 `role="banner"`, `role="search"`, `role="tabgroup"`, `role="tab"` 等等。我们通常能从 UI 层面找到它们。
- **属性** — 我们能通过定义一些属性给元素，让他们具备更多的语义。例如： `aria-required="true"` 意味着元素在表单上是必填的。然而 `aria-labelledby="label"` 允许你在元素上设置一个 ID，用于[`labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)引用作为屏幕阅读器指定的 label 内容，多个也可以。当然，下面这个代码是不行的： `<label for="input">` 。举个例子：你可以用 `aria-labelledby` 指定包含在 a 标签中的 key 描述{{htmlelement("div")}} 是多个 table 表格的 label，或者将它指定为 img 标签的 alt 内容 — 而无需重复在每一个 img 里头定义。如果迷糊了，你可以在这里看到例子： [Text alternatives](/zh-CN/docs/Learn/Accessibility/HTML?document_saved=true#Text_alternatives).
- **状态** —用于表达元素当前的条件的特殊属性，例如 `aria-disabled="true"`，屏幕阅读器就会这个表单禁止输入。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 Javascript。

关于 WAI-ARIA 属性重要的一点是它不会对 web 页面有任何影响，除了让更多的信息从浏览器暴露给 accessibility APIs (无障碍 API)，这也是屏幕阅读器这一类软件的信息源。WAI-ARIA 不会影响网页的结构，以及 DOM 等等，尽管这些属性可用于作为 css 选择器。

> **备注：** 关于 ARIA 的角色和他的用法，如需了解更多信息，尽在 WAI-ARIA 规范，查看 [角色定义](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)
>
> 规范同时也包含了属性和状态的一个列表，链接有更多详尽信息：[查看 属性和状态的定义（所有的 aria-\* 属性）](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)

### 在哪里支持 WAI-ARIA？

这不是一个容易回答的问题。很难找到一个确定的资源，说明支持 WAI-ARIA 的哪些功能，以及在哪里，因为

1. WAI-ARIA 规范的特性太多了。
2. 操作系统、浏览器、屏幕阅读器三者相加的组合太多了，这些都需要考虑。

最后一个关键点——首先使用屏幕阅读器，你的操作系统需要运行具有必要的辅助功能 API 的浏览器，以便公开屏幕阅读器完成工作所需的信息。大部分流行的操作系统都有一到两个支持屏幕阅读器的浏览器。Paciello 组织有一个新的帖子，以供参考： [Rough Guide: browsers, operating systems and screen reader support updated](https://www.paciellogroup.com/blog/2014/10/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

接下来，你需要考虑下有问题的浏览器是否支持无障碍特性以及提供他们 API 格式的信息暴露，并且屏幕阅读器是否识别信息并且正确地传达给用户。

1. 文章到现在，可以看得出浏览器端对于无障碍的支持做的很好。 [caniuse.com](http://caniuse.com/#feat=wai-aria) 这一网站显示全球浏览器支持 WAI-ARIA 的比率达到了 88%。
2. 屏幕阅读器支持无障碍特性反而没达到这个水平，但是主流的屏幕阅读器做到了。你可以通过查看 Powermapper 来了解支持级别 [WAI-ARIA Screen reader compatibility](http://www.powermapper.com/tests/screen-readers/aria/) 。

我们目的不是详细介绍所有的 WAI-ARIA 特性，以及它大部分支持的细节。相反，介绍最主要的 WAI-ARIA 功能。我们没有提到的任何支持细节，您可以假定该特性得到了良好的支持。我们将清楚地介绍例外情况。

> **备注：** 一些 JavaScript 库支持 WAI-ARIA，意味着生成 UI 界面时，例如复杂的表单控件，他们会添加 ARIA 属性来优化它的无障碍特性。如果你再找一些第三方 JavaScript 解决方案来进行快速的 UI 开发，当你做选择的时候，必须重视 UI 小部件的无障碍。一个良好的例子就是 jQuery UI (请看 [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) 还有 [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html)。

### 何时你应使用 WAI-ARIA?

我们过去讨论了一些促使 WAI-ARIA 诞生的问题。但基本上是以下四个主要领域：

1. **路标/地标**（**Signposts/Landmarks**）**：** ARIA 的 `角色` 属性值可以作为地标来复制 HTML5 元素的语义化（例如 nav tag）。或者超越 HTML5 的语义，给不同的功能块提供「路标」，例如 `search`, `tabgroup`, `tab`, `listbox` 等等。
2. **动态的内容更新：** 屏幕阅读器往往难以报告一直变化的内容，用无障碍特性我们能使用 `aria-live` 来通知屏幕阅读器某一部分的内容更新了。例如[XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest) 或者 [DOM APIs](/zh-CN/docs/Web/API/Document_Object_Model)。
3. **优化键盘的无障碍操作**: 默认的 HTML 元素是具有自带的键盘辅助功能的。当其他元素与 JavaScript 一起进行交互时，键盘的辅助功能和屏幕阅读器的报告会因此收到影响（例如你将会难以用 tab 到达理想的位置）。这是无法避免的，WAI-ARIA 提供了提供了一种允许其他元素获得焦点的方法（使用 `tabindex`）。
4. **非语义控件的无障碍**：当一系列嵌套的 `<div>` 与 CSS / JavaScript 一起用于创建复杂的 UI 功能，或者通过 JavaScript 大大地增强或者更改原生的控件，无障碍将会变得极其困难——屏幕阅读器将会难以找到语义内容线索。在这种情况下，AIRA 可以帮助提供缺少了的功能，例如 `button`, `listbox`，或者 `tabgroup`，另外和 aria-required 或 aria-posinset 这样的属性可以提供有关功能的更多线索。

注意：**你只在需要的情况下使用无障碍特性！**理想的情况下，你只要用原生的 HTML 来实现屏幕阅读器所需的语义化内容即可。有些时候这是不可能的，一来是你对于代码的整体的控制是有限的，另一方面是总会有复杂到原生 HTML 无法支持的功能需要你实现。在这个场景下，WAI-ARIA 将会变成有价值的可访问优化功能。

**但还是要重申：当你需要的时候再使用无障碍特性！**

> **备注：** 另外，请尝试确保你的真实用户来测试你的网站：普通人，使用屏幕阅读器的用户，使用键盘导航的人。他们会提供你更多的见解。

## 实用的 WAI-ARIA 实现

在下一节中，我们将更详细地研究这四个方，并提供一些实例。继续之前你最好安装一个屏幕阅读器，以便你测试接下来的用例。（接下来的屏幕阅读器默认为 Mac 的 VoiceOver，Windows 用户可以尝试 JAWS 或者 Window Eyes）

查看我们的 [testing screenreaders](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) 得到更多关于屏幕阅读器的信息。

### 路牌/地标（**Signposts/Landmarks**）

WAI-ARIA 给浏览器增加了 [`role`](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) 属性，这允许我们给站点中的元素增加我们想要的语义属性。第一个主要区域便是用于为屏幕阅读器提供信息，以便用户可以找到常见的页面元素。我们来举个例子，一个[没有角色的站点](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles)的例子（[在线演示](http://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)）的页面结构：

```html
<header>
  <h1>...</h1>
  <nav>
    <ul>
      ...
    </ul>
    <form>
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>
```

如果你用现代浏览器打开，并用屏幕阅读器测试，你就已经得到你要的信息了。例如 VoiceOver 会给你以下信息（会以英文念出）：

- 在 `<header>` 元素 — "banner, 2 items" (它包含标题和 `<nav>`).
- 在 `<nav>` 元素 — "navigation 2 items" (它包含一个列表和一个表单).
- 在 `<main>` 元素 — "main 2 items" (它包含文章和侧边栏).
- 在 `<aside>` 元素 — "complementary 2 items" (它包含列表和标题。
- 在搜索表单输入 — "Search query, insertion at beginning of text".
- 在 `<footer>` 元素 — "footer 1 item".

如果你转到 VoiceOver 的地标菜单（使用 VoiceOver 绑定键（你可以在 VoiceOver Utility 中设置） + U 访问，然后使用光标或者键盘来选择菜单选项），你将看到大部分元素都已很好地列出，因此可以快速访问它们。

![](landmarks-list.png)

尽管如此，我们可以做的更好。这个搜索表单是一个人们愿意找到的重要的地标，我们可以设置 input 的类别为 search (`<input type="search">`)。另外，在一些老的浏览器（尤其是 IE8）是无法识别的这些 HTML5 的元素语义化的。

让我们来优化上文代码并且用上无障碍特性。首先我们给 HTML 的结构加上角色。你可以复制上文 demo 的 index.html 和 style.css 继续修改，或者看我们的网站无障碍角色版本例子（[在线 demo](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)），结构如下：

```html
<header>
  <h1>...</h1>
  <nav role="navigation">
    <ul>
      ...
    </ul>
    <form role="search">
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer>...</footer>
```

我们用了一个额外的功能：input 元素用了属性 [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label), 它给它一个描述性标签，可以由屏幕阅读器读出，尽管我们没有 label 元素。在这些情况下，这非常有用——像这样的搜索表单是一个非常常见的，易于识别的功能，添加 label 会破坏页面设计。

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

现在我们再用 VoiceOver，会得到以下改进：

- 搜索表单在浏览页面时和地标菜单中都作为单独的项目存在。
- 因为有 `aria-label` ，那么读取到这个 input 他的内容会被高亮念出。

除此之外，为了让 IE8 等旧版浏览器的用户更容易访问该网站，ARIA 角色的使用就很值得了。如果由于某种原因，你的网站仅使用\<div> 构建，那么你肯定很需要用 ARIA 角色以提供所需的语义！

搜索表单的改进语义表明当超出 HTML5 中可用的语义时 ARIA 可以实现的功能。你接下来可以看到这些语义和 ARIA 属性的强大功能，尤其是 [非语义控件的无障碍](#非语义控件的无障碍)那一段。接下来我们将明白 ARIA 如何在进行动态内容更新时给我们帮助。

### 动态内容更新

使用屏幕阅读器可以轻松访问读取到 DOM 中的内容，从文本内容到附加到图像的 alt 文本。所以具有大量文本内容的传统静态网站易于为视碍人士提供信息。

问题在于现代 Web 应用程序通常不仅仅是静态文本——它们往往有很多动态更新内容，即通过 [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)，[Fetch](/zh-CN/docs/Web/API/Fetch_API) 或[DOM API](/zh-CN/docs/Web/API/Document_Object_Model) 等机制重新加载整个页面的内容。这些有时被称为**实时区域**。

我们来看一个小例子—— [aria-no-live.html](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) ([在线 demo](http://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html))。在这个例子我们哟一个小的随机引用块：

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

我们的 JavaScript 从 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 加载一个 JSON 文件里头包含了一系列的名人名言，一旦完成我们就开始用一个 [`setInterval()`](/zh-CN/docs/Web/API/WindowTimers/setInterval) 循环以十秒一次的频率显示出来。

```js
var intervalID = window.setInterval(showQuote, 10000);
```

这当然是可行的，但是对于无障碍可不友善——这种内容变化是不会被屏幕阅读器察觉到的，所以用户不会发现发生了什么。这是一个简单的例子，但你可以想象一下：如果你开发的一个复杂 UI 而且内容频繁变化的应用，例如聊天室，或者一个策略游戏的界面，或者一个实时更新的购物车展示。如果没有某种方式提示用户有内容更新，那就不可能以任何有效的方式来使用应用。

幸运的是，WAI-ARIA 提供了一种有效的机制来发起提示 —— [`aria-live`](https://www.w3.org/TR/wai-aria-1.1/#aria-live)。将此应用于元素会让屏幕阅读器读出更新的内容。读取内容的紧急程度取决于属性值：

- `off`: 默认值，更新不会提醒。
- `polite`: 只有用户空闲的情况下提醒。
- `assertive`: 尽快提醒。
- `rude`: 会以打断用户操作的方式直接提醒。

通常来说 `assertive` 设置足以让你的更新在显示时按时序读出，因此，如果改变多次，那么他只会念出最后一个改变。除非紧急程度高到需要覆盖其他的更新才选择使用 `rude` 。

我们可以复制 [aria-no-live.html](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) 和 [quotes.json](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) ，然后像下面一样更新你的 `<section>` tag ：

```html
<section aria-live="assertive"></section>
```

这会让你的屏幕阅读器在更新时可以读取内容。

> **备注：** 当你用 `file://` 协议头来发 `XMLHttpRequest` 大部分浏览器会抛出 security exception。所以你可能要设置一个 web 服务器来作为请求源，例如，[使用 GitHub](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages)，或者设置一个本地服务器 [Python's SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)。

这里有一个附加的考虑—— 只读取更新的文本位。如果我们总是读出标题可能会很好，这样用户就可以记住正在读出的内容。为了能做到这个，我们增加了 [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) 给 section。再次更新 `<section>`，像这样：

```html
<section aria-live="assertive" aria-atomic="true"></section>
```

这个 `aria-atomic="true"` 属性告诉屏幕阅读器去读取整个元素的内容作为一个原子单位，而不是里头某个字符串更新了。

> **备注：** 你可在此完成此例子 [aria-live.html](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([在线 demo](http://mdn.github.io/learning-area/accessibility/aria/aria-live.html)).

> **备注：** [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) 属性对于控制更新实时区域时读取的内容也非常有用。例如，你读取内容添加或删除。

### 优化键盘的无障碍操作

正如上下文中其他几处讨论的，HTML 在无障碍方面的关键优势之一是按钮，表单控件和链接等功能的内置键盘无障碍。平时你可以使用 Tab 键在控件之间移动，使用 Enter / Return 键选择或激活控件，偶尔也可以根据需要使用其他控件（例如上下光标在`<select>` 框中的选项之间移动）。

但是在一些时候，你最终还是得编写代码去使用非语义元素作为按钮（或其他类型的控件），或者使用可聚焦控件来达到错误的目的。您可能正在尝试修复一些您之前的错误代码，或者您可能正在构建某种需要它的复杂小部件。

在让不可聚焦代码可聚焦这一方面，WAI-ARIA 用一些新的值来扩展了`tabindex` 的属性：

- `tabindex="0"` — 如上所述，这个值让不能被 tab 的元素变得 tabbable。这是 `tabindex` 最有用的值。
- `tabindex="-1"` — 这允许通常不可列表的元素以编程方式来接收 focus。例如用：JavaScript，或者作为链接的目标。

我们更详细地讨论了这一点，并在 HTML 辅助功能文章中显示了一个典型的实现
——请看 [Building keyboard accessibility back in](/zh-CN/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in).

### 非语义控件的无障碍

当一系列嵌套的 `<div>`s 与 CSS / JavaScript 一起用于创建复杂的 UI 功能，或者通过 JavaScript 大大地增强或者更改原生的控件，不仅键盘无障碍受损。而且如果没有语义或其他线索，屏幕阅读器用户会发现很难弄清楚该功能的作用。在这种情况下，ARIA 可以帮助提供那些缺失的语义。

#### 表单验证和错误显示

首先，让我们在此访问之前的文章（重读 [Keeping it unobtrusive](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript#Keeping_it_unobtrusive)）。在本节的最后，我们展示了当您尝试提交表单时，如果存在验证错误，我们在错误消息框中包含了一些 ARIA 属性：

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](https://www.w3.org/TR/wai-aria-1.1/#alert) 自动将其转变为实时区域，所以它一变化就会念出来。也语义化地说明了这是一个 alert 信息（重要的 时间/上下文 敏感信息），而且展现了一种更好，更加易于读取的警告用户的方式（模态警告例如 [`alert()`](/zh-CN/docs/Web/API/Window/alert) 的调用会导致一系列的无障碍问题，详情请看[Popup Windows](http://webaim.org/techniques/javascript/other#popups) ）。
- 一个 [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) 的值为 `all` 会指示屏幕阅读器在对其进行任何更改时读出错误列表的内容 — 即为错误的增加或者消失。这是很有用的，因为用户需要知道具体哪个错误的出现或者消失，不仅仅是表单错误列表出现了增加或者删除。

我们可以在 ARIA 的应用上更进一步，并提供更多验证上的帮助。例如支出某个字段是否必填，或者是要填的年龄的区间该是多少？

1. 首先，复制刚刚的 [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) 还有 [validation.js](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) 文件，然后保存到本地。
2. 把两个文件都用文本编辑器打开并且看看运作原理。
3. 首先，在`<form>` 标签的正上方添加一个段落，如下，并用星号标记表单\<label>。这通常是我们为有视力的用户标记必填字段的一个常用手法。

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. 这对于具备视力的人显而易见，但是对于屏幕阅读器用户而言就不友好了。所幸 WAI-ARIA 提供了 [`aria-required`](https://www.w3.org/TR/wai-aria-1.1/#aria-required) 属性来让屏幕阅读器获取提示来告诉用户这个 input 必须填写，更新你的 `<input>` 元素如下：

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. 你过你保存了并且现在用屏幕阅读器测试，你会听到如下内容：「Enter your name star, required, edit text」
6. 回到第二个关于数值范围的讨论，通常我们会用一个 tooltips 来展示，或者用 placeholder 显示提示信息。WAI-ARIA 有一个 [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) 和 [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax) 属性来执行最大最小值，但现阶段看来支持程度并不好。另一个好办法就是用 `placeholder` 属性，当用户输入的时候，就会念出 placeholder 的内容最为信息提示。更新你的数值输入 input 如下：

   ```html
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Enter 1 to 150"
     aria-required="true" />
   ```

> **备注：** 你可以在这里看这个在线完成的例子 [form-validation-updated.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

除了经典的 {{htmlelement("label")}} 元素之外，WAI-ARIA 还支持一些高级表单标注技术。我们已经讨论过使用 [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) 属性来提供标签，我们不希望标签对于有视力的用户是可见的（参见上面的 [路牌/地标（Signposts/Landmarks）](#路牌地标_（signpostslandmarks）) 部分）。还有一些其他标签技术使用其他属性，例如 [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) ，如果你想将非\<label>元素指定为标签或标签多个表单输入具有相同的标签，并且 [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)，如果你想关联 带有表单输入的其他信息，并将其读出。请查阅文章获得更多细节： [WebAIM's Advanced Form Labeling article](http://webaim.org/techniques/forms/advanced)

还有许多其他有用的属性和状态，用于指示表单元素的状态。例如：`aria-disabled="true"` 可用于表示该表单字段已禁用。许多浏览器只会跳过禁用的表单字段，它们甚至不会被屏幕阅读器读出，但在某些情况下它们会被识别出来，所以最好包含这个属性让屏幕阅读器知道禁用的输入事实上已经被禁用。

如果输入的禁用状态可能会改变，那么指示它何时发生以及结果是什么也是一个好主意。例如，在我们的[form-validation-checkbox-disabled.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) 这一 demo 中，有一个复选框，选中后，启用另一个表单输入以允许输入更多信息。我们已经建立了一个隐藏的实时区域：

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

这是使用绝对定位隐藏的视图。当选中/取消选中此项时，我们会更新隐藏的实时区域内的文本，以告诉屏幕阅读器用户检查此复选框的结果是什么，以及更新`aria-disabled`状态和一些可视指示器：

```js
function toggleMusician(bool) {
  var instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### 描述非语义的 button 是个 button

在本课程中已经有几次，我们已经提到了原生的无障碍（以及使用其他元素伪造导致的无障碍问题）按钮，链接或表单元素（请参阅 HTML 辅助功能文章中的[UI 控件](/zh-CN/docs/Learn/Accessibility/HTML#UI_controls) ，以及[优化键盘的无障碍操作](#优化键盘的无障碍操作)，上面）。基本上，利用 tabindex 和一些 JavaScript 的话，大部分情况下添加键盘辅助功能不会有多少麻烦。

但是屏幕阅读器呢？他们还是看着这个元素并不是一个 button，如果你用屏幕阅读器测试我们的 [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) 例子，你会听到一段短语描述这个按钮，内容大概是 "Click me!, group"，显然这会让人疑惑。

依旧，WAI-ARIA 的角色可以解决一切，复制文件 [fake-div-buttons.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)，然后加上 [`role="button"`](https://www.w3.org/TR/wai-aria-1.1/#button) 到每一个 button `<div>`，如下所示

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

这时候再用屏幕阅读器，这次你会听到短语 "Click me!, button" ——舒服了。

> **备注：** 别忘了无论如何用正确的语义化元素是最佳选择。如果你想创建一个按钮，你可用 {{htmlelement("button")}} 元素，你应该用 {{htmlelement("button")}} 元素！

#### 通过复杂的小部件做引导用户

还有许多其他 [roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) 可以将非语义元素结构识别为常见的 UI 功能，这些功能超出了标准 HTML 中可用的功能，例如 [`combobox`](https://www.w3.org/TR/wai-aria-1.1/#combobox), [`slider`](https://www.w3.org/TR/wai-aria-1.1/#slider), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel), [`tree`](https://www.w3.org/TR/wai-aria-1.1/#tree).。你可以在 [Deque university code library](https://dequeuniversity.com/library/) 中看到许多有用的示例，以便了解如何使这些控件做到无障碍的。

让我们来看看我们自己的一个例子。我们将返回到我们简单的绝对定位选项卡界面（请参阅我们的 CSS 和 JavaScript 无障碍的文章的 [Hiding things](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript#Hiding_things) 段落），你可以在 [Tabbed info box example](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)中找到它（[源码地址](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html)）。

这个例子在键盘无障碍方面运行良好 —— 你可以愉快地在不同选项卡之间进行 tab 并选择它们然后显示选项卡内容。它也是相当容易访问的 —— 你可以滚动浏览内容并使用标题进行导航，即使你无法看到屏幕上发生的事情。然而，内容并不明显 —— 屏幕阅读器目前将内容报告为链接列表，以及一些内容包含三个标题。它不会让你知道内容之间的关系。为用户提供有关内容结构的更多线索总是好的。

为了优化它，我们创建了一个新的例子，名为： [aria-tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) ([看在线 demo](http://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). 我们更新了选项卡式界面的结构，如下所示：

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">...</article>
  <article role="tabpanel" aria-hidden="true">...</article>
</div>
```

> **备注：** 这里最明显的变化是我们删除了最初在示例中出现的链接，并且只使用了列表项作为选项卡 - 这样做是因为它使屏幕阅读器用户不那么容易混淆（链接并不会跳转，它们只更改视图），它允许 大小修改/位置变化 一类的 feature 更好地工作 —— 当这些被放在链接上时，浏览器始终报告"1 of 1"，而不是"1 of 3 "，"2 of 3"等

以下刚刚用上的新特性：

- 新角色 — [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist), [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) — 这些确定几个 tab 表界面的重要区域——tabs 的容器，tabs 自身，还有他们的一致性 tabpanels。
- [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) — 定义了 tab 当前正在被选中。和 tabs 被用户选中不同，这种值一般是由 JavaScript 修改。
- [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) — 对屏幕阅读器隐藏一些元素，和 tabs 被用户选中不同，这种值一般是由 JavaScript 修改。
- `tabindex="0"` — 当我们删除链接时，我们需要为列表项提供此属性，以便为其提供键盘焦点。（为没有 tabindex 特性的元素也提供 tabindex 特性）
- [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) — 此属性允许您指定屏幕阅读器元素是某个系列的一部分，以及该系列具有多少项。
- [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) — 这个属性允许你设置一个元素在一个系列中的位置，随着 `aria-setsize`，他告诉屏幕阅读器（用于设置文件目录树视图）足够的信息去告诉你现在在 item "1 of 3" 位置等。大部分情况下，浏览器是可以从 DOM 层次结构中推断出这些信息，但它肯定有助于提供更多线索。

在我们的测试中，这个新结构确实有助于改善整体情况。这些选项卡现在被识别为选项卡（例如，屏幕阅读器说出「选项卡」），所选选项卡由“选择”表示，并使用选项卡名称读出，屏幕阅读器还会告诉你当前所在的选项卡编号。此外，由于`aria-hidden` 设置（只有非隐藏的选项卡有 `aria-hidden="false"` 设置），非隐藏内容是唯一可以向下导航的内容，这意味着所选内容更容易找到。

> **备注：** 如果你有不想让屏幕阅读器读出来的东西，你可以给它一个 `aria-hidden="true"` 属性。

## 总结

本文并不是 WAI-ARIA 中的所有内容，但它应该为你提供足以了解使用它的信息，并提供了最常见的几种模式。

## 其他链接

- [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — ARIA roles reference.
- [Definitions of States and Properties (all aria-\* attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) — properties and states reference.
- [Deque university code library](https://dequeuniversity.com/library/) — a library of really useful practical examples showing complex UI controls made accessible using WAI-ARIA features.
- [WAI-ARIA Authoring Practices](http://w3c.github.io/aria-practices/) — very detailed design patterns from the W3C, explaining how to implement different types of complex UI control whilst making them accessible using WAI-ARIA features.
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) — A W3C spec that defines, for each HTML feature, what accessibility (ARIA) semantics that feature implicitly has set on it by the browser, and what WAI-ARIA features you may set on it if extra semantics are required.

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
