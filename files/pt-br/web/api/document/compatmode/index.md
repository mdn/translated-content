---
title: Document.compatMode
slug: Web/API/Document/compatMode
translation_of: Web/API/Document/compatMode
---
<p>{{ ApiRef("DOM") }}</p>

<p>Indica se o documento está renderizado no <a href="/pt-BR/Quirks_Mode_and_Standards_Mode" title="en/Mozilla's Quirks Mode">Quirks mode</a> ou no modo dos Padrões.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="eval"><em>modo</em> = document.compatMode
</pre>

<h2 id="Valores">Valores</h2>

<ul>
 <li><code>"BackCompat"</code> se o documento está em <strong>quirks mode</strong>;</li>
 <li><code>"CSS1Compat"</code> se o documento está no modo "não-<em>quirks</em>" (também conhecido como "<strong>full standards mode</strong>") ou "<em>limited-quirks</em>" (também conhecido como "<strong>almost standards mode</strong>").</li>
</ul>

<dl>
 <dt><code>modo</code></dt>
 <dd>É um valor enumerado que pode ser:</dd>
</dl>

<div class="note">
<p>Nota: todos estes modos agora são definidos em padrões, então os antigos nomes "standards" e "almost standards" são sem sentido, e portanto não são mais usados nos padrões.</p>
</div>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="eval">if (document.compatMode == "BackCompat") {
  // in Quirks mode
}
</pre>

<h2 id="Specification" name="Specification">Especificações</h2>

<ul>
 <li><a class="external" href="http://dom.spec.whatwg.org/#dom-document-compatmode">DOM: Document.compatMode</a></li>
</ul>
