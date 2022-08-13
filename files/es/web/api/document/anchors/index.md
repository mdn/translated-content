---
title: document.anchors
slug: Web/API/Document/anchors
tags:
  - API
  - Desaprobado
  - Documento
  - HTML DOM
  - Propiedad
  - Referencia
translation_of: Web/API/Document/anchors
---
<div>{{APIRef("DOM")}}{{deprecated_header()}}</div>

<div>La propiedad de solo lectura <strong><code>anchors</code></strong> de la interfaz {{domxref("Document")}} devuelve una lista de todas las anclas (anchors) del documento.</div>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>nodeList</em> = document.anchors;
</pre>

<h3 id="Valor">Valor</h3>

<p>Una {{domxref("HTMLCollection")}}.</p>

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<pre class="eval">if ( document.anchors.length &gt;= 5 ) {
    dump("dump found too many anchors");
    window.location = "http<span class="nowiki">:</span>//www.google.com";
}
</pre>

<p>Lo siguiente es un ejemplo que puebla una Tabla de Contenido con cada ancla en la página:</p>

<pre class="brush:html line-numbers language-html"><code class="language-html"><span class="doctype token">&lt;!DOCTYPE html&gt;</span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>html</span> <span class="attr-name token">lang</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>en<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>head</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>meta</span> <span class="attr-name token">charset</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>UTF-8<span class="punctuation token">"</span></span> <span class="punctuation token">/&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>title</span><span class="punctuation token">&gt;</span></span>Test<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>title</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>script</span><span class="punctuation token">&gt;</span></span><span class="script token"><span class="language-javascript token">
<span class="keyword token">function</span> <span class="function token">init</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> toc <span class="operator token">=</span> document<span class="punctuation token">.</span><span class="function token">getElementById</span><span class="punctuation token">(</span><span class="string token">"toc"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="keyword token">var</span> i<span class="punctuation token">,</span> li<span class="punctuation token">,</span> newAnchor<span class="punctuation token">;</span>
  <span class="keyword token">for</span> <span class="punctuation token">(</span>i <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span> i <span class="operator token">&lt;</span> document<span class="punctuation token">.</span>anchors<span class="punctuation token">.</span>length<span class="punctuation token">;</span> i<span class="operator token">++</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    li <span class="operator token">=</span> document<span class="punctuation token">.</span><span class="function token">createElement</span><span class="punctuation token">(</span><span class="string token">"li"</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    newAnchor <span class="operator token">=</span> document<span class="punctuation token">.</span><span class="function token">createElement</span><span class="punctuation token">(</span><span class="string token">'a'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    newAnchor<span class="punctuation token">.</span>href <span class="operator token">=</span> <span class="string token">"#"</span> <span class="operator token">+</span> document<span class="punctuation token">.</span>anchors<span class="punctuation token">[</span>i<span class="punctuation token">]</span><span class="punctuation token">.</span>name<span class="punctuation token">;</span>
    newAnchor<span class="punctuation token">.</span>innerHTML <span class="operator token">=</span> document<span class="punctuation token">.</span>anchors<span class="punctuation token">[</span>i<span class="punctuation token">]</span><span class="punctuation token">.</span>text<span class="punctuation token">;</span>
    li<span class="punctuation token">.</span><span class="function token">appendChild</span><span class="punctuation token">(</span>newAnchor<span class="punctuation token">)</span><span class="punctuation token">;</span>
    toc<span class="punctuation token">.</span><span class="function token">appendChild</span><span class="punctuation token">(</span>li<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>
</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>script</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>head</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>body</span> <span class="attr-name token">onload</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>init()<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>

<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>h1</span><span class="punctuation token">&gt;</span></span>Title<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>h1</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>h2</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>a</span> <span class="attr-name token">name</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>contents<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>Contents<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>a</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>h2</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>ul</span> <span class="attr-name token">id</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>toc<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>ul</span><span class="punctuation token">&gt;</span></span>

<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>h2</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>a</span> <span class="attr-name token">name</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>plants<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>Plants<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>a</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>h2</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>ol</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Apples<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Oranges<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Pears<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>ol</span><span class="punctuation token">&gt;</span></span>

<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>h2</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>a</span> <span class="attr-name token">name</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>veggies<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>Veggies<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>a</span><span class="punctuation token">&gt;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>h2</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>ol</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Carrots<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Celery<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Beats<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>ol</span><span class="punctuation token">&gt;</span></span>

<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>body</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>html</span><span class="punctuation token">&gt;</span></span></code></pre>

<p><a href="https://jsfiddle.net/S4yNp">Ver en JSFiddle</a></p>

<h2 id="Notas" name="Notas">Notas</h2>

<p>Por razones de retrocompatibilidad, el conjunto de anclas devuelto sólo contiene aquellas anclas creadas con el atribuo <code>name</code>, y no aquellas creadas con el atributo <code>id</code>.</p>

<h2 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificaciones</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7577272">DOM Level 2 HTML: anchors</a></p>

<p>{{ languages( { "en": "en/DOM/document.anchors", "pl": "pl/DOM/document.anchors", "ja": "ja/DOM/document.anchors" } ) }}</p>

<h2 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h2>



<div>{{Compat("api.Document.anchors")}}</div>
