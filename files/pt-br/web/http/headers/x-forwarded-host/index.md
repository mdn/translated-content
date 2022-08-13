---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Não padronizado
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/X-Forwarded-Host
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <strong><code>X-Forwarded-Host</code></strong> (XFH) é um cabeçalho padrão de fato para identificar o <em>host</em> original requisitado pelo cliente no cabeçalho de requisição HTTP {{HTTPHeader("Host")}}.</p>

<p>Nomes de <em>hosts </em>e portes de proxies reversos (balanceadores de carga, CDNs) pode diferir do servidor de origem que manipula a solicitação, neste caso o cabeçalho <code>X-Forwarded-Host</code> é útil para determinar qual Host foi originalmente utilizado.</p>

<p>Este cabeçalho é utilizado para depuração, estatísticas, e gerar conteúdo dependente localmente e por design ele expõe informações privadas sensíveis, como o endereço IP do cliente. Então a privacidade do usuário deve estar em mente quando utilizando este cabeçalho.</p>

<p>Uma versão padronizada deste cabeçalho é o cabeçalho HTTP {{HTTPHeader("Forwarded")}}.</p>

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

<pre class="syntaxbox notranslate">X-Forwarded-Host: &lt;host&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;host&gt;</dt>
 <dd>O nome do domínio do servidor encaminhado.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">X-Forwarded-Host: id42.example-cdn.com
</pre>

<h2 id="Especificações">Especificações</h2>

<p>Não pertence a nenhuma especificação atualmente. A versão padronizada do cabeçalho é {{HTTPHeader("Forwarded")}}.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.headers.X-Forwarded-Host")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Host")}}</li>
 <li>{{HTTPHeader("Forwarded")}}</li>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
</ul>
