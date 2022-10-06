---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
translation_of: Web/HTTP/Headers/Retry-After
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta HTTP <strong><code>Retry-After</code></strong> indica quanto tempo o agente de usuário deve aguardar antes de fazer outro pedido de acompanhamento. Existem dois casos principais em que este cabeçalho é usado:</p>

<ul>
 <li>Quando enviado com uma resposta {{HTTPStatus(503)}} (Service Unavailable), indica quanto tempo o serviço deve ficar indisponível.</li>
 <li>Quando enviado com uma resposta de redirecionamento, como {{HTTPStatus(301)}} (Moved Permanently), indica o tempo mínimo solicitado que o agente de usuário aguarde antes de realizar o pedido de redirecionamento.</li>
</ul>

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

<pre class="syntaxbox">Retry-After: &lt;data-http&gt;
Retry-After: &lt;atraso-segundos&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;data-http&gt;</dt>
 <dd>Uma data para tentar novamente posteriormente. Veja o cabeçalho {{HTTPHeader("Date")}} para mais detalhes sobre o formato de data HTTP.</dd>
 <dt>&lt;atraso-segundos&gt;</dt>
 <dd>Um decimal inteiro não-negativo indicando o tempo em segundos para esperar após a resposta ser recebida.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Lidando_com_uma_indisponibilidade_programada">Lidando com uma indisponibilidade programada</h3>

<p>O suporte para o cabeçalho <code>Retry-After</code> tanto em clientes quanto em servidores ainda é inconsistente. Apesar disto, alguns indexadores e robôs, como o Googlebot, honram o cabeçalho <code>Retry-After</code>. É útil enviá-lo junto com uma resposta {{HTTPStatus(503)}} (Service Unavailable), assim, os mecanismos de busca poderão continuar indexando o seu site quando a indisponibilidade acabar.</p>

<pre>Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Retry-After", "7.1.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Retry-After")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html">Google Webmaster blog: How to deal with planned site downtime</a></li>
 <li>{{HTTPStatus(503)}} (Service Unavailable)</li>
 <li>{{HTTPStatus(301)}} (Moved Permanently)</li>
</ul>
