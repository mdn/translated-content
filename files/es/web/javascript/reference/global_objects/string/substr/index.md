---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - JavaScript
  - Método(2)
  - Prototipo
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/substr
---
<p>{{JSRef("Objetos_globales", "String")}}</p>

<div class="warning">Advertencia: Aunque <code>String.prototype.substr(…) </code><span style="font-size: 1.125rem;">no está estrictamente obsoleto (como en "eliminado de los estándares web"), se define en el anexo B de la norma ECMA-262, cuya introducción establece:</span>

<blockquote>... Todas las características y comportamientos del lenguaje especificados en este anexo tienen una o más características indeseables y, en ausencia de uso heredado, se eliminarían de esta especificación. ... ... Los programadores no deben usar ni asumir la existencia de estas características y comportamientos al escribir un nuevo código ECMAScript.</blockquote>
</div>

<p> </p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>El método <strong><code>substr()</code></strong> devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>cadena</em>.substr(<em>inicio</em>[, <em>longitud</em>])</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>inicio</code></dt>
 <dd>Localización en la cual se empiezan a extraer caracteres. Si se da un número negativo, se trata como <code>longCad + inicio</code> donde  <code>longCad</code> es la longitud de la cadena (por ejemplo, si <code>inicio</code> es -3 se trata como <code>longCad - 3</code>).</dd>
</dl>

<dl>
 <dt><code>longitud</code></dt>
 <dd>Opcional. El número de caracteres a extraer. Si este argumento es {{jsxref("undefined")}}, todos los caracteres desde <code><em>inicio</em></code> hasta el final de la cadena serán extraidos.</dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Una nueva cadena que contiende la sección extraída de la cadena dada. Sí la longitud es 0 o un número negativo, retorna la cadena vacía.</p>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p><code>inicio</code> es el índice de un carácter. El índice del primer carácter es 0, y el índice del último carácter es la longitud de la cadena menos 1. <code>substr</code> comienza extrayendo caracteres a partir de <code>inicio</code> y recolecta <code>longitud</code>  caracteres (a menos que se alcance primero el final de la cadena, en cuyo caso devuelve menos).</p>

<p>Si <code>inicio</code> es positivo y es mayor o igual que la longitud de la cadena, <code>substr()</code> devuelve una cadena vacía.</p>

<p>Si <code>inicio</code> es negativo, <code>substr()</code> lo usa como un índice de carácter desde el final de la cadena. Si <code>inicio</code> es negativo y <code>abs(inicio)</code> es mayor que la longitud de la cadena, <code>substr</code> usa 0 como índice inical. Nota: el uso descrito de valores negativos del argumento <code>inicio</code> no es soportado por Microsoft JScript <a class="external" href="http://msdn2.microsoft.com/en-us/library/0esxc5wy.aspx">. </a></p>

<p>Si <code>longitud</code> es 0 o negativa, <code>substr</code> devuelve una cadena vacía. Si se omite <code>longitud</code>, <code>inicio</code> extrae caracteres hasta el final de la cadena.</p>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Usando_substr" name="Ejemplo:_Usando_substr">Ejemplo: Uso de <code>substr()</code></h3>

<pre class="brush: js">var cadena = "abcdefghij";

console.log("(1,2): "    + cadena.substr(1,2));   <code>// '(1, 2): bc'</code>
console.log("(-3,2): "   + cadena.substr(-3,2));  <code>// '(-3, 2): hi'</code>
console.log("(-3): "     + cadena.substr(-3));    // '(-3): hij'
console.log("(1): "      + cadena.substr(1));     // '(1): bcdefghij'
console.log("(-20, 2): " + cadena.substr(-20,2)); // '(-20, 2): ab'
console.log("(20, 2): "  + cadena.substr(20,2));  // '(20, 2): '
</pre>

<p>Este script muestra:</p>

<pre class="eval">(1,2): bc
(-3,2): hi
(-3): hij
(1): bcdefghij
(-20, 2): ab
(20, 2):
</pre>

<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("String.prototype.slice()")}}</li>
 <li>{{jsxref("String.prototype.substring()")}}</li>
</ul>
