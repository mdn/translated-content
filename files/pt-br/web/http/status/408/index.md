---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
tags:
  - Erro Cliente
  - HTTP
  - Resposta Servidor
  - Status code
translation_of: Web/HTTP/Status/408
---
<div>{{HTTPSidebar}}</div>

<p><code>A resposta <strong>408 Request Timeout</strong></code> significa que o servidor irá encerrar essa conexão em desuso. É enviado a uma conexão parada por alguns servidores, <em>mesmo sem nenhuma requisição feita anteriormente pelo cliente</em>.</p>

<p>O servidor deve enviar no cabeçalho de resposta "close" {{HTTPHeader("Connection")}}  já que <code>408</code> implica que o servidor decidiu encerrar a conexão ao invés de continuar aguardando.</p>

<p>Essa resposta está sendo mais usada desde que alguns browsers como Chrome, Firefox 27+, e IE9, usam o mecanismo "HTTP pre-connection" para acelerar a navegação.</p>

<div class="note">
<p><strong>Nota: </strong>alguns servidores simplesmente encerram a conexão sem enviar esssa mensagem.</p>
</div>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">408 Request Timeout</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "408 Request Timeout" , "6.5.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("X-DNS-Prefetch-Control")}}</li>
</ul>
