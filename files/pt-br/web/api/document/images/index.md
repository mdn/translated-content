---
title: Document.images
slug: Web/API/Document/images
translation_of: Web/API/Document/images
---
<div>
<div>{{ ApiRef("DOM") }}</div>
</div>

<h2 id="Summary" name="Summary">Summary</h2>

<p><code>document.images</code> retorna uma coleção de <a href="/en-US/docs/DOM/Image" title="DOM/Image">imagens</a> do documento HTML.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox"><em>var htmlCollection</em> = document.images;</pre>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush:js">var ilist = document.images;

for(var i = 0; i &lt; ilist.length; i++) {
    if(ilist[i].src == "banner.gif") {
        // found the banner
    }
}</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p><code>document.images.length</code> – propriedade, retorna o número de imagens na página.</p>

<p><code>document.images</code> é parte do DOM HTML, e só trabalho com documentos HTML.</p>

<h2 id="Specification" name="Specification">Especificação</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117">DOM Level 2 HTML: HTMLDocument.images</a></li>
</ul>
