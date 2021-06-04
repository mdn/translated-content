---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
tags:
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Transfer-Encoding
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <strong><code>Transfer-Encoding</code></strong> especifica a forma de codificação usada para transferir seguramente o corpo da mensagem ({{Glossary("Payload body","payload body")}}) para o usuário.</p>

<div class="note"><a href="https://wikipedia.org/wiki/HTTP/2">HTTP/2</a> não suporta o mecanismo de codificação de trasferência fragmentada do HTTP 1.1, já que ele provém o próprio, e mais eficiente, mecanismo para <em>streaming</em> de dados.</div>

<p><code>Transfer-Encoding</code> é um cabeçalho salto-por-salto (<em><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#hbh">hop-by-hop header</a></em>), que é aplicado a uma mensagem entre dois nós, não ao recurso em si. Cada segmento da conexão multi-nós pode usar diferentes valores <code>Transfer-Encoding</code>. Se você quer comprimir dados através da conexão inteira, use o cabeçalho {{HTTPHeader("Content-Encoding")}} ao invés disso.</p>

<p>Quando presente em uma resposta para uma requisição {{HTTPMethod("HEAD")}} que não tem corpo, ele indica o valor que seria aplicado a mensagem {{HTTPMethod("GET")}} correspondente.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

<em>// Diversos valores podem ser listados, separados por vírgula</em>
Transfer-Encoding: gzip, chunked</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>chunked</code></dt>
 <dd>Dados enviados em uma série de fragmentos. O cabeçalho {{HTTPHeader("Content-Length")}} é omitido neste caso e no começo de cada fragmento, você precisa adicionar o tamanho do fragmento atual em formato hexadecimal, seguido por '<code>\r\n</code>' e o fragmento em si, seguido por outro '<code>\r\n</code>'. O fragmento final é um fragmento normal, com exceção que seu tamanho é zero. Ele é seguido por um reboque, que consiste de uma (possívelmente vazia) sequência de cabeçalhos de entidade.</dd>
 <dt><code>compress</code></dt>
 <dd>Um formato usando o algoritmo <a class="external" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW). O nome do valor foi pego do programa UNIX <em>compress</em>, que implementa o algoritmo.<br>
 Como o programa de compressão, que desapareceu da maioria das distribuições UNIX, esta codificação de conteúdo não é usada por quase nenhum navegador atualmente, em partes por causa do seu problema de patente (que expirou em 2003).</dd>
 <dt><code>deflate</code></dt>
 <dd>Usando a estrutura <a class="external" href="http://en.wikipedia.org/wiki/Zlib">zlib</a> (definida na <a class="external" href="http://tools.ietf.org/html/rfc1950">RFC 1950</a>), com o algoritmo de compressão <a class="external" href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a> (definido em <a class="external" href="http://tools.ietf.org/html/rfc1952">RFC 1951</a>).</dd>
 <dt><code>gzip</code></dt>
 <dd>O formato usando a <a class="external" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">codificação Lempel-Ziv</a> (LZ77), com CRC 32-bit. Este é originalmente o formato do programa UNIX <em>gzip</em>. O padrão HTTP/1.1 também recomenda que os servidores que suportem esta codificação de conteúdo devem reconhecer <code>x-gzip</code> como um pseudônimo, para propósitos de compatibilidade.</dd>
 <dt><code>identity</code></dt>
 <dd>Indica a função de identidade (i.e. sem compressão, nem modificação). Este <em>token</em>, exceto se explicitamente especificado, é sempre considerado aceitável.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Codificação_fragmentada">Codificação fragmentada</h3>

<p>Codificação fragmentada é útil quando grandes quantidade de dados estão sendo enviados para o cliente e o tamanho total da resposta pode não ser conhecido até que a requisição seja totalmente processada. Por exemplo, quando gerando uma grande tabela HTML resultante de uma consulta no banco de dados ou transmitindo grandes imagens. A resposta fragmentada se parece com isto:</p>

<pre class="notranslate">HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7230", "Transfer-Encoding", "3.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Transfer-Encoding")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Accept-Encoding")}}</li>
 <li>{{HTTPHeader("Content-Encoding")}}</li>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>Cabeçalho que regulam o uso de reboques: {{HTTPHeader("TE")}} (requisições) e {{HTTPHeader("Trailer")}} (respostas).</li>
 <li>
  <p><a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Codificação de transferência fragmentada</a></p>
 </li>
</ul>
