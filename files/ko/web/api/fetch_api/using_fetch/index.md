---
title: Using Fetch
slug: Web/API/Fetch_API/Using_Fetch
translation_of: Web/API/Fetch_API/Using_Fetch
original_slug: Web/API/Fetch_API/Fetch의_사용법
---
<p><a href="/ko/docs/Web/API/Fetch_API">Fetch API</a>를 이용하면 Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능합니다. 또한 {{domxref("GlobalFetch.fetch","fetch()")}} 메서드를 이용하는 것으로 비동기 네트워크 통신을 알기쉽게 기술할 수 있습니다.</p>

<p>이전에 이러한 기능을  {{domxref("XMLHttpRequest")}}에서 제공하고 있었습니다. Fetch는 이러한 API의 대체제로 {{domxref("ServiceWorker_API", "Service Workers")}}같은 기술로 간단히 이용하는것이 가능합니다. 또한 CORS나 HTTP확장같은  HTTP에 관련한 개념을 모아 정의하고 있습니다.</p>

<p>Fetch의 기본 스펙은<code>jQuery.ajax()</code>와 기본적으로 두가지가 다르다는 사실에 유념해야합니다.</p>

<ul>
 <li><code>fetch()</code>로 부터 반환되는 Promise 객체는 <strong>HTTP error 상태를 reject하지 않습니다.</strong> HTTP Status Code가 404나 500을 반환하더라도요. 대신 ok 상태가 false인 resolve가 반환되며, 네트워크 장애나 요청이 완료되지 못한 상태에는 reject가 반환됩니다.</li>
 <li>보통 <code>fetch</code>는 <strong>쿠키를 보내거나 받지 않습니다.</strong>  사이트에서 사용자 세션을 유지 관리해야하는 경우 인증되지 않는 요청이 발생합니다. 쿠키를 전송하기 위해서는 자격증명(credentials) 옵션을 반드시 설정해야 합니다.<br>
  <a href="https://github.com/whatwg/fetch/pull/585">2017년 8월 25일</a> 이후. 기본 자격증명(credentials) 정책이 <code>same-origin</code> 으로 변경되었습니다. 파이어폭스는 61.0b13 이후 변경되었습니다.</li>
</ul>

<p>기본적인 fetch는 누구라도 알기쉽고 간단하게 작성할 수 있습니다. 아래의 코드를 봐주시기 바랍니다.</p>

<pre class="brush: js notranslate">fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });</pre>

<p>네트워크에서 JSON 파일을 가져 와서 콘솔에 인쇄합니다. 간단한 <code>fetch()</code> 사용 흐름은 인수 한개(가져올 자원의 경로)를 가져오고 응답을 포함하는 약속 ({{domxref ( "Response")}} 개체)을 반환하는 것입니다.</p>

<p>이것은 단순한 HTTP Response이며, 실제 JSON이 아닙니다. response 객체로부터 사진을 가져오기 위해서는 {{domxref("Body.json","json()")}} 메서드를 사용할 필요가 있습니다. ({{domxref("Body")}}의 믹스인 (역주:php의 트레이드와 같은것입니다. )으로 정의되어, 이것은 {{domxref("Request")}} 객체와 {{domxref("Response")}} 객체의 쌍방에 구현되어 있습니다.</p>

<div class="note">
<p><strong>노트</strong>: http Request와 http Response의 Body mixin은 Body 컨텐츠를 다른 mine 타입으로 사용하는 비슷한 메서드를 제공하고 있습니다.  상세한 내용은 {{anch("Body")}} 섹션을 참고해 주시기 바랍니다.</p>
</div>

<p>Fetch Reqeust는 검색된 리소스로부터의 지시가 아닌 <a href="/ko/docs/Security/CSP/CSP_policy_directives">CSP</a>의<code>connect-src</code>의 디렉티브(directive)에 의해 제어됩니다.</p>

<h3 id="리퀘스트의_옵션_적용">리퀘스트의 옵션 적용</h3>

<p><code>fetch()</code> 메서드에 두번째 파라미터를 적용하는것도 가능합니다. <code>init</code> 오브젝트는 다른 여러 세팅을 컨트롤 할 수 있게 해줍니다.</p>

<p>모든 설정 가능한 옵션의 상세 설명은 {{domxref("GlobalFetch.fetch","fetch()")}}를 참고해주시기 바랍니다.</p>

<pre class="notranslate"><code>// Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data =&gt; console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error =&gt; console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response =&gt; response.json()); // parses JSON response into native JavaScript objects
}</code>
</pre>

