---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---
{{AddonSidebar}}

A content script is a part of your extension that runs in the context of a particular web page (as opposed to background scripts which are part of the extension, or scripts which are part of the web site itself, such as those loaded using the {{HTMLElement("script")}} element).

[Background scripts](/en-US/Add-ons/WebExtensions/Background_scripts) can access all the [WebExtension JavaScript APIs](/en-US/Add-ons/WebExtensions/API), but they can't directly access the content of web pages. So if your extension needs to do that, you need content scripts.

Just like the scripts loaded by normal web pages, content scripts can read and modify the content of their pages using the standard DOM APIs.

Content scripts can only access [a small subset of the WebExtension APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs), but they can [communicate with background scripts](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts) using a messaging system, and thereby indirectly access the WebExtension APIs.

> **참고:** Note that content scripts are blocked on the following domains: accounts-static.cdn.mozilla.net, accounts.firefox.com, addons.cdn.mozilla.net, addons.mozilla.org, api.accounts.firefox.com, content.cdn.mozilla.net, content.cdn.mozilla.net, discovery.addons.mozilla.org, input.mozilla.org, install.mozilla.org, oauth.accounts.firefox.com, profile.accounts.firefox.com, support.mozilla.org, sync.services.mozilla.com, and testpilot.firefox.com. If you try to inject a content script into a page in these domains, it will fail and the page will log a [CSP](/ko/docs/Web/HTTP/CSP) error.As these restrictions include addons.mozilla.org, users may attempt to use your extension immediately after installation and find it doesn't work. You may want to add an appropriate warning or an [onboarding page](/ko/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices) that moves users away from addons.mozilla.org.

> **참고:** Values added to the global scope of a content script with `var foo` or `window.foo = "bar"` may disappear due to bug [1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996).

## Loading content scripts

You can load a content script into a web page in one of three ways:

1. **at install time, into pages that match URL patterns:** using the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key in your manifest.json, you can ask the browser to load a content script whenever the browser loads a page whose URL [matches a given pattern](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns).
2. **at runtime, into pages that match URL patterns:** using the {{WebExtAPIRef("contentScripts")}} API, you can ask the browser to load a content script whenever the browser loads a page whose URL [matches a given pattern](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns). This is just like method (1), except you can add and remove content scripts at runtime.
3. **at runtime, into specific tabs:** using the [`tabs.executeScript()`](/en-US/Add-ons/WebExtensions/API/Tabs/executeScript) API, you can load a content script into a specific tab whenever you want: for example, in response to the user clicking on a [browser action](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_action).

There is only one global scope per frame per extension, so variables from one content script can directly be accessed by another content script, regardless of how the content script was loaded.

