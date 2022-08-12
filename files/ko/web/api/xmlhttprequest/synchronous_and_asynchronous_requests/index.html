---
title: Synchronous and asynchronous requests
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
translation_of: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---
<p><code>XMLHttpRequest</code> 는 동기적 통신과 비동기적 통신을 모두 지원합니다.  하지만, 일반적으로는 성능상의 이유로 인하여 비동기적 요청이 동기적 요청보다 우선시 되어야 합니다. </p>

<p>동기 요청은 코드 실행을 차단하여 화면에 “얼어붙어” 버리고 응답하지 없는 사용자 경험을 만듭니다.</p>

<h2 id="Asynchronous_request">Asynchronous request</h2>

<p>만약 <code>XMLHttpRequest</code>을 비동기적으로 사용한다면, 데이터가 도착했을때 콜백을 받게 될겁니다. 이렇게하면 요청이 처리되는 동안 브라우저는 여전히 정상적으로 동작 할 수 있습니다.</p>

<h3 id="Example_send_a_file_to_the_console_log">Example: send a file to the console log</h3>

<p>다음은 비동기적 <code>XMLHttpRequest</code>의 간단한 사용법입니다. </p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null); </pre>

<p>두번째 줄에서 세번째 파라미터가 <code>true</code> 로 지정되면 요청이 비동기적으로 처리 된다는 선언입니다.</p>

<p>Line 3 creates an event handler function object and assigns it to the request's <code>onload</code> attribute. This handler looks at the request's <code>readyState</code> to see if the transaction is complete in line 4 and if it is, and the HTTP status is 200, dumps the received content. If an error occurred, an error message is displayed.</p>

<p>15번째 줄에서 실제 요청이 시작됩니다. 콜백 루틴은 이 요청의 상태가 변경 될 때 마다 호출됩니다.</p>

<h3 id="Example_creating_a_standard_function_to_read_external_files">Example: creating a standard function to read external files</h3>

<p>In some cases, you must read many external files. This is a standard function which uses the <code>XMLHttpRequest</code> object asynchronously in order to switch the content of the read file to a specified listener.</p>

<pre class="brush: js">function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}
</pre>

<p>Usage:</p>

