---
title: 202 Accepted
slug: Web/HTTP/Status/202
tags:
  - Código 202
  - Código de status
  - HTTP
  - Referencia
  - Resposta bem-sucedida
translation_of: Web/HTTP/Status/202
---
<p>O código resposta HyperText Transfer Protocol (HTTP) <code><strong>202 Accepted</strong></code> indica que a requisição foi recebida, mas não pode atuar ainda. Ela é sem compromisso, significando que não há maneira de o HTTP  enviar posteriormente uma resposta assíncrona indicando a saída do processamento da requisição. A intenção desta resposta é para os casos onde outro processo ou, ainda, servidor lida com a requisição ou para processamentos <em>batch.</em></p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">202 Accepted</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "202 Accepted" , "6.3.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Accept")}}</li>
</ul>