<h3 id="자격_증명credentials이_포함된_Request_요청">자격 증명(credentials)이 포함된 Request 요청</h3>

<p>자격 증명이 포함된 인증서를 보내도록 하려면 <code>fetch()</code> 메서드에 <code>credentials: 'include'</code>를 추가하도록 합니다. 이것은 cross-origin 요청에서도 사용됩니다.</p>

<pre class="notranslate"><code>fetch('https://example.com', {
  credentials: 'include'
})</code></pre>

<p>요청하려는 URL이 호출 스크립트와 동일한 origin을 가지고 있을때만 자격증명을 전송하려면 <code>credentials: 'same-origin'</code>를 추가해 주시기 바랍니다.</p>

<pre class="notranslate"><code>// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
})</code></pre>

<p>브라우저의 보안을 유지하는것 대신 자격증명을 포함하지 않는것을 원한다면 <code>credentials: 'omit'</code>를 작성해 주시기 바랍니다.</p>

<pre class="notranslate"><code>fetch('https://example.com', {
  credentials: 'omit'
})</code>
</pre>

<h3 id="Uploading_JSON_data">Uploading JSON data</h3>

<p>POST프로토콜로 JSON인코딩된 데이터를 보내기 위해 {{domxref("GlobalFetch.fetch","fetch()")}}를 사용합니다.</p>

<pre class="notranslate"><code>var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res =&gt; res.json())
.then(response =&gt; console.log('Success:', JSON.stringify(response)))
.catch(error =&gt; console.error('Error:', error));</code></pre>

<h3 id="Uploading_a_file">Uploading a file</h3>

<p><code>&lt;input type="file" /&gt;</code> input엘리먼트, {{domxref("FormData.FormData","FormData()")}}, {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}}를 사용하여 파일을 업로드 할 수 있습니다.</p>

<pre class="notranslate"><code>var formData = new FormData();
var fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response =&gt; response.json())
.catch(error =&gt; console.error('Error:', error))
.then(response =&gt; console.log('Success:', JSON.stringify(response)));</code></pre>

<h3 id="Uploading_multiple_files">Uploading multiple files</h3>

<p><code>&lt;input type="file" multiple /&gt;</code> input엘리먼트와{{domxref("FormData.FormData","FormData()")}}, {{domxref("GlobalFetch.fetch","fetch()")}}를 사용하여 파일 다중업로드를 할 수 있습니다.</p>

