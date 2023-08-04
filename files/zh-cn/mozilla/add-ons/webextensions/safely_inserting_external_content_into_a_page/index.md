---
title: Safely inserting external content into a page
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
---

{{AddonSidebar}}

很多时候你需要从外部资源引入内容到你的插件。但是，源可能被嵌入了恶意的源代码，这些恶意的源代码可能由源的开发者或者恶意的第三方所编写。

以 RSS 读取器为例子。你不知道你的插件将会打开什么 RSS 源也无法控制那些 RSS 源的内容。所以，可能用户可能订阅到一个 RSS 源里面包含了带有恶意脚本的标题。可能就是简单的 JavaScript 代码标签\<script>\</script>。如果你在提取标题的时候，当作一般文本添加到一个页面的 DOM，用户可能加载未知的脚本。因此，需要注意避免直接把一般文本加载为 HTML。

你还需要记住扩展有授权的上下文，例如后台的脚本 backgroup scrips 以及内容脚本 content scripts。最坏的情况里，一个内嵌的洁白你可能运行在一个或多种上下文中，导致一些提取操作。这种情况会导致用户的浏览器暴露在远程攻击下，被注入代码访问用户的重要数据，例如密码、浏览器历史或者浏览器行为等。

这篇文章说明如何安全的对待远端数据并添加到 DOM。

## 处理任意字符串

当处理字符串时，有很多推荐的策略来安全添加他们到页面：标准的 DOM 节点创建方法或 jQuery。

### DOM 节点创建方法/函数

一个轻量级的方法来插入字符串到页面是使用原生的 DOM 操纵方法/函数: [`document.createElement`](/zh-CN/docs/Web/API/Document/createElement), [`Element.setAttribute`](/zh-CN/docs/Web/API/Element/setAttribute), 以及[`Node.textContent`](/zh-CN/docs/Web/API/Node/textContent). 安全的方法是分别创建节点并使用 textContent 属性赋值：

```js example-good
var data = JSON.parse(responseText);
var div = document.createElement("div");
div.className = data.className;
div.textContent = "Your favorite color is now " + data.color;
addonElement.appendChild(div);
```

这种方法安全原因是使用`.textContent` 时会自动消除 `data.color`.中的任何远程 HTML 代码。

但是要注意，使用原生方法不能保证绝对安全，例如下面的代码：

```js example-bad
var data = JSON.parse(responseText);
addonElement.innerHTML =
  "<div class='" +
  data.className +
  "'>" +
  "Your favorite color is now " +
  data.color +
  "</div>";
```

在其中，Here, the contents of `data.className` 或 `data.color` 的内容可能包含 HTML 代码使得标签提早关闭，并插入更多的 HTML 内容，之后关闭另一个标签。

jQuery

当使用 jQuery 的方法如 `attr()` 和 `text()` ，会清洗添加到 DOM 的内容。所以，上面“favorite color”例子采用 jQuery 实现会形如：

```js example-good
var node = $("</div>");
node.addClass(data.className);
node.text("Your favorite color is now " + data.color);
```

## 处理 HTML 内容

当你知道处理外部源的内容是 HTML 的时候，添加到页面之前净化 HTML 是很关键的。净化 HTML 的最好办法是使用 HTML 净化的库或者一个带有 HTML 净化特性的模板引擎。在这一节，我们来看一些合适的工具以及使用方法。

### HTML 净化

An HTML sanitization library strips anything that could lead to script execution from HTML, so you can safely inject complete sets of HTML nodes from a remote source into your DOM. [DOMPurify](https://github.com/cure53/DOMPurify),是一个 HTML 净化的库，可以脱离任意会导致脚本执行的元素，以便安全注入远端源到 HTML 节点，这个库被很多不同的安全专家评估过，是很适合这种任务扩展的库。

[DOMPurify](https://github.com/cure53/DOMPurify) 有一个简约版用于生产环境，purify.min.js. 你可以使用这个版本来适配你的扩展，例如你可以这样添加：

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "myinjectionscript.js"]
  }
]
```

之后，在 myinjectionscript.js 中你可以读取外部 HTML 并净化，之后添加到页面的 DOM 中：

```js
var elem = document.createElement("div");
var cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

你可以使用任何方法添加净化后的 HTML 到 DOM，例如 jQuery’s `.html()` 方法。注意这种情况需要使用 Remember though that the `SAFE_FOR_JQUERY` 标记：

```js
var elem = $("<div/>");
var cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### 模板引擎

另一个常见的模式是对一个页面创建本地 HTML 模板并通过远端的值来填空。这种方法被广泛应用，应该注意去避免构造函数的使用，可能会导致执行代码的注入。当模板引擎使用构造函数插入 HTML 到文档的时候会发生这种情况，如果用来注入原始 HTML 的变量是远端代码，这就属于上面介绍中的安全风险。

例如，当使用[mustache templates](https://mustache.github.io/) 你必须使用两个花括号`\{{variable}}`,来去掉任何 HTML。使用三个花括号`\{\{{variable}}}` 必须避免注入原始 HTML 字符串到模板。

[Handlebars](http://handlebarsjs.com/) 工作原理也是类似，`\{{variable}}` 。同时，如果创造了 Handlebars helper 使用 `Handlebars.SafeString` 使用`Handlebars.escapeExpression()` 来消除任何传给 helper 的动态参数。`Handlebars.SafeString` 的结果被认为是安全的，当插入到双 handlebars 的时候就不会做消除动作。

在其他模板系统中也有类似的构造函数，需要有同样的考虑。

## 其他参考

关于这个主题更多的信息，可以查看下面的文章

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
