---
title: <bdi>
slug: Web/HTML/Element/bdi
translation_of: Web/HTML/Element/bdi
---
<h2 id="Resumo">Resumo</h2>

<div>O HTML &lt;bdi&gt;elemento (ou elemento de isolamento de Bi-direcional) isola um trechode texto que pode ser formatado em uma direção diferente de outro texto fora dela.</div>


<p>Este elemento é útil ao incorporar o texto com uma direção desconhecida, de um banco de dados por exemplo, no interior do texto com uma direção fixa.</p>

<p>Apesar do mesmo efeito visual pode ser alcançado usando a regra de CSS{{cssxref("unicode-bidi")}}: isolar um {{HTMLElement("span")}} ou outro elemento de formatação de  texto, o significado semântico só é transportado pelo elemento de&lt;bdi&gt;. Especialmente, os navegadores podem ignorar estilos CSS. Nesse caso, o texto seria ainda corretamente exibido usando o elemento HTML, mas se tornará lixo quando usando o estilo CSS para transmitir semântica.</p>

<ul>
 <li><dfn><a href="/en-US/docs/HTML/Content_categories" title="HTML/Content_categories">Content categories</a></dfn> <a href="/en-US/docs/HTML/Content_categories#Flow_content" title="HTML/Content categories#Flow content">Flow content</a>, <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</li>
 <li><dfn>Permitted content</dfn><a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content_categories#Flow_content">Phrasing content</a>.</li>
 <li><dfn>Tag omission</dfn> {{no_tag_omission}}</li>
 <li><dfn>Permitted parent elements</dfn> Any element that accepts <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content_categories#Flow_content">phrasing content</a>.</li>
 <li><dfn>DOM interface</dfn> {{domxref("HTMLElement")}}</li>
</ul>

<h2 id="Atributos">Atributos</h2>

<p>Como todos os outros elementos do HTML, este elemento tem os atributos globais,  com uma pequena diferença de semântica: o atributo dir não é herdado. Se não definido, o   valor padrão é o auto que deixa o navegador decidir a direção com base no conteúdo do elemento.</p>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush: html">&lt;p dir="ltr"&gt;Esta palavra arábica &lt;bdi&gt;ARABIC_PLACEHOLDER&lt;/bdi&gt; é automaticamente voltada da direita&lt;/p&gt;
</pre>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-bdi-element', '&lt;bdi&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'the-bdi-element.html#the-bdi-element', '&lt;bdi&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

{{Compat("html.elements.bdi")}}

<h2 dir="ltr" id="Veja_Também">Veja Também:</h2>

<ul>
 <li>Related HTML element: {{HTMLElement("bdo")}}</li>
 <li>Related HTML properties: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}</li>
</ul>

<p>{{HTMLRef}}</p>
