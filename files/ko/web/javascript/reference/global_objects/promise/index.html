---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - ECMAScript 2015
  - JavaScript
  - Promise
  - Reference
  - 프로미스
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
<div>{{JSRef}}</div>

<p><strong><code>Promise</code></strong> 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.</p>

<p>Promise의 작동 방식과 Promise 사용 방법에 대해 알아보려면 먼저 <a href="/ko/docs/Web/JavaScript/Guide/Using_promises">Promise 사용 방법</a>을 읽어 보십시오.</p>

<h2 id="설명">설명</h2>

<p><code>Promise</code>는 프로미스가 생성될 때 꼭 알 수 있지는 않은 값을 위한 대리자로, 비동기 연산이 종료된 이후의 결과값이나 실패 이유를 처리하기 위한 처리기를 연결할 수 있도록 합니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하지는 않고, 대신 프로미스를 반환해서 미래의 어떤 시점에 결과를 제공합니다.</p>

<p><code>Promise</code>는 다음 중 하나의 상태를 가집니다.</p>

<ul>
 <li>대기(<em>pending)</em>: 이행하거나 거부되지 않은 초기 상태.</li>
 <li>이행(<em>fulfilled)</em>: 연산이 성공적으로 완료됨.</li>
 <li>거부(<em>rejected)</em>: 연산이 실패함.</li>
</ul>

<p>대기 중인 프로미스는 값과 함께 <em>이행할</em> 수도, 어떤 이유(오류)로 인해 <em>거부</em>될 수 있습니다. 이행이나 거부될 때, 프로미스에 연결한 처리기는 그 프로미스의 <code>then</code> 메서드에 의해 대기열에 오릅니다. 이미 이행했거나 거부된 프로미스에 연결한 처리기도 호출하므로, 비동기 연산과 처리기 연결 사이에 경합 조건은 없습니다.</p>

<p>{{jsxref("Promise.prototype.then()")}} 및 {{jsxref("Promise.prototype.catch()")}} 메서드의 반환 값은 다른 프로미스이므로, 서로 연결할 수 있습니다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8633/promises.png"></p>

<div class="note">
<p><strong>혼동 주의:</strong> 느긋한 계산법 및 연산 연기를 위한 방법을 프로미스라고 부르는 다른 언어(예: Scheme)가 여럿 있습니다. 반면 JavaScript에서 프로미스는 콜백 함수를 연결할 수 있는 이미 진행 중인 프로세스를 나타냅니다. 표현식을 느긋하게 평가하려면 인수 없는 <a href="/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션">화살표 함수</a> <code>f = () =&gt; <em>expression</em></code>를 사용하고, <code>f()</code>를 사용해 평가하세요.</p>
</div>

<div class="note">
<p><strong>참고</strong>: 프로미스는 대기 중이지 않으며 이행 또는 거부됐을 때 처리(settled)됐다고 말합니다. 프로미스와 함께 쓰이는 단어 resolved는 프로미스가 다른 프로미스의 상태에 맞춰 처리됨, 또는 상태가 "잠김"되었다는 의미입니다. 용어에 관한 더 자세한 설명은 Domenic Denicola의 글 <a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md">States and fates</a>에서 볼 수 있습니다.</p>
</div>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{jsxref("Promise.Promise", "Promise()")}}</dt>
 <dd>이미 프로미스를 지원하지 않는 함수를 감쌀 때 주로 사용합니다.</dd>
</dl>

<h2 id="속성">속성</h2>

<dl>
 <dt><code>Promise.length</code></dt>
 <dd>값이 언제나 1인 길이 속성입니다. (생성자 인수의 수)</dd>
 <dt>{{jsxref("Promise.prototype")}}</dt>
 <dd><code>Promise</code> 생성자의 프로토타입을 나타냅니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{jsxref("Promise.all", "Promise.all(iterable)")}}</dt>
 <dd><code>iterable</code> 내의 모든 프로미스가 이행한 뒤 이행하고, 어떤 프로미스가 거부하면 즉시 거부하는 프로미스를 반환합니다. 반환된 프로미스가 이행하는 경우 <code>iterable</code> 내의 프로미스가 결정한 값을 모은 배열이 이행 값입니다. 반환된 프로미스가 거부하는 경우 <code>iterable</code> 내의 거부한 프로미스의 이유를 그대로 사용합니다. 이 메서드는 여러 프로미스의 결과를 모을 때 유용합니다.</dd>
 <dt>{{jsxref("Promise.race", "Promise.race(iterable)")}}</dt>
 <dd><code>iterable</code> 내의 어떤 프로미스가 이행하거나 거부하는 즉시 스스로 이행하거나 거부하는 프로미스를 반환합니다. 이행 값이나 거부 이유는 원 프로미스의 값이나 이유를 그대로 사용합니다.</dd>
</dl>

<dl>
 <dt>{{jsxref("Promise.reject()")}}</dt>
 <dd>주어진 이유로 거부하는 <code>Promise</code> 객체를 반환합니다.</dd>
</dl>

<dl>
 <dt>{{jsxref("Promise.resolve()")}}</dt>
 <dd>주어진 값으로 이행하는 <code>Promise</code> 객체를 반환합니다. 값이 <code>then</code> 가능한 (즉, <code>then</code> 메서드가 있는) 경우, 반환된 프로미스는 <code>then</code> 메서드를 따라가고 마지막 상태를 취합니다. 그렇지 않은 경우 반환된 프로미스는 주어진 값으로 이행합니다. 어떤 값이 프로미스인지 아닌지 알 수 없는 경우, {{jsxref("Promise.resolve", "Promise.resolve(value)")}} 후 반환값을 프로미스로 처리할 수 있습니다.</dd>
