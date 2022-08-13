---
title: border-left-color
slug: Web/CSS/border-left-color
translation_of: Web/CSS/border-left-color
---
<h3 id="Resumen" name="Resumen">Resumen</h3>

<p><code>border-left-color</code> pone el color del borde izquierdo de un elemento,con el valor de el color en hexadecimal o con palabras clave, como azul, verde, rojo <code> transparente </code>.</p>

<ul>
 <li>{{ Xref_cssinitial() }}: {{ Cssxref("color") }} propiedad</li>
 <li>Se aplica a : todos los elementos</li>
 <li>{{ Xref_cssinherited() }}: no</li>
 <li>Porcentajes: N/A</li>
 <li>Media: {{ Xref_cssvisual() }}</li>
 <li>{{ Xref_csscomputed() }}: cuando son tomados de la propiedad 'color',los valores computarizados de 'color'; de otra manera como sean especificados.</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-left-color:<em>color</em> | transparent | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>color </dt>
 <dd>El color puede ser especificado en un valor RGB en hexadecimal, o usando uno de los colores predeterminados</dd>
 <dt>transparent </dt>
 <dd>El elemento no tiene color de si mismo, en vez este enseña el color detras de este elemento.</dd>
</dl>

<h3 id="Propiedades_parecidas" name="Propiedades_parecidas">Propiedades parecidas</h3>

<ul>
 <li>{{ Cssxref("border-color") }}</li>
 <li>{{ Cssxref("border-bottom-color") }}</li>
 <li>{{ Cssxref("border-right-color") }}</li>
 <li>{{ Cssxref("border-top-color") }}</li>
</ul>

<h3 id="Examples" name="Examples">Examples</h3>

<p><a href="/samples/cssref/border.html">Ver El Ejemplo Vivo</a></p>

<pre>element {
	width: 300px;
        padding: 15px;
        border-bottom-size: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
}

</pre>

<p> </p>

<pre>p {
border-style: solid;
border-left-color: #ff0000
}

p {
border-style: solid;
border-left-color: rgb(255,0,0)
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<ul>
 <li><a class="external" href="http://html-color-codes.com/">Color Chart by VisiBone</a></li>
</ul>
