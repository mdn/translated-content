---
title: 使用 Fetch
slug: Web/API/Fetch_API/Using_Fetch
tags:
  - API
  - BODY
  - Fetch
  - HTTP
  - Promise
  - Response
  - request
  - 指南
translation_of: Web/API/Fetch_API/Using_Fetch
---
<p><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a> 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 {{domxref("GlobalFetch.fetch","fetch()")}} 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。</p>

<p>这种功能以前是使用 {{domxref("XMLHttpRequest")}} 实现的。Fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如  {{domxref("ServiceWorker_API", "Service Workers")}}。Fetch 还提供了专门的逻辑空间来定义其他与 HTTP 相关的概念，例如 CORS 和 HTTP 的扩展。</p>

<p>请注意，<code>fetch</code> 规范与 <code>jQuery.ajax()</code> 主要有三种方式的不同：</p>

<ul>
 <li>当接收到一个代表错误的 HTTP 状态码时，从 <code>fetch()</code> 返回的 Promise <strong>不会被标记为 reject，</strong> 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 <code>ok</code> 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。</li>
 <li><code>fetch()</code><strong> 可以<s>不会</s>接受跨域 cookies；</strong>你也可以<s>不能</s>使用 <code>fetch()</code> 建立起跨域会话。<s>其他网站的 <code><a href="/zh-CN/docs/Web/HTTP/Headers/Set-Cookie">Set-Cookie</a></code> 头部字段将会被无视。</s></li>
 <li><code>fetch</code> <strong>不会发送 cookies</strong>。除非你使用了<em>credentials</em> 的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters">初始化选项</a>。（自 2017 年 8 月 25 日以后，默认的 credentials 政策变更为 <code>same-origin</code>。Firefox 也在 61.0b13 版本中进行了修改）</li>
</ul>

<p>一个基本的 fetch 请求设置起来很简单。看看下面的代码：</p>

<pre class="brush: js notranslate">fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });</pre>

<p>这里我们通过网络获取一个 JSON 文件并将其打印到控制台。最简单的用法是只提供一个参数用来指明想 <code>fetch()</code> 到的资源路径，然后返回一个包含响应结果的promise（一个 {{domxref("Response")}} 对象）。</p>

<p>当然它只是一个 HTTP 响应，而不是真的JSON。为了获取JSON的内容，我们需要使用 {{domxref("Body.json","json()")}} 方法（在 {{domxref("Body")}} mixin 中定义，被 {{domxref("Request")}} 和 {{domxref("Response")}} 对象实现）。</p>

<div class="note">
<p><strong>注意</strong>：Body mixin 还有其他相似的方法，用于获取其他类型的内容。参考 {{anch("Body")}}。</p>
</div>

<p>最好使用符合<a href="/zh-CN/docs/Web/Security/CSP/CSP_policy_directives">内容安全策略 (CSP)</a>的链接而不是使用直接指向资源地址的方式来进行Fetch的请求。</p>

<h3 id="支持的请求参数">支持的请求参数</h3>

<p><code>fetch()</code> 接受第二个可选参数，一个可以控制不同配置的 <code>init</code> 对象：</p>

<p>参考 {{domxref("GlobalFetch.fetch","fetch()")}}，查看所有可选的配置和更多描述。</p>

<pre class="brush: js notranslate">// Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data =&gt; console.log(data)) // JSON from `response.json()` call
  .catch(error =&gt; console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response =&gt; response.json()) // parses response to JSON
}
</pre>

<h3 id="发送带凭据的请求">发送带凭据的请求</h3>

<p>为了让浏览器发送包含凭据的请求（即使是跨域源），要将<code>credentials: 'include'</code>添加到传递给 <code>fetch()</code>方法的<code>init</code>对象。</p>

<pre class="brush: js notranslate">fetch('https://example.com', {
  credentials: 'include'
})
</pre>

<p>如果你只想在请求URL与调用脚本位于同一起源处时发送凭据，请添加 <code>credentials: 'same-origin'</code>。</p>

<pre class="brush: js notranslate">// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
})</pre>

<p>要改为确保浏览器不在请求中包含凭据，请使用 <code>credentials: 'omit'</code>。</p>

<pre class="brush: js notranslate">fetch('https://example.com', {
  credentials: 'omit'
})</pre>

<h3 id="上传_JSON_数据">上传 JSON 数据</h3>

<p>使用 {{domxref("GlobalFetch.fetch","fetch()")}} POST JSON数据</p>

<pre class="brush: js notranslate">var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res =&gt; res.json())
.catch(error =&gt; console.error('Error:', error))
.then(response =&gt; console.log('Success:', response));</pre>

<h3 id="上传文件">上传文件</h3>

<p>可以通过 HTML <code>&lt;input type="file" /&gt;</code> 元素，{{domxref("FormData.FormData","FormData()")}} 和 {{domxref("GlobalFetch.fetch","fetch()")}} 上传文件。</p>

<pre class="brush: js notranslate">var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response =&gt; response.json())
.catch(error =&gt; console.error('Error:', error))
.then(response =&gt; console.log('Success:', response));</pre>

