---
title: Usando la pseudo-clase :target en selectores
slug: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
tags:
  - CSS
  - CSS3
  - Selectores
translation_of: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
original_slug: Web/CSS/Selectores_CSS/Usando_la_pseudo-clase_:target_en_selectores
---
<p><span class="comment">When a URL points at a specific piece of a document, it can be difficult to ascertain. Find out how you can use some simple CSS to draw attention to the target of a URL and improve the user's experience.</span> {{CSSRef}}</p>

<p>Como ayuda para identificar el destino de un enlace que apunta a una parte específica de un documento, los <a class="external" href="http://www.w3.org/TR/css3-selectors/#target-pseudo">Selectores CSS3</a> incluyen la <a href="/en/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> {{ Cssxref(":target") }}.</p>

<h3 id="Picking_a_Target" name="Picking_a_Target">Seleccionando un objetivo (target)</h3>

<p>La pseudo-clase <code>{{ Cssxref(":target") }}</code> es usada para estilizar el elemento objetivo de una URI que contiene un identificador de fragmento. Por ejemplo, la URI <code><span class="nowiki">http://developer.mozilla.org/en/docs/Using_the_:target_selector#Example</span></code> contiene el identificador de fragmento <code>#Example</code>. En HTML, los identificadores son valores de los atributos <code>id</code> o <code>name</code>, pues ambos comparten el mismo espacio de nombres. Por lo tanto, la URI de ejemplo apuntará al encabezado "Example" en este documento.</p>

<p>Supongamos que se quiere estilizar cualquier elemento <code>h2</code> que sea el objetivo de una URI, pero no queremos que cualquier otro elemento tenga esos mismos estilos. Es así de simple:</p>

<pre class="notranslate">h2:target {font-weight: bold;}</pre>

<p>También es posible crear estilos específicos para fragmentos particulares del documento. Esto se hace usando el mismo valor del identificador que se encuentra en la URI. Así, para añadir un borde al fragmento <code>#Example</code>, escribiremos:</p>

<pre class="notranslate">#Example:target {border: 1px solid black;}</pre>

<h3 id="Targeting_the_Root_Element" name="Targeting_the_Root_Element">Aplicando estilos a todos los elementos objetivo</h3>

<p>Si lo que se intenta es crear un estilo que cubra a todos los elementos objetivo, se puede usar el selector universal:</p>

<pre class="notranslate">:target {color: red;}
</pre>

<h3 id="Example" name="Example">Ejemplo</h3>

<p>En el siguiente ejemplo, hay cinco enlaces que apuntan a elementos en el mismo documento. Seleccionar el enlace "First", por ejemplo, causará que <code>&lt;h1 id="one"&gt;</code> sea el elemento objetivo. Nótese que el documento puede desplazarse a una nueva posición, pues los elementos objetivo están ubicados en la parte superior de la ventana del navegador cuando es posible.</p>

<div id="example">
<pre class="notranslate">&lt;h4 id="one"&gt;...&lt;/h4&gt; &lt;p id="two"&gt;...&lt;/p&gt;
&lt;div id="three"&gt;...&lt;/div&gt; &lt;a id="four"&gt;...&lt;/a&gt; &lt;em id="five"&gt;...&lt;/em&gt;

&lt;a href="#one"&gt;First&lt;/a&gt;
&lt;a href="#two"&gt;Second&lt;/a&gt;
&lt;a href="#three"&gt;Third&lt;/a&gt;
&lt;a href="#four"&gt;Fourth&lt;/a&gt;
&lt;a href="#five"&gt;Fifth&lt;/a&gt;</pre>
</div>

<h3 id="Conclusion" name="Conclusion">Conclusión</h3>

<p>En los casos en los que un identificador de fragmento apunte a una porción del documento, los lectores pueden confundirse sobre qué parte del documento se supone que están leyendo. Darle un estilo particular al objetivo de la URI le resta confusión al lector, o incluso la elimina.</p>

<h3 id="Related_Links" name="Related_Links">Enlaces relacionados</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/css3-selectors/#target-pseudo">Selectores CSS3 #target-pseudo</a></li>
 <li><a class="internal" href="/es/CSS/:target" title="En/CSS/:target">Referencia CSS :target</a></li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Información del Documento Original</h3>

<ul>
 <li>Autor(es): Eric Meyer, Evangelista de Estándares, Netscape Communications</li>
 <li>Información Original de Copyright: Copyright © 2001-2003 Netscape. Todos los derechos reservados.</li>
 <li>Nota: El artículo en inglés era originalmente parte del sitio DevEdge.</li>
</ul>
</div>
