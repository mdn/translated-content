---
title: Document.queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - editor
translation_of: Web/API/Document/queryCommandSupported
---
<div>{{ApiRef("DOM")}}{{obsolete_header}}</div>

<p><strong><code>Document.queryCommandSupported()</code></strong> メソッドは、指定しされたエディターコマンドにブラウザーが対応しているかどうかを報告します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>isSupported</var> = document.queryCommandSupported(<var>command</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>command</var></code></dt>
 <dd>サポートしているかを調べるコマンド。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Boolean")}} で、コマンドがサポートされていれば <code>true</code>、そうでなければ <code>false</code> を返します。</p>

<h2 id="Notes" name="Notes">注</h2>

<p><code>'paste'</code> コマンドは機能が利用できないときだけでなく、呼び出しスクリプトにそのコマンドを実行するための権限が不足しているときにも <code>false</code> を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush:js notranslate">var flg = document.queryCommandSupported("SelectAll");

if(flg) {
  // ...何か行う
}
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td><a href="https://w3c.github.io/editing/execCommand.html#querycommandsupported()">execCommand</a></td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.Document.adoptNode")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document.execCommand()")}}</li>
 <li>{{domxref("Document.queryCommandEnabled()")}}</li>
</ul>
