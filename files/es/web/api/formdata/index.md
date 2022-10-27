---
title: FormData
slug: Web/API/FormData
tags:
  - API
  - FormData
  - Interfaz
  - Referencia
  - XMLHttpRequest
translation_of: Web/API/FormData
original_slug: Web/API/XMLHttpRequest/FormData
---
<p>{{APIRef("XMLHttpRequest")}}</p>

<p>La interfaz <strong><code>FormData</code></strong> proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente con el método {{domxref("XMLHttpRequest.send()")}}. Utiliza el mismo formato que usaría un formulario si el tipo de codificación fuera <code>"multipart/form-data"</code>.</p>

<p>También puede pasarse directamente al constructor de {{domxref("URLSearchParams")}} si se quieren generar parámetros de consulta de la misma forma en que lo haría un {{HTMLElement("form")}} si usara un envío <code>GET</code> simple.</p>

<p>Un objeto que implementa <code>FormData</code> puede usarse directamente en una estructura {{jsxref("Statements/for...of", "for...of")}}, en lugar de {{domxref('FormData.entries()', 'entries()')}}: <code>for (var p of myFormData)</code> es equivalente a <code>for (var p of myFormData.entries())</code>.</p>

<div class="note">
<p><strong>Nota</strong>: Esta característica está disponible en <a href="/es/docs/Web/API/Web_Workers_API">Web Workers</a>.</p>
</div>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("FormData.FormData","FormData()")}}</dt>
 <dd>Crea un nuevo objeto <code>FormData</code>.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<dl>
 <dt>{{domxref("FormData.append()")}}</dt>
 <dd>Agrega un nuevo valor a una clave existente dentro de un objeto <code>FormData</code>, o añade la clave si aún no existe.</dd>
 <dt>{{domxref("FormData.delete()")}}</dt>
 <dd>Elimina una pareja clave/valor de un objeto <code>FormData</code>.</dd>
 <dt>{{domxref("FormData.entries()")}}</dt>
 <dd>Devuelve un {{jsxref("Iteration_protocols","iterator")}} que permite recorrer todas las parejas clave/valor contenidas en este objeto.</dd>
 <dt>{{domxref("FormData.get()")}}</dt>
 <dd>Devuelve el primer valor asociado con una clave dada en un objeto <code>FormData</code>.</dd>
 <dt>{{domxref("FormData.getAll()")}}</dt>
 <dd>Devuelve un array con todos los valores asociados con una clave dada en un objeto <code>FormData</code>.</dd>
 <dt>{{domxref("FormData.has()")}}</dt>
 <dd>Devuelve un booleano que indica si un objeto <code>FormData</code> contiene una clave determinada.</dd>
 <dt>{{domxref("FormData.keys()")}}</dt>
 <dd>Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todas las claves de las parejas clave/valor contenidas en este objeto.</dd>
 <dt>{{domxref("FormData.set()")}}</dt>
 <dd>Establece un nuevo valor para una clave existente dentro de un objeto <code>FormData</code>, o agrega la clave/valor si aún no existe.</dd>
 <dt>{{domxref("FormData.values()")}}</dt>
 <dd>Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los valores contenidos en este objeto.</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('XMLHttpRequest','#interface-formdata','FormData')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>FormData definido en XHR spec</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("api.FormData")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("XMLHTTPRequest")}}</li>
 <li><a href="/en/DOM/XMLHttpRequest/Using_XMLHttpRequest" title="En/Using XMLHttpRequest">Utilización de XMLHttpRequest</a></li>
 <li><a href="/es/docs/Web/Guide/Usando_Objetos_FormData" title="en/DOM/XMLHttpRequest/FormData/Using_FormData_objects">Usando objetos FormData</a></li>
 <li>{{HTMLElement("Form")}}</li>
</ul>