Using methods (1) and (2) you can only load scripts into pages whose URLs can be represented using a [match pattern](/ko/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Using method (3), you can also load scripts into pages packaged with your extension, but you can't load scripts into privileged browser pages like "about:debugging" or "about:addons".

## Content script environment

### DOM access

Content scripts can access and modify the page's DOM, just like normal page scripts can. They can also see any changes that were made to the DOM by page scripts.

However, content scripts get a "clean view of the DOM". This means:

- content scripts cannot see JavaScript variables defined by page scripts
- if a page script redefines a built-in DOM property, the content script will see the original version of the property, not the redefined version.

In Gecko, this behavior is called [Xray vision](/ko/docs/Xray_vision).

For example, consider a web page like this:

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

The script "page-script.js" does this:

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

Now an extension injects a content script into the page:

```js
// content-script.js

// can access and modify the DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see page-script-added properties
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

The same is true in reverse: page scripts can't see JavaScript properties added by content scripts.

All this means that the content script can rely on DOM properties behaving predictably, and doesn't have to worry about variables it defines clashing with variables defined in the page script.

One practical consequence of this behavior is that a content script won't have access to any JavaScript libraries loaded by the page. So for example, if the page includes jQuery, the content script won't be able to see it.

If a content script does want to use a JavaScript library, then the library itself should be injected as a content script alongside the content script that wants to use it:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

Note that Firefox provides some APIs that enable content scripts to access JavaScript objects created by page scripts and to expose their own JavaScript objects to page scripts. See [Sharing objects with page scripts](/ko/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) for more details.

### WebExtension APIs

In addition to the standard DOM APIs, content scripts can use the following WebExtension APIs:

From [`extension`](/en-US/Add-ons/WebExtensions/API/extension):

- [`getURL()`](</en-US/Add-ons/WebExtensions/API/extension#getURL()>)
- [`inIncognitoContext`](/en-US/Add-ons/WebExtensions/API/extension#inIncognitoContext)

From [`runtime`](/en-US/Add-ons/WebExtensions/API/runtime):

- [`connect()`](</en-US/Add-ons/WebExtensions/API/runtime#connect()>)
- [`getManifest()`](</en-US/Add-ons/WebExtensions/API/runtime#getManifest()>)
- [`getURL()`](</en-US/Add-ons/WebExtensions/API/runtime#getURL()>)
- [`onConnect`](/en-US/Add-ons/WebExtensions/API/runtime#onConnect)
- [`onMessage`](/en-US/Add-ons/WebExtensions/API/runtime#onMessage)
- [`sendMessage()`](</en-US/Add-ons/WebExtensions/API/runtime#sendMessage()>)

From [`i18n`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n):

- [`getMessage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

From [`menus`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus):

- [`getTargetElement`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

Everything from [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage).

### XHR and Fetch

Content scripts can make requests using the normal [`window.XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) and [`window.fetch()`](/en-US/docs/Web/API/Fetch_API) APIs.

Content scripts get the same cross-domain privileges as the rest of the extension: so if the extension has requested cross-domain access for a domain using the [`permissions`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions) key in manifest.json, then its content scripts get access that domain as well.

This is accomplished by exposing more privileged XHR and fetch instances in the content script, which has the side-effect of not setting the [`Origin`](/en-US/docs/Web/HTTP/Headers/Origin) and [`Referer`](/en-US/docs/Web/HTTP/Headers/Referer) headers like a request from the page itself would, this is often preferable to prevent the request from revealing its cross-orign nature. From version 58 onwards extensions that need to perform requests that behave as if they were sent by the content itself can use `content.XMLHttpRequest` and `content.fetch()` instead. For cross-browser extensions their presence must be feature-detected.

## Communicating with background scripts

Although content scripts can't directly use most of the WebExtension APIs, they can communicate with the extension's background scripts using the messaging APIs, and can therefore indirectly access all the same APIs that the background scripts can.

There are two basic patterns for communicating between the background scripts and content scripts: you can send one-off messages, with an optional response, or you can set up a longer-lived connection between the two sides, and use that connection to exchange messages.

### One-off messages

To send one-off messages, with an optional response, you can use the following APIs:

|                   | In content script                                                                       | In background script                                                              |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Send a message    | [`browser.runtime.sendMessage()`](/en-US/Add-ons/WebExtensions/API/runtime/sendMessage) | [`browser.tabs.sendMessage()`](/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| Receive a message | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime/onMessage)       | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime/onMessage) |

For example, here's a content script which listens for click events in the web page. If the click was on a link, it messages the background page with the target URL:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

The background script listens for these messages and displays a notification using the [`notifications`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API:

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

This example code is lightly adapted from the [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) example on GitHub.

### Connection-based messaging

Sending one-off messages can get cumbersome if you are exchanging a lot of messages between a background script and a content script. So an alternative pattern is to establish a longer-lived connection between the two contexts, and use this connection to exchange messages.

Each side has a [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object, which they can use to exchange messages.

To create the connection:

- one side listens for connections using [`runtime.onConnect`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- the other side calls either [`tabs.connect()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (if connecting to a content script) or [`runtime.connect()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (if connecting to a background script). This returns a [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object.
- the [`runtime.onConnect`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) listener gets passed its own [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object.

Once each side has a port, the two sides can exchange messages using `runtime.Port.postMessage()` to send a message, and `runtime.Port.onMessage` to receive messages.

For example, as soon as it loads, this content script:

- connects to the background script, and stores the `Port` in a variable `myPort`
- listens for messages on `myPort`, and logs them
- sends messages to the background script, using `myPort`, when the user clicks the document

```js
// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

The corresponding background script:

- listens for connection attempts from the content script
- when it receives a connection attempt:

  - stores the port in a variable named `portFromCS`
  - sends the content script a message using the port
  - starts listening to messages received on the port, and logs them

- sends messages to the content script, using `portFromCS`, when the user clicks the extension's browser action

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("In background script, received message from content script")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### Multiple content scripts

If you have multiple content scripts communicating at the same time, you might want to store each connection in an array.

```js
// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

## Communicating with the web page

Although content scripts don't by default get access to objects created by page scripts, they can communicate with page scripts using the DOM [`window.postMessage`](/en-US/docs/Web/API/Window/postMessage) and [`window.addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) APIs.

콘텐트 스크립트는 기본적으로 페이지 스크립트가 만든 객체에 접근할 수 없지만, DOM의 [`window.postMessage`](/en-US/docs/Web/API/Window/postMessage)와 [`window.addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) API로 페이지 스크립트와 소통할 수 있다.

For example:

예를 들어:

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

window.addEventListener("message", function(event) {
  if (event.source == window &&
      event.data &&
      event.data.direction == "from-page-script") {
    alert("Content script received message: \"" + event.data.message + "\"");
  }
});
```

For a complete working example of this, [visit the demo page on GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) and follow the instructions.

이에 대한 완전한 예제를 보려면 [GitHub의 데모페이지](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html)를 방문하여 지침을 따르십시오.

> **경고:** Note that any time you interact with untrusted web content on this way, you need to be very careful. Extensions are privileged code which can have powerful capabilities, and hostile web pages can easily trick them into accessing those capabilities.이런 방식으로 신뢰할 수 없는 웹 콘텐트와 상호 작용할 때마다 매우 조심해야한다. 확장 기능은 강력한 기능을 제공 할 수 있는 권한있는 코드이며 적대적인 웹 페이지는 이러한 기능에 접근하는 부분을 쉽게 속일 수 있다.To make a trivial example, suppose the content script code that receives the message does something like this:간단한 예제로, 콘텐트 스크립트가 아래처럼 동작하는 메시지를 받는다고 한다면:```js
> // content-script.js
>
> window.addEventListener("message", function(event) {
> if (event.source == window &&
> event.data.direction &&
> event.data.direction == "from-page-script") {
> eval(event.data.message);
> }
> });
>
> ```Now the page script can run any code with all the privileges of the content script.이제 페이지 스크립트는 콘텐트 스크립트의 권한으로 어떤 코드라도 실행할 수 있게 된다.
>
> ```

## Using eval() in content scripts

In Chrome, [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) always runs code in the context of the content script, not in the context of the page.

크롬에서, [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)은 항상 콘텐트 스크립트의 컨텍스트에서 코드를 실행한다. 페이지의 컨텍스트에서 하지 않는다.

In Firefox:

- if you call `eval()`, it runs code in the context of the content script
- if you call `window.eval()`, it runs code in the context of the page.

파이어폭스에서:

- `eval()`을 호출하면, 콘텐트 스크립트의 컨텍스트에서 코드를 실행한다.
- `window.eval()`을 호출하면, 페이지의 컨텍스트에서 코드를 실행한다.

For example, consider a content script like this:

예를 들어, 콘텐트 스크립트가 아래 같다고 한다면:

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

This code just creates some variables x and y using `window.eval()` and `eval()`, then logs their values, then messages the page.

이 코드는 `window.eval()` 및 `eval()`을 사용하여 변수 x 및 y를 만든 다음 값의 로그를 남기고, 페이지에 메시지를 보낸다.

On receiving the message, the page script logs the same variables:

그 메세지를 받으면, 페이지 스크립트는 같은 변수들을 로그에 남긴다:

```js
window.addEventListener("message", function(event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome, this will produce output like this:

크롬에서, 이것은 아래처럼 출력될 것이다:

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox the following output is produced:

파이어폭스에서는 아래의 출력이 만들어진다:

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

The same applies to [`setTimeout()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`setInterval()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function).

같은 것이 [`setTimeout()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`setInterval()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), 그리고 [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)에 적용된다.

When running code in the context of the page, be very careful. The page's environment is controlled by potentially malicious web pages, which can redefine objects you interact with to behave in unexpected ways:

페이지 컨텍스트에서 코드를 실행할 때는 매우 주의해야 한다. 페이지의 환경은 잠재적으로 악의적인 웹 페이지에 의해 제어되며, 상호 작용하는 객체가 예기치 않은 방식으로 재정의될 수 있다.

```js
// page.js redefines console.log

var original = console.log;

console.log = function() {
  original(true);
}
```

```js
// content-script.js calls the redefined version

window.eval('console.log(false)');
```
