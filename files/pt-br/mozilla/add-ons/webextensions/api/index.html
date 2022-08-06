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
<p>JavaScript APIs for WebExtensions can be used inside the extension's <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">background scripts</a> and in any other documents bundled with the extension, including <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_action">browser action</a> or <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Page_actions">page action</a> popups, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Sidebars">sidebars</a>, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Options_pages">options pages</a>, or <a href="/en-US/Add-ons/WebExtensions/manifest.json/chrome_url_overrides">new tab pages</a>. A few of these APIs can also be accessed by an extension's <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts">content scripts</a> (see the <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">list in the content script guide</a>).</p>

<p>To use the more powerful APIs you need to <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions">request permission</a> in your extension's manifest.json.</p>

<p>You can access the APIs using the <code>browser</code> namespace:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logTabs</span><span class="punctuation token">(</span>tabs<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>tabs<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

browser<span class="punctuation token">.</span>tabs<span class="punctuation token">.</span><span class="function token">query</span><span class="punctuation token">(</span><span class="punctuation token">{</span>currentWindow<span class="punctuation token">:</span> <span class="keyword token">true</span><span class="punctuation token">}</span><span class="punctuation token">,</span> logTabs<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>
</div>

<div>
<p>Many of the APIs are asynchronous, returning a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logCookie</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">logError</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">error</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> setCookie <span class="operator token">=</span> browser<span class="punctuation token">.</span>cookies<span class="punctuation token">.</span><span class="keyword token">set</span><span class="punctuation token">(</span>
  <span class="punctuation token">{</span>url<span class="punctuation token">:</span> <span class="string token">"https://developer.mozilla.org/"</span><span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span>
setCookie<span class="punctuation token">.</span><span class="function token">then</span><span class="punctuation token">(</span>logCookie<span class="punctuation token">,</span> logError<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>
</div>

<div>
<p>Note that this is different from Google Chrome's extension system, which uses the <code>chrome</code> namespace instead of <code>browser</code>, and which uses callbacks instead of promises for asynchronous functions. As a porting aid, the Firefox implementation of WebExtensions APIs supports <code>chrome</code> and callbacks as well as <code>browser</code> and promises. Mozilla has also written a polyfill which enables code that uses <code>browser</code> and promises to work unchanged in Chrome: <a class="external external-icon" href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<p>Firefox also implements these APIs under the <code>chrome</code> namespace using callbacks. This allows code written for Chrome to run largely unchanged in Firefox for the APIs documented here.</p>

<p>Microsoft Edge uses the <code>browser</code> namespace, but doesn't yet support promise-based asynchronous APIs. In Edge, for the time being, asynchronous APIs must use callbacks.</p>

<p>Not all browsers support all the APIs: for the details, see <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser support for JavaScript APIs</a>.</p>
</div>

<div>{{SubpagesWithSummaries}}</div>
