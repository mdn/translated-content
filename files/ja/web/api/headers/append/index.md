---
title: Headers.append()
slug: Web/API/Headers/append
tags:
  - API
  - Append
  - Experimental
  - Fetch
  - Method
  - Reference
translation_of: Web/API/Headers/append
---
<p>{{APIRef("Fetch")}}{{ SeeCompatTable() }}</p>

<p>{{domxref("Headers")}} インターフェースの <strong><code>append()</code></strong> メソッドは、<code>Headers</code> オブジェクト内の既存のヘッダに新しい値を追加します。または、既存のヘッダがない場合には、ヘッダを追加します。</p>

<p>{{domxref("Headers.set")}} と <code>append()</code> の違いは、特定のヘッダが既に存在して、複数の値を受け入れる場合、{{domxref("Headers.set")}} は既存の値を新しい値で上書きますが、<code>append()</code> は値の最後に新しい値を追加します。</p>

<p style="line-height: 19.0909080505371px;">セキュリティ上の理由から、いくつかのヘッダはユーザーエージェントでのみ制御できます。それらのヘッダは、{{Glossary("Forbidden_header_name", "forbidden header names", 1)}} と {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}} を含みます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">myHeaders.append(name,value);</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><em>name</em></dt>
 <dd><code>Headers</code> オブジェクトに追加する HTTP ヘッダ名。</dd>
 <dt><em>value</em></dt>
 <dd>HTTP ヘッダに追加する値。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>Void。</p>

<h2 id="例">例</h2>

<p>空の <code>Headers</code> オブジェクトの生成はシンプルです：</p>

<pre class="brush: js">var myHeaders = new Headers(); // 現在は空</pre>

<p><code>append()</code> を使用してヘッダを追加できます：</p>

<pre>myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // 'image/jpeg' を返します。
</pre>

<p>特定のヘッダが既に存在する場合、<code>append()</code> はその値を指定した値に変更します。特定のヘッダが既に存在して複数の値を受け入れる場合、<code>append()</code> は値の末尾に新しい値を追加します：</p>

<pre class="brush: js">myHeaders.append('Accept-Encoding', 'deflate');
myHeaders.append('Accept-Encoding', 'gzip');
myHeaders.getAll('Accept-Encoding'); // [ "deflate", "gzip" ] を返します。</pre>

<p>古い値を新しい値で上書きするには、{{domxref("Headers.set")}} を使います。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#dom-headers-append','append()')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.Headers.append")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/Access_control_CORS">HTTP アクセス制御 (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
