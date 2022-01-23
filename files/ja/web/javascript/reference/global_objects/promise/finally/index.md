---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
tags:
  - JavaScript
  - Method
  - Promises
  - Prototype
  - Reference
  - finally
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/finally
---
<div>{{JSRef}}</div>

<p><strong><code>finally()</code></strong> メソッドは {{jsxref("Promise")}} を返します。プロミスが確立したら、満足か拒否かにかかわらず、指定されたコールバック関数が実行されます。これにより、プロミスが成功裏に実行されたか否かに関わりなく、 <code>Promise</code> が処理された後に実行されなければならないコードを提供できます。</p>

<p>これによって、プロミスの {{jsxref("Promise.then", "then()")}} ハンドラーと {{jsxref("Promise.catch", "catch()")}} ハンドラーでコードが重複することを避けることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>p</var>.finally(<var>onFinally</var>);

<var>p</var>.finally(function() {
   // 確立 (満足または拒否)
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>onFinally</var></code></dt>
 <dd><code>Promise</code> が確立したら呼び出される {{jsxref("Function")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>finally</code> ハンドラーに指定した <code>onFinally</code> が設定した {{jsxref("Promise")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>プロミスが確立した後、結果に関わらず何らかの処理や後始末を行いたいなら、<code>finally()</code> メソッドは役立ちます。</p>

<p><code>finally()</code> メソッドは <code>.then(onFinally, onFinally)</code> の呼び出しとよく似ていますが、いくつかの点が異なります。</p>

<ul>
 <li>関数をインラインで作成する場合、関数を 2 度宣言するか、変数を作成するかのどちらかで、一度に渡すことができます。</li>
 <li>プロミスが満足したか拒否されたかを知る術がないため、<code>finally</code> コールバックは一切引数を受け取りません。このユースケースは、拒否された理由や履行された値などを提供する必要がなく、それらを<em>気にしない</em>ときに適しています。
  <ul>
   <li><code>Promise.resolve(2).then(() =&gt; {}, () =&gt; {})</code> (<code>undefined</code> で解決される) と異なり、<code>Promise.resolve(2).finally(() =&gt; {})</code> は <code>2</code> で解決される。</li>
   <li>同様に、<code>Promise.reject(3).then(() =&gt; {}, () =&gt; {})</code> (<code>undefined</code> で解決される) と異なり、<code>Promise.reject(3).finally(() =&gt; {})</code> は <code>3</code> で拒否される。</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>補足:</strong> <code>finally</code> コールバック内で <code>throw</code> が行われた場合 (または、拒否されたプロミスを返した場合)、 <code>throw</code> を呼び出すときに指定された拒否理由と共に新しいプロミスが拒否されます。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_finally" name="Using_finally">finally の使用</h3>

<pre class="brush: js notranslate">let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType &amp;&amp; contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });

</pre>

<div class="hidden">
<p>Please do not add polyfills on MDN pages. For more details, refer to: <a href="https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500">https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500</a></p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.finally', 'Promise.prototype.finally')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.finally")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.then()")}}</li>
 <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
