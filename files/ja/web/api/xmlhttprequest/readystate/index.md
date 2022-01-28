---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
tags:
  - AJAX
  - Property
  - Reference
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/readyState
---
<p>{{APIRef('XMLHttpRequest')}}</p>

<p><strong>XMLHttpRequest.readyState</strong> プロパティは XMLHttpRequest クライアントの状態を返します。<abbr title="XMLHttpRequest">XHR</abbr> クライアントは次の状態のいずれかをとります:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">値</td>
   <td class="header">状態</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>UNSENT</code></td>
   <td>クライアントは作成済み。<code>open()</code> はまだ呼ばれていない。</td>
  </tr>
  <tr>
   <td><code>1</code></td>
   <td><code>OPENED</code></td>
   <td><code>open()</code> が呼び出し済み。</td>
  </tr>
  <tr>
   <td><code>2</code></td>
   <td><code>HEADERS_RECEIVED</code></td>
   <td><code>send()</code> が呼び出し済みで、ヘッダーとステータスが利用可能。</td>
  </tr>
  <tr>
   <td><code>3</code></td>
   <td><code>LOADING</code></td>
   <td>ダウンロード中。<code>responseText</code> には部分データが入っている。</td>
  </tr>
  <tr>
   <td><code>4</code></td>
   <td><code>DONE</code></td>
   <td>操作が完了した。</td>
  </tr>
 </tbody>
</table>

<dl>
 <dt>UNSENT</dt>
 <dd>XMLHttpRequest クライアントは作成済みだが、まだ open() メソッドは呼ばれていない。</dd>
 <dt>OPENED</dt>
 <dd>open() メソッドは実行済み。この状態の間は、リクエストヘッダーを <a href="/ja/docs/Web/API/XMLHttpRequest/setRequestHeader">setRequestHeader()</a> メソッドを使ってセットできて、<a href="/ja/docs/Web/API/XMLHttpRequest/send">send()</a> メソッドを呼び出して取得を開始できる。</dd>
 <dt>HEADERS_RECEIVED</dt>
 <dd>send() は呼び出し済みでレスポンスヘッダーを受け取り済み。</dd>
 <dt>LOADING</dt>
 <dd>レスポンスボディを受け取っている。<code><a href="/ja/docs/Web/API/XMLHttpRequest/responseType">ResponseType</a></code> が "text" か空文字の場合、<code><a href="/ja/docs/Web/API/XMLHttpRequest/responseText">responseText</a></code> はロードするごとに部分テキストを持つ。</dd>
 <dt>DONE</dt>
 <dd>取得操作が完了している。つまりデータ転送が完全に成功したか失敗したかどちらでもありうる。</dd>
</dl>

<div class="note">
<p>状態名は Internet Explorer 11 以前のバージョンと異なります。<code>UNSENT</code>, <code>OPENED</code>,<code> HEADERS_RECEIVED</code>,<code> LOADING</code>,<code>DONE</code>, の代わりに、<code>READYSTATE_UNINITIALIZED</code> (0), <code>READYSTATE_LOADING</code> (1), <code>READYSTATE_LOADED</code> (2), <code>READYSTATE_INTERACTIVE</code> (3) and <code>READYSTATE_COMPLETE</code> (4) が使われています。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#states')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>



<p>{{Compat("api.XMLHttpRequest.readyState")}}</p>
