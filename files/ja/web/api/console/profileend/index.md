---
title: Console.profileEnd()
slug: Web/API/console/profileEnd
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - profileEnd
  - web console
translation_of: Web/API/Console/profileEnd
---
<p>{{APIRef("Console API")}}{{Non-standard_header}}</p>

<p>profileEnd メソッドは、{{domxref("Console.profile()")}} で開始したプロファイルの記録を終了します。</p>

<p>任意で引数にプロファイル名を与えることができます。引数を与えると、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。</p>

<ul>
 <li>記録中のプロファイル名に一致する名称を <code>Console.profileEnd()</code> に渡すと、そのプロファイルを終了します。</li>
 <li>記録中のプロファイル名に一致しない名称を <code>Console.profileEnd()</code> に渡すと、何も行いません。</li>
 <li><code>Console.profileEnd()</code> にプロファイル名を渡さない場合は、直近に開始したプロファイルを終了します。</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.profileEnd(<em>profileName</em>);
</pre>

<h2 id="Parameters" name="Parameters">引数</h2>

<dl>
 <dt><code>profileName</code></dt>
 <dd>プロファイルにつける名前。この引数は省略可能です。</dd>
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
   <td>{{SpecName("Console API", "#consoleprofileend", "console.profileEnd()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.profileEnd")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Console.profile()")}}</li>
</ul>
