---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - API
  - DOM
  - Element
  - Fullscreen API
  - requestFullscreen
  - メソッド
  - リファレンス
  - 全画面 API
translation_of: Web/API/Element/requestFullScreen
---
<div>{{APIRef("Fullscreen API")}}</div>

<p><code><strong>Element.requestFullscreen()</strong></code> メソッドは、要素を全画面表示するための非同期的な要求を発行します。</p>

<p>要素が全画面モードに移行することは保証されていません。全画面モードに移行する許可が与えられている場合は、返される {{jsxref("Promise")}} が解決され、文書が全画面モードになったことを知ることができる {{event("fullscreenchange")}} イベントを受け取るようになります。権限が拒否された場合は、代わりに {{event('fullscreenerror')}} イベントを受け取ります。</p>

<p>このメソッドはユーザーの操作又は機器の方向の変更によって呼び出す必要があり、そうでなければ失敗します。</p>

<div class="note">
<p>全画面で表示することができる要素は、 HTML 名前空間にあり (つまり、標準の HTML の要素であり)、加えて {{HTMLElement("svg")}} 要素や {{HTMLElement("math")}} 要素、文書の最上位にある要素、又は {{htmlattrxref("allowfullscreen", "iframe")}} 属性を持つ {{HTMLElement('iframe')}} だけです。すなわち、 {{HTMLElement('frame')}} や {{HTMLElement('object')}} の内部にある要素は全画面で表示できません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>Promise </em>= <em>Element</em>.requestFullscreen();
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>全画面への移行が完了した場合は、 <code>undefined</code> の値で解決した {{jsxref("Promise")}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>全画面のリクエストが失敗した場合は、 Promise が例外で拒否されるかもしれません。発生しうる例外は以下の通りです。</p>

<ul>
 <li>要素の文書が、全画面への移行ができる状態にない (つまり、 <code>defaultView</code> がない)。</li>
 <li>要素が HTML, SVG, Math の要素ではない</li>
 <li>全画面が許可されていない (例えば、ユーザーの操作ではない) 又は対応していない。</li>
</ul>

<dl>
 <dt><code>{{jsxref("TypeError")}}</code></dt>
 <dd>以下の状況の一つが発生する可能性あります。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p><code>requestFullscreen()</code> を呼び出す前に、 {{event("fullscreenchange")}} 及び {{event("fullscreenerror")}} イベントのハンドラーを設定してください。そうすれば、いつ全画面モードに切り替えることに成功したか (又は権限がなくて拒否されたか) を知ることができます。</p>

<p>tbd</p>

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
   <td>{{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullscreen()")}}</td>
   <td>{{Spec2("Fullscreen")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Element.requestFullscreen")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a></li>
 <li>{{ domxref("Document.exitFullscreen()") }}</li>
 <li>{{ domxref("Document.fullscreen") }}</li>
 <li>{{ domxref("Document.fullscreenElement") }}</li>
 <li>{{ cssxref(":fullscreen") }}</li>
 <li>{{ HTMLAttrXRef("allowfullscreen", "iframe") }}</li>
</ul>
