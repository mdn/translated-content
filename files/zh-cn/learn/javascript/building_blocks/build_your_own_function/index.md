---
title: 创建您自己的函数
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

我们在之前的文章里大多学的是理论，这篇文章将提供一个练习的机会——您将练习构建一些您自己风格的函数。在练习过程中，我们也会解释一些针对函数的更深层的实用细节。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先修知识：</th>
      <td>
        基本的电脑常识，对于 HTML 和 CSS 的基本了解，
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">JavaScript 第一步</a
        >，
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions"
          >函数 - 可复用代码块</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>提供一些练习来构建一个传统的函数，并解释一些有用的相关细节。</td>
    </tr>
  </tbody>
</table>

## 先活跃下气氛：构建一个函数

我们将构建的传统函数将被命名为 `displayMessage()`，它向用户展示一个传统的消息盒子于 web 页面的顶部。它充当浏览器内建的 [alert()](/zh-CN/docs/Web/API/Window/alert) 函数更有用的替代品。你已经看过了这个，但是我们回复一下我们的记忆——在你的浏览器的 JavaScript 控制台中，在任意一个页面里尝试以下代码

```js
alert("This is a message");
```

这个函数只带有一个参数——在 alert box 中展示的字符串。您可以尝试改变字符串来改变消息。

这个`alert()`函数不是很好的：您可以`alert()`出这条信息，但是您不能很容易的表达其他内容，例如颜色，图标或者是其他东西。接下来我们将会构建一个更有趣的函数。

> **备注：** 这个例子能够在现代浏览器上很好的工作，但是这个风格在老的浏览器上并没那么有趣。我们建议你实现这个例子时在现代浏览器上，例如 Firefox，Opera 或者 Chrome 浏览器。

## 基本函数

首先，让我们来组织一个基本的函数。

