---
title: HTMLMediaElement.captureStream()
slug: Web/API/HTMLMediaElement/captureStream
tags:
  - API
  - Audio
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Media Capture DOM Elements
  - Method
  - Reference
  - Video
  - captureStream
translation_of: Web/API/HTMLMediaElement/captureStream
---
<div>{{APIRef("HTML Media Capture")}}</div>

<p><strong><code>captureStream()</code></strong> est une méthode de l'interface {{domxref("HTMLMediaElement")}} retournant un objet {{domxref('MediaStream')}} qui diffuse en temps réel l'enregistrement d'un contenu obtenu dans un élément média.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>mediaStream</em> = mediaElement.captureStream()</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Retours">Retours</h3>

<p>Un objet {{domxref('MediaStream')}} pouvant être utilisé en tant que source pour des données audio et/ou vidéo par d'autres média traitant du code, ou comme source pour <a href="/en-US/docs/Glossary/WebRTC">WebRTC</a>.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, un écouteur d'événement est mise en place, permettant la capture du contenu d'un élément média avec l'ID <code>"playback"</code> dans un {{domxref("MediaStream")}} lors d'un clic sur un bouton de lancement. La flux peut être utilisée dans d'autres buts—comme une source de diffusion via WebRTC, vous permettant de partager des vidéos pré-enregistrées avec une autre personne lors d'un appel video.</p>

<pre class="brush: js">document.querySelector('.playAndRecord').addEventListener('click', function() {
  var playbackElement = document.getElementById("playback");
  var captureStream = playbackElement.captureStream();
  playbackElement.play();
});
</pre>

<p>Voir <a href="/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element">Recording a media element</a> pour des exemples et explications plus détaillées et complexes.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Capture DOM Elements','#widl-HTMLMediaElement-captureStream-MediaStream','captureStream()')}}</td>
   <td>{{Spec2('Media Capture DOM Elements')}}</td>
   <td>Déclaration initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités">Compatibilités</h2>

<div>


<p>{{Compat("api.HTMLMediaElement.captureStream")}}</p>

<h3 id="Firefox-notes_spécifiques">Firefox-notes spécifiques</h3>
</div>

<p>Avant Firefox 51, vous ne pouviez pas utiliser <code>captureStream()</code> sur un élément média dont la source était, lui-même, un objet {{domxref("MediaStream")}} (comme un élément {{HTMLElement("video")}} présentant un flux reçu à travers un {{domxref("RTCPeerConnection")}}). Au commencement de  51, ça fonctionne. ce qui veut dire que vous pouvez capturer le flux d'un élément video et utiliser {{domxref("MediaRecorder")}} pour l'enregistrer. Voir {{bug(1259788)}} pour plus de détails.</p>

<p>Cependant, <code>captureStream()</code> reste préfixé <code>mozCaptureStream()</code> sur Firefox pour une bonne raison: il y a quelques etrangetés dans l'implémentation actuelle qui mérite d'être soulignées :</p>

<ul>
 <li>Actuellement, l'implémentation de Firefox fonctionne uniquement (comme décrit dans les spécifications) quand la source de l'élément média est elle-même, donc une instance {{domxref("MediaStream")}}.</li>
 <li>Si la source de l'élément média n'est pas un <code>MediaStream</code>, la sortie de cette méthode n'est pas compatible avec les spécifications, et si vous changez la source après avoir commencé la capture, la sortie de la capture du flux ne peut accepter les nouvelles données source suite à une incompatibilité, donc aucun  {{domxref("MediaStreamTrack")}}s sera ajouté de la nouvelle source <code>MediaStream</code> au flux capturé, résultant d'une sortie n'ayant pas capturé la source mise à jour.</li>
 <li>Repasser la source en <code>MediaStream</code> ajoute des pistes au flux et fonctionne de nouveau comme prévu.</li>
 <li>L'appel à <code>mozCaptureMediaStream()</code> sur un élément avec une source <code>MediaStream</code> retourne un flux qui contient uniquement les pistes jouées par un <code>MediaStream</code>.</li>
 <li>Si vous appellez <code>mozCaptureMediaStream()</code> sur un élément média sans source, son mode de compatibilité va se baser sur la première source ayant été ajoutée; Par exemple, Si c'est un <code>MediaStream</code>, alors la capture du flux va seulement fonctionner avec une source MediaStream à partir de ce moment.</li>
 <li>Ce comportement particulier va être supprimer un fois que le support des sources non-<code>MediaStream</code> aura atteint la spécification et que la méthode ne sera plus préfixée. Voir {{bug(1259788, "bug", 160)}} pour plus de détails.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element">Recording a media element</a></li>
 <li><a href="/en-US/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a></li>
 <li>{{domxref("HTMLCanvasElement.captureStream()")}}</li>
 <li>{{domxref("MediaStream")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
</ul>
