---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
  - Codigo Status
  - Codigo Status HTTP
  - Erro no cliente
  - HTTP
  - Referencia
translation_of: Web/HTTP/Status/415
---
<p> </p>

<p>{{HTTPSidebar}}</p>

<p>O erro HTTP <code><strong>415 Unsupported Media Type</strong></code> do cliente indica que o servidor se recusou a aceitar a requisição porque o formato do payload não é um formato suportado.</p>

<p>O problema do formato por ter ocorrido pelos valores indicados no {{HTTPHeader("Content-Type")}} ou {{HTTPHeader("Content-Encoding")}}, ou pelo resultado da inspeção do dado em si.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">415 Unsupported Media Type</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Content-Encoding")}}</li>
 <li>{{HTTPHeader("Accept")}}</li>
</ul>
