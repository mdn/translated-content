---
title: Document.writeln()
slug: Web/API/Document/writeln
tags:
  - API
  - DOM
  - Gecko
  - Referencia
  - metodo
translation_of: Web/API/Document/writeln
---
<div>{{ ApiRef("DOM") }}</div>

<p>Grava uma seqüência de texto, seguido por um caractere de nova linha a um documento.</p>

<h2 id="Syntax" name="Syntax">Sintaxes</h2>

<pre class="eval">document.writeln(<em>line</em>);
</pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<ul>
 <li><code>line</code>

  <div dir="ltr" style="zoom: 1;">é uma string contendo uma linha de texto.</div>
 </li>
</ul>

<h2 id="Example" name="Example">Exemplo</h2>

<pre>document.writeln("&lt;p&gt;enter password:&lt;/p&gt;");
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p><strong>document.writeln</strong> é o mesmo que <a href="/en/DOM/document.write" title="en/DOM/document.write">document.write</a> mas acrescenta uma nova linha.</p>

<div class="note"><strong>Note:</strong> <strong>document.writeln</strong> (like <strong>document.write</strong>) does not work in XHTML documents (you'll get a "Operation is not supported" (<code>NS_ERROR_DOM_NOT_SUPPORTED_ERR</code>) error on the error console). This is the case if opening a local file with a .xhtml file extension or for any document served with an application/xhtml+xml MIME type. More information is available in the <a class="external" href="http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite">W3C XHTML FAQ</a>.</div>

<h2 id="Specification" name="Specification">Especificação</h2>

<p><a class="external" href="http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-35318390">writeln </a></p>
