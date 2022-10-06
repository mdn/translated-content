---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
translation_of: Web/HTTP/Status/203
---
<div>{{HTTPSidebar}}</div>

<p>A resposta com status HTTP <strong><code>203 Non-Authoritative Information</code></strong> indica que a requisição foi realizada com sucesso porém o conteúdo foi modificado por um {{Glossary("Proxy server", "proxy")}} da resposta com status {{HTTPStatus("200")}} (<code>OK</code>) do servidor de origem.</p>

<p>A resposta <code>203</code> é similar a resposta com cabeçalho de {{HTTPHeader("Warning")}} <code><a href="/en-US/docs/Web/HTTP/Headers/Warning#Warning_codes">214</a></code>, significando <code>Transformação Aplicada</code>, o qual tem uma vantagem adicional que pode ser aplicado a respostas com qualquer código de status.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">203 Non-Authoritative Information</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus("200")}}</li>
 <li>{{Glossary("Proxy server")}}</li>
 <li>{{HTTPHeader("Warning")}}</li>
</ul>
