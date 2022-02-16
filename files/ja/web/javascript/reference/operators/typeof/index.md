---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - Unary
translation_of: Web/JavaScript/Reference/Operators/typeof
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>typeof</code></strong> 演算子は、未評価のオペランドの型を示す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>typeof</code> 演算子の後に、オペランドを続けて書きます。</p>

<pre class="syntaxbox notranslate">typeof <var>operand</var>
typeof(<var>operand</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p><code><var>operand</var></code> は、オブジェクトまたは<a href="/ja/docs/Glossary/Primitive">プリミティブ</a>型を表す式を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>以下は <code>typeof</code> が返す事が出来る値 (文字列) の一覧表です。型とプリミティブの詳細については、<a href="/ja/docs/Web/JavaScript/Data_structures">JavaScript のデータ構造</a>のページも参照してください。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">型</th>
   <th scope="col">返値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/ja/docs/Glossary/Undefined">Undefined</a></td>
   <td><code>"undefined"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/Null">Null</a></td>
   <td><code>"object"</code> (<a href="#typeof_null">下記参照</a>)</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/Boolean">真偽値</a></td>
   <td><code>"boolean"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/Number">数値</a></td>
   <td><code>"number"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/BigInt">BigInt</a> (ECMAScript 2020 の新機能)</td>
   <td><code>"bigint"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/String">文字列</a></td>
   <td><code>"string"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/Symbol">シンボル</a> (ECMAScript 2015 の新機能)</td>
   <td><code>"symbol"</code></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Glossary/Function">Function</a> オブジェクト (implements [[Call]] in ECMA-262 terms)</td>
   <td><code>"function"</code></td>
  </tr>
  <tr>
   <td>その他のオブジェクト</td>
   <td><code>"object"</code></td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>メモ:</strong> ECMAScript 2019 およびそれ以前の実装では、呼び出し可能な非標準のオブジェクトに対して、<code>typeof</code> が任意の実装定義の文字列値を返すことを許可していました。</p>

<p>実際にこれを利用したブラウザーとして知られているのは、古い Internet Explorer だけです。（<a href="#IE-specific_notes">下記参照</a>）</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_usage" name="Basic_usage">基本的な使い方</h3>

<pre class="brush: js notranslate">// 数値
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number';            // "Not-A-Number" であるにもかかわらず。
typeof Number('1') === 'number';    // Number は数値に型強制できない値を含めて、
typeof Number('shoe') === 'number'; // あらゆるものを数字に解析します。

typeof 42n === 'bigint';


// 文字列
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string';        // 文字列内の数値は文字列型のままです。
typeof (typeof 1) === 'string'; // typeof は常に文字列を返します。
typeof String(1) === 'string';  // String は何でも文字列に変換するので、toString よりも安全です。


// 真偽値
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean は、値が truthy か falsy かに基づいて変換します。

typeof !!(1) === 'boolean';      // ! (論理 NOT) 演算子 2 つの呼び出しは、Boolean() と同等です。


// シンボル
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// オブジェクト
typeof {a: 1} === 'object';

// <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray">Array.isArray</a> または Object.prototype.toString.call を使用して、
// 通常のオブジェクトと配列を区別します。
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // 過去の実装は<a href="#typeof_null">正規表現</a>を参照してください。


// 以下のようなものは、紛らわしく、危険で、無駄なものです。それらの使用を避けてください。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';


// 関数
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';</pre>

<h3 id="typeof_null" name="typeof_null"><code>null 型</code></h3>

<pre class="brush: js; no-line-numbers notranslate">// JavaScript の初期からの実装に基づく
typeof null === 'object';
</pre>

<p>JavaScript の最初の実装では、JavaScript の値は型タグと値で表現されていました。オブジェクトの型タグは <code>0</code> で、<code>null</code> は NULL ポインター (ほとんどのプラットフォームで <code>0x00</code>) として表されていました。その結果、<code>null</code> はタグの型として <code>0</code> を持っていたため、<code>typeof</code> の戻り値は <code>"object"</code> です。(<a href="http://www.2ality.com/2013/10/typeof-null.html">リファレンス</a>)</p>

<p>ECMAScript の修正案が (オプトインを使用して) 提案されましたが、<a href="https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null">却下されました</a>。それは <code>typeof null === 'null'</code> という結果になるものでした。</p>

<h3 id="Using_new_operator" name="Using_new_operator"><code>new</code> 演算子の使用</h3>

<pre class="brush: js; notranslate">// Function コンストラクターを除くすべてのコンストラクター関数は、
// 常に typeof 'object' です
let str = new String('String');
let num = new Number(100);

typeof str; // 'object' を返す
typeof num; // 'object' を返す

let func = new Function();

typeof func; // 'function' を返す
</pre>

<h3 id="Need_for_parentheses_in_Syntax" name="Need_for_parentheses_in_Syntax">構文で括弧が必要な場合</h3>

<pre class="brush:js notranslate">// 式のデータ型を特定するために、かっこを使用することができます。
let iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
</pre>

<h3 id="Regular_expressions" name="Regular_expressions">正規表現</h3>

<p>呼び出し可能な正規表現は、一部のブラウザーでは非標準的な追加機能でした。</p>

<pre class="brush:js; no-line-numbers notranslate">typeof /s/ === 'function'; // Chrome 1-12 ECMAScript5.1 に非準拠
typeof /s/ === 'object';   // Firefox 5+ ECMAScript 5.1 に準拠
</pre>

<h3 id="Errors" name="Errors">エラー</h3>

<p>ECMAScript 2015 より前では、<code>typeof</code> は常にそれが供給されたオペランドの文字列を返すことが保証されていました。宣言されていない識別子があっても、<code>typeof</code> は <code>'undefined'</code> を返します。<code>typeof</code> を使用すると、エラーは発生しません。</p>

<p>しかしながら、ブロックスコープの <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> と <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/const">const</a></code> が追加されたことで、変数が宣言される前のブロック内で <code>let</code> と <code>const</code> に <code>typeof</code> を使用すると（またはクラスに <code>typeof</code> を使用すると）、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError">ReferenceError</a></code> が投げられます。ブロックスコープ内の変数は、ブロックの開始から初期化が処理されるまで「<a href="/ja/docs/Web/JavaScript/Reference/Statements/let#The_temporal_dead_zone_and_typeof">一時的なデッドゾーン</a>」にあり、その間にアクセスされるとエラーを投げます。</p>

<pre class="brush: js; no-line-numbers notranslate">typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = 'hello';
class newClass{};</pre>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>現在のブラウザーではすべて、標準外のホストオブジェクト {{domxref("document.all")}} は <code>undefined</code> 型になります。</p>

<pre class="brush: js; no-line-numbers notranslate">typeof document.all === 'undefined';</pre>

<p>仕様では、非標準のオブジェクトののためのカスタム型タグを許可していますが、それらの型タグは定義済みのものとは異なるものであることを要求しています。<code>document.all</code> が <code>'undefined'</code> という型を持っている場合、ウェブ標準ではオリジナルの ECMA JavaScript 標準の "故意の違反" として分類されています。</p>

<h3 id="Real-world_usage" name="Real-world_usage">実際の使い方</h3>

<p><code>typeof</code> は非常に便利ですが、汎用性はそれほど高くありません。たとえば、<code>typeof([])</code> は <code>typeof(new Date())</code> や <code>typeof(/abc/)</code> などと同様に <code>'object'</code> です。</p>

<p>型のチェックをより具体的にするために、プロダクションレベルのコードで使用するための <code>typeof</code> ラッパーは以下のようになります。（<code>obj</code> が存在する場合）</p>

<pre class="brush: js notranslate">  function type(obj, fullClass) {

    // obj の toPrototypeString() を取得します。（すべての型を処理します）
    // 初期の JS 環境では null の場合 '[object Object]' を返すので、直接確認するのがベストです。
    if (fullClass) {
        return (obj === null) ? '[object Null]' : Object.prototype.toString.call(obj);
    }
    if (obj == null) { return (obj + '').toLowerCase(); } // 暗黙の toString() 変換

    var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
    if (deepType === 'generatorfunction') { return 'function' }

    // 過剰な特異性を防いでください。(例えば、[object HTMLDivElement] など)
    // 機能的な正規表現 (Android &lt;=2.3)、機能的な &lt;object&gt; 要素 (Chrome &lt;=57, Firefox &lt;=52) などを考慮します。
    // String.prototype.match は普遍的にサポートされています。

    return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
       (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
  }</pre>

<p>存在しない変数をチェックすると、{{JSxRef("ReferenceError")}} が投げられるため、<code>typeof nonExistentVar === 'undefined'</code> を使用します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-typeof-operator', 'The typeof Operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.typeof")}}</p>

<h3 id="IE-specific_notes" name="IE-specific_notes">IE 特有のメモ</h3>

<p>IE 6、7、8 では、以下のように多くのホストオブジェクトがオブジェクト型であり、関数ではありません。</p>

<pre class="brush: js; no-line-numbers notranslate">typeof alert === 'object'</pre>

<p>一部の非標準 IE プロパティは他の値を返します。(<a href="https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872">tc39/ecma262#1440 (comment)</a>)</p>

<pre class="brush: js; no-line-numbers notranslate">typeof window.external.AddSearchProvider === "unknown";
typeof window.external.IsSearchProviderInstalled === "unknown";</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("Operators/instanceof", "instanceof")}}</li>
 <li><a href="https://github.com/tc39/ecma262/issues/668"><code>document.all</code> willful violation of the standard</a></li>
</ul>
