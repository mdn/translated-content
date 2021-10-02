---
title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
translation_of: Web/API/ScriptProcessorNode/audioprocess_event
original_slug: Web/Events/audioprocess
---
<div>
<p>L'événement <strong>audioprocess</strong> est déclenché lorsqu'un tampon d'entrée d'une API Web audio {{domxref("ScriptProcessorNode")}} est prêt à être traité.</p>
</div>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;">{{SpecName('Web Audio API', '#AudioProcessingEvent-section', 'AudioProcessingEvent')}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("AudioProcessingEvent")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">?</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">?</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("ScriptProcessorNode")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">Aucune</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>La cible de l'événement (la plus haute cible dans l'arbre du DOM).</td>
  </tr>
  <tr>
   <td><code>type</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Le type de l'événement.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Est-ce que l'événement se propage?</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Est-il possible d'annuler l'événement?</td>
  </tr>
  <tr>
   <td><code>playbackTime</code> {{ReadOnlyInline}}</td>
   <td><code>double</code></td>
   <td>Le moment auquel le son sera joué tel que défini par le temps de {{domxref("AudioContext.currentTime")}}.</td>
  </tr>
  <tr>
   <td><code>inputBuffer</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("AudioBuffer")}}</td>
   <td>
    <p>Le tampon contenant les données audio d'entrée devant être traité. Le nombre de canaux est défini par le paramètre <code><em>numberOfInputChannels</em> de la méthode </code>{{domxref("AudioContext.createScriptProcessor()")}}. Noter que <code>le<em> AudioBuffer</em></code><code> retourné</code><em><code> </code></em>est seulement valide dans la portée de la fonction <em><code>onaudioprocess.</code></em></p>
   </td>
  </tr>
  <tr>
   <td><code>outputBuffer</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("AudioBuffer")}}</td>
   <td>
    <p>Le tampon dans lequel doit être écrit les données audio de sortie. Le nombre de canaux est défini par le paramètre <code><em>numberOfOutputChannels</em> de la méthode </code>{{domxref("AudioContext.createScriptProcessor()")}}. Noter que <code>le<em> AudioBuffer</em></code><code> retourné </code>est seulement valide dans la portée de la fonction <em><code>onaudioprocess.</code></em></p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#AudioProcessingEvent-section', 'AudioProcessingEvent')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_navigateur">Compatibilités navigateur</h2>

<p>{{Compat("api.ScriptProcessorNode.audioprocess_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API">Web Audio API</a></li>
</ul>
