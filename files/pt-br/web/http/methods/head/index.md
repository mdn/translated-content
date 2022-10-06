---
title: HEAD
slug: Web/HTTP/Methods/HEAD
tags:
  - Método de solicitação
  - Referencia
  - requisição
  - solicitação
translation_of: Web/HTTP/Methods/HEAD
---
<div>{{HTTPSidebar}}</div>

<p>O <strong>método HTTP <code>HEAD</code></strong> solicita os cabeçalhos retornados de um recurso específico que foi requisitado por um método HTTP {{HTTPMethod("GET")}}. Tal solicitação pode ser feita antes de baixar um grande recurso para economizar largura de banda, por exemplo.</p>

<p>Uma resposta para um método <code>HEAD</code> não deve ter um corpo. Se tiver, deve ser ignorado. Mesmo assim, {{glossary("Entity header", "entity headers")}} (cabeçalhos de entidade) descrevendo o conteúdo do corpo (como {{HTTPHeader("Content-Length")}}) podem ser incluidos na resposta. Eles não se relacionam com o corpo da resposta <code>HEAD</code>, que deve estar vazio, e sim com o corpo de solicitação relacionado, usando o método {{HTTPMethod("GET")}} que teria retornado como resposta.</p>

<p>Se a resposta de uma solicitação <code>HEAD</code> mostrar que um recurso armazenado em cache após uma requisição {{HTTPMethod("GET")}} está desatualizado, o cache é invalidado, mesmo se nenhuma solicitação <code>GET</code> tiver sido feita.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Solicitação tem um corpo</th>
   <td>Não</td>
  </tr>
  <tr>
   <th scope="row">A resposta bem sucedida tem um corpo</th>
   <td>Não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe")}}</th>
   <td>Sim</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent")}}</th>
   <td>Sim</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable")}}</th>
   <td>Sim</td>
  </tr>
  <tr>
   <th scope="row">Permitido em <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulário HTML</a></th>
   <td>Não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">HEAD /index.html
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "HEAD", "4.3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semântica e Conteúdo</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.methods.HEAD")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPMethod("GET")}}</li>
</ul>
