---
title: ':hover'
slug: 'Web/CSS/:hover'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:hover'
---
<div>{{ CSSRef }}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> <strong><code>:hover</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> coincide cuando el usuario interactúa con un elemento con un dispositivo señalador, pero no necesariamente lo activa. Generalmente se activa cuando el usuario se desplaza sobre un elemento con el cursor (puntero del mouse).</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier elemento &lt;a&gt; cuando está "mantenido (hovered)" */
a:hover {
  color: orange;
}</pre>

<p>Los estilos definidos por la pseudoclase <code>:active</code> serán anulados por cualquier pseudo-clase posterior relacionada con el <em>enlace </em>({{ cssxref(":link") }}, {{ cssxref(":visited") }}, o {{ cssxref(":active") }}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla <code>:hover</code> después de las reglas <code>:link</code> y <code>:visited</code>, pero antes de <code>:active</code>, según lo definido por el <em>orden LVHA</em>: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>.</p>

<div class="note"><strong>Nota</strong>: La pseudo-clase <code>:hover</code> es problemática en las pantallas táctiles. Dependiendo del navegador, la pseudo-clase <code>:hover</code> podría no coincidir, coincidir solo por un momento después de tocar un elemento, o continuar coincidiendo incluso después de que el usuario haya dejado de tocar y hasta que el usuario toque otro elemento. Los desarrolladores web deben asegurarse de que el contenido sea accesible en dispositivos con capacidades <em>hovering </em>limitadas o inexistentes.</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo_básico">Ejemplo básico</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;a href="#"&gt;Intenta pasar el mouse sobre este enlace.&lt;/a&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">a {
  background-color: powderblue;
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample("Ejemplo_básico")}}</p>

<h3 id="Galería_de_imágenes">Galería de imágenes</h3>

<p>Puede usar la pseudoclase <code>:hover</code> para crear una galería de imágenes con imágenes de tamaño completo que solo se muestran cuando el mouse se mueve sobre una miniatura. Vea <a href="/@api/deki/files/6247/=css-gallery.zip">esta demostración</a> para una posible nota.</p>

<div class="note"><strong>Nota:</strong> Para un efecto análogo, pero basado en la pseudo-clase <a class="internal" href="/es/docs/Web/CSS/%3Achecked"><code>:checked</code></a> (aplicado a radioboxes ocultos), vea <a href="/@api/deki/files/6268/=css-checked-gallery.zip">esta demostración</a>, tomada de la página de referencia <a class="internal" href="/es/docs/Web/CSS/:checked">:checked</a>.</div>

<h2 id="Especificaciones">Especificaciones</h2>

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
   <td>{{ SpecName('HTML WHATWG', 'scripting.html#selector-hover', ':hover') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#the-hover-pseudo', ':hover') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Permite aplicar <code>:hover</code> a cualquier pseudo-elemento.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover') }}</td>
   <td>{{ Spec2('CSS3 Selectors') }}</td>
   <td>Ningún cambio significativo.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.hover")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=370155">Chromium bug #370155: No ponga <code>:hover</code> sticky en los sitios que configuran una ventana gráfica móvil</a></li>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=306581">Chromium bug #306581: Inmediatamente muestra los estados hover y active al tocar cuando la página no se puede desplazar.</a></li>
</ul>
