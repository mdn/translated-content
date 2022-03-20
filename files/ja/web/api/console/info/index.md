---
title: Console.info()
slug: Web/API/console/info
tags:
  - API
  - Debugging
  - Method
  - NeedsBrowserCompatibility
  - Web Development
  - web console
translation_of: Web/API/Console/info
---
<div>{{APIRef("Console API")}}</div>

<p>Web コンソールに情報メッセージを出力します。Firefox および Chrome では、Web コンソールでこれらの項目の隣に小さな "i" のアイコンを表示します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.info(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.info(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h2 id="Parameters" name="Parameters">引数</h2>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>出力する JavaScript オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。</dd>
 <dt><code>msg</code></dt>
 <dd>0 個以上の置換文字列を含む JavaScript 文字列。</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 内の置換文字列を置き換える JavaScript オブジェクト。これにより、出力形式を高度に制御できます。</dd>
</dl>

<p>詳しくは {{domxref("console")}} のドキュメントで、<a href="/ja/docs/Web/API/console#Outputting_text_to_the_console">コンソールにテキストを出力する</a> をご覧ください。</p>

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
   <td>{{SpecName("Console API", "#consoleinfoobject--object-", "console.info()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.info")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示</a></li>
</ul>
