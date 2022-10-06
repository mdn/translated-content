---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - HTTP Header
  - Reference
  - Referencia
  - Request header
translation_of: Web/HTTP/Headers/Accept
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <strong><code>Accept</code></strong> anuncia quais tipos de conteúdo, expressos como <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME types</a>, o cliente é capaz de entender. Usando <a href="/en-US/docs/Web/HTTP/Content_negotiation">negociação de conteúdo</a>, o servidor então seleciona uma das propostas, a usa e então informa o cliente da sua escolha com o cabeçalho de resposta {{HTTPHeader("Content-Type")}}. Navegadores colocam valores adequados para este cabeçalho dependendo do contexto onde a requisição é feita: quando buscando um CSS <em>stylesheet</em>, um valor diferente é colocado para a requisição, o mesmo acontece com imagens, vídeos ou scripts.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted request header")}}</th>
   <td>sim, com a restrição adicional de que valores não podem conter um <em>byte de requisição de cabeçalho CORS inseguro:</em><code><em> </em>"():&lt;&gt;?@[\]{}</code>, Delete, Tab e outros caracteres de controle: 0x00 à 0x19.</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Accept: &lt;MIME_type&gt;/&lt;MIME_subtype&gt;
Accept: &lt;MIME_type&gt;/*
Accept: */*

// Múltiplos tipos, com pesos devido à sintaxe {{glossary("quality values", "quality value")}}:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>&lt;MIME_type&gt;/&lt;MIME_subtype&gt;</code></dt>
 <dd>Um único e preciso <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>, como por exemplo: <code>text/html</code>.</dd>
 <dt><code>&lt;MIME_type&gt;/*</code></dt>
 <dd>Um <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>, mas com qualquer subtipo. <code>image/*</code> vai coincidir com <code>image/png</code>, <code>image/svg</code>, <code>image/gif</code> e outros tipos de imagens.</dd>
 <dt><code>*/*</code></dt>
 <dd>Qualquer <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>.</dd>
 <dt><code>;q=</code> (fator de q de peso [q-factor])</dt>
 <dd>Qualquer valor usado é colocado em uma ordem de preferência expressada usando o <a href="/en-US/docs/Glossary/Quality_values">quality value</a> relativo chamado <em>peso.</em></dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Accept: text/html

Accept: image/*

// Padrão geral
Accept: */*

// Padrão para requisições de navegação
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7231", "Accept", "5.3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Accept")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Content_negotiation">Negociação de conteúdo</a> HTTP</li>
 <li>Cabeçalho com o resultado da negociação de conteúdo: {{HTTPHeader("Content-Type")}}</li>
 <li>Outros cabeçalhos similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}</li>
</ul>
