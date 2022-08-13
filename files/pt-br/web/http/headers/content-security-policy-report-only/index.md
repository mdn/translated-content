---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
tags:
  - CSP
  - HTTP
  - HTTPS
  - Referencia
  - Segurança
  - cabeçalho
translation_of: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta HTTP <strong><code>Content-Security-Policy-Report-Only</code></strong> permite aos desenvolvedores <em>web</em> experimentar políticas monitorando (mas não forçando) seus efeitos. Esses relatórios de violação consistem de documentos {{Glossary("JSON")}} enviados por uma requisição HTTP <code>POST</code> para a URI especificada.</p>

<p>Para mais informações, veja também este artigo em <a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy (CSP)</a>.</p>

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
  <tr>
   <th colspan="2" scope="row">Este cabeçalho não é suportado dentro de um elemento {{HTMLElement("meta")}}.</th>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Content-Security-Policy-Report-Only: &lt;policy-directive&gt;; &lt;policy-directive&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<p>As diretivas do cabeçalho {{HTTPHeader("Content-Security-Policy")}} também podem ser aplicadas para <code>Content-Security-Policy-Report-Only</code>.</p>

<p>A diretiva CSP {{CSP("report-uri")}} deve ser utilizada com este cabeçalho, caso contrário este cabeçalho será uma custosa operação sem ação para a máquina.</p>

<h2 id="Exemplos">Exemplos</h2>

<p>Este cabeçalho reporta violações que podem ter ocorrido. Você pode usar isso para trabalhar iterativamente na sua política de segurança de conteúdo. Você observa como seu site se comporta, observando para relatórios de violação ou <a href="https://secure.wphackedhelp.com/blog/wordpress-malware-redirect-hack-cleanup/">redirecionamento de <em>malware</em></a>, então escolha a política forçada desejada pelo cabeçalho {{HTTPHeader("Content-Security-Policy")}}.</p>

<pre class="notranslate">Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/</pre>

<p>Se você ainda quer continuar recebendo relatórios, mas também quer reforçar a política, use o cabeçalho {{HTTPHeader("Content-Security-Policy")}} com a diretiva {{CSP("report-uri")}}.</p>

<pre class="notranslate">Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/</pre>

<h2 id="Sintaxe_de_relatório_de_violação">Sintaxe de relatório de violação</h2>

<p>O objeto de relatório JSON contém os seguintes dados:</p>

<dl>
 <dt><code>blocked-uri</code></dt>
 <dd>A URI do recurso que estava bloqueada de carregar pela Política de Segurança de Conteúdo. Se a URI bloqueada é de uma origem diferente da URI do documento, então a URI bloqueada é truncada para conter somente o esquema, <em>host</em>, e a porta.</dd>
 <dt><code><span>disposition</span></code></dt>
 <dd>Ou <code>"enforce"</code> ou <code>"report"</code> dependendo se o cabeçalho {{HTTPHeader("Content-Security-Policy")}} ou o <code>Content-Security-Policy-Report-Only</code> é utilizado.</dd>
 <dt><code>document-uri</code></dt>
 <dd>A URI do documento na qual a violação ocorreu.</dd>
 <dt><code><span>effective-directive</span></code></dt>
 <dd>A diretiva na qual a execução causou a violação.</dd>
 <dt><code>original-policy</code></dt>
 <dd>A política original como especificada pelo cabeçalho HTTP <code>Content-Security-Policy-Report-Only</code>.</dd>
 <dt><code>referrer</code></dt>
 <dd>A referência do documento onde a violação ocorreu.</dd>
 <dt><code>script-sample</code></dt>
 <dd>Os primeiros 40 caracteres do <em>script</em> em linha, manejador de evento, ou estilo que causou a violação.</dd>
 <dt><code>status-code</code></dt>
 <dd>O código de status HTTP do recurso no qual o objeto global foi instanciado.</dd>
 <dt><code>violated-directive</code></dt>
 <dd>O nome da seção da política que foi violada.</dd>
</dl>

<h2 id="Exemplo_de_relatório_de_violação">Exemplo de relatório de violação</h2>

<div>Vamos considerar a página localizada em <code>http://example.com/signup.html</code>. Ele usa a seguinte política, desabilitando tudo menos arquivos de estilo de <code>cdn.example.com</code>.</div>

<div>
<pre class="notranslate">Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports</pre>
</div>

<div>O HTML de <code>signup.html</code> se parece com isto:</div>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Sign Up&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    ... Conteúdo ...
  &lt;/body&gt;
&lt;/html&gt;</pre>

<div>Você consegue observar a violação? Arquivos de estilos são permitidos serem carregados somente de <code>cdn.example.com</code>, entretanto o site tenta carregar um de sua origem (<code>http://example.com</code>). O navegador capaz de executar CSP irá mandar o seguinte relatório de violação como requisição POST para <code>http://example.com/_/csp-reports</code>, quando o documento é visitado:</div>

<pre class="brush: js notranslate">{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}</pre>

<p>Como você pode ver, o relatório inclui o caminho completo para o recurso violado em <code>blocked-uri</code>. Isso não é sempre o caso. Por exemplo, quando o <code>signup.html</code> irá tentar carregar o CSS de <code>http://anothercdn.example.com/stylesheet.css</code>, o navegador não irá incluir o caminho completo, somente a origem será inclusa (<code>http://anothercdn.example.com</code>). Isso é feito para prevenir o vazamento de informações sensíveis sobre recursos entre origens.</p>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{specName("CSP 3.0")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>Sem alterações.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Content-Security-Policy-Report-Only")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>Diretiva CSP {{CSP("report-uri")}}</li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">Segurança de conteúdo em WebExtensions</a></li>
 <li><a href="/en-US/docs/Tools/GCLI/Display_security_and_privacy_policies">Mostra políticas de privacidade e segurança nas Ferramentas de Desenvolvedor do Firefox</a></li>
</ul>
