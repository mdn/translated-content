---
title: 等価 (==)
slug: Web/JavaScript/Reference/Operators/Equality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Equality
---
<div>{{jsSidebar("Operators")}}</div>

<p>等価演算子 (<code>==</code>) は、二つのオペランドが等しいことを検査し、論理値で結果を返します <a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価</a>演算子とは異なり、オペランドの型が異なる場合には型の変換を試みてから比較を行います。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">x == y
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>等価演算子 (<code>==</code> および <code>!=</code>) は、<a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">抽象等価比較アルゴリズム</a>を使用して二つのオペランドを比較します。これは、およそ次のようにまとめることができます。</p>

<ul>
 <li>両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り <code>true</code> を返します。</li>
 <li>一方のオペランドが <code>null</code> で、もう一方が <code>undefined</code> であった場合は <code>true</code> を返します。</li>
 <li>オペランドの型が異なる場合は、比較前に同じ型に変換を試みます。
  <ul>
   <li>数値と文字列を比較する場合、文字列を数値に変換しようとします。</li>
   <li>一方のオペランドが <code>Boolean</code> である場合、その Boolean のオペランドが <code>true</code> である場合は 1 に、 <code>false</code> である場合は +0 に変換します。</li>
   <li>オペランドのうちの1つがオブジェクトで、もう一方が数値または文字列である場合は、そのオブジェクトの <code>valueOf()</code> および <code>toString()</code> メソッドを使用してプリミティブに変換しようとします。</li>
  </ul>
 </li>
 <li>オペランドが同じ型である場合は、次のよう比較します。
  <ul>
   <li><code>String</code>: 両方のオペランドが同じ文字を同じ順序で持っている場合のみ、 <code>true</code> を返します。</li>
   <li><code>Number</code>: 数値型は同じ値の数値である場合のみ、 <code>true</code> を返します。 <code>+0</code> と <code>-0</code> は同じ値と見なされます。一方のオペランドが <code>NaN</code> である場合は <code>false</code> を返します。</li>
   <li><code>Boolean</code>: 両方のオペランドが共に <code>true</code> であるか、共に <code>false</code> である場合のみ <code>true</code> になります。</li>
  </ul>
 </li>
</ul>

<p>この演算子と<a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価</a> (<code>===</code>) 演算子の最も顕著な違いは、厳密等価演算子が型変換を試みない点です。厳密等価演算は、オペランドの型が異なる場合は常に異なるものと見なします。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Comparison_with_no_type_conversion" name="Comparison_with_no_type_conversion">型変換がない場合の比較</h3>

<pre class="brush: js notranslate">1 == 1;              // true
"hello" == "hello";  // true</pre>

<h3 id="Comparison_with_type_conversion" name="Comparison_with_type_conversion">型変換がある場合の比較</h3>

<pre class="brush: js notranslate">"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false</pre>

<h3 id="オブジェクトの比較">オブジェクトの比較</h3>

<pre class="brush: js notranslate">const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true</pre>

<h3 id="Comparing_strings_and_String_objects" name="Comparing_strings_and_String_objects">文字列と String オブジェクトの比較</h3>

<p><code>new String()</code> を使用して構築された文字列はオブジェクトであることに注意してください。文字列リテラルとの比較を行うと、 <code>String</code> オブジェクトは文字列リテラルに変換され、その中身が比較されます。ただし、両方のオペランドが <code>String</code> オブジェクトであった場合は、オブジェクトとして比較され、同じオブジェクトを参照している場合だけ比較に成功します。</p>

<pre class="brush: js notranslate">const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true</pre>

<h3 id="Comparing_Dates_and_strings" name="Comparing_Dates_and_strings">Date と文字列の比較</h3>

<pre class="brush: js notranslate">const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-equality-operators', 'Equality operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.strict_inequality")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Inequality">不等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価演算子</a></li>
</ul>
