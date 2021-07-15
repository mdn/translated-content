---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/slice
---
<div>{{JSRef}}</div>

<p><strong><code>slice()</code></strong> メソッドは、<code>start</code> と <code>end</code> が配列の中の項目のインデックスを表している場合、<code>start</code> から <code>end</code> まで (<code>end</code> は含まれない) で選択された配列の一部の浅いコピーを新しい配列オブジェクトに作成して返します。元の配列は変更されません。</p>

<div>{{EmbedInteractiveExample("pages/js/array-slice.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.slice([<var>start</var>[, <var>end</var>]])
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>start</var></code> {{optional_inline}}</dt>
 <dd>取り出しの開始位置を示す 0 から始まるインデックスです。</dd>
 <dd>負のインデックスを使って、列の終わりからのオフセットを指定することができます。<code>slice(-2)</code> は列の最後の 2 つの要素を取り出します。</dd>
 <dd><code><var>start</var></code> が指定されなかった場合、<code>slice</code> はインデックス <code>0</code> から開始します。</dd>
 <dd><code><var>start</var></code> が列のインデックスの範囲よりも大きい場合は、空の配列が返されます。</dd>
 <dt><code><var>end</var></code> {{optional_inline}}</dt>
 <dd>取り出しを終える直前の位置を示す 0 から始まるインデックスです。<code>slice</code> は <code><var>end</var></code> 自体は含めず、その直前まで取り出します。例えば、<code>slice(1,4)</code> は 2 番目から 4 番目までの要素 (インデックスがそれぞれ 1, 2, 3 番目の要素) を取り出します。</dd>
 <dd>負のインデックスを使って、列の終わりからのオフセットとして指定することができます。<code>slice(2,-1)</code> は列の 3 番目から、最後から 2 番目までの要素を取り出します。</dd>
 <dd><code><var>end</var></code> が省略された場合、<code>slice</code> は列の最後 (<code><var>arr</var>.length</code>) までを取り出します。</dd>
 <dd><code><var>end</var></code> がシーケンスの長さを超えた場合も、<code>slice</code> はシーケンスの最後 (<code><var>arr</var>.length</code>) までを取り出します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>取り出された要素を含む新しい配列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>slice</code> は元の配列を変更せず、元の配列から要素をシャローコピー (1 段階の深さのコピー) した新しい配列を返します。元の配列の要素は以下のように返される配列にコピーされます。</p>

<ul>
 <li>(実際のオブジェクトではない) オブジェクトの参照については、<code>slice</code> はオブジェクトの参照を新しい配列にコピーします。元の配列も新しい配列も同じオブジェクトを参照します。参照されたオブジェクトが修正された場合、その変更は新しい配列と元の配列の両方に現れます。</li>
 <li>({{jsxref("String")}}, {{jsxref("Number")}}, {{jsxref("Boolean")}} オブジェクトではなく) 文字列、数値、真偽値では、<code>slice</code> は値を新しい配列にコピーします。一方の配列の文字列や数値に変更を加えても、他の配列に影響はしません。</li>
</ul>

<p>一方の配列に新しい要素が追加されても、他方の配列に影響はしません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Return_a_portion_of_an_existing_array" name="Return_a_portion_of_an_existing_array">既存の配列の一部を返す</h3>

<pre class="brush: js notranslate">let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
</pre>

<h3 id="Using_slice" name="Using_slice">slice の使用</h3>

<p>以下の例で、<code>slice</code> は新しい配列 <code>newCar</code> を <code>myCar</code> から生成します。両者ともオブジェクト <code>myHonda</code> への参照を含んでいます。<code>myHonda</code> の色が purple に変更されると、両方の要素がその変更を反映します。</p>

<pre class="brush: js notranslate">// slice を使って、myCar から newCar を生成する。
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// myCar, newCar と両方の要素から参照されている myHonda の color の
//  値を書きだす。
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// myHonda の色を変える。
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// 両方の要素から参照されている myHonda の color を書き出す。
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
</pre>

<p>このスクリプトの出力は次の様になります。</p>

<pre class="notranslate">myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
</pre>

<h3 id="Array-like_objects" name="Array-like_objects">配列状オブジェクト</h3>

<p><code>slice</code> メソッドを呼び出すことで、配列状オブジェクトやコレクションを新しい配列に変換することができます。メソッドをオブジェクトに {{jsxref("Function.prototype.bind", "bind")}} するだけです。配列状オブジェクトの一例として、{{jsxref("Functions/arguments", "arguments")}} が挙げられます。以下に例を示します。</p>

<pre class="brush: js notranslate">function list() {
  return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]
</pre>

<p><ruby>結合<rp> (</rp><rt>Binding</rt><rp>) </rp></ruby>は {{jsxref("Function.prototype")}} の {{jsxref("Function.prototype.call", "call()")}} メソッドを用いて行うことができますし、<code>[].slice.call(arguments)</code> を <code>Array.prototype.slice.call</code> の代わりに使って減らすこともできます。</p>

<p>いずれにせよ、{{jsxref("Function.prototype.bind", "bind")}} を使用することで簡略化することができます。</p>

<pre class="brush: js notranslate">let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)

function list() {
  return slice(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.slice', 'Array.prototype.slice')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Array.slice")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.splice()")}}</li>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
