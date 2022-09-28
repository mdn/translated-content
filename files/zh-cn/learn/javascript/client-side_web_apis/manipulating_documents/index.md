---
title: 操作文档
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

在编写 web 页面或应用时，你最想做的事情之一就是以某种方式操作文档结构。这通常使用一套大量使用{{domxref("Document")}}对象来控制 HTML 和样式信息的文档对象模型（DOM）来实现，在本文中，我们可以更详细的看到怎样使用 DOM，连同一些其他有趣的 API 以有趣的方式改变你的环境

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础的计算机常识，基本了解 HTML、CSS 和 JavaScript - 包括 JavaScript
        对象。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉核心 DOM API, 以及其他和 DOM 与文档操作相关的常见 API。</td>
    </tr>
  </tbody>
</table>

## web 浏览器的重要部分

web 浏览器的软件中有很多活动的程序片段，而许多片段 web 开发人员无法使用 JavaScript 来控制或操作，因此 Web 浏览器是一个很复杂的软件组合。你可能认为这样的限制是不是好事，但是浏览器被锁定是有充分理由的，主要集中在安全方面。如果一个网站可以访问您存储的密码或其他敏感信息，犹如你一样登录到网站，试想会发生什么？

尽管有局限性，Web API 仍然允许我们访问许多的功能，使我们用 web 页做很多事情。有几个在代码中经常引用的非常明显的部位 - 下面的图表表示了直接出现在 web 页面视图中的浏览器的主要部分：

![](document-window-navigator.png)

