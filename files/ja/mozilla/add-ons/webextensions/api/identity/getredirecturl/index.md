---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
tags:
  - API
  - Add-ons
  - Extensions
  - Identity
  - Method
  - Reference
  - WebExtensions
  - getRedirectURL
translation_of: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
---
<div>{{AddonSidebar()}}</div>

<p>リダイレクト URL として利用可能な URL を生成します。</p>

<p>この URL は、アドオン ID から生成されるため、使用したい場合、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings">browser_specific_settings</a></code> キーを使用してアドオン ID を明示的に設定する必要があるでしょう (設定しない場合、アドオンを<a href="/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">一時的にインストール</a>するたびに、異なるリダイレクト URL を取得することになります)。</p>

<p>リダイレクトURL については、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity#Getting_the_redirect_URL">リダイレクトURL を取得する</a>を参照してください。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox brush:js">var redirectURL = browser.identity.getRedirectURL()
</pre>

<h3 id="引数">引数</h3>

<p>なし</p>

<h3 id="返り値">返り値</h3>

<p>リダイレクト URL を含む文字列</p>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("webextensions.api.identity.getRedirectURL")}}</p>

<h2 id="例">例</h2>

<p>リダイレクト URL を取得する:</p>

<pre class="brush: js">var redirectURL = browser.identity.getRedirectURL();</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/identity"><code>chrome.identity</code></a> API に基づいています。</p>

<p>Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います</p>
</div>
