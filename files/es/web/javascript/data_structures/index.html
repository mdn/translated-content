---
title: Tipos de datos y estructuras en JavaScript
slug: Web/JavaScript/Data_structures
tags:
  - JavaScript
  - Novato
  - Principiante
  - Tipado
translation_of: Web/JavaScript/Data_structures
---
<div>{{jsSidebar("More", "Más")}}</div>

<p>Todos los lenguajes de programación tienen estructuras de datos integradas, pero estas a menudo difieren de un lenguaje a otro. Este artículo intenta enumerar las estructuras de datos integradas disponibles en JavaScript y las propiedades que tienen. Estas se pueden utilizar para construir otras estructuras de datos. Siempre que es posible, se hacen comparaciones con otros lenguajes.</p>

<h2 id="Tipado_dinámico">Tipado dinámico</h2>

<p>JavaScript es un lenguaje <em>débilmente tipado</em> y <em>dinámico</em>. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:</p>

<pre class="brush: js notranslate">let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true;  // foo ahora es un booleano
</pre>

<h2 id="Estructuras_y_tipos_de_datos">Estructuras y tipos de datos</h2>

<p>El último estándar ECMAScript define nueve tipos:</p>

<ul>
 <li>Seis <strong>tipos de datos</strong> {{Glossary("Primitive", "primitivos")}}, controlados por el {{jsxref("Operators/typeof", "operador typeof")}}

  <ul>
   <li>{{Glossary("Undefined")}}: <code>typeof instance === "undefined"</code></li>
   <li>{{Glossary("Boolean")}}: <code>typeof instance === "boolean"</code></li>
   <li>{{Glossary("Number")}}: <code>typeof instance === "number"</code></li>
   <li>{{Glossary("String")}}: <code>typeof instance === "string"</code></li>
   <li>{{Glossary("BigInt")}}: <code>typeof instance === "bigint"</code></li>
   <li>{{Glossary("Symbol")}}: <code>typeof instance === "symbol"</code></li>
  </ul>
 </li>
 <li>{{Glossary("Null")}}: <code>typeof instance === "object"</code>. Tipo {{Glossary("Primitive", "primitivo")}} especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra <code>null</code>;</li>
 <li>{{Glossary("Object")}}: <code>typeof instance === "object"</code>. Tipo estructural especial que no es de datos pero para cualquier instancia de objeto <a href="/es/docs/Learn/JavaScript/Objects#The_Constructor">construido</a> que también se utiliza como estructuras de datos: new {{jsxref("Object")}}, new {{jsxref("Array")}}, new {{jsxref("Map")}}, new {{jsxref("Set")}}, new {{jsxref("WeakMap")}}, new {{jsxref("WeakSet")}}, new {{jsxref("Date")}} y casi todo lo hecho con la <a href="/es/docs/Web/JavaScript/Reference/Operators/new">palabra clave <code>new</code></a>;</li>
 <li>{{Glossary("Function")}}<span>: una estructura sin datos, aunque también responde al operador <code>typeof</code>: </span><code>typeof instance === "function"</code>. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor <code>Object</code>.</li>
</ul>

<p>Ten en cuenta que el único propósito valioso del uso del operador <code>typeof</code> es verificar el tipo de dato. Si deseamos verificar cualquier Tipo Estructural derivado de <code>Object</code>, no tiene sentido usar <code>typeof</code> para eso, ya que siempre recibiremos "<code>object</code>". La forma correcta de comprobar qué tipo de Objeto estamos usando es la palabra clave {{jsxref("Operators/instanceof", "instanceof")}}. Pero incluso en ese caso, puede haber conceptos erróneos.</p>

<h2 id="Valores_primitivos">Valores primitivos</h2>

<p>Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "<em>valores primitivos</em>".</p>

<h3 id="Tipo_Boolean">Tipo <code>Boolean</code></h3>

<p><code>Boolean</code> representa una entidad lógica y puede tener dos valores: <code>true</code> y <code>false</code>. Consulta {{Glossary("Boolean")}} y {{jsxref("Boolean")}} para obtener más detalles.</p>

<h3 id="Tipo_Null">Tipo <code>Null</code></h3>

