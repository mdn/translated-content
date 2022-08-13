---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
translation_of: Web/API/Element/removeAttribute
---
<p>{{ APIRef("DOM") }}</p>

<p><code>removeAttribute</code> remove um atributo de um elemento específico.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="eval"><em>element</em>.removeAttribute(<em>attrName</em>);
</pre>

<ul>
 <li><code>attrName</code> é o nome, em formato de texto (<em>string</em>), do atributo a ser removido do <code>element</code><em>.</em></li>
</ul>

<h2 id="Example" name="Example">Exemplo</h2>

<pre>// &lt;div id="div1" align="left" width="200px"&gt;
document.getElementById("div1").removeAttribute("align");
// agora: &lt;div id="div1" width="200px"&gt;
</pre>

<h2 id="Notes" name="Notes">Observação</h2>

<p>Você deve usar <code>removeAttribute</code> ao invés de atribuir <code>null</code> ao atributo usando <a href="/en/DOM/element.setAttribute" title="en/DOM/element.setAttribute">setAttribute</a>.</p>

<p>Tentar remover um atributo que não existe no elemento não fará que uma exceção seja lançada.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specification" name="Specification">Especificação</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9">DOM Level 2 Core: removeAttribute</a> (introduzido no <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute">DOM Level 1 Core</a>)</p>
