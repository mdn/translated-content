---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Promise
  - Reference
  - クラス
  - プロミス
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
<div>{{JSRef}}</div>

<p><strong><code>Promise</code></strong> オブジェクトは非同期処理の最終的な完了処理 (もしくは失敗) およびその結果の値を表現します。</p>

<p>プロミスの挙動と使用法について学ぶには、最初に <a href="/ja/docs/Web/JavaScript/Guide/Using_promises">Promise の使用</a>をお読みください。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>Promise</strong></code> インターフェイスは作成時点では分からなくてもよい値へのプロキシです。 Promise を用いることで、非同期アクションの成功や失敗に対するハンドラーを関連付けることができます。これにより、非同期メソッドは、最終的な値を返すのではなく、未来のある時点で値を持つ Promise を返すことで、同期メソッドと同じように値を返すことができるようになります。</p>

<p><code>Promise</code> の状態は以下のいずれかとなります。</p>

<ul>
 <li><ruby>待機<rp> (</rp><rt><em>pending</em></rt></ruby>: 初期状態。成功も失敗もしていません。</li>
 <li><ruby>満足<rp> (</rp><rt><em>fulfilled</em></rt><rp>)</rp></ruby>: 処理が成功して完了したことを意味します。</li>
 <li><ruby>拒絶<rp> (</rp><rt><em>rejected</em></rt><rp>)</rp></ruby>: 処理が失敗したことを意味します。</li>
</ul>

<p>待機状態のプロミスは、何らかの値を持つ満足 (<em>fulfilled</em>) 状態、もしくは何らかの理由 (エラー) を持つ拒絶 (<em>rejected</em>) 状態のいずれかに変わります。そのどちらとなっても、<code>then</code> メソッドによって関連付けられたハンドラーが呼び出されます。 (対応するハンドラーが割り当てられたとき、既にプロミスが成功または失敗していても、そのハンドラーは呼ばれます。よって、非同期処理とその関連付けられたハンドラーとの競合は発生しません。)</p>

<p><code>{{JSxRef("Promise.then", "Promise.prototype.then()")}}</code> メソッドと <code>{{JSxRef("Promise.catch", "Promise.prototype.catch()")}}</code> メソッドもまた Promise を返すので、これらをチェーン (連鎖) させることができます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15911/promises.png" style="height: 297px; width: 801px;"></p>

<div class="blockIndicator note">
<p><strong>混乱を避けるために:</strong> Scheme に代表されるいくつかの言語では、遅延評価や計算を延期する機構を持っており、これらも "Promise" と呼ばれます。 JavaScript における Promise は、すでに起きつつある処理を表します。そしてこの処理はコールバックを使うことでチェーンさせることができます。式を遅延評価する方法を探しているのであれば、引数なしの<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>を考えてください。 <code>f = () =&gt; <em>expression</em></code> のように実現でき、遅延評価される式が作成され、 <code>f()</code> を呼ぶことでその式を評価できます。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: Promise は fulfilled か failed のどちらかになった場合は、 pending ではなく settled と呼ばれます。また解決 (<em>resolved</em>) という用語も目にされたことがあると思います。解決とは、Promise が解決または他の promise の状態にマッチするために" locked in "したことを意味します。<a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md">States and fates</a> では、 Promise の技術についてより詳細に述べられています。</p>
</div>

<h3 id="Chained_Promises" name="Chained_Promises">連鎖したプロミス</h3>

<p><code>promise.then()</code>, <code>promise.catch()</code>, <code>promise.finally()</code> の各メソッドは、決定したプロミスにさらなるアクションを関連付けるために使用されます。これらのメソッドはまた、新しく生成されたプロミスオブジェクトを返します。例えば、このようになります。</p>

<dl>
 <dd>
 <pre class="brush: js notranslate">const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA,handleRejectedA)
  .then(handleFulfilledB,handleRejectedB)
  .then(handleFulfilledC,handleRejectedC);

// または、おそらく次の方がよい ...

const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);</pre>
 </dd>
</dl>

<p>拒絶されたプロミスの処理が早すぎると、プロミスの連鎖のさらに下の方に影響を及ぼします。エラーはすぐに処理しなければならないので、選択の余地がないこともあります。 (結果を処理するためのテクニックについては、下記の例の <code>throw -999</code> を参照してください。) 一方で、すぐに必要がない場合は、最後の .catch() 文までエラー処理をしない方がシンプルです。</p>

<p>これら2つの関数のシグネチャはシンプルで、任意の型の引数を1つだけ受け取ることができます。これらの関数を書くのはプログラマーです。これらの関数の終了条件は、チェーン内の次のプロミスの「解決」状態を決定します。 <code>throw</code> 以外の終了条件は "解決" の状態を生み出し、一方、 <code>throw</code> で終了すると "拒否" の状態を生み出します。</p>

