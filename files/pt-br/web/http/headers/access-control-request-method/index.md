---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
tags:
  - CORS
  - Cabeçalho de requisição
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Access-Control-Request-Method
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição <strong><code>Access-Control-Request-Method</code></strong> é usado pelos navegadores quando executando uma {{glossary("preflight request")}}, para deixar o servidor sabendo quais <a href="/en-US/docs/Web/HTTP/Methods">métodos HTTP</a> vão ser usados quando a requisição verdadeira for feita. Este cabeçalho é necessário como toda requisição pré-vôo é um {{HTTPMethod("OPTIONS")}} e não usa o mesmo método na requisição verdadeira.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Access-Control-Request-Method: &lt;método&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;método&gt;</dt>
 <dd>Um dos <a href="/en-US/docs/Web/HTTP/Methods">métodos de requisição HTTP</a>, por exemplo: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} ou {{HTTPMethod("DELETE")}}.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Access-Control-Request-Method: POST</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentários</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-request-method', 'Access-Control-Request-Method')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Access-Control-Request-Method")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Request-Headers")}}</li>
</ul>
