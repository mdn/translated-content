---
title: Console.profile()
slug: Web/API/console/profile
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - profile
  - web console
translation_of: Web/API/Console/profile
---
<p>{{APIRef("Console API")}}{{Non-standard_header}}</p>

<p>パフォーマンスプロファイル (例えば <a href="/ja/docs/Tools/Performance">Firefox の パフォーマンスツール</a>) の記録を開始します。</p>

<p>任意でプロファイル名を引数として与えることができ、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。引数の解釈方法については、{{domxref("Console.profileEnd()")}} をご覧ください。</p>

<p>{{domxref("Console.profileEnd()")}} を呼び出すと、記録を終了します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.profile(<em>profileName</em>);
</pre>

<h2 id="Parameters" name="Parameters">引数</h2>

<dl>
 <dt><code>profileName</code></dt>
 <dd>プロファイルにつける名前。省略可能です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#consoleprofilelabel", "console.profile()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.profile")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Console.profileEnd()")}}</li>
</ul>
