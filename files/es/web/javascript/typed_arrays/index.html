---
title: Arreglos tipados de JavaScript
slug: Web/JavaScript/Typed_arrays
tags:
  - Arreglo tipado
  - Guía
  - JavaScript
translation_of: Web/JavaScript/Typed_arrays
original_slug: Web/JavaScript/Vectores_tipados
---
<div>{{JsSidebar("Advanced")}}</div>

<p><span class="seoSummary"><strong>Los arreglos tipados en JavaScript</strong> son objetos similares a arreglos que proporcionan un mecanismo para leer y escribir datos binarios sin procesar en búferes de memoria.</span> Como ya sabrás, los objetos {{jsxref("Array", "Arreglo")}} crecen y se encogen dinámicamente y pueden tener cualquier valor de JavaScript. Los motores de JavaScript realizan optimizaciones para que estos arreglos sean rápidos.</p>

<p>Sin embargo, a medida que las aplicaciones web se vuelven cada vez más poderosas, agregando características como manipulación de audio y video, acceso a datos sin procesar usando <code>WebSockets</code>, etc., ha quedado claro que hay momentos en los que sería útil que el código JavaScript pudiera manipular rápida y fácilmente datos binarios sin procesar. Aquí es donde entran en juego los arreglos tipados. Cada entrada en un arreglo tipado de JavaScript es un valor binario sin procesar en uno de los formatos admitidos, desde números enteros de 8 bits hasta números de punto flotante de 64 bits.</p>

<p>Sin embargo, los arreglos tipados <em>no</em> se deben confundir con los arreglos normales, ya que llamar a {{JSxRef("Array.isArray()")}} en un arreglo tipado devuelve <code>false</code>. Además, no todos los métodos disponibles para arreglos normales son compatibles con arreglos tipados (por ejemplo, <code>push</code> y <code>pop</code>).</p>

<h2 id="Búferes_y_vistas_arquitectura_de_los_arreglos_tipados">Búferes y vistas: arquitectura de los arreglos tipados</h2>

<p>Para lograr la máxima flexibilidad y eficiencia, los arreglos de JavaScript dividen la implementación en <em>búferes</em> y <em>vistas</em>. Un búfer (implementado por el objeto {{jsxref("ArrayBuffer")}} es un objeto que representa una porción de datos; no tiene ningún formato del que hablar y no ofrece ningún mecanismo para acceder a su contenido. Para acceder a la memoria contenida en un búfer, necesitas usar una vista. Una vista proporciona un contexto — es decir, un tipo de dato, un desplazamiento inicial y el número de elementos — que convierte los datos en un arreglo tipado.</p>

<p><img alt="Arreglos tipados en ArrayBuffer" src="https://mdn.mozillademos.org/files/8629/typed_arrays.png" style="height: 278px; width: 666px;"></p>

<h3 id="ArrayBuffer"><code>ArrayBuffer</code></h3>

<p>{{jsxref("ArrayBuffer")}} es un tipo de dato que se utiliza para representar un búfer de datos binarios genérico de longitud fija. No puedes manipular directamente el contenido de un <code>ArrayBuffer</code>; en su lugar, crea una vista de arreglo tipado o un {{JSxRef("DataView")}} que representa el búfer en un formato específico, y lo usa para leer y escribir el contenido del búfer.</p>

<h3 id="Vistas_de_arreglos_tipados">Vistas de arreglos tipados</h3>

<p>Las vistas de arreglos tipados tienen nombres autodescriptivos y proporcionan vistas para todos los tipos numéricos habituales tal como <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> y así sucesivamente. Hay una vista de arreglo tipado especial, la <code>Uint8ClampedArray</code>. Esta fija los valores entre 0 y 255. {{JSxRef("../Data_structures", "Tipos de datos JavaScript")}}</p>

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
   <td>{{JSxRef("Int8Array")}}</td>
   <td><code>-128</code> a <code>127</code></td>
   <td>1</td>
   <td>Dos enteros complementarios de 8 bits con signo</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Uint8Array")}}</td>
   <td><code>0</code> a <code>255</code></td>
   <td>1</td>
   <td>Entero de 8-bit sin signo</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Uint8ClampedArray")}}</td>
   <td><code>0</code> a <code>255</code></td>
   <td>1</td>
   <td>Entero de 8 bits sin signo (sujeto)</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Int16Array")}}</td>
   <td><code>-32768</code> a <code>32767</code></td>
   <td>2</td>
   <td>Dos enteros complementarios de 16 bits con signo</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Uint16Array")}}</td>
   <td><code>0</code> a <code>65535</code></td>
   <td>2</td>
   <td>Entero de 16 bits sin signo</td>
   <td><code>Short sin signo</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Int32Array")}}</td>
   <td><code>-2147483648</code> a <code>2147483647</code></td>
   <td>4</td>
   <td>dos enteros complementarios de 32 bits con signo</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Uint32Array")}}</td>
   <td><code>0</code> a <code>4294967295</code></td>
   <td>4</td>
   <td>Enteros de 32 bits sin signo</td>
   <td><code>long sin signo</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Float32Array")}}</td>
   <td><code>1.2</code><span>×</span><code>10<sup>-38</sup></code> a <code>3.4</code><span>×</span><code>10<sup>38</sup></code></td>
   <td>4</td>
   <td>Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., <code>1.1234567</code>)</td>
   <td><code>float sin restricciones</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("Float64Array")}}</td>
   <td><code>1.2</code><span>×</span><code>10<sup>-38</sup></code> a <code>3.4</code><span>×</span><code>10<sup>308</sup></code></td>
   <td>8</td>
   <td>Número de coma flotante IEEE de 64 bits (16 dígitos significativos, p. ej., <code>1.123...15</code>)</td>
   <td><code>doble sin restricciones</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("BigInt64Array")}}</td>
   <td><code>-2<sup>63</sup></code> a <code>2<sup>63</sup>-1</code></td>
   <td>8</td>
   <td>Dos enteros complementarios de 64 bits con signo</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (long long con signo)</code></td>
  </tr>
  <tr>
   <td>{{JSxRef("BigUint64Array")}}</td>
   <td><code>0</code> a <code>2<sup>64</sup>-1</code></td>
   <td>8</td>
   <td>Entero de 64 bits sin signo</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (long long sin signo)</code></td>
  </tr>
 </tbody>