<pre class="notranslate"><code>var formData = new FormData();
var photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (var i = 0; i &lt; photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
.then(response =&gt; response.json())
.then(response =&gt; console.log('Success:', JSON.stringify(response)))
.catch(error =&gt; console.error('Error:', error));</code></pre>

<h3 id="문서_파일을_열단위로_처리하기">문서 파일을 열단위로 처리하기</h3>

<p>응답하는 곳에서 읽는 덩어리들은 줄 단위로 깔끔하게 떨어지지 않으며 문자열이 아니라 Uint8Arrys(8비트 부호 없는 정수)입니다. 만약 텍스트 파일은 fetch하고 이것을 줄 단위로 처리하고자 한다면, 이런 복잡함을 다루는 것은 사용자에게 달려있습니다. 아래의 예시는 line iterator를 생성하여 처리하는 한가지 방법을 보여주고 있습니다. (간단하게 하기위해, 텍스트는 UTF-8이라고 가정하며,  fetch errors를 다루지 않는다고 합시다).</p>

<pre class="notranslate"><code>async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let {value: chunk, done: readerDone} = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({value: chunk, done: readerDone} = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex &lt; chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}</code></pre>

<h3 id="fetch의_성공_여부를_체크">fetch의 성공 여부를 체크</h3>

<p>한가지 예를 들자면, 네트워크 error가 발생했을때 또는 CORS 가 서버단에서 잘못 설정되어있다면 {{domxref("GlobalFetch.fetch","fetch()")}} promise 객체는 {{jsxref("TypeError")}} 메시지와 함께 반려 할것입니다. 비록 이 현상은 보통 허가 이슈나 그와 비슷한 것을 의미할지라도, 404 는 네트워크 error를 구성하지는 않습니다.  성공적인 <code>fetch()</code> 를 체크하는 정확한 방법은 promise 객체가 해결되었는지를 체크하는 것을 포함합니다. 그리고 {{domxref("Response.ok")}} property 가 "true"의 값을 가지고 있는지 확인하는 것입니다. 코드는 아래와 같이 구현될겁니다:</p>

<pre class="notranslate"><code>fetch('flowers.jpg').then(function(response) {
  if(response.ok) {
    return response.blob();
  }
  throw new Error('Network response was not ok.');
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
}).catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});</code></pre>

<h3 id="request_객체를_fetch로_전달">request 객체를 fetch로 전달</h3>

<p><code>fetch()</code>를 사용해 요청한 리소스의 경로를 전달하는것 대신{{domxref("Request.Request","Request()")}} 생성자를 사용해 Request 객체를 작성하여 <code>fetch()</code> 메서드를 인수로 전달하는것도 가능합니다.</p>

<pre class="notranslate"><code>var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});</code></pre>

<p><code>fetch()</code>메서드의 인수와 똑같은 인수를 <code>Request()</code>객체에 전달하여 적용하는것이 가능합니다. 또한 Request 객체의 클론을 생성하기 위해 이미 존재하는 Request 객체를 전달하는것도 가능합니다.</p>

<pre class="brush: js notranslate">var anotherRequest = new Request(myRequest,myInit);</pre>

<p>이것은 Request와 Resposne의 Body를 하나만 사용하고 있으므로 사용성이 높습니다.필요하면 <code>init</code> 객체를 변화시켜 Response나 Request를 재사용할 수 있도록 복사합니다. The copy must be made before the body is read, and reading the body in the copy will also mark it as read in the original request.</p>

<div class="note">
<p><strong>노트</strong>: {{domxref("Request.clone","clone()")}} 메서드를 사용해 Request 객체의 클론을 생성할 수 있습니다. 다른 카피 메서드와 약간 다른 의미가 있습니다. 이전 요청의 body가 이미 읽어들여진 경우 전자는  실패하지만 <code>clone()</code>메서드는 실패하지 않습니다. 이 기능은 Response와 동일합니다.</p>
</div>

<h2 id="Headers">Headers</h2>

<p>{{domxref("Headers")}} 인터페이스에서  {{domxref("Headers.Headers","Headers()")}} 생성자를 사용해 헤더 객체를 생성할 수 있습니다. 헤더 객체는 Key와 Value로 이루어진 간단한 multi-map입니다.</p>

<pre class="brush: js notranslate">var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");</pre>

<p>똑같이 배열을 전달하거나 객체 리터럴을 생성자에 전달하는것으로 생성할 수 있습니다.</p>

<pre class="brush: js notranslate">myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});</pre>

<p>다음과 같은 코드로 헤더의 내용을 들여다 볼 수 있습니다.</p>

