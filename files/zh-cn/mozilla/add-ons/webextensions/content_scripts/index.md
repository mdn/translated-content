---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
page-type: guide
---

{{AddonSidebar}}

Content script 是你扩展的一部分，运行于一个特定的网页环境（而并不是后台脚本，后台脚本是扩展的一部分，也不是该网页利用 {{HTMLElement("script")}} 加载的一个脚本，{{HTMLElement("script")}} 加载的脚本是网页的一部分）。

[Background scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) 可以访问所有 [WebExtension JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API)，但是他们不能直接访问网页的内容，所以如果你需要 Content Scripts 来做到这点。

就像通常的网页加载的脚本一样，Content Scripts 可以使用 standard DOM APIS 读取和修改页面内容。

Content Script 只能访问 [WebExtension APIs 的一个小的子集](#webextension_apis)，但是它们可以使用通信系统与 [与 background scripts 通信](#communicating_with_background_scripts)，从而间接的访问 WebExtension APIS。

> **备注：** 只有当扩展被授予域的[主机权限](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)时，才能执行内容脚本。
>
> However, [restricted domains](#restricted_domains) can never be accessed, regardless of the granted permissions.
>
> Starting with Manifest V3, host permissions are not automatically granted at install time. Users may opt in or out of host permissions after installing the extension.

## 加载 Content scripts

你可以通过三种方法之一在一个页面加载 Content script：

1. - 在安装时，进入与 URL 模式匹配的页面。
     - : 使用 `manifest.json` 中的 [content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键，你可以要求浏览器在加载一个 URL [符合给定的模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的页面时加载一个内容脚本。
2. - 在运行时，进入符合URL模式的页面。
     - : 使用 {{WebExtAPIRef("scripting.registerContentScripts()")}} 或（仅在 Firefox 的 Manifest V2 中）{{WebExtAPIRef("contentScripts")}}，您可以要求浏览器在加载一个 URL [符合给定模式]（/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns）的页面时加载一个内容脚本。(这与方法1类似，但你可以在运行时添加和删除内容脚本）。
3. - 在运行时，进入特定的标签。
     - : 使用 {{WebExtAPIRef("scripting.executeScript()")}} 或（仅在 Manifest V2 中）{{WebExtAPIRef("tabs.executeScript()")}}，你可以随时将内容脚本加载到特定标签。(例如，响应用户点击[浏览器动作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)。)

在每一个 extension 的每一个 frame 中，只有一个全局作用域。所以在一个 content script 中的变量可以被另外的 content script 访问到，而与 content script 如何被加载无关。

Using methods (1) and (2), you can only load scripts into pages whose URLs can be represented using a [match pattern](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

Using method (3), you can also load scripts into pages packaged with your extension, but you can't load scripts into privileged browser pages (like "`about:debugging`" or "`about:addons`").

> **Note:** [Dynamic JS module imports](/zh-CN/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) are now working in content scripts. For more details, see [Firefox bug 1536094](https://bugzil.la/1536094).
> Only URLs with the _moz-extension_ scheme are allowed, which excludes data URLs ([Firefox bug 1587336](https://bugzil.la/1587336)).

## Restricted domains

Even with the right [host permissions](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), extensions cannot access some domains. Content scripts are blocked from executing on these domains, for example, to protect the user from an extension escalating privileges through special pages.

In Firefox, this includes the following domains:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

Other browsers have similar restrictions over the websites extensions can be installed from. For example, access to chrome.google.com is restricted in Chrome.

> **Note:** Because these restrictions include addons.mozilla.org, users who try to use your extension immediately after installation may find that it doesn't work. To avoid this, you should add an appropriate warning or an [onboarding page](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) to move users away from `addons.mozilla.org`.

The set of domains can be restricted further through enterprise policies: Firefox recognizes the `restricted_domains` policy as documented at [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings). Chrome's `runtime_blocked_hosts` policy is documented at [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568).

## Content script 环境

### DOM 访问

Content scripts 可以访问和修改页面的 DOM，就像普通的页面脚本一样。他们也可以察觉页面脚本对页面做出的任何修改。

不过，content scripts 得到的是一个“干净的 DOM 视图”，这意味着：

- content scripts 不能看见页面脚本定义的 javascript 变量。
- 如果一个页面脚本重定义了一个 DOM 内置属性，content scripts 将获取到这个属性的原始版本，而不是重定义版本。

As noted at ["Content script environment" at Chrome incompatibilities](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment), the behavior differs across browsers:

- In Firefox, this behavior is called [Xray vision](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox).
  Content scripts may encounter JavaScript objects from its own global scope or Xray-wrapped versions from the web page.

- In Chrome this behavior is enforced through an [isolated world](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world), which uses a fundamentally different approach.

在 Gecko（译者注：Gecko 是由 Mozilla 工程开发出的布局引擎的名字）, 这种行为被称为射线视觉。

举个例子，考虑一个网页如下：

```html
<!DOCTYPE html>
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
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}
```

现在一个扩展插入一个 content script 如下：

```js
// content-script.js

// can access and modify the DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see properties added by page-script.js
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

相反的情况也是成立的：页面脚本不能察觉到通过 content scripts 添加的 JavaScript 属性。

这意味着内容脚本可以依赖DOM属性的可预测行为，而不必担心其变量与页面脚本的变量发生冲突。

这种行为造成的一个结果是 content script 不能获取任何通过页面加载的 Javascript 库。所以，如果这个页面包含 JQuery，content script 无法看到它。

如果一个 content script 想要使用 Javascript 库，这个库本身就必须像一个 content script 一样在这个 content script 旁被插入：

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> **Note:** Firefox _does_ provide some APIs that enable content scripts to access JavaScript objects created by page scripts, and to expose their own JavaScript objects to page scripts.
>
> See [Sharing objects with page scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) for more details.

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

**From [`menus`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus):**

- [`getTargetElement`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

**Everything from:**

- [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### 跨域名权限

Content scripts 可以使用正常的 [`window.XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 和 [`window.fetch()`](/zh-CN/docs/Web/API/Fetch_API) API 发出请求。

> **Note:** In Firefox in Manifest V2, content script requests (for example, using [`fetch()`](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)) happen in the context of an extension, so you must provide an absolute URL to reference page content.
>
> In Chrome and Firefox in Manifest V3, these requests happen in context of the page, so they are made to a relative URL. For example, `/api` is sent to `https://«current page URL»/api`.

Content scripts get the same cross-domain privileges as the rest of the extension: so if the extension has requested cross-domain access for a domain using the [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key in `manifest.json`, then its content scripts get access that domain as well.

> **Note:** When using Manifest V3, content scripts can perform cross-origin requests when the destination server opts in using [CORS](/zh-CN/docs/Web/HTTP/CORS); however, host permissions don't work in content scripts, but they still do in regular extension pages.

This is accomplished by exposing more privileged XHR and fetch instances in the content script, which has the side effect of not setting the [`Origin`](/zh-CN/docs/Web/HTTP/Headers/Origin) and [`Referer`](/zh-CN/docs/Web/HTTP/Headers/Referer) headers like a request from the page itself would; this is often preferable to prevent the request from revealing its cross-origin nature.

> **Note:** In Firefox in Manifest V2, extensions that need to perform requests that behave as if they were sent by the content itself can use `content.XMLHttpRequest` and `content.fetch()` instead.
>
> For cross-browser extensions, the presence of these methods must be feature-detected.
>
> This is not possible in Manifest V3, as `content.XMLHttpRequest` and `content.fetch()` are not available.

> **Note:** In Chrome, starting with version 73, and Firefox, starting with version 101 when using Manifest V3, content scripts are subject to the same [CORS](/zh-CN/docs/Web/HTTP/CORS) policy as the page they are running within. Only backend scripts have elevated cross-domain privileges. See [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches).

## 后台脚本通信

尽管 content scripts 不能直接使用大部分 WebExtension APIS，但他们可以通过使用 messaging APIS 与扩展的后台脚本通信，然后便能够间接地调用所有的后台脚本能够调用的 APIS。

在 background script 和 content script 中有两种基本的通讯方式：你可以发送带有可选回复的一次性的消息，或者在两者之间建立一个长期活动的连接并用这个连接来进行信息交换。

- You can send **one-off messages** (with an optional response).
- You can set up a **longer-lived connection between the two sides**, and use that connection to exchange messages.

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

If the click was on a link, it sends a message to the background page with the target URL:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

后台脚本监听这个消息然后使用[`notifications`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API 显示一个通知：

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "You clicked a link!",
    "message": message.url
  });
}
```

(这个例子的代码是由GitHub上的 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) 例子轻微修改而来的）。

### Connection-based messaging

如果你将在一个 content script 和 后台脚本间交换大量的消息，一次性消息会变得笨重而缓慢。所以一个更好的方案是在两个脚本间建立一个长久连接，然后使用该连接交换消息。

每个脚本都有一个 [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 对象用以交换消息。

建立链接的过程：:

- 在一个脚本中使用 [`runtime.onConnect`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 监听连接
- 另一个脚本中调用:

  - [`tabs.connect()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (if connecting to a content script)
  - [`runtime.connect()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (if connecting to a background script)

This returns a [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object.

- [`runtime.onConnect`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 传递它自己的 [`runtime.Port`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 对象。

一旦双方都有一个 port，双方就可以：

- 使用 runtime.Port.postMessage() 来发送消息，
- 使用 runtime.Port.onMessage() 来接收消息

比如，当加载该 content script 时：

- 连接到后台脚本
- 在变量 "myPort" 中存储 "Port"。
- 监听 `myPort` 上的消息（并记录它们）
- 当用户点击文档时，使用 `myPort` 向后台脚本发送消息

```js
// content-script.js

let myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

对应的后台脚本：

- 监听来自 content script 的连接尝试。
- 当收到连接请求后：

  - 存贮 Port 对象至 `portFromCS`变量
  - 使用 Port 发送消息到 content script
  - 开始监听消息并记录它们

- 当用户点击浏览器的某些扩展按钮或动作后，发送一个消息到 content script。

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener((m) => {
    portFromCS.postMessage({greeting: `In background script, received message from content script: ${m.greeting}`});
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### Multiple content scripts

If you have multiple content scripts communicating at the same time, you might want to store connections to them in an array.

```js
// background-script.js

let ports = []

function connected(p) {
  ports[p.sender.tab.id] = p
  // …
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(() => {
  ports.forEach((p) => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

### Choosing between one-off messages and connection-based messaging

The choice between one-off and connection-based messaging depends on how your extension expects to make use of messaging.

The recommended best practices are:

- **Use one-off messages when…**
  - Only one response is expected to a message.
  - A small number of scripts listen to receive messages ({{WebExtAPIRef("runtime.onMessage")}} calls).
- **Use connection-based messaging when…**
  - Scripts engage in sessions where multiple messages are exchanged.
  - The extension needs to know about task progress or if a task is interrupted, or wants to interrupt a task initiated using messaging.

## 网页通信

尽管 content script 通常不能获取由网页脚本创建的对象，但他们可以通过 [`window.postMessage`](/zh-CN/docs/Web/API/Window/postMessage) 和 [`window.addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) APIs 与网页脚本进行通信。

比如：

```js
// page-script.js

let messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");
}
```

```js
// content-script.js

window.addEventListener("message", (event) => {
  if (
    event.source === window &&
    event?.data?.direction === "from-page-script"
  ) {
    alert(`Content script received message: "${event.data.message}"`);
  }
});
```

完整的例子请访问该链接，[visit the demo page on GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) 并且观看以下介绍。

> **警告：** 需要注意的是当你用该方法与一些不被信任的网页进行交互式需要特别小心。Extensions 拥有高等级权限，而一些恶意页面可以很轻松的获取这些权限。
>
> 做一个微小的示范，假定有如下 content script 代码：
>
> ```js example-bad
> // content-script.js
>
> window.addEventListener("message", (event) => {
>   if (
>     event.source === window &&
>     event?.data?.direction === "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> 现在网页脚本可以在 content script 权限范围内运行任何代码。

## 在 content script 中使用 eval()

> **Note:** `eval()` not available in Manifest V3.

- 在 Chrome 中，
  - : {{jsxref("Global_Objects/eval", "eval")}}总是在**content script**的上下文中运行代码，而不是在页面的上下文中。

在 Firefox 中：

- 如果你调用`eval()`，它在 content script 的上下文中运行
- 如果你调用`window.eval()`，它在页面的上下文中运行

比如，有一个 content script 如下：

```js
// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");
```

这段代码仅仅通过调用`window.eval()` 和 `eval()`创建了变量 x 和 y。然后记录它们的值并通知页面更新。

接收到消息后页面的脚本记录下这些变量：

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

在 Chrome 中，输出类似下面所示：

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

在 Firefox 中，输出类似下面所示：

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

上述内容同样适用于 [`setTimeout()`](/zh-CN/docs/Web/API/setTimeout), [`setInterval()`](/zh-CN/docs/Web/API/setInterval), and [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function).

> **警告：** 在页面的上下文中运行代码时要非常小心!

> 这个页面的环境是由潜在的恶意网页控制的，它可以重新定义与你互动的对象，使其以意想不到的方式行事：
>
> ```js example-bad
> // page.js redefines console.log
>
> let original = console.log;
>
> console.log = () => {
>   original(true);
> }
> ```
>
> ```js example-bad
> // content-script.js calls the redefined version
>
> window.eval('console.log(false)');
> ```
