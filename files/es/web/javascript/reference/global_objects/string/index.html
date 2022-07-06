---
title: String — Cadena de caracteres
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Clase
  - Class
  - ECMAScript 2015
  - JavaScript
  - Referencia
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String
original_slug: Web/JavaScript/Referencia/Objetos_globales/String
---
<div>{{JSRef}}</div>

<p>El objeto <strong><code>String</code></strong> se utiliza para representar y manipular una secuencia de caracteres.</p>

<h2 id="Descripción">Descripción</h2>

<p>Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su {{jsxref("String.length", "length")}}, para construirlas y concatenarlas usando <a href="/es/docs/Web/JavaScript/Reference/Operators/String_Operators">operadores de cadena + y +=</a>, verificando la existencia o ubicación de subcadenas con {{jsxref("String.prototype.indexOf()", "indexOf()")}} o extraer subcadenas con el método {{jsxref("String.prototype.substring()", "substring()")}}.</p>

<h3 id="Crear_cadenas">Crear cadenas</h3>

<p>Las cadenas se pueden crear como primitivas, a partir de cadena literales o como objetos, usando el constructor {{jsxref("String/String", "String()")}}:</p>

<pre class="syntaxbox notranslate">const string1 = "Una cadena primitiva";
const string2 = 'También una cadena primitiva';
const string3 = `Otra cadena primitiva más`;</pre>

<pre class="syntaxbox notranslate">const string4 = new String("Un objeto String");
</pre>

<p>Las <code>string</code>s primitivas y los objetos <code>string</code> se pueden usar indistintamente en la mayoría de las situaciones. Consulta "<a href="#Primitivas_string_y_objetos_string">Primitivas <code>String</code> y objetos <code>String</code></a>" a continuación.</p>