<p>El tipo <code>Null</code> tiene exactamente un valor: <code>null</code>. Consulta {{jsxref("null")}} y {{Glossary("Null")}} para obtener más detalles.</p>

<h3 id="Tipo_Undefined">Tipo <code>Undefined</code></h3>

<p>Una variable a la que no se le ha asignado un valor tiene el valor <code>undefined</code>. Consulta {{jsxref("undefined")}} y {{Glossary("Undefined")}} para obtener más detalles.</p>

<h3 id="Tipo_Number">Tipo <code>Number</code></h3>

<p>ECMAScript tiene dos tipos numéricos integrados: <strong><code>Number</code></strong> y <strong><code>BigInt</code></strong> (ve más abajo).</p>

<p>El tipo <code>Number</code> es un <a href="https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisión">valor en formato binario de 64 bits de doble precisión IEEE 754</a> (números entre -(2<sup>53</sup> - 1) y 2<sup>53</sup> - 1). Además de representar números de punto flotante, el tipo <code>Number</code> tiene tres valores simbólicos: <code>+Infinity</code>, <code>-Infinity</code> y {{jsxref("NaN")}} ("<strong>N</strong>ot a <strong>N</strong>umber" o No es un número).</p>

<p>Para verificar el valor disponible más grande o el valor más pequeño disponible dentro de {{jsxref("Infinity", "±Infinity")}}, puedes usar las constantes {{jsxref("Number.MAX_VALUE")}} o {{jsxref("Number.MIN_VALUE")}}.</p>

<div class="blockIndicator note">
<p><strong>A partir de ECMAScript 2015</strong>, también puedes comprobar si un número está en el rango de números de punto flotante de doble precisión mediante {{jsxref("Number.isSafeInteger()")}} así como {{jsxref("Number.MAX_SAFE_INTEGER")}} y {{jsxref("Number.MIN_SAFE_INTEGER")}}.</p>

<p>Más allá de este rango, los enteros en JavaScript ya no son seguros y serán una aproximación de punto flotante de doble precisión del valor.</p>
</div>

<p>El tipo <code>number</code> solo tiene un entero con dos representaciones: <code>0</code> se representa como <code>-0</code> y <code>+0</code>. (<code>0</code> es un alias de <code>+0</code>).</p>

<p>En la praxis, esto casi no tiene impacto. Por ejemplo, <code>+0 === -0</code> es <code>true</code>. Sin embargo, puedes notar esto cuando divides entre cero:</p>

<pre class="brush: js notranslate">&gt; 42 / +0
Infinity
&gt; 42 / -0
-Infinity
</pre>

<p>Aunque un <code>number</code> a menudo representa solo su valor, JavaScript proporciona {{jsxref("Operators/Bitwise_Operators", "operadores binarios (bitwise)")}}.</p>

<div class="blockIndicator note">
<p><strong>Precaución</strong>: Aunque los operadores bit a bit se <em>pueden</em> usar para representar múltiples valores Booleanos dentro de un solo número usando el <a class="external" href="https://es.wikipedia.org/wiki/Máscara_(informática)">enmascaramiento de bits</a>, esto generalmente se considera una mala práctica. JavaScript ofrece otros medios para representar un conjunto de valores booleanos (como un arreglo de valores booleanos o un objeto con valores booleanos asignados a propiedades con nombre). El enmascaramiento de bits también tiende a hacer que el código sea más difícil de leer, comprender y mantener.</p>
</div>

<p>Posiblemente sea necesario utilizar estas técnicas en entornos muy restringidos, como cuando se intenta hacer frente a las limitaciones del almacenamiento local, o en casos extremos (como cuando cada bit de la red cuenta). Esta técnica solo se debe considerar cuando sea la última medida que se pueda tomar para optimizar el tamaño.</p>

<h3 id="Tipo_BigInt">Tipo <code>BigInt</code></h3>

<p>El tipo {{jsxref("BigInt")}} es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con <code>BigInt</code>s, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para <code>Number</code>s.</p>

<p>Un <code>BigInt</code> se crea agregando <code>n</code> al final de un número entero o llamando al constructor.</p>

<p>Puedes obtener el valor más seguro que se puede incrementar con <code>Number</code>s utilizando la constante {{jsxref("Number.MAX_SAFE_INTEGER")}}. Con la introducción de <code>BigInt</code>s, puedes operar con números más allá de {{jsxref("Number.MAX_SAFE_INTEGER")}}.</p>

