---
title: URLSearchParams
slug: Web/API/URLSearchParams
tags:
  - API
  - Interface
  - Landing
  - Reference
  - URL API
  - URLSearchParams
translation_of: Web/API/URLSearchParams
---
<div>{{ApiRef("URL API")}}</div>

<p><strong><code>URLSearchParams</code></strong> インターフェイスは URL のクエリー文字列の操作に役立つメソッドを定義します。</p>

<p><code>URLSearchParams</code> を実装するオブジェクトは 直接 {{jsxref("Statements/for...of", "for...of")}} で使うことができます。例えば次の 2行は等価です。</p>

<pre class="brush: js">for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}</pre>

<p>{{availableinworkers}}</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}</dt>
 <dd><code>URLSearchParams</code> オブジェクトを返すコンストラクターです。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("URLSearchParams.append()")}}</dt>
 <dd>指定されたキーと値のペアを新しい検索パラメーターとして追加します。</dd>
 <dt>{{domxref("URLSearchParams.delete()")}}</dt>
 <dd>指定された検索パラメーターとその値を、検索パラメーターのリストからすべて削除します。</dd>
 <dt>{{domxref("URLSearchParams.entries()")}}</dt>
 <dd>このオブジェクトに含まれるすべてのキーと値のペアを列挙するための {{jsxref("Iteration_protocols","iterator")}} を返します。</dd>
 <dt>{{domxref("URLSearchParams.forEach()")}}</dt>
 <dd>コールバック関数を介して、このオブジェクトに含まれるすべての値を列挙します。</dd>
 <dt>{{domxref("URLSearchParams.get()")}}</dt>
 <dd>指定された検索パラメーターに対応する最初の値を返します。</dd>
 <dt>{{domxref("URLSearchParams.getAll()")}}</dt>
 <dd>指定された検索パラメーターに対応するすべての値を返します。</dd>
 <dt>{{domxref("URLSearchParams.has()")}}</dt>
 <dd>指定された検索パラメーターが存在するかを表す {{jsxref("Boolean")}} 値を返します。</dd>
 <dt>{{domxref("URLSearchParams.keys()")}}</dt>
 <dd>このオブジェクトに含まれるすべてのキーと値のペアの<strong>キー</strong>を列挙する {{jsxref("Iteration_protocols", "iterator")}} を返します。</dd>
 <dt>{{domxref("URLSearchParams.set()")}}</dt>
 <dd>指定された検索パラメーターに対応する値を設定します。複数の値が存在していた場合、それらは削除されます。</dd>
 <dt>{{domxref("URLSearchParams.sort()")}}</dt>
 <dd>すべてのキーと値のペアを、キーを基準にソートします。</dd>
 <dt>{{domxref("URLSearchParams.toString()")}}</dt>
 <dd>URL で使用するのに適したクエリー文字列を返します。</dd>
 <dt>{{domxref("URLSearchParams.values()")}}</dt>
 <dd>このオブジェクトに含まれるすべてのキーと値のペアの<strong>値</strong>を列挙する {{jsxref("Iteration_protocols", "iterator")}} を返します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var paramsString = "q=URLUtils.searchParams&amp;topic=api";
var searchParams = new URLSearchParams(paramsString);

// 検索パラメーターを列挙する
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&amp;topic=api&amp;topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&amp;topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
</pre>

<h3 id="Gotchas" name="Gotchas">コラム</h3>

<p><code>URLSearchParams</code> コンストラクターは完全な URL をパースしません。ただし、先頭に <code>?</code> が存在すれば、読み飛ばします。</p>

<pre class="brush: js">var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query") // true
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
   <td>{{SpecName('URL', '#urlsearchparams', "URLSearchParams")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.URLSearchParams")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイス。</li>
 <li><a href="https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en">Google Developers: URLSearchParams を使用した簡単な URL 操作</a> (英語)</li>
</ul>
