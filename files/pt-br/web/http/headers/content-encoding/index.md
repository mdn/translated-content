---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
tags:
  - Cabeçalhos
  - HTTP
  - Reference
  - Referencia
translation_of: Web/HTTP/Headers/Content-Encoding
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Content-Encoding</code></strong> entity header is used to compress the media-type. When present, its value indicates which encodings were applied to the entity-body. It lets the client know how to decode in order to obtain the media-type referenced by the <code>Content-Type</code> header.</p>

<p>The recommendation is to compress data as much as possible and therefore to use this field, but some types of resources, such as jpeg images, are already compressed. Sometimes, using additional compression doesn't reduce payload size and can even make the payload longer.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br

// Múltiplo, em ordem nos quais serão aplicados
Content-Encoding: gzip, identity
Content-Encoding: deflate, gzip
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>gzip</code></dt>
 <dd>A format using the <a class="external" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77), with a 32-bit CRC. This is the original format of the UNIX <em>gzip</em> program. The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize <code>x-gzip</code> as an alias, for compatibility purposes.</dd>
 <dt><code>compress</code></dt>
 <dd>A format using the <a class="external" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW) algorithm. The value name was taken from the UNIX <em>compress</em> program, which implemented this algorithm. Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is not used by many browsers today, partly because of a patent issue (it expired in 2003).</dd>
 <dt><code>deflate</code></dt>
 <dd>Using the <a class="external" href="http://en.wikipedia.org/wiki/Zlib">zlib</a> structure (defined in <a class="external" href="http://tools.ietf.org/html/rfc1950">RFC 1950</a>) with the <a class="external" href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a> compression algorithm (defined in <a class="external" href="http://tools.ietf.org/html/rfc1951">RFC 1951</a>).</dd>
 <dt><code>identity</code></dt>
 <dd>Indicates the identity function (i.e., no compression or modification). This token, except if explicitly specified, is always deemed acceptable.</dd>
 <dt><code>br</code></dt>
 <dd>A format using the <a href="https://en.wikipedia.org/wiki/Brotli">Brotli</a> algorithm.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Comprimindo_com_gzip">Comprimindo com gzip</h3>

<p>On the client side, you can advertise a list of compression schemes that will be sent along in an HTTP request. The {{HTTPHeader("Accept-Encoding")}} header is used for negotiating content encoding.</p>

<pre>Accept-Encoding: gzip, deflate</pre>

<p>The server responds with the scheme used, indicated by the <code>Content-Encoding</code> response header.</p>

<pre>Content-Encoding: gzip</pre>

<p>Note that the server is not obligated to use any compression method. Compression highly depends on server settings and used server modules.</p>

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
   <td>{{RFC("7932", "Brotli Compressed Data Format")}}</td>
   <td>Brotli Compressed Data Format</td>
  </tr>
  <tr>
   <td>{{RFC("7231", "Content-Encoding", "3.1.2.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
  <tr>
   <td>{{RFC("2616", "Content-Encoding", "14.11")}}</td>
   <td>Content-Encoding</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Content-Encoding")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Accept-Encoding")}}</li>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
