---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
tags:
  - CORS
  - HTTP
  - Reference
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Access-Control-Expose-Headers
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta <strong><code>Access-Control-Expose-Headers</code></strong> indica quais cabeçalhos podem ser expostos como parte da resposta listando os seus nomes.</p>

<p>Por padrão, somente os 6 {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} são expostos:</p>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Content-Language")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
 <li>{{HTTPHeader("Last-Modified")}}</li>
 <li>{{HTTPHeader("Pragma")}}</li>
</ul>

<p>Se você quiser que clientes tenham acesso a outros cabeçalhos, você deve listá-los usando o cabeçalho <code>Access-Control-Expose-Headers</code>.</p>

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
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Access-Control-Expose-Headers: &lt;nome-do-cabeçalho&gt;, &lt;nome-do-cabeçalho&gt;, ...
Access-Control-Expose-Headers: *
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;nome-do-cabeçalho&gt;</dt>
 <dd>Uma lista dos cabeçalhos expostos contendo zero ou mais <a href="/en-US/docs/Web/HTTP/Headers">nomes de cabeçalhos</a> além dos {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} que o recurso pode usar e expor.</dd>
 <dt><code>*</code> (coringa)</dt>
 <dd>O valor "<code>*</code>" conta somente como um valor coringa para requisições sem credenciais (requisições sem <a href="/en-US/docs/Web/HTTP/Cookies">cookies HTTP</a> ou informação de autenticação HTTP). Em requisições com credenciais, ele é tratado como o nome de cabeçalho literal "<code>*</code>" sem qualquer semântica.<br>
 Note que o cabeçalho {{HTTPHeader("Authorization")}} não pode ter valor coringa e sempre precisa ser listado explicitamente.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<p>Para expor um cabeçalho de requisição não-CORS-seguro, você pode especificar:</p>

<pre>Access-Control-Expose-Headers: Content-Length</pre>

<p>Para expor um cabeçalho customizado adicionalmente, como <code>X-Kuma-Revision</code>, você pode adicionar múltiplos cabeçalhos separados por vírgula:</p>

<pre>Access-Control-Expose-Headers: Content-Length, X-Kuma-Revision</pre>

<p>Em requisições sem credênciais, você também pode usar um valor coringa:</p>

<pre>Access-Control-Expose-Headers: *</pre>

<p>Entretanto, isso não irá colocar um valor coringa para o cabeçalho {{HTTPHeader("Authorization")}}, então caso você precise que ele seja exposto, você precisa listá-lo explicitamente:</p>

<pre>Access-Control-Expose-Headers: *, Authorization</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-expose-headers', 'Access-Control-Expose-Headers')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Access-Control-Expose-Headers")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Allow-Headers")}}</li>
 <li>{{HTTPHeader("Access-Control-Allow-Origin")}}</li>
</ul>
