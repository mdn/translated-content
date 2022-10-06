---
title: Uma típica sessão HTTP
slug: Web/HTTP/Session
tags:
  - HTTP
translation_of: Web/HTTP/Session
---
<div>{{HTTPSidebar}}</div>

<p>Em protocolos cliente-servidor, como o HTTP, sessões consistem de três partes:</p>

<ol>
 <li>O cliente estabelece uma conexão TCP (ou a conexão apropriada caso o protocolo TCP não seja o protocolo usado na camada de transporte).</li>
 <li>O cliente envia sua requisição, e então aguarda por uma resposta.</li>
 <li>O servidor processa a requisição, enviando de volta sua resposta, fornecendo um "status code" (código de status), e os dados apropriados.</li>
</ol>

<p>Na versão HTTP/1.1 a conexão não é mais fechada após a terceira etapa completar-se, mas é garantida ao cliente uma nova requisição, implicando na possibilidade da segunda e terceira etapa serem novamente realizadas quantas vezes forem desejadas.</p>

<h2 id="Estabelecendo_uma_conexão">Estabelecendo uma conexão</h2>

<p>Em protocolos cliente-servidor é o cliente quem estabelece as conexões. Abrir uma conexão HTTP significa iniciar uma conexão na camada de transporte subjacente, geralmente uma conexão usando o protocolo TCP.</p>

<p>Usando o protocolo TCP, a porta padrão para um servidor HTTP em um computador é a porta 80, porém outras portas podem ser utilizadas, como a 8000 ou 8080.<br>
 A URL da página a se requisitar contém o nome do domínio e o número da porta, embora este último pode ser omitido caso a porta seja a 80. Leia <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/Identifying_resources_on_the_Web">Identificando recursos na Web</a> para mais informações.</p>

<div class="note"><strong>Note:</strong> O modelo cliente-servidor não permite o servidor enviar dados ao cliente sem uma requisição explícita. Para contornar esse problema, os desenvolvedores Web usam várias técnicas: executar ping no servidor periodicamente por meio das APIs {{domxref ("XMLHTTPRequest")}}, {{domxref ("Fetch")}}, usando a <a href="https://developer.mozilla.org/pt-BR/docs/WebSockets" title="en/WebSockets">WebSockets API</a> ou protocolos semelhantes.</div>

<h2 id="Enviando_uma_requisição_de_cliente">Enviando uma requisição de cliente</h2>

<p>Depois que a conexão é estabelecida, o <em>user-agent</em> pode enviar a solicitação (um <em>user-agent</em> normalmente é um navegador Web, podendo ser também qualquer outra coisa, como um <em>crawler</em>, por exemplo). Uma solicitação de cliente consiste em diretivas de texto, separadas por quebras de linhas (CRLF), divididas em três blocos:</p>

<ol>
 <li>A primeira linha contém um método de requisição seguido por seus parâmetros:
  <ul>
   <li>o caminho do documento, ou seja, uma URL absoluta sem o protocolo ou nome de domínio</li>
   <li>a versão do protocolo HTTP</li>
  </ul>
 </li>
 <li>As linhas subsequentes representam um cabeçalho HTTP, fornecendo ao servidor informações sobre o tipo de dado apropriado (por exemplo, qual o idioma, quais os tipos MIME) ou outros dados que alteram seu comportamento (por exemplo, não enviando uma resposta se já estiver em cache). Esses cabeçalhos HTTP formam um bloco que termina com uma linha vazia.</li>
 <li>O bloco final é um bloco de dados opcional, que pode conter dados adicionais usados principalmente pelo método POST.</li>
</ol>

<h3 id="Exemplos_de_requisições">Exemplos de requisições</h3>

