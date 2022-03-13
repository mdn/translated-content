---
title: Graceful asynchronous programming with Promises
slug: Learn/JavaScript/Asynchronous/Promises
translation_of: Learn/JavaScript/Asynchronous/Promises
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}</div>

<p class="summary"><span class="seoSummary"><strong>Promises</strong> 는 이전 작업이 완료될 때 까지 다음 작업을 연기 시키거나, 작업실패를 대응할 수 있는 비교적 새로운 JavaScript 기능입니다.</span> Promise는 비동기 작업 순서가 정확하게 작동되게 도움을 줍니다. 이번 문서에선 Promise가 어떻게 동작하는지, 웹 API와 어떻게 사용할 수 있는지 그리고 직접 코드를 만들어 볼것 입니다. </p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>Basic computer literacy, a reasonable understanding of JavaScript fundamentals.</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To understand promises and how to use them.</td>
  </tr>
 </tbody>
</table>

<h2 id="What_are_promises">What are promises?</h2>

<p>앞서서 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a> 를 미리 봤지만, 지금부턴 좀더 깊이있게 들여다 볼 차례 입니다..</p>

<p>Promise는 어떤 작업의 중간상태를 나타내는 오브젝트 입니다. — 미래에 어떤 종류의 결과가 반환됨을 <em>promise</em> (약속) 해주는 오브젝트라고 보면 됩니다. Promise는 작업이 완료되어 결과를 반환해주는 정확한 시간을 보장해주지는 않지만, 사용할 수 있는 결과를 반환했을때 프로그래머의 의도대로 다음 코드를 진행 시키거나, 에러가 발생했을 때 그 에러를 우아하게/깔끔하게 처리할 수 있습니다.</p>

<p>일반적으로 우리는 비동기 작업이 결과를 반환하는데 얼마의 시간이 걸리는지 보다는(<em>작업 시간이 매우 오래 걸리지 않는 한</em>) 그 결과를 사용할 수 있는지 여부에 더 관심이 있습니다.  물론 나머지 코드 블럭을 막지 않는다는 것에 있어서 매우 좋습니다.</p>

<p>우리가 Promise로 가장 많이 할 작업중 하나는 Promise를 반환하는 웹API를 사용하는 것 입니다. 가상의 비디오 채팅 애플리케이션이 있다고 해봅시다. 애플리케이션에는 친구 목록이 있고 각 친구 목록 옆의 버튼을 클릭하면 해당 친구와 비디오 채팅을 시작합니다.</p>

<p>그 버튼은 사용자 컴퓨터의 카메라와 마이크를 사용하기 위해 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 를 호출합니다. <code>getUserMedia()</code> 는 사용자가 이러한 장치를 사용할 수 있는 권한을 가지고 있는지 확인해야 하고, 어떤 마이크와 카메라를 사용할 것인지 (혹은 음성 통화인지, 아니면 다른 옵션들이 있는지)를 체크해야하기 때문에 모든 결정이 내려질 때 까지 다음 작업을 차단할 수 있습니다. 또한 카메라와 마이크가 작동하기 전 까지 다음 작업을 차단할수도 있습니다.</p>

<p><code>getUserMedia()</code> 는 브라우저의 main thread에서 실행되므로 <code>getUserMedia()</code> 결과가 반환되기 전 까지 후행 작업이 모두 차단됩니다. 이러한 blocking은 우리가 바라는게 아닙니다. Promise가 없으면 이러한 결정이 내려지기 전 까지 브라우저의 모든 것을 사용할 수 없게됩니다. 따라서 사용자가 선택한 장치를 활성화하고 소스에서 선택된 스트림에 대해{{domxref("MediaStream")}} 직접 반환하는 대신 <code>getUserMedia()</code> 는 모든 장치가 사용 가능한 상태가 되면 {{domxref("MediaStream")}}이 포함된 {{jsxref("promise")}}를 반환합니다.</p>

<p>비디오 채팅 애플리케이션의 코드는 아래처럼 작성할 수 있습니다.</p>

<pre class="brush: js notranslate">function handleCallButton(evt) {
  setStatusMessage("Calling...");
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream =&gt; {
      selfViewElem.srcObject = chatStream;
      chatStream.getTracks().forEach(track =&gt; myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connected");
    }).catch(err =&gt; {
      setStatusMessage("Failed to connect");
    });
}
</pre>

<p>이 기능은 상태 메시지에 "Calling..."을 출력하는 <code>setStatusMessage()</code> 함수로 시작하며 통화가 시도되고 있음을 나타냅니다. 그런 다음 <code>getUserMedia()</code>을 호출하여 비디오와 오디오 트랙이 모두 있는 스트림 요청을 합니다. 그리고 스트림을 획득하면 카메라에서 나오는 스트림을 "self view,"로 표시하기 위해 video엘리먼트를 설정합니다. 그리고 각 스트림의 트랙을 가져가 다른 사용자와의 연결을 나타내는 <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> {{domxref("RTCPeerConnection")}}에 추가합니다. 그리고 마지막으로 상태 메시지를 "Connected"로 업데이트 합니다.</p>

<p><code>getUserMedia()</code> 가 실패하면, <code>catch</code> 블럭이 실행되며, <code>setStatusMessage()</code> 를 사용하여 상태창에 오류 메시지를 표시합니다.</p>

<p>여기서 중요한건 <code>getUserMedia()</code>는 카메라 스트림이 아직 확보되지 않았음에도 거의 즉시 반환을 해줬다는 것 입니다. <code>handleCallButton()</code> 함수가 자신을 호출한 코드로 결과를 이미 반환을 했더라도 <code>getUserMedia()</code>의 작업이 종료되면 프로그래머가 작성한 다음 핸들러를 호출할 것 입니다. 앱이 스트리밍을 했다고 가정하지 않는 한 계속 실행될 수 있습니다.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> You can learn more about this somewhat advanced topic, if you're interested, in the article <a href="/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and video calling</a>. Code similar to this, but much more complete, is used in that example.</p>
</div>

