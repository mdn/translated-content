---
title: HTML 中的图片
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 26aeffa549ae61cd863afcb8fdcb3ba0e1e33b0c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

最初，web 仅有文字，非常乏味。幸运的是，不久之后，我们就能在网页中嵌入图片和其他更有趣的内容类型了。尽管有多种多媒体类型需要考虑，但是从在网页中嵌入简单图片的 {{htmlelement("img")}} 元素开始更加合理。在这篇文章中，我们将详细介绍如何使用 {{htmlelement("img")}} 元素，包括它的基本属性，如何用 {{htmlelement("figure")}} 元素为它添加标题，它与 {{glossary("CSS")}} 背景图片的关系，以及其他 web 平台上的图形类型。

<table>
<caption>多媒体和嵌入图片</caption>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >安装基本软件</a
        >，掌握
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >处理文件</a
        >的基本知识，熟悉 HTML 基础（参见
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >HTML 入门</a
        >。）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何在 HTML 中嵌入简单的图片，为它们添加标题，以及 HTML 图片与 CSS 背景图片的关系。
      </td>
    </tr>
  </tbody>
</table>

## 怎样将图片放到网页上？

要想在网页上放置简单的图像，我们需要使用 {{htmlelement("img")}} 元素。这个元素是{{Glossary("void element", "空元素")}}（即无法包含任何子内容和结束标签），它需要两个属性才能起作用：`src` 和 `alt`。`src` 属性包含一个 URL，该 URL 指向要嵌入页面的图像。`src` 属性可以是相对 URL 或绝对 URL，这与 {{htmlelement("a")}} 元素的 `href` 属性类似。如果没有 `src` 属性，`img` 元素就没有图像可加载。

