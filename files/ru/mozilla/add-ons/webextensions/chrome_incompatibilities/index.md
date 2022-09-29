---
title: Chrome incompatibilities
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
translation_of: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---
<div>{{AddonSidebar}}</div>

<p>Веб расширения разработаны с поддержкой совместимости с расширениями Chrome и Оперы на сколько это возможно. Расширения, написанные для этих браузеров, должны работать в Firefox с минимальными изменениями.</p>

<p>Всё же, Firefox на данный момент имеет поддержку только для ограниченного набора функций и API, поддержуемых в Chrome и Опере. Мы работаем над добавлением большей поддержки, но много функций пока ещё не поддерживаются и некоторые из них никогда не будут поддерживаться.</p>

<p>Эта статья перечисляет все функции и API, которые полностью поддерживаются в Firefox Developer Edition (на данный момент Firefox 47). Там где функция поддерживается частично, мы указали на проблемные места.</p>

<div class="note">
<p>You should assume that features and APIs not listed here at all are not yet supported.</p>
</div>

<h2 id="manifest.json_функция">manifest.json функция</h2>

<h3 id="Полностью_поддерживаемые_ключи">Полностью поддерживаемые ключи:</h3>

<ul>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/applications">applications</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/default_locale">default_locale</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/description">description</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/icons">icons</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/name">name</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/version">version</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code></li>
</ul>

<h3 id="Частично_поддерживаемые_ключи">Частично поддерживаемые ключи:</h3>

<h4 id="background">background</h4>

<p>Firefox не поддерживает <code>"устойчивое"</code> свойство. Фоновые скрипты остаются загруженными всё время.</p>

<h4 id="commands">commands</h4>

<p>Firefox не поддерживает:</p>

<ul>
 <li>Media keys как сокращение</li>
 <li><code>global</code></li>
 <li>специальную команду <code>_execute_browser_action</code></li>
</ul>

<h4 id="content_scripts">content_scripts</h4>

<p>Firefox не поддерживает:</p>

<ul>
 <li><code>match_about_blank</code></li>
</ul>

<h4 id="content_security_policy">content_security_policy</h4>

<p>Firefox не поддерживает:</p>

<ul>
 <li>"http://127.0.0.1" or "http://localhost" as script sources: they must be served over HTTPS.</li>
</ul>

<h4 id="options_ui">options_ui</h4>

<p>Firefox не поддерживает:</p>

<ul>
 <li><code>chrome_style</code></li>
</ul>

<p>Using <code>options_ui</code> requires a valid value for the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications.gecko.id</a> property.</p>

<h4 id="permissions">permissions</h4>

<p>Firefox не поддерживает следующие разрешения:</p>

<ul>
 <li><code>background</code></li>
 <li><code>clipboardRead</code></li>
 <li><code>clipboardWrite</code></li>
 <li><code>geolocation</code></li>
 <li><code>unlimitedStorage</code></li>
</ul>

<p>Obviously, it doesn't support permissions for APIs that are themselves not supported.</p>

<h4 id="incognito">incognito</h4>

<p>Firefox does not support the following incognito (private browsing) modes:</p>

<ul>
 <li><code>split</code></li>
</ul>

<h2 id="JavaScript_APIs">JavaScript APIs</h2>

<h3 id="Fully_supported_APIs">Fully supported APIs</h3>

<ul>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms">alarms</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a>
  <ul>
   <li>Relative URLs passed to <code>setPopup()</code> are resolved relative to the caller document, rather than to the extension root</li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/commands">commands</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus">contextMenus</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies">cookies</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n">i18n</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a>
  <ul>
   <li>Relative URLs passed to <code>setPopup()</code> are resolved relative to the caller document, rather than to the extension root</li>
  </ul>
 </li>
</ul>

<h3 id="Partially_supported_APIs">Partially supported APIs</h3>

<h4 id="bookmarks">bookmarks</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>import()</code></li>
   <li><code>export()</code></li>
   <li><code>onCreated</code></li>
   <li><code>onRemoved</code></li>
   <li><code>onChanged</code></li>
   <li><code>onMoved</code></li>
   <li><code>onChildrenReordered</code></li>
   <li><code>onImportBegan</code></li>
   <li><code>onImportEnded</code></li>
   <li><code>BookmarkTreeNodeUnmodifiable</code></li>
  </ul>
 </li>
 <li>Firefox has special bookmarks like "Recently Bookmarked" or "Recently Visited"</li>
</ul>

<h4 id="contextMenus">contextMenus</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li>the "browser_action" or "page_action" context types</li>
  </ul>
 </li>
</ul>

<h4 id="downloads">downloads</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>drag()</code></li>
   <li><code>acceptDanger()</code></li>
   <li><code>setShelfEnabled()</code></li>
   <li><code>onDeterminingFilename</code></li>
  </ul>
 </li>
 <li>The <code>saveAs</code> option and values other than <code>"GET"</code> for the <code>method</code> option are not supported by <code>download()</code></li>
</ul>

<h4 id="extension">extension</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>setUpdateUrlData()</code></li>
  </ul>
 </li>
 <li>Additionally, the following deprecated properties will not be supported:
  <ul>
   <li><code>onRequest</code></li>
   <li><code>onRequestExternal</code></li>
   <li><code>getExtensionTabs()</code></li>
   <li><code>sendRequest()</code></li>
  </ul>
 </li>