<h2 id="The_trouble_with_callbacks">The trouble with callbacks</h2>

<p>Promise가 왜 좋은지 이해하기 위해 구식 callbacks을 살펴보고 어떤게 문제인지 파악 해보겠습니다.</p>

<p>피자를 주문한다고 생각해봅시다. 피자를 잘 주문하려면 몇 가지 단계를 진행해야 합니다. 토핑 위에 도우를 올리고 치즈를 뿌리는 등 각 단계가 뒤죽박죽 이거나 혹은 도우를 반죽하고 있는데 그 위에 토마토소스를 바르는 등 이전 작업이 끝나지 않고 다음 작업을 진행하는 것은 말이 안 됩니다.  :</p>

<ol>
 <li>먼저 원하는 토핑을 고릅니다. 결정 장애가 심할 경우 토핑을 고르는데 오래 걸릴 수 있습니다. 또한 마음을 바꿔 피자 대신 카레를 먹으려고 가게를 나올 수 있습니다.</li>
 <li>그다음 피자를 주문합니다. 식당이 바빠서 피자가 나오는 데 오래 걸릴 수 있고, 마침 재료가 다 떨어졌으면 피자를 만들 수 없다고 할 것 입니다.</li>
 <li>마지막으로 피자를 받아서 먹습니다. 그런데! 만약 지갑을 놓고 와서 돈을 내지 못한다면 피자를 먹지 못할 수 있습니다.</li>
</ol>

<p>구식 <a href="/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#Callbacks">callbacks</a>을 사용하면 아래와 같은 모습의 코드가 나타날것 입니다. :</p>

<pre class="brush: js notranslate">chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);</pre>

<p>이런 코드는 읽기도 힘들 뿐 아니라 (종종 "콜백 지옥" 이라 불림), <code>failureCallback()</code> 을 여러 번 작성해야 하며 또한 다른 문제점도 가지고 있습니다.</p>

<h3 id="Improvements_with_promises">Improvements with promises</h3>

<p>위의 상황에서 Promise를 사용하면 읽기, 작성, 실행 모두 다 쉬워집니다. callback 대신 비동기 Promise를 사용하면 아래처럼 작성할 수 있습니다.  :</p>

<pre class="brush: js notranslate">chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);</pre>

<p>보기에 훨씬 더 좋군요! — 이렇게 작성하면 앞으로 어떤 일이 일어날지 쉽게 예측 가능합니다. 그리고 단 한개의 <code>.catch()</code> 을 사용하여 모든 에러를 처리합니다. 그리고 main thread를 차단하지 않습니다. (그래서 피자를 주문하고 기다리는 동안 하던 게임을 마저 할 수 있습니다.), 또한 각 함수가 실행되기 전 이전 작업이 끝날때까지 기다립니다. 이런식으로 여러 개의 비동기 작업을 연쇄적으로 처리할 수 있습니다. 왜냐햐면 각 <code>.then()</code> 블럭은 자신이 속한 블럭의 작업이 끝났을 때의 결과를 새로운 Promise 반환해주기 때문입니다. 어때요, 참 쉽죠?</p>

<p>화살표 함수를 사용하면 코드를 조금 더 간단하게 고칠 수 있습니다. :</p>

<pre class="brush: js notranslate">chooseToppings()
.then(toppings =&gt;
  placeOrder(toppings)
)
.then(order =&gt;
  collectOrder(order)
)
.then(pizza =&gt;
  eatPizza(pizza)
)
.catch(failureCallback);</pre>

<p>혹은 아래처럼 표현할 수 있습니다. :</p>

<pre class="brush: js notranslate">chooseToppings()
.then(toppings =&gt; placeOrder(toppings))
.then(order =&gt; collectOrder(order))
.then(pizza =&gt; eatPizza(pizza))
.catch(failureCallback);</pre>

<p>화살표 함수의 <code>() =&gt; x</code> 표현은 <code>() =&gt; { return x; }</code>의 약식 표현이므로 잘 작동합니다.</p>

<p>함수는 arguments를 직접 전달 하므로 함수처럼 표현하지 않고 아래와 같이 작성할 수도 있습니다. :</p>

<pre class="brush: js notranslate">chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);</pre>

<p>그런데 이렇게 작성하면 읽기가 쉽지 않습니다. 사용자의 코드가 지금의 예제보다 더 복잡하다면 위의 방법은 사용하기 힘듭니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: 다음 장에서 배울 <code>async</code>/<code>await</code> 문법으로 좀 더 간결화 할 수 있습니다.</p>
</div>

<p>Promise는 이벤트 리스너와 유사하지만 몇 가지 다른점이 있습니다. :</p>

<ul>
 <li>Promise는 한번에 성공/실패 중 하나의 결과값을 가집니다. 하나의 요청에 두 번 성공하고나 실패할 수 없습니다. 또한 이미 성공한 작업이 다시 실패로 돌아갈 수 없고 실패한 작업이 성공으로 돌아갈 수 없습니다.</li>
 <li>If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.</li>
</ul>

<h2 id="Explaining_basic_promise_syntax_A_real_example">Explaining basic promise syntax: A real example</h2>

