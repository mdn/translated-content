---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substring
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/substring
---
<p>{{JSRef("Objetos_globales", "String")}}</p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>El <strong><code>substring()</code></strong> método devuelve un subconjunto de un objeto <code>String</code>.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>cadena</em>.substring(<em>indiceA</em>[, <em>indiceB</em>'])</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>indiceA</code></dt>
 <dd>Un entero entre 0 y la longitud de la cadena menos 1.</dd>
 <dt><code>indiceB</code></dt>
 <dd>(opcional) Un entero entre 0 y la longitud de la cadena.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p><code>substring</code> extrae caracteres desde <code>indiceA</code> hasta <code>indiceB</code> sin incluirlo. En particular:</p>

<ul>
 <li>Si <code>indiceA</code> es igual a <code>indiceB</code>, <code>substring</code> devuelve una cadena vacía.</li>
 <li>Si se omite el <code>indiceB</code>, <code>substring</code> extrae caracteres hasta el final de la cadena.</li>
 <li>Si el argumento es menor que 0 o es <code>NaN</code>, se trata como si fuese 0.</li>
 <li>Si el argumento es mayor que <code>nombreCadena.length</code>, se trata como si fuese <code>nombreCadena.length</code>.</li>
</ul>

<p>Si <code>indiceA</code> es mayor que <code>indiceB</code>, entonces el efecto de <code>substring</code> es como si los dos argumentos se intercambiasen; por ejemplo, <code><em>cadena</em>.substring(1, 0) == <em>cadena</em>.substring(0, 1)</code>.</p>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Usando_substring" name="Ejemplo:_Usando_substring">Ejemplo: Usando <code>substring</code></h3>

<p>El siguiente ejemplo usa <code>substring</code> para mostrar caracteres de la cadena "<code>Mozilla</code>":</p>

<pre class="brush:js">// asume una función print ya definida
var cualquierCadena = "Mozilla";

// Muestra "Moz"
print(cualquierCadena.substring(0,3));
print(cualquierCadena.substring(3,0));

// Muestra "lla"
print(cualquierCadena.substring(4,7));
print(cualquierCadena.substring(7,4));

// Muestra "Mozill"
print(cualquierCadena.substring(0,6));
print(cualquierCadena.substring(6,0));

// Muestra "Mozilla"
print(cualquierCadena.substring(0,7));
print(cualquierCadena.substring(0,10));
</pre>

<h3 id="Ejemplo:_Reemplazar_una_subcadena_dentro_de_una_cadena" name="Ejemplo:_Reemplazar_una_subcadena_dentro_de_una_cadena">Ejemplo: Reemplazar una subcadena dentro de una cadena</h3>

<p>El siguiente ejemplo reemplaza una subcadena dentro de una cadena. Reemplazará tanto caracteres individuales como subcadenas. La llamada de la función al final del ejemplo cambia la cadena "<code>Bravo Nuevo Mundo</code>" por "<code>Bravo Nueva Web</code>".</p>

<pre class="brush:js">function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
// Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta

   for (var i = 0; i &lt; cadenaCompleta.length; i++) {
      if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
         cadenaCompleta= cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
      }
   }
   return cadenaCompleta;
}

reemplazarCadena("Mundo", "Web", "Bravo Nuevo Mundo");
</pre>

<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("String.prototype.substr()")}}</li>
 <li>{{jsxref("String.prototype.slice()")}}</li>
</ul>
