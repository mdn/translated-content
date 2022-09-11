---
title: Valor Especifícado
slug: Web/CSS/specified_value
tags:
  - CSS
  - Iniciante
  - Web
translation_of: Web/CSS/specified_value
original_slug: Web/CSS/valor_espeficifco
---
<p>{{CSSRef}}</p>

<p>O <strong>valor especificado</strong> de uma propriedade CSS está definido em uma de três maneiras.</p>

<ol>
 <li>If the document's stylesheet has specified a value for the property then it will be used. For example; if the {{cssxref("color")}} property is set to <code>green</code> then the text color of the corresponding element will be green.</li>
 <li>If the document's stylesheet has not specified a value then it will be inherited form the parent element (if possible). For example; if we have a paragraph ({{HTMLElement("p")}}) inside a {{HTMLElement("div")}} and the {{HTMLElement("div")}} has a CSS <code>font</code> property value of "Arial" and the {{HTMLElement("p")}} doesn't have a <code>font</code> property defined then it will inherit the Arial font.</li>
 <li>If none of the above are available, the initial value for the element as specified by the CSS specification is applied.</li>
</ol>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Status</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Definição inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Reference">CSS Reference</a></li>
 <li>{{CSS_key_concepts}}</li>
</ul>
