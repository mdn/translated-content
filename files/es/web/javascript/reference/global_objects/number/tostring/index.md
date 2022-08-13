---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
  - Referencia
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/toString
---
<div>{{JSRef("Objetos_globales", "Number")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Devuelve una cadena que representa al objeto <em>Number</em> especificado</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<p><code><em>number</em> .toString( {{ mediawiki.external('<em>base</em> ') }} )</code></p>

<h3 id="Par.C3.A1metro" name="Par.C3.A1metro">Parámetro</h3>

<dl>
 <dt>base</dt>
 <dd>Un entero entre 2 y 36 especificando la base a usar para representar los valores numéricos.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Una cadena que representa al objeto.</p>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>El objeto <code>Number</code> sobreescribe el método <code>toString</code> y no lo hereda del objeto {{jsxref("Object")}}; por tanto no hereda {{jsxref("Object.prototype.toString()")}}. Para objetos <code>Number</code>, el método <code>toString</code> devuelve una cadena que representa al objeto en la base especificada.</p>

<p>El método toString comprueba su primer argumento, e intenta devolver una cadena de representación en la base especificada. Para bases superiores a 10, las letras del alfabeto indican numerales mayores de 9. Por ejemplo, para números hexadecimales (base 16), se utiliza de A hasta F.</p>

<p>Si no se da a toString una base entre 2 y 36, se lanza una excepción.</p>

<p>Si no se especifica la base, JavaScript asume la base predefinida, que es 10.</p>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<pre class="brush: js">var howMany = 10;

alert("howMany.toString() is " + howMany.toString()); // displays "10"

alert("45 .toString() is " + 45 .toString()); //displays "45"

var x = 7;
alert(x.toString(2))      // Displays "111"
</pre>



<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>