<p>Este ejemplo demuestra, dónde, incrementando el {{jsxref("Number.MAX_SAFE_INTEGER")}} devuelve el resultado esperado:</p>

<pre class="brush: js notranslate">&gt; const x = 2n ** 53n;
9007199254740992n
&gt; const y = x + 1n;
9007199254740993n
</pre>

<p>Puedes utilizar los operadores <code>+</code>, <code>*</code>, <code>-</code>, <code>**</code> y <code>%</code> con <code>BigInt</code>s, igual que con <code>Number</code>s. Un <code>BigInt</code> no es estrictamente igual a un <code>Number</code>, pero lo es en términos generales.</p>

<p>Un <code>BigInt</code> se comporta como un <code>Number</code> en los casos en que se convierte a <code>Boolean</code>: <code>if</code>, <code>||</code>, <code>&amp;&amp;</code>, <code>Boolean</code>, <code>!</code>.</p>

<p>Los <code>BigInt</code> no se pueden utilizar indistintamente con los <code>Number</code>. En su lugar, se lanzará un {{jsxref("TypeError")}}.</p>

<h3 id="Tipo_String">Tipo <code>String</code></h3>

<p>El tipo {{jsxref("String")}} de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del <code>String</code> ocupa una posición en la cadena. El primer elemento está en el índice <code>0</code>, el siguiente en el índice <code>1</code>, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.</p>

<p>A diferencia de algunos lenguajes de programación (tal como C), las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.</p>

<p>Sin embargo, todavía es posible crear otra cadena basada en una operación en la cadena original. Por ejemplo:</p>

<ul>
 <li>Una subcadena de la original seleccionando letras individuales o usando {{jsxref("String.substr()")}}.</li>
 <li>Una concatenación de dos cadenas usando el operador de concatenación (<code>+</code>) o {{jsxref("String.concat()")}}.</li>
</ul>

<h4 id="¡Ten_cuidado_de_no_convertir_a_cadenas_tu_código!">¡Ten cuidado de no "convertir a cadenas" tu código!</h4>

<p>Puede resultar tentador utilizar cadenas para representar datos complejos. Hacer esto viene con beneficios a corto plazo:</p>

<ul>
 <li>Es fácil construir cadenas complejas con concatenación.</li>
 <li>Las cadenas son fáciles de depurar (lo que ves impreso siempre es lo que está en la cadena).</li>
 <li>Las cadenas son el denominador común de muchas APIs (<a href="/es/docs/Web/API/HTMLInputElement" title="HTMLInputElement">campos de entrada —<code>input</code>s—</a>, <a href="/es/docs/Storage" title="Storage">valores de almacenamiento local</a>, respuestas <a href="/es/docs/Web/API/XMLHttpRequest" title="Usa objetos XMLHttpRequest (XHR) para interactuar con servidores. Puedes recuperar datos de una URL sin tener que actualizar la página completa. Esto permite que una página web actualice solo parte de su contenido sin interrumpir lo que el usuario está haciendo."><code>XMLHttpRequest</code></a> cuando se usa <code>responseText</code>, etc.) y puede resultar tentador trabajar solo con cadenas.</li>
</ul>

<p>Con las convenciones, es posible representar cualquier estructura de datos en una cadena. Esto no la convierte en una buena idea. Por ejemplo, con un separador, se podría emular una lista (mientras que un arreglo de JavaScript sería más adecuado). Desafortunadamente, cuando el separador se usa en uno de los elementos de la "lista", la lista se rompe. Se puede elegir un caracter de escape, etc. Todo esto requiere convenciones y crea una innecesaria carga de mantenimiento.</p>

<p>Utiliza cadenas para datos textuales. Cuando quieras representar datos complejos, <em>procesa</em> las cadenas y usa la abstracción adecuada.</p>

<h3 id="Tipo_Symbol">Tipo <code>Symbol</code></h3>

<p>Un símbolo es un valor primitivo <strong>único</strong> e <strong>inmutable</strong> y se puede utilizar como clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de programación, los símbolos se denominan "átomos".</p>

