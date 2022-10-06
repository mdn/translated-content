---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Não padronizado
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/X-Forwarded-Proto
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <strong><code>X-Forwarded-Proto</code></strong> (XFP) é um cabeçalho padrão de fato para identificar o protocolo (HTTP ou HTTPS) que o cliente usava para conectar ao seu proxy ou balanceador de carga. Seus <em>logs </em>de acesso do servidor contém o protocolo usado entre o servidor e o balanceador de carga, não o protocolo usado entre o cliente e o balanceador de carga. Para determinar o protocolo utilizado entre o cliente e o balanceador de carga, o cabeçalho de requisição <code>X-Forwarded-Proto</code> pode ser utilizado.</p>

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

<pre class="syntaxbox notranslate">X-Forwarded-Proto: &lt;protocol&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;protocol&gt;</dt>
 <dd>O protocolo encaminhado (http ou https).</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">X-Forwarded-Proto: https</pre>

<p>Outras formas não padronizadas:</p>

<pre class="notranslate"># Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
</pre>

<h2 id="Especificações">Especificações</h2>

<p>Não pertence a nenhuma especificação atualmente. A versão padronizada do cabeçalho é {{HTTPHeader("Forwarded")}}.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.headers.X-Forwarded-Proto")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Forwarded")}}</li>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
</ul>
