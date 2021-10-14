---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/catch
---
<div>{{JSRef}}</div>

<p><code><strong>catch()</strong></code> メソッドは <code>Promise</code> を返しますが、拒否された場合のみ扱います。 {{jsxref("Promise.then", "Promise.prototype.then(undefined, onRejected)")}} の呼び出しと同じ動作をします (実際、 <code>obj.catch(onRejected)</code> の呼び出しは内部的に <code>obj.then(undefined, onRejected)</code> を呼び出しています)。つまり、返値を <code>undefined</code> にフォールバックしたい場合でも、 <code>onRejected</code> 関数を提供する必要があります。 - 例えば、 <code>obj.catch(() =&gt; {})</code> のようにします。</p>

<div>{{EmbedInteractiveExample("pages/js/promise-catch.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>p</var>.catch(<var>onRejected</var>);

p.catch(function(<var>reason</var>) {
   // rejection
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>onRejected</var></code></dt>
 <dd><code>Promise</code> が失敗した時に呼び出される {{jsxref("Function")}} です。この関数は一つの引数を持ちます。
 <dl>
  <dt><code><var>reason</var></code></dt>
  <dd>拒否された理由です。</dd>
 </dl>
 <code>catch()</code> で返される Promise は、 <code><var>onRejected</var></code> がエラーを発生させた場合、または返される Promise それ自体が拒否された場合は、拒否となります。それ以外の場合は、解決となります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>内部的には、呼び出されたオブジェクトの <code>Promise.prototype.then</code> を呼び出し、引数に <code>undefined</code> と、受け取った <code><var>onRejected</var></code> ハンドラーを渡します。返値はこの呼び出しの値であり、すなわち {{jsxref("Promise")}} です。</p>

<div class="warning">
<p>なお、以下の例は <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> のインスタンスを投げます。これは文字列を投げる場合と比較して、良い習慣と見なされています。そうでなければ、キャッチを実行する部分で引数が string か error かをチェックする必要があり、スタックトレースのような価値のある情報を失う可能性があります。</p>
</div>

<p><strong>内部呼び出しの例</strong></p>

<pre class="brush: js notranslate">// overriding original Promise.prototype.then/catch just to add some logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function(){
        console.log('&gt; &gt; &gt; &gt; &gt; &gt; called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.error('&gt; &gt; &gt; &gt; &gt; &gt; called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);



// calling catch on an already resolved promise
Promise.resolve().catch(function XXX(){});

// logs:
// &gt; &gt; &gt; &gt; &gt; &gt; called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// &gt; &gt; &gt; &gt; &gt; &gt; called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
</pre>

<h2 id="Description" name="Description">解説</h2>

<p><code>catch</code> メソッドは複合したプロミスの複合のエラー処理に使用されます。これは {{jsxref("Promise")}} を返しますので、姉妹メソッドである {{jsxref("Promise.then", "then()")}} と同様の方法で<a href="/ja/docs/Web/JavaScript/Guide/Using_promises#Chaining_after_a_catch">チェーン可能</a>です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_and_chaining_the_catch_method" name="Using_and_chaining_the_catch_method">catch メソッドの使用とチェーン化</h3>

<pre class="brush: js notranslate">var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.error(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// 以下は、上記と同様に動作します
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.error(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
</pre>

<h3 id="Gotchas_when_throwing_errors" name="Gotchas_when_throwing_errors">エラーを投げたことを知る</h3>

<pre class="brush: js notranslate">// Throwing an error will call the catch method most of the time
var p1 = new Promise(function(resolve, reject) {
  throw new Error('Uh-oh!');
});

p1.catch(function(e) {
  console.error(e); // "Uh-oh!"
});

// Errors thrown inside asynchronous functions will act like uncaught errors
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Uncaught Exception!');
  }, 1000);
});

p2.catch(function(e) {
  console.error(e); // This is never called
});

// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw new Error('Silenced Exception!');
});

p3.catch(function(e) {
   console.error(e); // This is never called
});</pre>

<h3 id="If_it_is_resolved" name="If_it_is_resolved">解決される場合</h3>

<pre class="brush: js notranslate">//Create a promise which would not call onReject
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //This is never called
    console.error("catch p1!");
    console.error(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.catch', 'Promise.prototype.catch')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.catch")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.then()")}}</li>
</ul>