<h3 id="上传多个文件">上传多个文件</h3>

<p>可以通过HTML <code>&lt;input type="file" mutiple/&gt;</code> 元素，{{domxref("FormData.FormData","FormData()")}} 和 {{domxref("GlobalFetch.fetch","fetch()")}} 上传文件。</p>

<pre class="brush: js notranslate">var formData = new FormData();
var photos = document.querySelector("input[type='file'][multiple]");

formData.append('title', 'My Vegas Vacation');
// formData 只接受文件、Blob 或字符串，不能直接传递数组，所以必须循环嵌入
for (let i = 0; i &lt; photos.files.length; i++) {
    formData.append('photo', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
.then(response =&gt; response.json())
.then(response =&gt; console.log('Success:', JSON.stringify(response)))
.catch(error =&gt; console.error('Error:', error));
</pre>

<h3 id="检测请求是否成功">检测请求是否成功</h3>

<p>如果遇到网络故障或服务端的 CORS 配置错误时，{{domxref("GlobalFetch.fetch","fetch()")}} promise 将会 reject，带上一个 {{jsxref("TypeError")}} 对象。虽然这个情况经常是遇到了权限问题或类似问题——比如 404 不是一个网络故障。想要精确的判断 <code>fetch()</code> 是否成功，需要包含 promise resolved 的情况，此时再判断 {{domxref("Response.ok")}} 是不是为 true。类似以下代码：</p>

<pre class="brush: js notranslate">fetch('flowers.jpg').then(function(response) {
  if(response.ok) {
    return response.blob();
  }
  throw new Error('Network response was not ok.');
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
}).catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});</pre>

<h3 id="自定义请求对象">自定义请求对象</h3>

<p>除了传给 <code>fetch()</code> 一个资源的地址，你还可以通过使用 {{domxref("Request.Request","Request()")}} 构造函数来创建一个 request 对象，然后再作为参数传给 <code>fetch()</code>：</p>

<pre class="brush: js notranslate">var myHeaders = new Headers();

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
});
</pre>

<p><code>Request()</code> 和 <code>fetch()</code> 接受同样的参数。你甚至可以传入一个已存在的 request 对象来创造一个拷贝：</p>

<pre class="brush: js notranslate">var anotherRequest = new Request(myRequest,myInit);</pre>

<p>这个很有用，因为 request 和 response bodies 只能被使用一次（译者注：这里的意思是因为设计成了 stream 的方式，所以它们只能被读取一次）。创建一个拷贝就可以再次使用 request/response 了，当然也可以使用不同的 <code>init</code> 参数。</p>

<div class="note">
<p><strong>注意</strong>：{{domxref("Request.clone","clone()")}} 方法也可以用于创建一个拷贝。它和上述方法一样，如果 request 或 response 的 body 已经被读取过，那么将执行失败。区别在于， <code>clone()</code> 出的 body 被读取不会导致原 body 被标记为已读取。</p>
</div>

<h2 id="Headers">Headers</h2>

<p>使用 {{domxref("Headers")}} 的接口，你可以通过 {{domxref("Headers.Headers","Headers()")}} 构造函数来创建一个你自己的 headers 对象。一个 headers 对象是一个简单的多名值对：</p>

<pre class="brush: js notranslate">var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");</pre>

<p>也可以传一个多维数组或者对象字面量：</p>

<pre class="brush: js notranslate">myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});</pre>

<p>它的内容可以被获取：</p>