<p>Buscando a página raiz do developer.mozilla.org (<a class="linkification-ext external" href="/" title="Linkification: http://developer.mozilla.org/">http://developer.mozilla.org/</a>), e dizendo ao servidor que o <em>user-agent </em>preferiria a página em francês, se possível:</p>

<pre>GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

</pre>

<p>Observe que a linha final vazia separa o bloco de dados do bloco de cabeçalho. Como não há nenhum <code>Content-Length</code> fornecido em um cabeçalho HTTP, esse bloco de dados é apresentado vazio, marcando o final dos cabeçalhos, permitindo que o servidor processe a solicitação no momento em que recebe essa linha vazia.</p>

<p>Por exemplo, enviando o resultado de um formulário::</p>

<pre>POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&amp;request=Send%20me%20one%20of%20your%20catalogue
</pre>

<h3 id="Métodos_de_requisição">Métodos de requisição</h3>

<p>HTTP define um conjunto de <a href="/pt-BR/docs/Web/HTTP/Methods">métodos de requisição</a> indicando a ação desejada a ser executada em um recurso. Embora eles também possam ser substantivos, essas solicitações são às vezes chamadas de verbos HTTP. As requisições mais comuns são <code>GET</code> e <code>POST</code>:</p>

<ul>
 <li>O método {{HTTPMethod("GET")}} solicita uma representação de dados do recurso especificado. Requisições usando GET só devem retornar dados.</li>
 <li>O método {{HTTPMethod("POST")}} envia dados para um servidor para que possa alterar seu estado. Esse é o método geralmente usado para <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulários HTML</a>.</li>
</ul>

<h2 id="Estrutura_de_uma_resposta_do_servidor">Estrutura de uma resposta do servidor</h2>

<p>Depois que o agente conectado envia sua solicitação, esta é processada pelo servidor, que por fim, retorna uma resposta. Semelhante a uma requisição do cliente, uma resposta do servidor é formada por diretivas de texto, separadas por quebras de linhas, embora divididas em três blocos:</p>

<ol>
 <li>A primeira linha, a linha de status, consiste em uma confirmação da versão HTTP usada, seguida por uma requisição de status (e seu breve significado em texto legível por humanos).</li>
 <li>As linhas subsequentes representam cabeçalhos HTTP específicos, fornecendo ao cliente informações sobre os dados enviados (por exemplo, tipo, tamanho dos dados, algoritmo de compressão usado, dicas sobre armazenamento em cache). Da mesma forma que o bloco de cabeçalhos HTTP para uma requisição do cliente, esses cabeçalhos HTTP formam um bloco que termina com uma linha vazia.</li>
 <li>O bloco final é um bloco de dados, que contém os dados opcionais.</li>
</ol>

<h3 id="Exemplo_de_respostas">Exemplo de respostas</h3>

<p>Resposta de página da web bem-sucedida:</p>

<pre>HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

&lt;!DOCTYPE html... <em><strong>(aqui vem os 29769 bytes da página web solicitada)</strong></em>

</pre>

<p>Notificação de que o recurso solicitado foi movido permanentemente:</p>

<pre>HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: <a class="linkification-ext" href="../../../../" title="Linkification: https://developer.mozilla.org/">https://developer.mozilla.org/</a> <strong><em>(this is the</em><em> new link to the resource; it is expected that the user-agent will fetch it)</em></strong>
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 <em>(<strong>the content contains a default page to display if the user-agent is not able to follow the link)</strong></em>

&lt;!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"&gt;
&lt;html&gt;&lt;head&gt;
&lt;title&gt;301 Moved Permanently&lt;/title&gt;
&lt;/head&gt;&lt;body&gt;
&lt;h1&gt;Moved Permanently&lt;/h1&gt;
&lt;p&gt;The document has moved &lt;a href="<a class="linkification-ext" href="../../../../" title="Linkification: https://developer.mozilla.org/">https://developer.mozilla.org/</a>"&gt;here&lt;/a&gt;.&lt;/p&gt;
&lt;hr&gt;
&lt;address&gt;Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80&lt;/address&gt;
&lt;/body&gt;&lt;/html&gt;

</pre>

<p>Notificação de que o recurso solicitado não existe:</p>

<pre>HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

&lt;!DOCTYPE html... <strong><em>(contém uma página customizada do site ajudando o usuário a localizar o recurso ausente)</em></strong>

</pre>

<h3 id="Códigos_de_status_de_resposta">Códigos de status de resposta</h3>

<p><a href="/pt-BR/docs/Web/HTTP/Status">Códigos de status de respostas HTTP</a> (HTTP <em>response status codes</em>) indicam se uma requisição HTTP específica foi concluída com sucesso. As respostas são agrupadas em cinco classes: respostas informativas, respostas bem-sucedidas, redirecionamentos, erros de clientes e erros de servidores.</p>

<ul>
 <li>{{HTTPStatus(200)}}: <em>OK</em>. A requisição foi bem sucedida.</li>
 <li>{{HTTPStatus(301)}}: <em>Moved Permanently</em>. Esse código de resposta significa que o URI do recurso solicitado foi alterado.</li>
 <li>{{HTTPStatus(404)}}: <em>Not Found</em>. O servidor não pode encontrar o recurso solicitado.</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/Identifying_resources_on_the_Web">Identificando recursos na web</a></li>
 <li><a href="/pt-BR/docs/Web/HTTP/Headers">Cabeçalhos HTTP</a></li>
 <li><a href="/pt-BR/docs/Web/HTTP/Methods">Métodos de requisição HTTP</a></li>
 <li><a href="/pt-BR/docs/Web/HTTP/Status">HTTP response status codes </a></li>
</ul>
