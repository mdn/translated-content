---
title: ValidityState.badInput
slug: Web/API/ValidityState/badInput
tags:
  - API
  - Constraints API
  - HTML DOM
  - Property
  - Read-only
  - ValidityState
translation_of: Web/API/ValidityState/badInput
---
<p>{{APIRef("HTML DOM")}}</p>

<p>読み取り専用のプロパティ <strong><code>ValidityState.badInput</code></strong> は、ブラウザが変換できない入力をユーザーが行ったかどうかを示します。例えば、数値の入力欄に文字列がある場合です。<br>
 <em><strong>注:</strong> Internet Explorer はこれをサポートしていませんが、たとえば数値入力欄では、数値ではない値は無視されるので問題ありません。</em></p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: html">&lt;input type="number" id="age"&gt;</pre>

<pre class="brush: js">var input = document.getElementById("age");
if (input.validity.badInput) {
  console.log("Bad input detected…");
} else {
  console.log("Content of input ok.");
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'constraints.html#dom-validitystate-badinput', 'ValidityState.badInput') }}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>現行の標準</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5.1', '#dom-validitystate-badinput', 'ValidityState.badInput') }}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>前回のスナップショット {{SpecName('HTML5 W3C')}} から変更なし</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'forms.html#dom-validitystate-badinput', 'ValidityState.badInput') }}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>このインターフェイスを含む {{SpecName('HTML WHATWG')}} の最初のスナップショット</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.ValidityState.badInput")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/HTML5/Constraint_validation">制約の検証</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Data_form_validation">フォームデータの検証</a></li>
</ul>
