---
title: Node.lastChild
slug: Web/API/Node/lastChild
tags:
  - API
  - DOM
  - Elements
  - lastChild
translation_of: Web/API/Node/lastChild
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Node.lastChild</strong></code> é uma propriedade do tipo somente leitura (read-only) que retorna o último elemento filho (node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node, um text node, ou um comment node. Retornará null se o elemento de referência não tiver elementos filhos child. É extremamente recomendável que você conheça a estrutura DOM para um melhor aprendizado e entendimento.</p>

<h2 id="Syntax_and_Values" name="Syntax_and_Values">Syntax</h2>

<pre class="syntaxbox">var last_child = element.lastChild
</pre>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush: js">// Obtém um elemento &lt;ul&gt;
var ul = document.getElementById('lista');

// Obtém o último &lt;li&gt; pertencente a estrutura &lt;ul&gt; obtida
var li_last = ul.lastChild;
</pre>

<h2 id="Specification" name="Specification">Specificações</h2>

<ul>
 <li>{{Spec("http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-61AD09FB", "DOM nível 2: lastChild", "REC")}}</li>
 <li>{{Spec("http://dom.spec.whatwg.org/#dom-node-lastchild", "DOM padrão: lastChild")}}</li>
</ul>
