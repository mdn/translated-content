---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Method
  - stringify
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/stringify
original_slug: Web/JavaScript/Referencia/Objetos_globales/JSON/stringify
---
<p>{{JSRef}}</p>

<p>El método <code><strong>JSON.stringify()</strong></code> convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.</p>

<div>{{EmbedInteractiveExample("pages/js/json-stringify.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code>JSON.stringify(<var>value</var>[, <var>replacer</var>[, <var>space</var>]])</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>El valor que será convertido a una cadena JSON.</dd>
 <dt><code>replacer</code>{{Optional_Inline}}</dt>
 <dd>Una función que altera el comportamiento del proceso de conversión a cadena de texto, o un array de objetos {{JSxRef("String")}} o {{JSxRef("Number")}} que representan una lista de elementos válidos que se incluyen en la cadena JSON. Si este valor es {{JSxRef("null")}} o no se define, todas las propiedades del objeto son incluidas en la cadena de texto JSON resultante.</dd>
 <dt><code>space</code>{{Optional_Inline}}</dt>
 <dd>Un objeto de tipo {{JSxRef("String")}} o {{JSxRef("Number")}} que se utiliza para insertar un espacio en blanco dentro de la cadena de salida JSON para mejorar su legibilidad.
 <p>Si es de tipo <code>Number</code>, indica el número de espacios a usar como espacios en blanco; este número está limitado se limita a 10 (si es mayor, el valor es sólo <code>10</code>). Los valores inferiores a 1 indican que no se deben utilizar espacios.</p>

 <p>Si es de tipo <code>String</code>, la cadena de texto (o sus 10 primeros caracteres, si es mayor) se utiliza como espacios en blanco. Si este parámetro no se define o es {{JSxRef("null")}}, no se utilizará ningún espacio en blanco.</p>
 </dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Una cadena de texto JSON que representa el valor dado.</p>

<h3 id="Excepciones">Excepciones</h3>

<p>Lanza una excepción {{JSxRef("TypeError")}} ("cyclic object value") cuando encuentra una referencia circular.</p>

<h2 id="Descripción">Descripción</h2>

<p><code>JSON.stringify</code> convierte un valor a notación JSON representándolo:</p>

<ul>
 <li>Si el valor tiene un método <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify$edit#toJSON()_behavior">toJSON()</a>, es responsable de definir qué será serializado.</li>
 <li>Los objetos {{JSxRef("Boolean")}}, {{JSxRef("Number")}}, and {{JSxRef("String")}} se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.</li>
 <li>Si durante la conversión se encuentra un {{JSxRef("undefined")}}, una {{JSxRef("Function")}}, o un {{JSxRef("Symbol")}} se omite (cuando se encuentra en un objeto) o se censura a {{JSxRef("null")}} (cuando se encuentra en un array). <code>JSON.stringify()</code> puede devolver <code>undefined</code> cuando se pasan valores "puros" como <code>JSON.stringify(function(){}</code>) o <code>JSON.stringify(undefined)</code>.</li>
 <li>Todas las propiedades que utilicen {{JSxRef("Symbol")}} en los nombres de la clave se ignoran por completo, incluso si utilizan una función <code>replacer</code>.</li>
 <li>Las instancias de {{JSxRef("Date")}} implementan la función <code>toJSON()</code> devolviendo una cadena de texto (igual que <code>date.toISOString()</code>). Por lo que son tratadas como strings.</li>
 <li>Los números {{JSxRef("Infinity")}} y {{JSxRef("NaN")}}, así como el valor {{JSxRef("null")}}, se consideran <code>null</code>.</li>
 <li>El resto de instancias de {{JSxRef("Object")}} (incluyendo {{JSxRef("Map")}}, {{JSxRef("Set")}}, {{JSxRef("WeakMap")}}, y {{JSxRef("WeakSet")}}) sólo tendrán serializadas sus propiedades enumerables.</li>
</ul>

<pre class="brush: js">JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// Elementos de array identificados por string no son enumerables y no tienen sentido en JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Estructuras de datos standard
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Símbolos:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Propiedades no enumerables:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'
</pre>

<h3 id="El_parámetro_replacer">El parámetro <code>replacer</code></h3>

<p>El parámetro <code>replacer</code> (de reemplazo) puede ser tanto una función como o un array.</p>

<p><strong>Como una función</strong> toma dos parámetros: el <em>valor</em> y la <em>clave</em> que van a ser procesados. El objeto al cual pertenece la clave representa el parametro this del reemplazo.</p>

<p>Inicialmente es llamado con una clave vacía y representa el objeto que se va a procesar, y solo después es llamado por cada propiedad en el objeto o array que se va a procesar.</p>

<p>Devuelve el valor que se va a agregar a la cadena JSON, de la siguiente manera:</p>

<ul>
 <li>Si se devuelve un número, la cadena correspondiente es usada como el valor de la propiedad cuando se agrega a la cadena JSON.</li>
 <li>Si se devuelve una cadena, esta es usuada cono el valor de la propiedad cuando se agrega a la cadena JSON.</li>
 <li>Si se devuelve un Boolean, true o false son usados como el valor de la propiedad cuando se agrega a la cadena JSON.</li>
 <li>Si se devuelve algún otro objeto, este es recursivamente procesado en una cadena JSON llamando a la función de reemplazo para cada propiedad, amenos que el objeto sea una función, en tal caso nada se agrega a la cadena JSON.</li>
 <li>Si se devuelve undefined, la propiedad no se incluye en la salida de la cadena JSON.</li>
</ul>

<div class="note"><strong>Nota:</strong> No se puede usar la función de reemplazo para borrar los valores de un array. Si se devuelve undefined o una función, entonces se usara null en su lugar.</div>

<h4 id="Ejemplo_con_una_función">Ejemplo con una función</h4>

<pre class="brush: js  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">replacer<span class="punctuation token">(</span></span>key<span class="punctuation token">,</span> value<span class="punctuation token">)</span> <span class="punctuation token">{
  // Filtrando propiedades </span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="keyword token">typeof</span> value <span class="operator token">===</span> <span class="string token">"string"</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">return</span> undefined<span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">return</span> value<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> foo <span class="operator token">=</span> <span class="punctuation token">{</span>foundation<span class="punctuation token">:</span> <span class="string token">"Mozilla"</span><span class="punctuation token">,</span> model<span class="punctuation token">:</span> <span class="string token">"box"</span><span class="punctuation token">,</span> week<span class="punctuation token">:</span> <span class="number token">45</span><span class="punctuation token">,</span> transport<span class="punctuation token">:</span> <span class="string token">"car"</span><span class="punctuation token">,</span> month<span class="punctuation token">:</span> <span class="number token">7</span><span class="punctuation token">}</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> jsonString <span class="operator token">=</span> JSON<span class="punctuation token">.</span><span class="function token">stringify<span class="punctuation token">(</span></span>foo<span class="punctuation token">,</span> replacer<span class="punctuation token">)</span><span class="punctuation token">;</span>
// '{"week":45, "month":7}'
</code></pre>

<p>El resultado en una cadena JSON sería:  <code>{"week":45,"month":7}</code>.</p>

<p>Ejemplo con un array</p>

<p>Si el reemplazo es un array, los valores indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.</p>

<pre class="brush: js  language-js"><code class="language-js">JSON<span class="punctuation token">.</span><span class="function token">stringify<span class="punctuation token">(</span></span>foo<span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="string token">'week'</span><span class="punctuation token">,</span> <span class="string token">'month'</span><span class="punctuation token">]</span><span class="punctuation token">)</span><span class="punctuation token">;</span>  <span class="comment token">
// '{"week":45,"month":7}', sólo mantiene las propiedades de "week" y de "month"</span></code>
</pre>

<h3 id="Argumento_space">Argumento <code>space</code></h3>

<p>Este argumento puede ser empleado para controlar el espaciado en la cadena final. Si es un número, los niveles sucesivos del proceso serán identados cada uno por tantos espacios como se indique (hasta 10). Si es una cadena, serán identados con dicha cadena (o los primeros diez caracteres de la misma).</p>

<pre class="brush: js">JSON.stringify({ a: 2 }, null, ' ');
// regresa la cadena de texto:
// '{
//  "a": 2
// }'</pre>

<p>Usar el carácter tabulador simula la apariencia de impresión:</p>

<pre class="brush: js">JSON.stringify({ uno: 1, dos : 2 }, null, '\t')
// devuelve el string:
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }' </pre>

<h3 id="Comportamiento_toJSON()">Comportamiento toJSON()</h3>

<p>Si un objeto que sera estringificado tiene una propiedad llamada <span style="font-family: consolas,monaco,andale mono,monospace;">toJSON</span> donde su valor es una función, entonces el método <span style="font-family: consolas,monaco,andale mono,monospace;">toJSON</span> modifica el comportamiento de la estringificación JSON: en lugar del objeto que esta siendo serializado, el valor retornado por el método <span style="font-family: consolas,monaco,andale mono,monospace;">toJSON</span> será serializado cuando el mismo sea llamado. Por ejemplo:</p>

<pre class="brush: js">var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }
};
var json = JSON.stringify({x: obj}); // <code>'{"x":"bar"}'</code>.
</pre>

