---
title: in
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Language feature
  - Operator
  - Relational Operators
translation_of: Web/JavaScript/Reference/Operators/in
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>in</code> 演算子</strong>は、指定されたプロパティが指定されたオブジェクトにある場合に <code>true</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>prop</var> in <var>object</var></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>prop</var></code></dt>
 <dd>プロパティ名または配列のインデックスを表す文字列式またはシンボルです（シンボルではない場合は、文字列に強制変換されます）。</dd>
</dl>

<dl>
 <dt><code><var>object</var></code></dt>
 <dd>オブジェクト（またはそのプロトタイプチェーン）に、指定された名前（<code><var>prop</var></code>）のプロパティが含まれているかどうかを確認するオブジェクト。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_usage" name="Basic_usage">基本的な使い方</h3>

<p>次の例で <code>in</code> 演算子の使用法を示します。</p>

<pre class="brush:js notranslate">// Arrays
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // true を返す
3 in trees        // true を返す
6 in trees        // false を返す
'bay' in trees    // false を返す (インデックスの指す値ではなく、インデックスの数字を指定しなければならない)
'length' in trees // true を返す (length は Array のプロパティ)
Symbol.iterator in trees // true を返す (配列は反復可能。ES2015 以上で動作する)

// 定義済みオブジェクト
'PI' in Math          // true を返す

// ユーザー定義オブジェクト
let mycar = {make: 'Honda', model: 'Accord', year: 1998};
'make' in mycar  // true を返す
'model' in mycar // true を返す
</pre>

<p><code>in</code> 演算子の右側には、オブジェクトを指定しなければなりません。例えば、<code>String</code> コンストラクタで作成した文字列は指定できますが、文字列リテラルは指定できません。</p>

<pre class="brush:js notranslate">let color1 = new String('green');
'length' in color1 // true を返す

let color2 = 'coral';
// エラーが発生 (color2 は String オブジェクトではありません)
'length' in color2
</pre>

<h3 id="Using_in_with_deleted_or_undefined_properties" name="Using_in_with_deleted_or_undefined_properties">削除済みあるいは未定義状態のプロパティへの <code>in</code> の使用</h3>

<p><code><a href="/ja/docs/JavaScript/Reference/Operators/delete" title="JavaScript/Reference/Operators/Special/delete">delete</a></code> 演算子で削除されたプロパティについて、<code>in</code> 演算子は <code>false</code> を返します。</p>

<pre class="brush:js notranslate">let mycar = {make: 'Honda', model: 'Accord', year: 1998};
delete mycar.make;
'make' in mycar;  // false を返す

let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
delete trees[3];
3 in trees; // false を返す
</pre>

<p>{{jsxref("Global_Objects/undefined", "undefined")}} を設定しているが削除されていないプロパティについて、<code>in</code> 演算子は true を返します。</p>

<pre class="brush:js notranslate">let mycar = {make: 'Honda', model: 'Accord', year: 1998};
mycar.make = undefined;
'make' in mycar;  // true を返す
</pre>

<pre class="brush:js notranslate">let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
trees[3] = undefined;
3 in trees; // true を返す
</pre>

<p><code>in</code> 演算子は、空の配列スロットに対して <code>false</code> を返します。直接アクセスしても <code>undefined</code> が返されます。</p>

<pre class="brush:js notranslate">let empties = new Array(3)
empties[2] // undefined を返す
2 in empties  // false を返す
</pre>

<p>これを避けるためには、新しい配列が常に空でない値で埋められるようにするか、配列の終わりを超えてインデックスに書き込まないようにします。</p>

<pre class="brush:js notranslate">let empties = new Array(3).fill(undefined)
2 in empties  // true を返す
</pre>

<h3 id="Inherited_properties" name="Inherited_properties">継承されたプロパティ</h3>

<p><code>in</code> 演算子は、プロトタイプチェーンのプロパティに対して <code>true</code> を返します。(<em>継承されていない</em>プロパティのみをチェックする場合は、代わりに {{jsxref("Object.prototype.hasOwnProperty()")}} を使用してください)。</p>

<pre class="brush:js notranslate">'toString' in {}  // returns true
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.in")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Reflect.has()")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
</ul>
