---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
tags:
  - API
  - DOM
translation_of: Web/API/ProcessingInstruction
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">Uma <strong>ProcessingInstruction (Instrução de Processamento)</strong> incorpora instruções específicas de aplicações em <a href="/pt-BR/docs/XML_introduction">XML</a> que pode ser ignorada por outras aplicações que não as reconhece. Mesmo se um processador XML ignora as instruções de processamento, irá dá-los um lugar no DOM. </span></p>

<p>Uma instrução de processamento é diferente de uma <a href="/pt-BR/docs/XML/XML_Declaration">declaração XML</a>, que fornece informação sobre o documento como por exemplo codificação de caracteres, e pode somente aparecer como o primeiro item em um documento.</p>

<p>Instruções de processamento definidas por usuário não podem começar com <code>'xml'</code>, pois estes são reservados (como <code><a href="/pt-BR/docs/XML/xml-stylesheet">&lt;?xml-stylesheet ?&gt;</a>)</code>.</p>

<p>Instruções de processamento herdam métodos e propriedades do <code><a href="/pt-BR/docs/Web/API/Node">Node</a></code>. </p>

<p>{{InheritanceDiagram(700,70)}}</p>

<h3 id="Attributes" name="Attributes">Atributos</h3>

<ul>
 <li>alvo (DOMString) - depois do <code>&lt;?</code> e antes do <em><a href="/pt-BR/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace</a></em> separando-o de <code>data</code>. </li>
 <li>dado (DOMString) - primeiro caractere <em>whitespace</em> brancodepois de <code>target</code> e antes de <code>?&gt;</code> </li>
</ul>

<h3 id="Specification" name="Specification">Especificações</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1004215813">DOM Level 1 Core: ProcessingInstruction interface</a></li>
</ul>

<h3 id="See_also" name="See_also">Veja também</h3>

<ul>
 <li><a href="/en/DOM/document.createProcessingInstruction">document.createProcessingInstruction</a></li>
 <li><a href="/pt-BR/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace no DOM</a></li>
</ul>
