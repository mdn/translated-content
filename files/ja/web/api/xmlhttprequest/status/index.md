---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
tags:
  - API
  - XMLHttpRequest
  - XMLHttpRequest の結果
  - status
  - エラー
  - プロパティ
  - リファレンス
translation_of: Web/API/XMLHttpRequest/status
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p><code><strong>XMLHttpRequest.status</strong></code> プロパティは読み取り専用で、 <code>XMLHttpRequest</code> のレスポンスにおける数値の HTTP <a href="/ja/docs/Web/HTTP/Status">ステータスコード</a>を返します。</p>



<p>リクエストが完了する前は、 <code>status</code> の値は 0 になります。 <code>XMLHttpRequest</code> がエラーになった場合も、ブラウザーはステータスとして 0 を返します。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
</pre>

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
   <td>{{SpecName('XMLHttpRequest', '#the-status-attribute')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLHttpRequest.status")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Response_codes">HTTP レスポンスコード</a>の一覧</li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
