---
title: AudioBuffer.copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
translation_of: Web/API/AudioBuffer/copyToChannel
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>La méthode <code>copyToChannel() </code>de l'interface {{ domxref("AudioBuffer") }} copie les échantillons du tableau source vers le canal de l'<code>AudioBuffer</code> spécifié.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>myArrayBuffer</em>.copyToChannel(<em>source</em>, <em>channelNumber</em>, <em>startInChannel</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>source</em></dt>
 <dd>Le tableau {{jsxref("Float32Array")}} depuis lequel copier les données.</dd>
 <dt><em>channelNumber</em></dt>
 <dd>Le numéro du canal de l'{{domxref("AudioBuffer")}} dans lequel copier les données. Si <em>channelNumber</em> est supérieur ou égal à {{domxref("AudioBuffer.numberOfChannels")}}, une exception <code>INDEX_SIZE_ERR est</code> levée.</dd>
 <dt><em>startInChannel {{optional_inline}}</em></dt>
 <dd>Un offset optionnel à partir duquel copier les données. Si la valeur de <em>startInChannel</em> est supérieure à {{domxref("AudioBuffer.length")}}, une exception <code>INDEX_SIZE_ERR</code> est levée.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var tableauDonnees = contextAudio.createBuffer(2, frameCount, contextAudio.sampleRate);
var autreTableau = new Float32Array;
// Copy les données depuis le second canal vers le second tableau.
tableauDonnees.copyFromChannel(autreTableau,1,0);
// Copie les données depuis le second tableau vers le premier canal du premier tableau. A présent les deux canaux ont des données identiques.
tableauDonnees.copyToChannel (autreTableau,0,0);
</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-copyToChannel-void-Float32Array-source-long-channelNumber-unsigned-long-startInChannel', 'copyToChannel')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBuffer.copyToChannel")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
