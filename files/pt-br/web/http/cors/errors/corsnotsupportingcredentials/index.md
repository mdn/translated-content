---
title: >-
  Reason: Credential is not supported if the CORS header
  ‘Access-Control-Allow-Origin’ is ‘*’
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
translation_of: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---
<div>{{HTTPSidebar}}</div>

<h2 id="Motivo">Motivo</h2>

<pre class="syntaxbox notranslate">Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’</pre>

<h2 id="O_que_houve_de_errado">O que houve de errado?</h2>

<p>A requisição {{Glossary("CORS")}} foi realizada com a flag de credenciais definida, mas o servidor está configurado para usar o coringa (<code>"*"</code>) como valor do cabeçalho {{HTTPHeader("Access-Control-Allow-Origin")}}, o que não permite o uso de credenciais.</p>

<p>Para corrigir o problema do lado do cliente, assegure que a flag de credenciais é <code>false</code> ao fazer a requisição CORS.</p>

<ul>
 <li>Se a requisição foi realizada usando {{domxref("XMLHttpRequest")}}, assegure-se que você não setou {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} para <code>true</code>.</li>
 <li>Usando <a href="/en-US/docs/Web/API/Server-sent_events">Server-sent events</a>, verifique se  {{domxref("EventSource.withCredentials")}} está <code>false</code> (é o valor padrão).</li>
 <li>Se usar a <a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a>, assegure-se que {{domxref("Request.credentials")}} está como <code>"omit"</code>.</li>
</ul>

<p>Se, em vez disso, você precisar ajustar o comportamento do servidor, você deverá alterar o valor de <code>Access-Control-Allow-Origin</code> para permitir acesso para a origem do qual o cliente é carregado.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
