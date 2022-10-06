---
title: Pragma
slug: Web/HTTP/Headers/Pragma
tags:
  - Cacheamento
  - Depreciado
  - HTTP
  - cabeçalho
  - requisição
translation_of: Web/HTTP/Headers/Pragma
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho genérico HTTP/1.0 <code><strong>Pragma</strong></code> é um cabeçalho de implementação específica que pode ter vários efeitos ao longo da cadeia de requisição e resposta. Ele é usado para compatibilidade retroativa com caches do HTTP/1.0 onde o cabeçalho HTTP/1.1 <code>Cache-Control</code> ainda não está presente.</p>

<div class="note">
<p><strong>Nota</strong>: <code>Pragma</code> não é especificado para respostas HTTP e por isso não é uma substituição confiável para o cabeçalho genérico HTTP/1.1 <code>Cache-Control</code>, apesar de ele ter o mesmo comportamento que <code>Cache-Control: no-cache</code>, se o cabeçalho <code>Cache-Control</code> for omitido na requisição. Use <code>Pragma</code> somente para compatibilidade retroativa com clientes HTTP/1.0.</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("General header")}}, mas o comportamente de resposta não é especificado e portanto específico de implementação.</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted response header")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Pragma: no-cache
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>no-cache</dt>
 <dd>
 <p>O mesmo que <code>Cache-Control: no-cache</code>. Força os caches a mandarem uma requisição ao servidor de origem para validação antes de liberar a versão cacheada.</p>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">Pragma: no-cache</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7234", "Pragma", "5.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Pragma")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
</ul>
