---
title: Requisições síncronas e assíncronas
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
translation_of: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
original_slug: Web/API/XMLHttpRequest/Requisicoes_sincronas_e_assincronas
---
<p><code>XMLHttpRequest</code> suporta comunicações síncronas e assíncronas. No geral, entretando, requisições assíncronas devem prevalecer sobre requisições síncronas por questões de performance.</p>

<p>Requisições síncronas podem bloquear a execução do codigo, gerando um "congelamento" da tela, prejudicando a experiência do usuário. </p>

<h2 id="Requisição_assíncrona">Requisição assíncrona</h2>

<p>Se você usa <code>XMLHttpRequest</code> de uma extensão, você deveria usá-la de forma assíncrona. Neste caso, você recebe um callback quando os dados forem recebidos, o que permite que o browser continue seu trabalho normalmente enquanto sua requisição estiver sendo processada.</p>

<h3 id="Exemplo_envie_um_arquivo_para_o_console_de_log">Exemplo: envie um arquivo para o console de log</h3>

<p>Esse é o exemplo mais simples de uso do <code>XMLHttpRequest assíncrono.</code></p>

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

<p>A Linha 2 define o terceiro parâmetro como true, indicando que a requisição deve ser tratada assincronamente.</p>

<p>A Linha 3 cria um objeto função do tipo <em>event handler </em>e atribui ele ao atributo <strong>onload<em> </em></strong>da requisição.</p>

<p>Na LInha 4, Este <em>handler </em>verifica o estado da requisição, através da variável <em>readyState, </em>para ver se a transação está completa, e se o status do HTTP é 200. Em caso positivo lê o conteúdo recebido. Se um erro ocorrer, uma mensagem de erro será exibida no console.</p>

<p>A requisição é, de fato, realizada na Linha 15. A rotina de <em>callback</em> é invocada quando o estado da requisição muda.</p>

<h3 id="Exemplo_Criando_uma_função_standard_para_ler_arquivos_externos">Exemplo: Criando uma função standard para ler arquivos externos</h3>

<p>Em alguns casos, você pode precisar ler muitos arquivos externos. Esta é uma função padrão que utiliza o objeto <code>XMLHttpRequest</code> de forma assíncrona para alternar o conteúdo do arquivo legível para um listener especificado.</p>

<pre class="brush: js">function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }

function loadFile (sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}
</pre>

<p>Uso:</p>

