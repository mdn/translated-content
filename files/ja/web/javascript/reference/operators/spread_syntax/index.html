---
title: スプレッド構文
slug: Web/JavaScript/Reference/Operators/Spread_syntax
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Language feature
  - Reference
  - イテレーター
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>スプレッド構文</strong> (<code>...</code>) を使うと、配列式や文字列などの反復可能オブジェクトを、0 個以上の引数 (関数呼び出しの場合) や要素 (配列リテラルの場合) を期待された場所で展開したり、オブジェクト式を、0 個以上のキーと値のペア (オブジェクトリテラルの場合) を期待された場所で展開したりすることができます。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>関数呼び出しの場合:</p>

<pre class="syntaxbox notranslate"><var>myFunction</var>(...<var>iterableObj</var>);
</pre>

<p>配列リテラルや文字列の場合:</p>

<pre class="syntaxbox notranslate">[...<var>iterableObj</var>, '4', 'five', 6];</pre>

<p>オブジェクトリテラルの場合 (ECMAScript 2018 の新機能)</p>

<pre class="syntaxbox notranslate">let <var>objClone</var> = { ...<var>obj</var> };</pre>

<h2 id="Rest_syntax_parameters" name="Rest_syntax_parameters">残余構文 (引数)</h2>

<p>残余構文はスプレッド構文と外見がよく似ていますが、配列やオブジェクトの<em>分割代入</em>に使われます。</p>

<p>こちらはスプレッド構文とは逆の働きといえます。スプレッド構文が要素を展開するのに対して、残余構文は複数の要素を集約して 1 つのオブジェクトに「濃縮」します。{{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Spread_in_function_calls" name="Spread_in_function_calls">関数呼び出しでの展開</h3>

<h4 id="Replace_apply" name="Replace_apply">apply() を置き換える</h4>

<p>配列の要素を引数にして関数を呼び出すには {{jsxref("Function.prototype.apply()")}} を使うのが一般的です。</p>

<pre class="brush: js notranslate">function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);</pre>

<p>スプレッド構文を使うと、上のコードは次のように書くことができます。</p>

<pre class="brush: js notranslate">function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);</pre>

<p>スプレッド構文は、引数の何番目でも使えます。また、複数回使えます。</p>

<pre class="brush: js notranslate">function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);</pre>

<h4 id="Apply_for_new" name="Apply_for_new">new 演算子の適用</h4>

<p>{{jsxref("Operators/new", "new")}} によってコンストラクターを呼び出すとき、配列と <code>apply()</code> を<strong>直接</strong>使用することはできません (<code>apply()</code> は <code>[[Call]]</code> を実行するのであり <code>[[Construct]]</code> ではない)。ただし、配列はスプレッド構文のおかげで簡単に <code>new</code> を使用することができます。</p>

<pre class="brush: js notranslate">let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
</pre>

<p>スプレッド構文を使わずに同じ結果を得るには、専用の関数を使う<strong>間接的</strong>な手段を取らざるをえません。</p>

<pre class="brush: js notranslate">function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

let myArguments = ["hi", "how", "are", "you", "mr", null];
let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}</pre>

<h3 id="Spread_in_array_literals" name="Spread_in_array_literals">配列リテラルでのスプレッド構文</h3>

<h4 id="A_more_powerful_array_literal" name="A_more_powerful_array_literal">より強力な配列リテラル</h4>

<p>スプレッド構文を使用しない場合、既存の配列を一部として使用して新しい配列を作成するには、配列リテラル構文は十分ではなく、{{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}} などを組み合わせて使う高圧的なコードを使用しなければなりません。</p>

<pre class="brush: js notranslate">let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
</pre>

<p>関数の引数と同様に、<code>...</code> は配列リテラルのどこでも、何回でも使えます。</p>

<h4 id="Copy_an_array" name="Copy_an_array">配列を複製する</h4>

<pre class="brush: js notranslate">let arr = [1, 2, 3];
let arr2 = [...arr]; // arr.slice() のような動きです

arr2.push(4);
//  arr2 は [1, 2, 3, 4] になります
//  arr は変更されません
</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> コピーは 1 段階の深さで行われます。そのため、次の例のような多次元配列のようなオブジェクトをコピーする場合には適さないでしょう。({{jsxref("Object.assign()")}} についても同じことが言えます。)</p>

