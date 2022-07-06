---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Error
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error
---
<div>{{JSRef}}</div>

<p><code>Error</code> オブジェクトは、実行時エラーが発生した時に発生します。 <code>Error</code> オブジェクトは、ユーザー定義の例外の基底オブジェクトとして使用することもできます。標準の組み込みエラー型については下記を参照してください。</p>

<h2 id="Description" name="Description">解説</h2>

<p>実行時エラーが発生すると、新しい <code>Error</code> オブジェクトが生成されスローされます。</p>

<h3 id="Error_types" name="Error_types">エラーの型</h3>

<p>JavaScript には、一般的な <code>Error</code> コンストラクターの他に、中核となる 7 つのエラーコンストラクターがあります。クライアント側の例外については、<a href="/ja/docs/Web/JavaScript/Guide/Statements#Exception_handling_statements">例外処理文</a>を参照してください。</p>

<dl>
 <dt>{{JSxRef("EvalError")}}</dt>
 <dd>グローバル関数 {{JSxRef("eval", "eval()")}} に関して発生するエラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("InternalError")}}</dt>
 <dd>"too much recursion" (深すぎる再帰) など、JavaScript エンジンで内部エラーが発生した時に発生するエラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("RangeError")}}</dt>
 <dd>数値変数または引数が、その有効範囲外である場合に発生するエラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("ReferenceError")}}</dt>
 <dd>不正な参照から参照先の値を取得した時に発生するエラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("SyntaxError")}}</dt>
 <dd>構文エラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("TypeError")}}</dt>
 <dd>変数または引数の型が有効でない場合に発生するエラーを表すインスタンスを生成します。</dd>
 <dt>{{JSxRef("URIError")}}</dt>
 <dd>{{JSxRef("encodeURI", "encodeURI()")}} または {{JSxRef("decodeURI", "decodeURI()")}} に不正な引数が渡された時に発生するエラーを表すインスタンスを生成します。</dd>
</dl>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Error/Error", "Error()")}}</dt>
 <dd>新しい <code>Error</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Static_methods" name="Static_methods">静的メソッド</h2>

<dl>
 <dt>{{JSxRef("Error.captureStackTrace()")}}</dt>
 <dd>標準外の <strong>V8</strong> の関数で、 Error インスタンスに {{JSxRef("Error.prototype.stack", "stack")}} プロパティを生成します。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message")}}</dt>
 <dd>エラーメッセージ。</dd>
 <dt>{{jsxref("Error.prototype.name")}}</dt>
 <dd>エラーの名称。</dd>
 <dt>{{jsxref("Error.prototype.description")}}</dt>
 <dd>標準外の Microsoft のプロパティで、エラーの説明です。 {{jsxref("Error.prototype.message", "message")}} と似ています。</dd>
 <dt>{{jsxref("Error.prototype.number")}}</dt>
 <dd>標準外の Microsoft のプロパティで、エラー番号です。</dd>
 <dt>{{jsxref("Error.prototype.fileName")}}</dt>
 <dd>標準外の Mozilla のプロパティで、このエラーが発生したファイルへのパスです。</dd>
 <dt>{{jsxref("Error.prototype.lineNumber")}}</dt>
 <dd>標準外の Mozilla のプロパティで、このエラーが発生したファイル内の行番号です。</dd>
 <dt>{{jsxref("Error.prototype.columnNumber")}}</dt>
 <dd>標準外の Mozilla のプロパティで、このエラーが発生した行内の桁番号です。</dd>
 <dt>{{jsxref("Error.prototype.stack")}}</dt>
 <dd>標準外の Mozilla プロパティで、スタックトレースです。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("Error.prototype.toString()")}}</dt>
 <dd>指定したオブジェクトを表す文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Throwing_a_generic_error" name="Throwing_a_generic_error">一般的なエラーを発生させる</h3>

<p>通常、{{JSxRef("Statements/throw", "throw")}} キーワードを使い意図的にエラーを発生させて <code>Error</code> オブジェクトを生成します。 {{JSxRef("Statements/try...catch", "try...catch")}} 構文を使用してエラーを処理してください:</p>

<pre class="brush: js; notranslate">try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
</pre>

<h3 id="Handling_a_specific_error" name="Handling_a_specific_error">特定のエラーを処理する</h3>

<p>エラーの {{JSxRef("Object.prototype.constructor", "constructor")}} プロパティでエラー型をテストすることにより、特定のエラー型だけを選んで処理できます。または、最近の JavaScript エンジン向けに書いているのであれば、{{JSxRef("Operators/instanceof", "instanceof")}} キーワードが使えます:</p>

<pre class="brush: js; notranslate">try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc
}
</pre>

<h3 id="Custom_Error_Types" name="Custom_Error_Types">独自のエラー型</h3>

<p><code>Error</code> から派生した独自のエラー型を定義して <code>throw new CustomError()</code> ができるようにし、<code>instanceof CustomError</code> で例外ハンドラー内のエラーの種類を確認したいでしょう。これを行う一般的な方法の実例を以下に示します。</p>

<p>StackOverflow の突っ込んだ議論、 <a href="http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript">"What's a good way to extend Error in JavaScript?"</a> も参照してください。</p>

<h4 id="ES6_Custom_Error_Class" name="ES6_Custom_Error_Class">ES6 独自のエラークラス</h4>

<div class="warning">
<p>Babel 7 以前では独自のエラークラスのメソッドを使用することができますが、 <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty()</a> で宣言された場合に限定されます。 そうでない場合、古い Babel やそれ以外のトランスパイラは、下記のコードを正しく処理するために<a href="https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend">追加の設定</a>を必要とします。</p>
</div>

<div class="blockIndicator note">
<p>ES2015 クラスを使用した場合、一部のブラウザのスタックトレース上に、 CustomError コンストラクタが含まれます。</p>
</div>

<pre class="brush: js notranslate">class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    // Custom debugging information
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('baz', 'bazMessage')
} catch(e) {
  console.error(e.name)    //CustomError
  console.error(e.foo)     //baz
  console.error(e.message) //bazMessage
  console.error(e.stack)   //stacktrace
}</pre>

<h4 id="ES5_Custom_Error_Object" name="ES5_Custom_Error_Object">ES5 独自のエラーオブジェクト</h4>

<div class="warning">
<p><strong>すべて</strong>のブラウザーのスタックトレース上に、 <code>CustomError</code> コンストラクターが含まれます。</p>
</div>

<pre class="brush: js notranslate">function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = 'CustomError';
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.error(e.name); //CustomError
  console.error(e.foo); //baz
  console.error(e.message); //bazMessage
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error-objects', 'Error')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("Statements/throw", "throw")}}</li>
 <li>{{JSxRef("Statements/try...catch", "try...catch")}}</li>
</ul>
