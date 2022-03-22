---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Class
  - JavaScript
  - Reference
  - クラス
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
---
<div>{{JSRef}}</div>

<p><strong><code>Boolean</code></strong> オブジェクトは論理値のオブジェクトラッパーです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>一番目の引数に渡された値は、必要に応じて論理値に変換されます。値が省略された場合や、値が <code>0</code>, <code>-0</code>, {{jsxref("null")}}, <code>false</code>, {{jsxref("NaN")}}, {{jsxref("undefined")}} あるいは空文字列 (<code>""</code>) であった場合、オブジェクトは <code>false</code> の初期値を持ちます。それ以外のあらゆる値は、オブジェクトや "<code>false</code>" という文字列も含めて、 <code>true</code> の初期値を持つオブジェクトを生成します。</p>

<p>プリミティブな <code>Boolean</code> の <code>true</code> や <code>false</code> を <code>Boolean</code> オブジェクトの <code>true</code> や <code>false</code> という値と混同しないでください。</p>

<p>その値が {{jsxref("undefined")}} や {{jsxref("null")}} でないオブジェクトは、値が <code>false</code> の <code>Boolean</code> オブジェクトも含めて、条件文に通されると全て <code>true</code> に評価されます。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は <code>true</code> に評価されます。:</p>

<pre class="brush: js notranslate">var x = new Boolean(false);
if (x) {
  // このコードは実行されます。
}
</pre>

<p>この振る舞いは <code>Boolean</code> プリミティブには適用されません。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は <code>false</code> に評価されます。:</p>

<pre class="brush: js notranslate">var x = false;
if (x) {
  // このコードは実行されません
}
</pre>

<p><code>Boolean</code> オブジェクトを論理値でない値から論理値への変換に使わないでください。代わりに、 <code>Boolean</code> を関数として使ったり、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">二重否定演算子</a>を使用したりすることで同じことが行えます。</p>

<pre class="brush: js notranslate">var x = Boolean(expression);     // こちらを使うか...
var x = !!(expression);          // ...こちらを使ってください
var x = new Boolean(expression); // これは使わないでください！
</pre>

<p><code>Boolean</code> オブジェクトの初期値としてオブジェクトを指定した場合、それが値が <code>false</code> の <code>Boolean</code> オブジェクトであっても、新しい <code>Boolean</code> オブジェクトは <code>true</code> の値を持ちます。</p>

<pre class="brush: js notranslate">var myFalse = new Boolean(false);   // 初期値は false
var g = Boolean(myFalse);       // 初期値は true
var myString = new String('Hello'); // 文字列オブジェクト
var s = Boolean(myString);      // 初期値は true
</pre>

<p><code>Boolean</code> プリミティブの代わりに <code>Boolean</code> オブジェクトを使わないでください。</p>

<div class="note">
<p><strong>Note:</strong> 標準外の <code><a href="/ja/docs/Web/API/Document#Properties">document.all</a></code> プロパティがこのコンストラクターの引数として使用された場合、結果は <code>Boolean</code> オブジェクトで値は <code>false</code> となります。このプロパティは古く、標準外で、使用するべきではありません。</p>
</div>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}</dt>
 <dd>新しい <code>Boolean</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("Boolean.prototype.toString()")}}</dt>
 <dd>オブジェクトの値に応じて文字列で <code>true</code> または <code>false</code> のどちらかを返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。</dd>
 <dt>{{jsxref("Boolean.prototype.valueOf()")}}</dt>
 <dd>{{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_Boolean_objects_with_an_initial_value_of_false" name="Creating_Boolean_objects_with_an_initial_value_of_false">Boolean オブジェクトを初期値 false で生成</h3>

<pre class="brush: js notranslate">var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
</pre>

<h3 id="Creating_Boolean_objects_with_an_initial_value_of_true" name="Creating_Boolean_objects_with_an_initial_value_of_true">Boolean オブジェクトを初期値 true で生成</h3>

<pre class="brush: js notranslate">var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-boolean-objects', 'Boolean')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Boolean")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Glossary/Boolean">Boolean</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Data_structures#Boolean_type">論理値プリミティブ</a></li>
 <li><a href="https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%BC%E3%83%AA%E3%82%A2%E3%83%B3%E5%9E%8B">ブーリアン型 (Wikipedia)</a></li>
</ul>
