---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Cabaçalho genérico
  - Cabeçalhos HTTP
translation_of: Web/HTTP/Headers/Cache-Control
---
<div>{{HTTPSidebar}}</div>

<p>O campo de cabeçalho genérico <strong><code>Cache-Control</code></strong> é usado para especificar diretivas para mecanismos de <em>cache</em> tanto em requisições quanto em respostas. Diretivas de <em>cache</em> são unidirecionais, o que significa que uma dada diretiva em uma requisição não implica em que a mesma seja dada na resposta.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("General header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Simple response header", "CORS-safelisted response-header")}}</th>
   <td>sim</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<p>As diretivas são insensíveis à caixa (<em>case-insensitive)</em> e tem um argumento opcional, que pode usar tanto a sintaxe de token quanto a de cadeias entre aspas. Multiplas diretivas são separadas por virgula.</p>

<h3 id="Diretivas_de_Cache_de_requisições">Diretivas de Cache de requisições</h3>

<p>Diretivas <code>Cache-Control</code> padrão que podem ser usadas pelo cliente em uma requisição HTTP.</p>

<pre class="syntaxbox notranslate">Cache-Control: max-age=&lt;segundos&gt;
Cache-Control: max-stale[=&lt;segundos&gt;]
Cache-Control: min-fresh=&lt;segundos&gt;
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
</pre>

<h3 id="Diretivas_de_Cache_de_respostas">Diretivas de Cache de respostas</h3>

<p>Diretivas <code>Cache-Control</code> padrão que podem ser usadas pelo servidor em uma resposta HTTP.</p>

<pre class="syntaxbox notranslate">Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=&lt;segundos&gt;
Cache-Control: s-maxage=&lt;segundos&gt;
</pre>

<h3 id="Diretivas_Cache-Control_Extendidas">Diretivas <code>Cache-Control</code> Extendidas</h3>

<p>Diretivas <code>Cache-Control</code> extendidas não são parte do cerne do documento HTTP caching standards. Verifique a <a href="#Browser_compatibility">tabela de compatibilidade</a> para certificar-se do seu suporte.</p>

<pre class="syntaxbox notranslate">Cache-Control: immutable
Cache-Control: stale-while-revalidate=&lt;seconds&gt;
Cache-Control: stale-if-error=&lt;seconds&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<h3 id="Cacheabilidade">Cacheabilidade</h3>

<dl>
 <dt><code>public</code></dt>
 <dd>Indica que a resposta pode ser memorizada por qualquer cache.</dd>
 <dt><code>private</code></dt>
 <dd>Indica que a resposta é para um único usuário e não deve ser armazenada por um cache compartilhado. Um cache privativo pode armazenar a resposta.</dd>
 <dt><code>no-cache</code></dt>
 <dd>Força o cache a submeter a requisição ao servidor origem para validação antes de liberar a cópia em memória.</dd>
 <dt><code>only-if-cached</code></dt>
 <dd>Indica que novos dados não devem ser obtidos. Se este é o caso, o servidor deseja que o cliente obtenha a resposta somente uma vez e memorize (no cache). A partir desse momento o cliente deveria liberar somente a cópia em cache e evitar contactar o servidor origem para ver se há cópias novas.</dd>
</dl>

<h3 id="Expiração">Expiração</h3>

