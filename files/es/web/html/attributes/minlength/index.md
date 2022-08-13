---
title: 'HTML el atributo: minlength'
slug: Web/HTML/Attributes/minlength
tags:
  - Entrada
  - Input
  - Referencia
  - atributo
  - minlength
  - textarea
translation_of: Web/HTML/Attributes/minlength
original_slug: Web/HTML/Atributos/minlength
---
<p class="summary">El atributo <strong><code>minlength</code></strong> define el número mínimo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en un {{HTMLElement('input')}} o {{HTMLElement('textarea')}}. Debe ser un valor entero 0 o superior. Si no se especifica una longitud mínima o se especifica un número no válido, el <strong><code>&lt;input&gt;</code></strong> no tiene una longitud mínima. Este valor debe ser menor o igual que el valor de {{web.link("/es/docs/Web/HTML/Attributes/maxlength", "maxlength")}}; de lo contrario, el valor nunca será válido, puesto que es imposible cumplir con ambos criterios.</p>

<p>El <strong><code>&lt;input&gt;</code></strong> fallará la restricción de validación si la longitud del valor de texto del campo es menor que la longitud mínima de unidades de código UTF-16, con {{DOMxRef('validityState.tooShort')}} devolviendo <code>true</code>. La validación de la restricción solo se aplica cuando el usuario cambia el valor. Una vez que el envío falla, algunos navegadores mostrarán un mensaje de error que indica la longitud mínima requerida y la longitud actual.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>Al agregar <code>minlength="5"</code>, el valor debe estar vacío o tener cinco caracteres o más para ser válido.</p>

<pre class="brush: html notranslate">&lt;label for="fruit"&gt;Ingresa un nombre de fruta que tenga al menos 5 letras&lt;/label&gt; &lt;input type="text" minlength="5" id="fruit"&gt;</pre>

<p>Podemos usar pseudoclases para estilizar el elemento en función de si el valor es válido. El valor será válido siempre que sea <code>null</code> (vacío) o tenga cinco o más caracteres. <em>Lima</em> no es válido, <em>limón es válido</em>.</p>

<pre class="brush: css notranslate">input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}</pre>

<p>{{EmbedLiveSample('Ejemplos', '100%', 200)}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'input.html#attr-input-minlength', 'atributo minlength')}}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'input.html#attr-minlength-accept', 'atributo minlength')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>



<p>{{Compat("html.elements.attribute.minlength")}}</p>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{web.link("/es/docs/Web/HTML/Attributes/maxlength", "maxlength")}}</li>
 <li>{{web.link("/es/docs/Web/HTML/Attributes/size", "size")}}</li>
 <li>{{web.link("/es/docs/Web/HTML/Attributes/pattern", "pattern")}}</li>
 <li>{{web.link("/es/docs/Web/Guide/HTML/HTML5/Constraint_validation", "Restricción de validación")}}</li>
</ul>
