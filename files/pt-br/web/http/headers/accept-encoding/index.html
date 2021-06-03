---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - Content Negotiation
  - HTTP
  - HTTP Header
  - Negociação de conteúdo
  - Reference
  - Referencia
  - Request header
translation_of: Web/HTTP/Headers/Accept-Encoding
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <strong><code>Accept-Encoding</code></strong> indica qual codificação de conteúdo, usualmente um algoritmo de compressão, o cliente está apto a entender. Usando <a href="/en-US/docs/Web/HTTP/Content_negotiation">negociação de conteúdo</a>, o servidor seleciona uma das propostas, a utiliza e informa o cliente da escolha feita com o cabeçalho de resposta {{HTTPHeader("Content-Encoding")}}.</p>

<p>Até mesmo se o cliente e o servidor suportarem os mesmos algoritmos de compressão, o servidor pode escolher não comprimir o corpo da resposta, se o valor de identidade também é aceitável. Dois casos comuns levam a isso:</p>

<ul>
 <li>Os dados a serem enviados já estão comprimidos e a segunda compressão não irá deixar os dados menores para serem transmitidos. Isso pode ser o caso com alguns formatos de imagens;</li>
 <li>O servidor está sobrecarregado e não pode suportar a sobrecarga computacional induzida pelas exigências da compressão. Tipicamente, a Microsoft recomenda a não comprimir um corpo de resposta se o servidor utiliza mais do que 80% do seu poder computacional.</li>
</ul>

<p>Enquanto o valor de <code>identity</code>, que significa sem codificação, não é explicitamente proibido, por um <code>identity;q=0</code> ou um <code>*;q=0</code> sem qualquer outra atribuição explícita para a identidade, o servidor nunca deve mandar como resposta um erro {{HTTPStatus("406")}} <code>Not Acceptable</code>.</p>

<div class="note"><strong>Notas:</strong>

<ul>
 <li>
  <p>Um registro da IANA mantém <a class="external" href="http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1">a lista completa das codificações de conteúdo</a>.</p>
 </li>
 <li>Duas outras codificações de conteúdo, <code>bzip</code> e <code>bzip2</code>, são algumas vezes utilizadas, entretanto não são o padrão. Elas implementam o algoritmo usado por estes dois programas UNIX. Note que o primeiro foi descontinuado por problemas de patente.</li>
</ul>
</div>

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

<pre class="syntaxbox">Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Múltiplos algoritmos, com pesos baseados na sintaxe de {{Glossary("Quality Values", "quality value")}}:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>gzip</code></dt>
 <dd>Formato de compressão usando o <a class="external external-icon" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77), com CRC de 32-bits.</dd>
 <dt><code>compress</code></dt>
 <dd>Formato de compressão usando o algoritmo <a class="external external-icon" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW).</dd>
 <dt><code>deflate</code></dt>
 <dd>Formato de compressão usando a estrutura <a class="external external-icon" href="http://en.wikipedia.org/wiki/Zlib">zlib</a>, com o algoritmo de compressão <a class="external external-icon" href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a>.</dd>
 <dt><code>br</code></dt>
 <dd>Formato de compressão usando o algoritmo de <a class="external external-icon" href="https://en.wikipedia.org/wiki/Brotli">Brotli</a>.</dd>
 <dt><code>identity</code></dt>
 <dd>Indica a identidade da função (i.e. sem compressão, ou sem modificação). Esse valor é sempre considerado como aceitável, mesmo se não estiver presente.</dd>
 <dt><code>*</code></dt>
 <dd>Aceita qualquer codificação de conteúdo ainda não listada no cabeçalho. Esse é o valor padrão se o cabeçalho não estiver presente. Isto não significa que qualquer algoritmo é suportado; meramente que nenhuma preferência é expressa.</dd>
 <dt><code>;q=</code> (valores de peso q)</dt>
 <dd>Qualquer valor é colocado em uma ordem de preferência expressada usando a <a href="/en-US/docs/Glossary/Quality_values">quality value</a> relativa chamada <em>peso</em>.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Accept-Encoding", "5.3.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Accept-Encoding")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Content_negotiation">Negociação de conteúdo </a>HTTP</li>
 <li>Cabeçalho com o resultado do conteúdo de negociação: {{HTTPHeader("Content-Encoding")}}</li>
 <li>Outros cabeçalhos similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}</li>
</ul>
