---
title: ':active'
slug: 'Web/CSS/:active'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:active'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> <code>:active</code> de <a href="/es/docs/Web/CSS">CSS</a>  representa un elemento (como un botón) que el usuario está activando.  Cuando se usa un mouse, la "activación" generalmente comienza cuando el usuario presiona el botón primario del mouse y termina cuando se suelta. La pseudo-clase <code>:active</code> se usa comúnmente en los elementos {{HTMLElement("a")}} y {{HTMLElement("button")}}, pero también se puede usar en otros elementos.</p>

<pre class="brush: css">/* Selecciona cualquier &lt;a&gt; que esté siendo activado */
a:active {
  color: red;
}</pre>

<p>Los estilos definidos por la pseudoclase <code>:active</code> serán anulados por cualquier pseudoclase posterior relacionada con el enlace ({{cssxref(":link")}}, {{cssxref(":hover")}} o {{cssxref(":visited")}}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla <code>:active</code> después de todas las demás reglas relacionadas con el enlace, tal como lo define el orden LVHA: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>.</p>

<div class="note"><strong>Nota:</strong> En los sistemas con los ratones de varios botones, CSS3 especifica que la pseudo-clase <code>:active</code> sólo debe aplicarse al botón primario; en ratones diestros, este suele ser el botón más a la izquierda.</div>

<h2 class="editable" id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 class="editable" id="Ejemplo">Ejemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#"&gt;Este enlace cambiará a color lima mientras hace clic en él.&lt;/a&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:link { color: blue; }          /* Enlaces no visitados */
a:visited { color: purple; }     /* Enlaces visitados */
a:hover { background: yellow; }  /* El usuario esta sobre el enlace */
a:active { color: lime; }        /* Enlaces activos */
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Ejemplo')}}</p>

<h2 class="editable" id="Especificaciones"><span>Especificaciones</span></h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-active', ':active')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#active-pseudo', ':active')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#useraction-pseudos', ':active')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':active')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#anchor-pseudo-classes', ':active')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("css.selectors.active")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>Pseudo-clases relacionadas con enlaces: {{cssxref(":link")}}, {{cssxref(":visited")}}, y {{cssxref(":hover")}}</li>
</ul>
