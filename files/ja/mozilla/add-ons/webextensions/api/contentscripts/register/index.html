---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
tags:
  - API
  - Extensions
  - Method
  - Reference
  - contentScripts
  - register
translation_of: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
---
<div>{{AddonSidebar()}}</div>

<p>このメソッドは一つ以上の content scripts を登録するときに使用します。</p>

<p>manifest.json内の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> に似た一つのオブジェクトを引数に持ちます。<code>content_scripts</code> では配列ですが、この <code>register()</code> ではオブジェクトを引数に持ちます。</p>

<p>これは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> を返す非同期関数です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox brush:js">var registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>contentScriptOptions</code></dt>
 <dd>
 <p><code>object</code> です。<code>RegisteredContentScriptOptions</code> オブジェクトは登録するコンテントスクリプトを表します。<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> と似た構文のオブジェクトで、その違いは以下の通りです。</p>

 <ul>
  <li>プロパティ名にはスネーク形式ではなくキャメル形式を使用します (例えば、<code>excludeMatches</code>を使用します。<code>exclude_matches</code> ではありません)</li>
  <li><code>js</code> プロパティと <code>css</code> プロパティには、相対パスのほかに文字列も指定できます。このため、登録したいものがどちらであるのかを明確にできる構文になっています。</li>
 </ul>

 <p><code>RegisteredContentScriptOptions</code> は次のプロパティを持ちます:</p>

 <dl class="reference-values">
  <dt><code>allFrames</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>all_frames</code> と同様です。</dd>
  <dt><code>css</code>{{optional_inline}}</dt>
  <dd>オブジェクトの配列。 それぞれのオブジェクトは <code>file</code> という名前の manifest.json からの相対パスで登録したい CSS ファイルを指定した URL の文字列を持つプロパティか、<code>code</code> という名前の登録したい CSS の文字列を持つプロパティを含みます。</dd>
  <dt><code>excludeGlobs</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>exclude_globs</code> と同様です。</dd>
  <dt><code>excludeMatches</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>exclude_matches</code> と同様です。</dd>
  <dt><code>includeGlobs</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>include_globs</code> と同様です。</dd>
  <dt><code>js</code>{{optional_inline}}</dt>
  <dd>オブジェクトの配列。各オブジェクトは <code>file</code> または <code>code</code> プロパティを含み、その要素は css プロパティと同様です。</dd>
  <dt><code>matchAboutBlank</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>match_about_blank</code> と同様です。</dd>
  <dt><code>matches</code></dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>matches</code> と同様です。</dd>
  <dt><code>runAt</code>{{optional_inline}}</dt>
  <dd><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> における <code>run_at</code> と同様です。</dd>
 </dl>
 </dd>
</dl>

<h3 id="Examples" name="Examples">返り値</h3>

<p>登録したコンテントスクリプトを削除することができる {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} オブジェクトを引数に持つ <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> を返します。</p>

<p><br>
 <span class="message"><span class="content">現在、登録したコンテントスクリプトは、これを登録した拡張機能ページをアンロードしたときに削除されます。</span></span>したがって、コンテントスクリプトを登録する際は、少なくとも登録されたままであってほしいだけ存在する拡張機能ページから登録すべきです。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.contentScripts.register", 10)}}</p>

<h2 id="Examples" name="Examples">例</h2>

<p><code>defaultCode</code> コンテントスクリプトを、すべての <code>.org</code> URL に対して登録します。</p>

<pre class="brush: js">const defaultHosts = "*://*.org/*";
const defaultCode = "document.body.innerHTML = '&lt;h1&gt;このページは書き換えられました&lt;h1&gt;'";

async function register(hosts, code) {

  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{code}],
    runAt: "document_idle"
  });

}

var registered = register(defaultHosts, defaultCode);</pre>

<p>次のコードは content_scripts/example.js にある JavaScript ファイルを登録します。</p>

<pre class="brush: js" id="ct-3">const scriptObj = await browser.contentScripts.register({
  "js": [{file: "/content_scripts/example.js"}],
  "matches": ["&lt;all_urls&gt;"],
  "allFrames": true,
  "runAt": "document_start"
});
</pre>

<p>{{WebExtExamples}}</p>
