---
title: '@supports'
slug: Web/CSS/@supports
translation_of: Web/CSS/@supports
---
<p>{{ CSSRef() }}</p>

<h2 id="Resumen">Resumen</h2>

<p>La regla "CSS <code>@supports"</code>asocia un conjunto de declaraciones anidadas en un bloque CSS (que está delimitado por corchetes) con una condición consistente en probar declaraciones de CSS (es decir, pares propiedad-valor, así como conjunciones, disjunciones o negaciones abritrarias sobre ellas). A esas condiciones se le llama condición "soporta"<em> (</em><em>supports condition)</em>.</p>

<p><code>@supports</code> otorga la habilidad de realizar consultas que comprueben si ciertas funcionalidades están disponibles <em>(feature query)</em>.</p>

<p>La regla <code>@supports </code>puede ser usada tanto en el nivel superior de una hoja de estilos, como dentro de cualquier <a href="/en/CSS/At-rule#Conditional_Group_Rules" title="en/CSS/At-rule#Conditional_Group_Rules">regla de grupo condicional</a> y se puede acceder a ella a través del modelo de objetos de CSS {{domxref("CSSSupportsRule")}}.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<p>Una condición "soporta" <em>(</em><em>supports condition)</em> consiste en una o varias declaraciones combinadas por diferentes operadores lógicos. La precedencia de los operadores puede ser definida usando paréntesis.</p>

<h3 id="Sintaxis_de_una_declaración">Sintaxis de una declaración</h3>

<p>La expresión más simple es una declaración CSS, es decir el nombre de una propiedad CSS seguida por un valor, separada por dos puntos. La siguiente expresión</p>

<pre class="brush:css">( transform-origin: 5% 5% )</pre>

<p>devuelve "cierto" si la {{ cssxref("transform-origin") }} implementa una sintaxis que reconoce <code>5% 5%</code> como válida.</p>

<p>Una declaración CSS está siempre rodeada entre paréntesis.</p>

<h3 id="El_operador_not">El operador "<code>not</code> "</h3>

<p>El operador <code>not</code> puede preceder cualquier expresión para crear una nueva, resultando en la negación de la expresión original. La siguiente expresión</p>

<pre class="brush:css">not ( transform-origin: 10em 10em 10em )</pre>

<p>devuelve "cierto" si {{ cssxref("transform-origin") }} no reconoceo <code>10em 10em 10em</code> como una sintaxis válida.</p>

<p>Como cualquier operador, el operador <code>not</code> puede ser aplicado a una declaración de complejidad arbitraria. Los siguientes ejemplos son todas expresiones válidas:</p>

<pre class="brush:css">not ( not ( transform-origin: 2px ) )
(display: flexbox) and ( not (display: inline-grid) )</pre>

<div class="note style-wrap">
<p><strong>Nota:</strong> no hay necesidad de encerrar el operador <code>not</code> entre paréntesis cuando se encuentra en el nivel superior. Para combinarlo con otros operadores, como <code>and</code> y <code>or</code>, sí se requieren paréntesis</p>
</div>

<h3 id="El_operador_and">El operador  "<code>and</code>"</h3>

<p>Partiendo de dos expresiones, el operador <code>and</code> crea una nueva expresión consistente en la conjunción de dos originales; la expresión resultante es verdadera si sólo ambas expresiones originales lo son. En este ejemplo, la expresión completa resuelve a true si y sólo si, las dos expresiones son simultáneamente veraderas:</p>

<pre class="brush:css">(display: table-cell) and (display: list-item)</pre>

<p>Varias conjunciones pueden ser yuxtapuestas sin la necesidad de agregar paréntesis:</p>

<pre class="brush:css">(display: table-cell) and (display: list-item) and (display:run-in)</pre>

<p>es equivalente a:</p>

<pre class="brush:css">(display: table-cell) and ((display: list-item) and (display:run-in))</pre>

<h3 id="El_operador_or">El operador "<code>or"</code></h3>

<p>Partiendo de dos expresiones, el operador  <code>or</code> crea una nueva expresión consistente en la disyunción de dos originales; la expresión resultante es verdadera si una o ambas expresiones originales lo son. En este ejemplo, la expresión completa resuelve a true si al menos una de las dos expresiones es veradera:</p>

<pre class="brush:css;">( transform-style: preserve ) or ( -moz-transform-style: preserve )</pre>

<p>Varias disyunciones pueden ser yuxtapuestas sin la necesidad de agregar paréntesis:</p>

<pre class="brush:css">( transform-style: preserve ) or ( -moz-transform-style: preserve ) or
( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  )</pre>

<p>es equivalente a:</p>

<pre class="brush:css">( transform-style: preserve-3d ) or (( -moz-transform-style: preserve-3d ) or
(( -o-transform-style: preserve-3d ) or ( -webkit-transform-style: preserve-3d  )))</pre>

<div class="note style-wrap">
<p><strong>Nota</strong>: cuando se usan <code>and</code> y <code>or</code>, el paréntesis debe ser usado para definir el orden en el cual aplican. Si no, la condición es inválida provocando que se ignore todo el "at-rule" .</p>
</div>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Prueba_soporta_de_una_propiedad_CSS_determinada">Prueba "soporta" de una propiedad CSS determinada</h3>

<pre class="brush:css;">@supports (animation-name: test) {
    … /* specific CSS applied when animations are supported unprefixed */
    @keyframes { /* @supports being a CSS conditional group at-rule, it can includes other relevant at-rules */
      …
    }
}
</pre>

<h3 id="Prueba_soporta_de_una_propiedad_CSS_determinada_o_de_una_versión_con_prefijo">Prueba "soporta" de una propiedad CSS determinada o de una versión con prefijo</h3>

<pre class="brush:css;">@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* specific CSS applied when 3D transforms, eventually prefixed, are supported */
}
</pre>

<h3 id="Prueba_soporta_para_propiedades_customizadas">Prueba "soporta" para propiedades customizadas</h3>

<pre class="brush:css;">@supports not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
    … /* specific CSS applied to simulate text-align-last:justify */
}</pre>

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
   <td>{{ SpecName('CSS3 Conditional', '#at-supports', '@supports') }}</td>
   <td>{{ Spec2('CSS3 Conditional') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con navegadores</h2>

{{Compat("css.at-rules.supports")}}

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>La clase CSSOM {{ domxref("CSSSupportsRule") }}, y el método  {{ domxref("CSS.supports") }} que permite chequear via JavaScript.</li>
</ul>
