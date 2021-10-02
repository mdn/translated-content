---
title: SyncManager
slug: Web/API/SyncManager
translation_of: Web/API/SyncManager
---
<p>{{APIRef("Service Workers API")}}{{Non-standard_header}}</p>

<p>L'interface <strong><code>SyncManager</code></strong> de l' <a href="/en-US/docs/Web/API/ServiceWorker_API">API ServiceWorker </a> fournit une interface pour l'enregistrement et la liste des sync registrations.</p>

<h2 id="Properties">Properties</h2>

<p>None.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("SyncManager.register")}}</dt>
 <dd>Créé une nouvelle sync registration et retourne une {{jsxref("Promise")}}</dd>
 <dt>{{domxref("SyncManager.getTags")}}</dt>
 <dd>Renvoie une liste d'identifiants définis par le développeur pour l'enregistrement  du SyncManager.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Background Sync','#sync-manager-interface','SyncManager')}}</td>
   <td>{{Spec2('Background Sync')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("api.SyncManager")}}</p>
</div>