</table>

<h3 id="DataView"><code>DataView</code></h3>

<p>{{jsxref("DataView")}} es una interfaz de bajo nivel que proporciona una API captadora (<code>getter</code>)/(<code>setter</code>) establecedora para leer y escribir datos arbitrarios en el búfer. Esto es útil cuando se trata de diferentes tipos de datos, por ejemplo. Las vistas de arreglos tipados están en el orden de bytes nativo (consulta {{Glossary("Endianness")}} de tu plataforma. Con un <code>DataView</code> puedes controlar el orden de bytes. Es <code>big-endian</code> de manera predeterminada y se puede establecer en <code>little-endian</code> en los métodos captadores/establecedores.</p>

<h2 id="APIs_web_que_utilizan_arreglos_tipados">APIs web que utilizan arreglos tipados</h2>

<p>Estos son algunos ejemplos de APIs que utilizan arreglos tipados; hay otras, y todo el tiempo surgen más.</p>

<dl>
 <dt>{{Link("/en-US/docs/Web/API/FileReader", "FileReader.prototype.readAsArrayBuffer()", "#readAsArrayBuffer()")}}</dt>
 <dd>El método <code>FileReader.prototype.readAsArrayBuffer()</code> comienza a leer el contenido del {{Link("/es/docs/Web/API/Blob", "Blob")}} o {{Link("/es/docs/Web/API/File", "File")}}.</dd>
 <dt><a href="/en-US/docs/Web/API/XMLHttpRequest#send()" title="/en-US/docs/Web/API/XMLHttpRequest#send()"><code>XMLHttpRequest.prototype.send()</code></a></dt>
 <dd>El método <code>send()</code> de instancias de <code>XMLHttpRequest</code> ahora admiten arreglos tipados y objetos {{JSxRef("ArrayBuffer")}} como argumento.</dd>
 <dt>{{Link("/en-US/docs/Web/API/ImageData", "ImageData.data")}}</dt>
 <dd>Es un {{JSxRef("Uint8ClampedArray")}} que representa un arreglo unidimensional que contiene los datos en el orden RGBA, con valores enteros entre <code>0</code> y <code>255</code> inclusive.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usar_vistas_con_búferes">Usar vistas con búferes</h3>

<p>En primer lugar, necesitaremos crear un búfer, aquí con una longitud fija de 16 bytes:</p>

<pre class="brush:js notranslate">let buffer = new ArrayBuffer(16);
</pre>

<p>En este punto, tenemos una porción de memoria cuyos bytes están todos preiniciados a 0. Sin embargo, no hay mucho que podamos hacer con él. Podemos confirmar que de hecho tiene 16 bytes de longitud, y eso es todo:</p>

<pre class="brush:js notranslate">if (buffer.byteLength === 16) {
  console.log("Sí, son 16 bytes");
} else {
  console.log("¡Oh no, es del tamaño incorrecto!");
}
</pre>

<p>Antes de que podamos trabajar realmente con este búfer, necesitamos crear una vista. Creemos una vista que trate los datos en el búfer como un arreglo de enteros de 32 bits con signo:</p>

<pre class="brush:js notranslate">let int32View = new Int32Array(buffer);
</pre>

<p>Ahora podemos acceder a los campos del arreglo como un arreglo normal:</p>

<pre class="brush:js notranslate">for (let i = 0; i &lt; int32View.length; i++) {
  int32View[i] = i * 2;
}
</pre>

<p>Esto completa las 4 entradas en el arreglo (4 entradas de 4 bytes cada una suman 16 bytes en total) con los valores <code>0</code>, <code>2</code>, <code>4</code> y <code>6</code>.</p>

<h3 id="Múltiples_vistas_sobre_los_mismos_datos">Múltiples vistas sobre los mismos datos</h3>

<p>Las cosas comienzan a ponerse realmente interesantes cuando consideras que puedes crear múltiples vistas sobre los mismos datos. Por ejemplo, dado el código anterior, podemos continuar así:</p>

<pre class="brush:js notranslate">let int16View = new Int16Array(buffer);

for (let i = 0; i &lt; int16View.length; i++) {
  console.log('Entrada ' + i + ': ' + int16View[i]);
}
</pre>

<p>Aquí creamos una vista entera de 16 bits que comparte el mismo búfer que la vista existente de 32 bits y sacamos todos los valores en el búfer como enteros de 16 bits. Ahora obtenemos la salida <code>0</code>, <code>0</code>, <code>2</code>, <code>0</code>, <code>4</code>, <code>0</code>, <code>6</code>, <code>0</code>.</p>

<p>Sin embargo, puedes dar un paso más. Considera esto:</p>

<pre class="brush:js notranslate">int16View[0] = 32;
console.log('La entrada 0 en el arreglo de 32 bits ahora es ' + int32View[0]);
</pre>

<p>La salida de esto es <code>"La entrada 0 en el arreglo de 32 bits ahora es 32"</code>.</p>

<p>En otras palabras, los dos arreglos se ven simplemente en el mismo búfer de datos, tratándolo como formatos diferentes. Lo puedes hacer con cualquier {{JSxRef("Global_Objects/TypedArray", "tipo de vista", "#TypedArray_objects")}}.</p>

<h3 id="Trabajar_con_complejas_estructuras_de_datos">Trabajar con complejas estructuras de datos</h3>

<p>Al combinar un solo búfer con múltiples vistas de diferentes tipos, comenzando con diferentes desplazamientos en el búfer, puedes interactuar con objetos de datos que contienen múltiples tipos de datos. Esto te permite, por ejemplo, interactuar con complejas estructuras de datos {{Link("/es/docs/Web/WebGL", "WebGL")}}, archivos de datos o estructuras C que necesitas utilizar mientras usas {{Link("/en-US/docs/Mozilla/js-ctypes", "js-ctypes")}}.</p>

<p>Considera esta estructura C:</p>

<pre class="brush:cpp notranslate">struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};</pre>