<dl>
 <dt><code>max-age=&lt;segundos&gt;</code></dt>
 <dd>Especifica o tempo máximo em que um recurso será considerado fresco. Ao contrário de <code>Expires</code>, esta diretiva é relativa à hora da requisição.</dd>
 <dt><code>s-maxage=&lt;segundos&gt;</code></dt>
 <dd>Tem precedência sobre <code>max-age</code> ou o cabeçalho <code>Expires</code>, mas só se aplica a caches compartilhados (p.ex., proxies) e é ignorada por caches privados.</dd>
 <dt><code>max-stale[=&lt;segundos&gt;]</code></dt>
 <dd>Indica que o cliente pode aceitar uma resposta que excedeu seu período de expiração. Opcionalmente, você pode informar um valor em segundos, indicando o tempo em que a resposta não será expirada.</dd>
 <dt><code>min-fresh=&lt;segundos&gt;</code></dt>
 <dd>Indica que o cliente quer uma resposta que será fresca por pelo menos o número de segundos especificado.</dd>
 <dt><code>stale-while-revalidate=&lt;segundos&gt;</code> {{experimental_inline}}</dt>
 <dd>Indica que o cliente aceitará uma resposta de caducidade enquanto verifica uma fresca assincronamente em <em>background</em>. O valor em segundos indica por quanto tempo o cliente espera a resposta de caducidade.</dd>
 <dt><code>stale-if-error=&lt;segundos&gt;</code> {{experimental_inline}}</dt>
 <dd>Indica que o cliente espera aceitar uma resposta de caducidade se falhou a verificação de uma fresca. O valor em segundos indica quanto tempo o cliente aceitará a resposta de caducidade após a expiração inicial.</dd>
</dl>

<h3 id="Revalidação_e_recarga">Revalidação e recarga</h3>

<dl>
 <dt><code>must-revalidate</code></dt>
 <dd>O cache deve verificar o estado dos recursos caducos antes de usá-los e não usar recursos expirados.</dd>
 <dt><code>proxy-revalidate</code></dt>
 <dd>Mesmo que <code>must-revalidate</code>, mas só se aplica a caches compartilhados (p.ex., proxies) e é ignorado por um cache privado.</dd>
 <dt><code>immutable</code></dt>
 <dd>Indica que o corpo da resposta não mudará ao longo do tempo. O recurso, se ainda hábil, está inalterado no servidor e portanto o cliente não deverá enviar uma revalidação condicional para ele (p.ex. <code>If-None-Match</code> ou <code>If-Modified-Since</code>) a fim de verificar atualiações, mesmo quando o usuário recarrega explicitamente a página. Clientes que não reconhecem esta extensão devem ignorá-la, segundo a especificação HTTP. No Firefox, <code>immutable</code> é honrado somente em transações <code>https://</code>. Para mais informações, veja também este <a href="http://bitsup.blogspot.de/2016/05/cache-control-immutable.html">blog post</a>.</dd>
</dl>

<h3 id="Outros">Outros</h3>

<dl>
 <dt><code>no-store</code></dt>
 <dd>O cache não deverá armazenar qualquer coisa sobre a requisição do cliente ou a resposta do servidor.</dd>
 <dt><code>no-transform</code></dt>
 <dd>Nenhuma transformação ou conversão deverá ser feita no recurso. Os cabeçalhos Content-Encoding, Content-Range, Content-Type não devem ser modificados por um proxy. Um proxy não transparente deve, por exemplo, converter formatos de imagens a fim de economizar espaço de cache ou reduzir o tráfego no link lento. A diretiva <code>no-transform</code> não permite isso.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Prevenindo_o_cache">Prevenindo o cache</h3>

<p>Para desligar o armazenamento em cache, você pode enviar o cabeçalho de resposta seguinte. Alem disso, veja também os cabeçalhos <code>Expires</code> e <code>Pragma</code>.</p>

<pre class="brush: bash notranslate">Cache-Control: no-cache, no-store, must-revalidate
</pre>

<h3 id="Cache_de_conteúdo_estático">Cache de conteúdo estático</h3>

<p>Para os arquivos da aplicação que não mudarão, você pode usar um cache mais agressivo enviando o cabeçalho de resposta abaixo. Isto inclui arquivos estáticos servidos pela aplicação tais como imagens, arquivos CSS e JavaScript, por exemplo. Veja também o cabeçalho <code>Expires</code>.</p>

<pre class="brush: bash notranslate">Cache-Control: public, max-age=31536000</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7234")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
  <tr>
   <td>{{RFC("5861")}}</td>
   <td>HTTP Cache-Control Extensions for Stale Content</td>
  </tr>
  <tr>
   <td>{{RFC("8246")}}</td>
   <td>HTTP Immutable Responses</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Cache-Control")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Caching_FAQ">HTTP Caching FAQ</a></li>
 <li>{{HTTPHeader("Age")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
 <li>{{HTTPHeader("Pragma")}}</li>
</ul>
