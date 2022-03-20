---
title: Console.dir()
slug: Web/API/Console/dir
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - console
  - web console
translation_of: Web/API/Console/dir
---
<p>{{APIRef("Console API")}}</p>

<p><span class="seoSummary">{{domxref("Console")}} の <strong><code>dir()</code></strong> メソッドは、指定された JavaScript オブジェクトのプロパティの対話的なリストを表示します。</span>出力は折り畳み式の階層的なリストで表示され、子オブジェクトの中身を見ることができます。</p>

<p>言い換えれば <code>console.dir()</code> は指定された JavaScript オブジェクトのプロパティをすべてコンソール上で見る方法であり、開発者は簡単にオブジェクトのプロパティを得ることができます。</p>

<p>{{AvailableInWorkers}}</p>

<p><img alt="console-dir.png" class="default internal" src="/@api/deki/files/6081/=console-dir.png"></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">console.dir(<var>object</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>object</var></code></dt>
 <dd>プロパティを出力する JavaScript オブジェクトです。</dd>
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
   <td>{{SpecName("Console API", "#dir", "console.dir()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Console.dir")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="http://msdn.microsoft.com/library/gg589530">MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示</a></li>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject">Chrome Console API reference</a></li>
</ul>
