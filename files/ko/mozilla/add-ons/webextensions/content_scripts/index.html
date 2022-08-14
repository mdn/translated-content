---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
translation_of: Mozilla/Add-ons/WebExtensions/Content_scripts
---
<div>{{AddonSidebar}}</div>

<p>A content script is a part of your extension that runs in the context of a particular web page (as opposed to background scripts which are part of the extension, or scripts which are part of the web site itself, such as those loaded using the {{HTMLElement("script")}} element).</p>

<p><a href="/en-US/Add-ons/WebExtensions/Background_scripts">Background scripts</a> can access all the <a href="/en-US/Add-ons/WebExtensions/API">WebExtension JavaScript APIs</a>, but they can't directly access the content of web pages. So if your extension needs to do that, you need content scripts.</p>

<p>Just like the scripts loaded by normal web pages, content scripts can read and modify the content of their pages using the standard DOM APIs.</p>

<p>Content scripts can only access <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">a small subset of the WebExtension APIs</a>, but they can <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts">communicate with background scripts</a> using a messaging system, and thereby indirectly access the WebExtension APIs.</p>

<div class="note">
<p>Note that content scripts are blocked on the following domains: accounts-static.cdn.mozilla.net, accounts.firefox.com, addons.cdn.mozilla.net, addons.mozilla.org, api.accounts.firefox.com, content.cdn.mozilla.net, content.cdn.mozilla.net, discovery.addons.mozilla.org, input.mozilla.org, install.mozilla.org, oauth.accounts.firefox.com, profile.accounts.firefox.com, support.mozilla.org, sync.services.mozilla.com, and testpilot.firefox.com. If you try to inject a content script into a page in these domains, it will fail and the page will log a <a href="/en-US/docs/Web/HTTP/CSP">CSP</a> error.</p>

<p>As these restrictions include addons.mozilla.org, users may attempt to use your extension immediately after installation and find it doesn't work. You may want to add an appropriate warning or an <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices">onboarding page</a> that moves users away from addons.mozilla.org.</p>
</div>

<div class="note">
<p>Values added to the global scope of a content script with <code>var foo</code> or <code>window.foo = "bar"</code> may disappear due to bug <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1408996">1408996</a>.</p>
</div>

<h2 id="Loading_content_scripts">Loading content scripts</h2>

<p>You can load a content script into a web page in one of three ways:</p>

<ol>
 <li><strong>at install time, into pages that match URL patterns:</strong> using the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key in your manifest.json, you can ask the browser to load a content script whenever the browser loads a page whose URL <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns">matches a given pattern</a>.</li>
 <li><strong>at runtime, into pages that match URL patterns:</strong> using the {{WebExtAPIRef("contentScripts")}} API, you can ask the browser to load a content script whenever the browser loads a page whose URL <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns">matches a given pattern</a>. This is just like method (1), except you can add and remove content scripts at runtime.</li>
 <li><strong>at runtime, into specific tabs:</strong> using the <code><a href="/en-US/Add-ons/WebExtensions/API/Tabs/executeScript">tabs.executeScript()</a></code> API, you can load a content script into a specific tab whenever you want: for example, in response to the user clicking on a <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_action">browser action</a>.</li>
</ol>

<p>There is only one global scope per frame per extension, so variables from one content script can directly be accessed by another content script, regardless of how the content script was loaded.</p>

<p>Using methods (1) and (2) you can only load scripts into pages whose URLs can be represented using a <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">match pattern</a>. Using method (3), you can also load scripts into pages packaged with your extension, but you can't load scripts into privileged browser pages like "about:debugging" or "about:addons".</p>

<h2 id="Content_script_environment">Content script environment</h2>

<h3 id="DOM_access">DOM access</h3>

<p>Content scripts can access and modify the page's DOM, just like normal page scripts can. They can also see any changes that were made to the DOM by page scripts.</p>

<p>However, content scripts get a "clean view of the DOM". This means:</p>

<ul>
 <li>content scripts cannot see JavaScript variables defined by page scripts</li>
 <li>if a page script redefines a built-in DOM property, the content script will see the original version of the property, not the redefined version.</li>
</ul>

<p>In Gecko, this behavior is called <a href="/en-US/docs/Xray_vision">Xray vision</a>.</p>

