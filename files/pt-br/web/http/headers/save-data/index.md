---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Referencia
  - Save-Data
  - cabeçalho
translation_of: Web/HTTP/Headers/Save-Data
---
<p>{{HTTPSidebar}}</p>

<p>O cabeçalho <strong><code>Save-Data</code></strong> é um booleano no qual, em requisições, indica a preferência do cliente para reduzir uso de dados. Isso pode ser por algumas razões como custo de transferência alto, baixa velocidade de conexão, etc.</p>

<p>Um valor de <code>On</code> indica uma opção explícita do usuário em querer reduzir a quantidade de dados usados no cliente, e quando comunicade para origens permite elas entregarem conteúdo alternativo para reduzir a quantidade de dados baixados como recursos de imagem e vídeo menores, marcação e estilo diferente, desabilitar <em>polling</em> e atualizações automáticas, e assim por diante.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Desabilitar HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) pode ser desejável para reduzir o <em>download</em> de dados.</p>
</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Save-Data: &lt;sd-token&gt;</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>&lt;sd-token&gt;</code></dt>
 <dd>Um valor numérico indicando se o cliente quer optar ou não em entrar em modo de utilização de dados reduzido. <code>on</code> significa sim, enquanto <code>off</code> (o padrão) indica não.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<p>O cabeçalho {{HTTPHeader("Vary")}} assegura que o conteúdo é cacheado apropriadamante (por exemplos assegurando que o usuário não é servido com uma imagem de baixa qualidade do cache quando o cabeçalho <code>Save-Data</code> não está mais presente [<em>e.g.</em> depois de ter trocado de rede celular para Wi-Fi]).</p>

<h3 id="Com_Save-Data_on">Com <code>Save-Data: on</code></h3>

<p>Requisição:</p>

<pre class="notranslate">GET /image.jpg HTTP/1.0
Host: example.com
Save-Data: on</pre>

<p>Resposta:</p>

<pre class="notranslate">HTTP/1.0 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
</pre>

<h3 id="Sem_Save-Data">Sem <code>Save-Data</code></h3>

<p>Requisição:</p>

<pre class="notranslate">GET /image.jpg HTTP/1.0
Host: example.com
</pre>

<p>Resposta:</p>

<pre class="notranslate">HTTP/1.0 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-grigorik-http-client-hints-03#section-7">draft-grigorik-http-client-hints-03, section 7: Save-Data</a></td>
   <td>HTTP Client Hints</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Save-Data")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://css-tricks.com/help-users-save-data/">Ajude seus usuários a "salvar-dados" (Help Your Users `Save-Data`) - CSS Tricks</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/">Entregando aplicações leves e rápidas com Save-Data (Delivering Fast and Light Applications with Save-Data) - Google Developers</a></li>
 <li>Cabeçalho para indicar que o conteúdo servidor varia por <code>Save-Data</code>: {{HTTPHeader("Vary")}}</li>
 <li>Funcionalidade CSS @media <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data">prefers-reduced-data</a></code> {{experimental_inline}}</li>
</ul>
