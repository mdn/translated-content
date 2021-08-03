---
title: Promise() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
tags:
  - Constructor
  - JavaScript
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/Promise
---
<div>{{JSRef}}</div>

<p><strong><code>Promise</code></strong> コンストラクターは、主にまだプロミスに対応していない関数をラップするために使用します。</p>

<div>{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">new Promise(<var>executor</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>executor</var></code></dt>
 <dd>新しい <code>Promise</code> オブジェクトを構築する過程でコンストラクターによって呼び出される {{jsxref("function")}} です。 <code><var>executor</var></code> は結果をプロミスに結びつけるカスタムコードです。プログラマーが <code><var>executor</var></code> を書きます。この関数の形式は次のようなものであると期待されます。</dd>
 <dt>
 <pre class="brush: js notranslate">function(<var>resolutionFunc</var>, <var>rejectionFunc</var>){
    // 通常、いくつかの非同期操作。
}
</pre>
 </dt>
 <dd>コンストラクターが新しい <code>Promise</code> オブジェクトを生成するとき、 <code><var>resolutionFunc</var></code> と <code><var>rejectionFunc</var></code> の一対の関数も生成します。これらは <code>Promise</code> オブジェクトに「結束」されます。従って、 <code><var>executor</var></code> の中のコードが何らかの操作を実行し、その操作の結果を (値が別の Promise オブジェクトでない場合) 「満足」または「拒否」として、それぞれ <code><var>resolutionFunc</var></code> または <code><var>rejectionFunc</var></code> のどちらかを呼び出すことで反映する機会を持っています。</dd>
 <dd><code><var>executor</var></code> は意味のある返値を持ちません。これは <code><var>resolutionFunc</var></code> または <code><var>rejectionFunc</var></code> を使用することの副作用を介して通信します。この副作用とは、 <code>Promise</code> が「解決済み」になることです。</dd>
 <dd>通常は、次のように動作します。 <code><var>executor</var></code> の内部の走査は非同期であり、コールバックを提供します。コールバックは <code><var>executor</var></code> のコード内で定義されます。コールバックは、 <code><var>resolutionFunc</var></code> を呼び出すことで終了します。 <code><var>resolutionFunc</var></code> の呼び出しには、引数 <code>value</code> が含まれます。 <code>value</code> は、結束された <code>Promise</code> オブジェクトに渡されます。 <code>Promise</code> オブジェクトは (非同期的に) それに関連付けられた任意の <code>.then()</code> を呼び出します。 <code>.then()</code> によって受け取った <code>value</code> は、 <code>handleFulfilled</code> の呼び出しに入力引数として渡されます (「連鎖したプロミス」の節を参照)。</dd>
 <dd>また、 <code><var>executor</var></code> はエラー時に <code><var>rejectionFunc</var></code> を呼び出す <code>try{} catch()</code> ブロックを含む可能性があります。</dd>
 <dd>これらの2つの関数の呼び出し形式は単純で、あらゆる型の引数を1つだけ取ります。もちろん、これらの関数の実際の名前は好きにしてよく、すなわち、 <code><var>executor</var></code> の引数として名づけます。どちらの関数も必要な時に呼び出すために使用します。</dd>
</dl>

<dl>
 <dd>
 <pre class="brush: js notranslate">resolutionFunc(value) // 満足したときに呼び出される
rejectionFunc(reason) // <em>拒否されたとき</em>に呼び出される</pre>

 <p>返される <code>value</code> は、プロミスをチェーンに動的に挿入するために、別なプロミスオブジェクトにすることができます。</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>new</code> を通じて呼び出された場合、 <code>Promise</code> コンストラクターはプロミスオブジェクトを返します。このプロミスオブジェクトは、 <code><var>resolutionFunc</var></code> 関数または <code><var>rejectionFunc</var></code> 関数が呼び出されると「解決」になります。なお、 <code><var>resolutionFunc</var></code> または <code><var>rejectionFunc</var></code> を別な Promise オブジェクトを引数にして呼び出すと、これが「解決」であると言えますが、「満足」であるとは言えません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_a_new_Promise" name="Creating_a_new_Promise">新しい Promise の作成</h3>

<p><code>Promise</code> オブジェクトは <code>new</code> キーワードとコンストラクターで作成されます。コンストラクターは executor 関数と呼ばれる引数を取ります。 executor 関数は 2 つの関数を引数として取ります。1 つめの関数 (<code>resolve)</code> は非同期タスクが成功して完了した場合に呼び出され、タスクの結果を値として返します。2 つめの関数 (<code>reject</code>) はタスクが失敗した場合に呼び出され、失敗した理由 (典型的には error オブジェクト) を返します。</p>

<pre class="brush: js; notranslate">const myFirstPromise = new Promise((resolve, reject) =&gt; {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
</pre>

<h3 id="Making_functions_return_a_Promise" name="Making_functions_return_a_Promise">Promise を返す関数の作成</h3>

<p>関数に Promise 機能を提供するには、次のように単に Promise を返すようにします。</p>

<pre class="brush: js; notranslate">function myAsyncFunction(url) {
  return new Promise((resolve, reject) =&gt; {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () =&gt; resolve(xhr.responseText)
    xhr.onerror = () =&gt; reject(xhr.statusText)
    xhr.send()
  });
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
   <td>{{SpecName('ESDraft', '#sec-promise-constructor', 'Promise コンストラクター')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.Promise")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Using_promises">Promise の使用</a></li>
</ul>