<pre class="brush: js">function showMessage(message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
</pre>

<p>The signature of the utility function <em><strong>loadFile</strong></em> declares (i) a target URL to read (via HTTP GET), (ii) a function to execute on successful completion of the XHR operation, and (iii) an arbitrary list of additional arguments that are "passed through" the XHR object to the success callback function.</p>

<p>Line 1 declares a function invoked when the XHR operation completes successfully. It, in turn, invokes the callback function specified in the invocation of the loadFile function (in this case, the function showMessage) which has been assigned to a property of the XHR object (Line 11). The additional arguments (if any) supplied to the invocation of function loadFile are "applied" to the running of the callback function.</p>

<p>Line 5 declares a function invoked when the XHR operation fails to complete successfully.</p>

<p>Line 11 stores on the XHR object the success callback function is given as the second argument to loadFile.</p>

<p>Line 12 slices the arguments array given to the invocation of <em>loadFile</em>. Starting with the third argument, all remaining arguments are collected, assigned to the arguments property of the variable <em>xhr</em>, passed to the success callback function <em>xhrSuccess</em>., and ultimately supplied to the callback function (in this case, <em>showMessage</em>) which is invoked by function <em>xhrSuccess</em>.</p>

<p>Line 15 specifies <em>true</em> for its third parameter to indicate that the request should be handled asynchronously.</p>

<p>Line 16 actually initiates the request.</p>

<h3 id="Example_using_a_timeout">Example: using a timeout</h3>

<p>You can use a timeout to prevent hanging your code forever while waiting for a read to occur. This is done by setting the value of the <code>timeout</code> property on the <code>XMLHttpRequest</code> object, as shown in the code below:</p>

<pre class="brush: js">function loadFile(url, timeout, callback) {
    var args = Array.prototype.slice.call(arguments, 3);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback.apply(xhr, args);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.timeout = timeout;
    xhr.send(null);
}</pre>

<p>Notice the addition of code to handle the "timeout" event by setting the <code>ontimeout</code> handler.</p>

<p>Usage:</p>

<pre class="brush: js">function showMessage (message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
</pre>

<p>Here, we're specifying a timeout of 2000 ms.</p>

<div class="note">
<p><strong>Note:</strong> Support for <code>timeout</code> was added in {{Gecko("12.0")}}.</p>
</div>

<h2 id="Synchronous_request">Synchronous request</h2>

<div class="note"><strong>Note:</strong> Starting with Gecko 30.0 {{ geckoRelease("30.0") }}, Blink 39.0, and Edge 13, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.</div>

<p>Synchronous XHR often causes hangs on the web. But developers typically don't notice the problem because the hang only manifests during poor network conditions or slow server response. Synchronous XHR is now in deprecation state. Developers are recommended to move away from the API.</p>

<p>All new XHR features such as <code>timeout</code> or <code>abort</code> aren't allowed for synchronous XHR. Doing so would invoke <code>InvalidAccessError</code>.</p>

<h3 id="Example_HTTP_synchronous_request">Example: HTTP synchronous request</h3>

<p>This example demonstrates how to make a simple synchronous request.</p>

<pre class="brush: js">var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
</pre>

<p>Line 3 sends the request. The <code>null</code> parameter indicates that no body content is needed for the <code>GET</code> request.</p>

<p>Line 5 checks the status code after the transaction is completed. If the result is 200 -- HTTP's "OK" result -- the document's text content is output to the console.</p>

<h3 id="Example_Synchronous_HTTP_request_from_a_Worker">Example: Synchronous HTTP request from a <code>Worker</code></h3>

<p>One of the few cases in which a synchronous request does not usually block execution is the use of <code>XMLHttpRequest</code> within a <code><a href="/en-US/docs/Web/API/Worker">Worker</a></code>.</p>

<p><code><strong>example.html</strong></code> (the main page):</p>

<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;title&gt;MDN Example&lt;/title&gt;
&lt;script type="text/javascript"&gt;
  var worker = new Worker("myTask.js");
  worker.onmessage = function(event) {
    alert("Worker said: " + event.data);
  };

  worker.postMessage("Hello");
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><code><strong>myFile.txt</strong></code> (the target of the synchronous <code><a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> invocation):</p>

<pre>Hello World!!
</pre>

<p><code><strong>myTask.js</strong></code> (the <code><a href="/en-US/docs/Web/API/Worker">Worker</a></code>):</p>

<pre class="brush: js">self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false);  // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
</pre>

<div class="note"><strong>Note:</strong> The effect, because of the use of the <code>Worker</code>, is however asynchronous.</div>

<p>It could be useful in order to interact in the background with the server or to preload some content. See <a class="internal" href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers</a> for examples and details.</p>

<h3 id="Adapting_Sync_XHR_usecases_to_the_Beacon_API">Adapting Sync XHR usecases to the Beacon API</h3>

<p>There are some cases in which the synchronous usage of XMLHttpRequest was not replaceable, like during the <a class="internal" href="/en-US/docs/Web/API/WindowEventHandlers/onunload"><code>window.onunload</code></a> and <a class="internal" href="/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload"><code>window.onbeforeunload</code></a> events. You should consider using the <code>fetch</code> API with <code>keepalive</code> flag. When <code>fetch</code> with <code>keepalive</code> isn't available, you can consider using the <a href="/en-US/docs/Web/API/Navigator/sendBeacon">navigator.sendBeacon</a> API can support these use cases typically while delivering a good UX.</p>

<p>The following example (from the <a href="/en-US/docs/Web/API/Navigator/sendBeacon">sendBeacon docs</a>) shows a theoretical analytics code that attempts to submit data to a server by using a synchronous XMLHttpRequest in an unload handler. This results in the unloading of the page to be delayed.</p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
</pre>

<p>Using the <strong><code>sendBeacon()</code></strong> method, the data will be transmitted asynchronously to the web server when the User Agent has had an opportunity to do so, <strong>without delaying the unload or affecting the performance of the next navigation.</strong></p>

<p>The following example shows a theoretical analytics code pattern that submits data to a server by using the <strong><code>sendBeacon()</code></strong> method.</p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest</code></a></li>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a></li>
 <li><a href="/en-US/docs/Web/Guide/AJAX">AJAX</a></li>
 <li><code><a href="/en-US/docs/Web/API/Navigator/sendBeacon">navigator.sendBeacon</a></code></li>
</ul>
