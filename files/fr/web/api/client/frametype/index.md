---
title: Client.frameType
slug: Web/API/Client/frameType
tags:
  - API
  - Client
  - Experimental
  - Property
  - Reference
  - ServiceWorker
  - frameType
translation_of: Web/API/Client/frameType
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>La propriété <code><strong>frameType</strong></code> (accessible en lecture seule) de l'interface {{domxref("Client")}} indique le type de contexte de navigation du {{domxref("Client")}} courant. Cette valeur peut être <code>auxiliary</code>, <code>top-level</code>, <code>nested</code>, ou <code>none</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var myFrameType = Client.frameType;</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">TBD
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#client-frametype', 'frameType')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Client.frameType")}}</p>