<pre class="brush: js notranslate">console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.getAll("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.getAll("X-Custom-Header")); // [ ]</pre>

<p>이러한 몇몇개의 조작법은 {{domxref("ServiceWorker_API","ServiceWorkers")}}에서밖에 도움되지 않지만 헤더를 조작하기 위해서 보다 나은 API를 제공하고 있습니다.</p>

<p>모든 Header 메서드는 유효한 HTTP 헤더가 전달되지 않았을 경우 TypeError을 반환합니다. immutable Guard(다음 섹션 참고)가 설정되어 있는 경우에도 TypeError를 반환합니다. TypeError를 반환하지 않고 실패하는 경우도 있습니다. 다음 예를 참고해주시기 바랍니다.</p>

<pre class="brush: js notranslate">var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch(e) {
  console.log("은행이 아니잖아요!!");
}</pre>

<p>헤더의 좋은 사용법으로 처리하기 전에 컨텐츠 타입으로 올바른가의 여부를 판별하는 방법이 있습니다. 예를 들어,</p>

<pre class="notranslate"><code>fetch(myRequest).then(function(response) {
    var contentType = response.headers.get('content-type');
    if(contentType &amp;&amp; contentType.includes('application/json')) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); });</code></pre>

<h3 id="가드">가드</h3>

<p>헤더는 리퀘스트를 송신할 수 있으며 리스폰스를 수신할 수 있습니다. 어떤 정보를 수정할 수 있게 하기 위해, 혹은 수정하기 위해 여러 종류의 제어가 가능합니다. 헤더는 guard 프로퍼티는 이것을 가능하게 합니다. 가드는 Request나 Response에 포함되지 않지만  헤더 객체에서 조작 가능한 여러 메서드들의 사용 가능 여부에 영향을 미칩니다.</p>

<p>가드의 설정값은 다음과 같습니다.</p>

<ul>
 <li><code>none</code>: 기본치</li>
 <li><code>request</code>: ({{domxref("Request.headers")}})에서 얻은 헤더 객체에 대한 가드</li>
 <li><code>request-no-cors</code>: {{domxref("Request.mode")}} <code>no-cors</code>에 생성된 ({{domxref("Request.headers")}})에서 사용할 수 있는 값만 헤더에 확보함</li>
 <li><code>response</code>: ({{domxref("Response.headers")}}) Response에서 얻은 객체애 대한 가드</li>
 <li><code>immutable</code>: 대개 ServiceWorker에서 사용됨. 헤더의 설정을 읽기 전용으로 바꿈.</li>
</ul>

<div class="note">
<p><strong>메모</strong>: <code>request</code>에서 가드된 헤더의<code>Content-Length</code> 헤더는 추가나 변경할 수 없는 가능성이 있습니다.  마찬가지로 리스폰스 헤더에 <code>Set-Cookie</code>를 삽입하는것은 불가능합니다.ServiceWorker는 동기 Reponse를 추출하여 쿠키를 설정합니다.</p>
</div>

<h2 id="Response_객체">Response 객체</h2>

<p>위에서 본 바와 같이 {{domxref("Response")}} 인스턴스들은 fetch() promise가 resolve됬을때 반환됩니다.</p>

<p>아래는 어떤 리스폰스 객체라도 공통으로 사용되는 리스폰스 프로퍼티입니다.</p>

<ul>
 <li>{{domxref("Response.status")}} — HTTP Status의 정수치, 기본값 200</li>
 <li>{{domxref("Response.statusText")}} — HTTP Status 코드의 메서드와 일치하는 문자열, 기본값은 "OK"</li>
 <li>{{domxref("Response.ok")}} 상술한 프로퍼티에서 사용한 HTTP Status 코드가 200에서 299중 하나임을 체크하는 값, {{domxref("Boolean")}}를 반환</li>
</ul>

<p>Response 객체는 개발자의 손에 의해 동적으로 만드는것이 가능합니다. 이 방법은 {{domxref("ServiceWorker_API", "ServiceWorkers")}}내에서 활약할 때가 많습니다. 예를들어 Request를 획득했을 때  {{domxref("FetchEvent.respondWith","respondWith()")}}메서드에 의해 커스텀된 리스폰스를 반환하는 경우가 있습니다.</p>

<pre class="brush: js notranslate">var myBody = new Blob();

