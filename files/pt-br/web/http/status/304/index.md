---
title: 304 Not Modified
slug: Web/HTTP/Status/304
tags:
  - HTTP
  - Redirecionamento
  - Referencia
  - Status code
translation_of: Web/HTTP/Status/304
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta HTTP de redirecionamento do cliente <code><strong>304</strong></code> <code><strong>Not Modified</strong></code> indica que não há necessidade de retransmitir a requisição de recursos. É um redirecionamento implícito para o recurso em cache. Isto ocorre quando o método de requisição é {{glossary("safe")}}, assim como uma requisição {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, ou quando a requisição é condicional e usa um cabeçalho {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}}.</p>

<p>A resposta equivalente {{HTTPStatus("200")}} <code>OK</code> teria incluso os cabeçalhos {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, e {{HTTPHeader("Vary")}}.</p>

<div class="note">
<p>Vários <a href="/en-US/docs/Tools/Network_Monitor">painéis de rede de ferramentas de desenvolvedor</a> dos navegadores criam requisições irrelevantes direcionando para respostas <code>304</code>, logo este acesso ao cache local é visível aos desenvolvedores.</p>
</div>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">304 Not Modified</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7232", "304 Not Modified" , "4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.status.304")}}</p>

<h2 id="Notas_de_Compatibilidade">Notas de Compatibilidade</h2>

<ul>
 <li>O comportamento do navegador difere se em conexões persistentes a resposta erroneamente incluir um corpo. Leia <a href="/en-US/docs/Web/HTTP/Status/204">204 No Content</a> para mais detalhes.</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("If-Modified-Since")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
</ul>
