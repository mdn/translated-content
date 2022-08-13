---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
translation_of: Web/HTTP/Status/405
---
<div>Este status de resposta indica que o verbo HTTP utilizado não é suportado, por exemplo: a requisição ocorre por meio de um get, porém o único método disponível é o post.</div>

<div>Curiosidade: Existem um método chamado OPTIONS que retorna todos os verbos suportados naquela requisição</div>

<div>obs: ele também pode não ser permitido</div>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">405 Method Not Allowed</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "405 Method Not Allowed" , "6.5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
</ul>
