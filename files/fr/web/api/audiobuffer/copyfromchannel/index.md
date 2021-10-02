---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
tags:
  - API
  - Méthode
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBuffer/copyFromChannel
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>La méthode <code>copyFromChannel() </code>de l'interface {{ domxref("AudioBuffer") }} copie les échantillons de l'un des canaux de l'<code>AudioBuffer</code> dans un tableau.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>tableauDonnees</em>.copyFromChannel(<em>destination</em>,numeroCanal,decalageDebut);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>destination</em></dt>
 <dd>Un tableau {{domxref("Float32Array")}} dans lequel copier les données.</dd>
 <dt><em>channelNumber</em></dt>
 <dd>Le numéro du canal de l'AudioBuffer depuis lequel copier les données. Si <em>channelNumber</em> est supérieur ou égal à {{domxref("AudioBuffer.numberOfChannels")}}, une exception <code>INDEX_SIZE_ERR est</code> levée.</dd>
 <dt><em>startInChannel</em> {{optional_inline}}</dt>
 <dd>Un offset optionnel à partir duquel copier les données. Si la valeur de <em>startInChannel</em> est supérieure à {{domxref("AudioBuffer.length")}}, une exception <code>INDEX_SIZE_ERR</code> est levée.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var tableauDonnees = contextAudio.createBuffer(2, frameCount, contextAudio.sampleRate);
var autreTableau = new Float32Array(length);
tableauDonnees.copyFromChannel(autreTableau,1,0);
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
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-copyFromChannel-void-Float32Array-destination-long-channelNumber-unsigned-long-startInChannel', 'copyFromChannel')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBuffer.copyFromChannel")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