<p>For example, consider a web page like this:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta http-equiv="content-type" content="text/html; charset=utf-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;script src="page-scripts/page-script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>The script "page-script.js" does this:</p>

<pre class="brush: js">// page-script.js

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
}</pre>

<p>Now an extension injects a content script into the page:</p>

<pre class="brush: js">// content-script.js

// can access and modify the DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see page-script-added properties
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()</pre>

<p>The same is true in reverse: page scripts can't see JavaScript properties added by content scripts.</p>

<p>All this means that the content script can rely on DOM properties behaving predictably, and doesn't have to worry about variables it defines clashing with variables defined in the page script.</p>

<p>One practical consequence of this behavior is that a content script won't have access to any JavaScript libraries loaded by the page. So for example, if the page includes jQuery, the content script won't be able to see it.</p>

<p>If a content script does want to use a JavaScript library, then the library itself should be injected as a content script alongside the content script that wants to use it:</p>

<pre class="brush: json">"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]</pre>

<p>Note that Firefox provides some APIs that enable content scripts to access JavaScript objects created by page scripts and to expose their own JavaScript objects to page scripts. See <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts">Sharing objects with page scripts</a> for more details.</p>

<h3 id="WebExtension_APIs">WebExtension APIs</h3>

<p>In addition to the standard DOM APIs, content scripts can use the following WebExtension APIs:</p>

<p>From <code><a href="/en-US/Add-ons/WebExtensions/API/extension">extension</a></code>:</p>

<ul>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/extension#getURL()">getURL()</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/extension#inIncognitoContext">inIncognitoContext</a></code></li>
</ul>

<p>From <code><a href="/en-US/Add-ons/WebExtensions/API/runtime">runtime</a></code>:</p>

<ul>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#connect()">connect()</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#getManifest()">getManifest()</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#getURL()">getURL()</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#onConnect">onConnect</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#onMessage">onMessage</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#sendMessage()">sendMessage()</a></code></li>
</ul>

<p>From <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n">i18n</a></code>:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage">getMessage()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages">getAcceptLanguages()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage">getUILanguage()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage">detectLanguage()</a></code></li>
</ul>

<p>From <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus">menus</a></code>:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement">getTargetElement</a></code></li>
</ul>

<p>Everything from <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code>.</p>

<h3 id="XHR_and_Fetch">XHR and Fetch</h3>

<p>Content scripts can make requests using the normal <code><a href="/en-US/docs/Web/API/XMLHttpRequest">window.XMLHttpRequest</a></code> and <code><a href="/en-US/docs/Web/API/Fetch_API">window.fetch()</a></code> APIs.</p>

<p>Content scripts get the same cross-domain privileges as the rest of the extension: so if the extension has requested cross-domain access for a domain using the <code><a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> key in manifest.json, then its content scripts get access that domain as well.</p>

<p>This is accomplished by exposing more privileged XHR and fetch instances in the content script, which has the side-effect of not setting the <code><a href="/en-US/docs/Web/HTTP/Headers/Origin">Origin</a></code> and <code><a href="/en-US/docs/Web/HTTP/Headers/Referer">Referer</a></code> headers like a request from the page itself would, this is often preferable to prevent the request from revealing its cross-orign nature. From version 58 onwards extensions that need to perform requests that behave as if they were sent by the content itself can use  <code>content.XMLHttpRequest</code> and <code>content.fetch()</code> instead. For cross-browser extensions their presence must be feature-detected.</p>

<h2 id="Communicating_with_background_scripts">Communicating with background scripts</h2>

<p>Although content scripts can't directly use most of the WebExtension APIs, they can communicate with the extension's background scripts using the messaging APIs, and can therefore indirectly access all the same APIs that the background scripts can.</p>

<p>There are two basic patterns for communicating between the background scripts and content scripts: you can send one-off messages, with an optional response, or you can set up a longer-lived connection between the two sides, and use that connection to exchange messages.</p>

<h3 id="One-off_messages">One-off messages</h3>

