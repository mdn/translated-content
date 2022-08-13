---
title: From
slug: Web/HTTP/Headers/From
tags:
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/From
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição <code><strong>From</strong></code> contém um endereço de email da Internet para um usuário humano que controla o agente de usuário requisitante poder enviar uma mensagem.</p>

<p>Se você está rodando um agente de usuário robótico (e.g. um <em>crawler</em>), o cabeçalho <code>From</code> deve ser enviado, para que você possa contatar se problemas ocorrerem em servidores, como por exemplo, o robô estar enviando requisições excessivas, não desejadas ou inválidas.</p>

<div class="warning">
<p>Você não deve usar o cabeçalho <code>From</code> para controle de acesso ou autenticação.</p>
</div>

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
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">From: &lt;email&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;email&gt;</dt>
 <dd>Um endereço de email utilizável para mensagens serem enviadas.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">From: webmaster@example.org</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "From", "5.5.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.From")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Host")}}</li>
</ul>
