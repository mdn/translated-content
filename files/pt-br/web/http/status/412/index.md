---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
tags:
  - Código de status
  - Erro
  - Error
  - HTTP
  - Reference
  - Referencia
  - Status code
translation_of: Web/HTTP/Status/412
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta de erro de cliente HTTP <code><strong>412 Precondition Failed</strong></code> indica que o acesso ao recurso especificado foi negado. Isso acontece com requisições condicionais em métodos que não {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} quando a condição definida pelo cabeçalho {{HTTPHeader("If-Unmodified-Since")}} ou {{HTTPHeader("If-None-Match")}} não é satisfeita. Nesse caso, a requisição, geralmente um upload ou modificação de um recurso, não pode ser feita e o código de error de resposta é enviado de volta.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">412 Precondition Failed</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7232", "412 Precondition Failed" , "4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>A informação abaixo foi retirada do GitHub da MDN (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.412")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPStatus("304")}}</li>
 <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
 <li>{{HTTPStatus("428")}}</li>
</ul>