<p>To send one-off messages, with an optional response, you can use the following APIs:</p>

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="row"> </th>
   <th scope="col">In content script</th>
   <th scope="col">In background script</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Send a message</th>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime/sendMessage">browser.runtime.sendMessage()</a></code></td>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage">browser.tabs.sendMessage()</a></code></td>
  </tr>
  <tr>
   <th scope="row">Receive a message</th>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code></td>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code></td>
  </tr>
 </tbody>
</table>

<p>For example, here's a content script which listens for click events in the web page. If the click was on a link, it messages the background page with the target URL:</p>

<pre class="brush: js">// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}</pre>

<p>The background script listens for these messages and displays a notification using the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications">notifications</a></code> API:</p>

<pre class="brush: js">// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "You clicked a link!",
    "message": message.url
  });
}
</pre>

<p>This example code is lightly adapted from the <a href="https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n">notify-link-clicks-i18n</a> example on GitHub.</p>

<h3 id="Connection-based_messaging">Connection-based messaging</h3>

<p>Sending one-off messages can get cumbersome if you are exchanging a lot of messages between a background script and a content script. So an alternative pattern is to establish a longer-lived connection between the two contexts, and use this connection to exchange messages.</p>

<p>Each side has a <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> object, which they can use to exchange messages.</p>

<p>To create the connection:</p>

<ul>
 <li>one side listens for connections using <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect">runtime.onConnect</a></code></li>
 <li>the other side calls either <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect">tabs.connect()</a></code> (if connecting to a content script) or <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect">runtime.connect()</a></code> (if connecting to a background script). This returns a <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> object.</li>
 <li>the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect">runtime.onConnect</a></code> listener gets passed its own <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> object.</li>
</ul>

<p>Once each side has a port, the two sides can exchange messages using <code>runtime.Port.postMessage()</code> to send a message, and <code>runtime.Port.onMessage</code> to receive messages.</p>

<p>For example, as soon as it loads, this content script:</p>

<ul>
 <li>connects to the background script, and stores the <code>Port</code> in a variable <code>myPort</code></li>
 <li>listens for messages on <code>myPort</code>, and logs them</li>
 <li>sends messages to the background script, using <code>myPort</code>, when the user clicks the document</li>
</ul>

<pre class="brush: js">// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});</pre>

<p>The corresponding background script:</p>

<ul>
 <li>listens for connection attempts from the content script</li>
 <li>when it receives a connection attempt:
  <ul>
   <li>stores the port in a variable named <code>portFromCS</code></li>
   <li>sends the content script a message using the port</li>
   <li>starts listening to messages received on the port, and logs them</li>
  </ul>
 </li>
 <li>sends messages to the content script, using <code>portFromCS</code>, when the user clicks the extension's browser action</li>
</ul>

<pre class="brush: js">// background-script.js

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
</pre>

<h4 id="Multiple_content_scripts">Multiple content scripts</h4>

<p>If you have multiple content scripts communicating at the same time, you might want to store each connection in an array.</p>

<p> </p>

<ul>
</ul>

<pre class="brush: js">// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p =&gt; {
        p.postMessage({greeting: "they clicked the button!"})
    })
});</pre>

<p> </p>

<ul>
</ul>

<h2 id="Communicating_with_the_web_page">Communicating with the web page</h2>

<p>Although content scripts don't by default get access to objects created by page scripts, they can communicate with page scripts using the DOM <code><a href="/en-US/docs/Web/API/Window/postMessage">window.postMessage</a></code> and <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">window.addEventListener</a></code> APIs.</p>

<p>콘텐트 스크립트는 기본적으로 페이지 스크립트가 만든 객체에 접근할 수 없지만, DOM의 <code><a href="/en-US/docs/Web/API/Window/postMessage">window.postMessage</a></code>와 <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">window.addEventListener</a></code> API로 페이지 스크립트와 소통할 수 있다.</p>

<p>For example:</p>

<p>예를 들어:</p>

<pre class="brush: js">// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");</pre>

<pre class="brush: js">// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &amp;&amp;
      event.data &amp;&amp;
      event.data.direction == "from-page-script") {
    alert("Content script received message: \"" + event.data.message + "\"");
  }
});</pre>

<p>For a complete working example of this, <a href="https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html">visit the demo page on GitHub</a> and follow the instructions.</p>

<p>이에 대한 완전한 예제를 보려면 <a href="https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html">GitHub의 데모페이지</a>를 방문하여 지침을 따르십시오.</p>

