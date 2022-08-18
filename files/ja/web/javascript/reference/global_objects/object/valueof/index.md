---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - indexof
translation_of: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> メソッドは、指定されたオブジェクトのプリミティブな値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>object</var>.valueOf()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたオブジェクトのプリミティブ値を返します。</p>

<div class="blockIndicator note">
<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus">(単項) プラス符号</a>を <code>valueOf</code> の省略形として使用することができる場合があります。例えば、 <code>+new Number()</code> などです。<a href="#Using_unary_plus">単項プラスの使用</a>も参照してください。</p>
</div>

<h2 id="Description" name="Description">解説</h2>

<p>JavaScript は <code>valueOf</code> メソッドを、オブジェクトをプリミティブな値に変換するときに呼び出します。あなたが自分で <code>valueOf</code> メソッドを実行する必要はほとんどなく、プリミティブな値が期待される場面にオブジェクトが出くわしたとき JavaScript が自動的に実行します。</p>

<p>既定で、 <code>valueOf</code> メソッドは <code>Object</code> の子孫にあたるあらゆるオブジェクトに継承されています。全ての組み込みコアオブジェクトは適切な値を返すためにこのメソッドを上書きしています。もしオブジェクトがプリミティブな値を持たない場合、 <code>valueOf</code> はオブジェクト自身を返します。</p>

<p>あなたのコードで組み込みオブジェクトをプリミティブな値にするために <code>valueOf</code> を呼ぶことができます。また、カスタムオブジェクトを作成した時に <code>Object.prototype.valueOf()</code> を上書きしてデフォルトの <code>Object</code> のメソッドの代わりにカスタムメソッドを呼び出すようにすることができます。</p>

<h3 id="Overriding_valueOf_for_custom_objects" name="Overriding_valueOf_for_custom_objects">カスタムオブジェクトでの valueOf の上書き</h3>

<p>既定の <code>valueOf</code> メソッドに代わって呼び出される関数を作ることができます。その関数は引数を取ってはなりません。</p>

<p><code>MyNumberType</code> というオブジェクト型があって、それに <code>valueOf</code> メソッドを作りたいとしましょう。以下のコードはユーザー定義関数をオブジェクトの <code>valueOf</code> メソッドに代入しています。</p>

<pre class="brush: js notranslate">MyNumberType.prototype.valueOf = function() { return customPrimitiveValue; };</pre>

<p>上のコードにより、 <code>MyNumberType</code> 型のオブジェクトがプリミティブな値で表されるべき文脈では常に、 JavaScript は自動的に上のコードで定義された関数を呼び出します。</p>

<p>オブジェクトの <code>valueOf</code> メソッドはたいてい JavaScript によって実行されますが、あなた自身も以下のように実行できます。</p>

<pre class="brush: js notranslate"><var>myNumberType</var>.valueOf()</pre>

<div class="note">
<p><strong>注:</strong>文字列型の文脈にあるオブジェクトは {{jsxref("Object.toString", "toString()")}} メソッドを通じて変換されますが、これは {{jsxref("String")}} オブジェクトが <code>valueOf</code> を使って文字列型に変換されるのとは違います。すべてのオブジェクトは、 "<code>[object <em>type</em>]</code>" としか出力されないかもしれませんが、文字列変換できます。しかし多くのオブジェクトは数値や真偽値や関数には変換できません。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf_on_custom_types" name="Using_valueOf_on_custom_types">カスタム型での valueOf の使用</h3>

<pre class="brush: js notranslate">function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
</pre>

<h3 id="Using_unary_plus" name="Using_unary_plus">単項プラスの使用</h3>

<pre class="brush: js notranslate">+"5" // 5 (文字列から数値へ)
+"" // 0 (文字列から数値へ)
+"1 + 2" // NaN (評価不能)
+new Date() // (new Date()).getTime() と同じ
+"foo" // NaN (文字列から数値へ)
+{} // NaN
+[] // 0 (toString() は空の文字列リストを返す)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0
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
   <td>{{SpecName('ESDraft', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.valueOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
 <li>{{jsxref("parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
