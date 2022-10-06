---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
tags:
  - Código de status
  - Erro de servidor
  - HTTP
translation_of: Web/HTTP/Status/508
---
<p>{{HTTPSidebar}}</p>

<p>O código de resposta de erro HTTP  <code><strong>508 Loop Detected</strong></code> pode ser retornado em um contexto do protocolo Web Distributed Authoring and Versioning (WebDAV) .</p>

<p>Indica que o servidor finalizou uma operação porque encontrou um loop infinito enquando processava a requisição com "Depth: infinity". Esse código indica que toda a operação falhou.</p>



<h2 id="Status">Status</h2>

<pre class="syntaxbox">508 Loop Detected</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("5842", "508 Loop Detected" , "7.2")}}</td>
   <td>Web Distributed Authoring and Versioning</td>
  </tr>
 </tbody>
</table>
