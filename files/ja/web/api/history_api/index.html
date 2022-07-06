---
title: History API
slug: Web/API/History_API
tags:
  - API
  - Advanced
  - DOM
  - HTML5
  - History
  - 履歴
translation_of: Web/API/History_API
---
<div>{{DefaultAPISidebar("History API")}}</div>

<p>DOM の {{DOMxRef("Window")}} オブジェクトは、ブラウザーのセッション履歴 (<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/history">WebExtensions history</a> と混同しないように) へのアクセスを {{DOMxRef("Window.history","history")}} オブジェクトを介して提供しています。このオブジェクトは、ユーザーの履歴の中を前のページや後のページへ移動したり、履歴スタックの中を操作したりするのに便利なメソッドやプロパティが提供されています。</p>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使用方法</h2>

<p>ユーザーの履歴の中を前のページや次のページへ移動するには、 {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}}, {{DOMxRef("History.go","go()")}} の各メソッドを使用します。</p>

<h3 id="Moving_forward_and_backward" name="Moving_forward_and_backward">前のページや次のページへの移動</h3>

<p>履歴を前に遡るには、次のようにします。</p>

<pre class="brush: js notranslate">window.history.back()
</pre>

<p>これは、ちょうどユーザーがブラウザーのツールバーの<kbd><strong>前のページへ戻る</strong></kbd>ボタンをクリックしたときのような動作です。</p>

<p>同様に、次のようにして (ユーザーが<kbd><strong>次のページへ進む</strong></kbd>ボタンをクリックしたときのように) 次のページへ進むこともできます。</p>

<pre class="brush: js notranslate">window.history.forward()
</pre>

<h3 id="Moving_to_a_specific_point_in_history" name="Moving_to_a_specific_point_in_history">履歴内の特定の位置まで移動</h3>

<p>{{DOMxRef("History.go","go()")}} メソッドを使うと、セッション履歴において現在のページから相対的な位置を指定して特定のページを読み込むことができます。 (現在のページの相対位置は <code>0</code> となります。)</p>

<p>ひとつ前のページへと戻る例です ({{DOMxRef("History.back","back()")}} と同様の動き)。</p>

<pre class="brush: js notranslate">window.history.go(-1)
</pre>

<p>ページを進める例で、 {{DOMxRef("History.forward","forward()")}} を呼び出すのと同様です。</p>

<pre class="brush: js notranslate">window.history.go(1)
</pre>

<p>同様に、 <code>2</code> を渡すことで2ページ分を進めることができます。</p>

<p><code>go()</code> メソッドの他の使い方として、 <code>0</code> を渡すか、引数なしで呼び出すことで、現在のページを再読み込みすることができます。</p>

<pre class="brush: js notranslate">// 以下の文は、
// どちらもページを再読み込みする
// 効果があります。
window.history.go(0)
window.history.go()
</pre>

<p><code>length</code> プロパティの値を参照することにより、履歴スタック中のページの数を知ることができます。</p>

<pre class="brush: js notranslate">let numberOfEntries = window.history.length
</pre>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("History")}}</dt>
 <dd>ブラウザーの<em>セッション履歴</em> (すなわち、現在のページが読み込まれているタブやフレームで表示したことがあるページ群) の操作ができます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では <code>onpopstate</code> プロパティにリスナーを割り当てています。そして、 history オブジェクトのメソッドで現在のタブのブラウザー履歴の追加、置換、移動など、いくつかの操作を説明しています。</p>

<pre class="brush:js line-numbers language-js notranslate">window.onpopstate = function(event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}

history.pushState({page: 1}, "title 1", "?page=1")
history.pushState({page: 2}, "title 2", "?page=2")
history.replaceState({page: 3}, "title 3", "?page=3")
history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back() // alerts "location: http://example.com/example.html, state: null"
history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"</pre>

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
   <td>{{SpecName("HTML WHATWG", "browsers.html#history", "History")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>{{SpecName("HTML5 W3C")}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "browsers.html#history", "History")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.History")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<h3 id="References" name="References">リファレンス</h3>

<ul>
 <li>{{ domxref("window.history") }}</li>
 <li>{{ domxref("window.onpopstate") }}</li>
</ul>

<h3 id="Guides" name="Guides">ガイド</h3>

<ul>
 <li><a href="/ja/docs/Web/API/History_API/Working_with_the_History_API">History API の操作</a></li>
</ul>
