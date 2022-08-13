---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
translation_of: Web/HTTP/Status/300
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta HTTP do status de redirecionamento <code><strong>300 Multiple Choices</strong></code> indica que a requisição tem uma ou mais possíveis respostas. O agente de usuário ou o usuário devem escolher uma delas. Como não há forma padrão de se escolher uma das respostas, esse código de resposta é raramente usado.</p>

<p>Se o servidor tem uma escolha de preferência, ele deve gerar um cabeçalho {{HTTPHeader("Localização")}}.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">300 Multiple Choices
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "300 Multiple Choices" , "6.4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPStatus("301")}} <code>Moved Permanently</code></li>
 <li>{{HTTPStatus("302")}} <code>Found</code>, o redirecionamento temporário</li>
 <li>{{HTTPStatus("308")}} <code>Permanent Redirect</code></li>
</ul>