<p>Puedes acceder a un búfer que contiene datos en un formato como este:</p>

<pre class="brush:js notranslate">let buffer = new ArrayBuffer(24);

// ... lee los datos en el búfer ...

let idView = new Uint32Array(buffer, 0, 1);
let usernameView = new Uint8Array(buffer, 4, 16);
let amountDueView = new Float32Array(buffer, 20, 1);</pre>

<p>Luego puedes acceder, por ejemplo, al monto adeudado con <code>amountDueView[0]</code>.</p>

<div class="note"><strong>Nota</strong>: La {{interwiki("wikipedia", "Data_structure_alignment")}} en una estructura C depende de la plataforma. Toma precauciones y consideraciones para estas diferencias de relleno.</div>

<h3 id="Conversión_a_arreglos_normales">Conversión a arreglos normales</h3>

<p>Después de procesar un arreglo con tipo, a veces es útil volver a convertirla en un arreglo normal para beneficiarse del prototipo {{jsxref("Array")}}. Esto se puede hacer usando {{JSxRef("Array.from()")}}, o usando el siguiente código donde <code>Array.from()</code> no es compatible.</p>

<pre class="brush:js notranslate">let typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
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
   <td>{{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>



<p>{{Compat("javascript.builtins.Int8Array")}}</p>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{Link("/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding", "Conseguir ArrayBuffers o arreglos tipados a partir de cadenas codificadas en Base64", "#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer")}}</li>
 <li>{{Link("/en-US/docs/Code_snippets/StringView", "StringView: una representación en C de cadenas basadas en arreglos tipados")}}</li>
 <li><a href="https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays">Rápida manipulación de píxeles en canvas con arreglos tipados</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/webgl/typed_arrays">Arreglos tipados: Datos binarios en el navegador</a></li>
 <li>{{Glossary("Endianness")}}</li>
</ul>