<p>Para obtener más detalles, consulta {{Glossary("Symbol")}} y el contenedor de objetos {{jsxref("Symbol")}} en JavaScript.</p>

<h2 id="Objetos">Objetos</h2>

<p>En ciencias de la computación, un objeto es un valor en la memoria al que posiblemente hace referencia un {{Glossary("Identifier", "identificador")}}.</p>

<h3 id="Propiedades">Propiedades</h3>

<p>En JavaScript, los objetos se pueden ver como una colección de propiedades. Con la <a href="/es/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Object_literals">sintaxis de objeto literal</a>, se inicia un conjunto limitado de propiedades; luego se pueden agregar y eliminar propiedades. Los valores de propiedad pueden ser valores de cualquier tipo, incluidos otros objetos, lo que permite construir estructuras de datos complejas. Las propiedades se identifican mediante valores <em>clave</em>. Un valor <em>clave</em> es un valor de cadena o un símbolo.</p>

<p>Hay dos tipos de propiedades de objeto que tienen ciertos atributos: la propiedad <em>data</em> y la propiedad <em>accessor</em>.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Cada propiedad tiene <em>atributos correspondientes</em>. Los atributos, internamente los utiliza el motor JavaScript, por lo que no puedes acceder a ellos directamente. Es por eso que los atributos se enumeran entre corchetes dobles, en lugar de simples.</p>

<p>Consulta {{jsxref("Object.defineProperty()")}} para obtener más información.</p>
</div>

<h4 id="Propiedad_Data">Propiedad <code>Data</code></h4>

<p>Asocia una clave con un valor y tiene los siguientes atributos:</p>

<table class="standard-table">
 <caption>Atributos de una propiedad <code>data</code></caption>
 <thead>
  <tr>
   <th scope="col">Atributo</th>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
   <th scope="col">Valor predeterminado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>[[Value]]</td>
   <td>Cualquier tipo de JavaScript</td>
   <td>El valor recuperado por un captador de acceso <code>get</code> a la propiedad.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Writable]]</td>
   <td><code>Boolean</code></td>
   <td>Si es <code>false</code>, el [[Value]] de la propiedad no se puede cambiar.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td><code>Boolean</code></td>
   <td>
    <p>Si es <code>true</code>, la propiedad se enumerará en bucles <a href="/es/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a>.<br>
     Consulta también <a href="/es/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerabilidad y posesión de propiedades</a>.</p>
   </td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td><code>Boolean</code></td>
   <td>Si es <code>false</code>, la propiedad no se puede eliminar, no se puede cambiar a una propiedad de acceso descriptor y los atributos que no sean [[Value]] y [[Writable]] no se pueden cambiar.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Atributos obsoletos (a partir de ECMAScript 3, renombrado en ECMAScript 5)</caption>
 <thead>
  <tr>
   <th scope="col">Atributo</th>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Read-only</code></td>
   <td><code>Boolean</code></td>
   <td>Estado inverso del atributo ES5 [[Writable]].</td>
  </tr>
  <tr>
   <td><code>DontEnum</code></td>
   <td><code>Boolean</code></td>
   <td>Estado inverso del atributo ES5 [[Enumerable]].</td>
  </tr>
  <tr>
   <td><code>DontDelete</code></td>
   <td><code>Boolean</code></td>
   <td>Estado inverso del atributo ES5 [[Configurable]].</td>
  </tr>
 </tbody>
</table>

<h4 id="Propiedad_Accessor">Propiedad <code>Accessor</code></h4>

<p>Asocia una clave con una de las dos funciones de acceso (<code>get</code> y <code>set</code>) para recuperar o almacenar un valor y tiene los siguientes atributos:</p>

