---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
tags:
  - Armazenamento
  - Cabeçalho HTTP
  - Cache
  - Cookies
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Clear-Site-Data
---
<p>{{HTTPSidebar}}</p>

<p>O cabeçalho HTTP <strong><code>Clear-Site-Data</code></strong> limpa os dados de navegação (<em>cookies</em>, armazenamento, <em>cache</em>) associados com o site requisitado. Ele permite desenvolvedores web terem maior controle sobre os dados armazenados localmente pelo navegador para suas origens.</p>

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

<p>O cabeçalho <code>Clear-Site-Data</code> aceita uma ou mais diretivas. Se todos os dados devem ser limpos, a diretiva coringa (<code>"*"</code>) pode ser usada.</p>

<pre>// Diretiva única
Clear-Site-Data: "cache"

// Múltiplas diretivas (separado por vírgula)
Clear-Site-Data: "cache", "cookies"

// Coringa
Clear-Site-Data: "*"
</pre>

<h2 id="Diretivas">Diretivas</h2>

<p class="note">Todas as diretivas devem estar de acordo com a <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">gramática de cadeia de caracteres com as aspas</a>. A diretiva que não inclui aspas duplas é inválida.</p>

<dl>
 <dt id="cache"><code>"cache"</code></dt>
 <dd>Indica que o servidor quer remover localmente os dados cacheados (i.e. o cache do navegador, veja <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching">HTTP caching</a>) para a URL de origem da resposta. Dependendo do navegador, essa diretiva pode acabar apagando outras coisas como páginas pré-renderizadas, <em>scripts</em> armazenados, shaders WebGL ou sugestões na barra de endereço.</dd>
 <dt id="cookies"><code>"cookies"</code></dt>
 <dd>Indica que o servidor quer remover todos os <em>cookies</em> da URL de origem da resposta. Credenciais de autenticação HTTP também são limpas. Isso afeta o registro inteiro do domínio, incluindo subdomínios. Então, https://example.com também como https://stage.example.com, terão seus <em>cookies</em> limpos.</dd>
 <dt id="storage"><code>"storage"</code></dt>
 <dd>Indica que o servidor quer remover todo o armezenamento DOM para a URL de origem da resposta. Isso incluí mecanismos de armazenamento como:
 <ul>
  <li>localStorage (executa <code>localStorage.clear</code>),</li>
  <li>sessionStorage (executa <code>sessionStorage.clear</code>),</li>
  <li>IndexedDB (para cada banco de dados, executa {{domxref("IDBFactory.deleteDatabase")}}),</li>
  <li>Registros de serviços de trabalhadores (para cada registro de serviço de trabalhador, executa {{domxref("ServiceWorkerRegistration.unregister")}}),</li>
  <li><a href="/en-US/docs/Web/HTML/Using_the_application_cache">AppCache,</a></li>
  <li>Banco de dados WebSQL,</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API">FileSystem API data</a>,</li>
  <li>Dados de plugin (Flash via <code><a href="https://wiki.mozilla.org/NPAPI:ClearSiteData">NPP_ClearSiteData</a></code>).</li>
 </ul>
 </dd>
 <dt id="executionContexts"><code>"executionContexts"</code></dt>
 <dd>Indica que o servidor quer recarregar todos os contextos do navegador da origem da resposta ({{domxref("Location.reload")}}).</dd>
 <dt><code>"*"</code> (coringa)</dt>
 <dd>Indica que o servidor quer limpar todos os tipos de dados da origem da resposta. Se mais tipos de dados forem adicionados nesse cabeçalho, eles também serão cobertos.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Deslogar_de_um_site">Deslogar de um site</h3>

<p>Se um usuário se desloga de um site ou serviço, você talvez queira remover dados armazenados localmente. Você pode atingir isso adicionando o cabeçalho <code>Clear-Site-Data</code> quando enviando a página confirmando o desligamento da autenticação da pessoa do site foi feito com sucesso (https://example.com/logout, por exemplo):</p>

<pre>Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"</pre>

<h3 id="Limpando_cookies">Limpando cookies</h3>

<p>Se o cabeçalho é entregue com a resposta em https://example.com/clear-cookies, todos os <em>cookies</em> no mesmo domínio e qualquer subdomínio (como https://stage.example.com, etc), serão limpos.</p>

<pre>Clear-Site-Data: "cookies"</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Título</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://w3c.github.io/webappsec-clear-site-data">Clear Site Data</a></td>
   <td>Working Draft</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.headers.Clear-Site-Data")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
</ul>
