---
title: Características en desuso y obsoletas
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Deprecated
  - JavaScript
  - Obsolete
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
original_slug: Web/JavaScript/Referencia/Características_Desaprobadas
---
<p>{{JsSidebar("More")}}</p>


<p>Esta página enumera las características de JavaScript que están en desuso (es decir, todavía están disponibles pero se planea eliminarlas) y obsoletas (es decir, que ya no se pueden usar).</p>

<h2 id="Características_en_desuso">Características en desuso</h2>

<p>Estas características desaconsejadas aún se pueden usar, pero se deben usar con precaución porque se espera que se eliminen por completo en el futuro. Deberías trabajar para sustituirlas con las versiones recomendadas en tu código.</p>

<h3 id="Propiedades_de_RegExp">Propiedades de RegExp</h3>

<p>las siguientes propiedades están en desuso. Esto no afecta su uso en el {{jsxref("String.replace", "reemplazo de cadenas", "", 1)}}:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propiedad</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
   <td>
    <p>Coincidencias de subcadenas entre paréntesis, si las hay.<br>
     <strong>Precaución:</strong> El uso de estas propiedades puede generar problemas, ya que las extensiones del navegador pueden modificarlas. ¡Evítalas!</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "$_")}}</td>
   <td>Consulta <code>entrada</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "$*")}}</td>
   <td>Consulta <code>multiline</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
   <td>Consulta <code>lastMatch</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastParen", "$+")}}</td>
   <td>Consulta <code>lastParen</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
   <td>Consulta <code>leftContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
   <td>Consulta <code>rightContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "input")}}</td>
   <td>La cadena contra la que se compara una expresión regular.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
   <td>Los últimos caracteres coincidentes.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
   <td>La última coincidencia de subcadena entre paréntesis, si la hubiera.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
   <td>La subcadena que precede a la coincidencia más reciente.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
   <td>La subcadena que sigue a la coincidencia más reciente.</td>
  </tr>
 </tbody>
</table>

<p>Las siguientes ahora son propiedades de instancias de <code>RegExp</code>, ya no del objeto <code>RegExp</code>:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propiedad</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.global", "global")}}</td>
   <td>Si se debe probar o no la expresión regular con todas las posibles coincidencias en una cadena, o solo con la primera.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.ignoreCase", "ignoreCase")}}</td>
   <td>Si se deben o no ignorar las mayúsculas/minúsculas al intentar una coincidencia en una cadena.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastIndex", "lastIndex")}}</td>
   <td>El índice en el que comenzará la siguiente coincidencia.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "multiline")}}</td>
   <td>Si buscar o no en cadenas de varias líneas.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.source", "source")}}</td>
   <td>El texto del patrón.</td>
  </tr>
 </tbody>
</table>

<h3 id="Métodos_RegExp">Métodos RegExp</h3>

<ul>
 <li>El método {{jsxref("RegExp.compile", "compile()")}} está en desuso.</li>
 <li>El método <code>valueOf</code> ya no está especializado para <code>RegExp</code>. Usa {{jsxref ("Object.valueOf()")}}.</li>
</ul>

<h3 id="Propiedades_de_función">Propiedades de función</h3>

<ul>
 <li>Las propiedades {{jsxref("Global_Objects Function/caller", "caller")}} y {{jsxref("Global_Objects/Function/argument", "argument")}} están obsoletas porque filtran la función llamadora. En lugar de la propiedad arguments, debes usar el objeto {{jsxref("Functions/arguments", "arguments")}} dentro de los cierres de funciones.</li>
</ul>

<h3 id="Generador_heredado">Generador heredado</h3>

