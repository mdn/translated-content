---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
tags:
  - Error
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/message
---
<div>{{JSRef}}</div>

<p><code><strong>message</strong></code> プロパティは、人間が読めるエラーの説明です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このプロパティは、利用可能または設定されている場合、エラーの簡潔な説明を含みます。<a href="/ja/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> は、例外の <code>message</code> プロパティを広範囲に渡って使用します。{{jsxref("Error.prototype.name", "name")}} プロパティは <code>message</code> プロパティとの組み合わせで、Error の文字列表現を生成するために {{jsxref("Error.prototype.toString()")}} メソッドにより使用されます。</p>

<p>既定で <code>message</code> プロパティは空文字列ですが、この振る舞いは、 {{jsxref("Error/Error", "Error")}} コンストラクターの第一引数としてメッセージを指定することにより、インスタンスを上書きできます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Throwing_a_custom_error" name="Throwing_a_custom_error">独自のエラーを発生させる</h3>

<pre class="brush: js notranslate">var e = new Error('Could not parse input');
// e.message は 'Could not parse input'
throw e;
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error.prototype.message', 'Error.prototype.message')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error.name")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error.prototype.name")}}</li>
 <li>{{jsxref("Error.prototype.toString()")}}</li>
</ul>
