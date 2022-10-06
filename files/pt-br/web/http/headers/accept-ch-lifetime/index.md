---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
tags:
  - Client hints
  - Dicas do Cliente
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/Accept-CH-Lifetime
---
<div>{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}</div>

<p>O cabeçalho <code><strong>Accept-CH-Lifetime</strong></code> é colocado pelo servidor para especificar a persistência do valor do cabeçalho {{HTTPHeader("Accept-CH")}}, que especifica para quais cabeçalhos <a href="/en-US/docs/Glossary/Client_hints">Client Hints</a> o cliente deve incluir nas suas requisições subsequentes.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>?</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>Nota:</strong> Client Hints são acessíveis somente em origens seguras (via TLS). Os cabeçalhos Accept-CH e Accept-CH-Lifetime devem ser persistidos por todas as requisições seguras para assegurar que os Client Hints são enviados com segurança.</p>
</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Accept-CH-Lifetime: &lt;age&gt;
</pre>

<h2 id="Exemplos">Exemplos</h2>

<pre>Accept-CH: Viewport-Width, DPR
Accept-CH-Lifetime: 86400
</pre>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Accept-CH-Lifetime")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Accept-CH")}}</li>
 <li>{{HTTPHeader("Vary")}}</li>
</ul>
