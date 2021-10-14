---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/then
---
<div>{{JSRef}}</div>

<p><code><strong>then()</strong></code> メソッドは {{jsxref("Promise")}} を返します。最大2つの引数、 <code>Promise</code> が成功した場合と失敗した場合のコールバック関数を取ります。</p>

<div>{{EmbedInteractiveExample("pages/js/promise-then.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<div class="note">
<p>片方または両方の引数が省略されたり、関数ではないものが渡されたりした場合、 <code>then</code> にはハンドラーが不足しますが、エラーは発生しません。 <code>Promise</code> が状態 (<code>fulfillment</code> (完了) または <code>rejection</code> (拒否)) を受け入れるに当たって <code>then</code> が呼び出された際に、 <code>then</code> がハンドラーを持たない場合は、 <code>then</code> が呼び出された元の <code>Promise</code> の最後の状態を受け入れた、追加のハンドラーのない新しい <code>Promise</code> が生成されます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>p.then(onFulfilled[, onRejected])</var>;

p.then(value =&gt; {
  // fulfillment
}, reason =&gt; {
  // rejection
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>onFulfilled</code> {{optional_inline}}</dt>
 <dd><code>Promise</code> が成功したときに呼び出される {{jsxref("Function")}} です。この関数は1つの引数、 <code>fulfillment value</code> を持ちます。これが関数ではない場合は、内部的に "Identity" 関数 (受け取った引数を返す関数) に置き換えられます。</dd>
 <dt><code>onRejected</code> {{optional_inline}}</dt>
 <dd><code>Promise</code> が拒否されたときに呼び出される {{jsxref("Function")}} です。この関数は1つの引数、 <code>rejection reason</code> を持ちます。これが関数ではない場合は、内部的に "Thrower" 関数 (引数として受け取ったエラーを投げる関数) に置き換えられます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Promise")}} が完了するか拒否されると、それぞれのハンドラー関数 (<code>onFulfilled</code> または <code>onRejected</code>) が<strong>非同期に</strong>呼び出されます (現在のスレッドループにスケジュールされます)。ハンドラー関数のこの動作は特定の一連の規則に従います。もしハンドラー関数が・・・</p>

<ul>
 <li>値を返した場合、 <code>then</code> によって返される Promise は返値をその値として解決します。</li>
 <li>何も返さなかった場合、 <code>then</code> によって返される Promise は <code>undefined</code> の値で解決します。</li>
 <li>エラーを投げた場合、 <code>then</code> によって返される Promise は、その値としてエラーを投げて拒否されます。</li>
 <li>すでに解決している Promise を返した場合、 <code>then</code> によって返される Promise は、その Promise の値をその値として返します。</li>
 <li>すでに拒否された Promise を返した場合、 <code>then</code> によって返される Promise は、その Promise の値をその値として拒否されます。</li>
 <li>他の <strong>pending</strong> 状態の Promise オブジェクトを返した場合、 <code>then</code> によって返された Promise の解決/拒否は、ハンドラーによって返された Promise の解決/拒否結果に依存します。また、 <code>then</code> によって返された Promise の解決値は、ハンドラーによって返された Promise の解決値と同じになります。</li>
</ul>

<p>以下は、 <code>then</code> メソッドの非同期性を示す例です。</p>

<pre class="brush: js notranslate">// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value =&gt; {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() =&gt; {
    console.log(thenProm);
});


// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}</pre>

<h2 id="Description" name="Description">説明</h2>

<p><code>then</code> メソッドや {{jsxref("Promise.prototype.catch()")}} メソッドは <code>Promise</code> を返すので、<a href="/ja/docs/Web/JavaScript/Guide/Using_promises#Chaining">チェーン可能</a>です。 — これは <em>composition</em> と呼ばれる操作です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_then_method" name="Using_the_then_method"><code>then</code> メソッドの使用</h3>

<pre class="brush: js notranslate">var p1 = new Promise((resolve, reject) =&gt; {
  resolve('Success!');
  // or
  // reject(new Error("Error!"));
});

p1.then(value =&gt; {
  console.log(value); // Success!
}, reason =&gt; {
  console.error(reason); // Error!
} );
</pre>

<h3 id="Chaining" name="Chaining">チェーン</h3>

<p><code>then</code> メソッドは <code>Promise</code> を返すので、メソッドチェーンができます。</p>

<p>関数が <code>then</code> にハンドラーとして渡されると <code>Promise</code> を返します。同じ <code>Promise</code> がメソッドチェーンの次の <code>then</code> に現れます。次のスニペットは、非同期実行をシミュレートする、 <code>setTimeout()</code> 関数付きのコードです。</p>

<pre class="brush: js notranslate">Promise.resolve('foo')
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string); // foobarbaz
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz</pre>

<p><code>then()</code> の引数として渡された関数(ハンドラ)が値を返した場合は、 <code>Promise.resolve (&lt;ハンドラーが呼ばれて返された値&gt;) </code>によって、返値を自動的に <code>Promise</code> でラップします。</p>

<pre class="brush: js notranslate">var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works'); // 2 - A synchronous value works
});

