---
title: Console.dirxml()
slug: Web/API/console/dirxml
tags:
  - API
  - DOM
  - Debugging
  - Method
  - NeedsBrowserCompatibility
  - Web Development
  - web console
translation_of: Web/API/Console/dirxml
---
<div>{{APIRef("Console API")}}{{Non-standard_header}}</div>

<p>指定した XML/HTML 要素の子孫要素の対話式ツリーを表示します。または、ツリーを表示できない場合は JavaScript オブジェクトのビューを表示します。これは子ノードの内容を確認可能な、展開式の階層型ノードリストとして出力します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.dirxml(<em>object</em>);
</pre>

<h2 id="Parameters" name="Parameters">引数</h2>

<dl>
 <dt><code>object</code></dt>
 <dd>出力対象の JavaScript オブジェクト</dd>
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
   <td>{{SpecName("Console API", "#consoledirxmlobject", "console.dirxml()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.dirxml")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
</ul>
