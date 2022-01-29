---
title: XMLHttpRequest.open()
slug: Web/API/XMLHttpRequest/open
tags:
  - API
  - HTTP
  - Method
  - Reference
  - XHR
  - XMLHttpRequest
  - open
  - メソッド
translation_of: Web/API/XMLHttpRequest/open
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p>{{domxref("XMLHttpRequest")}} の <code><strong>open()</strong></code> メソッドは、新しく作成されたリクエストを初期化したり、既存のリクエストを再初期化したりします。</p>

<div class="note"><strong>メモ:</strong> すでに有効なリクエスト (すでに <code>open()</code> が呼び出されたもの) に対してこのメソッドを呼び出すと、 {{domxref("XMLHttpRequest.abort", "abort()")}} を呼び出すのと等価になります。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>XMLHttpRequest</var>.open(<var>method</var>, <var>url</var>[, <var>async</var>[, <var>user</var>[, <var>password</var>]]])
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>method</code></dt>
 <dd>使用する <a href="/ja/docs/Web/HTTP/Methods">HTTP リクエストメソッド</a>です。 <code>"GET"</code>, <code>"POST"</code>, <code>"PUT"</code>, <code>"DELETE"</code>, など。 HTTP(S) 以外の URL では無視されます。</dd>
 <dt><code>url</code></dt>
 <dd>リクエストを送信する URL を表す {{domxref("DOMString")}}。</dd>
 <dt><code>async</code> {{optional_inline}}</dt>
 <dd>任意の論理値の引数で、既定値は <code>true</code>です。操作が非同期的に行われるかどうかを示します。値が <code>false</code> の場合、 <code>send()</code> メソッドはレスポンスを受信するまで戻りません。 <code>true</code> の場合は、トランザクション完了の通知はイベントリスナーを使用して配信されます。 <code>multipart</code> 属性が <code>true</code> である場合は true で<em>なければならず</em>、さもなくば例外が発生します。
 <div class="note"><strong>メモ:</strong> メインスレッドで同期リクエストを行うと、ユーザーの使い勝手を簡単に阻害するので避けるべきです。実際、多くのブラウザーではメインスレッドにおける同期的な XHR の対応を全面的に非推奨としています。同期リクエストは {{domxref("Worker")}} で許可されています。</div>
 </dd>
 <dt><code>user</code> {{optional_inline}}</dt>
 <dd>任意で、認証プロセスで使用するユーザー名です。既定では、これは <code>null</code> 値です。</dd>
 <dt><code>password</code> {{optional_inline}}</dt>
 <dd>任意で、認証プロセスで使用するパスワードです。既定では、これは <code>null</code> 値です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#the-open()-method', 'open()')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLHttpRequest.open")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
 <li>関連する {{domxref("XMLHttpRequest")}} のメソッド: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}},{{domxref("XMLHttpRequest.send", "send()")}}, {{domxref("XMLHttpRequest.abort", "abort()")}}</li>
</ul>
