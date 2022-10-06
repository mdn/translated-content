---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
translation_of: Web/HTTP/Status/426
---
<div>{{HTTPSidebar}}</div>

<p>O status HTTP <code><strong>426 Upgrade Required</strong></code> indica que o servidor recusa o processamento da requisição usando o protocolo atual mas poderá ser processado caso o cliente atualize para um protocolo diferente.</p>

<p>O servidor envia uma header {{HTTPHeader("Upgrade")}} com esta resposta para indicar qual o protocolo necessário.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">426 Upgrade Required</pre>

<h2 id="Exemplos">Exemplos</h2>

<pre>HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol</pre>

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
   <td>{{RFC("7231", "426 Upgrade Required" , "6.5.15")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_também">Ver também</h2>

<ul>
 <li>{{HTTPHeader("Upgrade")}}</li>
 <li>{{HTTPStatus("101")}} <code>Switching Protocol</code></li>
</ul>
