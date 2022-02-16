---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
translation_of: Web/JavaScript/Reference/Operators/await
---
<div>{{jsSidebar("Operators")}}</div>

<p><code>await</code> 演算子は、{{jsxref("Statements/async_function", "async function")}} によって {{jsxref("Promise")}} が返されるのを待機するために使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">[<em>rv</em>] = await <em>expression</em>;</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>解決を待つ {{jsxref("Promise")}} もしくは何らかの値。</dd>
 <dt><code>rv</code></dt>
 <dd>
 <p>解決された promise の値。expression が <code>Promise</code> ではない場合はその値自体を返す。</p>
 </dd>
</dl>

<h2 id="Description" name="Description">説明</h2>

<p><code>await</code> 式は <code>async</code> function の実行を一時停止し、<code>Promise</code> の解決または拒否を待ちます。解決した後に <code>async</code> function の実行を再開します。再開するときに <code>await</code> 式は解決された <code>Promise</code> にラップされた値を返します。</p>

<p><code>Promise</code> が拒否された場合、<code>await</code> 式は理由となった値を投げます。</p>

<p><code>await</code> 式に続く値が <code>Promise</code> ではなかった場合、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">解決された Promise</a> に変換されます。</p>

<p><code>await</code> は実行フローを分割できるため、<code>await</code> の関数の呼び出し元は、<code>await</code> の関数の遅延継続の前に実行を再開できます。<code>await</code> がその関数の継続を延期した後、これが関数によって実行される最初の <code>await</code> でれば、<code>await</code> の関数の完了を求める保留中の <code>Promise</code> を関数の呼び出し元に返し、その呼び出し元の実行を再開することによって、即時実行も続行されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Awaiting_a_promise_to_be_fulfilled" name="Awaiting_a_promise_to_be_fulfilled">promise の解決を待つ</h3>

<p><code>Promise</code> が <code>await</code> 式で停止された場合、<code>Promise</code> が解決されて、解決された値を返すのを待ちます。</p>

<pre class="brush: js notranslate">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
</pre>

<h3 id="Thenable_objects" name="Thenable_objects">Thenable オブジェクト</h3>

<p>{{jsxref("Global_Objects/Promise/then", "Thenable オブジェクト")}}もまったく同じように実行されます。</p>

<pre class="brush: js notranslate">async function f2() {
  const thenable = {
    then: function(resolve, _reject) {
      resolve('resolved!')
    }
  };
  console.log(await thenable); // resolved!
}

f2();
</pre>

<h3 id="Conversion_to_promise" name="Conversion_to_promise">Promise への変換</h3>

<p>値が <code>Promise</code> でない場合は、値を解決済みの <code>Promise</code> に変換して待ちます。</p>

<pre class="brush: js notranslate">async function f3() {
  var y = await 20;
  console.log(y); // 20
}

f3();</pre>

<h3 id="Promise_rejection" name="Promise_rejection">Promise の拒否</h3>

<p><code>Promise</code> が拒否された場合、拒否された値が投げられます。</p>

<pre class="brush: js notranslate">async function f4() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.error(e); // 30
  }
}

f4();</pre>

<h3 id="Handling_rejected_promises" name="Handling_rejected_promises">拒否された Promise を処理する</h3>

<p>拒否された <code>Promise</code> は <code>try</code> 文を使用せずにエラーハンドリングを行えます。</p>

<pre class="brush: js notranslate">var response = await promisedFunction().catch((err) =&gt; { console.error(err); });
// response will be undefined if the promise is rejected
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-async-function-definitions", "async functions")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.operators.await")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/async_function", "async function")}}</li>
 <li>{{jsxref("Operators/async_function", "async function expression")}}</li>
 <li>{{jsxref("AsyncFunction")}} オブジェクト</li>
</ul>
