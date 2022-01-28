---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
tags:
  - API
  - Reference
  - XHR
  - XMLHttpRequest
  - ウェブ
  - コンストラクター
translation_of: Web/API/XMLHttpRequest/XMLHttpRequest
---
<div>{{draft}}{{APIRef('XMLHttpRequest')}}</div>

<p><span class="seoSummary"><code><strong>XMLHttpRequest()</strong></code> コンストラクターは新しい {{domxref("XMLHttpRequest")}} を生成します。</span></p>

<p><code>XMLHttpRequest</code> の使用方法についての詳細は、 <a class="internal" href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a>を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">const <var>request</var> = new XMLHttpRequest();
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{domxref("XMLHttpRequest")}} オブジェクト。このオブジェクトは {{domxref("XMLHttpRequest.send", "send()")}} を呼び出してサーバーにリクエストを送る前に、少なくとも {{domxref("XMLHttpRequest.open", "open()")}} を呼び出して初期化をしなければなりません。</p>

<h2 id="Non-standard_Firefox_syntax" name="Non-standard_Firefox_syntax">標準外の Firefox の構文</h2>

<p>Firefox 16 ではコンストラクターに標準外の引数を追加して、匿名モードを有効にできるようにしました（{{Bug("692677")}} を参照）。 <code>mozAnon</code> フラグを <code>true</code> に設定することで、効率的に旧バージョンの XMLHttpRequest 仕様書で記述されていた <a href="http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest" title="see AnonXMLHttpRequest in the XMLHttpRequest specification"><code>AnonXMLHttpRequest()</code></a> コンストラクターに似せることができます。</p>

<pre class="syntaxbox">const <var>request</var> = new XMLHttpRequest(<var>paramsDictionary</var>);</pre>

<h3 id="Parameters_(non-standard)" name="Parameters_(non-standard)">引数 (標準外)</h3>

<dl>
 <dt><code>objParameters</code> {{gecko_minversion_inline("16.0")}}</dt>
 <dd>設定できるフラグが2つあります。
 <dl>
  <dt><code>mozAnon</code></dt>
  <dd>論理型: このフラグを <code>true</code> に設定すると、ブラウザーがリソースを読み込むときに{{Glossary("origin", "オリジン")}}と<a href="http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials" title="XMLHttpRequest 仕様書の「ユーザー資格情報」の定義">ユーザー資格情報</a>を示しません。重要なことは、つまり明示的に setRequestHeader を使用して追加しない限り、{{Glossary("Cookie", "クッキー")}}が送信されないということです。</dd>
  <dt><code>mozSystem</code></dt>
  <dd>論理型: このフラグを <code>true</code> に設定すると、 {{Glossary("CORS")}} を使用してサーバーにオプトインを必要とせずにサイト間コネクションを作成できるようになります。<em><code>mozAnon: true</code>の設定が必要です。つまり、これはクッキーやその他のユーザー資格情報の送信と組み合わせることができません。これは特権を持つ (レビューされた) アプリのみで動作します ({{Bug("692677")}})。 Firefox に読み込まれた任意のウェブページでは動作しません。</em></dd>
 </dl>
 </dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest における HTML の扱い</a></li>
</ul>
