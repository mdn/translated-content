---
title: FileRequest
slug: Web/API/FileRequest
tags:
  - API
  - DOM
  - Fichier
  - Interface
translation_of: Web/API/FileRequest
---
<p>{{APIRef("File System API")}} {{non-standard_header}}</p>

<h2 id="Résumé">Résumé</h2>

<p>L'interface <code>FileRequest</code> étend l'interface {{domxref("DOMRequest")}} pour fournir des propriétés supplémentaires nécessaires aux objets {{domxref("LockedFile")}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("FileRequest.lockedFile")}} {{readonlyinline}}</dt>
 <dd>L'objet {{domxref("LockedFile")}} à partir duquel la demande a été lancée.</dd>
 <dt>{{domxref("FileRequest.onprogress")}}</dt>
 <dd>Un gestionnaire de rappel appelé à plusieurs reprises alors que l'opération représentée par la <code>FileRequest</code> est en cours.</dd>
</dl>

<p>L'interface <code>FileRequest</code> hérite également de l'interface {{domxref("DOMRequest")}}.</p>

<h2 id="Method_overview">Méthodes</h2>

<p>Aucune.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('FileSystem')}}</td>
   <td>{{Spec2('FileSystem')}}</td>
   <td>Brouillon proposé.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("FileHandle")}}</li>
 <li>{{domxref("LockedFile")}}</li>
</ul>
