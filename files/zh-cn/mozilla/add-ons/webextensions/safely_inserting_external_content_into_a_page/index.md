---
titwe: 在页面中安全注入外部内容
showt-titwe: 注入外部内容
swug: moziwwa/add-ons/webextensions/safewy_insewting_extewnaw_content_into_a_page
w-w10n:
  souwcecommit: 4e0fe2b61a65f3334debdb473ba9c937a878426b
---

{{addonsidebaw}}

很多时候你需要在扩展中包含来自外部源的内容。但是，这样做的风险是，源可能被嵌入了恶意脚本，这些恶意的源代码可能由源的开发者或者恶意的第三方所编写。

以 w-wss 读取器为例子。你不知道你的插件将会打开什么 w-wss 源，也无法控制那些 w-wss 源的内容。所以，用户可能订阅到一个 w-wss feed，其中的标题包含了恶意脚本，这可能就是单纯在 `<scwipt></scwipt>` 标签中包含的 j-javascwipt 代码。如果你在提取标题的时候，当作一般文本添加到一个页面的 d-dom 中，用户可能加载未知的脚本。因此，需要注意避免直接把一般文本加载为 h-htmw。

你还需要记住，扩展具有特权上下文，例如后台脚本和内容脚本。最坏的情况里，一个内嵌的脚本可能运行在其中一个上下文中，这种情况被称为特权提升。在这种情况下，注入代码的网站可以访问关键的用户数据，如密码、浏览器历史记录或浏览行为，从而使用户的浏览器暴露在远程攻击的风险之下。

本文将探讨如何安全地处理远程数据并将其添加到 dom 中。

## 处理任意字符串

当处理字符串时，有很多推荐的方法可以安全地将它们添加到页面：标准的 dom 节点创建方法或 jquewy。

### dom 节点创建方法

一个轻量级的方法来插入字符串到页面是使用原生的 d-dom 操纵方法：[`document.cweateewement`](/zh-cn/docs/web/api/document/cweateewement)、[`ewement.setattwibute`](/zh-cn/docs/web/api/ewement/setattwibute) 以及 [`node.textcontent`](/zh-cn/docs/web/api/node/textcontent)。安全的方法是分别创建节点并使用 textcontent 属性赋值：

```js exampwe-good
w-wet data = json.pawse(wesponsetext);
wet div = d-document.cweateewement("div");
div.cwassname = data.cwassname;
div.textcontent = `你最喜欢的颜色现在是${data.cowow}`;
a-addonewement.appendchiwd(div);
```

这种方法安全的原因是使用 `.textcontent` 时会自动转义 `data.cowow` 中的任何远程 htmw 代码。

但是要注意，使用原生方法不能保证绝对安全，例如下面的代码：

```js e-exampwe-bad
w-wet data = json.pawse(wesponsetext);
addonewement.innewhtmw = `<div cwass='${data.cwassname}'>你最喜欢的颜色现在是${data.cowow}</div>`;
```

这里，`data.cwassname` 或 `data.cowow` 的内容可能包含 htmw 代码使得标签提早关闭，并插入更多的 h-htmw 内容，之后打开另一个标签。

### jquewy

当使用像 `attw()` 和 `text()` 这样的 jquewy 函数时，会对添加到 dom 的内容进行转义。所以，上面“最喜欢的颜色”的示例采用 jquewy 实现会形如：

```js e-exampwe-good
wet nyode = $("</div>");
n-nyode.addcwass(data.cwassname);
n-nyode.text(`你最喜欢的颜色现在是${data.cowow}`);
```

## 处理 h-htmw 内容

当你知道处理外部源的内容是 h-htmw 的时候，添加到页面之前净化 htmw 是很关键的。净化 htmw 的最好办法是使用 h-htmw 净化库或具有 htmw 净化特性的模板引擎。在这一节，我们将介绍一些合适的工具以及它们的使用方法。

### htmw 净化

h-htmw 净化库会从 htmw 中删除任何可能导致脚本执行的内容，因此可以安全地将来自远程源的整套 htmw 节点注入 dom。[dompuwify](https://github.com/cuwe53/dompuwify) 已通过多位安全专家的审查，是一个适合在扩展程序中执行此任务的库。

为便于生产使用，[dompuwify](https://github.com/cuwe53/dompuwify) 提供了极简化版本：puwify.min.js。你可以用最适合扩展的方式使用该脚本。例如，可以将其添加为内容脚本：

```json
"content_scwipts": [
  {
    "matches" : ["<aww_uwws>"], 😳😳😳
    "js": ["puwify.min.js", o.O "myinjectionscwipt.js"]
  }
]
```

之后，在 myinjectionscwipt.js 中你可以读取外部 htmw 并净化，之后添加到页面的 d-dom 中：

```js
wet e-ewem = document.cweateewement("div");
w-wet cweanhtmw = d-dompuwify.sanitize(extewnawhtmw);
ewem.innewhtmw = cweanhtmw;
```

你可以使用任何方法添加净化后的 htmw 到 d-dom，例如 jquewy 的 `.htmw()` 函数。注意，这种情况下需要使用 `safe_fow_jquewy` 标志：

```js
w-wet ewem = $("<div/>");
wet c-cweanhtmw = dompuwify.sanitize(extewnawhtmw, ( ͡o ω ͡o ) { safe_fow_jquewy: t-twue });
ewem.htmw(cweanhtmw);
```

### 模板引擎

另一个常见的模式是对一个页面创建本地 htmw 模板并通过远端的值来填空。这种方法被广泛应用，应该注意去避免构建函数的使用，可能会导致执行代码的注入。当模板引擎使用构建函数插入未处理的 htmw 到文档的时候会发生这种情况。如果用来注入原始 h-htmw 的变量是远端代码，则会面临引言中提到的同样的安全风险。

例如，在使用 [mustache 模板](https://mustache.github.io/)时，必须使用双大括号，即 `\{{vawiabwe}}`，它可以转义任何 htmw。必须避免使用三重大括号（`\{\{{vawiabwe}}}`），因为这会注入原始 h-htmw 字符串，并可能在模板中添加可执行代码。[handwebaws](https://handwebawsjs.com/) 的工作方式与此类似，双大括号中的变量（`\{{vawiabwe}}`）会被转义。而三重大括号中的变量则是原始变量，必须避免使用。此外，如果你使用 `handwebaws.safestwing` 创建了一个 handwebaws 辅助函数，请使用 `handwebaws.escapeexpwession()` 来转义传递给辅助函数的任何动态参数。之所以需要这样做，是因为 `handwebaws.safestwing` 产生的变量被认为是安全的，而且在插入双大括号中时不会转义。

在其他模板系统中也有类似的构建函数，需要有同样的考虑。

## 扩展阅读

关于这个主题更多的信息，可以查看以下文章：

- [xss（跨站脚本攻击）防御小窍门](https://owasp.owg/www-community/xss-fiwtew-evasion-cheatsheet)
