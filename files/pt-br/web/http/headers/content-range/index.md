---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
tags:
  - Cabeçalho HTTP
  - Cabeçalho de Resposta
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Content-Range
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta HTTP <strong><code>Content-Range</code></strong> indica em que lugar uma mensagem parcial pertence em uma mensagem completa no corpo.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Simple response header", "CORS-safelisted response-header")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Content-Range: &lt;unit&gt; &lt;range-start&gt;-&lt;range-end&gt;/&lt;size&gt;
Content-Range: &lt;unit&gt; &lt;range-start&gt;-&lt;range-end&gt;/*
Content-Range: &lt;unit&gt; */&lt;size&gt;</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;unit&gt;</dt>
 <dd>A unidade nos quais a variação é especificada. Geralmente em <code>bytes</code>.</dd>
</dl>

<dl>
 <dt>&lt;range-start&gt;</dt>
 <dd>Um inteiro na dada unidade indicando o começo da variação da requisitada.</dd>
 <dt>&lt;range-end&gt;</dt>
 <dd>Um inteiro na dada unidade indicando o fim da variação requisitada.</dd>
 <dt>&lt;size&gt;</dt>
 <dd>O tamanho total do documento (ou <code>'*'</code> se desconhecido).</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Content-Range: bytes 200-1000/67589
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7233", "Content-Range", "4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Content-Range")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("If-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPStatus("206")}} <code>Partial Content</code></li>
 <li>{{HTTPStatus("416")}} <code>Range Not Satisfiable</code></li>
</ul>
