---
title: 205 Reset Content
slug: Web/HTTP/Status/205
translation_of: Web/HTTP/Status/205
---
<div>{{HTTPSidebar}}</div>

<p>O código de estado HTTP <strong><code>205 Reset Content</code></strong> informa ao cliente para reconfigurar a visualização do documento, para, por exemplo, limpar o conteúdo de um formulário, redefinir um estado da tela ou atualizar a interface do usuário.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">205 Reset Content</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "205 Reset Content" , "6.3.6")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibility_Notes">Compatibility Notes</h2>

<ul>
 <li>O comportamento do Browser é diferente se a resposta de forma errada incluir um Body nas conexões persistentes, veja <a href="/en-US/docs/Web/HTTP/Status/204">204 No Content</a> para mais detalhes.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus(204)}} No Content</li>
</ul>
