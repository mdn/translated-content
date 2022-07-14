---
title: 何謂附加元件？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---
<div>{{AddonSidebar}}</div>

<div> </div>

<p>附加元件（Add-ons）擴展並修改了瀏覽器的功能。他們使用標準的網路技術──JavaScript、HTML、以及 CSS、還有一些專用的 JavaScript API──寫成。除此之外，附加元件可以給瀏覽器添加新功能、或是改變特定網站的外觀或內容。</p>

<p>Firefox的附加元件開發基於能跨瀏覽器的 WebExtensions APIs ，在很大的程度上相容於和 Google Chrome 與 Opera 瀏覽器所支持的 <a href="https://developer.chrome.com/extensions">extension API</a>  。大多數情況下，針對這些瀏覽器所撰寫的 Extension <a href="/zh-TW/Add-ons/WebExtensions/Porting_from_Google_Chrome">只要些許修改</a>就能在 Firefox 或是 Microsoft Edge 執行，也與 <a href="/zh-TW/Firefox/Multiprocess_Firefox">multiprocess Firefox</a> 完全相容。</p>

<p>在過去，你可以使用三種系統開發 Firefox 附加元件： <a href="/zh-TW/Add-ons/Overlay_Extensions">XUL/XPCOM overlays</a>、<a href="/zh-TW/docs/Mozilla/Add-ons/Bootstrapped_extensions">bootstrapped extensions</a>、或是 <a href="/zh-TW/docs/Mozilla/Add-ons/SDK">Add-on SDK</a>。但2017年11月底之後，WebExtensions 將成為唯一開發 Firefox 附加元件的方式，而其他方式會被廢棄。</p>

<p>如果你有任何想法或問題，甚至是需要協助轉換舊附加元件到新系統，你可以在 <a href="https://mail.mozilla.org/listinfo/dev-addons">dev-addons mailing list</a> 或 <a href="https://wiki.mozilla.org/IRC">IRC</a> 的 <a href="irc://irc.mozilla.org/webextensions">#webextensions</a> 找到我們。</p>

<p> </p>

<h2 id="接下來呢？">接下來呢？</h2>

<ul>
 <li>一些附加元件的範例，請參看 <a href="https://github.com/mdn/webextensions-examples">Example WebExtensions</a>。</li>
 <li>學習附加元件的結構，請參看 <a href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">解析 WebExtension</a>.</li>
 <li>一個簡單的附加元件開發流程，請參看 <a href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">你的第一個 WebExtension</a>。</li>
</ul>
