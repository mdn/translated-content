---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/pop
---
<div>{{JSRef}}</div>

<p><strong><code>pop()</code></strong> メソッドは、配列から<strong>最後</strong>の要素を取り除き、その要素を返します。このメソッドは配列の長さを変化させます。</p>

<div>{{EmbedInteractiveExample("pages/js/array-pop.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arrName</var>.pop()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>配列の最後の要素。配列が空だった場合は、{{jsxref("undefined")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>pop</code> メソッドは配列の最後の要素を取り除き、呼び出し元にその値を返します。</p>

<p><code>pop</code> は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。ゼロから始まる数値プロパティであり、連続した連なりの最後を反映している <code>length</code> プロパティを含まないオブジェクトでは効果がないかもしれません。</p>

<p>空の配列に対して <code>pop()</code> を実行した場合は、{{jsxref("undefined")}} を返します。</p>

<p>{{jsxref("Array.prototype.shift()")}} は <code>pop</code> と同様の動作をしますが、配列の最初の要素に適用されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Removing_the_last_element_of_an_array" name="Removing_the_last_element_of_an_array">配列の最後の要素を取り除く</h3>

<p>以下のコードは、4 つの要素を含んだ配列 <code>myFish</code> を生成し、その後その最後の要素を取り除き、変数に代入しています。</p>

<pre class="brush: js notranslate">var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'</pre>

<h3 id="Using_apply_or_call_on_array-like_objects" name="Using_apply_or_call_on_array-like_objects">配列風のオブジェクトでの apply( ) や call ( ) の使用</h3>

<p>以下のコードは、4 つの要素と長さのパラメータを含む配列のような <code>myFish</code> オブジェクトを作成し、最後の要素を削除して長さのパラメータをデクリメントします。</p>

<pre class="brush: js notranslate">var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.pop', 'Array.prototype.pop')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.pop")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.push()")}}</li>
 <li>{{jsxref("Array.prototype.shift()")}}</li>
 <li>{{jsxref("Array.prototype.unshift()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
 <li>{{jsxref("Array.prototype.splice()")}}</li>
</ul>
