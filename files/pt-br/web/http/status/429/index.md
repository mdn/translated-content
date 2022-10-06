---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
tags:
  - Código de status
  - Erro
  - Erro de cliente
  - HTTP
  - Referência(2)
  - Status HTTP
translation_of: Web/HTTP/Status/429
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta HTTP <code><strong>429 Too Many Requests</strong></code> indica que o usuário enviou muitos pedidos em um determinado período de tempo.</p>

<p>Um header {{HTTPHeader("Retry-After")}} pode ser incluído na resposta indicando quanto tempo o usuário deve esperar antes de fazer um novo pedido.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">429 Too Many Requests</pre>

<h2 id="Exemplo">Exemplo</h2>

<pre>HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("6585", "429 Too Many Requests" , "4")}}</td>
   <td>Status HTTP adicionais</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Retry-After")}}</li>
</ul>