</ul>

<h4 id="idle">idle</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>onStateChanged</code></li>
   <li><code>setDetectionInterval()</code></li>
  </ul>
 </li>
</ul>

<p>Additoinally, <code>queryState()</code> always returns <code>"active"</code> in Firefox, regardless of the current system idle state.</p>

<h4 id="notifications">notifications</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>update()</code></li>
  </ul>
 </li>
 <li>Firefox doesn't provide <code>byUser</code> data.</li>
</ul>

<h4 id="runtime">runtime</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>getPackageDirectoryEntry()</code></li>
   <li><code>reload()</code></li>
   <li><code>requestUpdateCheck()</code></li>
   <li><code>restart()</code></li>
   <li><code>sendNativeMessage()</code></li>
   <li><code>onBrowserUpdateAvailable</code></li>
   <li><code>onConnectExternal</code></li>
   <li><code>onInstalled</code></li>
   <li><code>onMessageExternal</code></li>
   <li><code>onRestartRequired</code></li>
   <li><code>onStartup</code></li>
   <li><code>onSuspend</code></li>
   <li><code>onSuspendCanceled</code></li>
   <li><code>onUpdateAvailable</code></li>
  </ul>
 </li>
</ul>

<h4 id="storage">storage</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>managed</code> storage area</li>
   <li><code>sync</code> storage area</li>
   <li><code>getBytesInUse()</code>.</li>
  </ul>
 </li>
</ul>

<h4 id="tabs">tabs</h4>

<ul>
 <li>Firefox treats <code>highlighted</code> and <code>active</code> as the same, since Firefox has no concept of selecting multiple tabs.</li>
 <li>In Firefox, you need the <code>tabs</code> <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> if you want to include <code>url</code> in the <code>queryInfo</code> parameter to <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">tabs.query()</a></code>.</li>
 <li>
  <p>In Firefox, relative URLs passed into <code>tabs.executeScript()</code> or <code>tabs.insertCSS()</code> are resolved relative to the current page URL. In Chrome, these URLs are resolved relative to the add-on's base URL. To work cross-browser, you can specify the path as an absolute URL, starting at the add-on's root, like this:</p>

  <pre class="line-numbers  language-html"><code class="language-html">/path/to/script.js</code></pre>
 </li>
 <li>In Firefox, you can't open (using {{WebExtAPIRef("tabs.create")}}), or navigate to (using {{WebExtAPIRef("tabs.update")}}) privileged URLs:
  <ul>
   <li>chrome: URLs</li>
   <li>javascript: URLs</li>
   <li>data: URLs</li>
   <li>privileged about: URLs (for example, about:config, about:addons, about:debugging)</li>
  </ul>
 </li>
 <li>Additionally, the following deprecated properties will not be supported:
  <ul>
   <li><code>sendRequest()</code></li>
   <li><code>getSelected()</code></li>
   <li><code>onActiveChanged</code></li>
   <li><code>onHighlightChanged</code></li>
   <li><code>onSelectionChanged</code></li>
  </ul>
 </li>
</ul>

<h4 id="webNavigation">webNavigation</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>onCreatedNavigationTarget</code></li>
   <li><code>onTabReplaced</code></li>
  </ul>
 </li>
</ul>

<h4 id="webRequest">webRequest</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>onAuthRequired</code></li>
   <li>filtering by <code>windowId</code> and <code>tabId</code></li>
   <li>the <code>"requestBody"</code> instruction in <code>opt_extraInfoSpec</code></li>
  </ul>
 </li>
 <li>In Firefox requests can be redirected only if their original URL uses the http or https scheme</li>
</ul>

<h4 id="windows">windows</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li>the <code>focused </code>option in <code>create()</code></li>
  </ul>
 </li>
 <li>In Firefox <code>onFocusChanged</code> will trigger multiple times for a given focus change.</li>
</ul>

<h3 id="Planned_APIs">Planned APIs</h3>

<p>We don't support the following APIs, but plan to, soon:</p>

<ul>
 <li><a class="external text" href="https://developer.chrome.com/extensions/devtools" rel="nofollow">Devtools (mostly panels)</a></li>
 <li><a href="https://developer.chrome.com/extensions/debugger">debugger</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/omnibox" rel="nofollow">omnibox</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/permissions" rel="nofollow">permissions</a></li>
</ul>

<p>This doesn't mean that these are the only additional APIs we will support, but that they are our current priorities.</p>

<h3 id="Miscellaneous_incompatibilities">Miscellaneous incompatibilities</h3>

<h4 id="Optional_arguments">Optional arguments</h4>

<h4 id="URLs_in_CSS">URLs in CSS</h4>

<p>Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.</p>

<h4 id="Additional_incompatibilities">Additional incompatibilities</h4>

<p>Firefox does not support using <a href="/en-US/docs/Web/API/Window/alert">alert()</a> from background pages. Using <code>alert(message)</code> from a background page will cause the <a href="/en-US/docs/Tools/Browser_Console">Browser Console</a> to be opened and both a line stating "alert() is not supported in background windows; please use console.log instead." and the <code>message</code> will be output to the console.</p>
