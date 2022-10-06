---
title: Referer
slug: Web/HTTP/Headers/Referer
tags:
  - HTTP
  - Reference
  - Referencia
  - Referenciado
  - cabeçalho
  - header
  - referer
translation_of: Web/HTTP/Headers/Referer
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <code><strong>Referer</strong></code> contém o endereço da página web anterior do qual a página atual requerida foi chamada. O <code>Referer</code> permite aos servidores identificar de onde as pessoas estão visitando eles e pode usar esses dados para análise, log e cacheamento otimizado, por exemplo.</p>

<div class="warning">
<p><strong>Importante</strong>: Apesar que esse cabeçalho tenha diversos usos inocentes, ele pode ter consequências indesejáveis para segurança e privacidade dos usuários. Veja <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns">Referer header: privacy and security concerns</a> para mais informações e mitigações.</p>
</div>

<p>Note que <em>referer </em>é na verdade, uma má pronúncia da palavra "referrer"("referenciador"). Veja {{interwiki("wikipedia", "HTTP_referer", "HTTP referer no Wikipedia")}} para mais detalhes.</p>

<p>O cabeçalho <code>Referer</code> não é enviado pelos navegadores se:</p>

<ul>
 <li>O recurso referenciado é um arquivo local ou URI de dados.</li>
 <li>Uma requisição HTTP insegura é usada e a página referenciada utilizou o protocolo seguro (HTTPS).</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Referer: &lt;url&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;url&gt;</dt>
 <dd>Um endereço parcial ou absoluto da página web anterior do qual a página atual requirida foi alcançada. Fragmentos de URL (i.e. "#section") e informações de usuário (i.e. "username:password" em "https://username:password@example.com/foo/bar/") não são inclusos.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript</pre>

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
   <td>{{RFC("7231", "Referer", "5.5.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Referer")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{interwiki("wikipedia", "HTTP_referer", "HTTP referer no Wikipedia")}}</li>
 <li>{{HTTPHeader("Referrer-Policy")}}</li>
</ul>
