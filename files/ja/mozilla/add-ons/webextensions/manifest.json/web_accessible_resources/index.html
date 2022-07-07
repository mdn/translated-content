---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
---
<p>{{AddonSidebar}}</p>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>Array</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>
    <p>いいえ</p>
   </td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json notranslate">
"web_accessible_resources": [
  "images/my-image.png"
]</pre>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Description" name="Description">説明</h2>

<p>ときには、拡張機能に何らかのリソース - たとえば、画像や HTML、CSS、JavaScript - をパッケージして、ウェブページで使用できるようにしたい場合があります。</p>

<p>たとえば、<a href="/ja/Add-ons/WebExtensions/Walkthrough">2 つめの WebExtension</a> で使われている "beastify" 例題エクステンションでは、<code><a href="/ja/docs/Web/HTML/Element/img">&lt;img&gt;</a></code> 要素の <code>src</code> 属性を設定することで、ウェブページの画像を動物に置き換えています。画像は拡張機能とともにパッケージ化されており、ウェブページがそれらをロードできるようにするには、ウェブアクセシブルにする必要があります。</p>

<p><code>web_accessible_resources</code> キーは、この方法でウェブページで利用可能にしたいすべてのパッケージされたリソースをリストします。manifest.json ファイルを基準としたパスを指定します。</p>

<p>コンテンツスクリプトは、ウェブアクセシブルリソースとしてリストする必要がないことに注意してください。</p>

<p>しかし、拡張機能が {{WebExtAPIRef("webRequest")}} API を使ってパブリックな (例 HTTPS) URL から拡張機能にパッケージされたページにリダイレクトする場合、拡張機能は<code>web_accessible_resources</code> キーにリストしておく必要があります。</p>

<h3 id="Using_web_accessible_resources" name="Using_web_accessible_resources">web_accessible_resources を使う</h3>

<p>例えば、拡張機能に images/my-image.png にある画像ファイルを入れたい場合、このようにします:</p>

<pre class="no-line-numbers  language-html notranslate"><code class="language-html">my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png</code></pre>

<p>ウェブページに、この画像を指す <code>src</code> 属性のある <code><a href="/ja/docs/Web/HTML/Element/img">&lt;img&gt;</a></code> 要素を入れるには、 "web_accessible_resources" で次のように指定します:</p>

<pre class="brush: json no-line-numbers  language-json notranslate"><code class="language-json"><span class="key token">"web_accessible_resources":</span> <span class="punctuation token">[</span><span class="string token">"images/my-image.png"</span><span class="punctuation token">]</span></code></pre>

<p>このファイルは次の URL で利用できます:</p>

<pre class="no-line-numbers  language-html notranslate"><code class="language-html">moz-extension://<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>extension-UUID</span><span class="punctuation token">&gt;</span></span>/images/my-image.png"</code></pre>

<p><code>&lt;extension-UUID&gt;</code> は拡張機能の ID <strong>ではありません。</strong>これは各ブラウザーインスタンス用にランダムに生成されます。これはウェブサイトがインストールしている拡張機能を調べることで指紋を取ることを防止します。</p>

<div class="blockIndicator note">
<p>Chrome では、拡張機能の ID は固定です。リソースを <code>web_accessible_resouce</code> に指定すると、<code>chrome-extension://&lt;your-extension-id&gt;/&lt;path/to/resouce&gt;</code> でアクセス可能です。</p>
</div>

<p>この URL を取得する推奨される方法は、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL">browser.runtime.getURL</a></code> API を使用して、 manifest.json の相対パスとして渡すことです:</p>

<pre class="brush: js no-line-numbers  language-js notranslate"><code class="language-js">browser<span class="punctuation token">.</span>runtime<span class="punctuation token">.</span><span class="function token">getURL</span><span class="punctuation token">(</span><span class="string token">"images/my-image.png"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// something like:</span>
<span class="comment token">// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png</span></code></pre>

<p>この方法は拡張機能が実行されているブラウザがなんであれ正しい URL を取得します。</p>

<h3 id="Wildcards" name="Wildcards">ワイルドカード</h3>

<p><code>web_accessible_resources</code>エントリーにはワイルドカードを含めることができます。たとえば下記のエントリーでも "images/my-image.png" のリソースを入れることができます:</p>

<pre class="brush: json no-line-numbers  language-json notranslate"><code class="language-json"><span class="key token">"web_accessible_resources":</span> <span class="punctuation token">[</span><span class="string token">"images/*.png"</span><span class="punctuation token">]</span></code></pre>

<h3 id="Security" name="Security">セキュリティ</h3>

<p>ページを web-accessible にすると、あらゆるウェブサイトからそのページにリンクやリダイレクトができます。このページは、通常のウェブページと同様に、あらゆる入力 (例えば POST データ) を、信頼のないソースから取っときたかのように扱うべきです。</p>

<h2 id="例">例</h2>

<pre class="brush: json notranslate">"web_accessible_resources": ["images/my-image.png"]</pre>

<p>"images/my-image.png" のファイルをウェブアクセス可能にしています。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.web_accessible_resources")}}</p>
