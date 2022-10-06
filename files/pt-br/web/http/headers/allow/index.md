---
title: Allow
slug: Web/HTTP/Headers/Allow
tags:
  - Cabeçalho HTTP
  - Cabeçalho de Entidade
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Allow
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta <code><strong>Allow</strong></code> lista um conjunto de métodos suportados pelo recurso.</p>

<p>O cabeçalho deve ser enviado se o servidor responde com um código de resposta {{HTTPStatus("405")}} <code>Method Not Allowed</code>, para indicar quais métodos de requisição podem ser utilizados. Um cabeçalho <code>Allow</code> vazio indica que o recurso não permite cabeçalhos de requisição, o que pode acontecer temporariamente para um dado recurso, por exemplo.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Allow: &lt;métodos-http&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;métodos-http&gt;</dt>
 <dd>Uma lista de <a href="/en-US/docs/Web/HTTP/Methods">métodos de requisição HTTP</a> separados por vírgula.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Allow: GET, POST, HEAD</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Allow", "7.4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPStatus("405")}}</li>
 <li>{{HTTPHeader("Server")}}</li>
</ul>
