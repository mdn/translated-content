---
title: Origin
slug: Web/HTTP/Headers/Origin
tags:
  - Cabeçalho de requisição
  - HTTP
  - Origem
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Origin
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição <strong><code>Origin</code></strong> indica onde a requisição se originou. Ele não inclui nenhuma informação do caminho, somente o nome do servidor. Ele é enviado com requisições {{Glossary("CORS")}}, também como requisições {{HTTPMethod("POST")}}. Ele é similar ao cabeçalho {{HTTPHeader("Referer")}}, mas, diferente deste cabeçalho, ele não mostra o caminho inteiro.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: O cabeçalho {{httpheader("Origin")}} não é colocado em <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">requisições Fetch</a> com um método {{HTTPMethod("HEAD")}} ou {{HTTPMethod("GET")}} (este comportamento foi corrigido no Firefox 65 — veja {{bug(1508661)}}).</p>
</div>

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

<pre class="syntaxbox notranslate">Origin: null
Origin: &lt;scheme&gt; "://" &lt;hostname&gt; [ ":" &lt;port&gt; ]
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;scheme&gt;</dt>
 <dd>O protocolo que é usado. Usualmente ele é o protocolo HTTP ou na sua versão segura, HTTPS.</dd>
 <dt>&lt;hostname&gt;</dt>
 <dd>O nome do domínio do servidor (para <em>host</em> virtual) ou o endereço IP.</dd>
 <dt>&lt;port&gt; {{optional_inline}}</dt>
 <dd>O número da porta TCP que o servidor está escutando. Se a porta não é dada, a porta padrão do serviço requisitado é implítica (e.g., "80" para uma URL HTTP).</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">Origin: https://developer.mozilla.org</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Comentários</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("6454", "Origin", "7")}}</td>
   <td>Conceito da Origem da Internet</td>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#origin-header','Origin header')}}</td>
   <td>Substitui o cabeçalho <code>Origin</code> como definido na RFC6454.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<div>{{Compat("http.headers.Origin")}}</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Host")}}</li>
 <li>{{HTTPHeader("Referer")}}</li>
 <li><a href="/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a></li>
</ul>
