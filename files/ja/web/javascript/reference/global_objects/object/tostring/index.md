---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toString
---
<div>{{JSRef}}</div>

<p><code><strong>toString()</strong></code> メソッドは、オブジェクトを表す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>obj</var>.toString()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>オブジェクトを表す文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>すべてのオブジェクトは <code>toString</code> メソッドを持ち、オブジェクトが文字列値として表される場面や、文字列が期待される構文で参照されたときに自動的に呼び出されます。既定で、 <code>toString()</code> メソッドは <code>Object</code> の子孫にあたるあらゆるオブジェクトに継承されています。このメソッドがカスタムオブジェクト中で上書きされていない場合、 <code>toString()</code> は "<code>[object <var>type</var>]</code>" という文字列を返します (<code><var>type</var></code> は そのオブジェクトの型)。以下のコードがこれを例示しています。</p>

<pre class="brush: js notranslate">const o = new Object();
o.toString(); // [object Object] を返す
</pre>

<div class="note">
<p><strong>注:</strong> JavaScript 1.8.5 から、 <code>toString()</code> を {{jsxref("null")}} に対して呼び出した場合には <code>[object <em>Null</em>]</code> を、 {{jsxref("undefined")}} に対して呼び出した場合には <code>[object <em>Undefined</em>]</code> を返すようになり、これは ECMAScript 5<sup>th</sup> Edition とその後のエラッタによって定義されました。</p>

<p><a href="#Using_toString_to_detect_object_class">toString() を使用したオブジェクトクラスの検出</a>を参照してください。</p>
</div>

<h2 id="Parameters" name="Parameters">引数</h2>

<p>Number と BigInt の <code>toString()</code> は、オプションの引数 <code>radix</code> で基数の値を取り、最小値は2で最大値は36です。</p>

<p><code>radix</code> を使用すると、十進数 (1,2,3,4,5,.........) を他の基数の数字に変換することができます。以下の例では十進数を二進数 (バイナリ) に変換しています。</p>

<pre class="notranslate">let baseTenInt = 10;
console.log(baseTenInt.toString(2));
// 期待される結果は "1010"
</pre>

<p>BigInt についても同じです。</p>

<pre class="brush: js notranslate">let bigNum = BigInt(20);
console.log(bigNum.toString(2));
// 期待される結果は "10100"</pre>

<p>よくある基数としては次のものがあります。</p>

<ul>
 <li>2 は<a href="https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E6%B3%95" rel="noopener">二進数</a>になります。</li>
 <li>8 は<a href="https://ja.wikipedia.org/wiki/%E5%85%AB%E9%80%B2%E6%B3%95" rel="noopener">八進数</a>になります。</li>
 <li>10 は <a href="https://ja.wikipedia.org/wiki/%E5%8D%81%E9%80%B2%E6%B3%95" rel="noopener">十真数</a>になります。</li>
 <li>16 は <a href="https://ja.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E9%80%B2%E6%B3%95" rel="noopener">十六進数</a>になります。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Overriding_the_default_toString_method" name="Overriding_the_default_toString_method">既定の toString メソッドの上書き</h3>

<p>既定の <code>toString()</code> メソッドに代わって呼び出される関数を作ることができます。 <code>toString()</code> メソッドは引数を取らず、文字列を返す必要があります。 <code>toString()</code> メソッドを作成した場合は好きな文字列を返すことができますが、オブジェクトに関する情報を伝えるのが一番役に立つでしょう。</p>

<p>以下のコードは <code>Dog</code> オブジェクト型を定義し、 <code>Dog</code> 型のオブジェクト <code>theDog</code> を生成しています。</p>

<pre class="brush: js notranslate">function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
</pre>

<p>このカスタムオブジェクト上で <code>toString()</code> メソッドを呼び出した場合、メソッドは {{jsxref("Object")}} から継承された既定値を返します。</p>

<pre class="brush: js notranslate">theDog.toString(); // [object Object] を返す
</pre>

<p>以下のコードでは、 <code>dogToString()</code> を生成および割り当てし、既定の <code>toString()</code> メソッドを上書きします。この関数はオブジェクトの <code>name</code>, <code>breed</code>, <code>color</code>, <code>sex</code> を "<code>property = value;</code>" の形で含む文字列を生成します。</p>

<pre class="brush: js notranslate">Dog.prototype.toString = function dogToString() {
  const ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}
</pre>

<p>または、 ES6 の {{jsxref("Template_literals", "テンプレート文字列", "", 1)}}を使用した例です。</p>

<pre class="brush: js notranslate">Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
</pre>

<p>前者のコードの中で、 <code>theDog</code> が文字列の文脈で使用されるたびに、 JavaScript は自動的に <code>dogToString()</code> 関数を呼び出し、以下の文字列を返します。</p>

<pre class="brush: js notranslate">"Dog Gabby is a female chocolate Lab"
</pre>

<h3 id="Using_toString_to_detect_object_class" name="Using_toString_to_detect_object_class">toString() を使用したオブジェクトクラスの判別</h3>

<p><code>toString()</code> はすべてのオブジェクトに対し、(既定では) そのクラスを得るために使用することができます。</p>

<p>すべてのオブジェクトで <code>Object.prototype.toString()</code> を使うためには、 {{jsxref("Function.prototype.call()")}} または {{jsxref("Function.prototype.apply()")}} を、第1引数 (<code>thisArg</code>) に調べたいオブジェクトを渡して呼び出す必要があります。</p>

<pre class="brush: js notranslate">const toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
</pre>

<p>このような <code>toString()</code> の使用は信頼できません。オブジェクトは <code>Object.prototype.toString()</code> の動作を {{jsxref("Symbol.toStringTag")}} プロパティを定義することで変更でき、それによって次のように予想外の動作になります。</p>

<pre class="brush: js notranslate">const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]
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
   <td>{{SpecName('ESDraft', '#sec-object.prototype.tostring', 'Object.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Object.toString")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toSource()")}}</li>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
