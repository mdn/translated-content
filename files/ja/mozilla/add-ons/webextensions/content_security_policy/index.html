---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
---
<div>{{AddonSidebar}}</div>

<div class="summary">
<p>WebExtension APIs で開発される拡張機能には、既定で適用される CSP(Content Security Policy の略) があります。これは<strong><a href="/ja/docs/Web/HTML/Element/script"> </a></strong><a href="/ja/docs/Web/HTML/Element/script">&lt;script&gt;</a> と <a href="/ja/docs/Web/HTML/Element/object">&lt;object&gt;</a> リソースから読み込まれるソースを制限し、危険な行動、例えば <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code> の使用を非許可にします。</p>

<p>この記事では CSP とは何かと、デフォルトポリシーとは何で拡張機能にはどんな意味があるのかと、拡張機能が既定の CSP を変更する方法を簡単に説明します。</p>
</div>

<p><a href="/ja/docs/Web/HTTP/CSP">Content Security Policy</a> (CSP) はウェブサイトが悪意のあるコンテンツを実行するのを防ぐのに役立つメカニズムです。ウェブサイトは サーバーから送られてくる HTTP ヘッダーを使って CSP を指定します。CSP は主に、スクリプトや組み込みプラグインといったさまざまな種類のコンテンツの合法なソースを特定することに関心を持っています。例えば、ウェブサイトは、ウェブサイト自身からの JavaScript だけを実行し、他のソースは受け付けないように指定できます。CSP はブラウザーに <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>のような、潜在的に危険な行動を禁止するよう指示することもできます。</p>

<p>ウェブサイトと同様に、拡張機能はさまざまなソースからコンテンツを読み込めます。例えば、ブラウザーアクションのポップアップは HTML 文書として指定できて、通常のウェブページのようにさまざまなソースからの JavaScript と CSS を入れることができます:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;

  &lt;body&gt;

    &lt;!--Some HTML content here--&gt;

    &lt;!--
      Include a third-party script.
      See also https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity.
    --&gt;
    &lt;script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"&gt;
    &lt;/script&gt;

    &lt;!-- Include my popup's own script--&gt;
    &lt;script src="popup.js"&gt;&lt;/script&gt;
  &lt;/body&gt;

&lt;/html&gt;</pre>

<p>ウェブサイトと比較して、拡張機能は追加の特権付き API にアクセスできるので、悪意のあるコードに感染した場合、リスクは大きくなります。このため:</p>

<ul>
 <li>かなり厳密な CSP がデフォルトで適用されます。<a href="/ja/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy">既定の content security policy</a> を見てください</li>
 <li>拡張機能のオーナーは <code>content_security_policy</code> manifest.json キーを使ってデフォルトのポリシーを変更できますが、許可できるポリシーには制限があります。<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> を見てください。</li>
</ul>

<h2 id="Default_content_security_policy" name="Default_content_security_policy">既定の content security policy</h2>

<p>拡張機能の既定の CSP は次のものです:</p>

<pre>"script-src 'self'; object-src 'self';"</pre>

<p>これは、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> の manifest.json key を使って明示的に CSP をセットしないあらゆる拡張機能にあてはまります。下記の結論になります:</p>

<ul>
 <li>
  <p><a href="/ja/Add-ons/WebExtensions/Content_Security_Policy#Location_of_script_and_object_resources">&lt;script&gt; と &lt;object&gt; リソースは拡張機能のローカルからのみ読み込みできる</a></p>
 </li>
 <li>
  <p><a href="/ja/Add-ons/WebExtensions/Content_Security_Policy#eval()_and_friends">拡張機能は JavaScript で文字列を評価 (eval) できない</a></p>
 </li>
 <li>
  <p><a href="/ja/Add-ons/WebExtensions/Content_Security_Policy#Inline_JavaScript">インライン JavaScript は実行されない</a></p>
 </li>
</ul>

<h3 id="Location_of_script_and_object_resources" name="Location_of_script_and_object_resources">スクリプトとオブジェクトリソースの場所</h3>

<p>既定の CSP の下では、拡張機能のローカルにある <a href="/ja/docs/Web/HTML/Element/script">&lt;script&gt;</a> と <a href="/ja/docs/Web/HTML/Element/object">&lt;object&gt;</a> リソースだけを読み込みできます。例えば、拡張機能の文書内にこんな行があるとします:</p>

<pre class="brush: html"> &lt;script src="https://code.jquery.com/jquery-2.2.4.js"&gt;&lt;/script&gt;</pre>

<p>これは要求したリソースを読み込みません: 静かに失敗し、このリソースから取ってきたはずのいかなるオブジェクトも見つかりません。この解決方法が 2 つあります:</p>

<ul>
 <li>
  <p>リソースをダウンロードして、拡張機能にパッケージして、このリソース版を参照する</p>
 </li>
 <li>
  <p>必要なリモートオリジンを許可するために <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> を使う</p>
 </li>
</ul>

<h3 id="eval_and_friends" name="eval()_and_friends">eval() とその仲間</h3>

<p>既定の CSP の下で、拡張機能は JavaScript 内の文字列の評価を許可しません。つまり次のことは許可されません:</p>

<pre class="brush: js">eval("console.log('some output');");</pre>

<pre class="brush: js">window.setTimeout("alert('Hello World!');", 500);</pre>

<pre class="brush: js">var f = new Function("console.log('foo');");</pre>

<h3 id="Inline_JavaScript" name="Inline_JavaScript">インライン JavaScript</h3>

<p>既定の CSP ではインライン JavaScript は実行されません。これは <code>&lt;script&gt;</code> タグで直接置かれた JavaScript と、インラインイベントハンドラーの両方とも許可されず、つまり次のことは許可されません:</p>

<pre class="brush: html">&lt;script&gt;console.log("foo");&lt;/script&gt;</pre>

<pre class="brush: html">&lt;div onclick="console.log('click')"&gt;Click me!&lt;/div&gt;</pre>

<p>ページが読み込まれた時にスクリプトを実行するのに <code>&lt;body onload="main()"&gt;</code> のようなコードを使っている場合、代わりに <a href="/ja/docs/Web/Events/DOMContentLoaded">DOMContentLoaded</a> か <a href="/ja/docs/Web/Events/load">load</a> をリッスンします。</p>
