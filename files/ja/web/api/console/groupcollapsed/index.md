---
title: Console.groupCollapsed()
slug: Web/API/console/groupCollapsed
tags:
  - API
  - DOM
  - DOM Reference
  - Debugging
  - Method
  - NeedsBrowserCompatibility
  - Reference
  - Web Development
  - web console
translation_of: Web/API/Console/groupCollapsed
---
<div>{{APIRef("Console API")}}{{Non-standard_header}}</div>

<p>Web コンソールに新たなインライングループを作成します。ただし {{domxref("console.group()")}} とは異なり、新しいグループは折りたたまれた状態で作成されます。グループ内に作成された項目を表示するには、グループの隣にある展開ボタンを使用して、ユーザが展開しなければなりません。</p>

<p>親グループに戻るには、{{domxref("console.groupEnd()")}} を呼び出します。</p>

<p>詳細および使用例は {{domxref("console")}} のドキュメントで、<a href="/ja/docs/Web/API/console#Using_groups_in_the_console">コンソールでグループを使用する</a> をご覧ください。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.groupCollapsed();
</pre>

<h2 id="Parameters" name="Parameters">引数</h2>

<p>なし。</p>

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
   <td>{{SpecName("Console API", "#consolegroupcollapsedobject-object-", "console.groupCollapsed()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.groupCollapsed")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
</ul>
