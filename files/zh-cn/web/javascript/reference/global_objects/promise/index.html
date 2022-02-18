---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - ECMAScript 2015
  - ES6
  - JavaScript
  - Promise
  - Promise A+
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
<p>{{JSRef}}</p>

<p><strong>Promise </strong>对象用于表示一个异步操作的最终完成 (或失败)及其结果值。</p>

<p>若想了解 promises 的工作方式以及如何使用它们，我们建议您先阅读<a href="/zh-CN/docs/Web/JavaScript/Guide/Using_promises">使用 promises</a></p>

<h2 id="描述">描述</h2>

<p>一个 <code>Promise</code> 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 <em>promise</em>，以便在未来某个时候把值交给使用者。</p>

<p>一个 <code>Promise</code> 必然处于以下几种状态之一：</p>

<ul>
 <li><em>待定（pending）</em>: 初始状态，既没有被兑现，也没有被拒绝。</li>
 <li><em>已兑现（fulfilled）</em>: 意味着操作成功完成。</li>
 <li><em>已拒绝（rejected）</em>: 意味着操作失败。</li>
</ul>

<p>待定状态的 Promise 对象要么会通过一个值<em>被兑现（fulfilled）</em>，要么会通过一个原因（错误）<em>被拒绝（rejected）</em>。当这些情况之一发生时，我们用 promise 的 then 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，因此在完成异步操作和绑定处理方法之间不会存在竞争状态。</p>

<p>因为 <code>{{jsxref("Promise.then", "Promise.prototype.then")}}</code> 和  <code>{{jsxref("Promise.catch", "Promise.prototype.catch")}}</code> 方法返回的是 promise， 所以它们可以被链式调用。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8633/promises.png"></p>

<div class="note">
<p><strong>备注：</strong> 有一些语言中有惰性求值和延时计算的特性，它们也被称为“promises”，例如 Scheme。JavaScript 中的 promise 代表的是已经正在发生的进程， 而且可以通过回调函数实现链式调用。 如果您想对一个表达式进行惰性求值，就考虑一下使用无参数的"<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions">箭头函数</a>":  <code>f = () =&gt;</code><em><code>表达式</code> </em>来创建惰性求值的表达式<em>，</em>使用 <code>f()</code><strong> </strong>求值。</p>
</div>

<div class="note">
<p><strong>备注：</strong> 如果一个 promise 已经被兑现（fulfilled）或被拒绝（rejected），那么我们也可以说它处于<em>已敲定（settled）</em>状态。您还会听到一个经常跟 promise 一起使用的术语：<em>已决议（resolved）</em>，它表示 promise 已经处于已敲定(settled)状态，或者为了匹配另一个 promise 的状态被"锁定"了。Domenic Denicola 的 <a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md">States and fates</a> 中有更多关于 promise 术语的细节可以供您参考。</p>
</div>

<h3 id="Promise的链式调用">Promise的链式调用</h3>

<p>我们可以用 <code>promise.then()</code>，<code>promise.catch()</code> 和 <code>promise.finally()</code> 这些方法将进一步的操作与一个变为已敲定状态的 promise 关联起来。这些方法还会返回一个新生成的 promise 对象，这个对象可以被非强制性的用来做链式调用，就像这样：</p>

<pre>const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA,handleRejectedA)
  .then(handleFulfilledB,handleRejectedB)
  .then(handleFulfilledC,handleRejectedC);

// 或者，这样可能会更好...

const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);</pre>

<p>过早地处理被拒绝的 promise 会对之后 promise 的链式调用造成影响。不过有时候我们因为需要马上处理一个错误也只能这样做。（有关应对影响的技巧，请参见下面示例中的 <code>throw -999</code> ）另一方面，在没有迫切需要的情况下，可以在最后一个.catch() 语句时再进行错误处理，这种做法更加简单。</p>

<p>这两个函数的签名很简单，它们只接受一个任意类型的参数。这些函数由您（编程者）编写。这些函数的终止状态决定着链式调用中下一个promise的"已敲定 （settled）"状态是什么。任何不是 <code>throw</code> 的终止都会创建一个"已决议（resolved）"状态，而以 <code>throw</code> 终止则会创建一个"已拒绝"状态。</p>

<pre>handleFulfilled(value)       { /*...*/; return nextValue;  }
handleRejection(reason)  { /*...*/; throw  nextReason; }
handleRejection(reason)  { /*...*/; return nextValue;  }</pre>