['alt' 属性的描述如下](#备选文本)。

> [!NOTE]
> 为了更容易理解下面的内容，建议你阅读 [URL 和路径简明入门](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links#统一资源定位符（url）与路径（path）快速入门)来复习一下相对和绝对 URL 的概念。

例如，如果你的图像叫做 `dinosaur.jpg`，并且它位于与 HTML 页面相同的目录中，你可以这样嵌入图像：

```html
<img src="dinosaur.jpg" alt="恐龙" />
```

如果图像在名为 `images` 的子目录中，该子目录位于与 HTML 页面相同的目录中，你可以这样嵌入它：

```html
<img src="images/dinosaur.jpg" alt="恐龙" />
```

以此类推。

> [!NOTE]
> 搜索引擎还会读取图像文件名并将其计入 SEO。因此，你应该为图像起一个描述性的文件名；`dinosaur.jpg` 比 `img835.png` 更好。

你也可以使用图像的绝对 URL 进行嵌入，例如：

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="恐龙" />
```

然而，不建议使用绝对 URL 进行链接。你需要托管你想要在网站上使用的图像，在比较简单的情况下，通常我们会把网站的图像保存在与 HTML 相同的服务器上。此外，从维护的角度来说，使用相对 URL 比绝对 URL 更有效率（当你将网站迁移到不同的域名时，你不需要更新所有 URL，使其包含新域名）。在更高级的设置中，你可能会使用[内容分发网络（CDN）](/zh-CN/docs/Glossary/CDN)来传递图像。

如果这些图像并非由你创建，你应该查看它们发布的许可证条款，确保自己有使用它们的权限（有关更多信息，请参阅下面的[媒体资源和许可证](#媒体资源和许可)）。

> [!WARNING]
> _未经许可_，*绝不要*将 `src` 属性指向其他网站上的图像。这被称为“热链接（hotlinking）”。大多数人认为这是不道德的，因为这会导致每当有人访问你的页面，都会有另一些不知情的人为图像交付带宽费用。这也导致你无法掌控图像，图像有可能在你不知情的情况下，被删除或替换为尴尬的内容。

无论是使用绝对 URL 还是相对 URL，上述代码片段将会得到以下结果：

![一个嵌入到浏览器中的恐龙基本图像，上面写着“Images in HTML”](basic-image.png)

> [!NOTE]
> 像 {{htmlelement("img")}} 和 {{htmlelement("video")}} 这样的元素有时被称为**可替换元素（replaced elements）**。这是因为元素的内容和大小由外部资源（如图像或视频文件）定义，而不是由元素本身的内容定义。你可以在{{glossary("Replaced elements", "可替换元素")}}中了解更多相关信息。

> [!NOTE]
> 你也可以在 [GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) 仓库中找到本节的完整示例（请参阅[源代码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)）。

### 备选文本

我们接下来要看的属性是 `alt`。它的值应该是图片的文本描述，用于在图片无法显示或者因为网速慢而加载缓慢的情况下使用。例如，我们可以把上面的代码修改成这样：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

测试 `alt` 文本的最简单方法是故意拼错文件名。如果我们的图片名字拼成 `dinosooooor.jpg`，浏览器就不会显示图片，而会显示 `alt` 文本：

![标题为“Images in HTML”，但是这次恐龙图片没有显示，在它原有的位置只有 alt 文本。](alt-text.png)

那么，为什么我们需要备选文本呢？它可以派上用场的地方有很多：

- 用户有视力障碍，需要通过[屏幕阅读器](https://zh.wikipedia.org/wiki/螢幕閱讀器)来浏览网页。事实上，图片备选描述文本对大多数用户都很有用。
- 就像上面所说的，你也许会把图片的路径或文件名拼错。
- 浏览器不支持该图片类型。某些用户仍在使用纯文本的浏览器，例如 [Lynx](https://zh.wikipedia.org/wiki/Lynx)，这些浏览器会把图片替换为备选文本。
- 这些文字描述可以提供给搜索引擎使用，例如搜索引擎可能会将图片的文字描述和查询条件进行匹配。
- 用户可能会关闭图片显示以减少数据的传输，这在手机上是十分普遍的，因为在一些国家带宽有限且昂贵。

到底应该在 `alt` 里写点什么呢？这首先取决于*为什么*这张图片会在这儿，换句话说，如果这张图片没显示出来，会少了什么：

- **装饰**：如果图片仅用于装饰，你应该使用 [CSS 背景图片](#css_背景图片)，但如果必须使用 HTML，请添加空的 `alt=""`。如果图片不是内容的一部分，那么屏幕阅读器不应该浪费时间读取它。
- **内容**：如果你的图片提供了重要的信息，就要在 `alt` 文本中*简要*的提供相同的信息，甚至更近一步，把这些信息写在主要的文本内容里，这样所有人都能看见。不要写冗余的备选文本（如果在主要文本中将所有的段落都重复两遍，对于没有失明的用户来说多烦啊！），如果在主要文本中已经对图片进行了充分的描述，写 `alt=""` 就好。
- **链接**：如果你把图片嵌套在 {{htmlelement("a")}} 标签里，来把图片变成链接，那你还必须提供[无障碍的链接文本](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links#使用清晰的链接措辞)。在这种情况下，你可以写在同一个 `<a>` 元素里，或者写在图片的 `alt` 属性里，随你喜欢。
- **文本**：你不应该将文本放到图像里。例如，如果你的主标题需要有阴影，你可以[用 CSS](/zh-CN/docs/Web/CSS/Reference/Properties/text-shadow) 来达到这个目的，而不是把文本放到图片里。如果*真的必须这么做*，那就把文本也放到 `alt` 里。

本质上，关键在于即使图片无法被看见，也能提供可用的体验，这确保了所有人都不会错失某部分内容。尝试在浏览器中使图片不可见然后看看网页变成什么样了，你会很快意识到在图片无法显示时备选文本能帮上多大忙。

> [!NOTE]
> 如需了解更多信息，请参阅我们的[替代文本](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#替代文本)指南。

### 宽度和高度

你可以用 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/img#width) 和 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/img#height) 属性来指定你的图片的宽度和高度。它们的值是不带单位的整数，以像素为单位表示图像的宽度和高度。

你可以用多种方式了解你的图片的宽度和高度，例如在 Mac 上，你可以用 <kbd>Cmd</kbd> + <kbd>I</kbd> 来得到显示的图片文件的信息。回到我们的例子，你可以这样做：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

这样做有一个好处。你页面的 HTML 和图片是分开的资源，由浏览器用相互独立的 HTTP(S) 请求来获取。一旦浏览器接收到 HTML，它就会开始将其显示给用户。如果图片尚未接收到（通常会是这种情况，因为图片文件的大小通常比 HTML 文件大得多），那么浏览器将只渲染 HTML，并在图片接收到后立即更新页面。

例如，假设在图片之后有一些文本：

```html
<h1>Images in HTML</h1>

<img
  src="dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  title="A T-Rex on display in the Manchester University Museum" />
<blockquote>
  <p>
    But down there it would be dark now, and not the lovely lighted aquarium she
    imagined it to be during the daylight hours, eddying with schools of tiny,
    delicate animals floating and dancing slowly to their own serene currents
    and creating the look of a living painting. That was wrong, in any case. The
    ocean was different from an aquarium, which was an artificial environment.
    The ocean was a world. And a world is not art. Dorothy thought about the
    living things that moved in that world: large, ruthless and hungry. Like us
    up here.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

一旦浏览器下载了 HTML，它就开始显示页面。

当图片加载完成时，浏览器会将图片添加到页面中。由于图片占据空间，浏览器必须将文本向下移动，以适应图片的位置：

![浏览器加载页面期间和加载完成后，未指定图片大小的页面布局对比。](no-size.png)

这样移动文本对用户来说非常分散注意力，尤其是如果他们已经开始阅读文本的情况下。

如果你在 HTML 中使用 `width` 和 `height` 属性来指定图片的实际大小，那么在下载图片之前，浏览器就知道需要为其留出多少空间。

这样的话，当图片下载完成时，浏览器不需要移动周围的内容。

![浏览器加载页面期间和加载完成后，指定了图片大小的页面布局对比。](size.png)

[设置图像的高度和宽度再次变得重要](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)是关于该特性的历史的一篇优秀文章。

> [!NOTE]
> 虽然如我们所说，使用 HTML 属性来指定图片的*实际*大小是一个好的实践，但你不应该使用它们来*调整*图片的大小。
>
> 如果设置的图片大小过大，你的图片将看起来粗糙、模糊或太小，不仅浪费带宽而且图片还不符合用户需求。如果[长宽比](<https://zh.wikipedia.org/wiki/長寬比_(影像)>)不正确，图片也可能会变形。在将图片放到网页上之前，你应使用图像编辑器将其设置为正确的大小。
>
> 如果确实需要更改图片的大小，应该使用 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 来实现。

### 图像标题

类似于[超链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links#使用_title_属性添加支持信息)，你可以通过给图片增加 `title` 属性来提供更多的信息。在我们的例子中，可以这样做：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

这会给我们一个鼠标悬停提示，和链接标题一样：

![恐龙图片，上面的提示标题为“A T-Rex on display in the Manchester University Museum”](image-with-title.png)

然而，我们并不推荐它——`title` 有很多无障碍问题，这些问题主要是基于这样一个事实，即屏幕阅读器的支持并不完善，除此之外大多数浏览器都不会显示它，除非你将鼠标悬停在上面（例如：无法使用键盘的用户），如果你对更多的信息感兴趣，请阅读 Scott O'Hara 写的 [title 属性的考验与磨难](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)。

更好的做法是将这样的支持信息包含在主要文章文本中，而不是附加在图片上。

### 动手练习：嵌入一张图片

好，轮到你了！在这个动手练习中，我们希望你可以做一个简单的嵌入图片练习。你有一个基本的 {{htmlelement("img")}} 标签；我们希望你可以把下面这个 URL 所指向的图片嵌入到 HTML 中：

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

早些时候我们说过不要热链接到其他服务器上的图片，但这张图片只是为了学习目的，所以这一次不用太担心。

我们还希望你可以：

- 添加一些备选文字，添加完成后，可以故意把图片 URL 写错，来检查该属性的效果。
- 正确设置图片的 `width` 和 `height` 属性（提示：宽为 200px，高为 171px），然后再改变宽和高的值，看看会有什么影响。
- 在图片上设置 `title` 属性。

如果你遇到了错误，你可以按*重置*按钮来重置。如果你遇到了困难无法完成，按下*显示答案*按钮来看一下答案。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 ESC 退出编辑区域（按 Tab 可插入制表符）</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 阻止 Tab 键使 textarea 失去焦点，
// 而是在当前光标位置插入一个制表符

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// 每当用户更新文本区域的代码时，更新保存的 userCode

textarea.onkeyup = function () {
  // 我们只希望在显示用户代码时保存状态，
  // 而不保存答案，以防止答案覆盖用户代码
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('动手练习：嵌入一张图片', 700, 350) }}

## 媒体资源和许可

你在网络上找到的图像（以及其他媒体资源类型）都以不同的许可类型发布。在你构建的网站上使用图像之前，请确保你拥有该图像的所有权、获得使用许可或遵守所有者的许可条件。

### 了解许可类型

让我们来看看你在网络上可能会遇到的一些常见许可类别。

#### 版权所有

原创作品（例如歌曲、书籍或软件），其所有者通常以封闭的版权保护方式发布他们的作品。这意味着，默认情况下，他们（或他们的出版商）拥有独家使用（例如展示或分发）其作品的权利。如果你想使用带有*版权所有*许可的受版权保护的图像，你需要执行以下操作之一：

- 从版权持有人获得明确的书面许可。
- 支付许可费用以使用它们。这可以是一次性费用，用于无限制使用（“免版税”），或者可能是“按照时间段、地理区域、行业或媒体类型等特定费用”的“权利管理”方式。
- 仅将使用限制在你所在司法辖区中被视为[合理使用](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/)或[合理交易](https://copyrightservice.co.uk/copyright/p27_work_of_others)的用途。

作者不必在其作品中包含版权声明或许可条款。一旦原创作品在有形媒介上创建出来，版权就会自动存在。因此，如果你在网上找到一张图像，没有版权声明或许可条款，最安全的做法是假定它受到版权保护，所有权保留。

#### 自由许可

如果图像是根据自由许可发布的，例如 [MIT](https://mit-license.org/)、[BSD](https://opensource.org/license/BSD-3-clause) 或适当的[知识共享（CC）许可](https://chooser-beta.creativecommons.org/)，你无需支付许可费用或寻求许可即可使用它。但是，你仍需履行各种许可条件，这些条件因许可而异。

例如，你可能需要：

- 提供指向图像原始来源的链接，并标明创作者。
- 指示是否对其进行了任何更改。
- 使用相同许可证分享使用该图像创建的任何派生作品。
- 不分享任何派生作品。
- 不将该图像用于任何商业作品。
- 在使用该图像的任何发布中包含许可证的副本。

你应该查阅适用的许可证以了解你需要遵循的具体条款。

> [!NOTE]
> 你可能会在自由许可的上下文中遇到“copyleft”一词。Copyleft 许可（例如 [GNU 通用公共许可证（GPL）](https://www.gnu.org/licenses/gpl-3.0.en.html) 或“相同方式共享”创作共用许可证）规定派生作品需要按照原始许可证发布。

Copyleft 许可在软件界中很常见。其基本思想是使用 copyleft 许可的代码构建的新项目（这被称为原始软件的“分支”）也需要根据相同的 copyleft 许可进行许可。这确保新项目的源代码也可供他人学习和修改。请注意，一般来说，为软件起草的许可证（例如 GPL）并不适合非软件作品，因为它们并不考虑非软件作品。

请查阅本节提供的链接，了解不同许可类型及其规定的条件。

#### 公共领域/CC0

进入公共领域的作品有时被称为“无版权保留”——它们不受版权保护，可以在未经许可且无需履行任何许可条件的情况下使用。作品可以因为版权到期或特定放弃权利等方式进入公共领域。

将作品置于公共领域的最有效方法之一是将其许可为 [CC0](https://creativecommons.org/public-domain/cc0/)，这是一种特定的创作共用许可，为此目的提供了清晰明确的法律工具。

在使用公共领域图像时，请获取证明该图像属于公共领域的证据，并将该证据保存记录。例如，使用截图记录原始来源（该来源需要清晰显示许可状态），并考虑在你的网站上添加一个页面，列出所获得的图像及其许可要求。

### 搜索适用于自由许可的图像

你可以使用图像搜索引擎或直接从图像存储库中找到适用于你的项目的自由许可图像。

使用图像描述以及相关的许可条款搜索图像。例如，当搜索“黄色恐龙”时，可以添加“公共领域图像”、“公共领域图像库”、“开放许可图像”或类似的词语到搜索查询中。

某些搜索引擎会提供工具，帮助你查找具有自由许可的图像。例如，使用 Google 时，转到“图片”选项卡搜索图像，然后单击“工具”。在结果工具栏中有一个“使用权限”下拉菜单，你可以选择专门搜索根据创作共用许可授权的图像。

图像存储库网站，例如 [Flickr](https://flickr.com/)、[ShutterStock](https://www.shutterstock.com/) 和 [Pixabay](https://pixabay.com/)，具有搜索选项，允许你仅搜索具有自由许可的图像。一些网站专门分发具有自由许可的图像和图标，例如 [Picryl](https://picryl.com/) 和 [The Noun Project](https://thenounproject.com/)。

要想遵守图像发布的许可条件，你需要找到许可详细信息，阅读来源提供的许可证或指示页面，然后按照这些说明操作。值得信赖的图像存储库会清楚地列出其许可条件，并且易于查找。

## 通过为图片搭配说明文字的方式来解说图片

说到说明文字，有很多种方法可以添加一段说明文字来搭配图片。比如，你可以这么做：

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

这没有问题，它包含了你需要的内容，并且很方便使用 CSS 调整样式。但是这里有一个问题，从语义的角度上来讲，图片和说明文字并没有什么联系，这会给使用屏幕阅读器的人造成麻烦，比如如果有 50 张图片和其搭配的 50 段说明文字，那么哪段说明文字是和哪张图片有关联的呢？

更好的做法是使用 HTML 的 {{htmlelement("figure")}} 和 {{htmlelement("figcaption")}} 元素，它正是为此而被创造出来的：为图片提供一个语义容器，在说明文字和图片之间建立清晰的关联。我们之前的例子可以重写为：

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

{{htmlelement("figcaption")}} 元素告诉浏览器和辅助技术工具，这段说明文字描述了 {{htmlelement("figure")}} 元素的内容。

> [!NOTE]
> 从无障碍的角度来说，说明文字和 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 文本扮演着不同的角色。看得见图片的人们同样可以受益于说明文字，而 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 文字只有在图片无法显示时才会发挥作用。所以，说明文字和 `alt` 的内容不应该一样，因为当图片无法显示时，它们会同时出现。尝试不让你的图片显示，看看效果如何。

figure 里不一定要是图片，只要是这样的独立内容单元即可：

- 用简洁、易懂的方式表达意图。
- 可以置于页面线性流的某处。
- 为主要内容提供重要的补充说明。

figure 可以是几张图片、一段代码、音视频、方程、表格或类似的东西。

### 动手练习：创建一个 figure

在这个动手练习的部分中，我们希望你把上一个动手练习完成的代码拿过来，把它转换为一个 figure:

1. 把之前的代码放入 {{htmlelement("figure")}} 元素中。
2. 将 `title` 属性的文本复制出来，移除 `title` 属性，然后把文字放入 {{htmlelement("figcaption")}} 元素中，这个元素在 {{htmlelement("img")}} 的下面。

如果你遇到了错误，可以按*重置*按钮来重置。如果你遇到了困难无法完成，按下*显示答案*按钮来看一下答案。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 阻止 Tab 键使 textarea 失去焦点，
// 而是在当前光标位置插入一个制表符

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// 每当用户更新文本区域的代码时，更新保存的 userCode

textarea.onkeyup = () => {
  // 我们只希望在显示用户代码时保存状态，
  // 而不保存答案，以防止答案覆盖用户代码
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('动手练习：创建一个 figure', 700, 350) }}

## CSS 背景图片

你也可以使用 CSS 把图片嵌入网站中（JavaScript 也行，不过那是另外一回事了）。CSS 属性 {{cssxref("background-image")}} 和其他的 `background-*` 属性是用来控制背景图片的。比如，要想为页面中的每个段落设置一个背景图片，你可以这样做：

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

按理说，这种做法相对于 HTML 中插入图片的做法，可以更好地控制图片和设置图片的位置，那么为什么我们还要使用 HTML 图片呢？如上所述，CSS 背景图片只是为了装饰——如果你只是想要在你的页面上添加一些漂亮的东西，来提升视觉效果，那 CSS 的做法是可以的。但是这样插入的图片完全没有语义上的意义，它们不能有任何备选文本，也不能被屏幕阅读器识别，等等。这就是 HTML 图片有用的地方了。

总而言之，如果图像对你的内容有意义，则应使用 HTML 图像。如果图像纯粹是装饰，则应使用 CSS 背景图片。

> [!NOTE]
> 你可以在 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 模块里学到更多关于 [CSS 背景图片](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)的知识。

## 网页上的其他图形

我们已经了解到可以使用 {{HTMLElement("img")}} 元素显示静态图像，或者通过使用 {{cssxref("background-image")}} 属性来设置 HTML 元素的背景。你还可以动态生成图形，或在生成后对图像进行操作。浏览器提供了使用代码创建 2D 和 3D 图形的方法，以及包含来自上传文件或用户摄像头实时流的视频。以下是有关这些更高级图像主题的文章链接：

- [Canvas](/zh-CN/docs/Web/API/Canvas_API)
  - : {{HTMLElement("canvas")}} 元素提供了使用 JavaScript 绘制 2D 图形的 API。
- [SVG](/zh-CN/docs/Web/SVG)
  - : 你可以借助可缩放矢量图形（SVG）来使用线条、曲线和其他几何形状来渲染 2D 图形。借助矢量图形，你可以创建能够以任意尺寸清晰缩放的图像。
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
  - : WebGL API 指南将帮助你入门 WebGL，这是用于 Web 的 3D 图形 API，可让你在 Web 内容中使用标准的 OpenGL ES。
- [使用 HTML 音频和视频](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : 与 `<img>` 类似，你可以使用 HTML 将 {{htmlelement("video")}} 和 {{htmlelement("audio")}} 嵌入到网页中，并控制其播放。
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
  - : WebRTC 中的 RTC 代表实时通信（Real-Time Communications），这是一种可以在浏览器客户端（对等方）之间进行音频/视频流和数据共享的技术。

## 技能测试！

你已经阅读完本文，但你能记住重要的信息吗？在继续之前，你可以进行一些进一步的测试，以验证你是否掌握了这些信息。请参阅[技能测试：HTML 图像](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images)。

## 总结

到此为止，我们已经详细介绍了图片和说明文字，在下篇文章中，我们将进一步看看如何使用 HTML 在网页上嵌入[音频和视频](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
