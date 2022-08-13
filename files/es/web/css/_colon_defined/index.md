---
title: ':defined'
slug: 'Web/CSS/:defined'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:defined'
---
<div>{{ CSSRef }}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:defined</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa cualquier elemento que se haya definido.  Esto incluye cualquier elemento estándar integrado en el navegador y elementos personalizados que se hayan definido correctamente (es decir, con el método {{domxref("CustomElementRegistry.define()")}}).</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier elemento definido */
:defined {
  font-style: italic;
}

/* Selecciona cualquier instancia de un elemento personalizado específico */
simple-custom:defined {
  display: block;
}
</pre>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<p>Los siguientes fragmentos están tomados de nuestra demostración <a href="https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class">Pseudo-clase-definida</a> (<a href="https://mdn.github.io/web-components-examples/defined-pseudo-class/">ver también en directo</a>).</p>

<p>En esta demostración, definimos un elemento personalizado trivial muy simple:</p>

<pre class="brush: js">customElements.define('simple-custom',
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement('div');
      divElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(divElem);
  }
})</pre>

<p>Luego inserta una copia de este elemento en el documento, junto con un <code>&lt;p&gt;</code> estándar:</p>

<pre class="brush: html">&lt;simple-custom text="Texto de ejemplo del elemento personalizado"&gt;&lt;/simple-custom&gt;

&lt;p&gt;Texto de ejemplo de párrafo estándar&lt;/p&gt;</pre>

<p>En el CSS primero incluimos las siguientes reglas:</p>

<pre class="brush: css">/* Dar a los dos elementos fondos distintivos */
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

/* Tanto el elemento personalizado como el incorporado tienen texto en cursiva */
:defined {
  font-style: italic;
}</pre>

<p>A continuación, proporcione las dos reglas siguientes para ocultar las instancias de nuestro elemento personalizado que no están definidas y las instancias que se definen como elementos de nivel de bloque:</p>

<pre class="brush: css">simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}</pre>

<p>Esto es útil si tiene un elemento personalizado complejo que demora un tiempo en cargarse en la página — es posible que desee ocultar las instancias del elemento hasta que la definición esté completa, para que no terminen con feos destellos de elementos sin estilo en la página</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'semantics-other.html#selector-defined', ':defined') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.defined")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/Web_Components">Componentes web</a></li>
</ul>
