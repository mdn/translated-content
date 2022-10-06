---
title: 411 Length Required
slug: Web/HTTP/Status/411
tags:
  - Códigos de status
  - Códigos de status HTTP
  - HTTP
  - Referencia
translation_of: Web/HTTP/Status/411
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta <code><strong>411 Length Required</strong></code> de erro de cliente do Protocolo de Transferência de HyperTexto (HTTP) indica que o servidor se nega a aceitar a requisição sem um cabeçalho {{HTTPHeader("Content-Length")}} definido.</p>

<div class="note">
<p><strong>Nota: </strong>pela especificação, quando envia dados em uma série de blocos, o cabeçalho <code>Content-Length</code> é omitido e no início de cada bloco você precisa adicionar o tamanho do bloco corrente no formato hexadecimal. Veja {{HTTPHeader("Transfer-Encoding")}} para mais detalhes.</p>
</div>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">411 Length Required</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "411 Length Required" , "6.5.10")}}</td>
   <td>Protocolo de transferência de Hipertexto (HTTP/1.1): Semântica e Conteúdo</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
