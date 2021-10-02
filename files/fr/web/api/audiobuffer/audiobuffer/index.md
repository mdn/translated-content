---
title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
translation_of: Web/API/AudioBuffer/AudioBuffer
---
<p>{{APIRef("Web Audio API")}}{{SeeCompatTable}}</p>

<p>Le constructeur <strong><code>AudioBuffer</code></strong> créer un nouvel objet {{domxref("AudioBuffer")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var audioBuffer = new AudioBuffer([options]);
var audioBuffer = new AudioBuffer(context[, options]);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>context </em>{{obsolete_inline("")}}</dt>
 <dd>Référence à un {{domxref("AudioContext")}}. Ce paramètre a été supprimer de la specification. Consultez la section Compatibilité du navigateur pour plus de détails.</dd>
 <dt><em>options</em> {{optional_inline}}</dt>
 <dd>Les options sont les suivantes:
 <ul>
  <li><code>length</code>:  Longueur de l'échantillonnage du tampon.</li>
  <li><code>numberOfChannels</code>: Nombre de cannaux du buffer. La valeur par défaut est 1. </li>
  <li><code>sampleRate</code>: Taux d'échantillonnage du buffer en Hz. La valeur par défaut est le taux d'échantillonnage du <code>context</code> utilisé dans la construction de cet objet </li>
 </ul>
 </dd>
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
   <td>{{SpecName('Web Audio API','#AudioBuffer','AudioBuffer')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_Navigateurs">Compatibilité des Navigateurs</h2>

<p>{{Compat("api.AudioBuffer.AudioBuffer")}}</p>
