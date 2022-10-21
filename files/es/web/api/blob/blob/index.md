---
title: Blob()
slug: Web/API/Blob/Blob
tags:
  - API
  - Archivo
  - Blob
  - File API
  - Referencia
translation_of: Web/API/Blob/Blob
---
<p>{{APIRef("File API")}}</p>

<p>El constructor <code><strong>Blob()</strong></code> retorna un nuevo objeto {{domxref("Blob")}} . El contenido del blob consiste en la concatenación de los valores obtenidos en el parrametro <em>array</em>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var aBlob = new Blob(<em> array</em>, <em>options</em> );
</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code><var>array</var></code></dt>
 <dd>Es un {{jsxref("Array")}} de {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, objetos {{domxref("USVString")}}, o una mezcla de cualquiera de éstos objetos, que será puesto dentro de {{domxref("Blob")}}. Los objetos <code>USVString</code> estan codificados como UTF-8.</dd>
 <dt><code><var>options</var></code> {{optional_inline}}</dt>
 <dd>
 <p>Un objeto opcional de tipo {{domxref("BlobPropertyBag")}} que puede especificar las siguientes propiedades:</p>

 <dl>
  <dt><code>type</code> {{optional_inline}}</dt>
  <dd>El {{Glossary("MIME type")}} de la información que será almacenada en el blob. El valor por defecto es una cadena vacía, (<code>""</code>).</dd>
  <dt><code>endings</code> {{optional_inline}} {{non-standard_inline}}</dt>
  <dd>Cómo interpretar los carácteres de nueva línea (<code>\n</code>) en el contenido, si la información es texto. El valor por defecto, <code>transparent</code>, copia los caracteres de nueva línea  en el blob sin cambiarlos. Para convertir las nuevas líneas a la convención nativa del sistema, se especifica <code>endings</code>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Un nuevo objeto {{domxref("Blob")}} conteniendo la información especificada.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush: js  language-js">var unaParteDeArchivo = ['&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;']; // un array de un solo DOMString
var oMiBlob = new Blob(unaParteDeArchivo, {type : 'text/html'}); // el blob</pre>

<h2 id="Specification" name="Specification">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#constructorBlob', 'Blob()')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_los_navegadores">Compatibilidad de los navegadores</h2>



<p>{{Compat("api.Blob.Blob")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>La interfaz deprecada {{domxref("BlobBuilder")}}, la cual es reemplazada por este constructor.</li>
</ul>