<p>모던 웹 API는 잠재적으로 긴 작업을 수행하는 함수에 Promise를 사용하므로 Promise가 무엇인지 이해하는것은 매우 중요합니다. 현대적인 웹 기술을 사용하려면 Promise를 사용해야합니다. 챕터의 후반부에서 직접 Promise를 만들어보겠지만, 지금은 일단 웹 API에서 접할 수 있는 몇 가지 예제를 살펴보겠습니다.</p>

<p>첫 번째로, 웹에서 이미지를 가져오기 위하여 <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch()</a></code> 메서드를 사용할 때 입니다.{{domxref("Body.blob", "blob()")}} 메서드는 fetch가 응답한 원시 body컨텐츠를 {{domxref("Blob")}} 오브젝트로 변환시켜주고{{htmlelement("img")}} 엘리먼트에 표현합니다. 이예제는 <a href="/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#Asynchronous_JavaScript">first article of the series</a>유사합니다. 다만 Promise를 사용하기 위해 약간의 변경을 하겠습니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: The following example will not work if you just run it directly from the file (i.e. via a <code>file://</code> URL). You need to run it through a <a href="/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server">local testing server</a>, or use an online solution such as <a href="https://glitch.com/">Glitch</a> or <a href="/en-US/docs/Learn/Common_questions/Using_Github_pages">GitHub pages</a>.</p>
</div>

<ol>
 <li>
  <p>먼저 <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">simple HTML template</a> 와 fetch할 이미지인 <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg">sample image file</a> 을 다운받습니다.</p>
 </li>
 <li>
  <p>HTML {{htmlelement("body")}} 하단에 {{htmlelement("script")}} 엘리먼트를 삽입합니다.</p>
 </li>
 <li>
  <p>{{HTMLElement("script")}} 엘리먼트 안에 아래와 같이 코드를 작성합니다. :</p>

  <pre class="brush: js notranslate">let promise = fetch('coffee.jpg');</pre>

  <p><code>fetch()</code> 메서드를 호출하여, 네트워크에서 fetch할 이미지의 URL을 매개변수로 전달합니다. 두 번째 매개변수를 사용할 수 있지만, 지금은 우선 간단하게 하나의 매개변수만 사용하겠습니다. 코드를 더 살펴보면 <code>promise</code>변수에 <code>fetch()</code> 작업으로 반환된 Promise 오브젝트를 저장하고 있습니다. 이전에 말했듯이, 지금 오브젝트는 성공도 아니고 실패도 아닌 중간 상태를 저장하고 있습니다. 공식적으로는 <strong>pending</strong>상태라고 부릅니다.</p>
 </li>
 <li>
  <p>작업이 성공적으로 진행될 때를 대응하기 위해 (이번 예제에선 {{domxref("Response")}} 가 반환될 때 입니다. ), 우리는 Promise 오브젝트의 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">.then()</a></code> 메서드를 호출합니다. <code>.then()</code> 블럭 안의 callback은 (<strong>executor </strong>라고 부름) Promise가 성공적으로 완료되고{{domxref("Response")}} 오브젝트를 반환할 때만 실행합니다. — 이렇게 성공한 Promise의 상태를 <strong>fulfilled</strong>라고 부릅니다. 그리고 반환된 {{domxref("Response")}} 오브젝트를 매개변수로 전달합니다.</p>

  <div class="blockIndicator note">
  <p><strong>Note</strong>: The way that a <code>.then()</code> block works is similar to when you add an event listener to an object using <code>AddEventListener()</code>. It doesn't run until an event occurs (when the promise fulfills). The most notable difference is that a .then() will only run once for each time it is used, whereas an event listener could be invoked multiple times.</p>
  </div>

  <p>그리고 즉시 <code>blob()</code> 메서드를 실행하여 Response Body가 완전히 다운로드 됐는지 확인합니다. 그리고 Response Body가 이용 가능할 때 추가 작업을 할 수 있는 <code>Blob</code> 오브젝트로 변환시킵니다. 해당 코드는 아래와 같이 작성할 수 있습니다. :</p>

  <pre class="brush: js notranslate">response =&gt; response.blob()</pre>

  <p>위의 코드는 아래의 코드를 축약한 형태입니다. </p>

  <pre class="brush: js notranslate">function(response) {
  return response.blob();
}</pre>

  <p>이제 추가 설명은 충븐하므로, JavaScript의 첫 번째 줄 아래에 다음과 같은 라인을 추가하세요.</p>

  <pre class="brush: js notranslate">let promise2 = promise.then(response =&gt; response.blob());</pre>
 </li>
 <li>
  <p>각 <code>.then()</code> 을 호출하면 새로운 Promise를 만드는데, 이는 매우 유용합니다. 왜냐하면 <code>blob()</code> 메서드도 Promise를 반환하기 때문에, 두 번째 Promise의 <code>.then()</code> 메서드를 호출함으로써 이행시 반환되는 <code>Blob</code> 오브젝트를 처리할 수 있습니다. 한 가지 메서드를 실행하여 결과를 반환하는 것보다 Blob에 좀 더 복잡한 일을 추가하고 싶습니다. 이럴때는 중괄호{ }로 묶습니다. (그렇지 않으면 에러가 발생합니다.).</p>

  <p>이어서 아래와 같은 코드를 추가합니다.:</p>

  <pre class="brush: js notranslate">let promise3 = promise2.then(myBlob =&gt; {

})</pre>
 </li>
 <li>
  <p>이제 executor 함수를 아래와 같이 채워넣습니다. 중괄호 안에 작성하면 됩니다. :</p>

  <pre class="brush: js notranslate">let objectURL = URL.createObjectURL(myBlob);
let image = document.createElement('img');
image.src = objectURL;
document.body.appendChild(image);</pre>

  <p>여기서 우리는 두 번째 Promise가 fulfills일 때 반횐된 Blob을 매개변수로 전달받는 {{domxref("URL.createObjectURL()")}} 메서드를 실행하고 있습니다. 이렇게 하면 오브젝트가 가지고있는 URL이 반환됩니다. 그 다음 {{htmlelement("img")}} 엘리먼트를 만들고, 반환된 URL을 <code>src</code> 속성에 지정하여 DOM에 추가합니다. 이렇게 하면 페이지에 그림이 표시됩니다.</p>
 </li>
</ol>

<p>If you save the HTML file you've just created and load it in your browser, you'll see that the image is displayed in the page as expected. Good work!</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: You will probably notice that these examples are somewhat contrived. You could just do away with the whole <code>fetch()</code> and <code>blob()</code> chain, and just create an <code>&lt;img&gt;</code> element and set its <code>src</code> attribute value to the URL of the image file, <code>coffee.jpg</code>. We did, however, pick this example because it demonstrates promises in a nice simple fashion, rather than for its real-world appropriateness.</p>
</div>

<h3 id="Responding_to_failure">Responding to failure</h3>

<p>현재 에러가 발생했을 때 어떻게 처리를 해야할 지 작성된 코드가 없기때문에 코드를 조금만 더 추가하여 좀 더 완벽하게 작성해봅시다. (Promise에서 에러가 발생한 상태를 <strong>rejects</strong>라 부릅니다). 이전에 봤던대로 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch">.catch()</a></code> 블럭을 추가하여 오류를 핸들링 할 수 있습니다. 아래처럼 말이죠 :</p>

<pre class="brush: js notranslate">let errorCase = promise3.catch(e =&gt; {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});</pre>

<p>에러 메시지를 확인하고 싶으면 잘못된 url을 지정해보세요, 개발자 도구 콘솔에서 에러를 확인할 수 있을것 입니다.</p>

<p>물론 <code>.catch()</code> 블록 없이 코드를 작동시킬 수 있습니다. 하지만 좀 더 깊게 생각해보면 <code>.catch()</code> 블록이 없으면 어떤 에러가 발생했는지, 어떻게 해결해야 하는지 디버깅이 어렵습니다. 실제 앱에서 <code>.catch()</code> 을 사용하여 이미지 가져오기를 다시 실행하거나, 기본 이미지를 표시하는 등 작업을 지시할 수 있습니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: You can see <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch.html">our version of the example live</a> (see the <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch.html">source code</a> also).</p>
</div>

