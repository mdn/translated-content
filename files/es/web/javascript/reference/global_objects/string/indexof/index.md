---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/indexOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/indexOf
---
<p>{{JSRef("Objetos_globales", "String")}}</p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>El método <code><strong>indexOf()</strong></code>devuelve el índice, dentro del objeto <code>String</code> que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde <code>indiceDesde</code>; o -1 si no se encuentra dicho valor.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>cadena</em>.indexOf(<em>valorBusqueda</em>[,<em> indiceDesde</em>])</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>valorBusqueda</code></dt>
 <dd>Una cadena que representa el valor de búsqueda.</dd>
</dl>

<dl>
 <dt><code>indiceDesde</code></dt>
 <dd>La localización dentro de la cadena llamada desde la que empezará la búsqueda. Puede ser un entero entre 0 y la longitud de la cadena. El valor predeterminado es 0.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter de una cadena llamada <code>nombreCadena</code> es <code>nombreCadena.length - 1</code>.</p>

<pre class="brush: js">"Blue Whale".indexOf("Blue")    // returns 0
"Blue Whale".indexOf("Blute")   // returns -1
"Blue Whale".indexOf("Whale",0) // returns 5
"Blue Whale".indexOf("Whale",5) // returns 5
"Blue Whale".indexOf("",9)      // returns 9
"Blue Whale".indexOf("",10)     // returns 10
"Blue Whale".indexOf("",11)     // returns 10
</pre>

<p>El método <code>indexOf</code> es sensible a mayúsculas. Por ejemplo, la siguiente expresión devuelve -1:</p>

<pre class="brush: js">"Ballena Azul".indexOf("azul")
</pre>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Usando_indexOf_y_lastIndexOf" name="Ejemplo:_Usando_indexOf_y_lastIndexOf">Ejemplo: Usando <code>indexOf</code> y <code>lastIndexOf</code></h3>

<p>El siguiente ejemplo utiliza <code>indexOf</code> y <code>lastIndexOf</code> para localizar valores dentro de la cadena "<code>Brave new world</code>".</p>

<pre class="brush: js">var cualquierCadena="Brave new world"


document.write("&lt;P&gt;The index of the first w from the beginning is " +
   cualquierCadena.indexOf("w"))         // Muestra 8

document.write("&lt;P&gt;The index of the first w from the end is " +
   cualquierCadena.lastIndexOf("w"))    // Muestra 10

document.write("&lt;P&gt;The index of 'new' from the beginning is " +
   cualquierCadena.indexOf("new"))      // Muestra 6

document.write("&lt;P&gt;The index of 'new' from the end is " +
   cualquierCadena.lastIndexOf("new"))  // Muestra 6
</pre>

<h3 id="Ejemplo:_indexOf_y_sensibilidad_a_may.C3.BAsculas" name="Ejemplo:_indexOf_y_sensibilidad_a_may.C3.BAsculas">Ejemplo: <code>indexOf</code> y sensibilidad a mayúsculas</h3>

<p>El siguiente ejemplo define dos variables de tipo cadena. Las variables contienen la misma cadena excepto que la segunda cadena contienen letras en mayúscula. El primer método <code>writeln</code> muestra 19. Pero a que el método <code>indexOf</code> es sensible a mayúsculas, no se encuentra la cadena "<code>cheddar</code>" en <code>miCadenaMayusculas</code>, así que el segundo método <code>writeln</code> muestra -1.</p>

<pre class="brush: js">miCadena="brie, pepper jack, cheddar"
miCadenaMayusculas="Brie, Pepper Jack, Cheddar"
document.writeln('miCadena.indexOf("cheddar") is ' +
   miCadena.indexOf("cheddar"))
document.writeln('&lt;P&gt;miCadenaMayusculas.indexOf("cheddar") is ' +
   miCadenaMayusculas.indexOf("cheddar"))
</pre>

<h3 id="Ejemplo:_Usando_indexOf_para_contar_ocurrencias_de_una_letra_en_una_cadena" name="Ejemplo:_Usando_indexOf_para_contar_ocurrencias_de_una_letra_en_una_cadena">Ejemplo: Usando <code>indexOf</code> para contar ocurrencias de una letra en una cadena</h3>

<p>El siguiente ejemplo establece <code>cuenta</code> como el número de ocurrencias de la letra <code>x</code> dentro de la cadena <code>miCadena</code>:</p>

<pre class="brush: js">cuenta = 0;
posicion = miCadena.indexOf("x");
while ( posicion != -1 ) {
   cuenta++;
   posicion = miCadena.indexOf("x",posicion+1);
}
</pre>

<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
