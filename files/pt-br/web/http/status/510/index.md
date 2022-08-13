---
title: 510 Not Extended
slug: Web/HTTP/Status/510
tags:
  - Código de status
  - Erro do servidor
  - HTTP
translation_of: Web/HTTP/Status/510
---
<div>{{HTTPSidebar}}</div>

<p>O código de status da resposta HTTP  <code><strong>510 Not Extended</strong></code> é enviado no contexto do HTTP Extension Framework, definido na <a href="https://tools.ietf.org/html/rfc2774">RFC 2774</a>.</p>

<p>Na especificação, um cliente pode mandar uma requisição que contenha uma declaração de extensão, que descreve a extensão a ser utilizada. Se o servidor aceitar tal requisição, mas quaisquer extensões descritas na requisição não forem suportadas, o servidor então retorna uma resposta com o código de status <strong><code>510</code></strong>.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">510 Not Extended</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("2774", "510 Not Extended" , "7")}}</td>
   <td>An HTTP Extension Framework</td>
  </tr>
 </tbody>
</table>