<h3 id="Chaining_the_blocks_together">Chaining the blocks together</h3>

<p>위에서 사용한 코드는 작업이 어떻게 처리되는지 명확하게 보여주기 위해 매우 길게 코드를 작성했습니다. 이전 글에서 봤듯이, <code>.then()</code> 블럭을 사용하여 연쇄 작업을 진행할 수 있습니다. (또한 <code>.catch()</code> 블럭을 사용하여 에러 처리도 했지요). 앞선 예제의 코드는 아래와 같이 작성할 수도 있습니다. (see also <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html">simple-fetch-chained.html</a> on GitHub):</p>

<pre class="brush: js notranslate">fetch('coffee.jpg')
.then(response =&gt; response.blob())
.then(myBlob =&gt; {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e =&gt; {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});</pre>

<p>fulfilled promise 결과에 의해 반환된 값이 다음 <code>.then()</code> 블록의  executor 함수가 가진 파라미터로 전달 된다는 것을 꼭 기억하세요.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: <code>.then()</code>/<code>.catch()</code> blocks in promises are basically the async equivalent of a <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> block in sync code. Bear in mind that synchronous <code>try...catch</code> won't work in async code.</p>
</div>

<h2 id="Promise_terminology_recap">Promise terminology recap</h2>

<p>위의 섹션에서 다룬 내용은 정말 많습니다. 매우 중요한 내용을 다뤘으므로 개념을 명확히 이해하기 위해 몇번이고 다시 읽어보는게 좋습니다.</p>

<ol>
 <li>Promise가 생성되면 그 상태는 성공도 실패도 아닌 <strong>pending</strong>상태라고 부릅니다..</li>
 <li>Promise결과가 반환되면 결과에 상관 없이 <strong>resolved</strong>상태라고 부릅니다..
  <ol>
   <li>성공적으로 처리된 Promise는 <strong>fulfilled</strong>상태이다. 이 상태가 되면 Promise 체인의 다음 <code>.then()</code> 블럭에서 사용할 수 있는 값을 반환합니다.. 그리고 <code>.then()</code> 블럭 내부의 executor 함수에 Promise에서 반환된 값이 파라미터로 전달됩니다..</li>
   <li>실패한 Promise는 <strong>rejected</strong>상태이다. 이때 어떤 이유(<strong>reason)</strong> 때문에 Promise가 rejected 됐는지를 나타내는 에러 메시지를 포함한 결과가 반환됩니다. Promise 체이닝의 제일 마지막 <code>.catch()</code> 에서 상세한 에러 메시지를 확인할 수 있습니다.</li>
  </ol>
 </li>
</ol>

<h2 id="Running_code_in_response_to_multiple_promises_fulfilling">Running code in response to multiple promises fulfilling</h2>

<p>위의 예제에서 Promise사용의 기초를 확인했습니다. 이제 고급 기능들을 한번 보겠습니다. 제일 먼저 확인해볼 예제는 다음과 같습니다. 연쇄적으로 일어나는 작업은 좋습니다. 그런데 모든 Promise가 fulfilled일 경우 코드를 실행하고 싶은 경우가 있을것 입니다.</p>

<p>해당 기능을 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Promise.all()</a></code> 이라는 스테틱 메서드를 사용하여 만들 수 있습니다. 이 메서드는 Promise의 배열을 매개변수로 삼고, 배열의 모든 Promise가 fulfil일 때만 새로운 fulfil <code>Promise</code> 오브젝트를 반환합니다. 아래처럼 말이죠 :</p>

<pre class="brush: js notranslate">Promise.all([a, b, c]).then(values =&gt; {
  ...
});</pre>

<p>배열의 모든 Promise가 fulfil 이면, <code>.then()</code> 블럭의 executor 함수로의 매개변수로 Promise 결과의 배열을 전달합니다. <code>Promise.all()</code> 의 Promise의 배열 중 하나라도 reject라면, 전체 결과가 reject가 됩니다.</p>

<p>이 방법은 매우 유용합니다. 웹 UI의 컨텐츠를 동적인 방법으로 채운다고 생각 해보겠습니다. 대부분 경우에 듬성듬성 내용을 채우기보단, 완전한 내용을 채울것 입니다.</p>

<p>다른 예제를 만들어서 실행해 보겠습니다.</p>

<ol>
 <li>
  <p>이미 만들어진 <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">page template</a>을 다운받으세요 그리고 <code>&lt;/body&gt;</code> 뒤에 <code>&lt;script&gt;</code> 엘리먼트를 만들어주세요.</p>
 </li>
 <li>
  <p>이미지 그리고 텍스트 파일(<a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg">coffee.jpg</a>, <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/tea.jpg">tea.jpg</a>, and <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/description.txt">description.txt</a>)을 다운받고 <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">page template</a> 와 같은 경로에 저장해주세요.</p>
 </li>
 <li>
  <p>먼저 Promise를 반환하는 몇 가지 함수를 만들어 <code>Promise.all()</code>로 결과를 반환합니다. 세 개의 <code>fetch()</code> 작업이 끝나고 다음 요청을 진행하고 싶다면 아래 코드처럼 <code>Promise.all()</code>블럭을 작성합니다. :</p>

  <pre class="brush: js notranslate">let a = fetch(url1);
let b = fetch(url2);
let c = fetch(url3);

Promise.all([a, b, c]).then(values =&gt; {
  ...
});</pre>

  <p>Promise가 fulfilled가 됐을 때, fulfilment handler 핸들러로 전달된 <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">values</span></font> 매개변수에는 각 <code>fetch()</code> 의 결과로 발생한 세 개의 <code>Response</code> 오브젝트가 들어있습니다 .</p>

  <p>하지만 우리는 단순히 결과만 넘겨주고 싶지 않습니다. 우리는<code>fetch()</code> 언제 끝나는지 보다 불러온 데이터에 더 관심이 있습니다. 그말은 브라우저에 표현할 수 있는 Blob과 텍스트 문자열이 불러와 졌을 때 <code>Promise.all()</code> 블럭을 실행하고 싶다는 것 입니다.  <code>&lt;script&gt;</code> 엘리먼트에 아래와 같이 작성합니다. :</p>

  <pre class="brush: js notranslate">function fetchAndDecode(url, type) {
  return fetch(url).then(response =&gt; {
    if (type === 'blob') {
      return response.blob();
    } else if (type === 'text') {
      return response.text();
    }
  })
  .catch(e =&gt; {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
}</pre>

  <p>살짝 복잡해 보이므로 하나하나 살펴봅시다. :</p>

  <ol>
   <li>먼저 fetchAndDecode() 함수를 정의했고 함수의 매개변수로 컨텐츠의 URL과 가져오는 리소스의 타입을 지정합니다.</li>
   <li>함수 내부에 첫 번째 예에서 본 것과 유사한 구조를 가진 코드가 있습니다. — <code>fetch()</code> 함수를 호출하여 전달받은 URL에서 리소스를 받아오도록 했습니다. 그리고 다음 Promise를 연쇄적으로 호출하여 디코딩된 (혹은 "읽은") Response Body를 반환하게 합니다. 이전 예에선 Blob만을 가져오기 때문에 <code>blob()</code> 메서드만 썼습니다.</li>
   <li>여기에선 이전과 다른 두 가지가 있습니다. :
    <ul>
     <li>먼저 두 번째 Promise에서는 불러올 리소스의 <code>type</code> 이 무엇인지에 따라 반환받는 데이터가 다릅니다. executor 함수 내부에, 간단한 <code>if ... else if</code> 구문을 사용하여 어떤 종류의 파일을 디코딩해야 하는지에 따라 다른 Promise를 반환하게 했습니다. (이 경우 <code>blob</code> 이나 <code>text</code>밖에 없지만, 이것을 잘 활용하여 다른 코드에 확장하여 적용할 수 있습니다.).</li>
     <li>두 번째로,  <code>fetch()</code> 호출 앞에 <code>return</code> 키워드를 추가했습니다. 이렇게 하면 Promise 체이닝의 마지막 결과값을 함수의 결과로 반환해 줄 수 있습니다. (이 경우 <code>blob()</code> 혹은 <code>text()</code>메서드에 의해 반환된 Promise 입니다.) 사실상 <code>fetch()</code> 앞의 <code>return</code> 구문은 체이닝 결과를 다시 상단으로 전달하는 행위 입니다.</li>
    </ul>
   </li>
   <li>
    <p>블럭의 마지막에는 <code>.catch()</code> 블럭을 추가하여 작업중 발생한 에러를 <code>.all()</code>의 배열로 전달합니다. 아무 Promise에서 reject가 발생하면, catch 블럭은 어떤 Promise에서 에러가 발생했는지 알려줄 것 입니다.  <code>.all()</code> (아래쪽에 있는) 블럭의 리소스에 문제가 있지 않는 이상 항상 fulfil일것 입니다. <code>.all</code> 블럭의 마지막 체이닝에 <code>.catch()</code> 블럭을 추가하여 reject됐을때 확인을 할 수 있습니다.</p>
   </li>
  </ol>

  <p>함수의 body 안에 있는 코드는 비동기적이고 Promise 기반이므로, 전체 함수는 Promise로 작동합니다. — 편리하죠?.</p>
 </li>
 <li>
  <p>다음으로 fetchAndDecode() 함수를 세 번 호출하여 이미지와 텍스트를 가져오고 디코딩 하는 과정을 시작합니다. 그리고 반환된 Promise를 각각의 변수에 저장합니다. 이전 코드에 이어서 아래 코드를 추가하세요. :</p>

  <pre class="brush: js notranslate">let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');</pre>
 </li>
 <li>
  <p>다음으로 위의 세 가지 코드가 모두 fulfilled가 됐을 때 원하는 코드를 실행하기 위해 <code>Promise.all()</code> 블럭을 만듭니다. 우선, <code>.then()</code> call 안에 비어있는 executor 를 추가하세요 :</p>

  <pre class="brush: js notranslate">Promise.all([coffee, tea, description]).then(values =&gt; {

});</pre>

  <p>위에서 Promise를 포함하는 배열을 매개 변수로 사용하는 것을 확인할 수 있습니다. executor는 세 가지 Promise가 resolve될 때만 실행될 것 입니다. 그리고 executor가 실행될 때 개별적인 Promise의 결과를 포함하는 [coffee-results, tea-results, description-results] 배열을 매개 변수로 전달받을 것 입니다.  (여기선 디코딩된 Response Body 입니다.).</p>
 </li>
 <li>
  <p>마지막으로 executor 함수를 작성합니다. 예제에선 반환된 결과를 별도의 변수로 저장하기 위해 간단한 동기화 코드를 사용합니다. (Blob에서 오브젝트 URLs 생성), 그리고 페이지에 텍스트와 이미지를 표시합니다.</p>

  <pre class="brush: js notranslate">console.log(values);
// Store each value returned from the promises in separate variables; create object URLs from the blobs
let objectURL1 = URL.createObjectURL(values[0]);
let objectURL2 = URL.createObjectURL(values[1]);
let descText = values[2];

// Display the images in &lt;img&gt; elements
let image1 = document.createElement('img');
let image2 = document.createElement('img');
image1.src = objectURL1;
image2.src = objectURL2;
document.body.appendChild(image1);
document.body.appendChild(image2);

// Display the text in a paragraph
let para = document.createElement('p');
para.textContent = descText;
document.body.appendChild(para);</pre>
 </li>
 <li>
  <p>코드를 저장하고 창을 새로고치면 보기엔 좋지 않지만, UI 구성 요소가 모두 표시된 것을 볼 수 있습니다.</p>
 </li>
</ol>

<p>여기서 제공한 코드는 매우 기초적이지만, 내용을 전달하기에는 아주 좋습니다..</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: If you get stuck, you can compare your version of the code to ours, to see what it is meant to look like — <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html">see it live</a>, and see the <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html">source code</a>.</p>
</div>

<div class="blockIndicator note">
<p><strong>Note</strong>: If you were improving this code, you might want to loop through a list of items to display, fetching and decoding each one, and then loop through the results inside <code>Promise.all()</code>, running a different function to display each one depending on what the type of code was. This would make it work for any number of items, not just three.</p>

<p>Also, you could determine what the type of file is being fetched without needing an explicit <code>type</code> property. You could, for example, check the {{HTTPHeader("Content-Type")}} HTTP header of the response in each case using <code><a href="/en-US/docs/Web/API/Headers/get">response.headers.get("content-type")</a></code>, and then react accordingly.</p>
</div>

<h2 id="Running_some_final_code_after_a_promise_fulfillsrejects">Running some final code after a promise fulfills/rejects</h2>

<p>Promise의 결과가 fulfilled 인지 rejected인지 관계 없이 Promise가 완료된 후 최종 코드 블럭을 실행하려는 경우가 있을 것입니다. 이전에는 아래 예시처럼 <code>.then()</code> 블럭과<code>.catch()</code> 블럭의 callbacks에 아래와 같이 runFinalCode()를 넣었었습니다. :</p>

<pre class="brush: js notranslate">myPromise
.then(response =&gt; {
  doSomething(response);
  runFinalCode();
})
.catch(e =&gt; {
  returnError(e);
  runFinalCode();
});</pre>

<p>보다 최근의 현대 브라우저에서는 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally">.finally()</a></code> 메서드를 사용할 수 있습니다. 이 메서드를 Promise 체이닝의 끝에 배치하여 코드 반복을 줄이고 좀 더 우아하게 일을 처리할 수 있습니다. 아래와 같이 마지막 블럭에 적용할 수 있습니다. :</p>

<pre class="brush: js notranslate">myPromise
.then(response =&gt; {
  doSomething(response);
})
.catch(e =&gt; {
  returnError(e);
})
.finally(() =&gt; {
  runFinalCode();
});</pre>

<p>실제 예시는 <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-finally.html">promise-finally.html demo</a> 에 나와있습니다. (see the <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-finally.html">source code</a> also). 이 예시는 위에서 만들어본 <code>Promise.all()</code> 데모와 똑같이 작동합니다. 다만 이번에는 <code>fetchAndDecode()</code> 함수에 다음 연쇄 작업으로 <code>finally()</code> 를 호출합니다.:</p>

<pre class="brush: js notranslate">function fetchAndDecode(url, type) {
  return fetch(url).then(response =&gt; {
    if(type === 'blob') {
      return response.blob();
    } else if(type === 'text') {
      return response.text();
    }
  })
  .catch(e =&gt; {
    console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
  })
  .finally(() =&gt; {
    console.log(`fetch attempt for "${url}" finished.`);
  });
}</pre>

<p>이 로그는 각 fetch시도가 완료되면 콘솔에 메시지를 출력하여 사용자에게 알려줍니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: <code>then()</code>/<code>catch()</code>/<code>finally()</code> is the async equivalent to <code>try</code>/<code>catch</code>/<code>finally</code> in sync code.</p>
</div>

<h2 id="Building_your_own_custom_promises">Building your own custom promises</h2>

<p>여기까지 오느라 수고하셨습니다. 여기까지 오면서 우리는 Promise를 직접 만들어봤습니다. 여러 개의 Promise를 <code>.then()</code> 을 사용하여 체이닝 하거나 사용자 정의함수를 조합하여, 비동기 Promise기반 함수를 만들었습니다. 이전에 만든 <code>fetchAndDecode()</code> 함수가 이를 잘 보여주고있죠.</p>

<p>다양한 Promise 기반 API를 결합하여 사용자 정의 함수를 만드는 것은, Promise와 함께 원하는 기능을 만드는 가장 일반적인 방법이며, 대부분 모던 API는 이와 같은 원리를 기반으로 만들어지고 있습니다. 그리고 또 다른 방법이 있습니다.</p>

<h3 id="Using_the_Promise_constructor">Using the Promise() constructor</h3>

<p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise()</a></code> constructor를 사용하여 사용자 정의 Promise를 만들 수 있습니다. 주로 Promise기반이 아닌 구식 비동기 API코드를 Promise기반 코드로 만들고 싶을 경우 사용합니다. 이 방법은 구식 프로젝트 코드, 라이브러리, 혹은 프레임워크를 지금의 Promise 코드와 함께 사용할 때 유용합니다.</p>

<p>간단한 예를 들어 살펴보겠습니다. — 여기 Promise와 함께 사용되는 <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout()</a></code> 호출이 있습니다. — 이 함수는 2초 후에 "Success!"라는 문자열과 함께 resolve됩니다. (통과된 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">resolve()</a></code> 호출에 의해);</p>

<pre class="brush: js notranslate">let timeoutPromise = new Promise((resolve, reject) =&gt; {
  setTimeout(function(){
    resolve('Success!');
  }, 2000);
});</pre>

<p><code>resolve()</code> 와<code>reject()</code> 는 Promise의 fulful / reject일때의 일을 수행하기 위해 호출한 함수입니다. 이번의 경우 Promise는 "Success!"문자와 함께 fulfill 됐습니다.</p>

<p>따라서 이 Promise를 호출할 때, 그 끝에 <code>.then()</code> 블럭을 사용하면 "Success!" 문자열이 전달될 것입니다. 아래 코드는 간단한 alert메시지를 출력하는 방법 입니다. :</p>

<pre class="brush: js notranslate">timeoutPromise
.then((message) =&gt; {
   alert(message);
})</pre>

<p>혹은 아래처럼 쓸 수 있죠</p>

<pre class="brush: js notranslate">timeoutPromise.then(alert);
</pre>

<p>Try <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise.html">running this live</a> to see the result (also see the <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html">source code</a>).</p>

<p>위의 예시는 유연하게 적용된 예시가 아닙니다. — Promise는 항산 하나의 문자열로만 fulfil됩니다. 그리고 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">reject()</a></code> 조건도 정의되어있지 않습니다. (사실, <code>setTimeout()</code> 은 실패 조건이 필요없습니다, 그러니 이 예제에서는 없어도 됩니다.).</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: Why <code>resolve()</code>, and not <code>fulfill()</code>? The answer we'll give you, for now, is <em>it's complicated</em>.</p>
</div>

<h3 id="Rejecting_a_custom_promise">Rejecting a custom promise</h3>

<p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">reject()</a></code> 메서드를 사용하여 Promise가 reject상태일 때 전달할 값을 지정할 수 있습니다. —  <code>resolve()</code>와 똑같습니다. 여기엔 하나의 값만 들어갈 수 있습니다. Promise가 reject 되면 에러는 <code>.catch()</code> 블럭으로 전달됩니다.</p>

<p>이전 예시를 좀 더 확장하여 <code>reject()</code> 을 추가하고, Promise가 fulfil일 때 다른 메시지도 전달할 수 있게 만들어봅시다.</p>

<p>이전 예시 <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html">previous example</a>를 복사한 후 이미 있는 <code>timeoutPromise()</code> 함수를 아래처럼 정의해주세요. :</p>

<pre class="brush: js notranslate">function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) =&gt; {
    if (message === '' || typeof message !== 'string') {
      reject('Message is empty or not a string');
    } else if (interval &lt; 0 || typeof interval !== 'number') {
      reject('Interval is negative or not a number');
    } else {
      setTimeout(function(){
        resolve(message);
      }, interval);
    }
  });
};</pre>

<p>함수를 살펴보면 두 가지 매개변수가 있습니다. — 출력할 메시지와(<font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">message</span></font>) 메시지를 출력할 때 까지 기다릴 시간(<code>interval</code>)입니다. 맨 위에 <code>Promise</code> 오브젝트를 반환하도록 되어있습니다. 따라서 함수를 실행하면 우리가 사용하고 싶은 Promise가 반환될 것 입니다..</p>

<p>Promise constructor 안에는 몇가지 사항을 확인하기 위해 <code>if ... else</code> 구문이 있습니다. :</p>

<ol>
 <li>첫번째로 메시지의 유효성을 검사합니다. 메시지가 비어있거나 문자가 아닌 경우, 에러 메시지와 함께 Promise를 reject합니다.</li>
 <li>그 다음으로 interval의 유효성을 검사합니다. 숫자가 아니거나 음수일 경우, 에러 메시지와 함께 Promise를 reject합니다.</li>
 <li>마지막은 항목은, 두 매개변수를 확인하여 유효할 경우 <code>setTimeout()</code>함수에 지정된 interval에 맞춰 Promise를 resolve합니다.</li>
</ol>

<p><code>timeoutPromise()</code> 함수는 <code>Promise</code>를 반환하므로,  <code>.then()</code>, <code>.catch()</code>, 기타등등 을 사용해 Promise 체이닝을 만들 수 있습니다. 아래와 같이 작성해봅시다. — 기존에 있는 <code>timeoutPromise</code> 를 삭제하고 아래처럼 바꿔주세요. :</p>

<pre class="brush: js notranslate">timeoutPromise('Hello there!', 1000)
.then(message =&gt; {
   alert(message);
})
.catch(e =&gt; {
  console.log('Error: ' + e);
});</pre>

<p>이 코드를 저장하고 브라우저를 새로 고침하면 1초 후에 'Hello there!' alert가 출력될 것 입니다. 이제 메시지 내용을 비우거나 interval을 음수로 지정해보세요 그렇게 하면 Promise가 reject되며 에러 메시지를 콘솔에 출력해 줄 것입니다. 또한 resolved 메시지를 다르게 만들어 줄 수도 있습니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: You can find our version of this example on GitHub as <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise2.html">custom-promise2.html</a> (see also the <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise2.html">source code</a>).</p>
</div>

<h3 id="A_more_real-world_example">A more real-world example</h3>

<p>위의 예제는 개념을 이해하기 쉽게 단순하게 만들었지만, 실제로 그다지 비동기적이지는 않습니다. 억지로 비동기적 작업을 구현하기 위해 <code>setTimeout()</code>을 사용하여 함수를 만들었지만 사용자 정의 Promise를 만들고 에러를 다루기엔 충분한 예제였습니다.</p>

<p>좀 더 공부해볼 추가내용을 소개해주고 싶습니다. 바로 <a href="https://github.com/jakearchibald/idb/">Jake Archibald's idb library</a>입니다 이 라이브러리는 <code>Promise()</code> constructor의 비동기작업 응용을 보여주는 유용한 라이브러리 입니다. 클라이언트측에서 데이터를 저장하고 검색하기 위한 구식 callback 기반 API로 Promise와 함께 사용하는 <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB API</a>입니다. <a href="https://github.com/jakearchibald/idb/blob/master/lib/idb.js">main library file</a>을 살펴보면 우리가 지금까지 다뤄본것과 같은 종류의 테크닉을 볼 수 있습니다. 아래 코드 블록은 basic request model이 Promise를 사용하게끔 변환해 주는 IndexedDB 메서드 입니다. :</p>

<pre class="brush: js notranslate">function promisifyRequest(request) {
  return new Promise(function(resolve, reject) {
    request.onsuccess = function() {
      resolve(request.result);
    };

    request.onerror = function() {
      reject(request.error);
    };
  });
}</pre>

<p>우리가 했던것 처럼 적절한 타이밍에 Promise를 fulfil하고 reject하는 이벤트 핸들러를 두 개 추가했습니다. :</p>

<ul>
 <li><code><a href="/en-US/docs/Web/API/IDBRequest">request</a></code>의 <a href="/en-US/docs/Web/API/IDBRequest/success_event"><code>success</code> event</a>가 실행될 때, <code><a href="/en-US/docs/Web/API/IDBRequest/onsuccess">onsuccess</a></code> 핸들러에 의해 fulfill된 Promise의 request <code><a href="/en-US/docs/Web/API/IDBRequest/result">result</a></code>를 반환한다.</li>
 <li>반면 <code><a href="/en-US/docs/Web/API/IDBRequest">request</a></code>'s <a href="/en-US/docs/Web/API/IDBRequest/error_event"><code>error</code> event</a>가 실행되면 <code><a href="/en-US/docs/Web/API/IDBRequest/onerror">onerror</a></code> 핸들러에 의해 reject된 Promise의 request <code><a href="/en-US/docs/Web/API/IDBRequest/error">error</a></code>를 반환한다.</li>
</ul>

<h2 id="Conclusion">Conclusion</h2>

<p>Promises are a good way to build asynchronous applications when we don’t know the return value of a function or how long it will take to return. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous <code>try...catch</code> statement.</p>

<p>Promises work in the latest versions of all modern browsers; the only place where promise support will be a problem is in Opera Mini and IE11 and earlier versions.</p>

<p>We didn't touch on all promise features in this article, just the most interesting and useful ones. As you start to learn more about promises, you'll come across further features and techniques.</p>

<p>Most modern Web APIs are promise-based, so you'll need to understand promises to get the most out of them. Among those APIs are <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a>, <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a>, <a href="/en-US/docs/Web/API/Media_Streams_API">Media Capture and Streams</a>, and many more. Promises will be more and more important as time goes on, so learning to use and understand them is an important step in learning modern JavaScript.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise()</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Using_promises">Using promises</a></li>
 <li><a href="https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html">We have a problem with promises</a> by Nolan Lawson</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Concepts">General asynchronous programming concepts</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Introducing">Introducing asynchronous JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals">Cooperative asynchronous JavaScript: Timeouts and intervals</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Promises">Graceful asynchronous programming with Promises</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">Making asynchronous programming easier with async and await</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach">Choosing the right approach</a></li>
</ul>
