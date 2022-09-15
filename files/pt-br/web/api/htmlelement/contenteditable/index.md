---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
translation_of: Web/API/HTMLElement/contentEditable
---
<div>
<div>{{APIRef("HTML DOM")}}</div>
</div>

<p>A propriedade <strong><code>HTMLElement.contentEditable </code></strong>é usada para indicar se o elemento é editável ou não. Esse atributo enumerado pode ter os seguintes valores:</p>

<ul>
 <li><code>"true"</code> Indica que o elemento é editável;</li>
 <li><code>"false"</code> Indica que o elemento não pode ser editável;</li>
 <li><code>"inherit"</code> Indica que o elemento herda o status editável de seu pai.</li>
</ul>

<p>Você pode usar a propriedade {{domxref( "HTMLElement.isContentEditable")}} para testar o valor calculado {{domxref ("Boolean")}} desta propriedade.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"><em>editable</em> = element.contentEditable element.contentEditable= "true"
</pre>

<h2 id="Especificação">Especificação</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'interaction.html#contenteditable', 'contenteditable')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

{{Compat("api.HTMLElement.contentEditable")}}

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{domxref("HTMLElement.isContentEditable")}}</li>
 <li>The <a href="/en-US/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a> global attribute.</li>
 <li><a href="https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480">Why ContentEditable is Terrible, Or: How the Medium Editor Works</a></li>
</ul>