<pre class="brush: js example-bad notranslate">let a = [[1], [2], [3]];
let b = [...a];

b.shift().shift();
//  1

// あらら、配列 'a' も影響を受けちゃった。
a
//  [[], [2], [3]]
</pre>
</div>

<h4 id="A_better_way_to_concatenate_arrays" name="A_better_way_to_concatenate_arrays">配列を連結するより良い方法</h4>

<p>ある配列を既存の配列の末尾に連結するには、{{jsxref("Array.prototype.concat()")}} がよく使われます。スプレッド構文を使用しないと、これは次のように行われます。</p>

<pre class="brush: js notranslate">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// arr2 のすべての要素を arr1 に追加する
arr1 = arr1.concat(arr2);</pre>

<p>スプレッド構文を使うと、次のように書けます。</p>

<pre class="brush: js notranslate">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 は [0, 1, 2, 3, 4, 5] となる
// 注: これ以外に const を使用すると、TypeError (invalid assignment) が発生します
</pre>

<p>{{jsxref("Array.prototype.unshift()")}} は、値の配列を既存の配列の先頭に挿入するためによく使われます。スプレッド構文を使用しないと、これは次のように行われます。</p>

<pre class="brush: js notranslate">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  arr2 のすべての要素を arr1 へ移植します
Array.prototype.unshift.apply(arr1, arr2)

//  arr1 is now [3, 4, 5, 0, 1, 2]</pre>

<p>スプレッド構文を使うと、次のようになります。</p>

<pre class="brush: js notranslate">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> <code>unshift()</code> とは異なり、これは新しい <code>arr1</code> を生成しており、その場では元の <code>arr1</code> を変更しません</p>
</div>

<h3 id="Spread_in_object_literals" name="Spread_in_object_literals">Object リテラルで使う</h3>

<p><a href="https://github.com/tc39/proposal-object-rest-spread">Rest/Spread Properties for ECMAScript</a> proposal (ES2018) では、{{jsxref("Operators/Object_initializer", "オブジェクトリテラル", 1)}}でのスプレッド構文が追加されています。スプレッド構文の対象となるオブジェクトの列挙可能なプロパティを、新しいオブジェクトにコピーします。</p>

<p>浅いコピー (プロトタイプを除く) の作成や、マージしたオブジェクトの作成が {{jsxref("Object.assign()")}} を使うよりも短いコードで書けます。</p>

<pre class="brush: js notranslate">let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }</pre>

<p>{{jsxref("Object.assign()")}} は{{jsxref("Functions/set", "セッター")}}を起動しますが、スプレッド構文は起動しないことに注意してください。</p>

<p>スプレッド構文は {{jsxref("Object.assign()")}} 関数を置き換えたり模倣することはできないことに注意してください。</p>

<pre class="brush: js notranslate">let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) =&gt; ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }</pre>

<p>上記の例では、スプレッド構文は期待通りに動作しません。残りの引数があるため、引数の<em>配列</em>がオブジェクトリテラルにとして展開されます。</p>

<h3 id="Only_for_iterables" name="Only_for_iterables">反復可能オブジェクトにのみ利用可能</h3>

<p>オブジェクト自体は反復可能ではありませんが、配列の中で使用したり、<code>map()</code>, <code>reduce()</code>, <code>assign()</code> などの反復関数と共に使用したりすることで反復可能になります。2 つのオブジェクトをスプレッド演算子で結合する場合は、結合時に別の反復処理関数を使用することを前提としています。</p>

<p>スプレッド構文 (スプレッドプロパティの場合を除く) は、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator">反復可能</a>オブジェクトにのみ適用できます。</p>

<pre class="brush: js notranslate">let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable
</pre>

<h3 id="Spread_with_many_values" name="Spread_with_many_values">大量の値を展開する場合</h3>

<p>JavaScript エンジンには、引数の個数に上限があります。関数呼び出しでのスプレッド構文では、引数の個数がその上限を超えてしまう可能性に留意してください。詳細は {{jsxref("Function.prototype.apply", "apply()")}} のページを参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array-initializer', 'Array initializer')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-initializer', 'Object initializer')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.spread")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Functions/rest_parameters", "残余引数", "", 1)}} (also ‘<code>...</code>’)</li>
 <li>{{jsxref("Function.prototype.apply()")}} (also ‘<code>...</code>’)</li>
</ul>