> **备注：** 对于函数命名约定，应遵循与[变量命名约定](/zh-CN/Learn/JavaScript/First_steps/Variables#An_aside_on_variable_naming_rules)相同的规则。这很好，尽你所能理解它们之间的区别 - 函数名称后带有括号，而变量则没有。

1. 我们希望您首先访问[function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)文件并创建一个本地拷贝。您将会看到这个 HTML 很简单 — 我们的 body 块仅包含一个按钮。我们还提供了一些基本的 CSS 来装饰自定义消息框，以及一个用于放置 JavaScript 代码的{{htmlelement("script")}}元素。
2. 接下来，将下面的代码添加至 `<script>` 元素中：

   ```js
   function displayMessage() {}
   ```

   我们从表示定义一个函数的关键字 `function`开始，这之后是我们想给我们的函数取的名字；一组括号；和一组大括号。我们要传给我们的函数的任何参数都在括号内，当我们调用该函数时运行的代码均在大括号内。

3. 最后，添加以下代码到大括号中：

   ```js
   const html = document.querySelector("html");

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   html.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.onclick = function () {
     panel.parentNode.removeChild(panel);
   };
   ```

天哪，这么多代码！好吧，一行一行的解释给你听。

第一行代码使用了一个 DOM（文档对象模型）的内置方法 {{domxref("document.querySelector()")}} 来选择{{htmlelement("html")}} 元素并且把它存放在一个叫 `html`的常量中，这样方便我们接下来使用这个元素：

```js
const html = document.querySelector("html");
```

下段代码使用了另一个名字叫做 {{domxref("Document.createElement()")}} 的 DOM 方法，用来创建 {{htmlelement("div")}} 元素并且把该新建元素的引用（实际上是新建对象的地址）放在一个叫做 `panel`的常量中。这个元素将成为我们的消息框的外部容器。

然后我们又使用了一个叫做 {{domxref("Element.setAttribute()")}} 的 DOM 方法给 panel 元素添加了一个值为`msgBox` 的`class` 类属性。这样做方便我们来给这个元素添加样式 — 查看 CSS 代码你就知道我们使用`.msgBox` 类选择器来给消息框和消息内容设置样式。

最后，我们还使用了一个叫做 {{domxref("Node.appendChild()")}} 的 DOM 方法，给 `html` 常量（我们之前定义好的）追加了我们设置好样式的 panel 元素。该方法追加了元素的同时也把 panel`<div>`元素指定为`<html>`的子元素。这样做是因为我们创建了一个元素之后这个元素并不会莫名其妙的出现在我们的页面上（浏览器只知道我们创建了一个元素，但是不知道把这个元素怎么呈现出来） — 因此，我们给这个元素了一个定位，就是显示在 html 里面！

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
html.appendChild(panel);
```

下面这两段使用了我们之前使用过的方法`createElement()`和`appendChild()` — 创建了一个 {{htmlelement("p")}} 元素和一个{{htmlelement("button")}}元素 — 并且把他们追加到了 panel`<div>`之下。我们使用元素的 {{domxref("Node.textContent")}}（Node 泛指一个元素并不是说是某个元素是叫 Node）属性— 表示一个元素的文本属性 — 给一个 p 元素赋值，同样按钮也有这个属性，该属性就是按钮显示的‘X’。这个按钮的功能就是关闭消息提示框。

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

最后我们使用一个叫做 {{domxref("GlobalEventHandlers.onclick")}} 的事件句柄给按钮添加了一个点击事件，点击事件后定义了一个匿名函数，功能是将消息提示框从父容器中删除 — 达到了关闭的效果。

简单来说，这个 `onclick` 句柄是一个按钮的属性 (事实上，页面上的任何元素) 当按钮被点击的时候能够执行一些代码。你可以在之后的介绍事件的章节了解详情。我们给 `onclick` 句柄绑定了一个匿名函数，函数中代码在元素被点击的时候运行。函数里面的这行代码使用了 {{domxref("Node.removeChild()")}} DOM 方法指定了我们想要移除的 HTML 的子元素 — 在这里指 panel`<div>`.

PS：我来解释下是什么意思，panel 是消息框，panel.parentNode 就是指 panel 的上一级，就是整个 DOM，然后再来用这个父亲来干掉这个儿子，儿子不能自己干掉自己，所以要这么做。

```js
closeBtn.onclick = function () {
  panel.parentNode.removeChild(panel);
};
```

大体上，这一整块的代码我就不解释了就是一个 div，一个段落，一个按钮，把这个加在页面上：

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

啊，看完了这么多代码，是不是很累？ — 不用担心，你现在没有必要完全知道这些代码的细节！这里我们只关心函数的结构和使用方式，下面的例子将展示一些有意思的东西。

## 调用函数

相信你已经迫不及待的在你的`<script>` 标签中写好了一个函数，但仅仅是定义而已，这玩意不会做任何事情。

1. 把下面这行代码加在写好的函数下面来调用函数（当然，不一定要放在函数下面来调用，在 C 语言中确实是还要先定义后使用，但是我们现在用的是 JavaScript，这玩意很强大，不管你是先定义后调用还是先调用后定义都行，但是别忘了定义）:

   ```js
   displayMessage();
   ```

   这行代码调用了你写的函数，当浏览器解析到这行代码时会立即执行函数内的代码。当你保存好你的代码以后在浏览器中刷新，你会马上看到一个小小的提示框弹出来，但是只弹出了一次。毕竟我们只调用了一次函数是不？

2. 现在打开浏览器开发工具，找到 JavaScript 控制台把上面这一句再输入一遍然后回车，你会看到又弹出了一次！有点意思... — 现在我们有了一个能够重复调用的函数，只要你高兴可以随时调用它。

   但是，这玩意有什么用呢？在真实的应用当中这样的消息提示框一般用来提示一些什么新的东西，或者是出现了一个什么错误，或者当用户删除配置文件的时候 ("你确定要这样做？"), 或者用户添加一个新的联系人之后提示操作成功..等等。在这个例子里面，当用户点击这个按钮的时候这个提示框会出现。

3. 删掉你之前加的那一行代码。
4. 下一步我们用选择器找到这个按钮并赋值给一个常量。在你的函数定义之前把这行代码加上去：

   ```js
   const btn = document.querySelector("button");
   ```

5. 最后，把这行代码加在上面这行的下面：

   ```js
   btn.onclick = displayMessage;
   ```

   跟关闭按钮类似 `closeBtn.onclick...` , 当按钮被点击的时候我们运行了点代码。但不同的是，之前等号的右边是一个匿名函数，看起来是这样的：`btn.onclick = function(){...}`, 我们现在是直接使用函数名称来调用。

6. 保存好以后刷新页面 — 现在你应该能看到当你点击按钮的时候提示框弹出来。

你会想“怎么函数名后面没有括号呢？”. 这是因为我们不想直接调用这个函数 — 而是只有当按钮被点击的时候才调用这个函数。试试把代码改成这样：

```js
btn.onclick = displayMessage();
```

保存刷新，你会发现按钮都还没点击提示框就出来了！在函数名后面的这个括号叫做“函数调用运算符”（function invocation operator）。你只有在想直接调用函数的地方才这么写。同样要重视的是，匿名函数里面的代码也不是直接运行的，只要代码在函数作用域内。

如果你做了这个函数括号的实验，在继续之前把代码恢复到之前的状态。

## 使用参数列表改进函数

就现在看来，我们的函数还不是特别有用 — 我们想要的不仅仅是每点击一次展示一个默认的消息。我们来改造下我们的函数，给它添加几个参数，允许我们以不同的方式调用这个函数。

1. 第一步，修改函数的第一行代码：

   ```js
   function displayMessage() {
   ```

   改成这样的：

   ```js
   function displayMessage(msgText, msgType) {
   ```

   当我们调用函数的时候，我们可以在括号里添加两个变量，来指定显示在消息框里面的消息，和消息的类型。

2. 为了使用第一个参数，把接下来的一行：

   ```js
   msg.textContent = "This is a message box";
   ```

   改成这样：

   ```js
   msg.textContent = msgText;
   ```

3. 最后但同样重要的一点，我们来调用这个函数，并且使用了带参数的形式，修改下面这行：

   ```js
   btn.onclick = displayMessage;
   ```

   改成这样：

   ```js
   btn.onclick = function () {
     displayMessage("Woo, this is a different message!");
   };
   ```

   如果我们要在点击事件里面绑定这个新函数，我们不能直接使用（`btn.onclick = displayMessage('Woo, this is a different message!');`）前面已经讲过— 我们要把它放在一个匿名函数里面，不然函数会直接调用，而不是按钮点击之后才会调用，这不是我们想要的结果。

4. 保存刷新，就像你所期待的那样现在你可以随意的指定消息框里面显示的消息！

### 一个更加复杂的参数

刚才我们只使用了我们定义的第一个参数`msgText`，对于第二个参数`msgType`，这个就涉及了稍微多一点的东西— 我们要设置一些依赖于这个 `msgType` 参数的东西，我们的函数将会显示不同的图标和不同的背景颜色。

1. 第一步，从 Github 上下载我们需要的图标 ([警告图标](https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/warning.png) 和 [聊天图标](https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/chat.png)) 。把图标保存在一个叫做`icons` 的文件夹下，和你的 HTML 文件在同一个目录下。

   > **备注：** 警告和聊天图标是在这个网站 iconfinder.com 上找到的，设计者是 [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr)。感谢他！

2. 下一步，找到页面的 CSS 文件。我们要修改下以便我们使用图标。首先，修改 `.msgBox` 的宽度：

   ```css
   width: 200px;
   ```

   改成：

   ```css
   width: 242px;
   ```

3. 下一步，在 `.msgBox p { ... }` 里面添加几条新规则：

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. CSS 改完了以后我们就要来修改函数 `displayMessage()` 让它能够显示图标。在你的函数结束符之前`}`添加下面这几行代码：

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(icons/warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(icons/chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   来解释下，如果第二个参数 `msgType` 的值为 `'warning'`, 我们的消息框将显示一个警告图标和一个红色的背景。如果这个参数的值是 `'chat'`, 将显示聊天图标和水蓝色的背景。如果 `msgType` 没有指定任何值 (或者不是`'warning'`和`'chat'`), 然后这个 `else { ... }` 代码块将会被执行，代码的意思是给消息段落设置了一个简单的左内边距并且没有图标，也没有背景颜色。这么做是为了当没有提供 `msgType` 参数的时候给函数一个默认行为，意思是这是一个可选参数（你没发现？其实我们已经用过了！就在这里`btn.onclick = function() { displayMessage('Woo, this is a different message!'); };`只是当时我们没有写这个`else`段，也就是啥操作也没做）！

5. 现在来测试下我们的新函数，可以直接调用 `displayMessage()` 像这样：

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   或者这样：

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   你能看到我们现在的函数稍微有了点用 (不是非常有用) ，一个小的新功能被我们写出来了（当然，函数可以做很多你想的到的和想不到的事）！

> **备注：** 如果你写这个例子遇到了困难，在这里查看免费的代码 [完整版本的代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) (或者[在线运行的完整代码](http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), 也可以向我们寻求帮助。

## 测试你的技能！

你已经来到了本文章的结尾，但是你还能记得最重要的知识吗？你可以在离开这里找到一些更深度的测试来证实你已经记住了这些知识——查看[测试你的技能：函数](/zh-CN/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions)（英文）。后两章文本包含了这个测试需要的技能，所以你可能先需要阅读再尝试该测试。

## 结论

恭喜你，终于到了这里（等你好久了）! 这篇文章介绍了如何写一个自定义函数，要把这个新技能在真实项目中使用上你可能还要花点功夫。下一篇文章中我们将会介绍函数的另一个相关概念 — 返回值。

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
