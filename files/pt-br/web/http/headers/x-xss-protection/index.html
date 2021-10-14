---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
tags:
  - HTTP
  - Referencia
  - Segurança
  - XSS
  - cabeçalho
translation_of: Web/HTTP/Headers/X-XSS-Protection
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta HTTP <strong><code>X-XSS-Protection</code></strong> é uma funcionalidade do Internet Explorer, Chrome e Safari que impede páginas de carregarem quando eles detectam ataques de scripting entre sites ({{Glossary("XSS")}}) refletidos. Apesar destas proteções serem majoritariamente desnecessárias em navegadores modernos em sites utilizando uma forte {{HTTPHeader("Content-Security-Policy")}} que desabilita o uso de JavaScript <em>inline</em> (<code>'unsafe-inline'</code>), eles ainda podem oferecer proteções para usuários de navegadores mais antigos que ainda não suportam {{Glossary("CSP")}}.</p>

<div class="note">
<ul>
 <li>Chrome <a href="https://www.chromestatus.com/feature/5021976655560704">removeu o XSS Auditor deles</a></li>
 <li>Firefox não tem, e <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=528661">não irá implementar <code>X-XSS-Protection</code></a></li>
 <li>Edge <a href="https://blogs.windows.com/windowsexperience/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/">aposentou o filtro XSS deles</a></li>
</ul>

<p>Isso significa que se você não precisa dar suporte para navegadores legado, é recomendado que você use <code><a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a></code> sem permitir scripts <code>unsafe-inline</code> ao invés disso.</p>
</div>

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

<pre class="syntaxbox notranslate">X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=&lt;reporting-uri&gt;
</pre>

<dl>
 <dt>0</dt>
 <dd>Desabilita filtragem XSS.</dd>
 <dt>1</dt>
 <dd>Habilita filtragem XSS (geralmente padrão em navegadores). Se um ataque de scripting entre sites é detectado, o navegador irá higienizar a página (remover as partes inseguras).</dd>
 <dt>1; mode=block</dt>
 <dd>Habilita filtragem XSS. Ao invés de higienizar a página, o navegador irá impedir a renderização da página em que o ataque foi detectado.</dd>
 <dt>1; report=&lt;reporting-URI&gt; (Chromium somente)</dt>
 <dd>Habilita filtragem XSS. Se o ataque de scripting entre sites é detectado, o navegador irá higienizar a página e reportar a violação. Isso utiliza a funcionalidade da diretiva CSP {{CSP("report-uri")}} para enviar o relatório.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<p>Bloqueia páginas de carregarem quando elas detectam ataques XSS refletidos:</p>

<pre class="brush: bash notranslate">X-XSS-Protection: 1; mode=block</pre>

<p>PHP</p>

<pre class="brush: php notranslate">header("X-XSS-Protection: 1; mode=block");</pre>

<p>Apache (.htaccess)</p>

<pre class="brush: bash notranslate">&lt;IfModule mod_headers.c&gt;
  Header set X-XSS-Protection "1; mode=block"
&lt;/IfModule&gt;</pre>

<p>Nginx</p>

<pre class="brush: bash notranslate">add_header "X-XSS-Protection" "1; mode=block";</pre>

<h2 id="Especificações">Especificações</h2>

<p>Não faz parte de nenhuma especificação ou rascunho.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.headers.X-XSS-Protection")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li><a href="https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/">Controlando o XSS Filter (Controlling the XSS Filter) – Microsoft</a></li>
 <li><a href="https://www.virtuesecurity.com/blog/understanding-xss-auditor/">Entendendo o XSS Auditor (Understanding XSS Auditor) – Virtue Security</a></li>
 <li>
  <p><a href="https://blog.innerht.ml/the-misunderstood-x-xss-protection/">O mal-entendido X-XSS-Protection (The misunderstood X-XSS-Protection) – blog.innerht.ml</a></p>
 </li>
</ul>
