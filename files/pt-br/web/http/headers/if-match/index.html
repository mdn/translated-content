---
title: If-Match
slug: Web/HTTP/Headers/If-Match
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Referencia
  - Requisições Condicionais
translation_of: Web/HTTP/Headers/If-Match
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <strong><code>If-Match</code></strong> faz a requisição condicional. Para métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, o servidor irá mandar de volta o recurso requisitado somente se ele corresponde com uma das <code>ETags</code> listadas. Para {{HTTPMethod("PUT")}} e outros métodos não-seguros, ele somente irá fazer o upload do recurso neste caso.</p>

<p>A comparação com a {{HTTPHeader("ETag")}} guardada usa o <em>algoritmo de comparação forte</em>, significa dois arquivos são considerados idênticos <em>byte </em>a <em>byte </em>somente. Se a <code>ETag</code> listada com o prefixo <code>W/</code> indicando a <em>tag</em> como uma entidade fraca, ele nunca irá combinar usando este algoritmo de comparação.</p>

<p>Existem dois casos de uso comuns:</p>

<ul>
 <li>Para os métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, utilizado em combinação com o cabeçalho {{HTTPHeader("Range")}}, ele pode garantir que novos intervalos requisitados venham do mesmo recurso ao invés do anterior. Se ele não corresponde, então uma resposta {{HTTPStatus("416")}} (Range Not Satisfiable) é retornarda.</li>
 <li>Para outros métodos, e em particular para o método {{HTTPMethod("PUT")}}, <code>If-Match</code> pode ser usado para previnir o <a href="https://www.w3.org/1999/04/Editing/#3.1">problema de perde de atualização</a>. Ele pode checar se a modificação de um recurso que o usuário que fazer o upload não sobrescreverá outra modificação que foi feita desde que o recurso original foi buscado. Se a requisição não puder ser completada, a resposta {{HTTPStatus("412")}} (Precondition Failed) é retornada.</li>
</ul>

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

<pre class="syntaxbox notranslate">If-Match: &lt;etag_value&gt;
If-Match: &lt;etag_value&gt;, &lt;etag_value&gt;, …
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;etag_value&gt;</dt>
 <dd><em>Tags</em> de entidade que representam unicamente os recursos requisitados. Eles são uma cadeia de caracteres ASCII colocados entre aspas duplas (como <code>"675af34563dc-tr34"</code>). Elas podem ser prefixadas por <code>W/</code> para indicar que elas são "fracas", i.e. que elas representam o recurso semânticamente, mas não byte-por-byte. Entretanto, em um cabeçalho <strong><code>If-Match</code></strong>, <em>tags</em> de entidade fraca nunca irão corresponder.</dd>
 <dt><code>*</code></dt>
 <dd>O asterísco é um valor especial representando qualquer recurso.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7232", "If-Match", "3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.If-Match")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("ETag")}}</li>
 <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
 <li>{{HTTPHeader("If-Modified-Since")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
 <li>{{HTTPStatus("416")}}<code> Range Not Satisfiable</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
</ul>