<pre class="brush: js">function showMessage (sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
</pre>

<p>A assinatura da função <em><strong>loadFile</strong></em> declara (i) uma URL de destino que será lida (via HTTP GET), (ii) uma função de callback para executar na conclusão bem-sucedida da instância xhr, e (iii) uma lista opcional de argumentos adicionais que são "passados através" do objeto XHR caso a função de callback seja bem-sucedida.</p>

<p>A linha 1 declara uma função que será invocada quando a operação XHR for completada com sucesso.  Isso, por sua vez, invoca uma função de callback especificada na invocação da função loadFile (neste caso, a função showMessage) que foi atribuída a propriedade do objeto XHR (Linha 7). Os  argumentos adicionais (caso existam) fornecem a invocação da função loadFile são "aplicados" para a execução da função de callback..</p>

<p>A linha 3 declara uma função que será invocada quando a operação XHR não for completada com sucesso.</p>

<p>A linha 7 define no objeto XHR  the success callback function given as the second argument to loadFile.</p>

<p>Line 8 slices the arguments array given to the invocation of loadFile. Starting with the third argument, all remaining arguments are collected, assigned to the arguments property of the variable oReq, passed to the success callback function xhrSuccess., and ultimately supplied to the callback function (in this case, showMessage) which is invoked by function xhrSuccess.</p>

<p>Line 9 designates the function xhrSuccess as the callback to be invoked when the onload event fires, that is, when the XHR sucessfully completes.  </p>

<p>Line 10 designates the function xhrError as the callback to be invoked when the XHR requests fails to complete.</p>

<p>Line 11 specifies <code>true</code> for its third parameter to indicate that the request should be handled asynchronously.</p>

<p>Line 12 actually initiates the request.</p>

<h3 id="Example_using_a_timeout">Example: using a timeout</h3>

<p>You can use a timeout to prevent hanging your code forever while waiting for a read to occur. This is done by setting the value of the <code>timeout</code> property on the <code>XMLHttpRequest</code> object, as shown in the code below:</p>

<pre class="brush: js">function loadFile(sUrl, timeout, callback){

    var args = arguments.slice(3);
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

<pre class="brush: js">function showMessage (sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
</pre>

<p>Here, we're specifying a timeout of 2000 ms.</p>

<div class="note">
<p><strong>Note:</strong> Support for <code>timeout</code> was added in {{Gecko("12.0")}}.</p>
</div>

<h2 id="Synchronous_request">Synchronous request</h2>

<div class="note"><strong>Note:</strong> Starting with Gecko 30.0 {{ geckoRelease("30.0") }}, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.</div>

<p>Em casos raros, o uso do método síncrono é preferível ao invés do método assíncrono.</p>

<h3 id="Example_HTTP_synchronous_request">Example: HTTP synchronous request</h3>

<p>This example demonstrates how to make a simple synchronous request.</p>

<pre class="brush: js">var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
</pre>

<p>Line 3 sends the request.  The <code>null</code> parameter indicates that no body content is needed for the <code>GET</code> request.</p>

<p>Line 5 checks the status code after the transaction is completed.  If the result is 200 -- HTTP's "OK" result -- the document's text content is output to the console.</p>

<h3 id="Example_Synchronous_HTTP_request_from_a_Worker">Example: Synchronous HTTP request from a <code>Worker</code></h3>

<p>One of the few cases in which a synchronous request does not usually block execution is the use of <code>XMLHttpRequest</code> within a <code><a href="/en/DOM/Worker" title="/en/DOM/Worker">Worker</a></code>.</p>

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

<p><code><strong>myFile.txt</strong></code> (the target of the synchronous <code><a href="/en/DOM/XMLHttpRequest" title="/en/XMLHttpRequest">XMLHttpRequest</a></code> invocation):</p>

<pre>Hello World!!
</pre>

<p><code><strong>myTask.js</strong></code> (the <code><a href="/en/DOM/Worker" title="/en/DOM/Worker">Worker</a></code>):</p>

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

<p>It could be useful in order to interact in background with the server or to preload some content. See <a class="internal" href="/En/DOM/Using_web_workers" title="en/Using DOM workers">Using web workers</a> for examples and details.</p>

<h3 id="Adapting_Sync_XHR_usecases_to_the_Beacon_API">Adapting Sync XHR usecases to the Beacon API</h3>

<p>There are some cases in which the synchronous usage of XMLHttpRequest was not replaceable, like during the <a class="internal" href="/en/DOM/window.onunload" title="en/DOM/window.onunload"><code>window.onunload</code></a> and <a class="internal" href="/en/DOM/window.onbeforeunload" title="en/DOM/window.onbeforeunload"><code>window.onbeforeunload</code></a> events.  The <a href="/en-US/docs/Web/API/Navigator/sendBeacon">navigator.sendBeacon</a> API can support these usecases typically while delivering a good UX.</p>

<p><span>The following example (from the <a href="/en-US/docs/Web/API/Navigator/sendBeacon">sendBeacon docs</a>) shows a theoretical analytics code that attempts to submit data to a server by using a synchronous XMLHttpRequest in an unload handler. This results in the unload of the page to be delayed.</span></p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
</pre>

<p>Using the <strong><code>sendBeacon()</code></strong> method, the data will be transmitted asynchronously to the web server when the User Agent has had an opportunity to do so, <strong>without delaying the unload or affecting the performance of the next navigation.</strong></p>

<p>The following example shows a theoretical analytics code pattern that submits data to a server using the by using the <strong><code>sendBeacon()</code></strong> method.</p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest" title="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest</code></a></li>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest" title="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a></li>
 <li><a href="/en-US/docs/AJAX" title="/en-US/docs/AJAX">AJAX</a></li>
 <li><code><a href="/en-US/docs/Web/API/Navigator/sendBeacon">navigator.sendBeacon</a></code></li>
</ul>

<p>{{ languages( {"zh-cn": "zh-cn/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests" } ) }}</p>