<pre class="brush: js notranslate">handleFulfilled(value)       { /*...*/; return nextValue;  }
handleRejection(reason)  { /*...*/; throw  nextReason; }
handleRejection(reason)  { /*...*/; return nextValue;  }</pre>

<p>返される <code>nextValue</code> は、別のプロミスオブジェクトにすることもでき、この場合はプロミスは動的にチェーンに挿入されます。</p>

<p><code>.then()</code> が適切な関数欠いている場合、処理は単純にチェーンの次のリンクへと続きます。したがってチェーンは、すべての <code>handleRejection</code> を最後の <code>.catch()</code> まで、安全に省略することができます。 同様に、<code>.catch()</code> は、実際には <code>handleFulfilled</code> 用のスロットのないただの <code>.then()</code> です。</p>

<p>プロミスのチェーンはロシアの人形のように入れ子にすることができますが、スタックの最上位のように取り出します。チェーンの最初のプロミスは最も深いところに入れ子になり、最初に取り出されます。</p>

<pre class="notranslate">(promise D, (promise C, (promise B, (promise A) ) ) )</pre>

<p><code>nextValue</code> がプロミスである場合、その効果は動的な置換です。 <code>return</code> によってプロミスが取り出されますが、 <code>nextValue</code> のプロミスはその場所に押し込まれます。上に示した入れ子では、"promise B" に関連付けられた <code>.then()</code> が "promise X" の <code>nextValue</code> を返すとします。 結果としての入れ子は以下のようになります。</p>

<pre class="notranslate">(promise D, (promise C, (promise X) ) )</pre>

<p>プロミスは複数の入れ子に参加することができます。以下のコードでは、 <code>promiseA</code> が「確定」状態に移行すると、 <code>.then()</code> の両方のインスタンスが呼び出されます。</p>

<pre class="brush: js notranslate">const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
</pre>

<p>既に「解決済み」のプロミスにアクションを割り当てることができます。その場合、アクションは (適切であれば) 最初の非同期の機会に実行されます。プロミスは非同期であることが保証されていることに注意してください。したがって、既に「解決済み」のプロミスに対するアクションは、スタックがクリアされ、クロックティックが経過した後にのみ実行されます。この効果は <code>setTimeout(action,10)</code> とよく似ています</p>

<pre class="brush: js notranslate">const promiseA = new Promise( (resolutionFunc,rejectionFunc) =&gt; {
    resolutionFunc(777);
});
// この時点で、 "promiseA" はすでに解決されています。
promiseA.then( (val) =&gt; console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// 以下の順序で出力が行われます。
// immediate logging
// asynchronous logging has val: 777
</pre>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Promise/Promise", "Promise()")}}</dt>
 <dd>新しい <code>Promise</code> オブジェクトを生成します。このコンストラクターは主にまだプロミスに対応していない関数をラップするために使われます。</dd>
</dl>

<h2 id="Static_methods" name="Static_methods">静的メソッド</h2>

<dl>
 <dt>{{JSxRef("Promise.all", "Promise.all(iterable)")}}</dt>
 <dd>すべてのプロミスが解決されるか、拒否されるかするまで待ちます。</dd>
 <dd>返却されたプロミスが解決された場合、解決されたプロミスが、複数のプロミスが含まれる iterable で定義された通りの順番で入った集合配列の値によって解決されます。</dd>
 <dd>拒否された場合は、 iterable の中で拒否された最初のプロミスの理由によって拒否されます。</dd>
 <dt>{{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}</dt>
 <dd>すべての Promise が完了する (それぞれが解決するか、拒否される) まで待ちます。</dd>
 <dd>Promise を返し、これはすべての与えられた Promise が解決または拒否された後で、それぞれの Promise の結果を記述するオブジェクトの配列で解決されます。</dd>
 <dt>{{JSxRef("Promise.any", "Promise.any(iterable)")}}</dt>
 <dd>Promise オブジェクトの反復可能オブジェクトを取り、反復可能オブジェクトの中のプロミスのうちの一つが満足され次第、そのプロミスから受け取った値で解決する単一のプロミスを返します。</dd>
 <dt>{{JSxRef("Promise.race", "Promise.race(iterable)")}}</dt>
 <dd>Promise のうちの1つが解決または拒否されるまで待ちます。</dd>
 <dd>返された Promise が解決された場合、 iterable の中で最初に解決された Promise の値によって解決されます。</dd>
 <dd>拒否された場合、最初に拒否された Promise の理由によって拒否されます。</dd>
 <dt>{{JSxRef("Promise.reject", "Promise.reject(reason)")}}</dt>
 <dd>与えられた理由で拒否された新しい <code>Promise</code> オブジェクトを返します。</dd>
 <dt>{{JSxRef("Promise.resolve", "Promise.resolve(value)")}}</dt>
 <dd>与えられた値で解決された新しい <code>Promise</code> オブジェクトを返します。もし値が thenable (つまり <code>then</code> メソッドを持っているオブジェクト) ならば、返される Promise はその thenable をたどり、その結果を採用します。そうでなければ、返される Promise は与えられた値で解決されます。</dd>
 <dd>一般に、ある値がプロミスかどうかがわからない場合は、{{JSxRef("Promise.resolve", "Promise.resolve(value)")}} を使って Promise にして扱います。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("Promise.prototype.catch()")}}</dt>
 <dd>プロミスに失敗ハンドラーコールバックを付加します。呼ばれるとコールバックの返値、または、オリジナルのプロミスが成功しているなら、その成功値によって完了している新しいプロミスを返します。</dd>
 <dt>{{jsxref("Promise.prototype.then()")}}</dt>
 <dd>プロミスに成功ハンドラーと失敗ハンドラーを付加します。呼ばれたハンドラーの戻り値によって解決している新しいプロミスを返します。または、プロミスが扱われなかった場合 (つまり <code>onFulfilled</code> や <code>onRejected</code> が関数でない場合) には、元の完了した値に解決しているプロミスを返します。</dd>
 <dt>{{jsxref("Promise.prototype.finally()")}}</dt>
 <dd>プロミスにハンドラーを付加し、元のプロミスが解決されたときに解決される新しいプロミスを返します。このハンドラーは、成功か失敗かに関わらず、元のプロミスが完了したときに呼ばれます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_Example" name="Basic_Example">基本的な使用例</h3>

