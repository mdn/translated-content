---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Storage
  - StorageArea
  - WebExtensions
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---
<div>{{AddonSidebar()}}</div>

<p>ストレージ領域から1つ以上のアイテムを取得します。</p>

<p>この関数は <code style="font-size: 16px !important; line-height: 24px !important;"><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise" style="font-size: 16px !important; line-height: 24px !important;">Promise</a></code> を返す非同期関数です。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">let gettingItem = browser.storage.&lt;storageType&gt;.get(
  keys    // null, string, object or array of strings
)
</pre>

<p><code style="font-size: 16px !important; line-height: 24px !important;">&lt;storageType&gt;</code> は <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync" style="font-size: 16px !important; line-height: 24px !important;" title="sync ストレージ領域を指します。 sync ストレージ内のアイテムはブラウザーによって同期され、ログイン(Firefox sync や Google アカウントなど)しているブラウザー・デバイスの全てのインスタンスで利用できます。"><code style="font-size: 16px !important; line-height: 24px !important;">storage.sync</code></a> または <a class="new" href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local" rel="nofollow" style="font-size: 16px !important; line-height: 24px !important;" title="この項目についての文書はまだ書かれていません。書いてみませんか？"><code style="font-size: 16px !important; line-height: 24px !important;">storage.local</code></a> の書き込み可能なストレージタイプです。</p>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>keys</code></dt>
 <dd>取得したいアイテムのキー(文字列・文字列の配列またはデフォルト値を指定するオブジェクト)を指定します。空文字列・オブジェクト・配列を指定すると空のオブジェクトが取得できます。 <code>null</code> か未定義の値を指定するとストレージ全体のアイテムが取得できます。</dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>成功時は <code style="font-size: 16px !important; line-height: 24px !important;">keys</code> で指定されたストレージ領域内のアイテム全てを含む <code style="font-size: 16px !important; line-height: 24px !important;">results</code> オブジェクトを引数に持つ <code style="font-size: 16px !important; line-height: 24px !important;"><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise" style="font-size: 16px !important; line-height: 24px !important;">Promise</a></code> を返します。 失敗した場合 promise はエラーメッセージと共にリジェクトされます。</p>

<div class="warning">
<p>52 より前の Firefox バージョンのコンテンツスクリプトで使用する場合、 <code>browser.storage.local.get()</code> で返される Promise は1つのオブジェクトを持つ配列を引数に持ちます。配列内のオブジェクトは上記に記述したようにストレージ領域内の <code>keys</code> を持っています。 The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.). When this API is used as <code>chrome.storage.local.get()</code>, it correctly passes an Object to the callback function.</p>
</div>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.storage.StorageArea.get")}}</p>

<h2 id="例">例</h2>

<p>あらかじめストレージ領域に2つのアイテムを格納しておきます。</p>

<pre class="brush: js">// "kitten" と "monster" を格納
browser.storage.local.set({
  kitten:  {name:"Mog", eats:"mice"},
  monster: {name:"Kraken", eats:"people"}
});</pre>

<p>次に promise で使う成功時と失敗時のハンドラを定義しておきます。</p>

<pre class="brush: js">function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}</pre>

<p><code>keys</code> を指定せずに呼び出すと全て取得します。</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object }</pre>

<p>空のキーを指定すると何も返しません。</p>

<pre class="brush: js">// 空の配列を指定すると何も返らない
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -&gt; Object { }</pre>

<p>オブジェクト名を指定すると、合致するものを返します。</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object }</pre>

<p>オブジェクト名の配列を指定すると合致するものを全て返します。</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get(["kitten", "monster", "grapefruit"]);
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object } </pre>

<p>オブジェクト名をキー、デフォルト値をvalueに指定したオブジェクトを指定する場合</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water"
  }
});

// -&gt; Object { kitten: Object, monster: Object, grapefruit: Object }
</pre>

<p>{{WebExtExamples}}</p>

<h3 id="Chrome_での例">Chrome での例</h3>

<pre class="brush: js">chrome.storage.local.get("kitten", function(items){
  console.log(items.kitten);  // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<p class="brush: js">Or with an arrow function</p>

<pre class="brush: js">chrome.storage.local.get("kitten", items=&gt;{
  console.log(items.kitten); // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a> APIに基づいています。また、このドキュメントは <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> における Chromium のコードに基づいています。</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
</div>
