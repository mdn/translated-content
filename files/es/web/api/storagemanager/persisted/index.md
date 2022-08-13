---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
tags:
  - Contexto seguro
  - Referencia
  - Storage API
  - metodo
  - persisted()
translation_of: Web/API/StorageManager/persisted
---
<p>{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">La propiedad <strong><code>persisted</code></strong> de la interfaz {{domxref("StorageManager")}} devuelve una {{jsxref('Promise')}} que se resuelve como <code>true</code> si <em>box mode</em> es</span> persistente <span class="seoSummary">para el alamacenamiento de su sitio.</span></p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">navigator.storage.persisted().then(function(persistent) { ... })</pre>

<h3 id="Parámetros">Parámetros</h3>

<p>Ninguno.</p>

<h3 id="Devuelve">Devuelve</h3>

<p>Una {{jsxref('Promise')}} que se resuelve como {{jsxref('Boolean')}}.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush: js"><code>if (navigator.storage &amp;&amp; navigator.storage.persist)
  navigator.storage.persisted().then(function(persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });</code></pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('Storage','#dom-storagemanager-persisted','persisted')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("api.StorageManager.persisted")}}</p>