<pre class="brush: js notranslate">console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.getAll("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.getAll("X-Custom-Header")); // [ ]</pre>

<p>虽然一些操作只能在 {{domxref("ServiceWorker_API","ServiceWorkers")}} 中使用，但是它提供了更方便的操作 Headers 的 API。</p>

<p>如果使用了一个不合法的HTTP Header属性名，那么Headers的方法通常都抛出 TypeError 异常。如果不小心写入了一个不可写的属性，也会抛出一个 TypeError 异常。除此以外的情况，失败了并不抛出异常。例如：</p>

<pre class="brush: js notranslate">var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch(e) {
  console.log("Cannot pretend to be a bank!");
}</pre>

<p>最好在在使用之前检查内容类型 <code>content-type</code> 是否正确，比如：</p>

<pre class="brush: js notranslate">fetch(myRequest).then(function(response) {
  if(response.headers.get("content-type") === "application/json") {
    return response.json().then(function(json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});</pre>

<h3 id="Guard">Guard</h3>

<p>由于 Headers 可以在 request 请求中被发送或者在 response 请求中被接收，并且规定了哪些参数是可写的，Headers 对象有一个特殊的 guard 属性。这个属性没有暴露给 Web，但是它影响到哪些内容可以在 Headers 对象中被操作。</p>

<p>可能的值如下：</p>

<ul>
 <li><code>none</code>：默认的</li>
 <li><code>request</code>：从 request 中获得的 headers（{{domxref("Request.headers")}}）只读</li>
 <li><code>request-no-cors</code>：从不同域（{{domxref("Request.mode")}} <code>no-cors</code>）的 request 中获得的 headers 只读</li>
 <li><code>response</code>：从 response 中获得的 headers（{{domxref("Response.headers")}}）只读</li>
 <li><code>immutable</code>：在 ServiceWorkers 中最常用的，所有的 headers 都只读。</li>
</ul>

<div class="note">
<p><strong>注意</strong>：你不可以添加或者修改一个 guard 属性是 <code>request</code> 的 Request Header 的 <code>Content-Length</code> 属性。同样地，插入 <code>Set-Cookie</code> 属性到一个 response header 是不允许的，因此，Service Worker 中，不能给合成的 Response 的 header 添加一些 cookie。</p>
</div>

<h2 id="Response_对象">Response 对象</h2>

<p>如上所述，{{domxref("Response")}} 实例是在 <code>fetch()</code> 处理完 promise 之后返回的。</p>

<p>你会用到的最常见的 response 属性有:</p>

<ul>
 <li>{{domxref("Response.status")}} — 整数（默认值为200）为response的状态码。</li>
 <li>{{domxref("Response.statusText")}} — 字符串（默认值为"OK"），该值与 HTTP 状态码消息对应。</li>
 <li>{{domxref("Response.ok")}} — 如上所示，该属性是来检查response的状态是否在 200 - 299（包括200 和 299）这个范围内。该属性返回一个{{domxref("Boolean", "布尔值")}}。</li>
</ul>

<p>它的实例也可用通过 JavaScript 来创建，但只有在 {{domxref("ServiceWorker_API", "ServiceWorkers")}} 中才真正有用，当使用 {{domxref("FetchEvent.respondWith","respondWith()")}} 方法并提供了一个自定义的 response 来接受 request 时：</p>

<pre class="brush: js notranslate">var myBody = new Blob();

addEventListener('fetch', function(event) {
  event.respondWith(new Response(myBody, {
    headers: { "Content-Type" : "text/plain" }
  });
});</pre>

<p>{{domxref("Response.Response","Response()")}} 构造方法接受两个可选参数—— response 的数据体和一个初始化对象（与{{domxref("Request.Request","Request()")}} 所接受的 init 参数类似。）</p>

<ul>
</ul>

<div class="note">
<p><strong>注意</strong>: 静态方法 {{domxref("Response.error","error()")}} 只是返回了错误的response。与此类似地，{{domxref("Response.redirect","redirect()")}} 只是返回了一个可以重定向至某 URL 的 response。这些也只与 Service Worker 有关。</p>
</div>

<h2 id="Body">Body</h2>

<p>不管是请求还是响应都能够包含 body 对象。body 也可以是以下任意类型的实例。</p>

<ul>
 <li>{{domxref("ArrayBuffer")}}</li>
 <li>{{domxref("ArrayBufferView")}} (Uint8Array等)</li>
 <li>{{domxref("Blob")}}/File</li>
 <li>string</li>
 <li>{{domxref("URLSearchParams")}}</li>
 <li>{{domxref("FormData")}}</li>
</ul>

<p>{{domxref("Body")}} 类定义了以下方法（这些方法都被 {{domxref("Request")}} 和{{domxref("Response")}}所实现）以获取 body 内容。这些方法都会返回一个被解析后的{{domxref("Promise")}}对象和数据。</p>

<ul>
 <li>{{domxref("Body.arrayBuffer","arrayBuffer()")}}</li>
 <li>{{domxref("Body.blob","blob()")}}</li>
 <li>{{domxref("Body.json","json()")}}</li>
 <li>{{domxref("Body.text","text()")}}</li>
 <li>{{domxref("Body.formData","formData()")}}</li>
</ul>

<p>比起XHR来，这些方法让非文本化的数据使用起来更加简单。</p>

<p>请求体可以由传入 body 参数来进行设置：</p>

<pre class="brush: js notranslate">var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
})
</pre>

<p>request和response（包括 <code>fetch()</code> 方法）都会试着自动设置 <code>Content-Type</code>。如果没有设置 <code>Content-Type</code> 值，发送的请求也会自动设值。</p>

<h2 id="特性检测">特性检测</h2>

<p>Fetch API 的支持情况，可以通过检测{{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} 或 {{domxref("GlobalFetch.fetch","fetch()")}}是否在{{domxref("Window")}} 或 {{domxref("Worker")}} 域中。例如：</p>

<pre class="brush: js notranslate">if(self.fetch) {
    // run my fetch request here
} else {
    // do something with XMLHttpRequest?
}</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>如果要在不支持的浏览器中使用 Fetch，可以使用 <a href="https://github.com/github/fetch">Fetch Polyfill</a>。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">详细说明</th>
   <th scope="col">状态</th>
   <th scope="col">注释</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.fetch")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
 <li><a href="https://github.com/github/fetch">Fetch polyfill</a></li>
 <li><a href="https://github.com/mdn/fetch-examples/">Fetch examples on Github</a></li>
</ul>

<div>{{DefaultAPISidebar("Fetch API")}}</div>