<table class="standard-table">
 <caption>Atributos de una propiedad <code>accessor</code></caption>
 <thead>
  <tr>
   <th scope="col">Atributo</th>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
   <th scope="col">Valor predeterminado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>[[Get]]</td>
   <td>Objeto <code>Function</code> o <code>undefined</code></td>
   <td>La función se llama con una lista de argumentos vacía y recupera el valor de la propiedad cada vez que se realiza un acceso al valor.<br>
    Consulta también <a href="/es/docs/Web/JavaScript/Reference/Operators/get"><code>get</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Set]]</td>
   <td>Objeto <code>Function</code> o <code>undefined</code></td>
   <td>La función se llama con un argumento que contiene el valor asignado y se ejecuta siempre que se intenta cambiar una propiedad específica.<br>
    Consulta también <a href="/es/docs/Web/JavaScript/Reference/Operators/set"><code>set</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td><code>Boolean</code></td>
   <td>Si es <code>true</code>, la propiedad se enumerará en bucles <a href="/es/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a>.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td><code>Boolean</code></td>
   <td>Si es <code>false</code>, la propiedad no se puede eliminar y no se puede cambiar a una propiedad de datos.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Objetos_y_funciones_normales">Objetos y funciones "normales"</h3>

<p>Un objeto JavaScript es una asociación entre <em>claves</em> y <em>valores</em>. Las claves son cadenas (o {{jsxref("Symbol")}}s), y los <em>valores</em> pueden ser cualquier cosa. Esto hace que los objetos se ajusten naturalmente a <a class="external" href="http://en.wikipedia.org/wiki/Hash_table"><code>hashmaps</code></a>.</p>

<p>Las funciones son objetos regulares con la capacidad adicional de ser <em>invocables</em>.</p>

<h3 id="Fechas">Fechas</h3>

<p>Al representar fechas, la mejor opción es utilizar la utilidad <a href="/es/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code> incorporada</a> en JavaScript.</p>

<h3 id="Colecciones_indexadas_arreglos_y_arreglos_tipados">Colecciones indexadas: arreglos y arreglos tipados</h3>

<p><a href="/es/docs/JavaScript/Reference/Global_Objects/Array" title="Array">Los arreglos</a> son objetos regulares para los que existe una relación particular entre las propiedades de clave entera y la Propiedad <code>length</code>.</p>

<p>Además, los arreglos heredan de <code>Array.prototype</code>, que les proporciona un puñado de convenientes métodos para manipular arreglos. Por ejemplo, <a href="/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="es/JavaScript/Reference/Global_Objects/Array/indexOf"><code>indexOf</code></a> (buscando un valor en el arreglo) o <a href="/es/docs/JavaScript/Reference/Global_Objects/Array/push" title="es/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a> (agrega un elemento al arreglo), y así sucesivamente. Esto hace que el <code>Array</code> sea un candidato perfecto para representar listas o conjuntos.</p>

<p>Los <a href="/es/docs/Web/JavaScript/Typed_arrays">Arreglos tipados</a> son nuevos en JavaScript con ECMAScript 2015 y presentan una vista similar a un arreglo de un búfer de datos binarios subyacente. La siguiente tabla ayuda a determinar los tipos de datos equivalentes en C:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">Tipo</th>
   <th class="header" scope="col">Intervalo de valores</th>
   <th class="header" scope="col">Tamaño en bytes</th>
   <th class="header" scope="col">Descripción</th>
   <th class="header" scope="col">Tipo de IDL web</th>
   <th class="header" scope="col">Tipo C equivalente</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Int8Array")}}</td>
   <td><code>-128</code> a <code>127</code></td>
   <td>1</td>
   <td>Dos enteros complementarios de 8 bits con signo</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8Array")}}</td>
   <td><code>0</code> a <code>255</code></td>
   <td>1</td>
   <td>Entero de 8-bit sin signo</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8ClampedArray")}}</td>
   <td><code>0</code> a <code>255</code></td>
   <td>1</td>
   <td>Entero de 8 bits sin signo (sujeto)</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int16Array")}}</td>
   <td><code>-32768</code> a <code>32767</code></td>
   <td>2</td>
   <td>Dos enteros complementarios de 16 bits con signo</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint16Array")}}</td>
   <td><code>0</code> a <code>65535</code></td>
   <td>2</td>
   <td>Entero de 16 bits sin signo</td>
   <td><code>Short sin signo</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int32Array")}}</td>
   <td><code>-2147483648</code> a <code>2147483647</code></td>
   <td>4</td>
   <td>dos enteros complementarios de 32 bits con signo</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint32Array")}}</td>
   <td><code>0</code> a <code>4294967295</code></td>
   <td>4</td>
   <td>Enteros de 32 bits sin signo</td>
   <td><code>long sin signo</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float32Array")}}</td>
   <td><code>1.2</code><span>×</span><code>10<sup>-38</sup></code> a <code>3.4</code><span>×</span><code>10<sup>38</sup></code></td>
   <td>4</td>
   <td>Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., <code>1.1234567</code>)</td>
   <td><code>float sin restricciones</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td><code>5.0</code><span>×</span><code>10<sup>-324</sup></code> a <code>1.8</code><span>×</span><code>10<sup>308</sup></code></td>
   <td>8</td>
   <td>Número de coma flotante IEEE de 64 bits (16 dígitos significativos, p. ej., <code>1.123...15</code>)</td>
   <td><code>doble sin restricciones</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigInt64Array")}}</td>
   <td><code>-2<sup>63</sup></code> a <code>2<sup>63</sup>-1</code></td>
   <td>8</td>
   <td>Dos enteros complementarios de 64 bits con signo</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (long long con signo)</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigUint64Array")}}</td>
   <td><code>0</code> a <code>2<sup>64</sup>-1</code></td>
   <td>8</td>
   <td>Entero de 64 bits sin signo</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (long long sin signo)</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Colecciones_con_clave_mapas_conjuntos_WeakMaps_WeakSets">Colecciones con clave: mapas, conjuntos, <code>WeakMaps</code>, <code>WeakSets</code></h3>

