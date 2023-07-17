---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---

{{AddonSidebar}}

Content script 是你扩展的一部分，运行于一个特定的网页环境（而并不是后台脚本，后台脚本是扩展的一部分，也不是该网页利用 {{HTMLElement("script")}} 加载的一个脚本，{{HTMLElement("script")}} 加载的脚本是网页的一部分）。

后台脚本可以访问所有 WebExtension JavaScript APIS，但是他们不能直接访问网页的内容，所以如果你需要 Content Scripts 来做到这点。

就像通常的网页加载的脚本一样，Content Scripts 可以使用 standard DOM APIS 读取和修改页面内容。

Content Script 只能访问 WebExtension APIS 的一个小的子集，但是它们可以使用通信系统与后台脚本进行通信，从而间接的访问 WebExtension APIS。

> **备注：** content scripts 在 addons.mozilla.org 现在已被禁止，如果你在这个域名尝试插入一个 Content script 将会失败而这个页面会 LOG 一个 CSP 错误。

## 加载 Content scripts

你可以通过两种方法之一在一个页面加载 Content script：

- **声明式**: 在你的 manifest.json 中使用 content_scripts 关键字，你可以要求浏览器每当加载一个与指定正则表达式匹配的网页时加载一个 Content Script。
- **程序式**: 使用 [`tabs.executeScript()`](/zh-CN/Add-ons/WebExtensions/API/Tabs/executeScript) API, 你可以在任何你想要的时候加载一个 Content script 到一个指定的标签：比如，作为用户点击事件的回应。

在每一个 extension 的每一个 frame 中，只有一个全局作用域。所以在一个 content script 中的变量可以被另外的 content script 访问到，而与 content script 如何被加载无关。

## Content script 环境

### DOM 访问

Content scripts 可以访问和修改页面的 DOM，就像普通的页面脚本一样。他们也可以察觉页面脚本对页面做出的任何修改。

不过，content scripts 得到的是一个“干净的 DOM 视图”，这意味着：

- content scripts 不能看见页面脚本定义的 javascript 变量。
- 如果一个页面脚本重定义了一个 DOM 内置属性，content scripts 将获取到这个属性的原始版本，而不是重定义版本。

在 Gecko（译者注：Gecko 是由 Mozilla 工程开发出的布局引擎的名字）, 这种行为被称为射线视觉。

举个例子，考虑一个网页如下：

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

脚本文件“page-script.js”如下：

```js
// page-script.js

// add a new element to the DOM
var p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = function () {
  alert("The page script has also redefined 'confirm'");
};
```

现在一个扩展插入一个 content script 如下：

```js
// content-script.js

// can access and modify the DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see page-script-added properties
console.log(window.foo); // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

相反的情况也是成立的：页面脚本不能察觉到通过 content scripts 添加的 JavaScript 属性。

这意味着 content script 可以依靠 DOM 属性获取可预期的行为

这种行为造成的一个结果是 content script 不能获取任何通过页面加载的 Javascript 库。所以，如果这个页面包含 JQuery，content script 将不会在意它。

如果一个 content script 想要使用 Javascript 库，这个库本身就必须像一个 content script 一样在这个 content script 旁被插入：

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

### WebExtension APIs

除了 standard DOM APIS，content script 还能使用以下 WebExtension APIS:

From [`extension`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/extension):

- [`getURL()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

From [`runtime`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime):

