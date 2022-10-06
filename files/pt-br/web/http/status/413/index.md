---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
translation_of: Web/HTTP/Status/413
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta HTTP <code><strong>413 Payload Too Large</strong></code> indica que a carga da requisição é mais larga que os limites estabelecidos pelo servidor; o servidor pode encerrar a conexão ou retornar {{HTTPHeader("Retry-After")}} no campo de cabeçalho.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">413 Payload Too Large</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "413 Payload Too Large" , "6.5.11")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1):Semânticas e Conteúdo</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("Retry-After")}}</li>
</ul>
