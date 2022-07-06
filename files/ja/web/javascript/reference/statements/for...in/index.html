---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...in
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>for...in</code> 文</strong>は、キーが文字列であるオブジェクトの<a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">列挙可能プロパティ</a>すべてに対して、継承された列挙可能プロパティも含めて反復処理を行います (<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a> がキーになったものは無視します)。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forin.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">for (<var>variable</var> in <var>object</var>)
  文</pre>

<dl>
 <dt><code><var>variable</var></code></dt>
 <dd>反復するごとに、 <code><var>variable</var></code> に異なるプロパティ名が代入されます。</dd>
 <dt><code><var>object</var></code></dt>
 <dd>このオブジェクトの列挙可能プロパティに対して反復処理がされます。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>for...in</code> ループは、列挙可能なシンボル以外のプロパティに対してのみ反復処理を行います。 <code>Array</code> や <code>Object</code> のような組込みコンストラクターから生成したオブジェクトは、列挙可能でないプロパティを <code>Objet.prototype</code> や <code>String.prototype</code> から、例えば {{jsxref("String")}} の {{jsxref("String.indexOf", "indexOf()")}} メソッドや {{jsxref("Object")}} の {{jsxref("Object.toString", "toString()")}} メソッドを継承しています。このループは、対象オブジェクト自身とそのオブジェクトがプロトタイプから継承しているすべての列挙可能なプロパティを反復します (プロトタイプチェーンで対象オブジェクトに近いプロパティは、親プロトタイプのプロパティを上書きします)。</p>

<h3 id="Deleted_added_or_modified_properties" name="Deleted_added_or_modified_properties">プロパティの変更や削除</h3>

<p><code>for...in</code> ループは、任意の順序でオブジェクトのプロパティに対して反復します (なぜ繰り返しの見かけの順序に依存できないのかについては、詳細は {{jsxref("Operators/delete", "delete")}} 演算子を見てください)。</p>

<p>もしプロパティがある反復で修正されて、その後に訪問されたなら、ループにより公開される値は後の時点での値となります。訪問される前に削除されたプロパティは、それから後には訪問されません。オブジェクトに対する反復が起きている中でそのオブジェクトに追加されたプロパティは、訪問されるかもしれませんし反復から省略されるかもしれません。</p>

<p>一般的に、現在訪問しているプロパティ以外のものに関しては、反復の間はオブジェクトにプロパティを追加、修正、または削除しないのが一番です。追加したプロパティが訪問されるか、(現在のもの以外の)修正したプロパティが修正される前または後に訪問されるか、または削除したプロパティが削除される前に訪問されるかといったことには、何の保証もありません。</p>

<h3 id="Array_iteration_and_for...in" name="Array_iteration_and_for...in">配列の繰り返しと for...in</h3>

<div class="note">
<p><strong>注:</strong> <code>for...in</code> はインデックスの順序が重要となる {{jsxref("Array", "配列")}} の繰り返しには使うべきではありません。</p>
</div>

<p>配列のインデックスは単に整数値の名前で列挙できるプロパティであり、そうでないと一般的なオブジェクトのプロパティとして一意になりません。 <code>for...in</code> は特定の順序で並べられる保証はありません。 <code>for...in</code> ループ文はすべての列挙できるプロパティを返し、その中には非整数型やそれを引き継いだインデックス名があります。</p>

<p>繰り返しの順序が実装依存なため、配列の繰り返しは要素を一貫した順番で参照することになるとは限りません。このため、アクセスの順番が大事となる配列を繰り返す時には、数値のインデックスでの {{jsxref("Statements/for", "for")}} ループ (か {{jsxref("Array.prototype.forEach()")}} か {{jsxref("Statements/for...of", "for...of")}} ループ) を使った方が良いです。</p>

<h3 id="Iterating_over_own_properties_only" name="Iterating_over_own_properties_only">独自のプロパティだけで繰り返す</h3>

<p>オブジェクトに付属するプロパティだけを考えればよい場合、 {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} を使うか、 {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} を実行してチェックします({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable")}} も使用できます)。または、外部のコードインターフェイスをまったく知らない場合は、チェックメソッドを備えた組み込みの prototypes を継承できます。</p>

<h2 id="Why_Use_for...in" name="Why_Use_for...in">for...in を使用する理由</h2>

<p><code>for...in</code> はオブジェクトのプロパティを反復するために作られたものであり、配列での使用は推奨されず、 <code>Array.prototype.forEach()</code> や <code>for...of</code> などの選択肢があるわけですが、それでは <code>for...in</code> を使用する場面は何なのでしょうか？</p>

<p>最も具体的な使い方はデバッグ目的であるかもしれません。これは、オブジェクトのプロパティを (コンソールに出力するなどして) 簡単にチェックする方法になります。データを格納するには配列の方が実用的な場合が多いですが、データを扱うにはキーと値のペアが好まれる状況では (プロパティが "キー" として機能します)、それらのキーが特定の値を保持しているかどうかをチェックしたい場合があるかもしれません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_for...in" name="Using_for...in">for...in の使用</h3>

<p>以下の <code>for...in</code> ループは、オブジェクトの列挙可能なシンボルではないプロパティをすべて反復し、そのプロパティ名と値を文字列で記録します。</p>

<pre class="brush: js notranslate">var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"</pre>

<h3 id="Iterating_own_properties" name="Iterating_own_properties">自身のプロパティの反復処理</h3>

<p>次の関数では {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}: の使い方を例示しています。継承されたプロパティは表示されません。</p>

<pre class="brush: js notranslate">var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
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
   <td>{{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.for_in")}}</p>

<h3 id="Compatibility_Initializer_expressions_in_strict_mode" name="Compatibility_Initializer_expressions_in_strict_mode">厳格モードにおける初期化式の互換性について</h3>

<p>Firefox 40 より前では、<code>for...in</code> ループ内で初期化式 (<code>i=0</code>) が使用可能でした。</p>

<pre class="brush: js example-bad notranslate">var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
</pre>

<p>この標準外の動作はバージョン 40 以降では無視され、<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>での {{jsxref("SyntaxError")}} ("<a href="/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer">for-in loop head declarations may not have initializers</a>") エラーが表示されます (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=748550">bug 748550</a> および <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1164741">bug 1164741</a>)。</p>

<p>v8 (Chrome), Chakra (IE/Edge), JSC (WebKit/Safari) といった他のエンジンも同様に非標準のふるまいを削除するよう開発しています。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/for...of", "for...of")}} - プロパティ値に対して繰り返す同様の文</li>
 <li>{{jsxref("Statements/for_each...in", "for each...in")}} - <code>for...in</code> に似ていますが、プロパティ名そのものではなく、オブジェクトのプロパティの値に対して反復します。(廃止されました)</li>
 <li>{{jsxref("Statements/for", "for")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">ジェネレーター式</a> (<code>for...of</code> とあわせて利用できます)</li>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
</ul>
