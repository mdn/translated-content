---
title: Storage.key()
slug: Web/API/Storage/key
tags:
  - API
  - Method
  - Reference
  - Storage
  - Web Storage
translation_of: Web/API/Storage/key
---
<p>{{APIRef}}</p>

<p>{{domxref("Storage")}} インターフェイスの <code>key()</code> メソッドは数値 n を渡すと、ストレージ内で n 番目のキーの名称を返します。キーの順序はユーザエージェント依存であり、この順序に頼るべきではありません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>aKeyName</em> = <em>storage</em>.key(<em>key</em>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><em>key</em></dt>
 <dd>名称を取得したいキーの番号を表す整数。これは 0 から始まるインデックスです。</dd>
</dl>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>キーの名称を持つ {{domxref("DOMString")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下の関数は、ローカルストレージのキー全体に対して反復処理を行います:</p>

<pre class="brush: js">function forEachKey(callback) {
  for (var i = 0; i &lt; localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}</pre>

<div class="note">
<p><strong>注記</strong>: 実際の例として、<a href="https://github.com/mdn/web-storage-demo">Web Storage Demo</a> をご覧ください。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Storage', '#dom-storage-key', 'key()')}}</td>
   <td>{{Spec2('Web Storage')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Storage.key")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API を使用する</a></li>
</ul>