addEventListener('fetch', function(event) {
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type" : "text/plain" }
    })
  );
});</pre>

<p>{{domxref("Response.Response","Response()")}} 생성자는 파라미터로써 두개의 객체를 전달하는것이 가능합니다.첫번째는 Response Body, 두번째는 초기화 객체({{domxref("Request.Request","Request()")}}의 클론을 생성하는 방법과 비슷합니다.) 입니다.</p>

<ul>
</ul>

<div class="note">
<p><strong>付記</strong>: 정적 메서드 {{domxref("Response.error","error()")}}는 단순한 에러 Response를 반환합니다. {{domxref("Response.redirect","redirect()")}} 메서드 또한 지정한 URL에 리다이렉트할 Response를 반환합니다. 이것들은 Service Workers에서만 사용되고 있습니다.</p>
</div>

<h2 id="Body">Body</h2>

<p>Request, Response 둘다 Body를 가지고 있습니다. body는 아래에서 기술한 타입들 중 하나의 인스턴스입니다.</p>

<ul>
 <li>{{domxref("ArrayBuffer")}}</li>
 <li>{{domxref("ArrayBufferView")}} (Uint8Array같은 TypedArray)</li>
 <li>{{domxref("Blob")}}/File</li>
 <li>문자열</li>
 <li>{{domxref("URLSearchParams")}}</li>
 <li>{{domxref("FormData")}}</li>
</ul>

<p>{{domxref("Body")}} 믹스인은 {{domxref("Request")}}나{{domxref("Response")}}에 구현되어, 콘텐츠를 추출하기 위해 아래의 메서드가 정의되어 있습니다. 이러한 메서드들은 전부 최종적으로 요청으로 반환된 값을 내장하고 있는 promise를 반환합니다.</p>

<ul>
 <li>{{domxref("Body.arrayBuffer","arrayBuffer()")}}</li>
 <li>{{domxref("Body.blob","blob()")}}</li>
 <li>{{domxref("Body.json","json()")}}</li>
 <li>{{domxref("Body.text","text()")}}</li>
 <li>{{domxref("Body.formData","formData()")}}</li>
</ul>

<p>이것들은 비 텍스트 데이터를 XHR보다 훨씬 간단하게 사용하는것을 도와줍니다.</p>

<p>Request 바디는 body 파라미터를 전달하는 것으로 설정할 수 있습니다.</p>

<pre class="brush: js notranslate">var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
})</pre>

<p>Both request and response (and by extension the <code>fetch()</code> function), will try to intelligently determine the content type. A request will also automatically set a <code>Content-Type</code> header if none is set in the dictionary.</p>

<h2 id="Feature_detection특징_추출">Feature detection(특징 추출)</h2>

<p>Fetch API support는{{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} or {{domxref("GlobalFetch.fetch","fetch()")}} on the {{domxref("Window")}} or {{domxref("Worker")}}로 존재여부를 확인함으로써 추출할 수 있습니다. 예를 들어:</p>

<pre class="notranslate"><code>if (window.fetch) {
    // run my fetch request here
} else {
    // do something with XMLHttpRequest?</code></pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">Polyfill</h2>

<p>Fetch를 지원하지 않는 브라우저를 위해 미지원 브라우저를 위한 <a href="https://github.com/github/fetch">Fetch Polyfill</a>이 지원되고 있습니다.</p>

<h2 id="Specifications">Specifications</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility_2">Browser compatibility</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility"><span>관련항목</span></h2>

<div id="compat-mobile"></div>

<ul>
 <li><a href="/ko/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ko/docs/Web/HTTP/CORS">HTTP 액세스 제어 (CORS)</a></li>
 <li><a href="/ko/docs/Web/HTTP">HTTP</a></li>
 <li><a href="https://github.com/github/fetch">Fetch polyfill</a></li>
 <li><a href="https://github.com/mdn/fetch-examples/">Fetch examples on Github</a></li>
</ul>

<p>{{DefaultAPISidebar("Fetch API")}} </p>