<p>Estas estructuras de datos, introducidas en ECMAScript Edition 6, toman referencias a objetos como claves. {{jsxref("Set")}} y {{jsxref("WeakSet")}} representan un conjunto de objetos, mientras que {{jsxref("Map")}} y {{jsxref("WeakMap")}} se asocian un valor a un objeto.</p>

<p>La diferencia entre <code>Map</code>s y <code>WeakMap</code>s es que en el primero, las claves de objeto se pueden enumerar. Esto permite la optimización de la recolección de basura en el último caso.</p>

<p>Se podrían implementar <code>Map</code>s y <code>Set</code>s en ECMAScript 5 puro. Sin embargo, dado que los objetos no se pueden comparar (en el sentido de <code>&lt;</code> "menor que", por ejemplo), el rendimiento de búsqueda sería necesariamente lineal. Las implementaciones nativas de ellos (incluidos los <code>WeakMap</code>s) pueden tener un rendimiento de búsqueda que es aproximadamente logarítmico al tiempo constante.</p>

<p>Por lo general, para vincular datos a un nodo DOM, se pueden establecer propiedades directamente en el objeto o usar atributos <code>data-*</code>. Esto tiene la desventaja de que los datos están disponibles para cualquier script que se ejecute en el mismo contexto. Los <code>Map</code>s y <code>WeakMap</code>s facilitan la vinculación <em>privada</em> de datos a un objeto.</p>

<h3 id="Datos_estructurados_JSON">Datos estructurados: JSON</h3>

<p>JSON (<strong>J</strong>ava <strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation) es un formato ligero de intercambio de datos, derivado de JavaScript, pero utilizado por muchos lenguajes de programación. JSON crea estructuras de datos universales.</p>

<p>Consulta {{Glossary("JSON")}} y {{jsxref("JSON")}} para obtener más detalles.</p>

<h3 id="Más_objetos_en_la_biblioteca_estándar">Más objetos en la biblioteca estándar</h3>

<p>JavaScript tiene una biblioteca estándar de objetos integrados.</p>

<p>Échale un vistazo a la <a href="/es/docs/Web/JavaScript/Reference/Global_Objects">referencia</a> para conocer más objetos.</p>

<h2 id="Determinación_de_tipos_usando_el_operador_typeof">Determinación de tipos usando el operador <code>typeof</code></h2>

<p>El operador <code>typeof</code> te puede ayudar a encontrar el tipo de tu variable.</p>

<p>Lee la <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof">página de referencia</a> para obtener más detalles y casos extremos.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-ecmascript-data-types-and-values', 'Tipos Data y Values ECMAScript')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li><a class="link-https" href="https://github.com/nzakas/computer-science-in-javascript/">Colección de estructura de datos común y algoritmos comunes en JavaScript de Nicholas Zakas.</a></li>
 <li><a href="https://github.com/monmohan/DataStructures_In_Javascript">Estructuras de datos implementadas en JavaScript</a></li>
</ul>
