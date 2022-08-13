---
title: '::-moz-color-swatch'
slug: 'Web/CSS/::-moz-color-swatch'
translation_of: 'Web/CSS/::-moz-color-swatch'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>El <strong><code>::-moz-color-swatch</code></strong> <a href="/en-US/docs/Web/CSS">pdseudo-elemento CSS</a> es una<a href="/en-US/docs/Web/CSS/Mozilla_Extensions"> extension de Mozilla</a> que representa el color seleccionado en un {{HTMLElement("input")}} de <code>type="color"</code>.</p>

<div class="note">
<p><strong>Nota:</strong> Usando <code>::-moz-color-swatch</code> con cualquier cosa excepto <code>&lt;input type="color"&gt;</code> no concuerda con nada y no tiene efecto.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="color" value="#de2020" /&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input[type=color]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Example", 300, 50)}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<p>No es parte de ninguna especificacion. Es un pseudo-elemento patentado específicamente para Gecko.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("css.selectors.-moz-color-swatch")}}</p>

<h2 id="Ver_tambien">Ver tambien</h2>

<ul>
 <li>Pseudo-elementos similares usados por otros buscadores:
  <ul>
   <li>{{cssxref("::-webkit-color-swatch")}}, pseudo-elemento soportado por WebKit y Blink (Safari, Chrome, and Opera)</li>
  </ul>
 </li>
</ul>
