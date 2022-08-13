---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
tags:
  - Código de status
  - Erro de cliente
  - HTTP
  - Referencia
translation_of: Web/HTTP/Status/414
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta <code><strong>414 URI Too Long</strong></code> indica que o tamanho da URI requisitada pelo cliente é maior do que o tamanho que o servidor aceita interpretar.</p>

<p>Existem algumas raras condições em que isso pode ocorrer:</p>

<ul>
 <li>quando um cliente converteu de forma imprópria uma requisição {{HTTPMethod("POST")}} para uma requisição {{HTTPMethod("GET")}} com uma sequência de informações muito grande,</li>
 <li>quando o cliente caiu em um loop de redirecionamentos (por exemplo, um redirecionamento de uma URI prefixada que aponta para um sufixo de si mesmo),</li>
 <li>ou quando o servidor está sob ataque por um cliente tentando explorar potenciais falhas de segurança.</li>
</ul>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">414 URI Too Long</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "414 URI Too Long" , "6.5.12")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{Glossary("URI")}}</li>
</ul>
