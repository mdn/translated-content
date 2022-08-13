---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
tags:
  - Add-ons
  - WebExtensions
  - incognito
  - manifest.json
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
---
<div>{{AddonSidebar}}</div>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json no-line-numbers">
"incognito": "spanning"</pre>

    <pre class="brush: json no-line-numbers">
"incognito": "split"</pre>

    <pre class="brush: json no-line-numbers">
"incognito": "not_allowed"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p><code>incognito</code> キーを使ってプライベートブラウジングウィンドウで機能拡張が動作する方法を管理できます。</p>

<p>This is a string which may take any of the following values:</p>

<ul>
 <li>
  <p>"spanning" (the default): the extension will see events from private and non-private windows and tabs. Windows and tabs will get an <code>incognito</code> property in the <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window">Window</a></code> or <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab">Tab</a></code> that represents them. This property indicates whether or not the object is private:</p>

  <pre class="brush: js">browser.windows.getLastFocused().then((windowInfo) =&gt; {
  console.log(`Window is private: ${windowInfo.incognito}`);
});</pre>
 </li>
 <li>"split": the extension will be split between private and non-private windows. There are effectively two copies of the extension running: one sees only non-private windows, the other sees only private windows. Each copy has isolated access to Web APIs (so, for example, <code><a href="/ja/docs/Web/API/Storage/LocalStorage">localStorage</a></code> is not shared). However, the WebExtension API <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local">storage.local</a></code> is shared.</li>
 <li>"not_allowed": private tabs and windows are invisible to the extension.</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: json no-line-numbers">"incognito": "spanning"
</pre>

<pre class="brush: json no-line-numbers">"incognito": "split"
</pre>

<pre class="brush: json no-line-numbers">"incognito": "not_allowed"
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.incognito")}}</p>
