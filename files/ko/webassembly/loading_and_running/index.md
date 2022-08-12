---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
translation_of: WebAssembly/Loading_and_running
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">자바 스크립트에서 WebAssembly를 사용하려면 먼저 컴파일 / 인스턴스화 전에 모듈을 메모리로 가져와야합니다. 여기서 WebAssembly 바이트 코드를 가져 오는 데 사용할 수있는 다양한 메커니즘에 대한 참조와 함께 컴파일 / 인스턴스화 및 실행 방법에 대해 설명합니다.</p>

<h2 id="뭐가_문제인가요">뭐가 문제인가요 ?</h2>

<p>WebAssembly는 아직 <code>&lt;script type='module'&gt;</code> 또는 ES2015 <code>import</code> statements와 통합되어 있지 않으므로 imports를 사용하여 브라우저에서 가져올 방법이 없습니다.</p>

<p>이전의 {{jsxref ( "WebAssembly.compile")}} / {{jsxref ( "WebAssembly.instantiate")}} 메소드를 사용하려면 WebAssembly 모듈 바이너리를 포함하는 {{domxref ( "ArrayBuffer")}}를 생성해야합니다. 원시 바이트를 가져온 다음 컴파일 / 인스턴스화합니다. 이것은 <code>new Function(string)</code>과 유사합니다. 단, 문자열 (JavaScript 소스 코드)을 바이트 배열 버퍼 (WebAssembly 소스 코드)로 대체한다는 점만 다릅니다.</p>

<p>최신 {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} 방법이 훨씬 더 효율적입니다. <br>
 네트워크에서는 {{domxref("ArrayBuffer")}} 단계가 필요하지 않게 하면서 직접 바이트의 원시 스트림에 대한 작업을 수행합니다.</p>

<p>그러면 어떻게 이 바이트를 어레이 버퍼에 넣고 컴파일할 수 있을까요? 다음 단원에서 설명합니다.</p>

<h2 id="Using_Fetch">Using Fetch</h2>

<p><a href="/ko/docs/Web/API/Fetch_API">Fetch</a>는 네트워크 리소스를 가져 오는 편리한 최신 API입니다.</p>

<p>wasm 모듈을 가져오는 가장 빠르고 효율적인 방법은 새로운 {{jsxref("WebAssembly.instantiateStreaming()")}} 방법을 사용하는 것입니다. 이 method는 첫번째 인수로 fetch() 호출을 수행할 수 있는 메서드이며, 서버에서 스트리밍할 때 원시 바이트 코드에 액세스하면서 모듈 가져오기, 컴파일 및 인스턴스화를 한 번에 처리합니다.</p>

<pre><code>WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(results =&gt; {
  // Do something with the results!
});</code>
</pre>

<p>직접 스트림에서 작동하지 않는 이전 {{domxref ( "WebAssembly.instantiate")}} 메서드를 사용한 경우에는 가져온 바이트 코드를 {{domxref ( "ArrayBuffer ")}}로 변환하는 추가단계가 필요합니다.</p>

<pre><code>fetch('module.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(results =&gt; {
  // Do something with the results!
});</code></pre>

<p> </p>

<h3 id="Aside_on_instantiate()_overloads">Aside on instantiate() overloads</h3>

<p>{{jsxref("WebAssembly.instantiate()")}} 함수에는 두 가지 오버로드 양식이 있습니다. 위에 표시된 형식은 바이트 코드를 인수로 컴파일하여 컴파일된 모듈 객체가 포함된 개체로 resolve되는 'promise'을 반환합니다. 개체는 다음과 같습니다.</p>

<pre><code>{
  module : Module // The newly compiled WebAssembly.Module object,
  instance : Instance // A new WebAssembly.Instance of the module object
}</code></pre>

<div class="note">
<p><strong>Note</strong>: 일반적으로 인스턴스자체만 신경 쓰지만,  모듈을 캐시하거나, <code><a href="/ko/docs/Web/API/MessagePort/postMessage">postMessage()</a></code>를 통해 다른 worker나 윈도우와 공유하거나, 단순히 인스턴스를 더 생성하고자 할 때도 유용합니다. </p>
</div>

<div class="note">
<p><strong>Note</strong>: 두 번째 오버로드 형식은 {{jsxref ( "WebAssembly.Module")}} 객체를 인수로 사용하여 인스턴스 객체를 직접 포함하는 promise를 결과로 반환합니다. <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example">Second overload</a> 예제를 참조하십시오.</p>
</div>

<h3 id="Running_your_WebAssembly_code">Running your WebAssembly code</h3>

<p>JavaScript에서 WebAssembly 인스턴스를 사용할 수있게되면 {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}} 속성을 통해 내 보낸 속성을 사용할 수 있습니다 . 코드는 다음과 같습니다.</p>

<pre><code>WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
.then(obj =&gt; {
  // Call an exported function:
  obj.instance.exports.exported_func();

  // or access the buffer contents of an exported memory:
  var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

  // or access the elements of an exported table:
  var table = obj.instance.exports.table;
  console.log(table.get(0)());
})</code></pre>

<div class="note">
<p><strong>Note</strong>: WebAssembly 모듈에서 내보내는 방법에 대한 자세한 내용은 <a href="/ko/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a> 및 <a href="/ko/docs/WebAssembly/Understanding_the_text_format">Understanding WebAssembly text format</a>를 참조하십시오.</p>
</div>

<h2 id="Using_XMLHttpRequest">Using XMLHttpRequest</h2>

<p><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code>는 Fetch보다 다소 오래된 방법이지만 형식화 된 배열을 얻는 데 부족함이 없습니다. <code>simple.wasm</code>을 그대로 사용하여 진행하겠습니다.</p>

<ol>
 <li>새로운 {{domxref("XMLHttpRequest()")}} 인스턴스를 만들고 {{domxref("XMLHttpRequest.open","open()")}} 메서드를 사용하여 요청을 열고 요청 메서드를 GET으로 설정합니다. , 가져올 파일의 경로를 선언하십시오.</li>
 <li>핵심 부분은 {{domxref("XMLHttpRequest.responseType","responseType")}} 속성을 사용하여 응답 유형을 <code>'arraybuffer'</code>로 설정하는 것입니다.</li>
 <li>그런 다음 {{domxref("XMLHttpRequest.send()")}}을 사용하여 요청을 전송합니다.</li>
 <li>그런 다음 응답이 다운로드 완료되면 함수를 호출하기 위해 {{domxref("XMLHttpRequest.onload", "onload")}} 이벤트 핸들러를 사용합니다. 이 함수에서는 {{domxref("XMLHttpRequest.response", "response")}} 프로퍼티를 생성 한 다음, Fetch와 마찬가지로 {{jsxref("WebAssembly.instantiate()")}} 메소드로 넘겨 줍니다.</li>
</ol>

<p>최종코드는 다음과 같습니다.</p>

<pre><code>request = new XMLHttpRequest();
request.open('GET', 'simple.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then(results =&gt; {
    results.instance.exports.exported_func();
  });
};</code>
</pre>

<div class="note"><strong>Note</strong>: <a href="https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html">xhr-wasm.html</a> 에서도 예제를 확인할 수 있습니다.</div>
