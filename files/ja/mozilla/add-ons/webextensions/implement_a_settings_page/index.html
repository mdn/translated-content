---
title: 設定ページを実装する
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---
<div>{{AddonSidebar}}</div>

<p>設定ページは、ユーザーに拡張機能の設定を確認して変える方法を与えます(「プリファレンス」や「オプション」とも呼ばれます)。</p>

<p>WebExtension API では一般に、設定は <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code> API で保存されます。設定ページの実装は次の 3 ステップの手順です:</p>

<ul>
 <li>設定を表示して、ユーザーがそれを変更できる HTML を書く。</li>
 <li>HTML からインクルードされる、ストレージから設定ページに投入し、ユーザーが変更した時に保存された設定を更新するスクリプトを書く。</li>
 <li>HTML ファイルのパスを manifest.json の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> キーに設定する。これにより、HTML 文書が、拡張機能の名前や説明と共に、文書ブラウザーのアドオンマネージャーに表示される。</li>
</ul>

<div class="note">
<p><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code> 関数を使ってプログラム的に開くこともできます。</p>
</div>

<h2 id="A_simple_extension" name="A_simple_extension">簡単な拡張機能</h2>

<p>まずは、ユーザーが訪問するページに青い枠をつける拡張機能を書きます。</p>

<p>"settings" というディレクトリーを作り、そこに "manifest.json" という名前のファイルを作って下記の中身を入れます:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<p>この拡張機能はブラウザーに対し、"borderify.js" というコンテンツスクリプトを、ユーザーが訪問するすべてのウェブページで読み込むよう指示します。</p>

<p>次に、"settings" ディレクトリー内に "borderify.js" というファイルを作り、次の中身を入れます:</p>

<pre class="brush: js">document.body.style.border = "10px solid blue";</pre>

<p>これは単にページに青い枠をつけます。</p>

<p><a href="/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">この拡張機能をインストール</a>してテストします — お好みのあらゆるウェブページを開きます:</p>

<p>{{EmbedYouTube("E-WUhihF8fw")}}</p>

<h2 id="Adding_settings" name="Adding_settings">設定を追加する</h2>

<p>今度は枠の色をユーザーが設定できるような設定ページを作りましょう。</p>

<p>まずは "manifest.json" を次の中身に更新します:</p>

<pre class="brush: json line-numbers language-json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  <code class="language-json"><span class="property token">"permissions"</span><span class="operator token">:</span> <span class="punctuation token">[</span><span class="string token">"storage"</span><span class="punctuation token">]</span><span class="punctuation token">,</span>

  <span class="property token">"applications"</span><span class="operator token">:</span> <span class="punctuation token">{</span>
    <span class="property token">"gecko"</span><span class="operator token">:</span> <span class="punctuation token">{</span>
      <span class="property token">"id"</span><span class="operator token">:</span> <span class="string token">"addon@example.com"</span>
    <span class="punctuation token">}</span>
  <span class="punctuation token">}</span>

<span class="punctuation token">}</span></code></pre>

<p>新しく次の 3 つのキーを追加しました:</p>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code>: これは HTML 文書に、この拡張機能の設定ページ(オプションページともいう)であることを設定します</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code>: <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code> API を使って設定を保存し、この API を使うパーミッションが必要です</li>
 <li><code>applications</code>: 同期ストレージに設定を読み書きするには、拡張機能の ID を入れておく必要があります</li>
</ul>

<p>次に "options.html" を提供する約束をしたので、作成します。"settings" ディレクトリー内にその名前でファイルを作成して、次の中身を与えます:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;

  &lt;body&gt;

    &lt;form&gt;
        &lt;label&gt;Border color&lt;input type="text" id="color" &gt;&lt;/label&gt;
        &lt;button type="submit"&gt;Save&lt;/button&gt;
    &lt;/form&gt;

    &lt;script src="options.js"&gt;&lt;/script&gt;

  &lt;/body&gt;

&lt;/html&gt;
</pre>

<p>これは {{htmlelement("form")}} と、そこにラベル付きのテキスト {{htmlelement("input")}} と送信 {{htmlelement("button")}} を定義します。また "options.js" というスクリプトも入っています。</p>

<p>もう一度 "options.js"を "settings" ディレクトリーに作り、次の中身を与えます:</p>

<pre class="brush: js">function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
</pre>

<p>これは 2 つのことをします:</p>

<ul>
 <li>文書が読み込まれた時、"color" の値を <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get">storage.sync.get()</a></code> を使ってストレージから取り出します。値が未設定なら、既定の "blue" を用います。これで値を <code>sync</code> ストレージ領域から取得できます。</li>
 <li>ユーザーが "Save" を押して送信した時、テキストボックスの値を <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set">storage.sync.set()</a></code> を用いて保存します。これで値を <code>sync</code> ストレージ領域に保存できます。</li>
</ul>

<div class="blockIndicator note">
<p>記: 別々の .js ファイルの指定が必要です。インライン JavaScript は使用できません。</p>
</div>

<p>ローカルストレージがふさわしいと感じる場合、代わりにローカルストレージに設定値を保存できます。</p>

<div class="note">
<p>Firefox の <code>storage.sync</code> の実装はアドオン ID に依存しているのに注意します。<code>storage.sync</code> を使う場合、上記manifest にあるように、manifest.json の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> キーに拡張機能の ID をセットしておく必要があります。</p>
</div>

<p>最後に、ストレージから枠の色を読むのに "borderify.js" を更新します:</p>

<div class="warning">
<p>バージョン 52 より前の Firefox の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get">browser.storage.local.get()</a> のバグにより、下記のコードは機能しません。バージョン 52 より前の Firefox で動作させるには、<code>onGot()</code> の中で 2 回出てくる <code>item.color</code> を <code>item[0].color</code> に変えないといけません。</p>
</div>

<pre class="brush: js"> function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}

var getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
</pre>

<p>この時点で、拡張機能はこのようになります:</p>

<pre>settings/
    borderify.js
    manifest.json
    options.html
    options.js</pre>

<p>いま、次を行ってみます:</p>

<ul>
 <li><a href="/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">拡張機能を再読み込み</a></li>
 <li>ウェブページを読み込む</li>
 <li>設定ページを開いて枠の色を変える</li>
 <li>ウェブページを再読み込みして違いを見る</li>
</ul>

<p>Firefox で設定ページにアクセスするには about:addons に移動して拡張機能のエントリーの隣の "Preferences" ボタンをクリックします。</p>

<p>{{EmbedYouTube("ECt9cbWh1qs")}}</p>

<h2 id="Learn_more" name="Learn_more">詳しく学ぶ</h2>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> マニフェストキーのリファレンス文書</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code> API のリファレンス文書</li>
 <li>拡張機能から直接設定ページを開くには <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code> API を使う</li>
 <li>設定ページの例:
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">favourite-colour</a></li>
  </ul>
 </li>
</ul>