<p>被返回的 <code>nextValue</code> 可能是另一个promise对象，这种情况下这个promise会被动态地插入链式调用。 </p>

<p>当 <code>.then()</code> 中缺少能够返回 promise 对象的函数时，链式调用就直接继续进行下一环操作。因此，链式调用可以在最后一个 <code>.catch()</code> 之前把所有的 <code>handleRejection</code> 都省略掉。类似地， <code>.catch()</code> 其实只是没有给 <code>handleFulfilled</code> 预留参数位置的 <code>.then()</code> 而已。</p>

<p>链式调用中的 promise 们就像俄罗斯套娃一样，是嵌套起来的，但又像是一个栈，每个都必须从顶端被弹出。链式调用中的第一个 promise 是嵌套最深的一个，也将是第一个被弹出的。</p>

<pre>(promise D, (promise C, (promise B, (promise A) ) ) )</pre>

<p>当存在一个 <code>nextValue</code> 是 promise 时，就会出现一种动态的替换效果。<code>return</code> 会导致一个 promise 被弹出，但这个 <code>nextValue</code> promise 则会被推入被弹出 promise 原来的位置。对于上面所示的嵌套场景，假设与 "promise B" 相关的 <code>.then()</code> 返回了一个值为 "promise X" 的 <code>nextValue</code> 。那么嵌套的结果看起来就会是这样：</p>

<pre>(promise D, (promise C, (promise X) ) )</pre>

<p>一个 promise 可能会参与不止一次的嵌套。对于下面的代码，<code>promiseA</code> 向"已敲定"（"settled"）状态的过渡会导致两个实例的 <code>.then</code> 都被调用。</p>

<pre>const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2); </pre>

<p>一个已经处于"已敲定"（"settled"）状态的 promise 也可以接收操作。在那种情况下，（如果没有问题的话，）这个操作会被作为第一个异步操作被执行。注意，所有的 promise 都一定是异步的。因此，一个已经处于"已敲定"（"settled"）状态的 promise 中的操作只有 promise 链式调用的栈被清空了和一个事件循环过去了之后才会被执行。这种效果跟 <code>setTimeout(action, 10)</code> 特别相似。</p>

<pre>const promiseA = new Promise( (resolutionFunc,rejectionFunc) =&gt; {
    resolutionFunc(777);
});
// 这时，"promiseA" 已经被敲定了。
promiseA.then( (val) =&gt; console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
</pre>

<h2 id="构造函数">构造函数</h2>

<dl>
 <dt>{{jsxref("Promise/Promise", "Promise()")}}</dt>
 <dd>创建一个新的 <code>Promise</code> 对象。该构造函数主要用于包装还没有添加 promise 支持的函数。</dd>
</dl>

<h2 id="静态方法">静态方法</h2>

<dl>
 <dt>{{jsxref("Promise.all", "Promise.all(iterable)")}}</dt>
 <dd>这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）</dd>
 <dt>{{jsxref("Promise.allSettled", "Promise.allSettled(iterable)")}}</dt>
 <dd>等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。<br>
 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。</dd>
 <dt>{{jsxref("Promise.any", "Promise.any(iterable)")}}</dt>
 <dd>接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。</dd>
 <dt>{{jsxref("Promise.race", "Promise.race(iterable)")}}</dt>
 <dd>当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。</dd>
 <dt>{{jsxref("Promise.reject", "Promise.reject(reason)")}}</dt>
 <dd>返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法</dd>
 <dt>{{jsxref("Promise.resolve", "Promise.resolve(value)")}}</dt>
 <dd>返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。</dd>
</dl>

<h2 id="Promise_原型">Promise 原型</h2>

<h3 id="属性">属性</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/Promise/prototype','属性')}}</p>

<h3 id="方法">方法</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/Promise/prototype','方法')}}</p>

<h2 id="创建Promise">创建Promise</h2>

<p><code>Promise</code> 对象是由关键字 <code>new</code> 及其构造函数来创建的。该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——<code>resolve</code> 和 <code>reject</code> ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 <code>resolve</code> 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用<code>reject</code> 函数。</p>

<pre class="brush: js">const myFirstPromise = new Promise((resolve, reject) =&gt; {
  // ?做一些异步操作，最终会调用下面两者之一:
  //
  //   resolve(someValue); // fulfilled
  // ?或
  //   reject("failure reason"); // rejected
});</pre>

<p>想要某个函数拥有promise功能，只需让其返回一个promise即可。</p>

<pre class="brush: js">function myAsyncFunction(url) {
  return new Promise((resolve, reject) =&gt; {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () =&gt; resolve(xhr.responseText);
    xhr.onerror = () =&gt; reject(xhr.statusText);
    xhr.send();
  });
};</pre>

<h2 id="示例">示例</h2>

<h3 id="基础示例">基础示例</h3>

<pre class="brush: js">let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
});
</pre>