<div class="warning">
<p>Note that any time you interact with untrusted web content on this way, you need to be very careful. Extensions are privileged code which can have powerful capabilities, and hostile web pages can easily trick them into accessing those capabilities.</p>

<p>이런 방식으로 신뢰할 수 없는 웹 콘텐트와 상호 작용할 때마다 매우 조심해야한다. 확장 기능은 강력한 기능을 제공 할 수 있는 권한있는 코드이며 적대적인 웹 페이지는 이러한 기능에 접근하는 부분을 쉽게 속일 수 있다.</p>

<p>To make a trivial example, suppose the content script code that receives the message does something like this:</p>

<p>간단한 예제로, 콘텐트 스크립트가 아래처럼 동작하는 메시지를 받는다고 한다면:</p>

<pre class="brush: js">// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &amp;&amp;
      event.data.direction &amp;&amp;
      event.data.direction == "from-page-script") {
    eval(event.data.message);
  }
});</pre>

<p>Now the page script can run any code with all the privileges of the content script.</p>

<p>이제 페이지 스크립트는 콘텐트 스크립트의 권한으로 어떤 코드라도 실행할 수 있게 된다.</p>
</div>

<h2 id="Using_eval_in_content_scripts">Using eval() in content scripts</h2>

<p>In Chrome, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code> always runs code in the context of the content script, not in the context of the page.</p>

<p>크롬에서, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>은 항상 콘텐트 스크립트의 컨텍스트에서 코드를 실행한다. 페이지의 컨텍스트에서 하지 않는다.</p>

<p>In Firefox:</p>

<ul>
 <li>if you call <code>eval()</code>, it runs code in the context of the content script</li>
 <li>if you call <code>window.eval()</code>, it runs code in the context of the page.</li>
</ul>

<p>파이어폭스에서:</p>

<ul>
 <li><code>eval()</code>을 호출하면, 콘텐트 스크립트의 컨텍스트에서 코드를 실행한다.</li>
 <li><code>window.eval()</code>을 호출하면, 페이지의 컨텍스트에서 코드를 실행한다.</li>
</ul>

<p>For example, consider a content script like this:</p>

<p>예를 들어, 콘텐트 스크립트가 아래 같다고 한다면:</p>

<pre class="brush: js">// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");</pre>

<p>This code just creates some variables x and y using <code>window.eval()</code> and <code>eval()</code>, then logs their values, then messages the page.</p>

<p>이 코드는 <code>window.eval()</code> 및 <code>eval()</code>을 사용하여 변수 x 및 y를 만든 다음 값의 로그를 남기고, 페이지에 메시지를 보낸다.</p>

<p>On receiving the message, the page script logs the same variables:</p>

<p>그 메세지를 받으면, 페이지 스크립트는 같은 변수들을 로그에 남긴다:</p>

<pre class="brush: js">window.addEventListener("message", function(event) {
  if (event.source === window &amp;&amp; event.data &amp;&amp; event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});</pre>

<p>In Chrome, this will produce output like this:</p>

<p>크롬에서, 이것은 아래처럼 출력될 것이다:</p>

<pre>In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined</pre>

<p>In Firefox the following output is produced:</p>

<p>파이어폭스에서는 아래의 출력이 만들어진다:</p>

<pre>In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined</pre>

<p>The same applies to <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout()</a></code>, <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval">setInterval()</a></code>, and <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>.</p>

<p>같은 것이 <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout()</a></code>, <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval">setInterval()</a></code>, 그리고 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>에 적용된다.</p>

<p>When running code in the context of the page, be very careful. The page's environment is controlled by potentially malicious web pages, which can redefine objects you interact with to behave in unexpected ways:</p>

<p>페이지 컨텍스트에서 코드를 실행할 때는 매우 주의해야 한다. 페이지의 환경은 잠재적으로 악의적인 웹 페이지에 의해 제어되며, 상호 작용하는 객체가 예기치 않은 방식으로 재정의될 수 있다.</p>

<pre class="brush: js">// page.js redefines console.log

var original = console.log;

console.log = function() {
  original(true);
}
</pre>

<pre class="brush: js">// content-script.js calls the redefined version

window.eval('console.log(false)');
</pre>