<pre class="brush: js; notranslate">let myFirstPromise = new Promise((resolve, reject) =&gt; {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 250)
})

myFirstPromise.then((successMessage) =&gt; {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});

</pre>

<h3 id="Example_with_diverse_situations" name="Example_with_diverse_situations">多様な状況に対応した例</h3>

<p>この例では、プロミス機能を使用するための多様なテクニックと、発生する可能性のある多様な状況を示しています。これを理解するには、まずコードブロックの一番下までスクロールして、プロミスの連鎖を調べてください。最初のプロミスが提供されると、プロミスの連鎖が続きます。このチェーンは <code>.then()</code> の呼び出しで構成され、通常は (必ずしもそうとは限りませんが) 最後に単一の <code>.catch()</code> があり、オプションで <code>.finally()</code> が続きます。この例では、プロミスチェーンはカスタムで書かれた <code>new Promise()</code> コンストラクターによって開始されますが、実際には、プロミスチェーンは通常、プロミスを返す API 関数 (他の誰かが書いたもの) から開始されます。</p>

<p>関数 <code>tetheredGetNumber()</code> の例では、非同期呼び出しを設定している間、またはコールバック内で、またはその両方で <code>reject()</code> を使用してプロミスを生成することを示しています。 関数 <code>promiseGetWord()</code> は、API 関数がどのように自己完結型の方法でプロミスを生成して返すかを示しています。</p>

<p>関数 <code>troubleWithGetNumber()</code> は <code>throw()</code> で終わることに注意してください。これは、 ES6 のプロミスチェーンでは、エラーが発生した後で、 "throw()" がなく、エラーが "fixed" であるようにみえても、すべての <code>.then()</code> のプロミスを通過するため、強制的に行われています。これは面倒なので、 <code>.then()</code> プロミスのチェーン全体で <code>rejectionFunc</code> を省略して、最終的な <code>catch()</code> で単一の <code>rejectionFunc</code> を使用するのが一般的です。 別の方法としては、特別な値を投げるという方法があります (この場合は"-999" ですが、カスタムのエラー種別の方が適切です)。</p>

<p>このコードは NodeJS で実行できます。実際にエラーが発生しているのを見ることで理解度が高まります。より多くのエラーを強制的に発生させるには、 <code>threshold</code> の値を変更します。</p>