- [`connect()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- [`getManifest()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- [`getURL()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL)
- [`onConnect`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- [`onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- [`sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)

From [`i18n`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n):

- [`getMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

所有 [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage).

### 跨域名权限

content scripts 拥有与扩展剩余部分一致的权限：所以如果这个扩展已在 manifest.json 文件中使用 permission 关键字请求跨域权限，其 content script 将能很好获取某些跨域权限。

## 后台脚本通信

尽管 content scripts 不能直接使用大部分 WebExtension APIS，但他们可以通过使用 messaging APIS 与扩展的后台脚本通信，然后便能够间接地调用所有的后台脚本能够调用的 APIS。

在 background script 和 content script 中有两种基本的通讯方式：你可以发送带有可选回复的一次性的消息，或者在两者之间建立一个长期活动的连接并用这个连接来进行信息交换。

### 一次性消息

为了发送一个带有可选回复选项的一次性消息，你能使用以下 API:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">In content script</th>
      <th scope="col">In background script</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Send a message</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Receive a message</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

举例，这里是一个监听点击事件的 content script，如果点击发生在一个链接上，他将会将该链接的地址发送给后台脚本：

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

后台脚本监听这个消息然后使用[`notifications`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API 显示一个通知：

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

这个示范代码从 Github 上的 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) 示例修改而来。

### Connection-based messaging

如果你将在一个 content script 和 后台脚本间交换大量的消息，一次性消息会变得笨重而缓慢。所以一个更好的方案是在两个脚本间建立一个长久连接，然后使用该连接交换消息。

每个脚本都有一个 [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 对象用以交换消息。

建立过程：:

- 在一个脚本中使用 [`runtime.onConnect`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 监听连接
- 另一个脚本中调用 [`tabs.connect()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (如果连接 content script) or [`runtime.connect()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (如果连接后台脚本). 这会返回一个 [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 对象。
- [`runtime.onConnect`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 传递它自己的 [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 对象。

每个脚本都拥有一个 port，两个脚本可以使用 runtime.Port.postMessage() 来发送消息，runtime.Port.onMessage 来接收消息

比如，当加载该 content script 时：

- 连接到后台脚本，存取 Port 对象至 `myPort`
- 监听 myPort 上的消息，并记录。
- 当用户点击网页是发送消息至后台脚本。

```js
// content-script.js

var myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener(function (m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function () {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

对应的后台脚本：

- 监听 content script 的所有连接企图。
- 当收到连接请求后：

  - 存贮 Port 对象至 `portFromCS`
  - 使用 portFromCS 发送一个消息到 content script
  - 开始监听消息并记录它们。

- 当用户点击浏览器的某些扩展按钮或动作后，发送一个消息到 content script。

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener(function (m) {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

## 网页通信

尽管 content script 通常不能获取由网页脚本创建的对象，但他们可以通过 [`window.postMessage`](/zh-CN/docs/Web/API/Window/postMessage) 和 [`window.addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) APIs 与网页脚本进行通信。

比如：

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function (event) {
  if (
    event.source == window &&
    event.data.direction &&
    event.data.direction == "from-page-script"
  ) {
    alert('Content script received message: "' + event.data.message + '"');
  }
});
```

完整的例子请访问该链接，[visit the demo page on GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) 并且观看以下介绍。

> **警告：** 需要注意的是当你用该方法与一些不被信任的网页进行交互式需要特别小心。WebExtensions 拥有高等级权限，而一些恶意页面可以很轻松的获取这些权限。
>
> 做一个微小的示范，假定有如下 content script 代码：
>
> ```js
> // content-script.js
>
> window.addEventListener("message", function (event) {
>   if (
>     event.source == window &&
>     event.data.direction &&
>     event.data.direction == "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> 现在网页脚本可以在 content script 权限范围内运行任何代码。

## 与页面脚本共享对象

> **备注：** 这个部分的技术描述只适用于 49 版本后的 Firefox

> **警告：** 作为一个插件开发者你必须考虑脚本运行在任何伺机偷取用户个人隐私，破坏他们的电脑，或者使用其他方式攻击的网页上。
>
> 隔离 content script 和 页面脚本 便是为了使恶意网页的攻击变得更加困难。
>
> 这部分的技术打破了这个隔离，它们从根本上是危险的而应该被谨慎使用。

我们在 [DOM access](/zh-CN/Add-ons/WebExtensions/Content_scripts#DOM_access) 中看到 content scripts 不会察觉到通过网页脚本修改的某些属性。这意味着，如果一个网页加载了一个库比如 JQuery，content script 将不会使用它，而不得不加载它自己的一个复制。相反的，网页加载的脚本也不能获知 content script 的修改。

然而，Firefox 提供了一些 APIS 可以使得 content script 能够：

- 访问页面脚本创建的 Javascript 对象
- 暴露他们自己的 JavaScript 对象给页面脚本。

### Xray vision in Firefox

在 Firefox 中，隔离 content script 和页面脚本通过使用一种称为“Xray vision”的功能实现。当一个处于更高权限的脚本访问一个被定义于一个更低权限版本的域中时，它将只能看见这个对象的原始版本。

任何 [expando](/zh-CN/docs/Glossary/Expando) 属性都是不可见得，而且如果对象的任何属性被重定义，他也只能能看见原始的实现而不是重定义的实现。

这个功能的目的是为了让低权限的脚本不至于因为重定义原始对象属性而使高权限脚本行为异常。

让我们来举个例子，当一个 content script 访问一个页面的 [window](/zh-CN/docs/Web/API/Window) 类，他不会看见任何该页面脚本对这个 window 添加的任何属性，如果页面脚本重定义了任何已存在的属性，content script 将只能看见该属性的原始版本。

更多信心请查看 [Xray vision](/zh-CN/docs/Mozilla/Tech/Xray_vision) 和 [Script security](/zh-CN/docs/Mozilla/Gecko/Script_security).

### 从 content script 中访问 页面脚本对象

在 Firefox 中，content script 中的 DOM 对象会获得一个额外的属性 wrappedJSObject。这是一个会包含任何由页面脚本所造成修改的”未包裹“对象。

让我们来看一个简单的例子，假定一个页面载入脚本如下：

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

这个脚本添加一个全局的属性到全局 `window`：

```js
// main.js

var foo = "I'm defined in a page script!";
```

Xray vision 意味着 如果一个 content script 尝试访问 foo，它将是未定义的：

```js
// content-script.js

console.log(window.foo); // undefined
```

在 Firefox，content script 可以使用 window\.wrappedJSObject 来看见全局属性：

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

注意因为这个原因，你最好不在依赖该对象的任何属性或方法 建立或执行某些操作，你所期望的，它们，甚至 setter 和 getter 都可能被不被信任的代码重定义。

同时注意 unwarapping 是及物的：当你使用 wrappedJSObject，该未包裹对象的任何属性都是未包裹的（同时都是不可靠的），所以 一个好的建议是只在你需要时获取这个对象，重新包裹他，你能这样做：

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

查看 [Xray vision](/zh-CN/docs/Mozilla/Tech/Xray_vision) 文档获取更多。

### 与页面脚本共享 content script 对象

Firefox 同样提供 APIS 允许 content scripts 是对象对于页面脚本可用。这里是两个主要的 APIS:

- [`exportFunction()`](/zh-CN/Add-ons/WebExtensions/Content_scripts#exportFunction): 导出一个函数至页面脚本
- [`cloneInto()`](/zh-CN/Add-ons/WebExtensions/Content_scripts#cloneInto): 导出一个对象至页面脚本

#### exportFunction

给予一个定义于 content script 中的方法，exportFunction（）导出他至页面脚本域，然后脚本可以调用它。

比如，让我们考虑一个 WebExtension 有一个后台脚本如下：

```js
/*
Execute content script in the active tab.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js",
  });
}

/*
Add loadContentScript() as a listener to clicks
on the browser action.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Show a notification when we get messages from
the content script.
*/
browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Message from the page",
    message: message.content,
  });
});
```

该脚本做了两件事：

- 当用户点击浏览器按钮时，在当前标签执行一个 content script。
- 监听从 content script 传递的消息，并在消息到达时显示一个通知。

content script 如下：

```js
/*
Define a function in the content script's scope, then export it
into the page script's scope.
*/
function notify(message) {
  browser.runtime.sendMessage({ content: "Function call: " + message });
}

exportFunction(notify, window, { defineAs: "notify" });
```

该脚本定义了一个函数 notify（）用以发送其参数到后台脚本，而后他导出了这个函数至页面脚本域。现在页面脚本可以调用该函数：

```js
window.notify("Message from the page script!");
```

更详细的信息请看，[`Components.utils.exportFunction`](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.exportFunction).

#### cloneInto

给予一个定义于 content script 的对象，该技术可以创建该对象的一个复制到页面脚本域，从而使该复制可以被页面脚本访问。通常使用 [structured clone algorithm](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 复制对象，这意味着该对象中的方法不会被复制为了复制方法，需要传递 cloneFunction 选项。

比如，这里有一个 content script 定义了一个包含方法的对象，然后复制他们至页面脚本域：

```js
/*
Create an object that contains functions in
the content script's scope, then clone it
into the page script's scope.

Because the object contains functions,
the cloneInto call must include
the `cloneFunctions` option.
*/
var messenger = {
  notify: function (message) {
    browser.runtime.sendMessage({
      content: "Object method call: " + message,
    });
  },
};

window.wrappedJSObject.messenger = cloneInto(messenger, window, {
  cloneFunctions: true,
});
```

现在页面脚本将看到新的含有 `notify` 方法的属性：

```js
window.messenger.notify("Message from the page script!");
```

详情请看 [`Components.utils.cloneInto`](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto).

## 在 content script 中使用 eval()

在 Chrome 中，`eval()` 总是在 content script 的上下文环境中运行，而不是在页面的上下文环境中运行。

在 Firefox 中：

- 如果你调用`eval()`，它在 content script 的上下文中运行
- 如果你调用`window.eval()`，它在页面的上下文中运行

比如，有一个 content script 如下：

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

这段代码仅仅通过调用`window.eval()` 和 `eval()`创建了变量 x 和 y。然后记录它们的值并通知页面更新。

接收到消息后页面的脚本记录下这些变量：

```js
window.addEventListener("message", function (event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

在 Chrome 中，输出类似下面所示：

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

在 Firefox 中，输出类似下面所示：

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

上述内容同样适用于 [`setTimeout()`](/zh-CN/docs/Web/API/setTimeout), [`setInterval()`](/zh-CN/docs/Web/API/setInterval), and [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function).

当在页面的上下文中运行代码时，适用于上面所提到的"[Sharing content script objects with page scripts](/zh-CN/Add-ons/WebExtensions/Content_scripts#Sharing_objects_with_page_scripts)" 这一部分的警告：页面的环境可能会被恶意的网页所控制，这可能会导致你所交互的对象会有意想不到的行为：

```js
// page.js redefines console.log

var original = console.log;

console.log = function () {
  original(true);
};
```

```js
// content-script.js calls the redefined version

window.eval("console.log(false)");
```
