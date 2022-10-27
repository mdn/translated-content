---
title: WindowOrWorkerGlobalScope
slug: orphaned/Web/API/WindowOrWorkerGlobalScope
tags:
  - API
  - DOM
  - DOM API
  - NeedsTranslation
  - Service Worker
  - TopicStub
  - Window
  - WindowOrWorkerGlobalScope
  - Worker
  - WorkerGlobalScope
translation_of: Web/API/WindowOrWorkerGlobalScope
original_slug: Web/API/WindowOrWorkerGlobalScope
---
<div>{{ApiRef()}}</div>

<p>El mixin <strong><code>WindowOrWorkerGlobalScope</code></strong> describe diversas características comunes a las interfaces {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}. Cada una de estas interfaces pueden, por supuesto, añadir más funcionalidades sobre las listadas a continuación.</p>

<div class="note">
<p><strong>Nota</strong>: <code>WindowOrWorkerGlobalScope</code> es un mixin y no una interface; no se puede crear un objeto de tipo <code>WindowOrWorkerGlobalScope</code>.</p>
</div>

<h2 id="Propiedades">Propiedades</h2>

<p>Estas propiedades se definen en el mixin {{domxref("WindowOrWorkerGlobalScope")}}, y son implementadas por {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}.</p>

<div id="Properties">
<dl>
 <dt>{{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}</dt>
 <dd>Devuelve el objeto {{domxref("CacheStorage")}}, asociado al contexto actual. Este objeto habilita funcionalidades como guardar assets para su utilización <em>offline</em>, y generar respuestas personalizadas a las peticiones.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}</dt>
 <dd>Proporciona un mecanismo para que las aplicaciones puedan acceder asíncronamente a las capacidades de las bases de datos indexadas.; devuelve un objeto {{domxref("IDBFactory")}}.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}</dt>
 <dd>Devuelve un booleano indicando si el contexto actual es seguro (<code>true</code>)  o no (<code>false</code>).</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}</dt>
 <dd>Devuelve el origen del objeto global, serializado como un string. (Esto no parece estar implementado todavía en ningun navegador).</dd>
</dl>
</div>

<h2 id="Métodos">Métodos</h2>

<p>Estas propiedades se definen en el mixin {{domxref("WindowOrWorkerGlobalScope")}}, y son implementadas por {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}.</p>

<dl>
 <dt>{{domxref("WindowOrWorkerGlobalScope.atob()")}}</dt>
 <dd>Decodifica un string de datos que ha sido codificado utlizando codificación en base-64.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.btoa()")}}</dt>
 <dd>Crea un string ASCII codificado en base-64 desde un string de datos binarios.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}</dt>
 <dd>Procesa el set de ejecución repetida utilizando {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}</dt>
 <dd>Cancela el retraso del set de ejecuión utilizando {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}</dt>
 <dd>Acepta variedad de recursos de imagen, y devuelve una {{domxref("Promise")}} que se resuelve como un {{domxref("ImageBitmap")}}. Opcionalmente, la fuente se recorta como un rectángulo de pixels con origen en (sx, sy) con ancho sw, y altura sh.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.fetch()")}}</dt>
 <dd>Comienza el proceso de búsqueda de un recurso desde la red.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.setInterval()")}}</dt>
 <dd>Programa la repetición de la ejecución de una función dado un número de lapsos en milisegundos.</dd>
 <dt>{{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}</dt>
 <dd>Programa la ejecución de una función dada una cantidad de tiempo.</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG",'webappapis.html#windoworworkerglobalscope-mixin', '<code>WindowOrWorkerGlobalScope</code> mixin')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aquí es donde se define el mixin principal.</td>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#fetch-method','fetch()')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Definición del método <code>fetch().</code></td>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#self-caches', 'caches')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Definición de la propiedad <code>caches</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}}</td>
   <td>{{Spec2('IndexedDB 2')}}</td>
   <td>Definición de la propiedad <code>indexedDB</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('Secure Contexts', 'webappapis.html#dom-origin', 'isSecureContext')}}</td>
   <td>{{Spec2('Secure Contexts')}}</td>
   <td>Definición de la propiedad <code>isSecureContext.</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Window")}}</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
</ul>