<h3 id="Example_of_using_JSON.stringify_with_localStorage" name="Example_of_using_JSON.stringify_with_localStorage">Ejemplo de como usar <code>JSON.stringify()</code> con <code>localStorage</code></h3>

<p>En dado caso en el cual se requiera que un objeto creado por el usuario y al cual se le permita ser restaurado incluso cuando el navegador ha sido cerrado, el siguiente ejemplo es un modelo de la aplicabilidad del metodo JSON. stringify().</p>

<div class="warning">
<p>Las funciones no son un tipo de dato valido por lo cual estas no funcionaran. Algunos objetos como tipo DATE, se convertiran a cadenas de texto despues de ejecutar JSON.parse().</p>
</div>

<pre class="brush: js  language-js"><code class="language-js"><span class="comment token">// Creando un ejemplo de JSON
</span><span class="keyword token">var</span> session <span class="operator token">=</span> <span class="punctuation token">{</span>
  <span class="string token">'screens'</span><span class="punctuation token">:</span> <span class="punctuation token">[</span><span class="punctuation token">]</span><span class="punctuation token">,</span>
  <span class="string token">'state'</span><span class="punctuation token">:</span> <span class="keyword token">true</span>
<span class="punctuation token">}</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenA'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">450</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">250</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenB'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">650</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">350</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenC'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">750</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">120</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenD'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">250</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">60</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenE'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">390</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">120</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
session<span class="punctuation token">.</span>screens<span class="punctuation token">.</span><span class="function token">push<span class="punctuation token">(</span></span><span class="punctuation token">{</span> <span class="string token">'name'</span><span class="punctuation token">:</span> <span class="string token">'screenF'</span><span class="punctuation token">,</span> <span class="string token">'width'</span><span class="punctuation token">:</span> <span class="number token">1240</span><span class="punctuation token">,</span> <span class="string token">'height'</span><span class="punctuation token">:</span> <span class="number token">650</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">
// Convirte el JSON string con JSON.stringify()
</span><span class="comment token">// entonces guarda con localStorage con el nombre de la sesión
</span>localStorage<span class="punctuation token">.</span><span class="function token">setItem<span class="punctuation token">(</span></span><span class="string token">'session'</span><span class="punctuation token">,</span> JSON<span class="punctuation token">.</span><span class="function token">stringify<span class="punctuation token">(</span></span>session<span class="punctuation token">)</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">
// Ejemplo de como transformar el String generado usando
// JSON.stringify() y guardándolo en localStorage como objeto JSON otra vez
</span><span class="keyword token">var</span> restoredSession <span class="operator token">=</span> JSON<span class="punctuation token">.</span><span class="function token">parse<span class="punctuation token">(</span></span>localStorage<span class="punctuation token">.</span><span class="function token">getItem<span class="punctuation token">(</span></span><span class="string token">'session'</span><span class="punctuation token">)</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">
// Ahora la variable restoredSession contiene el objeto que fue guardado
// en localStorage
</span>console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span>restoredSession<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.12.3', 'JSON.stringify')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definición incial.<br>
    Implementada en JavaScript 1.7.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-json.stringify', 'JSON.stringify')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>
    <p> </p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-json.stringify', 'JSON.stringify')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("javascript.builtins.JSON.stringify")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{JSxRef("JSON.parse()")}}</li>
 <li><a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> – Introduces two functions: <code>JSON.decycle</code> and <code>JSON.retrocycle</code>. These allow encoding and decoding of cyclical structures and DAGs into an extended and retrocompatible JSON format.</li>
</ul>