<p>Los cadena literales se pueden especificar usando comillas simples o dobles, que se tratan de manera idéntica, o usando el carácter de comilla invertida <kbd>`</kbd>. Esta última forma especifica una <a href="/es/docs/Web/JavaScript/Reference/Template_literals">Plantilla literal</a>: con esta forma puedes interpolar expresiones.</p>

<h3 id="Acceder_a_un_caracter">Acceder a un caracter</h3>

<p>Hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método {{jsxref("String.prototype.charAt()", "charAt()")}}:</p>

<pre class="brush: js notranslate">return 'cat'.charAt(1) // devuelve "a"
</pre>

<p>La otra forma (introducida en ECMAScript 5) es tratar a la cadena como un objeto similar a un arreglo, donde los caracteres individuales corresponden a un índice numérico:</p>

<pre class="brush: js notranslate">return 'cat'[1] // devuelve "a"
</pre>

<p>Cuando se usa la notación entre corchetes para acceder a los caracteres, no se puede intentar eliminar o asignar un valor a estas propiedades. Las propiedades involucradas no se pueden escribir ni configurar. (Ve {{jsxref("Object.defineProperty()")}} para más información).</p>

<h3 id="Comparar_cadenas">Comparar cadenas</h3>

<p>En C, se usa la función <code>strcmp()</code> para comparar cadenas. En JavaScript, solo usas los <a href="/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">operadores menor que y mayor que</a>:</p>

<pre class="brush: js notranslate">let a = 'a'
let b = 'b'
if (a &lt; b) { // true
  console.log(a + ' es menor que ' + b)
} else if (a &gt; b) {
  console.log(a + ' es mayor que ' + b)
} else {
  console.log(a + ' y ' + b + ' son iguales.')
}
</pre>

<p>Puedes lograr un resultado similar usando el método {{jsxref("String.prototype.localeCompare()", "localeCompare()")}} heredado por las instancias de <code>String</code>.</p>

<p>Ten en cuenta que <code>a == b</code> compara las cadenas en <code><var>a</var></code> y <code><var>b</var></code> por ser igual en la forma habitual que distingue entre mayúsculas y minúsculas. Si deseas comparar sin tener en cuenta los caracteres en mayúsculas o minúsculas, usa una función similar a esta:</p>

<pre class="notranslate">function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual
</pre>

<p>En esta función se utilizan mayúsculas en lugar de minúsculas, debido a problemas con ciertas conversiones de caracteres UTF-8.</p>

<h3 id="Primitivas_String_y_objetos_String">Primitivas <code>String</code> y objetos <code>String</code></h3>

<p>Ten en cuenta que JavaScript distingue entre objetos <code>String</code> y valores de {{Glossary("Primitive", "primitivas string")}}. (Lo mismo ocurre con {{jsxref("Boolean", "Booleanos")}} y {{jsxref("Global_Objects/Number", "Números")}}).</p>

<p>Las cadenas literales (denotadas por comillas simples o dobles) y cadenas devueltas de llamadas a <code>String</code> en un contexto que no es de constructor (es decir, llamado sin usar la palabra clave {{jsxref("Operators/new", "new")}}) son cadenas primitivas. JavaScript automáticamente convierte las primitivas en objetos <code>String</code>, por lo que es posible utilizar métodos del objeto <code>String</code> en cadenas primitivas. En contextos donde se va a invocar a un método en una cadena primitiva o se produce una búsqueda de propiedad, JavaScript ajustará automáticamente la cadena primitiva y llamará al método o realizará la búsqueda de la propiedad.</p>

<pre class="brush: js notranslate">let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Registra "string"
console.log(typeof s_obj)  // Registra "object"
</pre>

<p>Las primitivas de <code>String</code> y los objetos <code>String</code> también dan diferente resultado cuando se usa {{jsxref("Global_Objects/eval", "eval()")}}. Las primitivas pasadas a <code>eval</code> se tratan como código fuente; Los objetos <code>String</code> se tratan como todos los demás objetos, devuelven el objeto. Por ejemplo:</p>

<pre class="brush: js notranslate">let s1 = '2 + 2'              // crea una string primitiva
let s2 = new String('2 + 2')  // crea un objeto String
console.log(eval(s1))         // devuelve el número 4
console.log(eval(s2))         // devuelve la cadena "2 + 2"
</pre>

<p>Por estas razones, el código se puede romper cuando encuentra objetos <code>String</code> y espera una <code>string</code> primitiva en su lugar, aunque generalmente los autores no necesitan preocuparse por la distinción.</p>

<p>Un objeto <code>String</code> siempre se puede convertir a su contraparte primitiva con el método {{jsxref("String.prototype.valueOf()", "valueOf()")}}.</p>

<pre class="brush: js notranslate">console.log(eval(s2.valueOf()))  // devuelve el número 4
</pre>

<h3 id="Notación_de_escape">Notación de escape</h3>

<p>Los caracteres especiales se pueden codificar mediante notación de escape:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Código</th>
   <th scope="col">Salida</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\<var>XXX</var></code><br>
    (donde <code><var>XXX</var></code> es de 1 a 3 dígitos octales; rango de <code>0</code>-<code>377</code>)</td>
   <td>Punto de código Unicode/carácter ISO-8859-1 entre <code>U+0000</code> y <code>U+00FF</code></td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>Comilla sencilla</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>Comilla doble</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>Barra inversa</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>Nueva línea</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>Retorno de carro</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>Tabulación vertical</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>Tabulación</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>Retroceso</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>Avance de página</td>
  </tr>
  <tr>
   <td><code>\u<var>XXXX</var></code> (donde <code><var>XXXX</var></code> son 4 dígitos hexadecimales; rango de <code>0x0000</code>-<code>0xFFFF</code>)</td>
   <td>Unidad de código UTF-16/punto de código Unicode entre <code>U+0000</code> y <code>U+FFFF</code></td>
  </tr>
  <tr>
   <td><code>\u{<var>X</var>}</code> ... <code>\u{<var>XXXXXX</var>}</code><br>
    (donde <code><var>X</var>…<var>XXXXXX</var></code> es de 1 a 6 dígitos hexadecimales; rango de <code>0x0</code>-<code>0x10FFFF</code>)</td>
   <td>Unidad de código UTF-32/punto de código Unicode entre <code>U+0000</code> y <code>U+10FFFF</code></td>
  </tr>
  <tr>
   <td><code>\x<var>XX</var></code><br>
    (donde <code><var>XX</var></code> son 2 dígitos hexadecimales; rango de <code>0x00</code>-<code>0xFF</code>)</td>
   <td>Punto de código Unicode/carácter ISO-8859-1 entre <code>U+0000</code> y <code>U+00FF</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Cadenas_literales_largas">Cadenas literales largas</h3>

<p>A veces, tu código incluirá cadenas que son muy largas. En lugar de tener líneas que se prolongan interminablemente o que se ajustan según el capricho de tu editor, es posible que desees dividir específicamente la cadena en varias líneas en el código fuente sin afectar el contenido real de la cadena. hay dos maneras de conseguirlo.</p>

<h4 id="Método_1">Método 1</h4>

<p>Puedes usar el operador <a href="/es/docs/Web/JavaScript/Reference/Operators/Addition">+</a> para agregar varias cadenas juntas, así:</p>

<pre class="brush: js notranslate">let longString = "Esta es una cadena muy larga que necesita " +
                 "que dividimos en varias líneas porque " +
                 "de lo contrario, mi código es ilegible."
</pre>

<h4 id="Método_2">Método 2</h4>

<p>Puedes usar el caracter de barra invertida (<code>\</code>) al final de cada línea para indicar que la cadena continúa en la siguiente línea. Asegúrate de que no haya ningún espacio ni ningún otro carácter después de la barra invertida (a excepción de un salto de línea) o como sangría; de lo contrario, no trabajará.</p>

<p>Esa forma se ve así:</p>

<pre class="brush: js notranslate">let longString = "Esta es una cadena muy larga que necesita \
que dividimos en varias líneas porque \
de lo contrario, mi código es ilegible."
</pre>

<p>Ambos métodos anteriores dan como resultado cadenas idénticas.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("String/String", "String()")}}</dt>
 <dd>Crea un nuevo objeto <code>String</code>. Realiza la conversión de tipos cuando se llama como función, en lugar de como constructor, lo cual suele ser más útil.</dd>
</dl>

<h2 id="Métodos_estáticos">Métodos estáticos</h2>

<dl>
 <dt>{{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[, <var>numN</var>]])")}}</dt>
 <dd>Devuelve una cadena creada utilizando la secuencia de valores Unicode especificada.</dd>
 <dt>{{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[, <var>numN</var>]])")}}</dt>
 <dd>Devuelve una cadena creada utilizando la secuencia de puntos de código especificada.</dd>
 <dt>{{jsxref("String.raw()")}}</dt>
 <dd>Devuelve una cadena creada a partir de una plantilla literal sin formato.</dd>
</dl>

<h2 id="Propiedades_de_la_instancia">Propiedades de la instancia</h2>

<dl>
 <dt>{{jsxref("String.prototype.length")}}</dt>
 <dd>Refleja la <code>length</code> de la cadena. Solo lectura.</dd>
</dl>

<h2 id="Métodos_de_instancia">Métodos de instancia</h2>

<dl>
 <dt>{{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}</dt>
 <dd>Devuelve el caracter (exactamente una unidad de código UTF-16) en el <code><var>index</var></code> especificado.</dd>
 <dt>{{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}}</dt>
 <dd>Devuelve un número que es el valor de la unidad de código UTF-16 en el <code><var>index</var></code> dado.</dd>
 <dt>{{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}}</dt>
 <dd>Devuelve un número entero no negativo que es el valor del punto de código del punto de código codificado en UTF-16 que comienza en la <code><var>pos</var></code> especificada.</dd>
 <dt>{{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str</var>[, ...<var>strN</var>])")}}</dt>
 <dd>Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.</dd>
 <dt>{{jsxref("String.prototype.includes()", "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}</dt>
 <dd>Determina si la cadena de la llamada contiene <code><var>searchString</var></code>.</dd>
 <dt>{{jsxref("String.prototype.endsWith()", "String.prototype.endsWith(<var>searchString</var>[, <var>length</var>])")}}</dt>
 <dd>Determina si una cadena termina con los caracteres de la cadena <code><var>searchString</var></code>.</dd>
 <dt>{{jsxref("String.prototype.indexOf()", "String.prototype.indexOf(<var>searchValue</var>[, <var>fromIndex</var>])")}}</dt>
 <dd>Devuelve el índice dentro del objeto {{jsxref("String")}} llamador de la primera aparición de <code><var>searchValue</var></code>, o <code>-1</code> si no lo encontró.</dd>
 <dt>{{jsxref("String.prototype.lastIndexOf()", "String.prototype.lastIndexOf(<var>searchValue</var>[, <var>fromIndex</var>])")}}</dt>
 <dd>Devuelve el índice dentro del objeto {{jsxref("String")}} llamador de la última aparición de <code><var>searchValue</var></code>, o <code>-1</code> si no lo encontró.</dd>
 <dt>{{jsxref("String.prototype.localeCompare()", "String.prototype.localeCompare(<var>compareString</var>[, <var>locales</var>[, <var>options</var>]])")}}</dt>
 <dd>Devuelve un número que indica si la cadena de referencia <code><var>compareString</var></code> viene antes, después o es equivalente a la cadena dada en el orden de clasificación.</dd>
 <dt>{{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}</dt>
 <dd>Se utiliza para hacer coincidir la expresión regular <code><var>regexp</var></code> con una cadena.</dd>
 <dt>{{jsxref("String.prototype.matchAll()", "String.prototype.matchAll(<var>regexp</var>)")}}</dt>
 <dd>Devuelve un iterador de todas las coincidencias de <code><var>regexp</var></code>.</dd>
 <dt>{{jsxref("String.prototype.normalize()", "String.prototype.normalize([<var>form</var>])")}}</dt>
 <dd>Devuelve la forma de normalización Unicode del valor de la cadena llamada.</dd>
 <dt>{{jsxref("String.prototype.padEnd()", "String.prototype.padEnd(<var>targetLength</var>[, <var>padString</var>])")}}</dt>
 <dd>Rellena la cadena actual desde el final con una cadena dada y devuelve una nueva cadena de longitud <code><var>targetLength</var></code>.</dd>
 <dt>{{jsxref("String.prototype.padStart()", "String.prototype.padStart(<var>targetLength</var>[, <var>padString</var>])")}}</dt>
 <dd>Rellena la cadena actual desde el principio con una determinada cadena y devuelve una nueva cadena de longitud <code><var>targetLength</var></code>.</dd>
 <dt>{{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}</dt>
 <dd>Devuelve una cadena que consta de los elementos del objeto repetidos <code><var>count</var></code> veces.</dd>
 <dt>{{jsxref("String.prototype.replace()" , "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
 <dd>Se usa para reemplazar ocurrencias de <code><var>searchFor</var></code> usando <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> puede ser una cadena o expresión regular, y <code><var>replaceWith</var></code> puede ser una cadena o función.</dd>
 <dt>{{jsxref("String.prototype.replaceAll()", "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
 <dd>Se utiliza para reemplazar todas las apariciones de <code><var>searchFor</var></code> usando <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> puede ser una cadena o expresión regular, y <code><var>replaceWith</var></code> puede ser una cadena o función.</dd>
 <dt>{{jsxref("String.prototype.search()", "String.prototype.search(<var>regexp</var>)")}}</dt>
 <dd>Busca una coincidencia entre una expresión regular <code><var>regexp</var></code> y la cadena llamadora.</dd>
 <dt>{{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[, <var>endIndex</var>])")}}</dt>
 <dd>Extrae una sección de una cadena y devuelve una nueva cadena.</dd>
 <dt>{{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var>[, <var>limit</var>] ])")}}</dt>
 <dd>Devuelve un arreglo de cadenas pobladas al dividir la cadena llamadora en las ocurrencias de la subcadena <code><var>sep</var></code>.</dd>
 <dt>{{jsxref("String.prototype.startsWith()", "String.prototype.startsWith(<var>searchString</var>[, <var>length</var>])")}}</dt>
 <dd>Determina si la cadena llamadora comienza con los caracteres de la cadena <code><var>searchString</var></code>.</dd>
 <dt>{{jsxref("String.prototype.substr()")}}</dt>
 <dd>Devuelve los caracteres en una cadena que comienza en la ubicación especificada hasta el número especificado de caracteres.</dd>
 <dt>{{jsxref("String.prototype.substring()", "String.prototype.substring(<var>indexStart</var>[, <var>indexEnd</var>])")}}</dt>
 <dd>Devuelve una nueva cadena que contiene caracteres de la cadena llamadora de (o entre) el índice (o indeces) especificados.</dd>
 <dt>{{jsxref("String.prototype.toLocaleLowerCase()", "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}</dt>
 <dd>
 <p>Los caracteres dentro de una cadena se convierten a minúsculas respetando la configuración regional actual.</p>

 <p>Para la mayoría de los idiomas, devolverá lo mismo que {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.</p>
 </dd>
 <dt>{{jsxref("String.prototype.toLocaleUpperCase()", "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}</dt>
 <dd>
 <p>Los caracteres dentro de una cadena se convierten a mayúsculas respetando la configuración regional actual.</p>

 <p>Para la mayoría de los idiomas, devolverá lo mismo que {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.</p>
 </dd>
 <dt>{{jsxref("String.prototype.toLowerCase()")}}</dt>
 <dd>Devuelve el valor de la cadena llamadora convertido a minúsculas.</dd>
 <dt>{{jsxref("String.prototype.toString()")}}</dt>
 <dd>Devuelve una cadena que representa el objeto especificado. Redefine el método {{jsxref("Object.prototype.toString()")}}.</dd>
 <dt>{{jsxref("String.prototype.toUpperCase()")}}</dt>
 <dd>Devuelve el valor de la cadena llamadora convertido a mayúsculas.</dd>
 <dt>{{jsxref("String.prototype.trim()")}}</dt>
 <dd>Recorta los espacios en blanco desde el principio y el final de la cadena. Parte del estándar ECMAScript 5.</dd>
 <dt>{{jsxref("String.prototype.trimStart()")}}</dt>
 <dd>Recorta los espacios en blanco desde el principio de la cadena.</dd>
 <dt>{{jsxref("String.prototype.trimEnd()")}}</dt>
 <dd>Recorta los espacios en blanco del final de la cadena.</dd>
 <dt>{{jsxref("String.prototype.valueOf()")}}</dt>
 <dd>Devuelve el valor primitivo del objeto especificado. Redefine el método {{jsxref("Object.prototype.valueOf()")}}.</dd>
 <dt>{{jsxref("String.prototype.@@iterator()")}}</dt>
 <dd>Devuelve un nuevo objeto <code>Iterator</code> que itera sobre los puntos de código de un valor de cadena, devolviendo cada punto de código como un valor de cadena.</dd>
</dl>

<h2 id="Métodos_de_contenedor_HTML">Métodos de contenedor HTML</h2>

<div>
<div class="blockIndicator note">
<p><strong>Desaprobado. Evita estos métodos.</strong></p>

<p>Son de uso limitado, ya que proporcionan solo un subconjunto de las etiquetas y atributos HTML disponibles.</p>
</div>

<dl>
 <dt>{{jsxref("String.prototype.anchor()")}}</dt>
 <dd>{{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (hipertexto destino)</dd>
 <dt>{{jsxref("String.prototype.big()")}}</dt>
 <dd>{{HTMLElement("big")}}</dd>
 <dt>{{jsxref("String.prototype.blink()")}}</dt>
 <dd>{{HTMLElement("blink")}}</dd>
 <dt>{{jsxref("String.prototype.bold()")}}</dt>
 <dd>{{HTMLElement("b")}}</dd>
 <dt>{{jsxref("String.prototype.fixed()")}}</dt>
 <dd>{{HTMLElement("tt")}}</dd>
 <dt>{{jsxref("String.prototype.fontcolor()")}}</dt>
 <dd>{{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}</dd>
 <dt>{{jsxref("String.prototype.fontsize()")}}</dt>
 <dd>{{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}</dd>
 <dt>{{jsxref("String.prototype.italics()")}}</dt>
 <dd>{{HTMLElement("i")}}</dd>
 <dt>{{jsxref("String.prototype.link()")}}</dt>
 <dd>{{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (enlace a URL)</dd>
 <dt>{{jsxref("String.prototype.small()")}}</dt>
 <dd>{{HTMLElement("small")}}</dd>
 <dt>{{jsxref("String.prototype.strike()")}}</dt>
 <dd>{{HTMLElement("strike")}}</dd>
 <dt>{{jsxref("String.prototype.sub()")}}</dt>
 <dd>{{HTMLElement("sub")}}</dd>
 <dt>{{jsxref("String.prototype.sup()")}}</dt>
 <dd>{{HTMLElement("sup")}}</dd>
</dl>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Conversión_de_cadenas">Conversión de cadenas</h3>

<p>Es posible usar <code>String</code> como una alternativa más confiable de {{jsxref("String.prototype.toString()", "toString()")}}, ya que funciona cuando se usa en {{jsxref( "null")}}, {{jsxref("undefined")}} y en {{jsxref("Symbol", "símbolos")}}. Por ejemplo:</p>

<pre class="brush: js notranslate">let outputStrings = []
for (let i = 0, n = inputValues.length; i &lt; n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string-objects', 'String')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>



<p>{{Compat("javascript.builtins.String")}}</p>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li><a href="/es/docs/Web/JavaScript/Guide/Text_formatting">Formato de texto en la Guía de JavaScript</a></li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{domxref("DOMString")}}</li>
 <li><a href="/es/Add-ons/Code_snippets/StringView"><code>StringView</code> — una representación similar a C de cadenas basada en arreglos tipados</a></li>
 <li><a href="/es/docs/Web/API/DOMString/Binary">Cadenas binarias</a></li>
</ul>
