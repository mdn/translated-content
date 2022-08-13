---
title: TE
slug: Web/HTTP/Headers/TE
tags:
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/TE
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição <code><strong>TE</strong></code> especifica a codificação de transferência que o agente de usuário está propício a aceitar (você poderia informalmente chamar ele de <em><code>Accept-Transfer-Encoding</code></em>, o que seria mais intuitivo).</p>

<div class="note"><a href="https://tools.ietf.org/html/rfc7540#section-8.1.2.2">Em HTTP/2 - o cabeçalho <code>TE</code> somente é aceito se o valor <code>trailers</code> é colocado.</a></div>

<p>Veja também o cabeçalho de resposta {{HTTPHeader("Transfer-Encoding")}} para maiores detalhes sobre codificações de transferência. Note que <code>chunked</code> é sempre aceito para receptores HTTP/1.1 e você não precisa especificar <code>"chunked"</code> usando o cabeçalho <code>TE</code>. Entretanto, ele é útil para configurar se o cliente está aceitando campos de rabeira (<em>trailer fields</em>) em uma codificação de transferência fragmentada usando os valores "<em>trailers</em>".</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">TE: compress
TE: deflate
TE: gzip
TE: trailers

// Multiple directives, weighted with the {{glossary("quality values", "quality value")}} syntax:
TE: trailers, deflate;q=0.5
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>compress</code></dt>
 <dd>Um formato usando o algoritmo de <a class="external" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW) é aceito como nome de codificação de transferência.</dd>
 <dt><code>deflate</code></dt>
 <dd>Usar a estrutura <a class="external" href="http://en.wikipedia.org/wiki/Zlib">zlib</a> é aceito como nome da codificação de transferência.</dd>
 <dt><code>gzip</code></dt>
 <dd>Um formato usando a <a class="external" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">codificação Lempel-Ziv</a> (LZ77), com um CRC 32-bit é aceito como nome da codificação de transferência.</dd>
 <dt><code>trailers</code></dt>
 <dd>Indica que o cliente está sujeito a aceitar campos <em>trailer</em> em uma codificação de transferência fragmentada.</dd>
 <dt><code>q</code></dt>
 <dd>
 <p>Quando múltiplas codificações de transferência são aceitas, o parâmetro <code>q</code> da sintaxe de <a href="/en-US/docs/Glossary/Quality_values">valor de qualidade</a> pode elencar codificações por preferência.</p>
 </dd>
</dl>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "TE", "4.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.TE")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
 <li>{{HTTPHeader("Trailer")}}</li>
 <li>
  <p><a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Codificação de transferência fragmentada (<em>Chunked transfer encoding</em>)</a></p>
 </li>
</ul>