<pre class="brush: js notranslate">"use strict";

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(
      function() {
        const randomInt = Date.now();
        const value = randomInt % 10;
        try {
          if(value &gt;= THRESHOLD_A) {
            throw new Error(`Too large: ${value}`);
          }
        } catch(msg) {
            reject(`Error in callback ${msg}`);
        }
      resolve(value);
      return;
    }, 500);
    // To experiment with error at set-up, uncomment the following 'throw'.
    // throw new Error("Bad setup");
  } catch(err) {
    reject(`Error during setup: ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Trouble getting number: ${reason}`);
  throw -999; // must "throw" something, to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
  // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
  var tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if(theNumber &gt;= threshold_B) {
      reject(`Still too large: ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))
  .then(determineParity,troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) =&gt; {
    console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) =&gt; {
    if(reason === -999) {
      console.error("Had previously handled error");
    }
    else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
   })
  .finally((info) =&gt; console.log("All done"));

</pre>

<h3 id="Advanced_Example" name="Advanced_Example">応用例</h3>

<div class="hidden">
<pre class="brush: html notranslate">&lt;button id="btn"&gt;Make a promise!&lt;/button&gt;
&lt;div id="log"&gt;&lt;/div&gt;
</pre>
</div>

<p>以下の例は <code>Promise</code> の仕組みを示したものです。 <code>testPromise()</code> メソッドは {{HTMLElement("button")}} をクリックする度に呼び出されます。<code>testPromise()</code> メソッドは、 {{domxref("window.setTimeout()")}} を用いて、1秒から 3秒のランダムな時間の後、メソッドがこれまでに呼ばれた回数で成功する Promise を作成します。 <code>Promise()</code> コンストラクターは Promise を作成するために使用されます。</p>

<p>プロミスが満足したことは、 {{JSxRef("Promise.prototype.then()","p1.then()")}} で設定されたコールバックによって記録されます。この記録から、メソッドの同期処理部分が、 Promise による非同期処理からどのように分離されているかがわかります。</p>

<pre class="brush: js; notranslate">'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 開始 (&lt;small&gt;同期処理開始&lt;/small&gt;)&lt;br/&gt;');

    // 新しい Promise を作成: 1～3秒後に結果を返すことを約束します
    let p1 = new Promise(
        // executor 関数は Promise の成功または失敗に応じて呼ばれます
        //
       (resolve, reject) =&gt; {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise 開始 (&lt;small&gt;非同期処理開始&lt;/small&gt;)&lt;br/&gt;');
            // 非同期を作成するための一例です
            window.setTimeout(
                function() {
                    // 約束を果たしました!
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Promise が成功した時に何をするかを定めます then() で成功した時
    // catch() で失敗した時
    p1.then(
        // メッセージと値を記録します
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise 成功 (&lt;small&gt;非同期処理終了&lt;/small&gt;)&lt;br/&gt;');
        }).catch(
        // 失敗した理由を記録します
       (reason) =&gt; {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise は作成されました (&lt;small&gt;同期処理終了&lt;/small&gt;)&lt;br/&gt;');
}</pre>

<div class="hidden">
<pre class="brush: js; notranslate">if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the &lt;code&gt;Promise&lt;code&gt; interface.";
}
</pre>
</div>

<p>この例はボタンをクリックすると実行されます。 (ブラウザーが <code>Promise</code> に対応している必要があります。)</p>

<p>短い時間の間に何度かボタンをクリックすると、それぞれの promise が次々と成功するのがわかります。</p>

<p>{{EmbedLiveSample("Advanced_Example", "500", "200")}}</p>

<h3 id="Loading_an_image_with_XHR" name="Loading_an_image_with_XHR">XHR による画像の読み込み</h3>

<p><code>Promise</code> と {{domxref("XMLHttpRequest")}} で画像を読み込む別の例は、 MDN GitHub <a href="https://github.com/mdn/js-examples/tree/master/promises-test">js-examples</a> リポジトリにあり、<a href="https://mdn.github.io/js-examples/promises-test/">動作を確認する</a>ことができます。それぞれの行のコメントで Promise と XHR の構造がよくわかるはずです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise-objects', 'Promise')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Using_promises">プロミスの使用</a></li>
 <li><a href="http://promisesaplus.com/">Promises/A+ specification</a></li>
 <li><a href="https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53">Venkatraman.R - JS Promise (Part 1, Basics)</a></li>
 <li><a href="https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski">Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)</a></li>
 <li><a href="https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction">Venkatraman.R - Tools for Promises Unit Testing</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/es6/promises/">Jake Archibald: JavaScript Promises: There and Back Again</a></li>
 <li><a href="http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript">Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript</a></li>
 <li><a href="http://www.mattgreer.org/articles/promises-in-wicked-detail/">Matt Greer: JavaScript Promises ... In Wicked Detail</a></li>
 <li><a href="https://www.promisejs.org/">Forbes Lindesay: promisejs.org</a></li>
 <li><a href="https://github.com/anonyco/SPromiseMeSpeedJS/blob/master/README.md">Speed-polyfill to polyfill both promise availability and promise performance.</a></li>
 <li><a href="https://github.com/jakearchibald/es6-promise/">Promise polyfill</a></li>
 <li><a href="https://www.udacity.com/course/javascript-promises--ud898">Udacity: JavaScript Promises</a></li>
</ul>