<h3 id="高级示例">高级示例</h3>

<pre class="brush: html">&lt;button id="btn"&gt;Make a promise!&lt;/button&gt;
&lt;div id="log"&gt;&lt;/div&gt;
</pre>

<p>本例展示了 <code>Promise</code> 的一些机制。 <code>testPromise()</code> 方法在每次点击 {{HTMLElement("button")}} 按钮时被调用，该方法会创建一个promise 对象，使用 {{domxref("window.setTimeout()")}} 让Promise等待 1-3 秒不等的时间来填充数据（通过Math.random()方法）。</p>

<p>Promise 的值的填充过程都被日志记录（logged）下来，这些日志信息展示了方法中的同步代码和异步代码是如何通过Promise完成解耦的。</p>

<pre class="brush: js">'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 开始 (&lt;small&gt;同步代码开始&lt;/small&gt;)&lt;br/&gt;');

    // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
    let p1 = new Promise(
        // resolver 函数在 Promise 成功或失败时都可能被调用
       (resolve, reject) =&gt; {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise 开始 (&lt;small&gt;异步代码开始&lt;/small&gt;)&lt;br/&gt;');
            // 创建一个异步调用
            window.setTimeout(
                function() {
                    // 填充 Promise
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Promise 不论成功或失败都会调用 then
    // catch() 只有当 promise 失败时才会调用
    p1.then(
        // 记录填充值
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise 已填充完毕 (&lt;small&gt;异步代码结束&lt;/small&gt;)&lt;br/&gt;');
        })
    .catch(
        // 记录失败原因
       (reason) =&gt; {
            console.log('处理失败的 promise ('+reason+')');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (&lt;small&gt;同步代码结束&lt;/small&gt;)&lt;br/&gt;');
}</pre>

<pre class="brush:js">if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the &lt;code&gt;Promise&lt;code&gt; interface.";
}
</pre>

<p>点击下面的按钮可以看到示例代码运行的效果，前提是您的浏览器支持 <code>Promise</code>。快速点击按钮多次您会观察到Promises填充值的过程。</p>

<p>{{EmbedLiveSample("高级一点的例子", "500", "200")}}</p>

<h2 id="使用_XHR_加载图像">使用 XHR 加载图像</h2>

<p>另一个用了 Promise 和<a href="/en-US/docs/Web/API/XMLHttpRequest"> XMLHttpRequest</a> 加载一个图像的例子可在MDN GitHub<a href="https://github.com/mdn/js-examples/tree/master/promises-test"> promise-test</a> 中找到。 您也可以<a href="https://mdn.github.io/js-examples/promises-test/">看这个实例</a>。每一步都有注释可以让您详细的了解Promise和XHR架构。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>ECMA标准中的首次定义</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.builtins.Promise")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Using promises</a></li>
 <li><a href="http://promisesaplus.com/">Promises/A+ specification</a></li>
 <li><a href="https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53">Venkatraman.R - JS Promise (Part 1, Basics)</a></li>
 <li><a href="https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski">Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)</a></li>
 <li><a href="https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction">Venkatraman.R - Tools for Promises Unit Testing</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/es6/promises/">Jake Archibald: JavaScript Promises: There and Back Again</a></li>
 <li><a href="http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript">Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patter in JavaScript</a></li>
 <li><a href="http://www.mattgreer.org/articles/promises-in-wicked-detail/">Matt Greer: JavaScript Promises ... In Wicked Detail</a></li>
 <li><a href="https://www.promisejs.org/">Forbes Lindesay: promisejs.org</a></li>
 <li><a href="https://github.com/anonyco/SPromiseMeSpeedJS/blob/master/README.md">Speed-polyfill to polyfill both promise availability and promise performance.</a></li>
 <li><a href="http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html">Nolan Lawson: We have a problem with promises — Common mistakes with promises</a></li>
 <li><a href="https://github.com/jakearchibald/es6-promise/">Promise polyfill</a></li>
 <li><a href="https://www.udacity.com/course/javascript-promises--ud898">Udacity: JavaScript Promises</a></li>
</ul>