<ul>
 <li>La {{jsxref("Statements/Legacy_generator_function", "Declaración de función del generador heredado")}} y {{jsxref("Operators/Legacy_generator_function", "Expresión de función del generador heredado")}} están en desuso. En su lugar usa {{jsxref("Statements/function*", "declaraciones function*")}} y {{jsxref ("Operators/function *", "expresión function*")}}.</li>
 <li>{{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} y {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} están en desuso.</li>
</ul>

<h3 id="Iterador">Iterador</h3>

<ul>
 <li>{{jsxref("Global_Objects/StopIteration", "StopIteration")}} está en desuso.</li>
 <li>{{jsxref("Global_Objects/Iterator", "Iterator")}} está en desuso.</li>
</ul>

<h3 id="Métodos_de_objeto">Métodos de objeto</h3>

<ul>
 <li>{{jsxref("Object.watch", "watch")}} y {{jsxref("Object.unwatch", "unwatch")}} están en desuso. En su lugar usa {{jsxref("Proxy")}}.</li>
 <li><code>__iterator__</code> está en desuso.</li>
 <li>{{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} está en desuso. En su lugar usa {{jsxref("Proxy")}}.</li>
</ul>

<h3 id="Métodos_de_Date">Métodos de <code>Date</code></h3>

<ul>
 <li>{{jsxref("Global_Objects/Date/getYear", "getYear")}} y {{jsxref("Global_Objects/Date/setYear", "setYear")}} se ven afectados por el problema del año 2000 y se han subsumido por {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} y {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.</li>
 <li>En nuevo código, debes usar {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} en lugar del método en desuso {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}}.</li>
 <li>{{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} está en desuso.</li>
</ul>

<h3 id="Funciones">Funciones</h3>

<ul>
 <li>Las {{jsxref ("Operadores/Expression_closures", "expresiones closure", "", 1)}} están en desuso. En su lugar, utiliza {{jsxref("Operators/function", "funciones")}} o {{jsxref("Functions/Arrow_functions", "funciones de flecha", "", 1)}} normales.</li>
</ul>

<h3 id="Proxy">Proxy</h3>

<ul>
 <li><a href="/es/docs/Archive/Web/Old_Proxy_API">Proxy.create</a> y <a href="/es/docs/Archive/Web/Old_Proxy_API">Proxy.createFunction</a> están en desuso. En su lugar usa {{jsxref("Proxy")}}.</li>
 <li>Las siguientes trampas están obsoletas:
  <ul>
   <li><code>hasOwn</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=980565">bug 980565</a>, Firefox 33).</li>
   <li><code>getEnumerablePropertyKeys</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=783829">bug 783829</a>, Firefox 37)</li>
   <li><code>getOwnPropertyNames</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1007334">bug 1007334</a>, Firefox 33)</li>
   <li><code>keys</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1007334">bug 1007334</a>, Firefox 33)</li>
  </ul>
 </li>
</ul>

<h3 id="Secuencias_de_escape">Secuencias de escape</h3>

<ul>
 <li>Las secuencias de escape octales (\ seguida de uno, dos o tres dígitos octales) están en desuso en los literales de cadenas y expresiones regulares.</li>
 <li>Las funciones {{jsxref("Global_Objects/escape", "escape")}} y {{jsxref("Global_Objects/unescape", "unescape")}} están en desuso. Usa {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} o {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} para codificar y decodificar secuencias de escape para caracteres especiales.</li>
</ul>

<h3 id="Métodos_de_cadena">Métodos de cadena</h3>

<ul>
 <li><a href="https://developer.mozilla.org/es/docs/tag/HTML%20wrapper%20methods">Métodos de envoltura HTML</a> tal como {{jsxref("String.prototype.fontsize")}} y {{jsxref("String.prototype.big")}}.</li>
 <li>{{jsxref("String.prototype.quote")}} se eliminó desde Firefox 37.</li>
 <li>el parámetro no estándar <code>flags</code> en {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}} y {{jsxref("String.prototype.replace ")}} están en desuso.</li>
 <li>{{jsxref("String.prototype.substr")}} probablemente no se eliminará pronto, pero está definido en el <a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr" rel="noopener">Anexo B</a> del estándar ECMA-262, cuya <a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers">introducción</a> dice: "... Los programadores no deben usar o asumir la existencia de estas características y comportamientos al escribir un nuevo código ECMAScript. ..."</li>
</ul>

<h2 id="Características_obsoletas">Características obsoletas</h2>

<p>Estas características obsoletas se han eliminado por completo de JavaScript y ya no se pueden utilizar a partir de la versión indicada de JavaScript.</p>

<h3 id="Objeto">Objeto</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propiedad</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/count", "__count__")}}</td>
   <td>Devuelve el número de propiedades enumerables directamente en un objeto definido por el usuario.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/Parent", "__parent__")}}</td>
   <td>Apunta al contexto de un objeto.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}}</td>
   <td>Evalúa una cadena de código JavaScript en el contexto del objeto especificado.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.observe()")}}</td>
   <td>Observar de forma asincrónica los cambios en un objeto.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.unobserve()")}}</td>
   <td>Elimina observadores.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.getNotifier()")}}</td>
   <td>Crea un objeto que permite desencadenar sintéticamente un cambio.</td>
  </tr>
 </tbody>
</table>

<h3 id="Función">Función</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propiedad</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Function/arity", "arity")}}</td>
   <td>Número de argumentos formales.</td>
  </tr>
 </tbody>
</table>

<h3 id="Array">Array</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td>Propiedad</td>
   <td>Descripción</td>
  </tr>
  <tr>
   <td>{{jsxref("Array.observe()")}}</td>
   <td>Observación asincrónica de cambios en los arreglos.</td>
  </tr>
  <tr>
   <td>{{jsxref("Array.unobserve()")}}</td>
   <td>Elimina observadores.</td>
  </tr>
 </tbody>
</table>

<h3 id="Número">Número</h3>

<ul>
 <li>{{jsxref("Number.toInteger()")}}</li>
</ul>

<h3 id="ParallelArray">ParallelArray</h3>

<ul>
 <li>{{jsxref("ParallelArray")}}</li>
</ul>

<h3 id="Declaraciones">Declaraciones</h3>

<ul>
 <li>{{jsxref("Statements/for_each...in", "for each...in")}} está obsoleta. En su lugar utiliza {{jsxref("Statements/for...of", "for...of")}}.</li>
 <li>La desestructuración {{jsxref("Statements/for...in", "for...in")}} está obsoleta. En su lugar utiliza {{jsxref("Statements/for...of", "for...of")}}.</li>
 <li>los bloques let y la expresiones let están obsoletas.</li>
</ul>

<h3 id="E4X">E4X</h3>

<p>Consulta <a href="/es/docs/Archive/Web/E4X">E4X</a> para obtener más información.</p>

<h3 id="Variables_nítidas">Variables nítidas</h3>

<p>Consulta <a href="/es/docs/Archive/Web/Sharp_variables_in_JavaScript">Variables nítidas en JavaScript</a> para obtener más información.</p>
