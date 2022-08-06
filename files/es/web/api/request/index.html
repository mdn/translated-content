---
title: Request
slug: Web/API/Request
tags:
  - API
  - Experimental
  - Fetch
  - Fetch API
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
  - request
translation_of: Web/API/Request
---
<div>{{APIRef("Fetch")}}</div>

<p>La interfaz <strong><code>Request</code></strong> de la <a href="/en-US/docs/Web/API/Fetch_API">API Fetch</a> representa una solicitud de respuesta.</p>

<p>Puedes crear un nuevo objeto <code>Request</code> usando el constructor {{domxref("Request.Request()")}}, pero es preferible encontrar un objeto <code>Request</code> que sea devuelto como el resultado de otra operacion API, como un operador de servicio {{domxref("FetchEvent.request")}}.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("Request.Request()")}}</dt>
 <dd>Crea un nuevo objeto <code>Request</code>.</dd>
</dl>

<h2 id="Propiedades">Propiedades</h2>

<dl>
 <dt>{{domxref("Request.method")}} {{readonlyInline}}</dt>
 <dd>Contiene el metodo de solicitud (<code>GET</code>, <code>POST</code>, etc.)</dd>
 <dt>{{domxref("Request.url")}} {{readonlyInline}}</dt>
 <dd>Contiene la URL de la solicitud.</dd>
 <dt>{{domxref("Request.headers")}} {{readonlyInline}}</dt>
 <dd>Contiene el objeto asociado de la solicitud {{domxref("Headers")}}</dd>
 <dt>{{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}</dt>
 <dd>Contiene el contexto de la solicitud (p.ej., <code>audio</code>, <code>image</code>, <code>iframe</code>, etc.)</dd>
 <dt>{{domxref("Request.referrer")}} {{readonlyInline}}</dt>
 <dd>Contiene la referencia de la soliditud (p.ej., <code>client</code>).</dd>
 <dt>{{domxref("Request.referrerPolicy")}} {{readonlyInline}}</dt>
 <dd>Contiene la política de referencia de la solicitud (p.ej., <code>no-referrer</code>).</dd>
 <dt>{{domxref("Request.mode")}} {{readonlyInline}}</dt>
 <dd>Contiene el modo de la solicitud. (p.ej., <code>cors</code>, <code>no-cors</code>, <code>same-origin</code>, <code>navigate</code>.)</dd>
 <dt>{{domxref("Request.credentials")}} {{readonlyInline}}</dt>
 <dd>Contiene las credenciales de la solicitud (p.ej., <code>omit</code>, <code>same-origin</code>).</dd>
 <dt>{{domxref("Request.redirect")}} {{readonlyinline}}</dt>
 <dd>Contiene el modo de cómo son manipuladas las redirecciones. Puede ser <code>follow</code>, <code>error</code>, o <code>manual</code>.</dd>
 <dt>{{domxref("Request.integrity")}} {{readonlyInline}}</dt>
 <dd>Contiene el valor del subrecurso de integridad (<a href="/en-US/docs/Web/Security/Subresource_Integrity">subresource integrity</a>) de la solicitud (p.ej., <code>sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=</code>).</dd>
 <dt>{{domxref("Request.cache")}} {{readonlyInline}}</dt>
 <dd>Contiene el modo de caché de la solicitud (p.ej., <code>default</code>, <code>reload</code>, <code>no-cache</code>).</dd>
</dl>

<p><code>Request</code> implementa {{domxref("Body")}}, por lo que también tiene las siguientes propiedades disponibles:</p>

<dl>
 <dt>{{domxref("Body.body")}} {{readonlyInline}}</dt>
 <dd>Un simple getter usado para exponer un contenido del cuerpo {{domxref("ReadableStream")}}</dd>
 <dt>{{domxref("Body.bodyUsed")}} {{readonlyInline}}</dt>
 <dd>Almacena un {{domxref("Boolean")}} que declara si ya se ha usado el cuerpo en una respuesta.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<dl>
 <dt>{{domxref("Request.clone()")}}</dt>
 <dd>Crea una copia del objeto actual <code>Request</code>.</dd>
</dl>

<p><code>Request</code> implementa {{domxref("Body")}}, por lo que también tiene los siguientes métodos disponibles:</p>

<dl>
 <dt>{{domxref("Body.arrayBuffer()")}}</dt>
 <dd>Devuelve una promesa que se resuelve con una representación {{domxref("ArrayBuffer")}} del cuerpo de la solicitud.</dd>
 <dt>{{domxref("Body.blob()")}}</dt>
 <dd>Devuelve una promesa que se resuelve con una representación {{domxref("Blob")}} del cuerpo de la solicitud.</dd>
 <dt>{{domxref("Body.formData()")}}</dt>
 <dd>Devuelve una promesa que se resuelve con una representación {{domxref("FormData")}} del cuerpo de la solicitud.</dd>
 <dt>{{domxref("Body.json()")}}</dt>
 <dd>Devuelve una promesa que se resuelve con una representación {{domxref ("JSON")}} del cuerpo de la solicitud.</dd>
 <dt>{{domxref("Body.text()")}}</dt>
 <dd>Devuelve una promesa que se resuelve con una representación {{domxref("USVString")}} (text) del cuerpo de la solicitud.</dd>
</dl>

<div class="note">
<p><strong>Nota</strong>: Las funciones {{domxref("Body")}} solo pueden ser ejecutadas una vez; Las siguientes llamadas se resolverán con strings/ArrayBuffers vacíos.</p>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<p>En el siguiente fragmento de código, creamos una nueva solicitud utilizando el constructor <code>Request()</code> (para un archivo de imagen en el mismo directorio que el script),  luego devolvemos algunos valores de propiedad de la solicitud:</p>

<pre class="brush: js">const myRequest = new Request('http://localhost/flowers.jpg');

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
</pre>

<p>Puede obtener esta solicitud pasando el objeto <code>Request</code> como parámetro a una llamada {{domxref("GlobalFetch.fetch()")}}, por ejemplo:</p>

<pre class="brush: js">fetch(myRequest)
  .then(response =&gt; response.blob())
  .then(blob =&gt; {
    myImage.src = URL.createObjectURL(blob);
  });</pre>

<p>En el siguiente fragmento de código, creamos una nueva solicitud utilizando el constructor <code>Request()</code> con algunos datos iniciales y contenido del cuerpo para una solicitud de API que necesita una carga útil del cuerpo:</p>

<pre class="brush: js">const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});

const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true
</pre>

<div class="note">
<p><strong>Nota:</strong> El tipo de cuerpo solo puede ser {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} o tipo {{domxref("ReadableStream")}}, así que para añadir un objeto JSON a la carga útil, necesitas convertir a string (stringify) dicho objeto.</p>
</div>

<p>Puede obtener esta solicitud de API pasando el objeto <code>Request</code> como parámetro a una llamada {{domxref("GlobalFetch.fetch()")}}, por ejemplo, y obtener la respuesta:</p>

<pre class="brush: js">fetch(myRequest)
  .then(response =&gt; {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response =&gt; {
    console.debug(response);
    // ...
  }).catch(error =&gt; {
    console.error(error);
  });</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#request-class','Request')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h2>



<p>{{Compat("api.Request")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
