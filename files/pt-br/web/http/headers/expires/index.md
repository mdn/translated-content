---
title: Expires
slug: Web/HTTP/Headers/Expires
tags:
  - Cabeçalhos
translation_of: Web/HTTP/Headers/Expires
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <code><strong>Expires</strong></code> contém a data/hora após a qual a resposta é considerada velha.</p>

<p>Datas inválidas, como o valor 0, representam uma data no passado e significam que o recurso já expirou.</p>

<p>Se existe um cabeçalho {{HTTPHeader("Cache-Control")}} com a diretiva "max-age" ou "s-maxage" na resposta, o cabeçalho <code>Expires</code> é ignorado.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de Header</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Simple response header", "CORS-safelisted response-header")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Expires: &lt;http-date&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;http-date&gt;</dt>
 <dd>
 <p>Ums data/hora HTTP-date.</p>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Expires: Wed, 21 Oct 2015 07:28:00 GMT</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7234", "Expires", "5.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Expires")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Age")}}</li>
</ul>
