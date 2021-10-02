---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
tags:
  - API
  - DOM
  - Fichier
  - Méthodes
translation_of: Web/API/FileReader/readAsArrayBuffer
---
<p>{{APIRef("File API")}}</p>

<p>La méthode <strong><code>readAsArrayBuffer()</code></strong> de l'interface {{domxref("FileReader")}} permet de lire un {{domxref("Blob")}} ou un {{domxref("File")}} (<em>fichier</em>). Quand l'opération est finie, l'attribut {{domxref("FileReader.readyState","readyState")}} prend la valeur <code>"DONE"</code> (<em>terminé</em>) à savoir <code>2</code>, et l'événement {{event("loadend")}} est levé. L'attribut {{domxref("FileReader.result","résultat")}} contient alors les données lues sous la forme d'un objet {{domxref("ArrayBuffer")}}.</p>

<div class="note">
<p><strong>Note :</strong> La méthode {{domxref("Blob.arrayBuffer()")}} est une nouvelle API basée sur les promesses permettant de lire un fichier.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>instanceOfFileReader</em>.readAsArrayBuffer(<em>blob</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>blob</code></dt>
 <dd>Le {{domxref("Blob")}} ou le {{domxref("File")}} (<em>fichier</em>) devant être lu.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName("File API", "#readAsArrayBuffer", "FileReader.readAsArrayBuffer")}}</td>
   <td>{{Spec2("File API")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.FileReader.readAsArrayBuffer")}}.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("FileReader")}}</li>
</ul>
