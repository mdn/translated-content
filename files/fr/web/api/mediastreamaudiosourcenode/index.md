---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
tags:
  - API
  - Interface
  - MediaStreamAudioSourceNode
  - Reference
  - Web Audio API
translation_of: Web/API/MediaStreamAudioSourceNode
---
<p>{{APIRef("Web Audio API")}}</p>

<div>
<p>L'interface <code>MediaStreamAudioSourceNode</code> représente une source audio <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a> {{domxref("MediaStream")}} (comme une webcam ou un micro). C'est un {{domxref("AudioNode")}} qui agit comme une source audio.</p>
</div>

<p>Un <code>MediaElementSourceNode</code> n'a pas d'entrée et une seule sortie. On le créé en utilisant la méthode {{domxref("AudioContext.createMediaStreamSource")}}. Le nombre de canaux de sortie est égal au nombre de canaux de {{domxref("AudioMediaStreamTrack")}}. S'il n'y a pas de media stream valide, alors la sortie sera constituée d'un seul canal silencieux.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Nombre d'entrées</th>
   <td><code>0</code></td>
  </tr>
  <tr>
   <th scope="row">Nombre de sorties</th>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">Nombre de canaux</th>
   <td>Défini par {{domxref("AudioMediaStreamTrack")}} et passé à la méthode {{domxref("AudioContext.createMediaStreamSource")}} qui le créé.</td>
  </tr>
 </tbody>
</table>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode()")}}</dt>
 <dd>Créé une nouvelle instance de <code>MediaStreamAudioSourceNode</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, </em><em>{{domxref("AudioNode")}}</em>.</p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite des méthdoes de son parent, </em><em>{{domxref("AudioNode")}}</em>.</p>

<h2 id="Exemple">Exemple</h2>

<p>{{page("/fr-FR/docs/Web/API/AudioContext.createMediaStreamSource","Example")}}</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#the-mediastreamaudiosourcenode-interface', 'MediaStreamAudioSourceNode')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.MediaStreamAudioSourceNode")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utilisation de l'API Web Audio</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
  <li><a href="/en-US/docs/Web/API/Media_Streams_API">API de capture et de diffusion de médias (Media Streams)</a></li>
  <li>{{domxref("MediaStreamTrackAudioSourceNode")}}</li>
 </ul>
 
