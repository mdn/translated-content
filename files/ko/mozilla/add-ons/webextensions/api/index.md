---
title: JavaScript APIs
slug: Mozilla/Add-ons/WebExtensions/API
tags:
  - NeedsTranslation
  - TopicStub
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API
---
<div>{{AddonSidebar}}</div>

<div>
<p>The WebExtension JavaScript APIs can be used inside the add-on's <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">background scripts</a> and in any other documents bundled with the add-on, including  <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_action">browser action</a> or <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Page_actions">page action</a> popups, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Sidebars">sidebars</a>, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Options_pages">options pages</a>, or <a href="/en-US/Add-ons/WebExtensions/manifest.json/chrome_url_overrides">new tab pages</a>. A few of these APIs can also be accessed by an add-on's <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts">content scripts</a> (see the <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">list in the content script guide</a>).</p>

<p>To use the more powerful APIs you need to <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions">request permission</a> in your add-on's manifest.json.</p>

<p>You can access the APIs using the <code>browser</code> namespace:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({currentWindow: true}, logTabs);</code></pre>
</div>

<div>
<p>Many of the APIs are asynchronous, returning a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError);</code></pre>
</div>

<div>
<p>Note that this is different from Google Chrome's extension system, which uses the <code>chrome</code> namespace instead of <code>browser</code>, and which uses callbacks instead of promises for asynchronous functions. As a porting aid, the Firefox implementation of WebExtensions supports <code>chrome</code> and callbacks as well as <code>browser</code> and promises. Mozilla has also written a polyfill which enables code that uses <code>browser</code> and promises to work unchanged in Chrome: <a class="external external-icon" href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<p>Microsoft Edge uses the <code>browser</code> namespace, but doesn't yet support promise-based asynchronous APIs. In Edge, for the time being, asynchronous APIs must use callbacks.</p>

<p>Not all browsers support all the APIs: for the details, see <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser support for JavaScript APIs</a>.</p>
</div>

<div>{{SubpagesWithSummaries}}</div>