</dl>

<h2 id="Promise_프로토타입"><code>Promise</code> 프로토타입</h2>

<h3 id="속성_2">속성</h3>

<p>{{page('ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype','속성')}}</p>

<h3 id="메서드_2">메서드</h3>

<p>{{page('ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype','메서드')}}</p>

<h2 id="예제">예제</h2>

<h3 id="기본_예제">기본 예제</h3>

<pre class="brush: js notranslate">let myFirstPromise = new Promise((resolve, reject) =&gt; {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) =&gt; {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});</pre>

<h3 id="고급_예제">고급 예제</h3>

<p>다음의 작은 예제는 <code>Promise</code>의 동작 방식을 보여줍니다. <code>testPromise()</code> 함수는 {{HTMLElement("button")}}을 클릭할 때마다 호출되며, {{domxref("window.setTimeout()")}}을 사용해 1~3초의 무작위 간격 이후 프로미스 횟수(1부터 시작하는 숫자)로 이행하는 프로미스를 생성합니다. <code>Promise()</code> 생성자는 프로미스를 만드는 데 쓰입니다.</p>

<p>프로미스 이행은 {{jsxref("Promise.prototype.then()","p1.then()")}}을 사용하는 이행 콜백 세트를 통해 단순히 로그에 남습니다. 약간의 로그를 통해, 함수의 동기 부분이 비동기적 프로미스의 완료와 어떻게 분리되어 있는지 확인할 수 있습니다.</p>

<h4>HTML</h4>

<pre class="brush: html">&lt;button id="btn"&gt;프로미스 만들기!&lt;/button&gt;
&lt;div id="log"&gt;&lt;/div&gt;</pre>

<h4>JavaScript</h4>

<pre class="brush: js">'use strict';
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 시작 (&lt;small&gt;동기적 코드 시작&lt;/small&gt;)&lt;br/&gt;');

    // 새 프로미스 생성 - 프로미스의 생성 순서를 전달하겠다는 약속을 함 (3초 기다린 후)
    var p1 = new Promise(
        // 실행 함수는 프로미스를 이행(resolve)하거나
        // 거부(reject)할 수 있음
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') 프로미스 시작 (&lt;small&gt;비동기적 코드 시작&lt;/small&gt;)&lt;br/&gt;');
            // setTimeout은 비동기적 코드를 만드는 예제에 불과
            window.setTimeout(
                function() {
                    // 프로미스 이행 !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고,
    // 거부됐을 때 할 일은 catch() 호출로 정의
    p1.then(
        // 이행 값 기록
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') 프로미스 이행 (&lt;small&gt;비동기적 코드 종료&lt;/small&gt;)&lt;br/&gt;');
        })
    .catch(
        // 거부 이유 기록
        function(reason) {
            console.log('여기서 거부된 프로미스(' + reason + ')를 처리하세요.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 프로미스 생성 (&lt;small&gt;동기적 코드 종료&lt;/small&gt;)&lt;br/&gt;');
}

if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the &lt;code&gt;Promise&lt;code&gt; interface.";
}
</pre>

<p>이 예제는 버튼을 클릭하면 실행됩니다. <code>Promise</code>를 지원하는 브라우저가 필요합니다. 짧은 시간 안에 버튼을 여러 번 클릭하여, 서로 다른 프로미스가 번갈아 이행되는 것을 볼 수도 있습니다.</p>

<p>{{EmbedLiveSample("고급_예제", "500", "200")}}</p>

<h2 id="XHR로_이미지_불러오기">XHR로 이미지 불러오기</h2>

<p>이미지를 로드하기 위해 <code>Promise</code> 및 {{domxref("XMLHttpRequest")}}를 사용하는 또 다른 간단한 예는 MDN GitHub <a href="https://github.com/mdn/js-examples/tree/master/promises-test">js-examples</a> 저장소에서 이용할 수 있습니다. <a href="http://mdn.github.io/promises-test/">실제 예</a>를 볼 수도 있습니다. 각 단계에 주석이 붙어있어, 프로미스 및 XHR 구조를 차근차근 따라갈 수 있습니다.</p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">상태</th>
   <th scope="col">설명</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>ECMA 표준에서 초기 정의.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<p>{{Compat("javascript.builtins.Promise")}}</p>
</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises">프로미스 사용하기</a></li>
 <li><a href="http://promisesaplus.com/">Promises/A+ 스펙</a></li>
 <li><a href="https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53">Venkatraman.R - JS Promise (Part 1, Basics)</a></li>
 <li><a href="https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski">Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)</a></li>
 <li><a href="https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction">Venkatraman.R - Tools for Promises Unit Testing</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/es6/promises/">Jake Archibald: JavaScript Promises: There and Back Again</a></li>
 <li><a href="http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript">Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript</a></li>
 <li><a href="http://www.mattgreer.org/articles/promises-in-wicked-detail/">Matt Greer: JavaScript Promises ... In Wicked Detail</a></li>
 <li><a href="https://www.promisejs.org/">Forbes Lindesay: promisejs.org</a></li>
 <li><a href="https://github.com/jakearchibald/es6-promise/">Promise polyfill</a></li>
 <li><a href="https://www.udacity.com/course/javascript-promises--ud898">Udacity: JavaScript Promises</a></li>
</ul>
