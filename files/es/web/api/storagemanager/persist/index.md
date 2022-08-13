---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
tags:
  - Contexto seguro
  - Referencia
  - Storage API
  - metodo
  - persist()
translation_of: Web/API/StorageManager/persist
---
<p>{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">El método <strong><code>persist()</code></strong> de la interfaz {{domxref("StorageManager")}} solicita permiso para usar el almacenamiento persistente, y devuelve una {{jsxref('Promise')}} que se resuelve como <code>true</code> si se concede el permiso y <em>box mode</em> es persistente, y <code>false</code> en cualquier otro caso.</span></p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">navigator.storage.persist().then(function(persistent) { ... })</pre>

<h3 id="Parámetros">Parámetros</h3>

<p>Ninguno.</p>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Una {{jsxref('Promise')}} que se resuelve en un {{jsxref('Boolean')}}.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush: js">if (navigator.storage &amp;&amp; navigator.storage.persist)
  navigator.storage.persist().then(function(persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
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
   <td>{{SpecName('Storage','#dom-storagemanager-persist','persist')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("api.StorageManager.persist")}}</p>