p2.then(function(value) {
  console.log(value); // 1
});
</pre>

<p><code>then</code> の引数として渡した関数が拒否された Promise を返した場合や、例外 (エラー) が発生した場合は、拒否された Promise を返します。</p>

<pre class="brush: js notranslate">Promise.resolve()
  .then(() =&gt; {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .then(() =&gt; {
    console.log('Not called.');
  }, error =&gt; {
    console.error('onRejected function called: ' + error.message);
  });</pre>

<p>その他の場合はすべて、<ruby>解決中<rp> (</rp><rt>resolving</rt><rp>) </rp></ruby>の Promise が返されます。次の例では、チェーン上の以前の Promise が拒否されていても、最初の <code>then()</code> は解決中の Promise に含まれた <code>42</code> を返します。</p>

<pre class="brush: js notranslate">Promise.reject()
  .then(() =&gt; 99, () =&gt; 42) // onRejected returns 42 which is wrapped in a resolving Promise
  .then(solution =&gt; console.log('Resolved with ' + solution)); // Resolved with 42</pre>

<p>多くの場合、 <code>catch</code> を使って失敗状態の Promise を補足する方が、 <code>then</code> の 2 つのハンドラーを使って処理するよりも現実的です。下記の例を見てください。</p>

<pre class="brush: js notranslate">Promise.resolve()
  .then(() =&gt; {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch(error =&gt; {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() =&gt; {
    console.log("I am always called even if the prior then's promise rejects");
  });</pre>

<p>Promise ベースの API を持った関数同士であれば、別の関数上に他の関数を実装することでチェーンを使うこともできます。</p>

<pre class="brush: js notranslate">function fetch_current_data() {
  // The <a href="/ja/docs/Web/API/GlobalFetch/fetch">fetch</a>() API returns a Promise.  This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch('current-data.json').then(response =&gt; {
    if (response.headers.get('content-type') != 'application/json') {
      throw new TypeError();
    }
    var j = response.json();
    // maybe do something with j
    return j; // fulfillment value given to user of
              // fetch_current_data().then()
  });
}
</pre>

<p><code>onFulfilled</code> がプロミスを返した場合、 <code>then</code> の返値はプロミスによって解決／拒否されます。</p>

<pre class="brush: js notranslate">function resolveLater(resolve, reject) {
  setTimeout(function() {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(function() {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(function(v) {
  console.log('resolved', v);  // "resolved", 10
}, function(e) {
  // not called
  console.error('rejected', e);
});

var p3 = p1.then(function() {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(function(v) {
  // not called
  console.log('resolved', v);
}, function(e) {
  console.error('rejected', e); // "rejected", 'Error'
});
</pre>

<h3 id="window.setImmediate_style_promise-based_polyfill" name="window.setImmediate_style_promise-based_polyfill">window.setImmediate 形式のプロミスベースの代替処理</h3>

<p>{{jsxref("Function.prototype.bind()")}} を使用して、 <code>Reflect.apply</code> ({{jsxref("Reflect.apply()")}}) メソッドは (キャンセルできない) {{domxref("window.setImmediate")}} 形式の関数を作成することができます。</p>

<pre class="brush: js notranslate">const nextTick = (() =&gt; {
  const noop = () =&gt; {}; // literally
  const nextTickPromise = () =&gt; Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) =&gt; (
    fn !== undefined
    ? Promise.resolve(args).then(rfab(null, fn, null))
    : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
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
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.then', 'Promise.prototype.then')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.then")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