- window 是载入浏览器的标签，在 JavaScript 中用{{domxref("Window")}}对象来表示，使用这个对象的可用方法，你可以返回窗口的大小（参见{{domxref("Window.innerWidth")}}和{{domxref("Window.innerHeight")}}），操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定[event handler](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#A_series_of_fortunate_events)，等等。
- navigator 表示浏览器存在于 web 上的状态和标识（即用户代理）。在 JavaScript 中，用{{domxref("Navigator")}}来表示。你可以用这个对象获取一些信息，比如来自用户摄像头的地理信息、用户偏爱的语言、多媒体流等等。
- document（在浏览器中用 DOM 表示）是载入窗口的实际页面，在 JavaScript 中用{{domxref("Document")}} 对象表示，你可以用这个对象来返回和操作文档中 HTML 和 CSS 上的信息。例如获取 DOM 中一个元素的引用，修改其文本内容，并应用新的样式，创建新的元素并添加为当前元素的子元素，甚至把他们一起删除。

在本文中，我们主要关注操作文档，但是也会稍微关注一下其他有用的部位。

## 文档对象模型

在浏览器标签中当前载入的文档用文档对象模型来表示。这是一个由浏览器生成的“树结构”，使编程语言可以很容易的访问 HTML 结构 — 例如浏览器自己在呈现页面时，使用它将样式和其他信息应用于正确的元素，而页面呈现完成以后，开发人员可以用 JavaScript 操作 DOM。

我们已经创建一个简单的例子[dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) ([see it live also](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). 在你的浏览器中打开它 — 这是一个很简单的页面，包含了一个{{htmlelement("section")}} 元素，里面有一个图像和有链接的段落。HTML 源码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

另一方面，DOM 树如下所示：

![](dom-screenshot.png)

> **备注：** 这个 DOM 树状图是用 Ian Hickson 的[Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)生成的

这里你可以看到，文档中每个元素和文本在树中都有它们自己的入口 — 称之为**节点**。你将用不同的术语来描述节点的类型和它们相对于其他节点的位置：

- **元素节点**: 一个元素，存在于 DOM 中。
- **根节点**: 树中顶层节点，在 HTML 的情况下，总是一个`HTML`节点（其他标记词汇，如 SVG 和定制 XML 将有不同的根元素）。
- **子节点**: *直接*位于另一个节点内的节点。例如上面例子中，`IMG`是`SECTION`的子节点。
- **后代节点**: 位于另一个节点内*任意位置*的节点。例如 上面例子中，`IMG`是`SECTION`的子节点，也是一个后代节点。`IMG`不是`BODY`的子节点，因为它在树中低了`BODY`两级，但它是`BODY`的后代之一。
- **父节点**: 里面有另一个节点的节点。例如上面的例子中`BODY`是`SECTION`的父节点。
- **兄弟节点**: DOM 树中位于同一等级的节点。例如上面例子中，`IMG`和`P`是兄弟。
- **文本节点**: 包含文字串的节点

在用 DOM 工作之前，熟悉这些术语是很有用的，因为你将会遇到大量代码术语的使用。你在研究 CSS 时也会遇到这些术语（例如后代选择器、子选择器）

## 主动学习：基本的 DOM 操作

要开始学习 DOM 操作，我们先做一个实际的例子。

1. 本地备份[dom-example.html page](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html)和与之相关的[image](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dinosaur.png)。
2. 在闭合的`</body>`标签上面加入`<script></script>`元素。
3. 要操作 DOM 内的元素，首先需要选择它，并将它的引用存储在一个变量中。在 script 元素中，添加下列代码行：

    ```js
    var link = document.querySelector('a');
    ```

4. 现在你有了一个存储在变量中的元素引用，你可以使用它的可用属性和方法来操作它（在{{htmlelement("a")}}元素的情况下定义为接口{{domxref("HTMLAnchorElement")}}，它更常常用的父接口是{{domxref("HTMLElement")}}和表示 DOM 中所有节点的{{domxref("Node")}}）。首先，更新 {{domxref("Node.textContent")}}属性的值来修改链接中的文字。在上面的代码后面加入一行代码：

    ```js
    link.textContent = 'Mozilla Developer Network';
    ```

5. 我们也能修改链接指向的 URL，使得它被点击时不会走向错误的位置。在底部再加入下列代码：

    ```js
    link.href = 'https://developer.mozilla.org';
    ```

注意，和 JavaScript 中的许多事情一样，有很多方法可以选择一个元素，并在一个变量中存储一个引用。{{domxref("Document.querySelector()")}}是推荐的主流方法，它允许你使用 CSS 选择器选择元素，使用很方便。上面的`querySelector()`调用会匹配它在文档中遇到的第一个{{htmlelement("a")}}元素。如果想对多个元素进行匹配和操作，你可以使用{{domxref("Document.querySelectorAll()")}}，这个方法匹配文档中每个匹配选择器的元素，并把它们的引用存储在一个[array](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays)中。

对于获取元素引用，还有一些更旧的方法，如：

- {{domxref("Document.getElementById()")}}，选择一个`id`属性值已知的元素，例如`<p id="myId">My paragraph</p>`。ID 作为参数传递给函数，即 `var elementRef = document.getElementById('myId')`。
- {{domxref("Document.getElementsByTagName()")}}，返回页面中包含的所有已知类型元素的数组。如`<p>`s, `<a>`。元素类型作为参数传递给函数，即`var elementRefArray = document.getElementsByTagName('p')`.

在较老的浏览器中使用这两种方法而不是流行的`querySelector()`方法，但这样并不方便。看一看你还可以发现别的什么！

### 创建并放置新的节点

以上只是让你稍微尝试一下你可以做的事情，让我们进一步看看我们可以怎样来创建新的元素。

1. 回到当前的例子，我们先获取到{{htmlelement("section")}}元素的引用 — 在已有 script 中添加下列代码（其他代码也同样处理）：

    ```js
    var sect = document.querySelector('section');
    ```

2. 现在用{{domxref("Document.createElement()")}}创建一个新的段落，用与之前相同的方法赋予相同的文本：

    ```js
    var para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    ```

3. 现在可以用{{domxref("Node.appendChild()")}}方法在后面追加新的段落：

    ```js
    sect.appendChild(para);
    ```

4. 最后，在内部链接的段落中添加文本节点，完美的结束句子。首先我们要使用{{domxref("Document.createTextNode()")}}创建一个文本节点：

    ```js
    var text = document.createTextNode(' — the premier source for web development knowledge.');
    ```

5. 现在获取内部连接的段落的引用，并把文本节点绑定到这个节点上：

    ```js
    var linkPara = document.querySelector('p');
    linkPara.appendChild(text);
    ```

这是给 DOM 添加节点要做的大部分工作 — 在构建动态接口时，你将做大量使用这些方法（我们在后面可以看到一些例子）。

### 移动和删除元素

也许有时候你想移动或从 DOM 中删除节点，这是完全可能的。

如果你想把具有内部链接的段落移到 sectioin 的底部，简单的做法是：

```js
sect.appendChild(linkPara);
```

这样可以把段落下移到 section 的底部。你可能想过要做第二个副本，但是情况并非如此 — `linkPara`是指向该段落唯一副本的引用。如果你想做一个副本并也把它添加进去，只能用{{domxref("Node.cloneNode()")}} 方法来替代。

删除节点也非常的简单，至少，你拥有要删除的节点和其父节点的引用。在当前情况下，我们只要使用{{domxref("Node.removeChild()")}}即可，如下：

```plain
sect.removeChild(linkPara);
```

要删除一个仅基于自身引用的节点可能稍微有点复杂，这也是很常见的。没有方法会告诉节点删除自己，所以你必须像下面这样操作。

```js
linkPara.parentNode.removeChild(linkPara);
```

把上述代码行加到你的代码中去

### 操作样式

通过 JavaScript 以不同的方式来操作 CSS 样式是可能的。

首先，使用 {{domxref("Document.stylesheets")}}返回{{domxref("CSSStyleSheet")}}数组，获取绑定到文档的所有样式表的序列。然后添加/删除想要的样式。然而，我们并不想扩展这些特性，因此它们在操作样式方面有点陈旧和困难，而现在有了更容易的方法。

第一种方法是直接在想要动态设置样式的元素内部添加内联样式。这是用{{domxref("HTMLElement.style")}}属性来实现。这个属性包含了文档中每个元素的内联样式信息。你可以设置这个对象的属性直接修改元素样式。

1. 要做个例子，把下面的代码行加到我们的例子中：

    ```js
    para.style.color = 'white';
    para.style.backgroundColor = 'black';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';
    ```

2. 重新载入页面，你将看到样式已经应用到段落中。如果在浏览器的[Page Inspector/DOM inspector](/zh-CN/docs/Tools/Page_Inspector)中查看段落，你会看到这些代码的确为文档添加了内联样式：

    ```html
    <p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>
    ```

> **备注：** CSS 样式的 JavaSript 属性版本以小驼峰式命名法书写，而 CSS 版本带连接符号（`backgroundColor` 对 `background-color`）。确保你不会混淆，否则就不能工作。

现在我们来看看另一个操作文档样式的常用方法。

1. 删除之前添加到 JavaScript 中的五行代码。
2. 在 HTML 的{{htmlelement("head")}}中添加下列代码 :

    ```plain
    <style>
    .highlight {
      color: white;
      background-color: black;
      padding: 10px;
      width: 250px;
      text-align: center;
    }
    </style>
    ```

3. 现在我们改为使用 HTML 操作的常用方法 — {{domxref("Element.setAttribute()")}} — 这里有两个参数，你想在元素上设置的属性，你要为它设置的值。在这种情况下，我们在段落中设置类名为 highlight：

    ```js
    para.setAttribute('class', 'highlight');
    ```

4. 刷新页面，看不到改变 — CSS 仍然应用到段落，但是这次给出 CSS 规则选择的类不是内联 CSS 样式。

两种方式各有优缺点，选择哪种取决于你自己。第一种方式无需安装，适合简单应用，第二种方式更加正统（没有 CSS 和 JavaScript 的混合，没有内联样式，而这些被认为是不好的体验）。当你开始构建更大更具吸引力的应用时，你可能会更多地使用第二种方法，但这完全取决于你自己。

在这一点上，我们还没有做任何有用的事！使用 JavaScript 创建静态内容是毫无意义的 — 最好将其写入 HTML，而不使用 JavaScript。用 JavaScript 创建内容也有其他问题（如不能被搜索引擎读取），比 HTML 复杂得多。

在接下来的几节中我们将看看 DOM API 一些更实际的用途。

> **备注：** 你可以在 GitHub 上找到演示程序[finished version of the dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example-manipulated.html) ([see it live also](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## 主动学习：从 Window 对象中获取有用的信息

到目前为止，我们只真正看到使用{{domxref("Node")}}和{{domxref("Document")}} 特性来操纵文档，但是没有理由不能从其他来源获取数据并在 UI 中使用它。想想我们最新文件中的演示例子 [maps-example.html](http://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html) — 那里我们获取一些位置数据并用来显示你所在区域的地图。你只要确保你的数据格式正确；使用 JavaScript 比其他许多语言更容易，因为它是弱类型的——例如，当你想把它们打印到屏幕上时，数字会自动转换成字符串。

在这个例子中，我们解决了一个常见的问题 — 不管窗口的大小是多少，确保应用程序和它所在的窗口视图一样大。在玩游戏的情况下，想在游戏中尽可能多地使用屏幕区域，这种方法是很有用的。

一开始，要做一个[window-resize-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/window-resize-example.html)和[bgtile.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/bgtile.png)文件的本地拷贝。打开文件看一看 — 你可以看到我们用一个{{htmlelement("div")}}元素包裹屏幕的小部分，用来获得应用的 background tile。我们也用它来表示应用的 UI 区域。

1. 首先，获取这个 div 的引用，然后获取视窗（显示文档的内部窗口）的宽度和高度，并存入变量中 — 这两个值包含在{{domxref("Window.innerWidth")}} 和 {{domxref("Window.innerHeight")}}属性中。在已存在的{{htmlelement("script")}}元素中加入下列代码：

    ```js
    var div = document.querySelector('div');
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    ```

2. 接下来，我们将动态地改变 div 的宽度和高度，使其等于视窗的宽度和高度。在您的代码下面添加以下两行：

    ```js
    div.style.width = WIDTH + 'px';
    div.style.height = HEIGHT + 'px';
    ```

3. 保存并刷新浏览器 — 现在可以看到不管你使用什么大小的屏幕，div 变得和视窗一样大。如果要调整窗口大小使其更大，你可以看到 div 会保持相同大小 — 因为我们只能设置一次。
4. 在我们调整窗口时，我们怎样用事件来调整 div 的大小？ {{domxref("Window")}}对象有一个称为 resize 的可用事件。每次窗口调整大小时都会触发该事件 — 我们可以通过{{domxref("Window.onresize")}} 事件处理程序来访问它，并返回每次改变大小的代码。在代码底部添加下列程序：

    ```js
    window.onresize = function() {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      div.style.width = WIDTH + 'px';
      div.style.height = HEIGHT + 'px';
    }
    ```

> **备注：** 如果你被卡住了，可查看[finished window resize example](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/window-resize-example-finished.html) ([see it live also](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/window-resize-example-finished.html)).

## 主动学习：一个动态的购物单

作为文章的收尾，我们想给你一个小小的挑战 — 我们要做一个简单的购物单的例子，使用表单的输入框和按钮动态的向购物单中添加购物项。在输入中添加项，然后按下按钮：

- 购物项应该出现在清单中。
- 每个购物项都应该给出一个按钮，可以按下按钮从清单中删除该项。
- 输入框应该是空白的并已聚焦，为你准备好输入另一个项。

完成后的演示程序看起来有点像这样的：

![](shopping-list.png)

要完成实验，要按照下面的步骤，确保购物单的行为如上所述。

1. 首先，下载[shopping-list.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/shopping-list.html)文件，并存入本地。你会看到它有一些极小的 CSS，一个带有 label、input 和 button 的 list 和一个空的 list 以及{{htmlelement("script")}} 元素。要添加的所有程序都在 script 里面。
2. 创建三个变量来保存 list({{htmlelement("ul")}})、{{htmlelement("input")}}和{{htmlelement("button")}}元素的引用。
3. 创建一个[函数](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions)响应点击按钮。
4. 在函数体内，开始要在一个变量中存储输入框的当前[值](/zh-CN/docs/Web/API/HTMLInputElement#Properties)。
5. 然后，为输入框元素设置空字符 - `''`使其为空
6. 创建三个新元素 — 一个 list 项（{{htmlelement('li')}}），{{htmlelement('span')}}和 {{htmlelement('button')}}，并把它们存入变量之中。
7. 把 span 和 button 作为 list 项的子节点。
8. 把之前保存的输入框元素的值设置为 span 的文本内容，按钮的文本内容设置为'Delete'
9. 把 list 项设置为 list 的子节点。
10. 为删除按钮绑定事件处理程序。当点击按钮时，删除它所在的整个 list 项。
11. 最后，使用[`focus()`](/zh-CN/docs/Web/API/HTMLElement/focus)方法聚焦输入框准备输入下一个购物项。

> **备注：** 如果你卡住了，请查看[finished shopping list](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/shopping-list-finished.html) ([see it running live also](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html).)

## 总结

我们已经结束了对文档和 DOM 操作的研究。在这一点上，你应该了解 Web 浏览器在控制文档和用户 Web 体验的其他方面方面的重要部分。更重要的是，你应该了解什么是文档对象模型，怎样操作它来创建有用的功能。

## 另见

你还可以使用更多的特性来操作文档，检查一些参考，看看你能发现些什么？

- {{domxref("Document")}}
- {{domxref("Window")}}
- {{domxref("Node")}}
- {{domxref("HTMLElement")}}, {{domxref("HTMLInputElement")}}, {{domxref("HTMLImageElement")}}, etc.

(MDN 上有完整的 Web API 列表，参见[Web API 接口参考](/zh-CN/docs/Web/API) !)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
