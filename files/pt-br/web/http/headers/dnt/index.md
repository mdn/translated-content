---
title: DNT
slug: Web/HTTP/Headers/DNT
tags:
  - DNT
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/DNT
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição <strong><code>DNT</code></strong> (<strong>D</strong>o <strong>N</strong>ot <strong>T</strong>rack) indica a preferência do usuário de permitir ser "seguido". Ele indica se o usuário prefere privacidade ao invés de conteúdo personalizado.</p>

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

<pre class="syntaxbox">DNT: 0
DNT: 1
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>0</dt>
 <dd>O usuário prefere <strong>permitir</strong> ser seguido no site alvo.</dd>
 <dt>1</dt>
 <dd>O usuário prefere <strong>não permitir</strong> ser seguido no site alvo.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Lendo_status_Do_Not_Track_status_do_JavaScript">Lendo status Do Not Track status do JavaScript</h3>

<p>A preferência DNT do usuário também pode ser lida do JavaScript usando a propriedade {{domxref("Navigator.doNotTrack")}}:</p>

<pre class="brush: js">navigator.doNotTrack; // "0" or "1"</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentários</th>
  </tr>
  <tr>
   <td>{{SpecName('Tracking','#dnt-header-field', 'DNT Header Field for HTTP Requests')}}</td>
   <td>{{Spec2("Tracking")}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.DNT")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{domxref("Navigator.doNotTrack")}}</li>
 <li>Cabeçalho {{HTTPHeader("Tk")}}</li>
 <li><a href="https://en.wikipedia.org/wiki/Do_Not_Track">Do Not Track no Wikipedia</a></li>
 <li><a href="https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean">What Does the "Track" in "Do Not Track" Mean? – EFF</a></li>
 <li><a href="https://donottrack.us/">donottrack.us</a></li>
 <li>Ajuda das configurações DNT dos navegadores:
  <ul>
   <li><a href="https://www.mozilla.org/en-US/firefox/dnt/">Firefox</a></li>
   <li><a href="https://support.google.com/chrome/answer/2790761">Chrome</a></li>
  </ul>
 </li>
</ul>
