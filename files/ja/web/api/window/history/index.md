---
title: Window.history
slug: Web/API/Window/history
tags:
  - API
  - HTML DOM
  - History API
  - Property
  - Reference
  - Window
translation_of: Web/API/Window/history
---
<div>{{APIRef}}</div>

<p><code><strong>Window</strong>.<strong>history</strong></code> は読み取り専用プロパティで、 {{domxref("History")}} オブジェクトへの参照を返します。これはブラウザーの<em>セッション履歴</em> (現在のページが読み込まれているタブまたはフレームで訪れたことがあるページ群) を操作するためのインターフェイスを提供します。</p>

<p>詳細や使用例については、<a href="/ja/docs/Web/API/History_API">ブラウザーの履歴の操作</a>をご覧ください。特に、このページでは {{domxref("History.pushState", "pushState()")}} メソッドと {{domxref("History.replaceState", "replaceState()")}} メソッドについて、使用する前に気を付けなければならないセキュリティ上の特性を説明しています。</p>

<h2 id="Example">例</h2>

<pre class="brush: js">history.back();     // 戻るボタンを押すのと同等
history.go(-1);     // history.back(); と同等
</pre>

<h2 id="Notes">注</h2>

<p>最上位ページにおいて <code>History</code> オブジェクトを通してアクセスできるセッション履歴のページリストは、ブラウザーの「戻る」や「次へ」ボタンの隣にあるドロップダウンで確認することができます。</p>

<p>セキュリティ上の理由から、 <code>History</code> オブジェクトでは権限のないコードがセッション履歴内の他のページの {{glossary("URL", "URL")}} にアクセスすることを禁止していますが、セッション履歴の中を移動することは許可しています。</p>

<p>権限のないコードから、セッション履歴を消去したり、前後への移動を無効にしたりする方法はありません。実現可能な最も近い解決策は、 {{domxref("Location.replace", "location.replace()")}} メソッドでセッション履歴の現在の項目を指定された URL で置き換えることです。</p>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'browsers.html#the-history-interface', 'The History interface')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#the-history-interface', 'The History interface')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.history")}}</p>
