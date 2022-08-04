---
title: Синхронные и асинхронные запросы
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
translation_of: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---
<p> </p>

<p><code>XMLHttpRequest</code> поддерживает как синхронные, так и асинхронные запросы. В основном предпочтительно использовать асинхронные запросы вместо синхронных из-за соображений производительности.</p>

<p>Синхронный запрос приводит к выполнению кода, который "блокирует" взаимодействие с вкладкой браузера до тех пор, пока запрос не будет полностью выполнен, что существенно ухудшает отклик страницы.</p>

<h2 id="Асинхронные_запросы">Асинхронные запросы</h2>

<p>Если вы используете асинхронный режим <code>XMLHttpRequest</code>, то после того, как данные будут получены, будет вызвана функция обработчик. Это позволяет браузеру работать нормально пока ваш запрос будет обрабатываться.</p>

<h3 id="Пример_отправка_запроса_и_получение_файла_ответа">Пример:  отправка запроса и получение файла ответа</h3>

<p><code>Приведём простейший пример асинхронного запроса XMLHttpRequest</code>.</p>

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

<p>2 строка. 3 параметр метода <code>open</code> установлен как <code>true</code>  для того, чтобы явно указать, что этот запрос будет обрабатываться асинхронно.</p>

<p>3 строка. Создаётся функция обработчик события <code>onload</code>. Этот обработчик следить за параметром <code>readyState</code>, для того, чтобы определить завершена ли передача данных и если это так и HTTP статус 200, то полученные данные выводятся в консоль. А если в результате передачи данных возникла ошибка, то сообщение об ошибки будет выведено в консоль.</p>

<p>15 строка. Происходит инициализация отправки запроса. Функция обработчик будет вызываться каждый раз, как будет происходить изменения состояния данного запроса.</p>

<h3 id="Пример_создание_стандартной_функции_для_чтения_внешних_файлов">Пример: создание стандартной функции для чтения внешних файлов</h3>

<p>В разных сценариях существует необходимость принимать внешние файлы (ответ от сервера, к примеру, json файл). Это стандартная функция, которая использует<br>
 <code>XMLHttpRequest</code> объект асинхронно, чтобы передать прочитанный контент в специальную функцию обработчик.</p>

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

<p>Использование:</p>

<pre class="brush: js">function showMessage(message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
</pre>

<p>Сигнатура вспомогательной функции <code>LoadFile</code> следующая: 1 аргумент - URL адрес для запроса (через HTTP GET), 2 аргумент - функция, которая будет вызвана после успешного выполнения ajax запроса и 3 аргумент - список аргументов, которые будут передаваться через XHR объект в функцию, которая была указана во 2 аргументе.</p>

<p>Строка 1 определяет функцию, которая будет вызвана, когда ajax запрос завершиться успешно. В свою очередь это вызовет функции callback, которая была указана в вызове функции <code>loadFile</code> (то есть функция <code>showMessage</code>) которая была обозначена как свойство <code>XHR</code> объекта (строка 11). Дополнительные аргументы, которые были указаны при вызове функции <code>loadFile</code>, подставляются в вызов callback функции.</p>

<p>Строка 5 определяет функцию, которая будет вызвана в случаи, если ajax запрос не сможет завершиться успешно.</p>

<p>Строка 11 сохраняет в <code>XHR</code> объекте функцию, которая будет вызвана после успешного завершения ajax запроса. (эта функция передаётся 2 аргументов в вызове функции <code>loadFile</code>).</p>

<p>12 строка срезает псевдомассив аргументов, который был передан при вызове функции <code>loadFile</code>. Начиная с 3 аргумента все аргументы будут хранится в массиве arguments объекта <code>xhr</code>, который передаётся в функцию <code>xhrSuccess</code> и в конечном итоге будут использованы при вызове функции <code>showMessage</code>, которая будет вызвана функцией <code>xhrSuccess</code> .</p>

<p>Строка 15 устанавливает <code>true</code> для 3 параметра, что явно указывает на то, что запрос будет выполняться асинхронно.</p>

<p>Строка 16 инициализирует запрос.</p>

<h3 id="Пример_использование_timeout">Пример: использование timeout</h3>

<p>При использовании асинхронных запросов, можно установить максимальное время ожидания ответа от сервера. Это делается путём установки значения свойства <code>timeout</code> <code>XMLHttpRequest</code> объекта, как показано ниже:</p>

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

<p>Отметим, что в код была добавлена функция обработчик события <code>ontimeout</code>.</p>

<p>Использование:</p>

<pre class="brush: js">function showMessage (message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
</pre>

<p>2 аргумент функции <code>loadFile</code> устанавливает время ожидание равное 2000ms.</p>

<div class="note">
<p><strong>Внимание:</strong> Поддержка <code>timeout</code> была добавлена начиная с {{Gecko("12.0")}}.</p>
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
