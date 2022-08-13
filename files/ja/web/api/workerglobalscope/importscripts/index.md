---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - WorkderGlobalScope
  - importScripts
  - ウェブワーカー
  - メソッド
  - ワーカーグローバルスコープ
translation_of: Web/API/WorkerGlobalScope/importScripts
---
<p>{{APIRef("Web Workers API")}}</p>

<p><code><strong>importScripts()</strong></code> は {{domxref("WorkerGlobalScope")}} インターフェースのメソッドで、1つ以上のスクリプトをワーカーのスコープ内に同期的に読み込みます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>インポートされるスクリプト表す {{domxref("DOMString")}} オブジェクトのカンマ区切りのリストです。これらは <em>HTML 文書のベース URL</em> からの相対パスです。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><em>なし。</em></p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>NetworkError</code></dt>
 <dd>インポートされたスクリプトが妥当な JavaScript の MIME 型 (すなわち <code>text/javascript</code>) で提供されていなかった場合。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p><code>foo.js</code> という別なスクリプトで書かれた機能を worker.js の内部で使用したい場合、以下のような行でインポートして使用することができます。</p>

<pre class="brush: js notranslate">importScripts('foo.js');</pre>

<p><code>importScripts()</code> と <code>self.importScripts()</code> は実質的に同じです。 — 両方とも <code>importScripts()</code> をワーカーの内部スコープの中から呼び出すことを表します。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-workerglobalscope-importscripts', 'importScripts()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WorkerGlobalScope.importScripts")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("WorkerGlobalScope")}}</li>
</ul>
